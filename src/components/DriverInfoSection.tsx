"use client";

import Image from "next/image";
import { useLocale } from "@/context/LocaleContext";
import type { DriverInfo } from "@/data/drivers";

interface DriverInfoSectionProps {
  drivers: DriverInfo[];
}

const LOTUS_CAR_RENTAL_URL = "https://www.lotuscarrental.is";

export function DriverInfoSection({ drivers }: DriverInfoSectionProps) {
  const { t } = useLocale();
  if (!drivers.length) return null;

  return (
    <section className="rounded-2xl border border-white/10 bg-surface/90 p-6 shadow-xl backdrop-blur-sm sm:p-8">
      <h2 className="mb-4 text-lg font-semibold text-white sm:text-xl">
        {t("driversTitle")}
      </h2>
      <p className="mb-4 text-sm text-frost-slate">
        {t("driversSubtitle")}
      </p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[280px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-white/10">
              <th className="pb-2 pr-4 text-left font-semibold uppercase tracking-wider text-frost-silver">
                {t("driverName")}
              </th>
              <th className="pb-2 pr-4 text-left font-semibold uppercase tracking-wider text-frost-silver">
                {t("driverFullNameId")}
              </th>
              <th className="pb-2 text-left font-semibold uppercase tracking-wider text-frost-silver">
                {t("driverIntlLicense")}
              </th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, i) => (
              <tr
                key={i}
                className="border-b border-white/10 last:border-0"
              >
                <td className="py-3 pr-4 font-medium text-white">
                  {driver.name}
                </td>
                <td className="py-3 pr-4 text-frost-slate">
                  <span className="block">{driver.fullNameAndId}</span>
                </td>
                <td className="py-3 text-frost-slate">
                  <span className="font-mono tabular-nums">
                    {driver.internationalLicense}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 border-t border-white/10 pt-6">
        <a
          href={LOTUS_CAR_RENTAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-3 inline-block text-sm font-medium text-accent-light underline decoration-accent/60 underline-offset-2 hover:text-accent hover:decoration-accent"
        >
          {t("rentalCarLinkText")} →
        </a>
        <p className="mb-3 text-xs text-frost-slate">
          {t("rentalCarDescription")}
        </p>
        <div className="max-w-sm overflow-hidden rounded-lg border border-white/10">
          <Image
            src="/rental-car-kef.png"
            alt="KEF terminal to rental car pick-up route"
            width={400}
            height={300}
            className="h-auto w-full object-contain"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
