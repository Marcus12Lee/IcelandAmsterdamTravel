"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useLocale } from "@/context/LocaleContext";
import type { RoutePoint } from "@/lib/getIcelandRoute";

function MapLoadingPlaceholder() {
  const { t } = useLocale();
  return (
    <div className="flex h-full min-h-[280px] items-center justify-center rounded-xl border border-ice-700/50 bg-ice-900/50 text-frost-slate">
      {t("loading")}
    </div>
  );
}

const AmsterdamMapInner = dynamic(
  () => import("./AmsterdamMapInner").then((m) => m.AmsterdamMapInner),
  { ssr: false, loading: () => <MapLoadingPlaceholder /> }
);

interface AmsterdamMapProps {
  points?: RoutePoint[];
}

export function AmsterdamMap({ points = [] }: AmsterdamMapProps) {
  const { t } = useLocale();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="rounded-2xl border border-ice-700/50 bg-ice-950/60 p-6 shadow-xl backdrop-blur-sm dark:border-glacier-dark/50 dark:bg-ice-950/80">
      <h2 className="mb-4 text-lg font-semibold text-white">{t("mapTitleAmsterdam")}</h2>
      <p className="mb-3 text-sm text-frost-slate">{t("mapDescriptionAmsterdam")}</p>
      {mounted ? (
        <AmsterdamMapInner points={points} />
      ) : (
        <div className="flex min-h-[280px] items-center justify-center rounded-xl border border-ice-700/50 bg-ice-900/50 text-frost-slate">
          {t("loading")}
        </div>
      )}
    </section>
  );
}
