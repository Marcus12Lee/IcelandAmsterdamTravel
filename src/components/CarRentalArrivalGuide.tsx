"use client";

import { useLocale } from "@/context/LocaleContext";

const COMPANY = "Lotus Car Rental";
const BOOKING_NUMBER = "146568";
const CONTACT = "+354-787-4444";
const AIRPORT_MAP_URL =
  "https://imagedelivery.net/1rPpp4CONiPVv0BBaxsaQQ/6/Airport+Map.png/public";
const SHUTTLE_URL = "https://shuttle.lotuscarrental.is/";
const ASSISTANCE_URL = "https://assist.lotuscarrental.is/";
const MINT = "#A7C4BC";

export function CarRentalArrivalGuide() {
  const { t } = useLocale();

  return (
    <section
      id="car-rental-arrival-guide"
      className="scroll-mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-sm sm:p-8"
    >
      <h2 className="mb-1 text-lg font-semibold text-white sm:text-xl">
        {t("carRentalArrivalTitle")}
      </h2>
      <p className="mb-6 text-sm text-frost-slate">{t("carRentalArrivalSubtitle")}</p>

      {/* Quick Info Card - Booking Number */}
      <div className="mb-8 rounded-xl border border-white/10 bg-surface-light/80 p-4 backdrop-blur-sm">
        <p className="mb-0.5 text-xs font-medium uppercase tracking-wider text-frost-silver">
          {t("carRentalBookingLabel")}
        </p>
        <p className="text-2xl font-bold tabular-nums text-white sm:text-3xl">
          {BOOKING_NUMBER}
        </p>
        <p className="mt-2 text-sm text-frost-slate">
          {COMPANY}
          {" · "}
          <a
            href={`tel:${CONTACT.replace(/-/g, "")}`}
            className="font-medium text-[#A7C4BC] underline decoration-[#A7C4BC]/60 underline-offset-2 hover:text-[#A7C4BC]"
          >
            {CONTACT}
          </a>
        </p>
      </div>

      {/* 3-Step Vertical Timeline */}
      <div className="space-y-0">
        {/* Step 1: Arrival */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
              style={{ backgroundColor: `${MINT}30`, color: MINT }}
            >
              1
            </div>
            <div className="mt-2 h-full w-0.5 flex-1 bg-white/10" />
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white">{t("carRentalStep1Title")}</h3>
            <p className="mt-1 text-sm text-frost-slate">{t("carRentalStep1Desc")}</p>
          </div>
        </div>

        {/* Step 2: Meeting Point */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
              style={{ backgroundColor: `${MINT}30`, color: MINT }}
            >
              2
            </div>
            <div className="mt-2 h-full w-0.5 flex-1 bg-white/10" />
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-white">{t("carRentalStep2Title")}</h3>
            <p className="mt-1 text-sm text-frost-slate">{t("carRentalStep2Desc")}</p>
            <a
              href={AIRPORT_MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 px-5 py-2.5 text-sm font-semibold transition active:scale-[0.98]"
              style={{
                borderColor: MINT,
                backgroundColor: `${MINT}20`,
                color: MINT,
              }}
            >
              {t("carRentalViewMap")}
            </a>
          </div>
        </div>

        {/* Step 3: Shuttle */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
              style={{ backgroundColor: `${MINT}30`, color: MINT }}
            >
              3
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white">{t("carRentalStep3Title")}</h3>
            <p className="mt-1 text-sm text-frost-slate">{t("carRentalStep3Desc")}</p>
            <a
              href={SHUTTLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-[48px] items-center justify-center rounded-xl px-6 py-3 text-base font-bold text-[#0f172a] shadow-lg transition active:scale-[0.98]"
              style={{
                backgroundColor: MINT,
                boxShadow: `0 0 20px ${MINT}50`,
              }}
            >
              {t("carRentalBookShuttle")}
            </a>
          </div>
        </div>
      </div>

      {/* Assistance Link - Secondary Button */}
      <div className="mt-8 border-t border-white/10 pt-6">
        <a
          href={ASSISTANCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[40px] items-center justify-center rounded-lg border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-frost-slate transition hover:border-white/40 hover:bg-white/10 hover:text-white"
        >
          {t("carRentalAssistance")}
        </a>
      </div>
    </section>
  );
}
