"use client";

import { Workflow, Database, Bot, Plug } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [Database, Workflow, Bot, Plug];

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
          {t.services.items.map((s, i) => {
            const Icon = icons[i];
            return (
              <article
                key={s.title}
                className="group relative bg-gradient-card border border-border/60 rounded-2xl p-7 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
