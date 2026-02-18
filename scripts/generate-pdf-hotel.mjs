#!/usr/bin/env node
/**
 * 住宿價格表 PDF
 * Run: node scripts/generate-pdf-hotel.mjs
 * Output: public/Hotel-Prices-Summary.pdf (可透過 /Hotel-Prices-Summary.pdf 下載)
 */

import puppeteer from "puppeteer";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUTPUT = join(ROOT, "public", "Hotel-Prices-Summary.pdf");

const EUR_TO_TWD = 34.5;

const HOTELS = [
  { date: "Feb 20", name: "NH Amsterdam Noord", address: "Distelkade 21, 1031 XL Amsterdam", phone: "+31 20 634 8000", price: "374.65 EUR (2 nights)", eachPays: "124.88 EUR", twd: "12,925", newPrice: "", notes: "Free Cancel by 2/18" },
  { date: "Feb 21", name: "NH Amsterdam Noord", address: "Distelkade 21, 1031 XL Amsterdam", phone: "+31 20 634 8000", price: "—", eachPays: "—", twd: "—", newPrice: "", notes: "—" },
  { date: "Feb 22", name: "Loa's Nest", address: "851 Hella, Iceland", phone: "+354 894 9151", price: "165.60 EUR", eachPays: "55.20 EUR", twd: "5,713", newPrice: "", notes: "Free Cancel by 2/19" },
  { date: "Feb 23", name: "Vagnsstadir Guesthouse", address: "F985, 781 Hornafjörður, Iceland", phone: "+354 854 3133", price: "439.36 EUR (2 nights)", eachPays: "146.45 EUR", twd: "15,158", newPrice: "", notes: "Free Cancel by 2/20" },
  { date: "Feb 24", name: "Vagnsstadir Guesthouse", address: "F985, 781 Hornafjörður, Iceland", phone: "+354 854 3133", price: "—", eachPays: "—", twd: "—", newPrice: "", notes: "—" },
  { date: "Feb 25", name: "Sólheimahjáleiga Guesthouse", address: "Sólheimahjáleiguvegur, 871 Iceland", phone: "+354 864 2919", price: "403.12 EUR (2 nights)", eachPays: "134.37 EUR", twd: "13,908", newPrice: "", notes: "Free Cancel by 2/23" },
  { date: "Feb 26", name: "Sólheimahjáleiga Guesthouse", address: "Sólheimahjáleiguvegur, 871 Iceland", phone: "+354 864 2919", price: "—", eachPays: "—", twd: "—", newPrice: "", notes: "—" },
  { date: "Feb 27", name: "Icelandic Apartments by Heimaleiga", address: "Urðarhvarf, 203 Kópavogur, Iceland", phone: "+354 449 4904", price: "283.44 EUR (2 nights)", eachPays: "94.48 EUR", twd: "9,779", newPrice: "", notes: "Free Cancel by 2/22" },
  { date: "Feb 28", name: "Icelandic Apartments by Heimaleiga", address: "Urðarhvarf, 203 Kópavogur, Iceland", phone: "+354 449 4904", price: "—", eachPays: "—", twd: "—", newPrice: "", notes: "—" },
  { date: "Mar 01", name: "Guesthouse 1x6", address: "Vesturbraut 3, 230 Keflavík, Iceland", phone: "+354 857 1589", price: "160.05 EUR", eachPays: "53.35 EUR", twd: "5,522", newPrice: "", notes: "Free Cancel by 1/30" },
  { date: "Mar 02", name: "NH Amsterdam Noord", address: "Distelkade 21, 1031 XL Amsterdam", phone: "+31 20 634 8000", price: "354.39 EUR (2 nights)", eachPays: "118.13 EUR", twd: "12,226", newPrice: "", notes: "Free Cancel by 2/28" },
  { date: "Mar 03", name: "NH Amsterdam Noord", address: "Distelkade 21, 1031 XL Amsterdam", phone: "+31 20 634 8000", price: "—", eachPays: "—", twd: "—", newPrice: "", notes: "—" },
];

