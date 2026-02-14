import type { Metadata } from "next";
import { LocaleProvider } from "@/context/LocaleContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iceland & Amsterdam – Travel Companion",
  description: "Countdown, itinerary, weather and map for your Iceland and Amsterdam trip.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-gradient-to-br from-slate-950 via-ice-950 to-ice-900 min-h-screen text-frost-white">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
