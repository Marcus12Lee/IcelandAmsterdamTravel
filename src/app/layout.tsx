import type { Metadata, Viewport } from "next";
import { LocaleProvider } from "@/context/LocaleContext";
import { PWAStatusIndicator } from "@/components/PWAStatusIndicator";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#16161d",
};

export const metadata: Metadata = {
  title: "Iceland & Amsterdam – Travel Companion",
  description: "Countdown, itinerary, weather and map for your Iceland and Amsterdam trip.",
  manifest: "/manifest.json",
  appleWebApp: { capable: true, title: "Iceland-Amsterdam Travel" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans min-h-screen text-frost-white antialiased">
        <LocaleProvider>
          {children}
          <PWAStatusIndicator />
        </LocaleProvider>
      </body>
    </html>
  );
}
