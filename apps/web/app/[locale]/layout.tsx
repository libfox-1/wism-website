import Nav from "@/components/Nav";
import { LanguageProvider } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/translations";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "nl" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale = (locale === "nl" ? "nl" : "en") as Locale;

  return (
    <LanguageProvider locale={safeLocale}>
      <div className="flex flex-col flex-1">
        <Nav />
        {children}
      </div>
    </LanguageProvider>
  );
}
