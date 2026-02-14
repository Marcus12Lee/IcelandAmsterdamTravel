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
      <body className="font-sans bg-gradient-winter min-h-screen text-frost-white antialiased">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
