#!/usr/bin/env node
/**
 * Generates a PDF of the trip summary page and saves it to the Desktop.
 * Run: node scripts/generate-pdf.mjs
 * Requires: npm install puppeteer (or run with npx)
 */

import { spawn } from "child_process";
import { createServer } from "http";
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, "..");
const desktopPath = join(process.env.HOME || process.env.USERPROFILE, "Desktop");
const outputPath = join(desktopPath, "Iceland-Amsterdam-Trip-Summary.pdf");

async function waitForServer(url, maxAttempts = 30) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch (_) {}
    await new Promise((r) => setTimeout(r, 500));
  }
  return false;
}

async function main() {
  const puppeteer = await import("puppeteer").catch(() => {
    console.log("Run: npm install puppeteer");
    process.exit(1);
  });

  console.log("Starting dev server...");
  const dev = spawn("npm", ["run", "dev"], {
    cwd: projectRoot,
    stdio: "pipe",
    env: { ...process.env, FORCE_COLOR: "0" },
  });

  const url = "http://localhost:3000/trip-summary";
  const ready = await waitForServer(url);
  if (!ready) {
    dev.kill();
    throw new Error("Dev server did not start in time");
  }

  console.log("Generating PDF...");
  const browser = await puppeteer.default.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.pdf({
    path: outputPath,
    format: "A4",
    printBackground: true,
    margin: { top: "15mm", right: "15mm", bottom: "15mm", left: "15mm" },
  });
  await browser.close();
  dev.kill();

  console.log(`\n✅ PDF saved to: ${outputPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
