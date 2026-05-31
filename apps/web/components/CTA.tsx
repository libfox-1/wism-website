"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function CTA() {
  const { t, locale } = useLanguage();
  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      <div className="ocean-blob bg-ocean-deep w-[600px] h-[600px] -top-20 left-1/2 -translate-x-1/2 animate-glow-pulse" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            {t.cta.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t.cta.titleA}{" "}
            <span className="text-gradient">{t.cta.titleB}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            {t.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-glow"
            >
              {t.cta.primary} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 glass text-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-white/80 transition-all"
            >
              {t.cta.secondary} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
