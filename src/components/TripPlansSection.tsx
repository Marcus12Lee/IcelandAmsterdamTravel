"use client";

import type { TripPlanItem, TripPlanGroup } from "@/types/itinerary";

interface TripPlansSectionProps {
  title: string;
  subtitle?: string;
  items?: TripPlanItem[];
  groups?: TripPlanGroup[];
  emptyMessage?: string;
}

function PlanItem({ item, i }: { item: TripPlanItem; i: number }) {
  const text = typeof item === "string" ? item : item.text;
  const url = typeof item === "string" ? undefined : item.url;
  const time = typeof item === "string" ? undefined : item.time;
  const note = typeof item === "string" ? undefined : item.note;
  return (
    <li className="flex items-start gap-2 rounded-lg border border-ice-700/40 bg-ice-900/40 px-3 py-2 text-sm text-frost-slate">
      <span className="mt-0.5 shrink-0 text-glacier-mid">•</span>
      <div className="min-w-0">
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-glacier-light underline hover:text-glacier-mid"
          >
            {text}
          </a>
        ) : (
          <span>{text}</span>
        )}
        {time && (
          <p className="mt-0.5 text-xs text-glacier-mid">時間：{time}</p>
        )}
        {note && (
          <p className="mt-0.5 text-xs text-amber-400/90">Note：{note}</p>
        )}
      </div>
    </li>
  );
}

export function TripPlansSection({
  title,
  subtitle,
  items = [],
  groups,
  emptyMessage = "Add your plans and places in src/data/itinerary.ts",
}: TripPlansSectionProps) {
  const hasGroups = groups && groups.length > 0;
  const flatItems = hasGroups ? [] : items;
  const hasFlat = flatItems.length > 0;

  return (
    <section className="rounded-2xl border border-ice-700/50 bg-ice-950/60 p-6 shadow-xl backdrop-blur-sm dark:border-glacier-dark/50 dark:bg-ice-950/80">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-1 text-xs text-frost-slate">{subtitle}</p>}
      {hasGroups ? (
        <div className="mt-4 space-y-4">
          {groups!.map((group, gi) => (
            <div key={gi}>
              <h3 className="mb-2 text-sm font-medium text-glacier-mid">
                {group.section}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <PlanItem key={i} item={item} i={i} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : hasFlat ? (
        <ul className="mt-4 space-y-2">
          {flatItems.map((item, i) => (
            <PlanItem key={i} item={item} i={i} />
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm italic text-frost-slate">{emptyMessage}</p>
      )}
    </section>
  );
}
