"use client";

import { useLocale } from "@/context/LocaleContext";

/** Official Iceland & travel forecast links */
const FORECAST_LINKS = {
  aurora: {
    url: "https://en.vedur.is/weather/forecasts/aurora/",
    en: { title: "Northern Lights (Aurora) Forecast", desc: "Icelandic Met Office – cloud cover & aurora activity (0–9). Best for planning when to look." },
    "zh-TW": { title: "極光預報", desc: "冰島氣象局 – 雲量與極光活動指數（0–9），方便安排觀賞時間。" },
  },
  icelandWeather: {
    url: "https://en.vedur.is/",
    en: { title: "Iceland Weather Forecast", desc: "Official Icelandic Met Office – weather across Iceland." },
    "zh-TW": { title: "冰島天氣預報", desc: "冰島氣象局官方 – 全冰島天氣。" },
  },
  weatherMaps: {
    url: "https://en.vedur.is/weather/forecasts/",
    en: { title: "Weather maps & regional forecasts", desc: "Wind, precipitation, and regional forecasts with maps." },
    "zh-TW": { title: "天氣圖與區域預報", desc: "風力、降水與區域預報地圖。" },
  },
  roadConditions: {
    url: "https://road.is/",
    en: { title: "Road Conditions (road.is)", desc: "Iceland road status – essential for winter self-drive." },
    "zh-TW": { title: "路況查詢 (road.is)", desc: "冰島道路狀況 – 冬季自駕必查。" },
  },
  avalanche: {
    url: "https://en.vedur.is/avalanches/forecast",
    en: { title: "Avalanche forecast", desc: "Regional avalanche bulletins (Oct–Jun). Check if you plan to go near steep, snow-covered slopes." },
    "zh-TW": { title: "雪崩預報", desc: "區域雪崩公報（10月–6月）。若前往陡峭積雪區請先查閱。" },
  },
  safeTravel: {
    url: "https://www.safetravel.is/",
    en: { title: "Safe Travel Iceland", desc: "Travel safely – weather, alerts, and safety info." },
    "zh-TW": { title: "Safe Travel Iceland", desc: "安全旅遊 – 天氣、警示與安全資訊。" },
  },
} as const;

export function ForecastLinksSection() {
  const { t, locale } = useLocale();
  const lang = locale === "zh-TW" ? "zh-TW" : "en";

  return (
    <section className="rounded-2xl border border-ice-700/50 bg-ice-950/60 p-6 shadow-xl backdrop-blur-sm dark:border-glacier-dark/50 dark:bg-ice-950/80 sm:p-8">
      <h2 className="mb-1 text-lg font-semibold text-white sm:text-xl">
        {t("forecastLinksTitle")}
      </h2>
      <p className="mb-6 text-sm text-frost-slate">
        {t("forecastLinksSubtitle")}
      </p>

      <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-glacier-mid">
        {t("forecastTipsTitle")}
      </h3>
      <div className="mb-6 grid gap-3 sm:grid-cols-1 md:grid-cols-3">
        <div className="rounded-lg border border-ice-700/40 bg-ice-900/30 p-3">
          <p className="font-medium text-glacier-light">{t("forecastAuroraTipTitle")}</p>
          <p className="mt-1 text-xs text-frost-slate">{t("forecastAuroraTipBody")}</p>
        </div>
        <div className="rounded-lg border border-ice-700/40 bg-ice-900/30 p-3">
          <p className="font-medium text-glacier-light">{t("forecastRoadTipTitle")}</p>
          <p className="mt-1 text-xs text-frost-slate">{t("forecastRoadTipBody")}</p>
        </div>
        <div className="rounded-lg border border-ice-700/40 bg-ice-900/30 p-3">
          <p className="font-medium text-glacier-light">{t("forecastSafeTipTitle")}</p>
          <p className="mt-1 text-xs text-frost-slate">{t("forecastSafeTipBody")}</p>
        </div>
      </div>

      <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-glacier-mid">
        {t("forecastOfficialLinks")}
      </h3>
      <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {(Object.keys(FORECAST_LINKS) as (keyof typeof FORECAST_LINKS)[]).map((key) => {
          const item = FORECAST_LINKS[key];
          const { title, desc } = item[lang];
          return (
            <li key={key}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border border-ice-700/40 bg-ice-900/40 p-3 transition hover:border-glacier-mid/60 hover:bg-ice-800/50"
              >
                <span className="font-medium text-glacier-light">{title}</span>
                <p className="mt-1 text-sm text-frost-slate">{desc}</p>
                <span className="mt-2 inline-block break-all text-xs text-glacier-mid">
                  {item.url}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
