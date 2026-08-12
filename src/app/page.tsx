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
        <section className="relative min-h-[100svh] overflow-hidden bg-[#f7e9df]">
          <Image
            src="/brand/hero.webp"
            alt="馬克文創祈福保溫杯主視覺｜粉紅超跑隨行杯"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top md:object-center"
          />
          <div className="absolute inset-x-0 bottom-0 h-[44%] bg-gradient-to-t from-ink/75 via-ink/30 to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 md:px-8 md:pb-20">
            <div className="max-w-xl animate-fade-up-delay-2">
              <p className="text-[0.6875rem] tracking-[0.3em] text-rose-soft">
                {siteCopy.heroEyebrow}
              </p>
              <h1 className="font-serif-tc mt-3 text-[clamp(1.7rem,4vw,2.35rem)] leading-[1.35] tracking-[0.06em] text-white">
                {siteCopy.heroTitle}
              </h1>
              <p className="mt-4 max-w-md text-[0.9375rem] leading-[1.9] text-white/88">
                {siteCopy.heroLead}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#products"
                  className="bg-rose px-7 py-3.5 text-[0.8125rem] tracking-[0.18em] text-white transition hover:bg-rose-deep"
                >
                  查看商品售價
                </a>
                <a
                  href="#gallery"
                  className="border border-white/40 px-7 py-3.5 text-[0.8125rem] tracking-[0.18em] text-white transition hover:bg-white/10"
                >
                  品牌形象
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section-pad scroll-mt-24 bg-gauze">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <p className="section-label">PRODUCTS · 商品售價</p>
              <h2 className="section-title">祈福保溫杯系列</h2>
              <p className="section-lead">{siteCopy.productsIntro}</p>
              <p className="mt-3 text-[0.875rem] leading-relaxed text-smoke">
                {company.promoNote}
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="gallery"
          className="section-pad scroll-mt-24 border-y border-[var(--line)] bg-mist"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <p className="section-label">BRAND · 品牌形象</p>
              <h2 className="section-title">品牌形象</h2>
              <p className="section-lead">{siteCopy.galleryIntro}</p>
            </div>

            <div className="mt-12 columns-1 gap-5 sm:columns-2 sm:gap-6 lg:columns-3">
              {galleryItems.map((item) => (
                <figure
                  key={item.src}
                  className="mb-5 break-inside-avoid overflow-hidden border border-[var(--line)] bg-gauze sm:mb-6"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-auto w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="px-4 py-3.5 text-[0.8125rem] leading-relaxed tracking-wide text-ink-soft">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="blessing"
          className="section-pad scroll-mt-24 relative overflow-hidden bg-mist-deep"
        >
          <SmokeField />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:px-8 lg:gap-20">
            <div>
              <p className="section-label">BLESSING · 祈福</p>
              <h2 className="section-title leading-snug">
                白沙屯媽祖
                <br />
                {siteCopy.blessingTitle}
              </h2>
              <div className="prose-stack mt-7">
                <p>{siteCopy.blessingP1}</p>
                <p>{siteCopy.blessingP2}</p>
                <p className="!text-[0.875rem] !leading-[1.9] !text-smoke">
                  {siteCopy.limitedNote}
                </p>
              </div>
            </div>

            <aside className="flex flex-col justify-center border border-[var(--line)] bg-gauze/90 px-7 py-8 md:px-9 md:py-10">
              <div className="incense-line mb-7" />
              <p className="font-serif-tc text-[1.2rem] leading-[1.75] tracking-wide text-ink md:text-[1.4rem]">
                「{siteCopy.blessingQuote}」
              </p>
              <p className="mt-5 text-[0.8125rem] tracking-[0.04em] text-smoke">
                — 創辦人 {company.founder} · 白沙屯拱天宮祈福紀實
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5 border-t border-[var(--line)] pt-6 text-[0.875rem]">
                <div>
                  <p className="text-[0.75rem] tracking-wide text-smoke">認證</p>
                  <p className="mt-1.5 leading-relaxed text-ink">拱授證第114-048號</p>
                </div>
                <div>
                  <p className="text-[0.75rem] tracking-wide text-smoke">合作製造</p>
                  <p className="mt-1.5 leading-relaxed text-ink">{company.partner}</p>
                </div>
              </div>
              <div className="relative mt-7 aspect-[16/10] overflow-hidden border border-[var(--line)]">
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

        <section id="series" className="section-pad scroll-mt-24 bg-gauze">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <p className="section-label">SERIES · 生活主軸</p>
              <h2 className="section-title">安 · 樂 · 文 · 財 · 禱</h2>
              <p className="section-lead">{siteCopy.seriesIntro}</p>
            </div>

            <div className="mt-12 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-5">
              {(Object.keys(seriesCopy) as Array<keyof typeof seriesCopy>).map((key) => (
                <div key={key} className="bg-gauze px-6 py-7 md:px-7 md:py-8">
                  <p className="font-serif-tc text-[2rem] leading-none text-rose">{key}</p>
                  <h3 className="mt-4 text-[0.95rem] font-medium leading-snug tracking-wide text-ink">
                    {seriesCopy[key].title}
                  </h3>
                  <p className="mt-3 text-[0.8125rem] leading-[1.85] text-smoke">
                    {seriesCopy[key].desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad scroll-mt-24 bg-mist">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
              <div>
                <p className="section-label">ABOUT · 關於我們</p>
                <h2 className="section-title">{company.museum}</h2>
                <p className="mt-2.5 text-[0.875rem] leading-relaxed tracking-wide text-smoke">
                  {company.brandEn}
                </p>
                <p className="mt-6 text-base leading-[2] text-ink-soft">{siteCopy.aboutP1}</p>
                <Link
                  href="/about"
                  className="mt-8 inline-block bg-rose px-6 py-3.5 text-[0.8125rem] tracking-[0.15em] text-white transition hover:bg-rose-deep"
                >
                  閱讀完整關於我們
                </Link>
              </div>
              <div>
                <p className="text-[0.6875rem] tracking-[0.28em] text-smoke">章節目錄</p>
                <ul className="mt-3">
                  {aboutNav.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={`/about#${item.id}`}
                        className="group flex items-center justify-between gap-4 border-b border-[var(--line)] py-[1.05rem] text-ink transition hover:text-rose"
                      >
                        <span className="font-serif-tc text-[1.05rem] leading-snug tracking-wide md:text-[1.15rem]">
                          {item.label}
                        </span>
                        <span className="shrink-0 text-smoke transition group-hover:translate-x-1 group-hover:text-rose">
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

        <section
          id="faq"
          className="section-pad scroll-mt-24 border-t border-[var(--line)] bg-gauze"
        >
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <p className="section-label">FAQ · 常見問題</p>
            <h2 className="section-title">購物須知</h2>
            <div className="mt-10 divide-y divide-[var(--line)]">
              {faqs.map((item) => (
                <details key={item.q} className="group py-6">
                  <summary className="cursor-pointer list-none text-[1.05rem] leading-snug tracking-wide text-ink marker:content-none">
                    <span className="flex items-start justify-between gap-5">
                      <span>{item.q}</span>
                      <span className="mt-0.5 shrink-0 text-smoke transition group-open:rotate-45">
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 pr-8 text-[0.9375rem] leading-[1.9] text-ink-soft">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section-pad scroll-mt-24 relative overflow-hidden bg-ink text-gauze"
        >
          <div className="pointer-events-none absolute inset-0 opacity-25" aria-hidden="true">
            <div className="smoke-plume !opacity-40" />
            <div className="smoke-plume !opacity-30" />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-5 text-center md:px-8">
            <p className="text-[0.6875rem] tracking-[0.32em] text-rose-soft">CONTACT</p>
            <h2 className="font-serif-tc mt-3 text-[clamp(1.75rem,3vw,2.25rem)] tracking-[0.06em]">
              誠摯訂購 · 平安加持永遠相隨
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[0.9375rem] leading-[1.9] text-white/70">
              歡迎香客與家人來信詢問商品與配送。希望明年三月，大家一起舉起粉紅超跑，大聲呼喊「進喔」！
            </p>
            <a
              href={`mailto:${company.email}`}
              className="mt-8 inline-block bg-rose px-8 py-3.5 text-[0.8125rem] tracking-[0.18em] text-white transition hover:bg-rose-deep"
            >
              {company.email}
            </a>
            <div className="mx-auto mt-14 grid max-w-2xl gap-8 text-left text-[0.875rem] text-white/75 sm:grid-cols-3 sm:gap-6">
              <div>
                <p className="text-[0.75rem] tracking-wide text-white/45">地址</p>
                <p className="mt-2 leading-[1.8]">{company.address}</p>
              </div>
              <div>
                <p className="text-[0.75rem] tracking-wide text-white/45">統一編號</p>
                <p className="font-display mt-2 text-[1.05rem] tracking-[0.08em] tabular-nums">
                  {company.taxId}
                </p>
              </div>
              <div>
                <p className="text-[0.75rem] tracking-wide text-white/45">客服信箱</p>
                <p className="mt-2 leading-[1.8] break-all">{company.email}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
