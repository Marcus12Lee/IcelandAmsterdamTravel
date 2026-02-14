"use client";

import { useLocale } from "@/context/LocaleContext";
import type { Locale } from "@/lib/translations";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();
  const isZh = locale === "zh-TW";

  return (
    <button
      type="button"
      onClick={() => setLocale((isZh ? "en" : "zh-TW") as Locale)}
      className="rounded-lg border border-ice-600/60 bg-ice-900/80 px-4 py-2 text-sm font-medium text-glacier-light transition hover:bg-ice-800/80 hover:text-white"
      aria-label={isZh ? t("switchToEnglish") : t("switchToChinese")}
    >
      {isZh ? t("switchToEnglish") : t("switchToChinese")}
    </button>
  );
}
