"use client";

import { useLocale } from "@/context/LocaleContext";

const MINT = "#A7C4BC";
const GOOGLE_MAPS_ROUTE =
  "https://www.google.com/maps/dir/Amsterdam+Airport+Schiphol,+Evert+van+de+Beekstraat+202,+Schiphol,+Netherlands/Hotel+NH+Amsterdam+Noord,+Distelkade+21,+Amsterdam,+Nederland/data=!4m14!4m13!1m5!1m1!19sChIJLRb94DThxUcRiPHO8YMV1cc!2m2!1d4.7401699!2d52.312786599999995!1m5!1m1!19sChIJw7r95k0IxkcRMplP48jSq94!2m2!1d4.9106299999999994!2d52.39189!3e0";
const NS_APP_URL = "https://apps.apple.com/nl/app/ns/id317601592";

const CONTENT = {
  en: {
    title: "The Smart Way",
    titleSub: "最划算的交通方式",
    subtitle:
      "Save €40+ for 3 people compared to Uber! Use the reliable Dutch rail & metro network.",
    ovPayTitle: "OV-pay Guide",
    ovPaySub: "免買票感應教學",
    ovPayNoSetup: "No Setup:",
    ovPayNoSetupDesc: "Use Apple Pay, Google Pay, or Contactless Cards directly.",
    ovPayRule: "Rule:",
    ovPayRuleDesc: "Tap in and Tap out at the Yellow Sensors.",
    ovPayImportant: "Important:",
    ovPayImportantDesc:
      "You MUST use the same device/card to check in and out. (Phone in = Phone out).",
    routeTitle: "Route to Hotel: NH Amsterdam Noord",
    routeTitleCn: "前往飯店路線",
    step1: "Step 1: Airport to Central Station",
    step1Cn: "機場到中央車站",
    step1Desc:
      "Follow 'Trains' signs. Take the train to Amsterdam Centraal (approx. 15–20 mins).",
    step2: "Step 2: Transfer to Metro M52",
    step2Cn: "轉乘地鐵 M52 藍線",
    step2Desc:
      "Follow 'Metro' signs. Take Line 52 (Direction: Noord). Get off at Noorderpark (1 stop).",
    step3: "Step 3: Arrival",
    step3Cn: "抵達飯店",
    step3Desc:
      "8-minute walk from Noorderpark station or call for hotel shuttle.",
    btnMaps: "Open Google Maps Route",
    btnCall: "Call Hotel: +31 20 634 8000",
    btnNsApp: "Download NS App (Live Train Info)",
  },
  "zh-TW": {
    title: "The Smart Way",
    titleSub: "最划算的交通方式",
    subtitle: "三人行省下超過 €40！捨棄 Uber，利用最準確的荷蘭鐵路與地鐵系統。",
    ovPayTitle: "OV-pay Guide",
    ovPaySub: "免買票感應教學",
    ovPayNoSetup: "免設定：",
    ovPayNoSetupDesc: "直接使用 Apple Pay、Google Pay 或感應式信用卡。",
    ovPayRule: "規則：",
    ovPayRuleDesc: "在黃色感應柱進站感應 (Check-in)，出站感應 (Check-out)。",
    ovPayImportant: "鐵律：",
    ovPayImportantDesc:
      "務必「同進同出」。用手機進站就要用手機出站，不可混用手錶或實體卡。",
    routeTitle: "Route to Hotel: NH Amsterdam Noord",
    routeTitleCn: "前往飯店路線",
    step1: "Step 1: Airport to Central Station",
    step1Cn: "機場到中央車站",
    step1Desc: "沿著 'Trains' 指標走，搭火車前往 Amsterdam Centraal (約 15–20 分鐘)。",
    step2: "Step 2: Transfer to Metro M52",
    step2Cn: "轉乘地鐵 M52 藍線",
    step2Desc:
      "沿著 'Metro' 指標走，搭乘 52 號線 (往 Noord 方向)，搭 1 站到 Noorderpark 下車。",
    step3: "Step 3: Arrival",
    step3Cn: "抵達飯店",
    step3Desc: "下車後步行 8 分鐘，或撥打飯店電話詢問接駁車。",
    btnMaps: "Open Google Maps Route",
    btnCall: "Call Hotel: +31 20 634 8000",
    btnNsApp: "Download NS App (Live Train Info)",
  },
} as const;

