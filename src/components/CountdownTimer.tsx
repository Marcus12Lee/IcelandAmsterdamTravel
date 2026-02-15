"use client";

import { useEffect, useState } from "react";
import { getNextEvent, type CountdownResult } from "@/lib/countdown";
import { useLocale } from "@/context/LocaleContext";
import type { Itinerary } from "@/types/itinerary";

interface CountdownTimerProps {
  keyDates: Itinerary["keyDates"];
}

/** Same format as Taipei: weekday, month day, year, HH:MM:SS AM/PM */
function formatLocalTime(date: Date, timeZone: string): string {
  return date.toLocaleString("en-CA", {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

const LOCAL_CLOCKS: { label: string; timeZone: string }[] = [
  { label: "Taipei", timeZone: "Asia/Taipei" },
  { label: "Amsterdam", timeZone: "Europe/Amsterdam" },
  { label: "Iceland", timeZone: "Atlantic/Reykjavik" },
];

function useLocalClocks() {
  const [clocks, setClocks] = useState(() =>
    LOCAL_CLOCKS.map(({ label, timeZone }) => ({
      label,
      value: formatLocalTime(new Date(), timeZone),
    }))
  );
  useEffect(() => {
    const id = setInterval(() => {
      setClocks(
        LOCAL_CLOCKS.map(({ label, timeZone }) => ({
          label,
          value: formatLocalTime(new Date(), timeZone),
        }))
      );
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return clocks;
}

export function CountdownTimer({ keyDates }: CountdownTimerProps) {
  const { t, tKeyDate } = useLocale();
  const [result, setResult] = useState<CountdownResult | null>(null);
  const localClocks = useLocalClocks();

  useEffect(() => {
    if (!keyDates?.length) return;
    const tick = () => setResult(getNextEvent(keyDates));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [keyDates]);

  if (!result) return null;

  const blocks = [
    { value: result.days, label: t("days") },
    { value: result.hours, label: t("hours") },
    { value: result.minutes, label: t("min") },
    { value: result.seconds, label: t("sec") },
  ];

  return (
    <section className="rounded-2xl border border-white/10 bg-surface/90 p-6 shadow-xl backdrop-blur-sm">
      <p className="mb-1 text-sm font-medium uppercase tracking-wider text-frost-silver">
        {t("countdownTo")}
      </p>
      <p className="mb-2 text-lg font-semibold text-white">{tKeyDate(result.label)}</p>
      <div className="mb-4 space-y-3">
        {localClocks.map(({ label, value }) => (
          <p key={label} className="text-sm leading-relaxed text-frost-slate sm:text-base">
            <span className="font-semibold text-frost-silver">{label}:</span>{" "}
            <span className="tabular-nums">{value}</span>
          </p>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {blocks.map(({ value, label }) => (
          <div
            key={label}
            className="flex min-w-[4rem] flex-col items-center rounded-xl bg-surface-light/80 px-4 py-3 ring-1 ring-white/10"
          >
            <span className="font-mono text-2xl font-bold tabular-nums text-accent-light sm:text-3xl">
              {String(value).padStart(2, "0")}
            </span>
            <span className="text-xs font-medium text-frost-slate">{label}</span>
          </div>
        ))}
      </div>
      {(result.isPast || result.isToday) && (
        <p className="mt-3 text-center text-sm text-accent-light">
          {result.isPast ? t("eventPassed") : t("today")}
        </p>
      )}
    </section>
  );
}
