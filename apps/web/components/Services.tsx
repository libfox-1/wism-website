"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [
  { src: "/icons/microsoft.svg", alt: "Advisory" },
  { src: "/icons/power-platform.svg", alt: "Power Platform" },
  { src: "/icons/dynamics365.svg", alt: "Dynamics 365" },
  { src: "/icons/copilot.svg", alt: "Microsoft Copilot" },
  { src: "/icons/azure.svg", alt: "Azure" },
  { src: "/icons/powerbi.svg", alt: "Power BI" },
];

export default function Services() {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
            {t.services.eyebrow}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.services.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-gradient-card border border-border/60 rounded-2xl p-7 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white border border-border/60 flex items-center justify-center mb-5 shadow-sm">
                  <Image
                    src={icons[i].src}
                    alt={icons[i].alt}
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