const rows = HOTELS.map(
  (h) =>
    `<tr>
  <td>${h.date}</td>
  <td>${h.name}</td>
  <td>${h.address}</td>
  <td>${h.phone}</td>
  <td>${h.price}</td>
  <td>${h.eachPays}</td>
  <td>NT$ ${h.twd}</td>
  <td class="fill-cell">${h.newPrice}</td>
  <td class="fill-cell">${h.notes}</td>
</tr>`
).join("");

const HTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; font-size: 10px; line-height: 1.4; color: #1a1a1a; margin: 0; padding: 16px; }
    .page { max-width: 600px; margin: 0 auto; }
    .header { text-align: center; margin-bottom: 20px; padding-bottom: 16px; border-bottom: 2px solid #e0e0e0; }
    .title { font-size: 16px; font-weight: 700; margin: 0 0 4px 0; }
    .meta { font-size: 12px; color: #555; margin: 0; }
    table { width: 100%; border-collapse: collapse; font-size: 9px; }
    th, td { border: 1px solid #999; padding: 6px 8px; text-align: left; vertical-align: top; }
    th { background: #f0f0f0; font-weight: 600; }
    .fill-cell { min-height: 24px; background: #fafafa; }
    .summary { background: #f5f5f5; padding: 12px 14px; margin-bottom: 16px; border-radius: 4px; font-size: 10px; }
    .summary-title { font-weight: 600; margin-bottom: 8px; }
    .summary-item { margin: 4px 0; }
    .hint { font-size: 9px; color: #666; margin-top: 16px; }
  </style>
</head>
<body>
  <div class="page">
    <div class="header">
      <h1 class="title">Hotel Price Summary</h1>
      <p class="meta">Iceland & Amsterdam · Feb 19 – Mar 05 · Marcus / Dennis / Eugenne</p>
    </div>
    <div class="summary">
      <div class="summary-title">Summary</div>
      <div class="summary-item">NH Amsterdam Noord Feb 20–21: 374.65 EUR · Free Cancel by 2/18</div>
      <div class="summary-item">NH Amsterdam Noord Mar 02–03: 354.39 EUR · Free Cancel by 2/28</div>
      <div class="summary-item">Loa's Nest Feb 22: 165.60 EUR</div>
      <div class="summary-item">Vagnsstadir Guesthouse Feb 23–24: 439.36 EUR</div>
      <div class="summary-item">Sólheimahjáleiga Guesthouse Feb 25–26: 403.12 EUR</div>
      <div class="summary-item">Icelandic Apartments Feb 27–28: 283.44 EUR</div>
      <div class="summary-item">Guesthouse 1x6 Mar 01: 160.05 EUR</div>
      <div class="summary-item" style="margin-top:8px; font-weight:600;">Total: 2,180.61 EUR (NT$ 75,231) · Each pays: 726.87 EUR (NT$ 25,077) · 1 EUR = ${EUR_TO_TWD} TWD</div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Hotel</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Price</th>
          <th>Each pays (÷3)</th>
          <th>TWD (NT$)</th>
          <th>New price</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
      <tfoot>
        <tr style="background:#e8f5e9; font-weight:600;">
          <td colspan="4">Total (shared by 3)</td>
          <td>2,180.61 EUR</td>
          <td>726.87 EUR</td>
          <td>NT$ 25,077</td>
          <td colspan="2">Each person pays 726.87 EUR (NT$ 25,077)</td>
        </tr>
      </tfoot>
    </table>
    <p class="hint">Fill in the Price and Notes columns. Print or save as PDF for your records.</p>
  </div>
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
    margin: { top: "15mm", right: "12mm", bottom: "15mm", left: "12mm" },
  });
  await browser.close();
  console.log(`\n✅ Hotel PDF 已儲存至: ${OUTPUT}`);
  console.log(`   可透過 /Hotel-Prices-Summary.pdf 下載\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
