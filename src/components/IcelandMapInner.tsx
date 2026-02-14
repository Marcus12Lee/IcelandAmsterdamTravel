"use client";

import { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface IcelandMapInnerProps {
  route: { lat: number; lng: number }[];
}

const ICON = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png";
const ICON_RETINA = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png";
const SHADOW = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";

export function IcelandMapInner({ route }: IcelandMapInnerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || !route.length) return;

    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
    L.Icon.Default.mergeOptions({ iconUrl: ICON, iconRetinaUrl: ICON_RETINA, shadowUrl: SHADOW });

    const map = L.map(containerRef.current, {
      center: [route[0].lat, route[0].lng],
      zoom: 8,
      preferCanvas: true,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap, &copy; CARTO",
    }).addTo(map);

    route.forEach((point, i) => {
      L.marker([point.lat, point.lng])
        .addTo(map)
        .bindPopup(i === 0 ? "KEF Airport" : `Stop ${i}`);
    });

    if (route.length >= 2) {
      L.polyline(
        route.map((p) => [p.lat, p.lng] as [number, number]),
        { color: "#22d3ee", weight: 3, opacity: 0.9 }
      ).addTo(map);
    }

    map.fitBounds(route.map((p) => [p.lat, p.lng] as [number, number]), { padding: [20, 20] });
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [route]);

  return <div ref={containerRef} className="h-[280px] w-full rounded-xl" />;
}
