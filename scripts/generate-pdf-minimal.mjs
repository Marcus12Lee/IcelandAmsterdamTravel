#!/usr/bin/env node
/**
 * 極簡化行程表 PDF - 不修改網站，僅產生 PDF
 * Run: node scripts/generate-pdf-minimal.mjs
 */

import puppeteer from "puppeteer";
import { join } from "path";

const DESKTOP = join(process.env.HOME || process.env.USERPROFILE, "Desktop");
const OUTPUT = join(DESKTOP, "Iceland-Amsterdam-Trip-Summary.pdf");

const HTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: system-ui, sans-serif; font-size: 11px; line-height: 1.45; color: #222; max-width: 580px; margin: 0 auto; padding: 20px; }
    h1 { font-size: 18px; margin-bottom: 4px; font-weight: 700; }
    .subtitle { font-size: 12px; color: #555; margin-bottom: 16px; }
    h2 { font-size: 13px; margin-top: 16px; margin-bottom: 6px; font-weight: 600; }
    h3 { font-size: 11px; margin-top: 12px; margin-bottom: 4px; font-weight: 600; }
    ul { margin: 4px 0; padding-left: 18px; }
    li { margin: 3px 0; }
    strong { font-weight: 600; }
    .note { font-style: italic; color: #444; }
    .warning { color: #c00; font-weight: 500; }
  </style>
</head>
<body>
  <h1>✈️ AMSTERDAM & ICELAND ITINERARY 2026</h1>
  <p class="subtitle"><strong>Travel Dates:</strong> Feb 19 – Mar 05 &nbsp;|&nbsp; <strong>Travelers:</strong> Marcus / Dennis / Eugenne</p>

  <h2>🇳🇱 PHASE 1: AMSTERDAM (The Arrival)</h2>

  <h3>Feb 19 | Departure</h3>
  <ul>
    <li><strong>Flights:</strong> TPE → HKG (20:15) | HKG → AMS (23:20)</li>
    <li><span class="note">Overnight flight.</span></li>
  </ul>

  <h3>Feb 20 | Arrival & Recovery</h3>
  <ul>
    <li><strong>Land:</strong> 06:30 at Schiphol (AMS).</li>
    <li><strong>Hotel:</strong> NH Amsterdam Noord (+31 20 634 8000)</li>
    <li><strong>Plan:</strong> Morning rest; light afternoon exploration.</li>
  </ul>

  <h3>Feb 21 | Suburban Charm</h3>
  <ul>
    <li><strong>Activity:</strong> Explore Amsterdam suburbs and outskirts.</li>
    <li><strong>Hotel:</strong> NH Amsterdam Noord.</li>
  </ul>

  <h2>🇮🇸 PHASE 2: ICELAND SELF-DRIVE (The Adventure)</h2>

  <h3>Feb 22 | Arrival in the North Atlantic</h3>
  <ul>
    <li><strong>Flight:</strong> AMS → KEF (12:55–15:25).</li>
    <li><strong>Pick-up:</strong> Rental Car at KEF Airport.</li>
    <li><strong>Stay:</strong> Loa's Nest (Hella) | +354 894 9151.</li>
    <li><span class="note">Grocery stop in Selfoss before heading to Hella.</span></li>
  </ul>

  <h3>Feb 23 | Waterfalls & Glaciers</h3>
  <ul>
    <li><strong>08:30:</strong> Depart Hella (Maximize daylight).</li>
    <li><strong>12:00:</strong> Vík (Lunch & Fuel).</li>
    <li><strong>15:30:</strong> Jökulsárlón Glacier Lagoon & Diamond Beach at sunset.</li>
    <li><strong>Stay:</strong> Vagnsstadir Guesthouse | +354 854 3133.</li>
    <li><span class="warning">⚠️ ROAD WARNING:</span> High winds and black ice near Vík. No streetlights near guesthouse.</li>
  </ul>

  <h3>Feb 24 | Ice Caves & Aurora</h3>
  <ul>
    <li><strong>Activity:</strong> Ice Cave Discovery (Meet at Jökulsárlón parking).</li>
    <li><strong>Duration:</strong> 5–7 hours.</li>
    <li><strong>Stay:</strong> Vagnsstadir Guesthouse.</li>
  </ul>

  <h3>Feb 25 – 26 | South Coast Highlights</h3>
  <ul>
    <li><strong>Plan:</strong> Return toward Vík. Visit Black Sand Beach and Plane Wreck.</li>
    <li><strong>Stay:</strong> Sólheimahjáleiga Guesthouse | +354 864 2919.</li>
  </ul>

  <h3>Feb 27 | Reykjavik & Sky Lagoon</h3>
  <ul>
    <li><strong>Morning:</strong> Hallgrimskirkja (1 hr) & Harpa (0.5 hr).</li>
    <li><strong>17:30:</strong> <strong>Sky Lagoon Ritual</strong> (Pre-booked).</li>
    <li><strong>Stay:</strong> Icelandic Apartments by Heimalega | +354 449 4904.</li>
  </ul>

  <h3>Feb 28 | The Golden Circle</h3>
  <ul>
    <li><strong>Route:</strong> Þingvellir → Geysir → Gullfoss.</li>
    <li><strong>Stay:</strong> Icelandic Apartments by Heimalega.</li>
  </ul>

  <h3>Mar 01 | Reykjanes Peninsula</h3>
  <ul>
    <li><strong>Plan:</strong> Valahnúkamöl or Seal Beach.</li>
    <li><strong>Evening:</strong> Return car / Transfer to Keflavík.</li>
    <li><strong>Stay:</strong> Guesthouse 1x6 | +354 857 1589.</li>
  </ul>

  <h2>🇳🇱 PHASE 3: AMSTERDAM (The Return)</h2>

  <h3>Mar 02 – 03 | Return to AMS</h3>
  <ul>
    <li><strong>Flight:</strong> KEF → AMS.</li>
    <li><strong>Hotel:</strong> NH Amsterdam Noord.</li>
    <li><strong>Activity:</strong> Final shopping and suburban sights.</li>
  </ul>

  <h3>Mar 04 – 05 | Flight Home</h3>
  <ul>
    <li><strong>Departure:</strong> AMS (12:30) → HKG → TPE.</li>
    <li><strong>Arrival:</strong> Land in Taipei (TPE) on Mar 05 at 10:15.</li>
  </ul>

  <h2>❄️ ICELAND SURVIVAL TIPS</h2>
  <ul>
    <li><strong>Fuel:</strong> Never let your tank drop below 50% in the South.</li>
    <li><strong>Weather:</strong> Check <strong>vedur.is</strong> (wind) and <strong>road.is</strong> (closures) every morning.</li>
    <li><strong>Darkness:</strong> Driving in the East/South is pitch black. Trust the yellow reflective poles.</li>
  </ul>

  <h2>🎒 Essentials</h2>
  <p>Crampons for shoes, waterproof layers, and a 4-digit PIN for your credit card.</p>
</body>
</html>
`;

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(HTML, { waitUntil: "networkidle0" });
  await page.pdf({
    path: OUTPUT,
    format: "A4",
    margin: { top: "15mm", right: "15mm", bottom: "15mm", left: "15mm" },
  });
  await browser.close();
  console.log(`\n✅ PDF 已儲存至: ${OUTPUT}\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
