import Link from "next/link";
import {
  ArrowDown,
  BookOpen,
  CalendarHeart,
  Globe,
  MessageCircle,
  Table2,
} from "lucide-react";
import { WA_MESSAGES, waLink } from "@/config";
import { Reveal } from "@/components/reveal";

const OFFERINGS = [
  {
    icon: Globe,
    title: "Jasa Website & Landing Page",
    desc: "Website bisnis & landing page promosi yang responsif dan didesain untuk konversi.",
    href: "/jasa-web",
  },
  {
    icon: CalendarHeart,
    title: "Jasa Undangan Digital",
    desc: "Undangan online modern, elegan, dan praktis untuk bisnis maupun momen pribadi.",
    href: "/jasa-web#undangan-digital",
  },
  {
    icon: Table2,
    title: "Template Spreadsheet",
    desc: "Pencatatan stok, laporan penjualan, serta absensi & gaji yang otomatis.",
    href: "/template",
  },
  {
    icon: BookOpen,
    title: "E-Book & Panduan Skill",
    desc: "Kitab 100+ rumus Excel & Sheets untuk admin yang sedang belajar.",
    href: "/template",
  },
];

const TRUST = [
  "Harga ramah UMKM",
  "Langsung siap pakai",
  "Dukungan personal",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-zinc-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-brand-50/80 to-transparent dark:from-brand-950/40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand-700 dark:border-brand-800 dark:bg-zinc-900 dark:text-brand-300">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              All-in-One Digital Solution untuk UMKM
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.2rem] dark:text-white">
              Solusi Digital Lengkap untuk{" "}
              <span className="text-gradient">Tumbuh Kembangkan</span> UMKM Anda.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
              Dari otomatisasi laporan operasional lewat spreadsheet hingga
              pembuatan website &amp; landing page profesional untuk
              melipatgandakan penjualan bisnis Anda.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#layanan"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 active:scale-[0.98]"
              >
                Lihat Layanan &amp; Produk
                <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-50 active:scale-[0.98] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
              >
                <MessageCircle className="size-4 text-emerald-600 dark:text-emerald-400" />
                Konsultasi Gratis via WA
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
              {TRUST.map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={150} direction="left">
          <div className="relative">
            <Link
              href="#layanan"
              className="block rounded-3xl border border-zinc-200 bg-white p-6 shadow-lg shadow-zinc-900/5 transition-all hover:border-brand-300 hover:shadow-xl sm:p-7 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-brand-700"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                Yang bisa kami bantu
              </p>
              <div className="mt-5 space-y-2">
                {OFFERINGS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="group flex items-start gap-3 rounded-2xl border border-transparent p-3 transition-colors hover:border-zinc-100 hover:bg-zinc-50 dark:hover:border-zinc-800 dark:hover:bg-zinc-800/50"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                          {item.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                          {item.desc}
                        </span>
                      </span>
                    </div>
                  );
                })}
              </div>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}