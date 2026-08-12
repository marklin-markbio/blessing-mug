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
      className={`group flex flex-col overflow-hidden border border-[var(--line)] bg-gauze/70 transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(42,34,38,0.08)] ${
        product.highlight ? "ring-1 ring-rose/35" : ""
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-ink/85 px-2.5 py-1 text-[11px] tracking-wide text-white">
            {product.badge}
          </span>
        )}
        {product.highlight && (
          <span className="absolute right-3 top-3 bg-rose px-2.5 py-1 text-[11px] tracking-wide text-white">
            限量推薦
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-xs tracking-[0.2em] text-gold">{product.series} · 祈福系列</p>
        <h3 className="font-serif-tc mt-2 text-xl text-ink md:text-2xl">{product.name}</h3>
        <p className="mt-1 text-sm text-ink-soft">{product.subtitle}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-smoke">{product.blurb}</p>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-[var(--line)] pt-4">
          <div className="space-y-1">
            <Price amount={product.originalPrice} struck />
            <Price amount={product.price} />
          </div>
          <a
            href={`mailto:service@blessingmug.com?subject=${encodeURIComponent(`訂購諮詢：${product.name}（${product.subtitle}）`)}`}
            className="shrink-0 rounded-sm border border-rose/40 px-3 py-2 text-sm text-rose transition hover:bg-rose hover:text-white"
          >
            訂購諮詢
          </a>
        </div>
      </div>
    </article>
  );
}
