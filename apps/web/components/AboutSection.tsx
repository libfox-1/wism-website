"use client";

import { ArrowRight, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AboutSection() {
  const { t, locale } = useLanguage();
  const a = t.about;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl animate-glow-pulse" />

        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8">
              <span className="text-xs font-medium text-muted-foreground">{a.eyebrow}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-6">
              {a.titleA} <br />
              <span className="text-gradient">{a.titleB}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {a.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 relative">
        <div className="ocean-blob bg-ocean-teal w-[500px] h-[500px] -top-20 -right-40 opacity-30" />
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">

            {/* Left: story */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{a.approachTitle}</h2>
              <div className="space-y-4">
                {a.approach.map((p, i) => (
                  <p key={i} className="text-foreground/80 leading-relaxed">{p}</p>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href={`/${locale}/contact`}
                  className="inline-flex items-center gap-2 bg-gradient-primary text-white font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity shadow-glow"
                >
                  {a.ctaButton} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: certifications */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{a.certsTitle}</h2>
              <div className="grid gap-3">
                {a.certs.map((cert) => (
                  <div
                    key={cert}
                    className="flex items-center gap-3 bg-gradient-card border border-border/60 rounded-2xl px-5 py-4"
                  >
                    <BadgeCheck className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
