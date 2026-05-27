import { NextRequest, NextResponse } from "next/server";

async function getGraphToken(): Promise<string> {
  const res = await fetch(
    `https://login.microsoftonline.com/${process.env.AZURE_TENANT_ID}/oauth2/v2.0/token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: process.env.AZURE_CLIENT_ID!,
        client_secret: process.env.AZURE_CLIENT_SECRET!,
        scope: "https://graph.microsoft.com/.default",
      }),
    }
  );
  const data = await res.json();
  if (!data.access_token) throw new Error("Failed to obtain Graph token");
  return data.access_token;
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
      remoteip: ip,
    }),
  });
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, company, service, message, turnstileToken, honeypot } = body;

  // Honeypot — silently succeed to avoid leaking detection to bots
  if (honeypot) return NextResponse.json({ success: true });

  // Basic validation
  if (!firstName || !lastName || !email || !message || !turnstileToken) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Turnstile verification
  const ip =
    req.headers.get("cf-connecting-ip") ??
    req.headers.get("x-forwarded-for") ??
    "";
  const turnstileOk = await verifyTurnstile(turnstileToken, ip);
  if (!turnstileOk) {
    return NextResponse.json({ error: "CAPTCHA verification failed." }, { status: 400 });
  }

  // Get Microsoft Graph token and send email
  try {
    const graphToken = await getGraphToken();

    const emailBody = `
      <h2 style="font-family:sans-serif;color:#204390;">New enquiry via Wism.io</h2>
      <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
        <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600;">Name</td><td>${firstName} ${lastName}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600;">Company</td><td>${company || "—"}</td></tr>
        <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600;">Service</td><td>${service || "—"}</td></tr>
      </table>
      <h3 style="font-family:sans-serif;color:#111827;margin-top:24px;">Message</h3>
      <p style="font-family:sans-serif;font-size:14px;color:#374151;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
    `;

    const mailRes = await fetch(
      `https://graph.microsoft.com/v1.0/users/${process.env.CONTACT_EMAIL}/sendMail`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${graphToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: {
            subject: `Enquiry from ${firstName} ${lastName}${company ? ` — ${company}` : ""}`,
            body: { contentType: "HTML", content: emailBody },
            toRecipients: [
              { emailAddress: { address: process.env.CONTACT_EMAIL } },
            ],
            replyTo: [
              { emailAddress: { address: email, name: `${firstName} ${lastName}` } },
            ],
          },
          saveToSentItems: true,
        }),
      }
    );

    if (!mailRes.ok) {
      const err = await mailRes.text();
      console.error("Graph sendMail error:", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
