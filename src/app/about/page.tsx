import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { aboutNav, aboutSections } from "@/data/about";
import { company } from "@/data/products";

export const metadata: Metadata = {
  title: "關於我們｜臺灣馬克文創美術館",
  description:
    "我們想改變世界的願景、臺灣馬克文創美術館、品牌故事、信仰情感與靈魂、粉紅超跑隨行杯的風潮。",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader forceSolid />

      <main className="bg-gauze pt-24">
        <section className="border-b border-[var(--line)] bg-mist py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="section-label">ABOUT</p>
            <h1 className="font-serif-tc mt-3 text-[clamp(2rem,4vw,2.75rem)] tracking-[0.06em] text-ink">
              關於我們
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-[1.95] text-ink-soft">
              {company.museum}
              ｜以文創保溫杯結合信仰溫度、藝術美學與減塑減紙減碳的環保行動，期望改變世界、讓大地更永續。
            </p>

            <nav
              aria-label="關於我們章節"
              className="mt-10 flex flex-wrap gap-2.5"
            >
              {aboutNav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="border border-[var(--line)] bg-gauze px-3.5 py-2 text-[0.8125rem] leading-snug tracking-wide text-ink-soft transition hover:border-rose/40 hover:text-rose"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[200px_1fr] md:gap-16 md:px-8 md:py-20 lg:gap-20">
          <aside className="hidden md:block">
            <div className="sticky top-28">
              <p className="mb-5 text-[0.6875rem] tracking-[0.28em] text-smoke">
                章節導覽
              </p>
              <div className="space-y-0.5">
                {aboutNav.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block border-l-2 border-transparent py-2.5 pl-3.5 text-[0.875rem] leading-snug text-ink-soft transition hover:border-rose hover:text-rose"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              <Link
                href="/#products"
                className="mt-10 inline-block bg-rose px-4 py-2.5 text-[0.8125rem] tracking-[0.12em] text-white transition hover:bg-rose-deep"
              >
                查看商品售價
              </Link>
            </div>
          </aside>

          <div className="min-w-0 space-y-16 md:space-y-20">
            {aboutSections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-[var(--line)] pb-16 last:border-b-0 last:pb-0 md:pb-20"
              >
                <p className="section-index">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="font-serif-tc mt-3 text-[clamp(1.45rem,2.5vw,1.85rem)] leading-snug tracking-[0.04em] text-ink">
                  {section.title}
                </h2>

                {section.id === "pink-supercar" && (
                  <div className="relative mt-8 aspect-[16/10] overflow-hidden border border-[var(--line)]">
                    <Image
                      src="/gallery/pink-supercar-mazu.jpg"
                      alt="粉紅超跑隨行杯 媽祖聖像版"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>
                )}

                {section.id === "museum" && (
                  <div className="relative mt-8 aspect-[16/9] overflow-hidden border border-[var(--line)]">
                    <Image
                      src="/gallery/pink-supercar-alt.jpg"
                      alt="馬克文創文創保溫杯"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 700px"
                    />
                  </div>
                )}

                {section.paragraphs.length > 0 && (
                  <div className="prose-stack mt-8">
                    {section.paragraphs.map((p, i) => (
                      <p key={`${section.id}-${i}`}>{p}</p>
                    ))}
                  </div>
                )}

                {section.blocks && (
                  <div className="mt-8 grid gap-4">
                    {section.blocks.map((block) => (
                      <div
                        key={block.heading}
                        className="border border-[var(--line)] bg-mist/70 px-6 py-7 md:px-8 md:py-8"
                      >
                        <h3 className="font-serif-tc text-[1.2rem] tracking-wide text-ink">
                          {block.heading}
                        </h3>
                        <p className="mt-3.5 text-base leading-[2] text-ink-soft">
                          {block.body}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}

            <div className="flex flex-wrap gap-3.5 border-t border-[var(--line)] pt-10">
              <Link
                href="/#products"
                className="bg-rose px-6 py-3.5 text-[0.8125rem] tracking-[0.15em] text-white transition hover:bg-rose-deep"
              >
                回到商品售價
              </Link>
              <Link
                href="/#contact"
                className="border border-ink/20 px-6 py-3.5 text-[0.8125rem] tracking-[0.15em] text-ink transition hover:border-rose hover:text-rose"
              >
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
