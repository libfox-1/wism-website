"use client";

import { Check, Mail, LayoutGrid } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Pricing() {
  const { t, locale } = useLanguage();
  const s = t.studio;
  return (
    <section id="packages" className="py-24 md:py-32 relative">
      <div className="ocean-blob bg-ocean-sky w-[600px] h-[600px] -top-20 -right-40 animate-glow-pulse" />
      <div className="ocean-blob bg-ocean-aqua w-[500px] h-[500px] bottom-0 -left-40 animate-float" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-4">
            <LayoutGrid className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{s.pricing.eyebrow}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{s.pricing.title}</h2>
          <p className="text-lg text-muted-foreground">{s.pricing.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {s.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl p-8 flex flex-col ${
                tier.highlighted
                  ? "bg-gradient-primary text-white shadow-glow"
                  : "bg-gradient-card border border-border/60"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="bg-white text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {locale === "nl" ? "Meest gekozen" : "Most popular"}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                  {tier.name}
                </h3>
                <p className={`text-sm mb-4 ${tier.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                  {tier.description}
                </p>
                <div className="flex items-end gap-1">
                  <p className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                    {tier.price}
                  </p>
                  {tier.period && (
                    <span className={`text-sm font-medium mb-1 ${tier.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <p className={`text-xs mt-1 ${tier.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                  {tier.contract}
                </p>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className={`mt-0.5 w-4 h-4 rounded flex items-center justify-center flex-shrink-0 ${
                      tier.highlighted ? "bg-white/20" : "bg-primary/10 border border-primary/20"
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${tier.highlighted ? "text-white" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${tier.highlighted ? "text-white/90" : "text-foreground/80"}`}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@wism.io"
                className={`inline-flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-xl transition-all text-sm ${
                  tier.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "bg-gradient-primary text-white hover:opacity-90 shadow-glow"
                }`}
              >
                <Mail className="w-4 h-4" />
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-xl mx-auto text-center">
          <p className="text-xl font-semibold mb-2">{s.cta.title}</p>
          <p className="text-muted-foreground mb-6">{s.cta.description}</p>
          <a
            href="mailto:hello@wism.io"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Mail className="w-4 h-4" />
            {s.cta.primary}
          </a>
        </div>
      </div>
    </section>
  );
}
