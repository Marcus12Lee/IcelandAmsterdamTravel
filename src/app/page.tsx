"use client";

import { CountdownTimer } from "@/components/CountdownTimer";
import { ItineraryTimeline } from "@/components/ItineraryTimeline";
import { WeatherModule } from "@/components/WeatherModule";
import { ForecastLinksSection } from "@/components/ForecastLinksSection";
import { IcelandMap } from "@/components/IcelandMap";
import { AmsterdamMap } from "@/components/AmsterdamMap";
import { TripPlansSection } from "@/components/TripPlansSection";
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
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
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

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <TripPlansSection
          title={t("amsTripPlans")}
          subtitle={t("amsTripPlansSubtitle")}
          items={itinerary.amsTripPlans ?? []}
          emptyMessage={t("emptyPlansHint")}
        />
        <TripPlansSection
          title={t("icelandTripPlans")}
          subtitle={t("icelandTripPlansSubtitle")}
          items={itinerary.icelandTripPlans ?? []}
          emptyMessage={t("emptyPlansHint")}
        />
      </div>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <WeatherModule />
        <AmsterdamMap points={getAmsterdamStops(itinerary.days)} />
      </div>
      <div className="mb-8">
        <ForecastLinksSection />
      </div>
      <div className="mb-8">
        <IcelandMap route={getIcelandRoute(itinerary.days)} />
      </div>

      <div className="mb-8">
        <DriverInfoSection drivers={drivers} />
      </div>

      <footer className="mt-10 border-t border-ice-800/60 pt-6 text-center text-sm text-frost-slate">
        {t("footer")} <code className="rounded bg-ice-800/80 px-1">src/data/itinerary.ts</code>
      </footer>
    </main>
  );
}
