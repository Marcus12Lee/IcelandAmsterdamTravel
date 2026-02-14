import { NextResponse } from "next/server";

const OPENWEATHER_BASE = "https://api.openweathermap.org/data/2.5/weather";

interface OpenWeatherResponse {
  name: string;
  main: { temp: number; feels_like: number; humidity: number };
  weather: { id: number; main: string; description: string; icon: string }[];
  wind: { speed: number };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city"); // "Amsterdam" | "Reykjavík"
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENWEATHER_API_KEY not set. Add it in .env.local." },
      { status: 503 }
    );
  }

  // Display name → OpenWeatherMap query (city name or "City,IS" for Iceland)
  const cityMap: Record<string, string> = {
    Amsterdam: "Amsterdam",
    "Reykjavík": "Reykjavik",
    "Keflavík": "Keflavik,IS",
    "Vík": "Vik,IS",
    "Höfn": "Hofn,IS",
    "Akureyri": "Akureyri,IS",
  };
  const q = city && cityMap[city] ? cityMap[city] : (city ?? "Amsterdam");
  const params = new URLSearchParams({
    q,
    appid: apiKey,
    units: "metric",
  });

  try {
    const res = await fetch(`${OPENWEATHER_BASE}?${params}`, { next: { revalidate: 600 } });
    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err || res.statusText }, { status: res.status });
    }
    const data: OpenWeatherResponse = await res.json();
    return NextResponse.json({
      city: data.name,
      temp: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      description: data.weather[0]?.description ?? "",
      icon: data.weather[0]?.icon ?? "",
      windSpeed: data.wind?.speed ?? 0,
    });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Weather fetch failed" },
      { status: 500 }
    );
  }
}
