"use client";

import { useEffect, useState } from "react";
import { getNextEvent, type CountdownResult } from "@/lib/countdown";
import { useLocale } from "@/context/LocaleContext";
import type { Itinerary } from "@/types/itinerary";

interface CountdownTimerProps {
  keyDates: Itinerary["keyDates"];
}

/** Full format: Mon, Feb 17, 2025, 10:30:00 AM */
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

/** Placeholder until mount so server and client match (avoids hydration error). */
function useLocalClocks() {
  const [clocks, setClocks] = useState(() =>
    LOCAL_CLOCKS.map(({ label }) => ({ label, value: "–" }))
  );
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!mounted) return;
    const update = () =>
      setClocks(
        LOCAL_CLOCKS.map(({ label, timeZone }) => ({
          label,
          value: formatLocalTime(new Date(), timeZone),
        }))
      );
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [mounted]);
  return clocks;
}

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
    </svg>
  );
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

  const title = tKeyDate(result.label);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-6 py-6 shadow-xl backdrop-blur-xl sm:px-8 sm:py-7">
      {/* Dotted line with plane moving toward title */}
      <div className="relative mb-4 flex items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-2">
          <span className="flex shrink-0 text-[#A7C4BC] animate-countdown-plane">
            <PlaneIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
          <span
            className="h-px flex-1 border-b border-dotted border-white/30"
            aria-hidden
          />
        </div>
        <p className="shrink-0 text-base font-semibold text-white sm:text-lg">
          {title}
        </p>
      </div>

      <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white/70">
        {t("countdownTo")}
      </p>

      {/* Time zones: label above time per city, centered */}
      <div className="mb-6 flex flex-col items-center gap-4 text-center">
        {localClocks.map(({ label, value }) => (
          <div key={label} className="flex flex-col gap-0.5">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
              {label === "Iceland" ? "Iceland:" : label}
            </p>
            <p className="font-mono text-sm tabular-nums text-white/90 sm:text-base" suppressHydrationWarning>
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Countdown blocks: mint green with glow */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
        {blocks.map(({ value, label }) => (
          <div
            key={label}
            className="flex min-w-[4rem] flex-col items-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
          >
            <span
              className="font-mono text-2xl font-bold tabular-nums sm:text-3xl"
              style={{
                color: "#A7C4BC",
                textShadow: "0 0 20px rgba(167, 196, 188, 0.5), 0 0 40px rgba(167, 196, 188, 0.25)",
              }}
              suppressHydrationWarning
            >
              {String(value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-xs font-medium text-white/70">{label}</span>
          </div>
        ))}
      </div>

      {(result.isPast || result.isToday) && (
        <p className="mt-4 text-center text-sm text-[#A7C4BC]">
          {result.isPast ? t("eventPassed") : t("today")}
        </p>
      )}
    </section>
  );
}
