"use client";

import Link from "next/link";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { ItineraryTimeline } from "@/components/ItineraryTimeline";
import { ForecastLinksSection } from "@/components/ForecastLinksSection";
import { IcelandMap } from "@/components/IcelandMap";
import { AmsterdamMap } from "@/components/AmsterdamMap";
import { DriverInfoSection } from "@/components/DriverInfoSection";
import { CarRentalArrivalGuide } from "@/components/CarRentalArrivalGuide";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/context/LocaleContext";
import { itinerary } from "@/data/itinerary";
import { drivers } from "@/data/drivers";
import { getIcelandRoute, getAmsterdamStops } from "@/lib/getIcelandRoute";

const cardClass =
  "rounded-2xl border border-white/10 bg-surface/90 shadow-xl backdrop-blur-sm transition hover:border-accent/30";

export default function DashboardPage() {
  const { t } = useLocale();
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      {/* Header: logo, nav, CTA */}
      <header className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:items-center">
        <Link href="/" className="flex items-center gap-2 text-frost-white">
          <span className="text-xl font-bold tracking-tight">{itinerary.tripName}</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link
            href="/trip-plans/ams"
            className="text-sm font-medium text-frost-slate transition hover:text-white"
          >
            Amsterdam
          </Link>
          <Link
            href="/trip-plans/iceland"
            className="text-sm font-medium text-frost-slate transition hover:text-white"
          >
            Iceland
          </Link>
          <LanguageToggle />
        </nav>
      </header>

      {/* Hero */}
      <section className="mb-20 flex flex-col items-center text-center sm:mb-24">
        <span className="mb-4 inline-block rounded-full border border-white/30 bg-white/5 px-4 py-1.5 text-sm text-frost-silver">
          {t("travelCompanion")}
        </span>
        <h1
          className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl"
          style={{
            textShadow: "0 0 24px rgba(167,196,188,0.35), 0 0 48px rgba(167,196,188,0.2)",
          }}
        >
          {itinerary.tripName}
        </h1>
        <p className="mt-6 max-w-xl text-lg font-normal text-frost-slate">
          {t("heroDescriptionLine1")}
        </p>
        <p className="mt-2 max-w-xl text-lg font-bold text-white">
          {t("heroDescriptionLine2")}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-wider">
          <span className="text-[#A7C4BC]">{t("heroTag1")}</span>
          <span className="text-white/30" aria-hidden>•</span>
          <span className="text-[#A7C4BC]">{t("heroTag2")}</span>
          <span className="text-white/30" aria-hidden>•</span>
          <span className="text-[#A7C4BC]">{t("heroTag3")}</span>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#trip-plans"
            className="rounded-full bg-white px-6 py-3 text-base font-bold text-black shadow-lg transition hover:bg-frost-silver"
          >
            {t("shortcutItinerary")}
          </a>
          <a
            href="#currency-converter"
            className="rounded-full bg-white px-6 py-3 text-base font-bold text-black shadow-lg transition hover:bg-frost-silver"
          >
            {t("shortcutCurrency")}
          </a>
          <a
            href="#weather-forecast"
            className="rounded-full bg-white px-6 py-3 text-base font-bold text-black shadow-lg transition hover:bg-frost-silver"
          >
            {t("shortcutWeatherForecast")}
          </a>
          <a
            href="#car-rental-arrival-guide"
            className="rounded-full bg-white px-6 py-3 text-base font-bold text-black shadow-lg transition hover:bg-frost-silver"
          >
            {t("shortcutCarRental")}
          </a>
        </div>
      </section>

      <div className="mb-8">
        <CountdownTimer keyDates={itinerary.keyDates ?? []} />
      </div>

      <div className="mb-8">
        <ItineraryTimeline days={itinerary.days} />
      </div>

      <section id="trip-plans" className="mb-8 scroll-mt-6">
        <h2 className="mb-4 text-xl font-semibold text-white">Trip plans</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/trip-plans/ams"
            className={`group block ${cardClass} px-6 py-5 text-left`}
          >
            <h3 className="text-xl font-bold text-white">{t("amsTripPlans")}</h3>
            <p className="mt-1 text-sm text-frost-slate">{t("amsTripPlansSubtitle")}</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent/20 px-4 py-2 text-sm font-medium text-accent-light transition group-hover:bg-accent/30">
              {t("viewAmsTripPlans")}
              <span aria-hidden>→</span>
            </span>
          </Link>
          <Link
            href="/trip-plans/iceland"
            className={`group block ${cardClass} px-6 py-5 text-left`}
          >
            <h3 className="text-xl font-bold text-white">{t("icelandTripPlans")}</h3>
            <p className="mt-1 text-sm text-frost-slate">{t("icelandTripPlansSubtitle")}</p>
            <span className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent/20 px-4 py-2 text-sm font-medium text-accent-light transition group-hover:bg-accent/30">
              {t("viewIcelandTripPlans")}
              <span aria-hidden>→</span>
            </span>
          </Link>
        </div>
      </section>

      <div id="currency-converter" className="mb-8 scroll-mt-6">
        <CurrencyConverter />
      </div>

      <div id="weather-forecast" className="mb-8 scroll-mt-6">
        <ForecastLinksSection />
      </div>
      <div className="mb-8">
        <IcelandMap route={getIcelandRoute(itinerary.days, itinerary.icelandMapExtraStops)} />
      </div>
      <div className="mb-8">
        <AmsterdamMap points={getAmsterdamStops(itinerary.days)} />
      </div>

      <div className="mb-8 space-y-8">
        <CarRentalArrivalGuide />
        <DriverInfoSection drivers={drivers} />
      </div>

      <footer className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-frost-slate">
        {t("footer")}
      </footer>
    </main>
  );
}
