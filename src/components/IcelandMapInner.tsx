"use client";

import { useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface MapRoutePoint {
  lat: number;
  lng: number;
  label?: string;
  mapUrl?: string;
}

interface IcelandMapInnerProps {
  route: MapRoutePoint[];
  isOnline?: boolean;
  openInMapsMeLabel?: string;
  openInGoogleMapsLabel?: string;
}

const ICON = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png";
const ICON_RETINA = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png";
const SHADOW = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png";

const MAPS_ME_PREFIX = "mapswithme://map?ll=";

function mapsMeHref(lat: number, lng: number): string {
  return `${MAPS_ME_PREFIX}${lat},${lng}`;
}

export function IcelandMapInner({
  route,
  isOnline = true,
  openInMapsMeLabel = "MAPS.ME (GPS)",
  openInGoogleMapsLabel = "Google Maps",
}: IcelandMapInnerProps) {
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

    L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
      attribution: "&copy; OpenStreetMap, &copy; CARTO",
    }).addTo(map);

    route.forEach((point, i) => {
      const label = point.label ?? (i === 0 ? "KEF Airport" : `Stop ${i}`);
      const showOfflineLinks = !isOnline && point.mapUrl;
      const popupContent = showOfflineLinks
        ? `<div><strong>${label}</strong><br/><a href="${mapsMeHref(point.lat, point.lng)}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:underline;font-size:12px">${openInMapsMeLabel}</a> · <a href="${point.mapUrl}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:underline;font-size:12px">${openInGoogleMapsLabel}</a></div>`
        : point.mapUrl
          ? `<a href="${point.mapUrl}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:underline">${label}</a>`
          : label;
      L.marker([point.lat, point.lng])
        .addTo(map)
        .bindPopup(popupContent);
    });

    if (route.length >= 2) {
      L.polyline(
        route.map((p) => [p.lat, p.lng] as [number, number]),
        { color: "#1a73e8", weight: 4, opacity: 0.9 }
      ).addTo(map);
    }

    map.fitBounds(route.map((p) => [p.lat, p.lng] as [number, number]), { padding: [20, 20] });
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [route, isOnline, openInMapsMeLabel, openInGoogleMapsLabel]);

  return <div ref={containerRef} className="h-[280px] w-full rounded-xl" />;
}
