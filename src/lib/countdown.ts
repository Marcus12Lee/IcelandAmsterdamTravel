import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from "date-fns";

export interface CountdownTarget {
  label: string;
  isoDateTime: string;
}

export interface CountdownResult {
  label: string;
  isoDateTime: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  isToday: boolean;
}

/**
 * Returns the next upcoming event from keyDates (or the last one if all are past).
 */
export function getNextEvent(keyDates: CountdownTarget[]): CountdownResult | null {
  const now = new Date();
  const sorted = [...keyDates]
    .map((k) => ({ ...k, date: new Date(k.isoDateTime) }))
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const next = sorted.find((s) => s.date > now) ?? sorted[sorted.length - 1] ?? null;
  if (!next) return null;

  const target = next.date;
  const isPast = target <= now;
  const isToday =
    target.getDate() === now.getDate() &&
    target.getMonth() === now.getMonth() &&
    target.getFullYear() === now.getFullYear();

  const d = Math.max(0, differenceInDays(target, now));
  const h = Math.max(0, differenceInHours(target, now) % 24);
  const m = Math.max(0, differenceInMinutes(target, now) % 60);
  const s = Math.max(0, differenceInSeconds(target, now) % 60);

  return {
    label: next.label,
    isoDateTime: next.isoDateTime,
    days: d,
    hours: h,
    minutes: m,
    seconds: s,
    isPast,
    isToday,
  };
}
