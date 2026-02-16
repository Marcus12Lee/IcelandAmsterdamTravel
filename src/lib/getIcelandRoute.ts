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

export interface IcelandHotelWithDates {
  name: string;
  address?: string;
  phone?: string;
  coordinates: { lat: number; lng: number };
  mapUrl?: string;
  /** e.g. "Feb 22" or "Feb 23–24" */
  dateRange: string;
}

/**
 * Returns unique Iceland hotels with date ranges and GPS coordinates (for offline MAPS.ME).
 */
export function getIcelandHotels(days: ItineraryDay[]): IcelandHotelWithDates[] {
  const icelandDays = days.filter(
    (d) => d.date >= ICELAND_START && d.date <= ICELAND_END
  );
  const result: IcelandHotelWithDates[] = [];
  let i = 0;

  while (i < icelandDays.length) {
    const day = icelandDays[i];
    const hotel = day.hotel;
    if (!hotel?.name?.trim() || !hotel.coordinates) {
      i++;
      continue;
    }
    const startLabel = day.label;
    let endLabel = startLabel;
    let j = i + 1;
    while (j < icelandDays.length) {
      const next = icelandDays[j];
      const nextKey = next.hotel?.coordinates
        ? `${next.hotel.coordinates.lat},${next.hotel.coordinates.lng}`
        : "";
      const currKey = `${hotel.coordinates.lat},${hotel.coordinates.lng}`;
      if (nextKey !== currKey) break;
      endLabel = next.label;
      j++;
    }
    const dateRange = startLabel === endLabel ? startLabel : `${startLabel}–${endLabel}`;
    result.push({
      name: hotel.name,
      address: hotel.address,
      phone: hotel.phone,
      coordinates: hotel.coordinates,
      mapUrl: hotel.mapUrl,
      dateRange,
    });
    i = j;
  }

  return result;
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
