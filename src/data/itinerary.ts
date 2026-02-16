import type { Itinerary, TripPlanItem } from "@/types/itinerary";

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
          url: "https://maps.app.goo.gl/JirgRS9vL7ayJ5zn6",
          time: "每日 09:00 – 18:00 (週五至 21:00)",
        },
        {
          text: "紅燈區秘密博物館 (Red Light Secrets)",
          url: "https://www.google.com/maps/search/?api=1&query=Red+Light+Secrets+Amsterdam",
          time: "每日 11:00 – 22:30 (週末至 23:30)",
        },
        {
          text: "老教堂 (Oude Kerk)",
          url: "https://maps.app.goo.gl/Prpc4ted4xBeQhFT9",
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
          url: "https://maps.app.goo.gl/b53uPMnRuTLB56a9A",
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
          url: "https://maps.app.goo.gl/363ZLKxjLLME41ADA",
          time: "園區開放至 17:00",
          note: "推薦 Henri Willig 霜淇淋。",
        },
      ],
    },
    {
      section: "🇳🇱 重點餐廳：冬季暖胃首選",
      items: [
        {
          text: "Moeders (媽媽的味道)",
          url: "https://www.google.com/maps/search/?api=1&query=Moeders+Amsterdam",
          note: "主打：傳統荷蘭家庭菜，裝潢溫馨。必點：Hutspot（馬鈴薯紅蘿蔔洋蔥燉菜配香腸或培根）。",
        },
        {
          text: "The Seafood Bar",
          url: "https://www.google.com/maps/search/?api=1&query=The+Seafood+Bar+Amsterdam",
          note: "主打：新鮮海鮮，環境現代溫馨。必點：海鮮拼盤或烤魚。",
        },
        {
          text: "Winkel 43",
          url: "https://www.google.com/maps/search/?api=1&query=Winkel+43+Amsterdam",
          note: "號稱全阿姆斯特丹最好吃的蘋果派，酥脆外皮＋厚實蘋果＋鮮奶油，配熱巧克力。",
        },
        {
          text: "De Haven Van Texel (火車站附近)",
          url: "https://www.google.com/maps/search/?api=1&query=De+Haven+Van+Texel+Amsterdam",
          note: "運河景觀餐廳，冬季有豌豆濃湯 Erwtensoep。",
        },
      ],
    },
    {
      section: "🧀 起司專賣店與超市必逛",
      items: [
        {
          text: "Kaasbar Amsterdam (迴轉起司吧)",
          url: "https://maps.app.goo.gl/X88kmu9kmLhouDXV6",
          note: "像迴轉壽司可品嚐各種起司與美酒，室內溫暖。",
        },
        {
          text: "Old Amsterdam Cheese Store",
          url: "https://www.google.com/maps/search/?api=1&query=Old+Amsterdam+Cheese+Store",
          note: "知名陳年起司品牌，大量試吃，可買真空包裝回國。",
        },
        {
          text: "Albert Heijn (AH) 超市",
          url: "https://www.google.com/maps/search/?api=1&query=Albert+Heijn+Amsterdam",
          note: "荷蘭最大連鎖超市。必買：Stroopwafels、Tony's Chocolonely、Chocomel 熱巧克力、Kanjers 煎餅。",
        },
      ],
    },
    {
      section: "🛍️ 重點好物與逛街地圖",
      items: [
        {
          text: "Rituals (荷蘭香氛品牌)",
          url: "https://www.google.com/maps/search/?api=1&query=Rituals+Amsterdam",
          note: "保養與居家噴霧，價格比台灣便宜，高品質伴手禮。",
        },
        {
          text: "De 9 Straatjes (九小街)",
          url: "https://www.google.com/maps/search/?api=1&query=De+9+Straatjes+Amsterdam",
          note: "文青逛街區，獨立設計師小店與復古商店。",
        },
        {
          text: "De Bijenkorf (蜂巢百貨)",
          url: "https://maps.google.com/maps/contrib/101823263129660771153",
          note: "高檔精品百貨，水壩廣場旁，冬天躲進去逛兼吹暖氣。",
        },
        {
          text: "Hema (荷蘭大創)",
          url: "https://www.google.com/maps/search/?api=1&query=Hema+Amsterdam",
          note: "平價雜貨，文具小物與燻香腸 Rookworst 很受歡迎。",
        },
      ],
    },
    {
      section: "❄️ 大冬季提醒",
      items: [
        { text: "日照短", note: "下午 4:30 天黑，戶外美照建議安排在 10:00–15:00。" },
        { text: "防風防水", note: "冬季雨水多風大，建議準備防風防水連帽外套，比雨傘實用。" },
      ] as TripPlanItem[],
    },
    {
      section: "🎨 海牙 (The Hague)：必逛景點",
      items: [
        {
          text: "莫瑞泰斯皇家美術館 (Mauritshuis)",
          url: "https://www.google.com/maps/search/?api=1&query=Mauritshuis+Den+Haag",
          note: "海牙最著名景點，必看維梅爾《戴珍珠耳環的少女》。",
        },
        {
          text: "艾雪博物館 (Escher in Het Paleis)",
          url: "https://www.google.com/maps/search/?api=1&query=Escher+in+Het+Paleis+Den+Haag",
          note: "前皇室宮殿內，錯覺藝術大師艾雪作品。",
        },
        {
          text: "荷蘭國會大廈與騎士廳 (Binnenhof)",
          url: "https://www.google.com/maps/search/?api=1&query=Binnenhof+Den+Haag",
          note: "荷蘭政治核心，建築古老宏偉，歐洲氛圍。",
        },
        {
          text: "和平宮 (Peace Palace)",
          url: "https://www.google.com/maps/search/?api=1&query=Peace+Palace+Den+Haag",
          note: "聯合國國際法院所在地，海牙地標。",
        },
        {
          text: "斯海弗寧恩海灘 (Scheveningen Beach)",
          url: "https://www.google.com/maps/search/?api=1&query=Scheveningen+Beach+Den+Haag",
          note: "離市區約 15 分鐘電車，海濱長廊、摩天輪 SkyView，冬日散步愜意。",
        },
        {
          text: "行程建議",
          note: "早上國會大廈＋莫瑞泰斯美術館 → 中午市中心或 Chinatown 用餐 → 下午 Passage 長廊與 Zeeheldenkwartier → 黃昏 Scheveningen 海邊摩天輪夕陽＋海鮮。",
        },
      ] as TripPlanItem[],
    },
    {
      section: "🛍️ 海牙：必買與購物區",
      items: [
        {
          text: "女王百貨 De Bijenkorf（海牙旗艦）",
          url: "https://www.google.com/maps/search/?api=1&query=De+Bijenkorf+Den+Haag",
          note: "荷蘭最高端百貨之一，化妝品精品齊全，Jellycat 公仔豐富。",
        },
        {
          text: "HEMA",
          url: "https://www.google.com/maps/search/?api=1&query=HEMA+Den+Haag",
          note: "國民雜貨店，Miffy 兔生活用品，價格親民。",
        },
        {
          text: "De Passage 長廊",
          url: "https://www.google.com/maps/search/?api=1&query=De+Passage+Den+Haag",
          note: "荷蘭最古老購物拱廊，建築即藝術品，精緻品牌與文創小店。",
        },
        {
          text: "Zeeheldenkwartier 文青區",
          url: "https://www.google.com/maps/search/?api=1&query=Zeeheldenkwartier+Den+Haag",
          note: "設計師選物店、二手服飾、概念店，Prins Hendrikstraat 街道生活感十足。",
        },
        {
          text: "Grote Marktstraat",
          url: "https://maps.app.goo.gl/5tnfAfc8yZBenzTY9",
          note: "主要商業大道，Uniqlo、Primark 等旗艦大店集中。",
        },
      ],
    },
    {
      section: "🍴 海牙：好吃推薦",
      items: [
        {
          text: "生鯡魚 (Haring)",
          url: "https://www.google.com/maps/search/?api=1&query=Frens+Haringhandel+Den+Haag",
          note: "經典生鯡魚配洋蔥酸黃瓜。推薦 Frens Haringhandel 或 Simonis。",
        },
        {
          text: "荷蘭鬆餅 (Stroopwafel)",
          url: "https://www.google.com/maps/search/?api=1&query=Stroopwafel+Den+Haag",
          note: "市集或超市現做，焦糖香氣十足。",
        },
        {
          text: "海牙中國城 (Chinatown)",
          url: "https://www.google.com/maps/search/?api=1&query=Chinatown+Den+Haag",
          note: "全荷蘭著名的中餐與亞洲料理，想念家鄉味可來。",
        },
        {
          text: "Haagse Bluf / Foodhallen",
          url: "https://www.google.com/maps/search/?api=1&query=Foodhallen+Den+Haag",
          note: "室內美食廣場，12 個特色攤位與酒吧，一次嘗多國美食。",
        },
        {
          text: "斯海弗寧恩海鮮",
          url: "https://www.google.com/maps/search/?api=1&query=Scheveningen+seafood+restaurant",
          note: "海邊鮮蝦、生蠔、炸魚 Kibbeling，配夕陽最高享受。",
        },
      ],
    },
  ],
  // Extra stops for Iceland map (restaurants, POIs)
  icelandMapExtraStops: [
    {
      lat: 64.25011,
      lng: -15.203908,
      label: "Pakkhús Restaurant (龍蝦餐廳)",
      mapUrl: "https://maps.app.goo.gl/yrNKYbS5LmHxmB6J6",
    },
  ],
  // Iceland: 景點與計畫
  icelandTripPlans: [
    {
      section: "✅ 已預訂活動",
      items: [
        { text: "2/24 9:30 冰川健行", url: "https://maps.app.goo.gl/huRrgov3aFGNE2TY6", lat: 64.048627, lng: -16.179607, note: "集合：Jökulsárlón 停車場" },
        { text: "2/27 16:30 Sky Lagoon 天空之湖", url: "https://maps.app.goo.gl/kActQZzajG3vmwm69", lat: 64.116465, lng: -21.946436, note: "Ritual 水療儀式" },
      ],
    },
    {
      section: "🇮🇸 冰島：2/23 重點餐廳",
      items: [
        {
          text: "Pakkhús Restaurant (龍蝦餐廳)",
          url: "https://maps.app.goo.gl/yrNKYbS5LmHxmB6J6",
          lat: 64.25011,
          lng: -15.203908,
          time: "12:00 – 21:00",
          note: "赫本市區必吃。",
        },
      ],
    },
    {
      section: "🧊 冰洞探索 (Ice Cave Discovery)",
      items: [
        {
          text: "傑古沙龍冰河湖 (Jökulsárlón) 停車場 — 集合地點",
          url: "https://maps.app.goo.gl/huRrgov3aFGNE2TY6",
          lat: 64.048627,
          lng: -16.179607,
          note: "活動：冰川健行 + 藍冰洞探索",
        },
        { text: "Official website：Ice Cave Adventure (Local Guide)", url: "https://localguide.is/ice-cave-adventure/" },
        { text: "費用：約 NT$8,265 (34,900 ISK)" },
        { text: "時長：5~7 小時（深度冒險行程）" },
        { text: "限制：16 歲以上，鞋號需 EUR 35 以上以固定冰爪" },
        { text: "關鍵叮嚀：行程長達 5–7 小時，務必確認集合時間。若當天要趕往民宿或 Höfn 晚餐，請務必算準日光時間。" },
      ],
    },
    {
      section: "🏛️ 雷克雅維克市區 (Reykjavik)",
      items: [
        { text: "哈爾格林姆教堂 (Hallgrímskirkja)", url: "https://www.google.com/maps/search/?api=1&query=Hallgrimskirkja+Reykjavik+Iceland", lat: 64.1416, lng: -21.9266 },
        { text: "哈帕音樂廳 (Harpa Concert Hall)", url: "https://www.google.com/maps/search/?api=1&query=Harpa+Concert+Hall+Reykjavik+Iceland", lat: 64.1503, lng: -21.9328 },
        { text: "天空之湖溫泉 (Sky Lagoon)", url: "https://maps.app.goo.gl/kActQZzajG3vmwm69", lat: 64.116465, lng: -21.946436, note: "含著名的 7-step Ritual 水療儀式。建議事先預訂。" },
        { text: "→ 體驗分享：藍湖＆天空潟湖", url: "https://lilianyolo.wordpress.com/2025/04/11/冰島自駕自由行｜blue-lagoon-藍湖＆sky-lagoon-天空潟湖體驗全紀/" },
      ],
    },
    {
      section: "🌋 黃金圈 (Golden Circle)",
      items: [
        { text: "辛格韋德利國家公園 (Þingvellir National Park)", url: "https://www.google.com/maps/search/?api=1&query=Thingvellir+National+Park+Iceland", lat: 64.2554, lng: -21.1287 },
        { text: "史托克間歇噴泉 (Strokkur Geyser)", url: "https://www.google.com/maps/search/?api=1&query=Strokkur+Geyser+Iceland", lat: 64.3126, lng: -20.2994 },
        { text: "古佛斯瀑布 (Gullfoss Falls)", url: "https://www.google.com/maps/search/?api=1&query=Gullfoss+Falls+Iceland", lat: 64.3261, lng: -20.1212 },
        { text: "→ 體驗分享：辛格韋勒國家公園必拍景點", url: "https://mimigo.tw/thingvallavatn/" },
        { text: "→ 體驗分享：Kerið Crater 6500年巨大火山口", url: "https://mimigo.tw/kerid-crater/" },
        { text: "→ 體驗分享：Bruarfoss 蒂芬尼藍瀑布", url: "https://mimigo.tw/bruarfoss-waterfall/" },
        { text: "→ 體驗分享：蓋錫爾間歇泉 Geysir 世界奇觀", url: "https://mimigo.tw/strokkur-geyser/" },
        { text: "→ 體驗分享：Gullfoss 黃金瀑布氣勢磅礴", url: "https://mimigo.tw/iceland-gullfoss/" },
      ],
    },
    {
      section: "🍽️ 冰島金圈美食",
      items: [
        { text: "Efsti-Dalur II 農場 (鮮奶冰淇淋)", url: "https://maps.app.goo.gl/cAGUdLnULZ45SnMV7", lat: 64.242431, lng: -20.551983 },
        { text: "Kaffi Krus：漢堡披薩", url: "https://maps.app.goo.gl/yY8q8t2hC6SycqMa6", lat: 63.9344, lng: -20.9972, note: "Kronan 超市旁順道補貨" },
        { text: "→ 體驗分享：Efsti-Dalur II 農場 (鮮奶冰淇淋)", url: "https://mimigo.tw/farmhotel-efstidalur/" },
        { text: "→ 體驗分享：Kaffi Krus 塞爾福斯北歐小館", url: "https://mimigo.tw/selfoss-kaffi-krus/" },
      ],
    },
    {
      section: "🌊 南岸與東南邊 (South & South East)",
      items: [
        { text: "塞里雅蘭瀑布 (Seljalandsfoss) + Gljúfrabúi 瀑布", url: "https://www.google.com/maps/search/?api=1&query=Seljalandsfoss+Iceland", lat: 63.6157, lng: -19.9893, note: "Gljúfrabúi 是隱藏在岩縫中的祕境瀑布，就在塞里雅蘭旁邊。" },
        { text: "斯科加爾瀑布 (Skógafoss)", url: "https://www.google.com/maps/search/?api=1&query=Skogafoss+Iceland", lat: 63.532, lng: -19.5113 },
        { text: "飛機殘骸遺址 (Sólheimasandur Plane Wreck)", url: "https://www.google.com/maps/search/?api=1&query=Solheimasandur+Plane+Wreck+Iceland", lat: 63.4903, lng: -19.3643, note: "從停車場走到殘骸處單程約 45–60 分鐘。現場通常有付費接駁車。" },
        { text: "斯卡夫塔冰川健行 (Skaftafell / Falljökull)", url: "https://www.google.com/maps/search/?api=1&query=Skaftafell+Glacier+Iceland", lat: 64.015, lng: -16.9753, note: "大部分冰川健行團在此集合。" },
        { text: "鑽石冰沙灘 (Diamond Beach) 781", url: "https://maps.app.goo.gl/Gkuj6zXzzuZHSJuF9", lat: 64.0467, lng: -16.1778 },
        { text: "Sea Viewpoint (靠近 Höfn 方向)", url: "https://www.google.com/maps/search/?api=1&query=Sea+Viewpoint+Hofn+Iceland", lat: 64.2592, lng: -15.2099 },
      ],
    },
    {
      section: "🦭 西邊斯奈山半島 (Snæfellsnes Peninsula)",
      items: [
        { text: "海豹沙灘 (Ytri Tunga)", url: "https://www.google.com/maps/search/?api=1&query=Ytri+Tunga+Iceland", lat: 64.8699, lng: -23.5544 },
        { text: "布迪爾黑教堂 (Búðakirkja)", url: "https://www.google.com/maps/search/?api=1&query=Budakirkja+Black+Church+Iceland", lat: 64.8217, lng: -23.3863 },
        { text: "瓦汀舍利爾洞穴 (Vatnshellir Cave)", url: "https://www.google.com/maps/search/?api=1&query=Vatnshellir+Cave+Iceland", lat: 64.7489, lng: -23.7733, note: "需預約，約台幣 1,000 / 人。" },
      ],
    },
    {
      section: "💡 冰島自駕小提醒",
      items: [
        "冬日駕駛：2 月前往西邊或東南邊路況變動極大，出發前務必確認 road.is",
        "Sky Lagoon：建議事先預訂，水療儀式有場次限制。",
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
        address: "F985, 781 Hornafjörður, Iceland",
        phone: "+354 854 3133",
        coordinates: { lat: 64.5385, lng: -14.3894 },
        mapUrl: "https://maps.app.goo.gl/ptdZ398wpUCnN3kWA",
      },
      notes: [
        "08:30 海拉出發：晨曦中啟程，避開全黑駕駛，確保有充足日光看瀑布。",
        "12:00 維克午餐：在 Vík 快速用餐並加滿油。絕對跳過飛機殘骸，將寶貴的 2 小時日光留給冰河湖。",
        "15:30 冰河湖：享受傑古沙龍與鑽石沙灘的夕陽美景。",
        "17:00 赫本晚餐：抵達赫本吃龍蝦大餐（建議預約 17:00 開門首波）。",
        "18:15 啟程回程：離開赫本往回開約 50 公里（約 45–60 分鐘）。",
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
        address: "F985, 781 Hornafjörður, Iceland",
        phone: "+354 854 3133",
        coordinates: { lat: 64.5385, lng: -14.3894 },
        mapUrl: "https://maps.app.goo.gl/ptdZ398wpUCnN3kWA",
      },
      notes: [
        "Ice Cave Discovery（冰川健行 + 藍冰洞探索）集合：Jökulsárlón 停車場",
        "行程 5~7 小時，務必確認集合時間。算準日光時間以趕往 Vagnsstadir Guesthouse 或 Höfn 晚餐。",
        "晚上有機會看到極光",
        "如果冰川健行取消，挪到 Vík 冰川健行",
      ],
      noteLinks: [
        { text: "Jökulsárlón 停車場（集合地點）", url: "https://maps.app.goo.gl/huRrgov3aFGNE2TY6", lat: 64.048627, lng: -16.179607 },
      ],
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
      notes: [
        "冰河湖 → 回頭到 Vík、黑沙灘、追極光",
        "希望空檔可再往東開一些到「Sea Viewpoint」（網路上說景色很強）（從住宿過去約一小時）",
      ],
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
      notes: [
        "慢活日 / 天氣緩衝 / 可去飛機殘骸",
        "2/23、2/25 沒看完的景點可利用今天逛",
      ],
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
        mapUrl: "https://maps.app.goo.gl/jdE6fjTKqdmSPxHC8",
      },
      notes: [
        "Vík → 回市區 → Sky Lagoon 日落 Ritual（已訂 16:30，17:30 入場最美）",
        "市區景點：",
        "1. 哈爾格林姆教堂（停留 1 小時）",
        "2. 哈帕音樂廳（停留 0.5 小時）",
        "3. 天空之湖溫泉（水療儀式）",
      ],
      noteLinks: [
        { text: "Sky Lagoon 天空之湖", url: "https://maps.app.goo.gl/kActQZzajG3vmwm69", lat: 64.116465, lng: -21.946436 },
      ],
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
        mapUrl: "https://maps.app.goo.gl/jdE6fjTKqdmSPxHC8",
      },
      notes: [
        "黃金圈一日遊（辛格韋德利 → 間歇泉 → 古佛斯）",
        "回城吃晚餐，輕鬆結束",
        "還有時間的話：",
        "1. 凱瑞斯火口湖（10:00～17:00 / 600 克朗 ≈ NT$141 / 免費停車）",
        "2. 克為努瀑布（Kvernufoss）",
      ],
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
        "返回航站附近住宿、收行李、早睡",
        "Plan A. 可以去冰島西邊：",
        "1. 海豹沙灘",
        "2. 瓦汀舍利爾洞穴（需預約，約台幣 1,000 / 人）",
        "3. 黑教堂",
        "Plan B. 市區逛街",
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
