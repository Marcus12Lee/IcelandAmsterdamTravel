"use client";

import type { TripPlanItem, TripPlanGroup } from "@/types/itinerary";

type LinkStyle = "default" | "button-transparent";

/** Iceland page: every link = same light blue (like 天空之湖溫泉). Only links containing this stay a different color (light gray). */
const EXPERIENCE_SHARE_PREFIX = "→ 體驗分享";

interface TripPlansSectionProps {
  title: string;
  subtitle?: string;
  items?: TripPlanItem[];
  groups?: TripPlanGroup[];
  emptyMessage?: string;
  /** When "button-transparent", links are styled as transparent pill/buttons (Iceland page). */
  linkStyle?: LinkStyle;
}

function PlanItem({ item, i, linkStyle = "default" }: { item: TripPlanItem; i: number; linkStyle?: LinkStyle }) {
  const text = typeof item === "string" ? item : item.text;
  const url = typeof item === "string" ? undefined : item.url;
  const time = typeof item === "string" ? undefined : item.time;
  const note = typeof item === "string" ? undefined : item.note;

  const isExperienceShare = typeof text === "string" && text.includes(EXPERIENCE_SHARE_PREFIX);

  const getLinkClasses = () => {
    if (linkStyle !== "button-transparent" || !url) return "";
    const base = "inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition";
    if (isExperienceShare) {
      return `${base} border-white/25 bg-white/5 text-gray-400 hover:border-white/40 hover:bg-white/10 hover:text-gray-200`;
    }
    return `${base} border-[#38bdf8] bg-[#0ea5e9]/25 text-[#bae6fd] hover:border-[#7dd3fc] hover:bg-[#0ea5e9]/40 hover:text-[#7dd3fc]`;
  };

  return (
    <li className="flex items-start gap-2 rounded-lg border border-white/10 bg-surface-light/50 px-3 py-2 text-sm text-frost-slate">
      <span className="mt-0.5 shrink-0 text-frost-silver">•</span>
      <div className="min-w-0 flex-1">
        {url ? (
          linkStyle === "button-transparent" ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={getLinkClasses()}
            >
              {text}
            </a>
          ) : (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light underline decoration-accent/60 underline-offset-2 hover:text-accent hover:decoration-accent"
            >
              {text}
            </a>
          )
        ) : (
          <span>{text}</span>
        )}
        {time && (
          <p className="mt-0.5 text-xs text-frost-slate">時間：{time}</p>
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
  linkStyle = "default",
}: TripPlansSectionProps) {
  const hasGroups = groups && groups.length > 0;
  const flatItems = hasGroups ? [] : items;
  const hasFlat = flatItems.length > 0;

  return (
    <section className="rounded-2xl border border-white/10 bg-surface/90 p-6 shadow-xl backdrop-blur-sm">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      {subtitle && <p className="mt-1 text-xs text-frost-slate">{subtitle}</p>}
      {hasGroups ? (
        <div className="mt-4 space-y-4">
          {groups!.map((group, gi) => (
            <div key={gi}>
              <h3 className="mb-2 text-sm font-medium text-frost-silver">
                {group.section}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <PlanItem key={i} item={item} i={i} linkStyle={linkStyle} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : hasFlat ? (
        <ul className="mt-4 space-y-2">
          {flatItems.map((item, i) => (
            <PlanItem key={i} item={item} i={i} linkStyle={linkStyle} />
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm italic text-frost-slate">{emptyMessage}</p>
      )}
    </section>
  );
}
