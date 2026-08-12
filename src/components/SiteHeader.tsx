"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavLink = { href: string; label: string };

const homeLinks: NavLink[] = [
  { href: "/#products", label: "商品售價" },
  { href: "/#gallery", label: "品牌形象" },
  { href: "/#blessing", label: "祈福故事" },
  { href: "/#series", label: "安樂文財禱" },
  { href: "/about", label: "關於我們" },
  { href: "/#contact", label: "聯絡我們" },
];

export function SiteHeader({ forceSolid = false }: { forceSolid?: boolean }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
    if (forceSolid || !isHome) return;

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [forceSolid, isHome]);

  // SSR 與首次 hydrate 保持一致；掛載後再依捲動／頁面切換樣式
  const solid = forceSolid || !isHome || (ready && scrolled);
  const showLogo = forceSolid || !isHome || (ready && scrolled);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-gauze/95 shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-gradient-to-b from-ink/55 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link href="/" className="relative flex h-12 min-w-[140px] items-center md:min-w-[180px]">
          {/* 首頁頂部 Hero 已含館名；捲動後再顯示 logo，避免重複 */}
          <Image
            src="/brand/logo.png"
            alt="臺灣馬克文創美術館 Taiwan Mark Cultural and Creative Art Museum"
            width={280}
            height={72}
            className={`h-10 w-auto transition-opacity duration-300 md:h-12 ${
              showLogo ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {homeLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors hover:text-rose ${
                solid ? "text-ink-soft" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#products"
            className="rounded-sm bg-rose px-4 py-2 text-sm tracking-wide text-white transition hover:bg-rose-deep"
          >
            立即選購
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "關閉選單" : "開啟選單"}
          className={solid ? "text-ink xl:hidden" : "text-white xl:hidden"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`block h-px w-6 ${solid ? "bg-ink" : "bg-white"}`} />
          <span className={`mt-1.5 block h-px w-6 ${solid ? "bg-ink" : "bg-white"}`} />
          <span className={`mt-1.5 block h-px w-4 ${solid ? "bg-ink" : "bg-white"}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-gauze/95 px-5 py-4 backdrop-blur-md xl:hidden">
          <div className="flex flex-col gap-3">
            {homeLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-base text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
