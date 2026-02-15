"use client";

import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "currency-rates";

/** Rates: 1 unit of currency = X TWD */
type Rates = {
  EUR_TO_TWD: number;
  USD_TO_TWD: number;
  ISK_TO_TWD: number;
};

const FALLBACK_RATES: Rates = {
  EUR_TO_TWD: 34.5,
  USD_TO_TWD: 31.38,
  ISK_TO_TWD: 23 / 100,
};

type Currency = "TWD" | "ISK" | "EUR" | "USD";

function toTWD(rates: Rates, currency: Currency, amount: number): number {
  switch (currency) {
    case "TWD":
      return amount;
    case "EUR":
      return amount * rates.EUR_TO_TWD;
    case "USD":
      return amount * rates.USD_TO_TWD;
    case "ISK":
      return amount * rates.ISK_TO_TWD;
    default:
      return amount;
  }
}

function fromTWD(rates: Rates, currency: Currency, twd: number): number {
  switch (currency) {
    case "TWD":
      return twd;
    case "EUR":
      return twd / rates.EUR_TO_TWD;
    case "USD":
      return twd / rates.USD_TO_TWD;
    case "ISK":
      return twd / rates.ISK_TO_TWD;
    default:
      return twd;
  }
}

const CURRENCIES: { key: Currency; label: string; symbol: string }[] = [
  { key: "TWD", label: "New Taiwan Dollar", symbol: "NT$" },
  { key: "ISK", label: "Icelandic Króna", symbol: "kr" },
  { key: "EUR", label: "Euro", symbol: "€" },
  { key: "USD", label: "US Dollar", symbol: "$" },
];

function getToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function loadFromStorage(): { rates: Rates; lastUpdated: string } | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as { rates: Rates; lastUpdated: string };
    if (data.rates && data.lastUpdated) return data;
    return null;
  } catch {
    return null;
  }
}

function saveToStorage(rates: Rates, lastUpdated: string): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ rates, lastUpdated }));
  } catch {
    // ignore
  }
}

/**
 * Fetch rates with USD as base so we get 1 USD = x TWD directly (correct ~31.38).
 * Frankfurter: base=USD → 1 USD = rates.TWD TWD, 1 USD = rates.EUR EUR, etc.
 */
async function fetchRates(): Promise<{ rates: Rates; date: string }> {
  const url =
    "https://api.frankfurter.dev/v1/latest?base=USD&symbols=TWD,EUR,ISK";
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch rates");
  const json = (await res.json()) as {
    base: string;
    date: string;
    rates: { TWD?: number; EUR?: number; ISK?: number };
  };
  const r = json.rates;
  const usdToTwd = r.TWD ?? FALLBACK_RATES.USD_TO_TWD;
  const usdToEur = r.EUR ?? 0.92;
  const usdToIsk = r.ISK ?? 140;
  return {
    rates: {
      USD_TO_TWD: usdToTwd,
      EUR_TO_TWD: usdToTwd / (usdToEur || 1),
      ISK_TO_TWD: usdToTwd / (usdToIsk || 1),
    },
    date: json.date,
  };
}

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 21h5v-5" />
    </svg>
  );
}

function formatDisplay(n: number, currency: Currency): string {
  if (currency === "ISK") return Math.round(n).toString();
  return n % 1 === 0 ? n.toString() : n.toFixed(2);
}

export function CurrencyConverter() {
  const [rates, setRates] = useState<Rates>(FALLBACK_RATES);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [valueInTWD, setValueInTWD] = useState(1000);
  const [editing, setEditing] = useState<{ currency: Currency; raw: string } | null>(null);

  const effectiveTWD = editing
    ? toTWD(rates, editing.currency, parseFloat(editing.raw.replace(/,/g, "")) || 0)
    : valueInTWD;

  const loadRates = useCallback(async (forceFetch = false) => {
    const cached = loadFromStorage();
    const today = getToday();
    if (!forceFetch && cached && cached.lastUpdated === today) {
      setRates(cached.rates);
      setLastUpdated(cached.lastUpdated);
      setLoading(false);
      setError(null);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const { rates: newRates, date } = await fetchRates();
      setRates(newRates);
      setLastUpdated(date);
      saveToStorage(newRates, date);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load rates");
      if (cached) {
        setRates(cached.rates);
        setLastUpdated(cached.lastUpdated);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadRates();
  }, [loadRates]);

  const handleChange = useCallback((currency: Currency, raw: string) => {
    setEditing((prev) =>
      prev?.currency === currency ? { currency, raw } : { currency, raw }
    );
  }, []);

  const handleBlur = useCallback(() => {
    if (editing) setValueInTWD(toTWD(rates, editing.currency, parseFloat(editing.raw.replace(/,/g, "")) || 0));
    setEditing(null);
  }, [editing, rates]);

  const handleFocus = useCallback((currency: Currency) => {
    const value = fromTWD(rates, currency, effectiveTWD);
    setEditing({ currency, raw: formatDisplay(value, currency) });
  }, [effectiveTWD, rates]);

  const handleRefresh = useCallback(() => {
    loadRates(true);
  }, [loadRates]);

  return (
    <section
      className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 px-6 py-6 shadow-xl backdrop-blur-xl sm:px-8 sm:py-7"
      aria-labelledby="currency-converter-title"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2
          id="currency-converter-title"
          className="text-lg font-semibold text-white sm:text-xl"
        >
          Currency converter
        </h2>
        <button
          type="button"
          onClick={handleRefresh}
          disabled={loading}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-[#A7C4BC] disabled:opacity-50"
          title="Refresh exchange rates"
          aria-label="Refresh exchange rates"
        >
          <RefreshIcon className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>

      <p className="mb-1 text-xs text-white/60">
        Base: TWD. Rates from ECB via Frankfurter API.
      </p>
      {lastUpdated && (
        <p className="mb-5 text-xs text-white/50">
          Updated: {lastUpdated}
          {loading && " (refreshing…)"}
        </p>
      )}
      {!lastUpdated && !loading && <div className="mb-5" />}
      {error && (
        <p className="mb-5 text-xs text-amber-300/90">{error}</p>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {CURRENCIES.map(({ key, label, symbol }) => {
          const isEditing = editing?.currency === key;
          const displayValue = isEditing && editing
            ? editing.raw
            : formatDisplay(fromTWD(rates, key, effectiveTWD), key);
          const isActive = isEditing;
          return (
            <div key={key} className="flex flex-col gap-1.5">
              <label
                htmlFor={`currency-${key}`}
                className="flex items-center gap-2 text-xs font-medium text-white/70"
              >
                <span className="tabular-nums text-white/90" aria-hidden>
                  {symbol}
                </span>
                <span>{label}</span>
              </label>
              <input
                id={`currency-${key}`}
                type="text"
                inputMode="decimal"
                value={displayValue}
                onChange={(e) => handleChange(key, e.target.value)}
                onFocus={() => handleFocus(key)}
                onBlur={handleBlur}
                className="w-full rounded-xl border bg-white/5 px-4 py-3 font-mono text-base tabular-nums text-white placeholder-white/40 outline-none transition focus:ring-2 sm:text-lg"
                style={{
                  borderColor: isActive ? "#A7C4BC" : "rgba(255,255,255,0.15)",
                  boxShadow: isActive
                    ? "0 0 0 1px #A7C4BC, 0 0 12px rgba(167,196,188,0.2)"
                    : undefined,
                }}
                aria-label={`${label} amount`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
