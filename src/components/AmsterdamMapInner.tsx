"use client";

import { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface MapPoint {
  lat: number;
  lng: number;
  label?: string;
}

interface AmsterdamMapInnerProps {
  points: MapPoint[];
}

const AMSTERDAM_CENTER: [number, number] = [52.3676, 4.9041];
const ICON = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png";
const ICON_RETINA = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png";
const SHADOW = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";

export function AmsterdamMapInner({ points }: AmsterdamMapInnerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    delete (L.Icon.Default.prototype as unknown as { _getIconUrl?: unknown })._getIconUrl;
    L.Icon.Default.mergeOptions({ iconUrl: ICON, iconRetinaUrl: ICON_RETINA, shadowUrl: SHADOW });

    const map = L.map(containerRef.current, {
      center: points.length > 0 ? [points[0].lat, points[0].lng] : AMSTERDAM_CENTER,
      zoom: points.length > 0 ? 14 : 12,
      preferCanvas: true,
    });

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap, &copy; CARTO",
    }).addTo(map);

    points.forEach((point) => {
      L.marker([point.lat, point.lng])
        .addTo(map)
        .bindPopup(point.label ?? "");
    });

    if (points.length > 1) {
      map.fitBounds(
        points.map((p) => [p.lat, p.lng] as [number, number]),
        { padding: [20, 20] }
      );
    }

    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [points]);

  return <div ref={containerRef} className="h-[280px] w-full rounded-xl" />;
}
