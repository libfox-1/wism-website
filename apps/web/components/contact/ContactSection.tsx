"use client";

import { Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const { t } = useLanguage();
  const c = t.contact;

  const details = [
    { icon: <Mail className="w-5 h-5" />, label: c.details.emailLabel, value: "hello@wism.io", href: "mailto:hello@wism.io" },
    { icon: <MapPin className="w-5 h-5" />, label: c.details.locationLabel, value: c.details.locationValue, href: null as string | null },
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8">
            <span className="text-xs font-medium text-muted-foreground">{c.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6">{c.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{c.description}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Left: details + steps */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-card border border-border/60 rounded-3xl p-6 space-y-5">
              {details.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-card border border-border/60 rounded-3xl p-6">
              <h2 className="font-bold mb-5">{c.stepsTitle}</h2>
              <div className="space-y-5">
                {c.steps.map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                      {s.step}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{s.title}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{s.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
