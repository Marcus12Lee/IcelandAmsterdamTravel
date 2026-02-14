# Iceland & Amsterdam – Travel Companion

Dashboard for your trip: countdown to the next flight/event, itinerary timeline, weather for Amsterdam and Reykjavík, and a map of your Iceland self-drive from KEF.

## Stack

- **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS**
- **Weather:** OpenWeatherMap API
- **Map:** Leaflet (dark tile layer), route from KEF airport

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**If port 3000 is already in use:** run `npm run clean:ports` to free it, then `npm run dev` again. Or use `npm run dev:port` and open [http://localhost:3010](http://localhost:3010).

**If you see "EMFILE: too many open files":** run `ulimit -n 10240` in the same terminal and try again.

## Run on iPhone / iPad

You can open the same app on your iPhone or iPad while it’s running on your Mac:

1. **Same Wi‑Fi**  
   Make sure your Mac and your iPhone/iPad are on the **same Wi‑Fi network**.

2. **Start the app on your Mac**  
   In the project folder run:
   ```bash
   npm run dev
   ```
   The dev server is started with `--hostname 0.0.0.0` so it accepts connections from other devices.

3. **Find your Mac’s IP address**  
   On your Mac, open **System Settings → Wi‑Fi → Details** (or **Network**) and note the **IP address** (e.g. `192.168.1.5`).  
   Or in Terminal: `ipconfig getifaddr en0` (Wi‑Fi is often `en0`).

4. **Open the app on your iPhone/iPad**  
   In **Safari** (or any browser), go to:
   ```
   http://YOUR_MAC_IP:3000
   ```
   Example: `http://192.168.1.5:3000`  
   If the port is different (e.g. 3001), use that port instead.

The app will look and work the same as on your Mac. You can add it to the Home Screen (Safari → Share → Add to Home Screen) to open it like an app.

## Publish so anyone can use it (iPhone, iPad, other people)

If you **publish the app online**, you and others can use it from any device (iPhone, iPad, Android, computer) without your Mac running. There’s no “download from App Store” – everyone just opens a **link** in the browser. On iPhone/iPad they can **Add to Home Screen** to get an icon like an app.

### Easiest: deploy with Vercel (free)

1. **Put the project on GitHub** (if you haven’t already)  
   Create a repo and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Connect the repo to Vercel and deploy**  
   - Go to [vercel.com](https://vercel.com) and sign in (or sign up with GitHub).  
   - Click **Add New… → Project**.  
   - Under **Import Git Repository**, find **IcelandAmsterdamTravel** (or your repo name) and click **Import**.  
   - Leave **Framework Preset** as Next.js and **Root Directory** as `.`. Click **Deploy**.  
   - Wait for the build to finish. Your app will be at a URL like:  
     `https://iceland-amsterdam-travel.vercel.app`  
   - Every push to `main` on GitHub will trigger a new deployment automatically.

3. **Environment variables (optional)**  
   The app works without any env vars. If you add weather later, in Vercel go to **Project → Settings → Environment Variables**, add `OPENWEATHER_API_KEY`, then **Redeploy**.

4. **Use and share the link**  
   - **You on iPhone/iPad:** Open the Vercel URL in Safari → **Share → Add to Home Screen**.  
   - **Others:** Share the same URL; they can open it in any browser.

No Mac needs to be on; the app runs on Vercel. Push to `main` anytime to update the live site.

### Other ways to publish

- **Netlify:** [netlify.com](https://netlify.com) – similar: connect GitHub repo and deploy.  
- **Your own server:** Run `npm run build` then `npm run start`, and put the app behind a domain (e.g. with Nginx).  

For a personal travel companion, Vercel or Netlify is usually enough and stays free for this kind of use.

## Weather

1. Get an API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Copy `.env.example` to `.env.local` and set:

   ```
   OPENWEATHER_API_KEY=your_key
   ```

Without it, the weather module will show an error message.

## Filling in your plan and hotels

Use the **template** so you know what to put where:

- **`src/data/ITINERARY_TEMPLATE.md`** – Day-by-day template with placeholders. Fill in your plan and hotel for each day, then copy the values into `src/data/itinerary.ts`.

## Project structure

- `src/types/itinerary.ts` – Types for days, events, flights, activities.
- `src/data/itinerary.ts` – Your itinerary data; add plan and hotel per day here.
- `src/data/ITINERARY_TEMPLATE.md` – Template to fill in plan/hotel, then copy to itinerary.ts.
- `src/components/` – CountdownTimer, ItineraryTimeline, WeatherModule, IcelandMap.
- `src/app/api/weather/route.ts` – API route that fetches OpenWeatherMap.

## Adding hotels / map stops

In `src/data/itinerary.ts` you can:

- Add `location` or coordinates to any day’s `events`.
- Extend `ItineraryDay` with `coordinates` (array of `{ lat, lng }`) and pass it into `IcelandMap` to draw your full self-drive route.

The UI uses an **Icelandic Winter** theme (cool blues, whites, dark mode by default).
