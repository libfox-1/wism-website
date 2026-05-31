"use client";

import { useRef, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "w-full px-4 py-2.5 rounded-xl bg-background/50 border border-border/60 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";
const labelCls = "block text-sm font-semibold text-foreground/80 mb-1.5";

export default function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const data = new FormData(e.currentTarget);
    const payload = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      company: data.get("company"),
      service: data.get("service"),
      message: data.get("message"),
      honeypot: data.get("website"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setStatus("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-gradient-card border border-border/60 rounded-3xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">{f.successTitle}</h3>
        <p className="text-muted-foreground">{f.successDetail}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="bg-gradient-card border border-border/60 rounded-3xl p-8 space-y-5">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>{f.firstName}</label>
          <input name="firstName" type="text" required placeholder="Jane" className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>{f.lastName}</label>
          <input name="lastName" type="text" required placeholder="Smith" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls}>{f.email}</label>
        <input name="email" type="email" required placeholder="jane@company.com" className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>{f.company}</label>
        <input name="company" type="text" placeholder="Acme Ltd" className={inputCls} />
      </div>

      <div>
        <label className={labelCls}>{f.service}</label>
        <select name="service" className={inputCls + " cursor-pointer"}>
          <option value="">{f.servicePlaceholder}</option>
          {f.services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelCls}>{f.message}</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder={f.messagePlaceholder}
          className={inputCls + " resize-none"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500 font-medium">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-xl hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity shadow-glow"
      >
        {status === "submitting" ? f.submitting : f.submit}
      </button>
    </form>
  );
}
