"use client";

import Link from "next/link";
import { TripPlansSection } from "@/components/TripPlansSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/context/LocaleContext";
import { getTripPlanProps } from "@/lib/tripPlans";
import { itinerary } from "@/data/itinerary";

export default function AmsTripPlansPage() {
  const { t } = useLocale();
  const props = getTripPlanProps(itinerary.amsTripPlans);

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="mb-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-frost-white sm:text-4xl">
            {itinerary.tripName}
          </h1>
          <p className="mt-2 text-frost-slate">{t("travelCompanion")}</p>
          <Link
            href="/"
            className="mt-2 inline-block text-sm text-glacier-mid underline hover:text-glacier-light"
          >
            ← {t("backToDashboard")}
          </Link>
        </div>
        <LanguageToggle />
      </header>

      <div className="mb-8">
        <TripPlansSection
          title={t("amsTripPlans")}
          subtitle={t("amsTripPlansSubtitle")}
          groups={props.groups}
          items={props.items}
          emptyMessage={t("emptyPlansHint")}
        />
      </div>

      <footer className="mt-10 border-t border-ice-800/60 pt-6 text-center text-sm text-frost-slate">
        {t("footer")}
      </footer>
    </main>
  );
}
