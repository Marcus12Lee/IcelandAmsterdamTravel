"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLocale } from "@/context/LocaleContext";
import { itinerary } from "@/data/itinerary";
import {
  hotelPricesTemplate,
  loadHotelPrices,
  saveHotelPrices,
  parsePrice,
  type HotelPriceRow,
} from "@/data/hotelPricesTemplate";

export default function HotelPricesPage() {
  const { t } = useLocale();
  const daysWithHotels = itinerary.days.filter((d) => d.hotel?.name?.trim());

  const [edits, setEdits] = useState<Record<string, HotelPriceRow>>({});

  useEffect(() => {
    setEdits(loadHotelPrices());
  }, []);

  const handleChange = (date: string, field: "newPrice" | "notes", value: string) => {
    setEdits((prev) => {
      const next = { ...prev };
      next[date] = { ...(prev[date] ?? { newPrice: "", notes: "" }), [field]: value };
      return next;
    });
  };

  const handleSave = () => {
    saveHotelPrices(edits);
    // Brief feedback
    const btn = document.getElementById("save-hotel-btn");
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = t("saved");
      setTimeout(() => { btn.textContent = orig; }, 1200);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (Object.keys(edits).length > 0) saveHotelPrices(edits);
    }, 500);
    return () => clearTimeout(timer);
  }, [edits]);

  // Compute effective price per row: use newPrice if valid, else template. Only "first night" rows have a value.
  const getEffectiveTotal = (date: string) => {
    const template = hotelPricesTemplate[date];
    if (!template || template.price === "—") return null;
    const row = edits[date];
    const fromNew = row?.newPrice ? parsePrice(row.newPrice) : null;
    const fromTemplate = parsePrice(template.price);
    return fromNew ?? fromTemplate ?? 0;
  };

  const totals = daysWithHotels.reduce(
    (acc, day) => {
      const v = getEffectiveTotal(day.date);
      if (v != null && v > 0) acc.sum += v;
      return acc;
    },
    { sum: 0 }
  );
  const eachPaysTotal = totals.sum / 3;

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="mb-8">
        <Link
          href="/"
          className="text-sm text-accent-light underline decoration-accent/60 underline-offset-2 hover:text-accent"
        >
          ← {t("backToDashboard")}
        </Link>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          {t("hotelPriceSheetTitle")}
        </h1>
        <p className="mt-2 text-frost-slate">{t("hotelPriceSheetSubtitle")}</p>
      </header>

      <div className="overflow-x-auto rounded-xl border border-white/10 bg-surface/90 backdrop-blur-sm">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 bg-white/5">
              <th className="px-4 py-3 font-semibold text-white">{t("date")}</th>
              <th className="px-4 py-3 font-semibold text-white">{t("hotel")}</th>
              <th className="px-4 py-3 font-semibold text-white">{t("address")}</th>
              <th className="px-4 py-3 font-semibold text-white">{t("phone")}</th>
              <th className="px-4 py-3 font-semibold text-accent-light">{t("price")}</th>
              <th className="px-4 py-3 font-semibold text-accent-light">{t("eachPays")}</th>
              <th className="px-4 py-3 font-semibold text-accent-light">{t("newPrice")}</th>
              <th className="px-4 py-3 font-semibold text-white">{t("notes")}</th>
            </tr>
          </thead>
          <tbody>
            {daysWithHotels.map((day) => {
              const template = hotelPricesTemplate[day.date] ?? { price: "", notes: "" };
              const row = edits[day.date] ?? { newPrice: "", notes: "" };
              return (
                <tr
                  key={day.date}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  <td className="px-4 py-3 text-frost-silver">{day.label}</td>
                  <td className="px-4 py-3 font-medium text-white">
                    {day.hotel!.name}
                  </td>
                  <td className="px-4 py-3 text-frost-slate">{day.hotel!.address ?? "—"}</td>
                  <td className="px-4 py-3 text-frost-slate">{day.hotel!.phone ?? "—"}</td>
                  <td className="px-4 py-3 text-frost-slate">
                    {template.price || "—"}
                  </td>
                  <td className="px-4 py-3 font-medium text-accent-light">
                    {(() => {
                      const v = getEffectiveTotal(day.date);
                      return v != null && v > 0 ? `${(v / 3).toFixed(2)} EUR` : (template.eachPays || "—");
                    })()}
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={row.newPrice}
                      onChange={(e) => handleChange(day.date, "newPrice", e.target.value)}
                      placeholder={t("newPricePlaceholder")}
                      className="w-full min-w-[100px] rounded border border-white/20 bg-white/5 px-2 py-1.5 text-sm text-white placeholder:text-frost-slate/50 focus:border-accent/50 focus:outline-none print:border-0 print:bg-transparent print:p-0"
                    />
                  </td>
                  <td className="px-4 py-2">
                    <input
                      type="text"
                      value={row.notes}
                      onChange={(e) => handleChange(day.date, "notes", e.target.value)}
                      placeholder={t("notesPlaceholder")}
                      className="w-full min-w-[100px] rounded border border-white/20 bg-white/5 px-2 py-1.5 text-sm text-white placeholder:text-frost-slate/50 focus:border-accent/50 focus:outline-none print:border-0 print:bg-transparent print:p-0"
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t-2 border-accent/50 bg-accent/10">
              <td colSpan={4} className="px-4 py-3 font-semibold text-white">
                {t("eachPaysTotal")}
              </td>
              <td className="px-4 py-3 text-frost-slate">
                {totals.sum.toLocaleString("en-US", { minimumFractionDigits: 2 })} EUR
              </td>
              <td className="px-4 py-3 font-semibold text-accent-light">
                {eachPaysTotal.toFixed(2)} EUR
              </td>
              <td colSpan={2} className="px-4 py-3 text-frost-slate">
                {t("eachPaysHint")}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          id="save-hotel-btn"
          onClick={handleSave}
          className="rounded-lg bg-accent px-4 py-3 font-medium text-black transition hover:bg-accent-light print:hidden"
        >
          {t("save")}
        </button>
        <a
          href="/Hotel-Prices-Summary.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 font-medium text-white transition hover:bg-white/10 print:hidden"
        >
          <span aria-hidden>📄</span>
          {t("downloadHotelPdf")}
        </a>
        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-4 py-3 font-medium text-white transition hover:bg-white/10 print:hidden"
        >
          {t("printOrSavePdf")}
        </button>
      </div>

      <p className="mt-4 text-xs text-frost-slate">
        {t("hotelPdfHint")}
      </p>
    </main>
  );
}
