# Itinerary data template

Copy the values below into `src/data/itinerary.ts` for each day.  
Replace the placeholder text with your real plan and hotel info.

---

## How to fill

- **plan** – Either one string, or an array of strings (one per activity/stop).
- **hotel** – `name`, optional `address`, optional `mapUrl` (Google Maps link). Leave `name: ""` if no hotel that night.
- **events** – Flights and activities stay as they are; only edit **plan** and **hotel**.
- **amsTripPlans** – Array of strings: places and plans for Amsterdam (e.g. `["Zaanse Schans", "Canal tour"]`).
- **icelandTripPlans** – Array of strings: places and plans for Iceland (e.g. `["Golden Circle", "Geysir", "Jökulsárlón"]`).

---

## Your data (fill and copy into itinerary.ts)

### Feb 19 — Travel day (TPE → AMS)
```
plan: "[e.g. Evening flight, pack list / airport.]"
hotel: { name: "[e.g. In flight / N/A]", address: "" }
```

### Feb 20 — Arrive Amsterdam
```
plan: "[e.g. Arrive 06:30, transfer to hotel, rest, short walk.]"
hotel: { name: "[Hotel name]", address: "[Full address]" }
```

### Feb 21 — Amsterdam suburbs
```
plan: "[e.g. Zaanse Schans, or list: 'Canal tour', 'Museum', 'Dinner in X']"
hotel: { name: "[Hotel name]", address: "[Full address]" }
```

### Feb 22 — Fly AMS → KEF, start Iceland
```
plan: "[e.g. Flight 12:55–15:25, pick up car at KEF, drive to first stop.]"
hotel: { name: "[Hotel/guesthouse name]", address: "[Address, Iceland]" }
```

### Feb 23 — Iceland road trip Day 1
```
plan: ["[Stop 1]", "[Stop 2]", "[Stop 3]"]   // or one string
hotel: { name: "[Hotel name]", address: "[Address]" }
```

### Feb 24 — Iceland road trip Day 2
```
plan: ["[Stop 1]", "[Stop 2]"]
hotel: { name: "[Hotel name]", address: "[Address]" }
```

### Feb 25 — Iceland road trip Day 3
```
plan: ["[Stop 1]", "[Stop 2]"]
hotel: { name: "[Hotel name]", address: "[Address]" }
```

### Feb 26 — Iceland road trip Day 4
```
plan: ["[Stop 1]", "[Stop 2]"]
hotel: { name: "[Hotel name]", address: "[Address]" }
```

### Feb 27 — Iceland road trip Day 5
```
plan: ["[Stop 1]", "[Stop 2]"]
hotel: { name: "[Hotel name]", address: "[Address]" }
```

### Feb 28 — Iceland road trip Day 6
```
plan: ["[Stop 1]", "[Stop 2]"]
hotel: { name: "[Hotel name]", address: "[Address]" }
```

### Mar 01 — Iceland road trip Day 7
```
plan: ["[Last stops before KEF]"]
hotel: { name: "[Hotel name]", address: "[Address]" }
```

### Mar 02 — Fly KEF → AMS
```
plan: "[e.g. Morning or afternoon flight to Amsterdam.]"
hotel: { name: "[Hotel name]", address: "[Address]" }
```

### Mar 03 — Amsterdam suburbs
```
plan: "[e.g. Last day in Amsterdam, packing.]"
hotel: { name: "[Hotel name]", address: "[Address]" }
```

### Mar 04 — Return flight AMS → TPE
```
plan: "[e.g. Check out, airport 12:30 flight.]"
hotel: { name: "[In flight / N/A]", address: "" }
```

### Mar 05 — Arrive Taipei
```
plan: "[e.g. Land 10:15, customs, home.]"
hotel: { name: "", address: "" }
```

---

## Plan format examples

**Single string (one paragraph):**
```ts
plan: "Morning at Golden Circle. Lunch at Geysir. Afternoon Gullfoss. Stay in Reykjavík."
```

**List (bullets on the app):**
```ts
plan: ["Golden Circle", "Geysir", "Gullfoss", "Reykjavík hotel"]
```

**Hotel with address and Google Maps link:**
```ts
hotel: {
  name: "Hotel Example",
  address: "Laugavegur 1, 101 Reykjavík",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Laugavegur+1,+101+Reykjavik"
}
```

**No hotel (e.g. flight night):**
```ts
hotel: { name: "", address: "" }
```

Edit `src/data/itinerary.ts` and replace the `plan` and `hotel` for each day with your text from this template.
