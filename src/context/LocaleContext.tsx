"use client";

import { createContext, useContext, useState, useCallback, useEffect } from "react";
import { translations, translateKeyDateLabel, type Locale } from "@/lib/translations";

const STORAGE_KEY = "iceland-travel-locale";

export type TFunc = (key: keyof (typeof translations)["en"]) => string;
type TKeyDate = (label: string) => string;

interface LocaleContextValue {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: TFunc;
  tKeyDate: TKeyDate;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "zh-TW" || stored === "en") setLocaleState(stored);
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    if (typeof localStorage !== "undefined") localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const t: TFunc = useCallback(
    (key) => (mounted ? translations[locale][key] : translations.en[key]),
    [locale, mounted]
  );

  const tKeyDate: TKeyDate = useCallback(
    (label) => (mounted ? translateKeyDateLabel(label, locale) : label),
    [locale, mounted]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, tKeyDate }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
