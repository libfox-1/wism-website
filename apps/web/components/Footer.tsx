"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      className="border-t border-white/10 text-white/70"
      style={{
        background:
          "repeating-linear-gradient(120deg, transparent 0 120px, rgba(255,255,255,0.04) 120px 124px), linear-gradient(135deg, #2a4b9b 0%, #1d3a7a 55%, #0e1f4a 100%)",
      }}
    >
      <div className="container py-2 flex flex-row items-center justify-between gap-3">
        <a href="#" className="flex items-center gap-2 group">
          <Image
            src="/wism-icon.svg"
            alt="Wism.io"
            width={32}
            height={32}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-base font-semibold text-white tracking-tight">
            Wism<span className="text-[hsl(195,85%,60%)]">.io</span>
          </span>
        </a>

        <p className="text-sm text-white/50">{t.footer.copyright}</p>

        <a
          href="mailto:hello@wism.io"
          className="text-sm text-white/70 hover:text-white transition-colors"
        >
          {t.footer.email}
        </a>
      </div>
    </footer>
  );
}
