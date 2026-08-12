import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SmokeField } from "@/components/SmokeField";
import {
  company,
  galleryItems,
  products,
  seriesCopy,
  siteCopy,
} from "@/data/products";
import { aboutNav } from "@/data/about";

const faqs = [
  {
    q: "粉紅超跑有什麼特別？",
    a: "粉紅超跑隨行杯（媽祖聖像版）取得拱授證第114-048號；「粉紅超跑 Pink Supercar」商標著作權已向經濟部智財局申請註冊，並與日本象印合作製造。",
  },
  {
    q: "保溫杯是哪裡製造？",
    a: "與擁有百餘年歷史、全球保温杯市佔前三的日本象印合作——這是象印唯一與外國企業的合作，結合馬克體書法藝術與高品質保溫機能。",
  },
  {
    q: "運費怎麼算？",
    a: company.promoNote + "。詳情請來信客服確認。",
  },
  {
    q: "如何訂購？",
    a: `請來信 ${company.email} 訂購諮詢，我們將盡快回覆您。`,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* Hero — full-bleed 主視覺 + 官方 logo */}
        <section className="relative min-h-[100svh] overflow-hidden bg-[#f7e9df]">
          <Image
            src="/brand/hero.webp"
            alt="馬克文創祈福保溫杯主視覺｜粉紅超跑隨行杯"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top md:object-center"
          />
          {/* 僅底部輕遮，保留 Hero 圖本身的媽祖／粉紅超跑視覺 */}
          <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-ink/70 via-ink/25 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-12 pt-24 md:px-8 md:pb-16 md:pt-28">
            <div className="max-w-xl animate-fade-up-delay-2">
              <p className="text-xs tracking-[0.28em] text-rose-soft">
                {siteCopy.heroEyebrow}
              </p>
              <h1 className="font-serif-tc mt-2 text-[clamp(1.7rem,4vw,2.4rem)] leading-snug tracking-wide text-white">
                {siteCopy.heroTitle}
              </h1>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/88 md:text-[15px]">
                {siteCopy.heroLead}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#products"
                  className="bg-rose px-7 py-3.5 text-sm tracking-[0.18em] text-white transition hover:bg-rose-deep"
                >
                  查看商品售價
                </a>
                <a
                  href="#gallery"
                  className="border border-white/40 px-7 py-3.5 text-sm tracking-[0.18em] text-white transition hover:bg-white/10"
                >
                  品牌形象
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="scroll-mt-24 bg-gauze py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] text-gold">PRODUCTS · 商品售價</p>
              <h2 className="font-serif-tc mt-3 text-3xl text-ink md:text-4xl">
                祈福保溫杯系列
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {siteCopy.productsIntro}
              </p>
              <p className="mt-3 text-sm text-smoke">{company.promoNote}</p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Gallery — all images */}
        <section id="gallery" className="scroll-mt-24 border-y border-[var(--line)] bg-mist py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] text-gold">BRAND · 品牌形象</p>
              <h2 className="font-serif-tc mt-3 text-3xl text-ink md:text-4xl">
                品牌形象
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {siteCopy.galleryIntro}
              </p>
            </div>

            <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {galleryItems.map((item) => (
                <figure
                  key={item.src}
                  className="mb-4 break-inside-avoid overflow-hidden border border-[var(--line)] bg-gauze"
                >
                  {/* 使用原生 img，避免擴充功能／開發工具注入節點造成 hydration mismatch */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="px-4 py-3 text-sm text-ink-soft">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Blessing story */}
        <section
          id="blessing"
          className="scroll-mt-24 relative overflow-hidden bg-mist-deep py-20 md:py-28"
        >
          <SmokeField />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:px-8 md:gap-16">
            <div>
              <p className="text-xs tracking-[0.3em] text-gold">BLESSING · 祈福</p>
              <h2 className="font-serif-tc mt-3 text-3xl leading-snug text-ink md:text-4xl">
                白沙屯媽祖
                <br />
                {siteCopy.blessingTitle}
              </h2>
              <p className="mt-6 text-base leading-[1.9] text-ink-soft">
                {siteCopy.blessingP1}
              </p>
              <p className="mt-4 text-base leading-[1.9] text-ink-soft">
                {siteCopy.blessingP2}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-smoke">
                {siteCopy.limitedNote}
              </p>
            </div>

            <aside className="flex flex-col justify-center border border-[var(--line)] bg-gauze/85 p-8 md:p-10">
              <div className="incense-line mb-8" />
              <p className="font-serif-tc text-xl leading-relaxed text-ink md:text-2xl">
                「{siteCopy.blessingQuote}」
              </p>
              <p className="mt-6 text-sm tracking-wide text-smoke">
                — 創辦人 {company.founder} · 白沙屯拱天宮祈福紀實
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[var(--line)] pt-6 text-sm">
                <div>
                  <p className="text-smoke">認證</p>
                  <p className="mt-1 text-ink">拱授證第114-048號</p>
                </div>
                <div>
                  <p className="text-smoke">合作製造</p>
                  <p className="mt-1 text-ink">{company.partner}</p>
                </div>
              </div>
              <div className="relative mt-8 aspect-[16/10] overflow-hidden border border-[var(--line)]">
                <Image
                  src="/gallery/pink-supercar-alt.jpg"
                  alt="粉紅超跑隨行杯"
                  fill
                  className="object-cover"
                  sizes="400px"
                />
              </div>
            </aside>
          </div>
        </section>

        {/* Series */}
        <section id="series" className="scroll-mt-24 bg-gauze py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <p className="text-xs tracking-[0.3em] text-gold">SERIES · 生活主軸</p>
              <h2 className="font-serif-tc mt-3 text-3xl text-ink md:text-4xl">
                安 · 樂 · 文 · 財 · 禱
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {siteCopy.seriesIntro}
              </p>
            </div>

            <div className="mt-12 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
              {(Object.keys(seriesCopy) as Array<keyof typeof seriesCopy>).map((key) => (
                <div key={key} className="bg-gauze p-6 md:p-7">
                  <p className="font-serif-tc text-3xl text-rose">{key}</p>
                  <h3 className="mt-3 text-base font-medium text-ink">
                    {seriesCopy[key].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-smoke">
                    {seriesCopy[key].desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About teaser */}
        <section id="about" className="scroll-mt-24 bg-mist py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:items-start">
              <div>
                <p className="text-xs tracking-[0.3em] text-gold">ABOUT · 關於我們</p>
                <h2 className="font-serif-tc mt-3 text-3xl text-ink md:text-4xl">
                  {company.museum}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{company.brandEn}</p>
                <p className="mt-6 text-base leading-[1.9] text-ink-soft">{siteCopy.aboutP1}</p>
                <Link
                  href="/about"
                  className="mt-8 inline-block bg-rose px-6 py-3 text-sm tracking-[0.15em] text-white transition hover:bg-rose-deep"
                >
                  閱讀完整關於我們
                </Link>
              </div>
              <div>
                <p className="text-xs tracking-[0.25em] text-smoke">章節目錄</p>
                <ul className="mt-4 space-y-0">
                  {aboutNav.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/about#${item.id}`}
                        className="group flex items-center justify-between border-b border-[var(--line)] py-4 text-ink transition hover:text-rose"
                      >
                        <span className="font-serif-tc text-lg md:text-xl">{item.label}</span>
                        <span className="text-smoke transition group-hover:translate-x-1 group-hover:text-rose">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="scroll-mt-24 border-t border-[var(--line)] bg-gauze py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <p className="text-xs tracking-[0.3em] text-gold">FAQ · 常見問題</p>
            <h2 className="font-serif-tc mt-3 text-3xl text-ink">購物須知</h2>
            <div className="mt-10 divide-y divide-[var(--line)]">
              {faqs.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="cursor-pointer list-none text-lg text-ink marker:content-none">
                    <span className="flex items-start justify-between gap-4">
                      {item.q}
                      <span className="text-smoke transition group-open:rotate-45">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-24 relative overflow-hidden bg-ink py-20 text-gauze md:py-28"
        >
          <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
            <div className="smoke-plume !opacity-40" />
            <div className="smoke-plume !opacity-30" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-5 text-center md:px-8">
            <p className="text-xs tracking-[0.3em] text-rose-soft">CONTACT</p>
            <h2 className="font-serif-tc mt-4 text-3xl md:text-4xl">
              誠摯訂購 · 平安加持永遠相隨
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/70 md:text-base">
              歡迎香客與家人來信詢問商品與配送。希望明年三月，大家一起舉起粉紅超跑，大聲呼喊「進喔」！
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-8 inline-block bg-rose px-8 py-3.5 text-sm tracking-[0.18em] text-white transition hover:bg-rose-deep"
            >
              {company.email}
            </a>
            <div className="mx-auto mt-12 grid max-w-2xl gap-6 text-left text-sm text-white/75 sm:grid-cols-3">
              <div>
                <p className="text-white/45">地址</p>
                <p className="mt-1 leading-relaxed">{company.address}</p>
              </div>
              <div>
                <p className="text-white/45">統一編號</p>
                <p className="mt-1">{company.taxId}</p>
              </div>
              <div>
                <p className="text-white/45">客服信箱</p>
                <p className="mt-1">{company.email}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
