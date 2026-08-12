import Link from "next/link";
import { company } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-10 text-center text-[0.75rem] leading-relaxed text-white/45 md:px-8">
      <p className="tracking-[0.14em] text-white/70">{company.museum}</p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-white/55">
        <Link href="/" className="transition hover:text-white">
          首頁
        </Link>
        <Link href="/about" className="transition hover:text-white">
          關於我們
        </Link>
        <Link href="/#products" className="transition hover:text-white">
          商品售價
        </Link>
        <Link href="/#contact" className="transition hover:text-white">
          聯絡我們
        </Link>
      </div>
      <p className="mt-4">© 2026 {company.name}. All rights reserved.</p>
      <p className="mt-1.5 tracking-wide">
        Pink Supercar · Blessing Mug · 商標著作權已向經濟部智財局申請註冊
      </p>
    </footer>
  );
}
