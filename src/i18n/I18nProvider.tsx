import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Locale } from "@/i18n/translations";
import { translations } from "@/i18n/translations";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof translations)[Locale];
};

const I18nContext = createContext<I18nContextValue | null>(null);

function getInitialLocale(): Locale {
  // Always return "es" for initial render (SSR + client first paint) to avoid hydration mismatch
  return "es";
}

function getBrowserLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem("locale");
  if (stored === "es" || stored === "en") return stored;
  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  // Sync to browser preference after hydration
  useEffect(() => {
    const browserLocale = getBrowserLocale();
    if (browserLocale !== locale) {
      setLocaleState(browserLocale);
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("locale", nextLocale);
    }
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
}
