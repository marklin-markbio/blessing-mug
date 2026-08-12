import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_TC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const notoSerif = Noto_Serif_TC({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "臺灣馬克文創美術館｜祈福馬克杯 · 保溫瓶",
  description:
    "馬克文創有限公司｜與日本象印合作的祈福保溫杯。白沙屯媽祖加持意象，保佑健康平安。粉紅超跑隨行杯等系列。",
  keywords: [
    "馬克文創",
    "臺灣馬克文創美術館",
    "祈福杯",
    "粉紅超跑",
    "白沙屯媽祖",
    "保溫瓶",
    "象印",
    "Blessing Mug",
  ],
  openGraph: {
    title: "臺灣馬克文創美術館｜祈福馬克杯 · 保溫瓶",
    description: "線香炊煙之間，一杯平安。白沙屯媽祖保佑健康。",
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSans.variable} ${notoSerif.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
