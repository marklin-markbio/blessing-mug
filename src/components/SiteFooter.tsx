import Link from "next/link";
import { company } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-8 text-center text-xs text-white/45 md:px-8">
      <p className="tracking-[0.12em] text-white/70">{company.museum}</p>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-white/55">
        <Link href="/" className="hover:text-white">
          首頁
        </Link>
        <Link href="/about" className="hover:text-white">
          關於我們
        </Link>
        <Link href="/#products" className="hover:text-white">
          商品售價
        </Link>
        <Link href="/#contact" className="hover:text-white">
          聯絡我們
        </Link>
      </div>
      <p className="mt-3">
        © 2026 {company.name}. All rights reserved.
      </p>
      <p className="mt-1">
        Pink Supercar · Blessing Mug · 商標著作權已向經濟部智財局申請註冊
      </p>
    </footer>
  );
}
