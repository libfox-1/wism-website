"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ConsultancyHero() {
  const { t, locale } = useLanguage();
  const h = t.consultancyHero;
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">{h.eyebrow}</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
            {h.titleA} <br />
            <span className="text-gradient">{h.titleB}</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {h.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-glow"
            >
              {h.ctaPrimary} <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center glass text-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-white/80 transition-all"
            >
              {h.ctaSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
