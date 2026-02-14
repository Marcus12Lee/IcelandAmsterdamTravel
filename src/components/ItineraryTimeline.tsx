"use client";

import { useLocale, type TFunc } from "@/context/LocaleContext";
import type { ItineraryDay, FlightEvent, ActivityEvent, DayEvent, DayHotel } from "@/types/itinerary";

interface ItineraryTimelineProps {
  days: ItineraryDay[];
}

function PlanHotelNotes({
  plan,
  hotel,
  notes,
  t,
}: {
  plan?: string | string[];
  hotel?: DayHotel;
  notes?: string | string[];
  t: TFunc;
}) {
  const hasPlan = plan !== undefined && (Array.isArray(plan) ? plan.length > 0 : plan.trim() !== "");
  const hasHotel = hotel?.name?.trim() !== "";
  const hasNotes = notes !== undefined && (Array.isArray(notes) ? notes.length > 0 : notes.trim() !== "");

  if (!hasPlan && !hasHotel && !hasNotes) return null;

  return (
    <div className="rounded-lg border border-ice-700/40 bg-ice-900/30 p-3 sm:p-4">
      {hasPlan && (
        <div className="mb-2">
          <span className="text-xs font-semibold uppercase text-glacier-mid">{t("plan")}</span>
          {Array.isArray(plan) ? (
            <ul className="mt-1 list-inside list-disc text-sm text-frost-slate">
              {plan.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-sm text-frost-slate">{plan}</p>
          )}
        </div>
      )}
      {hasHotel && (
        <div>
          <span className="text-xs font-semibold uppercase text-glacier-mid">{t("hotel")}</span>
          <p className="mt-1 font-medium text-white">{hotel!.name}</p>
          {hotel!.address && (
            <p className="text-sm text-frost-slate">{hotel!.address}</p>
          )}
          {hotel!.phone && (
            <p className="text-sm text-frost-slate">
              <a href={`tel:${hotel!.phone.replace(/\s/g, "")}`} className="hover:text-glacier-light">{hotel!.phone}</a>
            </p>
          )}
          {hotel!.mapUrl && (
            <a
              href={hotel!.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-medium text-glacier-light underline decoration-glacier-mid underline-offset-2 hover:text-glacier-light hover:decoration-glacier-light"
            >
              {t("viewOnGoogleMaps")}
            </a>
          )}
        </div>
      )}
      {hasNotes && (
        <div className={hasHotel || hasPlan ? "mt-2 border-t border-ice-700/40 pt-2" : ""}>
          <span className="text-xs font-semibold uppercase text-glacier-mid">{t("notes")}</span>
          {Array.isArray(notes) ? (
            <ul className="mt-1 space-y-1.5 text-sm text-frost-slate">
              {notes.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="shrink-0 text-glacier-mid">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-1 text-sm text-frost-slate">{notes}</p>
          )}
        </div>
      )}
    </div>
  );
}

function RemindersBlock({ reminders, t }: { reminders: string | string[]; t: TFunc }) {
  const items = Array.isArray(reminders) ? reminders : [reminders];
  return (
    <div className="rounded-lg border border-amber-900/50 bg-amber-950/30 p-3 sm:p-4">
      <span className="text-xs font-semibold uppercase text-amber-400">{t("reminders")}</span>
      <ul className="mt-1 space-y-1.5 text-sm text-frost-slate">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="shrink-0 text-amber-500">⚠</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FlightBlock({ event, t }: { event: FlightEvent; t: TFunc }) {
  return (
    <div className="rounded-lg border border-ice-700/40 bg-ice-900/40 p-3 sm:p-4">
      <span className="text-xs font-semibold uppercase text-glacier-mid">{t("flight")}</span>
      <p className="font-medium text-white">{event.summary}</p>
      {event.legs.map((leg, i) => (
        <p key={i} className="mt-1 text-sm text-frost-slate">
          {leg.displayTime ?? `${leg.departureTime}–${leg.arrivalTime}`} ({leg.departure} → {leg.arrival})
        </p>
      ))}
    </div>
  );
}

function ActivityBlock({ event }: { event: ActivityEvent }) {
  return (
    <div className="rounded-lg border border-ice-700/40 bg-ice-900/40 p-3 sm:p-4">
      <p className="font-medium text-white">{event.title}</p>
      {event.description && <p className="text-sm text-frost-slate">{event.description}</p>}
      {event.time && <p className="text-xs text-glacier-mid">{event.time}</p>}
    </div>
  );
}

function DayBlock({ event }: { event: DayEvent }) {
  return (
    <div className="rounded-lg border border-ice-700/40 bg-ice-900/40 p-3 sm:p-4">
      <p className="font-medium text-white">{event.title}</p>
      {event.description && <p className="text-sm text-frost-slate">{event.description}</p>}
      {event.stops?.length ? (
        <ul className="mt-2 list-inside list-disc text-sm text-frost-slate">
          {event.stops.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function ItineraryTimeline({ days }: ItineraryTimelineProps) {
  const { t } = useLocale();
  return (
    <section className="rounded-2xl border border-ice-700/50 bg-ice-950/60 p-6 sm:p-8 shadow-xl backdrop-blur-sm dark:border-glacier-dark/50 dark:bg-ice-950/80">
      <h2 className="mb-6 text-xl font-semibold text-white sm:text-2xl">{t("itinerary")}</h2>
      <div className="flex max-h-[75vh] min-h-[420px] flex-col gap-8 overflow-y-auto pr-3 scrollbar-thin scrollbar-track-ice-900 scrollbar-thumb-ice-600">
        {days.map((day) => (
          <div key={day.date} className="flex gap-5">
            <div className="flex shrink-0 flex-col items-center">
              <span className="rounded-lg bg-glacier-dark px-3 py-1.5 text-sm font-semibold text-glacier-light">
                {day.label}
              </span>
              <div className="mt-2 h-full w-px bg-ice-700" />
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-3 pb-2">
              {[...day.events]
                .sort((a, b) => (a.type === "flight" && b.type !== "flight" ? -1 : b.type === "flight" && a.type !== "flight" ? 1 : 0))
                .map((event, i) => (
                  <div key={`${day.date}-${i}`}>
                    {event.type === "flight" && <FlightBlock event={event} t={t} />}
                    {event.type === "activity" && <ActivityBlock event={event} />}
                    {event.type === "day" && <DayBlock event={event} />}
                  </div>
                ))}
              <PlanHotelNotes plan={day.plan} hotel={day.hotel} notes={day.notes} t={t} />
              {day.reminders !== undefined &&
                (Array.isArray(day.reminders) ? day.reminders.length > 0 : day.reminders.trim() !== "") && (
                  <RemindersBlock reminders={day.reminders!} t={t} />
                )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
