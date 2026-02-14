"use client";

import type { TripPlanItem } from "@/types/itinerary";

interface TripPlansSectionProps {
  title: string;
  subtitle?: string;
  items: TripPlanItem[];
  emptyMessage?: string;
}

export function TripPlansSection({
  title,
  subtitle,
  items,
  emptyMessage = "Add your plans and places in src/data/itinerary.ts",
}: TripPlansSectionProps) {
  return (
    <section className="rounded-2xl border border-ice-700/50 bg-ice-950/60 p-6 shadow-xl backdrop-blur-sm dark:border-glacier-dark/50 dark:bg-ice-950/80">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-1 text-xs text-frost-slate">{subtitle}</p>}
      {items.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 rounded-lg border border-ice-700/40 bg-ice-900/40 px-3 py-2 text-sm text-frost-slate"
            >
              <span className="mt-0.5 shrink-0 text-glacier-mid">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm italic text-frost-slate">{emptyMessage}</p>
      )}
    </section>
  );
}
