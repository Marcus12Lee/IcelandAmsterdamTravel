"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useLocale } from "@/context/LocaleContext";
import type { RoutePoint } from "@/lib/getIcelandRoute";

const DEFAULT_ROUTE: RoutePoint[] = [
  { lat: 63.985, lng: -22.6056, label: "KEF Airport" },
  { lat: 64.1466, lng: -21.9426, label: "Reykjavík" },
];

function MapLoadingPlaceholder() {
  const { t } = useLocale();
  return (
    <div className="flex h-full min-h-[280px] items-center justify-center rounded-xl border border-ice-700/50 bg-ice-900/50 text-frost-slate">
      {t("loading")}
    </div>
  );
}

const MapInner = dynamic(
  () => import("./IcelandMapInner").then((m) => m.IcelandMapInner),
  { ssr: false, loading: () => <MapLoadingPlaceholder /> }
);

interface IcelandMapProps {
  /** Route from itinerary (KEF + Iceland hotels). If empty or not provided, shows default KEF → Reykjavík. */
  route?: RoutePoint[];
  /** Optional reference link shown below the map */
  referenceLink?: { text: string; url: string };
}

export function IcelandMap({ route: routeProp, referenceLink }: IcelandMapProps) {
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const route = routeProp && routeProp.length > 0 ? routeProp : DEFAULT_ROUTE;

  return (
    <section className="rounded-2xl border border-ice-700/50 bg-ice-950/60 p-6 shadow-xl backdrop-blur-sm dark:border-glacier-dark/50 dark:bg-ice-950/80">
      <h2 className="mb-4 text-lg font-semibold text-frost-white">{t("mapTitle")}</h2>
      <p className="mb-3 text-sm text-frost-slate">
        {t("mapDescription")}
      </p>
      {mounted ? (
        <MapInner route={route} />
      ) : (
        <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-ice-700/50 bg-ice-900/50 text-frost-slate">
          {t("loading")}
        </div>
      )}
      {referenceLink && (
        <a
          href={referenceLink.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-glacier-light underline hover:text-glacier-mid"
        >
          → {referenceLink.text}
        </a>
      )}
    </section>
  );
}
