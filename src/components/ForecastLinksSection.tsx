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
  stationForecasts: {
    url: "https://en.vedur.is/weather/forecasts/areas/",
    en: { title: "Station forecasts – Overview stations", desc: "Station forecasts for the whole country with forecast map and tables." },
    "zh-TW": { title: "測站預報 – 全冰島概覽", desc: "全冰島測站預報，含預報地圖與表格。" },
  },
  windTemperaturePrecip: {
    url: "https://en.vedur.is/weather/forecasts/elements/",
    en: { title: "Wind, temperature, precipitation forecasts", desc: "Wind, temperature, and precipitation maps by region and time." },
    "zh-TW": { title: "風力、溫度、降水預報", desc: "各地區與時段之風力、溫度、降水預報圖。" },
  },
  textForecast: {
    url: "https://en.vedur.is/weather/forecasts/text/",
    en: { title: "Text forecast", desc: "Written weather outlook and forecast for the next several days." },
    "zh-TW": { title: "文字預報", desc: "天氣展望與未來數日文字預報。" },
  },
  roadConditions: {
    url: "https://road.is/",
    en: { title: "Road Conditions (road.is)", desc: "Iceland road status – essential for winter self-drive." },
    "zh-TW": { title: "路況查詢 (road.is)", desc: "冰島道路狀況 – 冬季自駕必查。" },
  },
  avalanche: {
    url: "https://gottvedur.is/snjoflod/en/",
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
    <section className="rounded-2xl border border-white/10 bg-surface/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
      <h2 className="mb-1 text-lg font-semibold text-white sm:text-xl">
        {t("forecastLinksTitle")}
      </h2>
      <p className="mb-6 text-sm text-frost-slate">
        {t("forecastLinksSubtitle")}
      </p>

      <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-frost-silver">
        {t("forecastTipsTitle")}
      </h3>
      <div className="mb-6 grid gap-3 sm:grid-cols-1 md:grid-cols-3">
        <a
          href={FORECAST_LINKS.aurora.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border border-white/10 bg-surface-light/50 p-3 transition hover:border-accent/40 hover:bg-surface-light/80"
        >
          <p className="font-medium text-accent-light">{t("forecastAuroraTipTitle")}</p>
          <p className="mt-1 text-xs text-frost-slate">{t("forecastAuroraTipBody")}</p>
        </a>
        <a
          href={FORECAST_LINKS.roadConditions.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border border-white/10 bg-surface-light/50 p-3 transition hover:border-accent/40 hover:bg-surface-light/80"
        >
          <p className="font-medium text-accent-light">{t("forecastRoadTipTitle")}</p>
          <p className="mt-1 text-xs text-frost-slate">{t("forecastRoadTipBody")}</p>
        </a>
        <a
          href={FORECAST_LINKS.safeTravel.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border border-white/10 bg-surface-light/50 p-3 transition hover:border-accent/40 hover:bg-surface-light/80"
        >
          <p className="font-medium text-accent-light">{t("forecastSafeTipTitle")}</p>
          <p className="mt-1 text-xs text-frost-slate">{t("forecastSafeTipBody")}</p>
        </a>
      </div>

      <h3 className="mb-3 text-sm font-medium uppercase tracking-wide text-frost-silver">
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
                className="block rounded-lg border border-white/10 bg-surface-light/50 p-3 transition hover:border-accent/40 hover:bg-surface-light/80"
              >
                <span className="font-medium text-accent-light underline decoration-accent/60 underline-offset-2 hover:text-accent hover:decoration-accent">{title}</span>
                <p className="mt-1 text-sm text-frost-slate">{desc}</p>
                <span className="mt-2 inline-block break-all text-xs text-accent/80">
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
