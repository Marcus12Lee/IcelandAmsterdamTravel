/**
 * Template prices for hotel sheet (matches PDF).
 * Key: itinerary date (e.g. "2025-02-20")
 */
export const hotelPricesTemplate: Record<string, { price: string; eachPays: string; notes: string }> = {
  "2025-02-20": { price: "374.65 EUR (2 nights)", eachPays: "124.88 EUR", notes: "Cancel by 2/18" },
  "2025-02-21": { price: "—", eachPays: "—", notes: "—" },
  "2025-02-22": { price: "165.60 EUR", eachPays: "55.20 EUR", notes: "" },
  "2025-02-23": { price: "439.36 EUR (2 nights)", eachPays: "146.45 EUR", notes: "" },
  "2025-02-24": { price: "—", eachPays: "—", notes: "—" },
  "2025-02-25": { price: "403.12 EUR (2 nights)", eachPays: "134.37 EUR", notes: "" },
  "2025-02-26": { price: "—", eachPays: "—", notes: "—" },
  "2025-02-27": { price: "283.44 EUR (2 nights)", eachPays: "94.48 EUR", notes: "" },
  "2025-02-28": { price: "—", eachPays: "—", notes: "—" },
  "2025-03-01": { price: "160.05 EUR", eachPays: "53.35 EUR", notes: "" },
  "2025-03-02": { price: "354.39 EUR (2 nights)", eachPays: "118.13 EUR", notes: "Cancel by 2/28" },
  "2025-03-03": { price: "—", eachPays: "—", notes: "—" },
};

const STORAGE_KEY = "hotel-prices-sheet";

/** Parse EUR amount from string like "374.65 EUR (2 nights)" or "165.60" or "200 EUR" */
export function parsePrice(str: string): number | null {
  if (!str || typeof str !== "string") return null;
  const m = str.match(/[\d,]+\.?\d*/);
  if (!m) return null;
  const n = parseFloat(m[0].replace(/,/g, ""));
  return isNaN(n) ? null : n;
}

export interface HotelPriceRow {
  newPrice: string;
  notes: string;
}

export function loadHotelPrices(): Record<string, HotelPriceRow> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveHotelPrices(data: Record<string, HotelPriceRow>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore
  }
}
