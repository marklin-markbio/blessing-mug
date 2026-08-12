import Image from "next/image";
import type { Product } from "@/data/products";

function Price({
  amount,
  struck = false,
}: {
  amount: number;
  struck?: boolean;
}) {
  const formatted = amount.toLocaleString("zh-TW");

  if (struck) {
    return (
      <p className="price-original">
        <span className="price-currency">NT$</span>
        <span className="price-num">{formatted}</span>
      </p>
    );
  }

  return (
    <p className="price-current">
      <span className="price-currency">NT$</span>
      <span className="price-num">{formatted}</span>
    </p>
  );
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden border border-[var(--line)] bg-gauze/80 transition duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(42,34,38,0.07)] ${
        product.highlight ? "ring-1 ring-rose/30" : ""
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-mist-deep">
        <Image
          src={product.image}
          alt={`${product.name} ${product.subtitle}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-ink/80 px-2.5 py-1 text-[10px] tracking-[0.06em] text-white">
            {product.badge}
          </span>
        )}
        {product.highlight && (
          <span className="absolute right-3 top-3 bg-rose px-2.5 py-1 text-[10px] tracking-[0.08em] text-white">
            限量推薦
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-5 md:px-6 md:pb-6 md:pt-6">
        <p className="text-[11px] tracking-[0.22em] text-gold">
          {product.series} · 祈福系列
        </p>
        <h3 className="font-serif-tc mt-2.5 text-[1.25rem] leading-snug tracking-wide text-ink md:text-[1.4rem]">
          {product.name}
        </h3>
        <p className="mt-1.5 text-[0.9rem] leading-relaxed text-ink-soft">
          {product.subtitle}
        </p>
        <p className="mt-3.5 flex-1 text-[0.875rem] leading-[1.85] text-smoke">
          {product.blurb}
        </p>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-[var(--line)] pt-5">
          <div className="price-stack">
            <Price amount={product.originalPrice} struck />
            <Price amount={product.price} />
          </div>
          <a
            href={`mailto:service@blessingmug.com?subject=${encodeURIComponent(`訂購諮詢：${product.name}（${product.subtitle}）`)}`}
            className="mb-0.5 shrink-0 border border-rose/35 px-3.5 py-2 text-[0.8125rem] tracking-[0.06em] text-rose transition hover:bg-rose hover:text-white"
          >
            訂購諮詢
          </a>
        </div>
      </div>
    </article>
  );
}
