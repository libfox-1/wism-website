"use client";

import { Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function WhyWism() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="ocean-blob bg-ocean-sky w-[700px] h-[700px] -top-40 -right-60 animate-glow-pulse" />
      <div className="ocean-blob bg-ocean-coral w-[500px] h-[500px] bottom-10 -left-40 animate-float" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
              {t.whyWism.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t.whyWism.titleA}{" "}
              <span className="text-gradient">{t.whyWism.titleB}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.whyWism.description}
            </p>
          </div>

          <div>
            <ul className="space-y-3">
              {t.whyWism.reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-md bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/90">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
