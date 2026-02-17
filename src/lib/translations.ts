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
    weatherApiHintVercel: string;
    weatherUnavailable: string;
    feelsLike: string;
    humidity: string;
    wind: string;
    mapTitle: string;
    mapDescription: string;
    mapTitleAmsterdam: string;
    mapDescriptionAmsterdam: string;
    rentalCarTitle: string;
    rentalCarDescription: string;
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
    rentalCarLinkText: string;
    forecastLinksTitle: string;
    forecastLinksSubtitle: string;
    forecastAuroraTipTitle: string;
    forecastAuroraTipBody: string;
    forecastRoadTipTitle: string;
    forecastRoadTipBody: string;
    forecastSafeTipTitle: string;
    forecastSafeTipBody: string;
    forecastTipsTitle: string;
    forecastOfficialLinks: string;
    viewTripPlans: string;
    viewAmsTripPlans: string;
    viewIcelandTripPlans: string;
    backToDashboard: string;
    tripPlansPageTitle: string;
    shortcutItinerary: string;
    shortcutCurrency: string;
    shortcutWeatherForecast: string;
    shortcutCarRental: string;
    heroDescriptionLine1: string;
    heroDescriptionLine2: string;
    heroTag1: string;
    heroTag2: string;
    heroTag3: string;
    carRentalArrivalTitle: string;
    carRentalArrivalSubtitle: string;
    carRentalBookingLabel: string;
    carRentalStep1Title: string;
    carRentalStep1Desc: string;
    carRentalStep2Title: string;
    carRentalStep2Desc: string;
    carRentalStep3Title: string;
    carRentalStep3Desc: string;
    carRentalViewMap: string;
    carRentalBookShuttle: string;
    carRentalAssistance: string;
    amsTrafficTitle: string;
    amsTrafficSubtitle: string;
    offlineMapTip: string;
    latLngLabel: string;
    pwaOfflineUseGps: string;
    offlineMapsMeTip: string;
    openInMapsMe: string;
    openInGoogleMaps: string;
    icelandHotelsTitle: string;
    icelandHotelsSubtitle: string;
    gpsLocation: string;
    nights: string;
    printTripSummary: string;
    printOrSavePdf: string;
    viewTripSummaryPdf: string;
    tripNotPlannedYet: string;
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
    weatherApiHintVercel: "On Vercel: add OPENWEATHER_API_KEY in Project Settings → Environment Variables, then redeploy.",
    weatherUnavailable: "Weather unavailable",
    feelsLike: "Feels like",
    humidity: "humidity",
    wind: "wind",
    mapTitle: "Iceland self-drive from KEF",
    mapDescription: "Route from Keflavík Airport. Add your daily stops in the itinerary data to see them here.",
    mapTitleAmsterdam: "Amsterdam – Hotel",
    mapDescriptionAmsterdam: "Hotel location in Amsterdam.",
    rentalCarTitle: "Rental car – KEF to pick-up",
    rentalCarDescription: "Route from the terminal (Passenger Arrivals / Shuttle) to the rental car location on Flugvellir.",
    amsTripPlans: "AMS trip plans",
    amsTripPlansSubtitle: "Places and plans for Amsterdam (Feb 20–21, Mar 2–3)",
    icelandTripPlans: "Iceland trip plans",
    icelandTripPlansSubtitle: "Places and plans for Iceland (Feb 22 – Mar 1)",
    emptyPlansHint: "Add your plans and places in src/data/itinerary.ts",
    footer: "Feb 19 – Mar 5",
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
    rentalCarLinkText: "Lotus Car Rental – Book & info",
    forecastLinksTitle: "Weather & forecast links",
    forecastLinksSubtitle: "Northern Lights, Iceland weather, road conditions and safe travel.",
    forecastAuroraTipTitle: "Northern Lights (0–9 scale)",
    forecastAuroraTipBody: "Higher number = stronger activity. You still need a clear or partly clear sky and darkness—check cloud cover and sunset/moon times on the aurora page.",
    forecastRoadTipTitle: "Road conditions (road.is)",
    forecastRoadTipBody: "Green = passable, light green = some ice/snow, yellow = slippery, orange/red = difficult or closed. Check the map and road numbers (e.g. Ring Road 1) before driving.",
    forecastSafeTipTitle: "Safe Travel",
    forecastSafeTipBody: "Check weather and road status before leaving. In winter, daylight is short—plan driving in daylight when possible. Save the emergency number 112.",
    forecastTipsTitle: "Quick tips",
    forecastOfficialLinks: "Official links",
    viewTripPlans: "View AMS & Iceland trip plans",
    viewAmsTripPlans: "View AMS trip plans",
    viewIcelandTripPlans: "View Iceland trip plans",
    backToDashboard: "Back to dashboard",
    tripPlansPageTitle: "Trip plans",
    shortcutItinerary: "Trip plans",
    shortcutCurrency: "Currency converter",
    shortcutWeatherForecast: "Weather & forecast links",
    shortcutCarRental: "Car rental arrival",
    heroDescriptionLine1: "Integrated itinerary for Iceland & Amsterdam.",
    heroDescriptionLine2: "Skip the chat logs. Forget Notion. One-tap navigation and daily plans, all in one place.",
    heroTag1: "Zero Chat Searching",
    heroTag2: "One-Tap Maps",
    heroTag3: "Real-Time Sync",
    carRentalArrivalTitle: "Car Rental Arrival Guide",
    carRentalArrivalSubtitle: "Lotus Car Rental – KEF airport pick-up",
    carRentalBookingLabel: "Booking number",
    carRentalStep1Title: "Arrival",
    carRentalStep1Desc: "Clear customs and collect baggage.",
    carRentalStep2Title: "Meeting point",
    carRentalStep2Desc: "Find the Lotus Car Rental meeting area.",
    carRentalStep3Title: "Shuttle",
    carRentalStep3Desc: "Take the shuttle to the rental office.",
    carRentalViewMap: "View airport map",
    carRentalBookShuttle: "Book shuttle now",
    carRentalAssistance: "Lotus Assistance Portal",
    amsTrafficTitle: "Amsterdam Traffic & Transit",
    amsTrafficSubtitle: "Public transport, trains, and airport links for getting around Amsterdam.",
    offlineMapTip: "Please confirm you have downloaded Iceland offline map in Google Maps App.",
    latLngLabel: "Lat, Lng",
    pwaOfflineUseGps: "Choose GPS location",
    offlineMapsMeTip: "When offline, choose: MAPS.ME (GPS) or Google Maps.",
    openInMapsMe: "MAPS.ME (GPS)",
    openInGoogleMaps: "Google Maps",
    icelandHotelsTitle: "Iceland Hotels (GPS for offline)",
    icelandHotelsSubtitle: "All booked hotels with GPS coordinates. Use MAPS.ME when offline.",
    gpsLocation: "GPS",
    nights: "Nights",
    printTripSummary: "Print Trip Summary",
    printOrSavePdf: "Print / Save as PDF",
    viewTripSummaryPdf: "View Trip Summary PDF",
    tripNotPlannedYet: "Itinerary not yet planned in detail. Above is a reference list.",
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
    weatherApiHintVercel: "Vercel 部署：在 Project Settings → Environment Variables 新增 OPENWEATHER_API_KEY，然後重新部署。",
    weatherUnavailable: "無法取得天氣",
    feelsLike: "體感",
    humidity: "濕度",
    wind: "風速",
    mapTitle: "冰島自駕路線（凱夫拉維克機場出發）",
    mapDescription: "從凱夫拉維克機場出發。在行程資料中新增每日停留點即可顯示於地圖。",
    mapTitleAmsterdam: "阿姆斯特丹 – 住宿",
    mapDescriptionAmsterdam: "阿姆斯特丹住宿地點。",
    rentalCarTitle: "租車 – 凱夫拉維克機場至取車點",
    rentalCarDescription: "從機場航廈（入境／接駁車）到 Flugvellir 租車地點的路線。",
    amsTripPlans: "阿姆斯特丹行程",
    amsTripPlansSubtitle: "阿姆斯特丹景點與計畫（2/20–21、3/2–3）",
    icelandTripPlans: "冰島行程",
    icelandTripPlansSubtitle: "冰島景點與計畫（2/22 – 3/1）",
    emptyPlansHint: "在 src/data/itinerary.ts 新增你的計畫與地點",
    footer: "2/19 – 3/5",
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
    rentalCarLinkText: "Lotus Car Rental – 預訂與資訊",
    forecastLinksTitle: "天氣與預報連結",
    forecastLinksSubtitle: "極光、冰島天氣、路況與安全旅遊。",
    forecastAuroraTipTitle: "極光指數（0–9）",
    forecastAuroraTipBody: "數字愈高代表活動愈強。仍需晴朗或少雲且天黑；請在極光頁面查看雲量與日落／月出時間。",
    forecastRoadTipTitle: "路況 (road.is)",
    forecastRoadTipBody: "綠色＝可通行，淺綠＝部分冰雪，黃＝易滑，橘／紅＝難行或封閉。出發前查地圖與道路編號（如環島 1 號）。",
    forecastSafeTipTitle: "安全旅遊",
    forecastSafeTipBody: "出發前查天氣與路況。冬季日照短，盡量安排在白天開車。記下緊急電話 112。",
    forecastTipsTitle: "小提醒",
    forecastOfficialLinks: "官方連結",
    viewTripPlans: "查看阿姆斯特丹與冰島行程",
    viewAmsTripPlans: "查看阿姆斯特丹行程",
    viewIcelandTripPlans: "查看冰島行程",
    backToDashboard: "返回主頁",
    tripPlansPageTitle: "行程與景點",
    shortcutItinerary: "行程與景點",
    shortcutCurrency: "幣別換算",
    shortcutWeatherForecast: "天氣與預報連結",
    shortcutCarRental: "租車抵達指南",
    heroDescriptionLine1: "冰島與阿姆斯特丹整合行程。",
    heroDescriptionLine2: "別再翻聊天紀錄。忘掉 Notion。一鍵導航與每日計畫，通通在這裡。",
    heroTag1: "Zero Chat Searching",
    heroTag2: "One-Tap Maps",
    heroTag3: "Real-Time Sync",
    carRentalArrivalTitle: "租車抵達指南",
    carRentalArrivalSubtitle: "Lotus Car Rental – 凱夫拉維克機場取車",
    carRentalBookingLabel: "訂單編號",
    carRentalStep1Title: "抵達",
    carRentalStep1Desc: "通關、領取行李。",
    carRentalStep2Title: "集合點",
    carRentalStep2Desc: "前往 Lotus Car Rental 集合處。",
    carRentalStep3Title: "接駁車",
    carRentalStep3Desc: "搭乘接駁車至租車辦公室。",
    carRentalViewMap: "查看機場地圖",
    carRentalBookShuttle: "預約接駁車",
    carRentalAssistance: "Lotus Assistance Portal",
    amsTrafficTitle: "阿姆斯特丹交通資訊",
    amsTrafficSubtitle: "大眾運輸、火車與機場交通連結，方便在阿姆斯特丹移動。",
    offlineMapTip: "請確認已在 Google Maps App 中下載冰島離線地圖。",
    latLngLabel: "緯度／經度",
    pwaOfflineUseGps: "選擇 GPS 座標導航",
    offlineMapsMeTip: "離線時請選擇：MAPS.ME（GPS）或 Google 地圖。",
    openInMapsMe: "MAPS.ME（GPS）",
    openInGoogleMaps: "Google 地圖",
    icelandHotelsTitle: "冰島住宿（離線 GPS）",
    icelandHotelsSubtitle: "所有預訂住宿與 GPS 座標。離線時請使用 MAPS.ME。",
    gpsLocation: "GPS",
    nights: "住宿日期",
    printTripSummary: "列印行程摘要",
    printOrSavePdf: "列印 / 儲存為 PDF",
    viewTripSummaryPdf: "檢視行程摘要 PDF",
    tripNotPlannedYet: "行程尚未詳細規劃，以上為參考清單。",
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
