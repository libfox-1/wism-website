import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, company, service, message, honeypot } = body;

  if (honeypot) return NextResponse.json({ success: true });

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  if (message.length > 2000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  if (process.env.NODE_ENV === "development") {
    console.log("[DEV] Contact form submission:", { firstName, lastName, email, company, service, message });
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Wism.io", email: process.env.CONTACT_EMAIL },
        to: [{ email: process.env.CONTACT_EMAIL }],
        replyTo: { email, name: `${firstName} ${lastName}` },
        subject: `Enquiry from ${firstName} ${lastName}${company ? ` — ${company}` : ""}`,
        htmlContent: `
          <h2 style="font-family:sans-serif;color:#204390;">New enquiry via Wism.io</h2>
          <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">
            <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600;">Name</td><td>${firstName} ${lastName}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600;">Company</td><td>${company || "—"}</td></tr>
            <tr><td style="padding:6px 16px 6px 0;color:#6b7280;font-weight:600;">Service</td><td>${service || "—"}</td></tr>
          </table>
          <h3 style="font-family:sans-serif;color:#111827;margin-top:24px;">Message</h3>
          <p style="font-family:sans-serif;font-size:14px;color:#374151;line-height:1.6;">${message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Brevo error:", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
