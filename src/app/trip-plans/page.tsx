"use client";

import Link from "next/link";
import { TripPlansSection } from "@/components/TripPlansSection";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLocale } from "@/context/LocaleContext";
import type { TripPlanGroup, TripPlanItem } from "@/types/itinerary";
import { itinerary } from "@/data/itinerary";

function getTripPlanProps(plans: TripPlanItem[] | TripPlanGroup[] | undefined) {
  const a = plans ?? [];
  const first = a[0];
  const isGroups =
    a.length > 0 &&
    typeof first === "object" &&
    first !== null &&
    "section" in first &&
    "items" in first;
  return {
    groups: isGroups ? (a as TripPlanGroup[]) : undefined,
    items: !isGroups ? (a as TripPlanItem[]) : [],
  };
}

export default function TripPlansPage() {
  const { t } = useLocale();
  const ams = getTripPlanProps(itinerary.amsTripPlans);
  const ice = getTripPlanProps(itinerary.icelandTripPlans);

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

      <h2 className="mb-6 text-xl font-semibold text-frost-white sm:text-2xl">
        {t("tripPlansPageTitle")}
      </h2>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <TripPlansSection
          title={t("amsTripPlans")}
          subtitle={t("amsTripPlansSubtitle")}
          groups={ams.groups}
          items={ams.items}
          emptyMessage={t("emptyPlansHint")}
        />
        <TripPlansSection
          title={t("icelandTripPlans")}
          subtitle={t("icelandTripPlansSubtitle")}
          groups={ice.groups}
          items={ice.items}
          emptyMessage={t("emptyPlansHint")}
        />
      </div>

      <footer className="mt-10 border-t border-ice-800/60 pt-6 text-center text-sm text-frost-slate">
        {t("footer")} <code className="rounded bg-ice-800/80 px-1">src/data/itinerary.ts</code>
      </footer>
    </main>
  );
}
