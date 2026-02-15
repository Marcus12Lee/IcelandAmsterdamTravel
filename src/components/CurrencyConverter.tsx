"use client";

import { useState, useCallback } from "react";

/** Approximate rates (TWD as base). Real data can be fetched later. */
const RATES = {
  /** 1 EUR = 35 TWD */
  EUR_TO_TWD: 35,
  /** 1 USD = 32 TWD */
  USD_TO_TWD: 32,
  /** 100 ISK = 23 TWD → 1 ISK = 0.23 TWD */
  ISK_TO_TWD: 23 / 100,
} as const;

type Currency = "TWD" | "ISK" | "EUR" | "USD";

function toTWD(currency: Currency, amount: number): number {
  switch (currency) {
    case "TWD":
      return amount;
    case "EUR":
      return amount * RATES.EUR_TO_TWD;
    case "USD":
      return amount * RATES.USD_TO_TWD;
    case "ISK":
      return amount * RATES.ISK_TO_TWD;
    default:
      return amount;
  }
}

function fromTWD(currency: Currency, twd: number): number {
  switch (currency) {
    case "TWD":
      return twd;
    case "EUR":
      return twd / RATES.EUR_TO_TWD;
    case "USD":
      return twd / RATES.USD_TO_TWD;
    case "ISK":
      return twd / RATES.ISK_TO_TWD;
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
  const [valueInTWD, setValueInTWD] = useState(1000);
  const [editing, setEditing] = useState<{ currency: Currency; raw: string } | null>(null);

  const effectiveTWD = editing
    ? toTWD(editing.currency, parseFloat(editing.raw.replace(/,/g, "")) || 0)
    : valueInTWD;

  const handleChange = useCallback((currency: Currency, raw: string) => {
    setEditing((prev) =>
      prev?.currency === currency ? { currency, raw } : { currency, raw }
    );
  }, []);

  const handleBlur = useCallback(() => {
    if (editing) setValueInTWD(toTWD(editing.currency, parseFloat(editing.raw.replace(/,/g, "")) || 0));
    setEditing(null);
  }, [editing]);

  const handleFocus = useCallback((currency: Currency) => {
    const value = fromTWD(currency, effectiveTWD);
    setEditing({ currency, raw: formatDisplay(value, currency) });
  }, [effectiveTWD]);

  const handleRefresh = useCallback(() => {
    // Placeholder: will fetch real API data later
    return;
  }, []);

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
          className="flex h-9 w-9 items-center justify-center rounded-lg text-white/70 transition hover:bg-white/10 hover:text-[#A7C4BC]"
          title="Refresh rates (API coming soon)"
          aria-label="Refresh exchange rates"
        >
          <RefreshIcon className="h-5 w-5" />
        </button>
      </div>

      <p className="mb-5 text-xs text-white/60">
        Approximate rates. Base: TWD. Use for quick reference.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {CURRENCIES.map(({ key, label, symbol }) => {
          const isEditing = editing?.currency === key;
          const displayValue = isEditing && editing
            ? editing.raw
            : formatDisplay(fromTWD(key, effectiveTWD), key);
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
