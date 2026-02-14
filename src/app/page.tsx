"use client";

import Link from "next/link";
import { CountdownTimer } from "@/components/CountdownTimer";
import { ItineraryTimeline } from "@/components/ItineraryTimeline";
import { ForecastLinksSection } from "@/components/ForecastLinksSection";
import { IcelandMap } from "@/components/IcelandMap";
import { AmsterdamMap } from "@/components/AmsterdamMap";
import { DriverInfoSection } from "@/components/DriverInfoSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/context/LocaleContext";
import { itinerary } from "@/data/itinerary";
import { drivers } from "@/data/drivers";
import { getIcelandRoute, getAmsterdamStops } from "@/lib/getIcelandRoute";

export default function DashboardPage() {
  const { t } = useLocale();
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-frost-white sm:text-4xl">
            {itinerary.tripName}
          </h1>
          <p className="mt-2 text-frost-slate">{t("travelCompanion")}</p>
        </div>
        <LanguageToggle />
      </header>

      <div className="mb-6">
        <CountdownTimer keyDates={itinerary.keyDates ?? []} />
      </div>

      <div className="mb-8">
        <ItineraryTimeline days={itinerary.days} />
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="/trip-plans/ams"
          className="group block rounded-2xl border border-glacier-mid/40 bg-[#002D52] px-6 py-5 text-left shadow-lg ring-1 ring-glacier-mid/20 transition hover:border-glacier-mid/60 hover:ring-glacier-mid/40"
        >
          <h3 className="text-xl font-bold text-white">{t("amsTripPlans")}</h3>
          <p className="mt-1 text-sm text-white/90">{t("amsTripPlansSubtitle")}</p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-glacier-mid/20 px-4 py-2 text-sm font-medium text-white group-hover:bg-glacier-mid/30">
            {t("viewAmsTripPlans")}
            <span className="text-glacier-light">→</span>
          </span>
        </Link>
        <Link
          href="/trip-plans/iceland"
          className="group block rounded-2xl border border-glacier-mid/40 bg-[#002D52] px-6 py-5 text-left shadow-lg ring-1 ring-glacier-mid/20 transition hover:border-glacier-mid/60 hover:ring-glacier-mid/40"
        >
          <h3 className="text-xl font-bold text-white">{t("icelandTripPlans")}</h3>
          <p className="mt-1 text-sm text-white/90">{t("icelandTripPlansSubtitle")}</p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-glacier-mid/20 px-4 py-2 text-sm font-medium text-white group-hover:bg-glacier-mid/30">
            {t("viewIcelandTripPlans")}
            <span className="text-glacier-light">→</span>
          </span>
        </Link>
      </div>

      <div className="mb-8">
        <ForecastLinksSection />
      </div>
      <div className="mb-8">
        <IcelandMap route={getIcelandRoute(itinerary.days)} />
      </div>
      <div className="mb-8">
        <AmsterdamMap points={getAmsterdamStops(itinerary.days)} />
      </div>

      <div className="mb-8">
        <DriverInfoSection drivers={drivers} />
      </div>

      <footer className="mt-10 border-t border-ice-800/60 pt-6 text-center text-sm text-frost-slate">
        {t("footer")}
      </footer>
    </main>
  );
}
