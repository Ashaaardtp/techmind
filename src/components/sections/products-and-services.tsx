import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarHeart,
  Globe,
  Table2,
} from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    group: "Jasa Pembuatan Website & Landing Page",
    title: "Website & Landing Page",
    description:
      "Website bisnis & landing page promosi yang responsif, cepat, dan didesain khusus untuk meningkatkan konversi penjualan UMKM.",
    bullets: ["Responsif & cepat dibuka di HP", "Didesain untuk konversi penjualan", "Garansi revisi 30 hari"],
    href: "/jasa-web",
    cta: "Detail Jasa Website",
    accent: "bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300",
  },
  {
    icon: CalendarHeart,
    group: "Jasa Undangan Digital",
    title: "Undangan Digital",
    description:
      "Solusi undangan online modern, elegan, dan praktis untuk berbagai acara bisnis maupun momen pribadi.",
    bullets: ["Modern & mudah dibagikan", "RSVP otomatis + peta lokasi", "Selesai dalam 1–2 hari"],
    href: "/jasa-web#undangan-digital",
    cta: "Lihat Paket Undangan",
    accent: "bg-rose-50 text-rose-600 dark:bg-rose-950/50 dark:text-rose-300",
  },
  {
    icon: Table2,
    group: "Template Spreadsheet Operasional & Keuangan",
    title: "Template Spreadsheet",
    description:
      "Template Excel & Google Sheets otomatis untuk Pencatatan Stok, Laporan Penjualan, serta Absensi & Gaji Karyawan.",
    bullets: ["Stok, penjualan, absensi & gaji", "Format Excel & Google Sheets", "Langsung dipakai, tanpa rumus"],
    href: "/template",
    cta: "Buka Katalog Template",
    accent: "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300",
  },
  {
    icon: BookOpen,
    group: "E-Book & Panduan Skill",
    title: "E-Book & Panduan Skill",
    description:
      "Kitab 100+ Formula Excel & Sheets serta Rumus Excel untuk Admin Pemula.",
    bullets: ["100+ formula Excel & Sheets", "Bahasa sederhana & praktis", "Cocok untuk admin pemula"],
    href: "/template",
    cta: "Lihat Produk Edukasi",
    accent: "bg-violet-50 text-violet-600 dark:bg-violet-950/50 dark:text-violet-300",
  },
];

export function ProductsAndServices() {
  const jasa = SERVICES.slice(0, 2);
  const produk = SERVICES.slice(2);

  return (
    <section id="layanan" className="scroll-mt-20 bg-white py-20 sm:py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Layanan &amp; Produk Kami
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Solusi digital yang langsung terasa hasilnya
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Baik yang butuh jasa custom maupun produk siap pakai, semuanya
            dirancang agar langsung bisa digunakan.
          </p>
        </div>

        <div className="mt-14 space-y-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                A
              </span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Layanan Jasa Digital
              </h3>
            </div>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {jasa.map((item) => (
                <ServiceCard key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                B
              </span>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                Produk Digital Siap Pakai
              </h3>
            </div>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              {produk.map((item) => (
                <ServiceCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  item,
}: {
  item: (typeof SERVICES)[number];
}) {
  const Icon = item.icon;
  return (
    <article className="group flex flex-col rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl sm:p-8 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-brand-800">
      <div className="flex items-start gap-4">
        <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${item.accent}`}>
          <Icon className="size-6" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
            {item.group}
          </p>
          <h4 className="mt-0.5 text-xl font-bold text-zinc-900 dark:text-white">
            {item.title}
          </h4>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {item.description}
      </p>

      <ul className="mt-5 space-y-2">
        {item.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
          >
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
            {bullet}
          </li>
        ))}
      </ul>

      <Link
        href={item.href}
        className="group/link mt-7 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 w-fit"
      >
        {item.cta}
        <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-0.5" />
      </Link>
    </article>
  );
}