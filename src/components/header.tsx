"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { SITE, WA_MESSAGES, waLink } from "@/config";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/template", label: "Template Spreadsheet" },
  { href: "/jasa-web", label: "Jasa Website" },
  { href: "/#tentang", label: "Tentang" },
  { href: "/#layanan", label: "Layanan" },
  { href: "/#faq", label: "FAQ" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "border-b border-zinc-200/80 bg-white/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/85"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm dark:bg-zinc-950/60"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center" aria-label={SITE.name}>
          <span className="grid place-items-center rounded-xl bg-white p-1 ring-1 ring-zinc-200 shadow-sm dark:ring-zinc-800">
            <Image
              src="/techmind.jpg"
              alt={`Logo ${SITE.name}`}
              width={1280}
              height={1280}
              priority
              sizes="auto"
              className="h-9 w-auto"
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("#")[0]) &&
                  link.href !== "/";
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white"
                    : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/70 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 sm:inline-flex dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <MessageCircle className="size-4" />
            Konsultasi Gratis
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-zinc-200 text-zinc-700 transition-colors hover:bg-zinc-100 lg:hidden dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white lg:hidden dark:border-zinc-800 dark:bg-zinc-950">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800/70 dark:hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white dark:bg-white dark:text-zinc-900"
            >
              <MessageCircle className="size-4" />
              Konsultasi Gratis via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}