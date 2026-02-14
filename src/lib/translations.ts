export type Locale = "en" | "zh-TW";

export const translations: Record<
  Locale,
  {
    travelCompanion: string;
    countdownTo: string;
    days: string;
    hours: string;
    min: string;
    sec: string;
    currentTime: string;
    eventPassed: string;
    today: string;
    itinerary: string;
    plan: string;
    hotel: string;
    notes: string;
    reminders: string;
    viewOnGoogleMaps: string;
    flight: string;
    weather: string;
    loading: string;
    weatherApiHint: string;
    feelsLike: string;
    humidity: string;
    wind: string;
    mapTitle: string;
    mapDescription: string;
    mapTitleAmsterdam: string;
    mapDescriptionAmsterdam: string;
    amsTripPlans: string;
    amsTripPlansSubtitle: string;
    icelandTripPlans: string;
    icelandTripPlansSubtitle: string;
    emptyPlansHint: string;
    footer: string;
    switchToChinese: string;
    switchToEnglish: string;
    // Key date labels (for countdown)
    keyDateFirstFlight: string;
    keyDateArriveAmsterdam: string;
    keyDateFlyToKef: string;
    keyDateKefToAms1: string;
    keyDateKefToAms2: string;
    keyDateReturnFlight: string;
    keyDateArriveTaipei: string;
    driversTitle: string;
    driversSubtitle: string;
    driverName: string;
    driverFullNameId: string;
    driverIntlLicense: string;
  }
> = {
  en: {
    travelCompanion: "Travel Companion",
    countdownTo: "Countdown to",
    days: "Days",
    hours: "Hours",
    min: "Min",
    sec: "Sec",
    currentTime: "Current time",
    eventPassed: "This event has passed.",
    today: "Today!",
    itinerary: "Itinerary",
    plan: "Plan",
    hotel: "Hotel",
    notes: "Notes",
    reminders: "Reminders",
    viewOnGoogleMaps: "View on Google Maps →",
    flight: "Flight",
    weather: "Weather",
    loading: "Loading…",
    weatherApiHint: "Set OPENWEATHER_API_KEY in .env.local for real-time data.",
    feelsLike: "Feels like",
    humidity: "humidity",
    wind: "wind",
    mapTitle: "Iceland self-drive from KEF",
    mapDescription: "Route from Keflavík Airport. Add your daily stops in the itinerary data to see them here.",
    mapTitleAmsterdam: "Amsterdam – Hotel",
    mapDescriptionAmsterdam: "Hotel location in Amsterdam.",
    amsTripPlans: "AMS trip plans",
    amsTripPlansSubtitle: "Places and plans for Amsterdam (Feb 20–21, Mar 2–3)",
    icelandTripPlans: "Iceland trip plans",
    icelandTripPlansSubtitle: "Places and plans for Iceland (Feb 22 – Mar 1)",
    emptyPlansHint: "Add your plans and places in src/data/itinerary.ts",
    footer: "Feb 19 – Mar 5 · Add hotel locations in",
    switchToChinese: "繁體中文",
    switchToEnglish: "English",
    keyDateFirstFlight: "First flight (TPE → HKG → AMS)",
    keyDateArriveAmsterdam: "Arrive Amsterdam",
    keyDateFlyToKef: "Fly AMS → KEF, start Iceland self-drive",
    keyDateKefToAms1: "Fly KEF → AMS (option 1)",
    keyDateKefToAms2: "Fly KEF → AMS (option 2)",
    keyDateReturnFlight: "Return flight AMS → HKG → TPE",
    keyDateArriveTaipei: "Arrive Taipei",
    driversTitle: "Drivers (International)",
    driversSubtitle: "International driver's license info for Iceland rental.",
    driverName: "Name",
    driverFullNameId: "Full name / ID",
    driverIntlLicense: "Int'l license",
  },
  "zh-TW": {
    travelCompanion: "旅遊小幫手",
    countdownTo: "倒數至",
    days: "天",
    hours: "時",
    min: "分",
    sec: "秒",
    currentTime: "目前時間",
    eventPassed: "此活動已結束。",
    today: "就是今天！",
    itinerary: "行程",
    plan: "計畫",
    hotel: "住宿",
    notes: "備註",
    reminders: "注意事項",
    viewOnGoogleMaps: "在 Google 地圖中檢視 →",
    flight: "航班",
    weather: "天氣",
    loading: "載入中…",
    weatherApiHint: "在 .env.local 設定 OPENWEATHER_API_KEY 以取得即時天氣。",
    feelsLike: "體感",
    humidity: "濕度",
    wind: "風速",
    mapTitle: "冰島自駕路線（凱夫拉維克機場出發）",
    mapDescription: "從凱夫拉維克機場出發。在行程資料中新增每日停留點即可顯示於地圖。",
    mapTitleAmsterdam: "阿姆斯特丹 – 住宿",
    mapDescriptionAmsterdam: "阿姆斯特丹住宿地點。",
    amsTripPlans: "阿姆斯特丹行程",
    amsTripPlansSubtitle: "阿姆斯特丹景點與計畫（2/20–21、3/2–3）",
    icelandTripPlans: "冰島行程",
    icelandTripPlansSubtitle: "冰島景點與計畫（2/22 – 3/1）",
    emptyPlansHint: "在 src/data/itinerary.ts 新增你的計畫與地點",
    footer: "2/19 – 3/5 · 住宿與行程編輯於",
    switchToChinese: "繁體中文",
    switchToEnglish: "English",
    keyDateFirstFlight: "首班機（台北 → 香港 → 阿姆斯特丹）",
    keyDateArriveAmsterdam: "抵達阿姆斯特丹",
    keyDateFlyToKef: "飛往凱夫拉維克，開始冰島自駕",
    keyDateKefToAms1: "凱夫拉維克 → 阿姆斯特丹（班次一）",
    keyDateKefToAms2: "凱夫拉維克 → 阿姆斯特丹（班次二）",
    keyDateReturnFlight: "返程班機 阿姆斯特丹 → 香港 → 台北",
    keyDateArriveTaipei: "抵達台北",
    driversTitle: "駕駛人（國際駕照）",
    driversSubtitle: "冰島租車用國際駕照資訊。",
    driverName: "姓名",
    driverFullNameId: "全名 / 證號",
    driverIntlLicense: "國際駕照",
  },
};

const KEY_DATE_MAP: Record<string, keyof (typeof translations)["en"]> = {
  "First flight (TPE → HKG → AMS)": "keyDateFirstFlight",
  "Arrive Amsterdam": "keyDateArriveAmsterdam",
  "Fly AMS → KEF, start Iceland self-drive": "keyDateFlyToKef",
  "Fly KEF → AMS (option 1)": "keyDateKefToAms1",
  "Fly KEF → AMS (option 2)": "keyDateKefToAms2",
  "Return flight AMS → HKG → TPE": "keyDateReturnFlight",
  "Arrive Taipei": "keyDateArriveTaipei",
};

export function translateKeyDateLabel(label: string, locale: Locale): string {
  const key = KEY_DATE_MAP[label];
  if (key) return translations[locale][key];
  return label;
}
