"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function ServiceLines() {
  const { t, locale } = useLanguage();
  const s = t.serviceLines;

  return (
    <section className="py-16 md:py-24 relative">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">{s.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Microsoft Consultancy */}
          <div className="group relative bg-gradient-card border border-border/60 rounded-3xl p-8 md:p-10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow overflow-hidden flex flex-col">
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
            <div className="ocean-blob bg-ocean-deep w-[300px] h-[300px] -bottom-20 -right-20 opacity-40" />
            <div className="relative flex flex-col flex-1">
              <div className="w-12 h-12 rounded-xl bg-white border border-border/60 flex items-center justify-center mb-6 shadow-sm">
                <Image src="/icons/microsoft.svg" alt="Microsoft Consultancy" width={28} height={28} className="object-contain" />
              </div>
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{s.consultancy.label}</p>
              <p className="text-foreground/80 leading-relaxed mb-8">{s.consultancy.description}</p>
              <a
                href={`/${locale}/consultancy`}
                className="inline-flex items-center gap-2 font-semibold text-sm text-primary hover:gap-3 transition-all mt-auto"
              >
                {s.consultancy.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Wism Web Studio */}
          <div className="group relative bg-gradient-card border border-border/60 rounded-3xl p-8 md:p-10 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow overflow-hidden flex flex-col">
            <div className="absolute inset-0 rounded-3xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
            <div className="ocean-blob bg-ocean-teal w-[300px] h-[300px] -bottom-20 -right-20 opacity-40" />
            <div className="relative flex flex-col flex-1">
              <div className="w-12 h-12 rounded-xl bg-white border border-border/60 flex items-center justify-center mb-6 shadow-sm">
                <Image src="/logo-blue.svg" alt="Wism Web Studio" width={28} height={28} className="object-contain" />
              </div>
              <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">{s.studio.label}</p>
              <p className="text-foreground/80 leading-relaxed mb-8">{s.studio.description}</p>
              <a
                href={`/${locale}/studio`}
                className="inline-flex items-center gap-2 font-semibold text-sm text-primary hover:gap-3 transition-all mt-auto"
              >
                {s.studio.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
