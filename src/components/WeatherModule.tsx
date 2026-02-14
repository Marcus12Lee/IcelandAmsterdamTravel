"use client";

import { useEffect, useState } from "react";
import { useLocale, type TFunc } from "@/context/LocaleContext";

interface WeatherData {
  city: string;
  temp: number;
  feelsLike: number;
  humidity: number;
  description: string;
  icon: string;
  windSpeed: number;
}

const CITIES = [
  "Amsterdam",
  "Reykjavík",
  "Keflavík",
  "Vík",
  "Höfn",
  "Akureyri",
] as const;

function WeatherCard({ city, t }: { city: string; t: TFunc }) {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/weather?city=${encodeURIComponent(city)}`)
      .then((r) => {
        if (!r.ok) return r.json().then((e) => { throw new Error(e?.error ?? "Failed"); });
        return r.json();
      })
      .then(setData)
      .catch((e) => setError(e.message));
  }, [city]);

  if (error) {
    return (
      <div className="rounded-xl border border-ice-700/50 bg-ice-900/50 p-4">
        <p className="font-semibold text-white">{city}</p>
        <p className="text-sm text-amber-400">{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="rounded-xl border border-ice-700/50 bg-ice-900/50 p-4">
        <p className="font-semibold text-white">{city}</p>
        <p className="text-sm text-frost-slate">{t("loading")}</p>
      </div>
    );
  }

  const iconUrl = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;

  return (
    <div className="rounded-xl border border-ice-700/50 bg-ice-900/50 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-semibold text-white">{data.city}</p>
          <p className="text-2xl font-bold text-glacier-light">{data.temp}°C</p>
          <p className="text-sm capitalize text-frost-slate">{data.description}</p>
          <p className="mt-1 text-xs text-frost-slate">
            {t("feelsLike")} {data.feelsLike}°C · {data.humidity}% {t("humidity")} · {data.windSpeed} m/s {t("wind")}
          </p>
        </div>
        {data.icon && (
          <img src={iconUrl} alt="" className="h-14 w-14" />
        )}
      </div>
    </div>
  );
}

export function WeatherModule() {
  const { t } = useLocale();
  return (
    <section className="rounded-2xl border border-ice-700/50 bg-ice-950/60 p-6 shadow-xl backdrop-blur-sm dark:border-glacier-dark/50 dark:bg-ice-950/80">
      <h2 className="mb-4 text-lg font-semibold text-white">{t("weather")}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CITIES.map((city) => (
          <WeatherCard key={city} city={city} t={t} />
        ))}
      </div>
      <p className="mt-3 text-xs text-frost-slate">
        {t("weatherApiHint")}
      </p>
    </section>
  );
}
