export type ProductSeries = "安" | "樂" | "文" | "財" | "禱";

export type Product = {
  id: string;
  name: string;
  subtitle: string;
  series: ProductSeries;
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
  highlight?: boolean;
  blurb: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export const products: Product[] = [
  {
    id: "pink-supercar-mazu",
    name: "粉紅超跑隨行杯",
    subtitle: "媽祖聖像版",
    series: "安",
    price: 1800,
    originalPrice: 2200,
    image: "/gallery/pink-supercar-mazu.jpg",
    badge: "拱授證第114-048號",
    highlight: true,
    blurb: "帶著粉紅超跑，向白沙屯媽祖祈求平安加持永遠相隨。",
  },
  {
    id: "gratitude-buddha",
    name: "感恩杯",
    subtitle: "佛祖慈悲加持平安",
    series: "安",
    price: 1800,
    originalPrice: 2200,
    image: "/gallery/gratitude-buddha.jpg",
    blurb: "祈福家人親朋身體健康平安，不要有病痛纏身，是人人想要的簡單幸福。",
  },
  {
    id: "cute-fish",
    name: "可愛杯",
    subtitle: "魚兒魚兒水中游",
    series: "樂",
    price: 1800,
    originalPrice: 2200,
    image: "/gallery/cute-fish.jpeg",
    blurb: "馬克體書法與生活意象結合，讓日常喝水也充滿歡喜。",
  },
  {
    id: "cute-dog-tail",
    name: "可愛杯",
    subtitle: "露在沙發下的狗尾巴",
    series: "樂",
    price: 1800,
    originalPrice: 2200,
    image: "/gallery/cute-dog-tail.jpeg",
    blurb: "簡約素雅的文創保溫杯，陪您歡笑無窮、日子更有溫度。",
  },
  {
    id: "cute-cat-piano",
    name: "可愛杯",
    subtitle: "貓在鋼琴上跳舞",
    series: "樂",
    price: 1800,
    originalPrice: 2200,
    image: "/gallery/cute-cat-piano.jpeg",
    blurb: "書法藝術與高品質保溫機能相遇，輕盈靈動、好心情隨身。",
  },
  {
    id: "cute-waltz",
    name: "可愛杯",
    subtitle: "毛小孩也有華爾滋",
    series: "樂",
    price: 1800,
    originalPrice: 2200,
    image: "/gallery/cute-waltz.jpeg",
    blurb: "誠摯祝福大家都能平安快樂、歡笑無窮。",
  },
  {
    id: "finance-fude",
    name: "財運杯",
    subtitle: "福德正神加持財運",
    series: "財",
    price: 1800,
    originalPrice: 2200,
    image: "/gallery/finance-fude.jpg",
    blurb: "求財順利、財富滿盈、業績長虹、官運亨通。",
  },
  {
    id: "prayer-cup",
    name: "禱告杯",
    subtitle: "凡你們禱告祈求就必得著",
    series: "禱",
    price: 1800,
    originalPrice: 2200,
    image: "/gallery/prayer-cup.jpg",
    blurb: "神賜給各位乃是剛強的心和喜樂的力量，信仰路上豐盛相隨。",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    src: "/gallery/pink-supercar-mazu.jpg",
    alt: "粉紅超跑隨行杯 媽祖聖像版",
    caption: "粉紅超跑隨行杯 · 媽祖聖像版 · 拱授證第114-048號",
  },
  {
    src: "/gallery/pink-supercar-alt.jpg",
    alt: "粉紅超跑隨行杯",
    caption: "粉紅超跑 Pink Supercar · 全球限量意象",
  },
  {
    src: "/gallery/gratitude-buddha.jpg",
    alt: "感恩杯 佛祖慈悲加持平安",
    caption: "感恩杯 · 佛祖慈悲加持平安",
  },
  {
    src: "/gallery/cute-fish.jpeg",
    alt: "可愛杯 魚兒魚兒水中游",
    caption: "可愛杯 · 魚兒魚兒水中游",
  },
  {
    src: "/gallery/cute-dog-tail.jpeg",
    alt: "可愛杯 露在沙發下的狗尾巴",
    caption: "可愛杯 · 露在沙發下的狗尾巴",
  },
  {
    src: "/gallery/cute-cat-piano.jpeg",
    alt: "可愛杯 貓在鋼琴上跳舞",
    caption: "可愛杯 · 貓在鋼琴上跳舞",
  },
  {
    src: "/gallery/cute-waltz.jpeg",
    alt: "可愛杯 毛小孩也有華爾滋",
    caption: "可愛杯 · 毛小孩也有華爾滋",
  },
  {
    src: "/gallery/finance-fude.jpg",
    alt: "財運杯 福德正神加持財運",
    caption: "財運杯 · 福德正神加持財運",
  },
  {
    src: "/gallery/finance-fude-alt.jpg",
    alt: "福德正神加持財運",
    caption: "福德正神加持 · 財運系列",
  },
  {
    src: "/gallery/prayer-cup.jpg",
    alt: "禱告杯",
    caption: "禱告杯 · 凡你們禱告祈求就必得著",
  },
  {
    src: "/brand/zojirushi-logo.jpg",
    alt: "日本象印 Logo",
    caption: "合作夥伴 · 日本象印 ZOJIRUSHI",
  },
  {
    src: "/brand/zojirushi-product.jpg",
    alt: "象印保溫杯",
    caption: "象印製造 · 保溫杯界精品質感",
  },
];

export const seriesCopy: Record<
  ProductSeries,
  { title: string; desc: string }
> = {
  安: {
    title: "安 · 健康平安",
    desc: "祈福自己及家人親朋好友身體健康平安，不要有病痛纏身折磨——人人都想要的簡單幸福。",
  },
  樂: {
    title: "樂 · 日日歡喜",
    desc: "願生活充滿歡喜與溫暖，笑口常開、心情自在，日子更有溫度。",
  },
  文: {
    title: "文 · 金榜題名",
    desc: "課業進步、升學考試、高普考特考——文昌庇佑，戰無不勝、出人頭地。",
  },
  財: {
    title: "財 · 財運亨通",
    desc: "企盼財富風生水起、時來運轉，過著有品質、有品味的生活。",
  },
  禱: {
    title: "禱 · 祈願得著",
    desc: "剛強的心、喜樂的力量；誠心祈求，必得豐盛永恆的生命。",
  },
};

/** 精簡自《馬克文創有限公司》官網／PDF 文案 */
export const siteCopy = {
  heroEyebrow: "白沙屯媽祖 · 線香炊煙 · 保佑健康",
  heroTitle: "一杯平安水，隨身保佑",
  heroLead:
    "想要暢飲來自媽祖保佑的水甜茶香，還有咖啡果香濃郁嗎？帶著粉紅超跑隨行杯，誠摯向白沙屯媽祖祈求平安加持永遠相隨。",
  productsIntro:
    "請認明馬克文創與日本象印合作的文創保溫杯——同時擁有日本象印品質與台灣「粉紅超跑」品牌，全球獨一無二。原價 NT$2,200，優惠 NT$1,800。",
  blessingTitle: "雲煙裊裊，三圈祈福",
  blessingP1:
    "來到苗栗白沙屯拱天宮，廟裡廟外都是滿滿持香的信徒。擠入大廳，靜靜望著白沙屯媽祖虔誠敬拜；右手捧著粉紅超跑隨行杯，在天公爐香火上方順時鐘繞三次，發自內心向媽祖祈求保佑一切平安順利。",
  blessingP2:
    "從此之後，喝水感到可口甘甜，是媽祖賜予的平安水；泡茶沁香回甘，是加持後的平安茶；倒入咖啡芳醇四溢，彷彿天天能量滿滿的平安咖啡。無論走到哪裏，心裏都有一股淡淡平靜的安定感。",
  blessingQuote:
    "我相信那是來自白沙屯媽祖的平安加持，而且時時刻刻都讓我充滿著快樂行善的正向能量！",
  limitedNote:
    "為分享給經常到拱天宮拜拜、熱情支持白沙屯媽祖遶境（全球三大宗教文化遶境之一）的好朋友們，我們發行限量版粉紅超跑隨行杯。數量有限，一旦錯過就沒有了——建議早買，明年三月隨身攜帶，與媽祖一起遶境護佑人間。",
  aboutP1:
    "創辦人華爾街馬克（林豐盛 Mark Lin）在紐約華爾街有二十多年國際金融專業經驗。卸下執行長一職後，發現文化創意將成為推進未來的另一關鍵，於是結合「文化創意」「生活日用品」與創新思維，創造更符合生活需求的產品。",
  aboutP2:
    "行遍台灣縣市鄉鎮，感受在地民俗與宮廟信仰，創作近兩千幅馬克體書法，融合詩詞歌賦、宗教信仰與台灣風俗。歷經多年努力，說服全球保温杯市佔前三的日本象印合作——這是象印百餘年歷史中唯一與外國企業的合作，讓書法之美完整呈現於保溫杯外觀，簡約素雅、高貴不凡，猶如保溫杯界的 LV。",
  aboutP3:
    "我們已向經濟部智慧財產局申請註冊：臺灣馬克文創美術館、感恩杯、粉紅超跑、祈福杯、財運杯、祈願杯、禱告杯及可愛杯等一系列品牌，形塑全球最獨特的文創保溫杯。",
  galleryIntro:
    "書法作品之美，呈現在每一只杯子上。以下為系列商品與合作夥伴的品牌形象。",
  seriesIntro:
    "我們熱推「安、樂、文、財、禱」符合生活主軸的系列，幫助您選擇現階段最需要的文創保溫杯。",
};

export const company = {
  name: "馬克文創有限公司",
  museum: "臺灣馬克文創美術館",
  brandEn: "Taiwan Mark Cultural and Creative Art Museum",
  taxId: "93640608",
  address: "台北市中山區松江路101號4樓之2",
  email: "service@blessingmug.com",
  founder: "林豐盛 Mark Lin",
  founderTitle: "華爾街馬克",
  partner: "日本象印 ZOJIRUSHI",
  promoNote: "為慶祝限量版粉紅超跑隨行杯熱銷，全區商品訂購免運費（限台灣本島及離島）至今年12月31日止",
};