export function NetherlandsTransitGuide() {
  const { locale } = useLocale();
  const lang = locale === "zh-TW" ? "zh-TW" : "en";
  const c = CONTENT[lang];

  return (
    <section className="rounded-2xl border border-white/10 bg-surface/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
      {/* 1. Header */}
      <header className="mb-6">
        <h2 className="text-lg font-semibold text-white sm:text-xl">
          {c.title}（{c.titleSub}）
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-frost-slate">
          {c.subtitle}
        </p>
      </header>

      {/* 2. OV-pay Guide */}
      <div className="mb-6 rounded-xl border border-white/10 bg-surface-light/50 p-4 backdrop-blur-sm">
        <h3 className="mb-3 text-base font-semibold text-white">
          {c.ovPayTitle}（{c.ovPaySub}）
        </h3>
        <ul className="space-y-3 text-sm">
          <li>
            <span className="font-medium" style={{ color: MINT }}>
              {c.ovPayNoSetup}{" "}
            </span>
            <span className="text-frost-slate">{c.ovPayNoSetupDesc}</span>
          </li>
          <li>
            <span className="font-medium" style={{ color: MINT }}>
              {c.ovPayRule}{" "}
            </span>
            <span className="text-frost-slate">{c.ovPayRuleDesc}</span>
          </li>
          <li className="rounded-lg bg-yellow-200/90 px-3 py-2 text-gray-800">
            <span className="font-semibold">
              {c.ovPayImportant}{" "}
            </span>
            <span>{c.ovPayImportantDesc}</span>
          </li>
        </ul>
      </div>

      {/* 3. Route to Hotel */}
      <div className="mb-6 rounded-xl border border-white/10 bg-surface-light/50 p-4 backdrop-blur-sm">
        <h3 className="mb-4 text-base font-semibold text-white">
          {c.routeTitle}（{c.routeTitleCn}）
        </h3>
        <ol className="space-y-4">
          <li>
            <span className="block text-xs font-medium uppercase tracking-wide text-frost-slate">
              {c.step1}（{c.step1Cn}）
            </span>
            <p className="mt-1 text-sm text-frost-slate">{c.step1Desc}</p>
          </li>
          <li>
            <span className="block text-xs font-medium uppercase tracking-wide text-frost-slate">
              {c.step2}（{c.step2Cn}）
            </span>
            <p className="mt-1 text-sm text-frost-slate">{c.step2Desc}</p>
          </li>
          <li>
            <span className="block text-xs font-medium uppercase tracking-wide text-frost-slate">
              {c.step3}（{c.step3Cn}）
            </span>
            <p className="mt-1 text-sm text-frost-slate">{c.step3Desc}</p>
          </li>
        </ol>
      </div>

      {/* 4. Interactive Buttons */}
      <div className="flex flex-wrap gap-3">
        <a
          href={GOOGLE_MAPS_ROUTE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/10 bg-surface-light/50 px-5 py-2.5 text-sm font-medium transition hover:border-[#A7C4BC]/40 hover:bg-surface-light/80"
          style={{ color: MINT }}
        >
          {c.btnMaps}
        </a>
        <a
          href="tel:+31206348000"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/10 bg-surface-light/50 px-5 py-2.5 text-sm font-medium text-frost-slate transition hover:border-[#A7C4BC]/40 hover:bg-surface-light/80 hover:text-white"
        >
          {c.btnCall}
        </a>
        <a
          href={NS_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/10 bg-surface-light/50 px-5 py-2.5 text-sm font-medium text-frost-slate transition hover:border-[#A7C4BC]/40 hover:bg-surface-light/80 hover:text-white"
        >
          {c.btnNsApp}
        </a>
      </div>
    </section>
  );
}
