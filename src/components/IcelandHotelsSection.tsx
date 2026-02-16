"use client";

import { useLocale } from "@/context/LocaleContext";
import type { IcelandHotelWithDates } from "@/lib/getIcelandRoute";

const MAPS_ME_PREFIX = "mapswithme://map?ll=";

function mapsMeHref(lat: number, lng: number): string {
  return `${MAPS_ME_PREFIX}${lat},${lng}`;
}

interface IcelandHotelsSectionProps {
  hotels: IcelandHotelWithDates[];
}

export function IcelandHotelsSection({ hotels }: IcelandHotelsSectionProps) {
  const { t } = useLocale();

  if (hotels.length === 0) return null;

  return (
    <section className="rounded-2xl border border-white/10 bg-surface/90 p-6 shadow-xl backdrop-blur-sm">
      <h2 className="mb-2 text-xl font-semibold text-white">
        {t("icelandHotelsTitle")}
      </h2>
      <p className="mb-4 text-sm text-frost-slate">
        {t("icelandHotelsSubtitle")}
      </p>
      <ul className="space-y-4">
        {hotels.map((hotel, i) => (
          <li
            key={i}
            className="rounded-lg border border-white/10 bg-surface-light/50 p-4"
          >
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <p className="font-medium text-white">{hotel.name}</p>
                {hotel.address && (
                  <p className="mt-1 text-sm text-frost-slate">{hotel.address}</p>
                )}
                {hotel.phone && (
                  <a
                    href={`tel:${hotel.phone.replace(/\s/g, "")}`}
                    className="mt-1 inline-block text-sm text-accent-light hover:text-accent"
                  >
                    {hotel.phone}
                  </a>
                )}
              </div>
              <span className="shrink-0 rounded bg-white/10 px-2 py-1 text-xs font-medium text-frost-silver">
                {t("nights")}: {hotel.dateRange}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase text-frost-silver">
                {t("gpsLocation")}:{" "}
              </span>
              <code className="rounded bg-black/30 px-2 py-1 font-mono text-sm text-accent-light">
                {hotel.coordinates.lat.toFixed(6)}, {hotel.coordinates.lng.toFixed(6)}
              </code>
              <a
                href={mapsMeHref(hotel.coordinates.lat, hotel.coordinates.lng)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent-light underline decoration-accent/60 underline-offset-2 hover:text-accent"
              >
                {t("openInMapsMe")}
              </a>
              {hotel.mapUrl && (
                <>
                  <span className="text-frost-silver">·</span>
                  <a
                    href={hotel.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-accent-light underline decoration-accent/60 underline-offset-2 hover:text-accent"
                  >
                    {t("openInGoogleMaps")}
                  </a>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
