/**
 * Travel Companion – Itinerary types
 * Modular so you can add hotel locations and more details later.
 */

export type LocationCode = "TPE" | "HKG" | "AMS" | "KEF";

export interface FlightLeg {
  departure: LocationCode;
  arrival: LocationCode;
  departureTime: string; // "20:15"
  arrivalTime: string;   // "22:20" or "06:30+1"
  /** Optional: for display e.g. "20:15–22:20" */
  displayTime?: string;
}

export interface FlightEvent {
  type: "flight";
  legs: FlightLeg[];
  /** e.g. "TPE -> HKG -> AMS" */
  summary: string;
}

export interface ActivityEvent {
  type: "activity";
  title: string;
  description?: string;
  /** Optional: for future map/hotel integration */
  location?: string;
  locationCode?: LocationCode;
  time?: string;
}

export interface DayEvent {
  type: "day";
  title: string;
  description?: string;
  /** Placeholder for daily stops – add specific locations later */
  stops?: string[];
}

export type ItineraryEvent = FlightEvent | ActivityEvent | DayEvent;

/** Hotel for a given night (fill in when you have bookings) */
export interface DayHotel {
  name: string;
  address?: string;
  phone?: string;
  /** Google Maps link (search or place URL) */
  mapUrl?: string;
  /** For map integration */
  coordinates?: { lat: number; lng: number };
}

export interface ItineraryDay {
  date: string; // "2025-02-19"
  label: string; // "Feb 19"
  /** Day plan: short summary or list of activities */
  plan?: string | string[];
  /** Where you're staying this night (optional) */
  hotel?: DayHotel;
  /** Time-based notes / schedule for this day */
  notes?: string | string[];
  /** Sub-links under notes (e.g. map links for meeting points) */
  noteLinks?: { text: string; url: string }[];
  /** 注意事項： reminders and cautions (separate section) */
  reminders?: string | string[];
  events: ItineraryEvent[];
  /** Optional: for map integration */
  coordinates?: { lat: number; lng: number }[];
}

/** One place or plan item: plain string or rich object with optional link, time, note, coordinates */
export type TripPlanItem =
  | string
  | { text: string; url?: string; time?: string; note?: string; lat?: number; lng?: number };

/** Group of trip plan items with an optional section header (e.g. "阿姆斯特丹核心") */
export interface TripPlanGroup {
  section: string;
  items: TripPlanItem[];
}

/** Extra stops to show on the Iceland map (e.g. restaurants, POIs) */
export interface IcelandMapStop {
  lat: number;
  lng: number;
  label?: string;
  mapUrl?: string;
}

export interface Itinerary {
  tripName: string;
  days: ItineraryDay[];
  /** Key events used for countdown (e.g. first flight, next flight) */
  keyDates?: { label: string; isoDateTime: string }[];
  /** Amsterdam: can be flat list or grouped by section */
  amsTripPlans?: TripPlanItem[] | TripPlanGroup[];
  /** Iceland: places and plans, flat or grouped by section */
  icelandTripPlans?: TripPlanItem[] | TripPlanGroup[];
  /** Extra stops for Iceland map (restaurants, POIs). Merged after hotels. */
  icelandMapExtraStops?: IcelandMapStop[];
}
