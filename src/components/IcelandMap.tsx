"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useLocale } from "@/context/LocaleContext";

// KEF: 63.9850, -22.6056; Reykjavik: 64.1466, -21.9426. Example route for self-drive from KEF.
const KEF = { lat: 63.985, lng: -22.6056 };
const REYKJAVIK = { lat: 64.1466, lng: -21.9426 };
const DEFAULT_ROUTE = [KEF, REYKJAVIK];

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

export function IcelandMap() {
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="rounded-2xl border border-ice-700/50 bg-ice-950/60 p-6 shadow-xl backdrop-blur-sm dark:border-glacier-dark/50 dark:bg-ice-950/80">
      <h2 className="mb-4 text-lg font-semibold text-white">{t("mapTitle")}</h2>
      <p className="mb-3 text-sm text-frost-slate">
        {t("mapDescription")}
      </p>
      {mounted ? (
        <MapInner route={DEFAULT_ROUTE} />
      ) : (
        <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-ice-700/50 bg-ice-900/50 text-frost-slate">
          {t("loading")}
        </div>
      )}
    </section>
  );
}
