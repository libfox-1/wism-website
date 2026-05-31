"use client";

import { createContext, useContext, useState } from "react";
import { translations, type Locale, type Translations } from "./translations";

type LanguageContextType = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
