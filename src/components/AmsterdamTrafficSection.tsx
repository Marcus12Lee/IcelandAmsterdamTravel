"use client";

import { useLocale } from "@/context/LocaleContext";

const MINT = "#A7C4BC";

/** Amsterdam public transport & traffic links */
const AMS_TRAFFIC_LINKS = {
  gvb: {
    url: "https://www.gvb.nl/en/travel-information/journey-planner",
    en: {
      title: "GVB Journey Planner",
      desc: "Amsterdam trams, metro, buses – plan routes within the city.",
    },
    "zh-TW": {
      title: "GVB 行程規劃",
      desc: "阿姆斯特丹電車、地鐵、公車 – 市區路線規劃。",
    },
  },
  "9292": {
    url: "https://9292.nl/en/",
    en: {
      title: "9292 – Dutch Transit Planner",
      desc: "All Netherlands: train, bus, tram, metro. Plan trips nationwide.",
    },
    "zh-TW": {
      title: "9292 – 荷蘭大眾運輸規劃",
      desc: "全荷蘭火車、公車、電車、地鐵。全國路線規劃。",
    },
  },
  ns: {
    url: "https://www.ns.nl/en/journeyplanner",
    en: {
      title: "NS Train Journey Planner",
      desc: "Dutch Railways – Schiphol–Amsterdam, Amsterdam–Rotterdam, etc.",
    },
    "zh-TW": {
      title: "NS 火車行程規劃",
      desc: "荷蘭鐵路 – 史基浦–阿姆斯特丹、阿姆斯特丹–鹿特丹等。",
    },
  },
  schiphol: {
    url: "https://www.schiphol.nl/en/page/transport-and-parking/",
    en: {
      title: "Schiphol Airport Transport",
      desc: "Trains, buses, taxis – getting to/from Amsterdam Airport.",
    },
    "zh-TW": {
      title: "史基浦機場交通",
      desc: "火車、公車、計程車 – 往返阿姆斯特丹機場。",
    },
  },
  gvbApp: {
    url: "https://www.gvb.nl/en/travel-information/gvb-app",
    en: {
      title: "GVB App",
      desc: "Live tram/bus locations, trip planner, e-tickets.",
    },
    "zh-TW": {
      title: "GVB App",
      desc: "即時電車/公車位置、行程規劃、電子票。",
    },
  },
} as const;

export function AmsterdamTrafficSection() {
  const { t, locale } = useLocale();
  const lang = locale === "zh-TW" ? "zh-TW" : "en";

  return (
    <section className="rounded-2xl border border-white/10 bg-surface/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
      <h2 className="mb-1 text-lg font-semibold text-white sm:text-xl">
        {t("amsTrafficTitle")}
      </h2>
      <p className="mb-6 text-sm text-frost-slate">{t("amsTrafficSubtitle")}</p>

      <ul className="grid gap-3 sm:grid-cols-1 md:grid-cols-2">
        {(Object.keys(AMS_TRAFFIC_LINKS) as (keyof typeof AMS_TRAFFIC_LINKS)[]).map(
          (key) => {
            const item = AMS_TRAFFIC_LINKS[key];
            const { title, desc } = item[lang];
            return (
              <li key={key}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-xl border border-white/10 bg-surface-light/50 p-4 transition hover:border-[#A7C4BC]/40 hover:bg-surface-light/80"
                >
                  <span
                    className="font-medium underline decoration-[#A7C4BC]/60 underline-offset-2 hover:text-[#A7C4BC]"
                    style={{ color: MINT }}
                  >
                    {title}
                  </span>
                  <p className="mt-1.5 text-sm text-frost-slate">{desc}</p>
                </a>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
}
