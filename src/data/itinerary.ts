import type { Itinerary } from "@/types/itinerary";

/**
 * Travel Companion – Itinerary data
 *
 * For each day you can set:
 * - plan: a string (e.g. "Morning at X, then drive to Y") or array of items (e.g. ["Golden Circle", "Geysir", "Gullfoss"])
 * - hotel: { name: "Hotel Name", address: "Full address" } (optional: coordinates for map)
 * Fill in day by day as you book and plan.
 */
export const itinerary: Itinerary = {
  tripName: "Iceland & Amsterdam",
  keyDates: [
    { label: "First flight (TPE → HKG → AMS)", isoDateTime: "2025-02-19T20:15:00+08:00" },
    { label: "Arrive Amsterdam", isoDateTime: "2025-02-20T06:30:00+01:00" },
    { label: "Fly AMS → KEF, start Iceland self-drive", isoDateTime: "2025-02-22T12:55:00+01:00" },
    { label: "Fly KEF → AMS (option 1)", isoDateTime: "2025-03-02T07:40:00+00:00" },
    { label: "Fly KEF → AMS (option 2)", isoDateTime: "2025-03-02T16:00:00+00:00" },
    { label: "Return flight AMS → HKG → TPE", isoDateTime: "2025-03-04T12:30:00+01:00" },
    { label: "Arrive Taipei", isoDateTime: "2025-03-05T10:15:00+08:00" },
  ],
  // Netherlands: 阿姆斯特丹市區 (2/20–2/22) & 近郊與鹿特丹 (3/03)
  amsTripPlans: [
    {
      section: "🇳🇱 阿姆斯特丹市區 (2/20 - 2/22 核心行程)",
      items: [
        {
          text: "安妮之家 (Anne Frank House)",
          url: "https://maps.app.goo.gl/pFrFfQKf2MRLjZEV9",
          time: "每日 09:00 – 22:00",
          note: "需標註 1/6 17:00 (台西時間) 搶票提醒。",
        },
        {
          text: "人體博物館 (BODY WORLDS Amsterdam)",
          url: "https://maps.app.goo.gl/jL6sMvCuvVPxNUNa8",
          time: "每日 10:00 – 22:00",
        },
        {
          text: "凡高博物館 (Van Gogh Museum)",
          url: "https://maps.google.com/?cid=15319659771873942282&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ",
          time: "每日 09:00 – 18:00 (週五至 21:00)",
        },
        {
          text: "紅燈區秘密博物館 (Red Light Secrets)",
          url: "https://www.google.com/maps/search/?api=1&query=Red+Light+Secrets+Amsterdam",
          time: "每日 11:00 – 22:30 (週末至 23:30)",
        },
        {
          text: "老教堂 (Oude Kerk)",
          url: "https://maps.google.com/maps/contrib/107868822795101671424",
          time: "週一至六 10:00 – 18:00，週日 13:00 – 17:30",
          note: "附近地面有「摸乳磚」景點。",
        },
      ],
    },
    {
      section: "🇳🇱 阿姆斯特丹近郊與鹿特丹 (3/03 一日遊)",
      items: [
        {
          text: "鹿特丹馬克塔爾市集 (Markthal)",
          url: "https://maps.app.goo.gl/eLQZ7Zb5pFomdrB2A",
          time: "週一至六 10:00 – 20:00，週日 12:00 – 18:00",
          note: "適合安排午餐。",
        },
        {
          text: "方塊屋 (Cubic Houses)",
          url: "https://www.google.com/maps/search/?api=1&query=Cubic+Houses+Rotterdam",
          time: "每日 11:00 – 17:00",
        },
        {
          text: "贊瑟斯漢斯風車村 (Zaanse Schans)",
          url: "https://maps.google.com/maps/contrib/110276884242487209420",
          time: "園區開放至 17:00",
          note: "推薦 Henri Willig 霜淇淋。",
        },
      ],
    },
  ],
  // Iceland: 2/23 重點餐廳等
  icelandTripPlans: [
    {
      section: "🇮🇸 冰島：2/23 重點餐廳",
      items: [
        {
          text: "Pakkhús Restaurant (龍蝦餐廳)",
          url: "https://maps.google.com/maps/contrib/102910275896821084251",
          time: "12:00 – 21:00",
          note: "赫本市區必吃。",
        },
      ],
    },
  ],
  days: [
    {
      date: "2025-02-19",
      label: "Feb 19",
      plan: "Evening flight TPE → HKG → AMS.",
      hotel: { name: "", address: "" },
      events: [
        {
          type: "flight",
          summary: "TPE → HKG → AMS",
          legs: [
            { departure: "TPE", arrival: "HKG", departureTime: "20:15", arrivalTime: "22:20", displayTime: "20:15–22:20" },
            { departure: "HKG", arrival: "AMS", departureTime: "23:20", arrivalTime: "06:30+1", displayTime: "23:20–06:30+1" },
          ],
        },
      ],
    },
    {
      date: "2025-02-20",
      label: "Feb 20",
      plan: "Arrive Amsterdam morning. Rest / explore.",
      hotel: {
        name: "NH Amsterdam Noord",
        address: "Distelkade 21, 1031 XL Amsterdam, Netherlands",
        phone: "+31 20 634 8000",
        coordinates: { lat: 52.3842, lng: 4.9025 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Distelkade+21,+1031+XL+Amsterdam",
      },
      events: [
        { type: "activity", title: "Arrive AMS", description: "Land 06:30", locationCode: "AMS", time: "06:30" },
      ],
    },
    {
      date: "2025-02-21",
      label: "Feb 21",
      plan: "Amsterdam suburbs.",
      hotel: {
        name: "NH Amsterdam Noord",
        address: "Distelkade 21, 1031 XL Amsterdam, Netherlands",
        phone: "+31 20 634 8000",
        coordinates: { lat: 52.3842, lng: 4.9025 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Distelkade+21,+1031+XL+Amsterdam",
      },
      events: [
        { type: "activity", title: "Amsterdam Suburbs", description: "Explore suburbs" },
      ],
    },
    {
      date: "2025-02-22",
      label: "Feb 22",
      plan: "Fly AMS → KEF. Pick up car, start Iceland self-drive.",
      hotel: {
        name: "Loa's Nest",
        address: "851 Hella, Iceland",
        coordinates: { lat: 63.8343, lng: -20.3942 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Loa%27s+Nest+851+Hella+Iceland",
      },
      notes: [
        "抵達、取車、超市補給、休息",
        "可先去 Selfoss（較大城市）晃晃再到 Hella",
      ],
      events: [
        {
          type: "flight",
          summary: "AMS → KEF",
          legs: [
            { departure: "AMS", arrival: "KEF", departureTime: "12:55", arrivalTime: "15:25", displayTime: "12:55–15:25" },
          ],
        },
        { type: "activity", title: "Pick up rental car", locationCode: "KEF" },
        { type: "activity", title: "Start Iceland self-drive tour" },
      ],
    },
    {
      date: "2025-02-23",
      label: "Feb 23",
      plan: [],
      hotel: {
        name: "Vagnsstadir Guesthouse",
        address: "Vagnsstaðir, Borgarhöfn. F985, 781 Hornafjörður, Iceland",
        phone: "+354 854 3133",
        coordinates: { lat: 64.5385, lng: -14.3894 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vagnsstadir+Guesthouse+Borgarh%C3%B6fn+Iceland",
      },
      notes: [
        "08:30 海拉出發：晨曦中啟程，避開全黑駕駛，確保有充足日光看瀑布。",
        "12:00 維克午餐：在 Vík 快速用餐並加滿油。絕對跳過飛機殘骸，將寶貴的 2 小時日光留給冰河湖。",
        "15:30 冰河湖：享受傑古沙龍與鑽石沙灘的夕陽美景。",
        "17:00 赫本晚餐：抵達赫本吃龍蝦大餐（建議預約 17:00 開門首波）。",
        "18:15 啟程回程：離開赫本往回開 50 公里（約 45–60 分鐘）。",
        "19:00 抵達旅館：趕在天色全黑、視覺疲勞前抵達 Vagnsstadir Guesthouse。",
      ],
      reminders: [
        "側風與黑冰：過了維克後的沙原路段風力極強，2 月路面常有看不見的黑冰，請保持車距。",
        "無路燈警示：赫本回旅館段完全沒有路燈，僅靠路邊黃色反光桿導引，請開啟遠光燈並小心駕駛。",
        "物資補給：民宿周邊偏僻，晚餐所需的飲料或隔天早餐請在維克（Vík）超市買齊。",
      ],
      events: [
        { type: "day", title: "Iceland road trip", description: "Day 1", stops: [] },
      ],
    },
    {
      date: "2025-02-24",
      label: "Feb 24",
      plan: [],
      hotel: {
        name: "Vagnsstadir Guesthouse",
        address: "Vagnsstaðir, Borgarhöfn. F985, 781 Hornafjörður, Iceland",
        phone: "+354 854 3133",
        coordinates: { lat: 64.5385, lng: -14.3894 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Vagnsstadir+Guesthouse+Borgarh%C3%B6fn+Iceland",
      },
      events: [
        { type: "day", title: "Iceland road trip", description: "Day 2", stops: [] },
      ],
    },
    {
      date: "2025-02-25",
      label: "Feb 25",
      plan: [],
      hotel: {
        name: "Sólheimahjáleiga Guesthouse",
        address: "Sólheimahjáleiguvegur, 871 Iceland",
        phone: "+354 864 2919",
        coordinates: { lat: 63.531, lng: -19.363 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=S%C3%B3lheimahj%C3%A1leiga+Guesthouse+871+Iceland",
      },
      events: [
        { type: "day", title: "Iceland road trip", description: "Day 3", stops: [] },
      ],
    },
    {
      date: "2025-02-26",
      label: "Feb 26",
      plan: [],
      hotel: {
        name: "Sólheimahjáleiga Guesthouse",
        address: "Sólheimahjáleiguvegur, 871 Iceland",
        phone: "+354 864 2919",
        coordinates: { lat: 63.531, lng: -19.363 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=S%C3%B3lheimahj%C3%A1leiga+Guesthouse+871+Iceland",
      },
      events: [
        { type: "day", title: "Iceland road trip", description: "Day 4", stops: [] },
      ],
    },
    {
      date: "2025-02-27",
      label: "Feb 27",
      plan: [],
      hotel: {
        name: "Icelandic Apartments by Heimaleiga",
        address: "Urðarhvarf, 203 Kópavogur, Iceland",
        phone: "+354 449 4904",
        coordinates: { lat: 64.1124, lng: -21.9127 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ur%C3%B0arhvarf+203+K%C3%B3pavogur+Iceland",
      },
      events: [
        { type: "day", title: "Iceland road trip", description: "Day 5", stops: [] },
      ],
    },
    {
      date: "2025-02-28",
      label: "Feb 28",
      plan: [],
      hotel: {
        name: "Icelandic Apartments by Heimaleiga",
        address: "Urðarhvarf, 203 Kópavogur, Iceland",
        phone: "+354 449 4904",
        coordinates: { lat: 64.1124, lng: -21.9127 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Ur%C3%B0arhvarf+203+K%C3%B3pavogur+Iceland",
      },
      events: [
        { type: "day", title: "Iceland road trip", description: "Day 6", stops: [] },
      ],
    },
    {
      date: "2025-03-01",
      label: "Mar 01",
      plan: [],
      hotel: {
        name: "Guesthouse 1x6",
        address: "Vesturbraut 3, 230 Keflavík, Iceland",
        phone: "+354 857 1589",
        coordinates: { lat: 63.999, lng: -22.5613 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Guesthouse+1x6+Vesturbraut+3+Keflavik+Iceland",
      },
      notes: [
        "Transfer service to/from Keflavík Airport @ ISK 3500 per car / one way. (已經訂「3/1 租車公司到旅館」+「3/2 旅館到機場」接送)",
        "至少兩小時前告知抵達住宿的時間。",
      ],
      events: [
        { type: "day", title: "Iceland road trip", description: "Day 7", stops: [] },
      ],
    },
    {
      date: "2025-03-02",
      label: "Mar 02",
      plan: "Fly KEF → AMS (morning or afternoon flight).",
      hotel: {
        name: "NH Amsterdam Noord",
        address: "Distelkade 21, 1031 XL Amsterdam, Netherlands",
        phone: "+31 20 634 8000",
        coordinates: { lat: 52.3842, lng: 4.9025 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Distelkade+21,+1031+XL+Amsterdam",
      },
      events: [
        {
          type: "flight",
          summary: "KEF → AMS",
          legs: [
            { departure: "KEF", arrival: "AMS", departureTime: "07:40", arrivalTime: "11:55", displayTime: "07:40–11:55" },
            { departure: "KEF", arrival: "AMS", departureTime: "16:00", arrivalTime: "20:20", displayTime: "16:00–20:20" },
          ],
        },
      ],
    },
    {
      date: "2025-03-03",
      label: "Mar 03",
      plan: "Amsterdam suburbs.",
      hotel: {
        name: "NH Amsterdam Noord",
        address: "Distelkade 21, 1031 XL Amsterdam, Netherlands",
        phone: "+31 20 634 8000",
        coordinates: { lat: 52.3842, lng: 4.9025 },
        mapUrl: "https://www.google.com/maps/search/?api=1&query=Distelkade+21,+1031+XL+Amsterdam",
      },
      events: [
        { type: "activity", title: "Amsterdam Suburbs", description: "Explore suburbs" },
      ],
    },
    {
      date: "2025-03-04",
      label: "Mar 04",
      plan: "Return flight AMS → HKG → TPE.",
      hotel: { name: "", address: "" },
      events: [
        {
          type: "flight",
          summary: "AMS → HKG → TPE",
          legs: [
            { departure: "AMS", arrival: "HKG", departureTime: "12:30", arrivalTime: "07:30+1", displayTime: "12:30–07:30+1" },
          ],
        },
      ],
    },
    {
      date: "2025-03-05",
      label: "Mar 05",
      plan: "Arrive Taipei.",
      hotel: { name: "", address: "" },
      events: [
        { type: "activity", title: "Arrive TPE", description: "Land 10:15", locationCode: "TPE", time: "10:15" },
      ],
    },
  ],
};
