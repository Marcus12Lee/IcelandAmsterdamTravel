import type { ItineraryDay, IcelandMapStop } from "@/types/itinerary";

const KEF = { lat: 63.985, lng: -22.6056, label: "KEF Airport" };

/** Amsterdam nights: Feb 20–21, Mar 2–3 */
const AMS_DATES = ["2025-02-20", "2025-02-21", "2025-03-02", "2025-03-03"];

/** Iceland leg: Feb 22 – Mar 1 (inclusive) */
const ICELAND_START = "2025-02-22";
const ICELAND_END = "2025-03-01";

export interface RoutePoint {
  lat: number;
  lng: number;
  label?: string;
  mapUrl?: string;
}

/**
 * Builds the Iceland self-drive route from itinerary: KEF + hotels in order + extra stops.
 * Consecutive nights at the same hotel appear once.
 */
export function getIcelandRoute(
  days: ItineraryDay[],
  extraStops?: IcelandMapStop[]
): RoutePoint[] {
  const points: RoutePoint[] = [KEF];
  let lastCoords: string | null = null;

  const icelandDays = days.filter(
    (d) => d.date >= ICELAND_START && d.date <= ICELAND_END
  );

  for (const day of icelandDays) {
    const coords = day.hotel?.coordinates;
    if (!coords) continue;
    const key = `${coords.lat},${coords.lng}`;
    if (key === lastCoords) continue;
    lastCoords = key;
    points.push({
      lat: coords.lat,
      lng: coords.lng,
      label: day.hotel?.name,
      mapUrl: day.hotel?.mapUrl,
    });
  }

  if (extraStops?.length) {
    for (const stop of extraStops) {
      points.push({
        lat: stop.lat,
        lng: stop.lng,
        label: stop.label,
        mapUrl: stop.mapUrl,
      });
    }
  }

  return points;
}

/**
 * Builds Amsterdam hotel stops from itinerary (unique hotels with coordinates).
 */
export function getAmsterdamStops(days: ItineraryDay[]): RoutePoint[] {
  const points: RoutePoint[] = [];
  let lastKey: string | null = null;

  for (const day of days) {
    if (!AMS_DATES.includes(day.date)) continue;
    const coords = day.hotel?.coordinates;
    if (!coords) continue;
    const key = `${coords.lat},${coords.lng}`;
    if (key === lastKey) continue;
    lastKey = key;
    points.push({
      lat: coords.lat,
      lng: coords.lng,
      label: day.hotel?.name,
    });
  }

  return points;
}
