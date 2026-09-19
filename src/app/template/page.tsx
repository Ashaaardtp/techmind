import type { Metadata } from "next";
import Image from "next/image";
import {
  BadgeCheck,
  FileSpreadsheet,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Table2,
} from "lucide-react";
import { CatalogBrowser } from "@/components/catalog/catalog-browser";
import { CustomSheetForm } from "@/components/catalog/custom-sheet-form";
import { TEMPLATE_CATEGORIES, type TemplateCategory } from "@/data/templates";

export const metadata: Metadata = {
  title: "Katalog Template Spreadsheet Siap Pakai",
  description:
    "Katalog lengkap template Excel & Google Sheets siap pakai untuk kasir, stok gudang, slip gaji, laporan keuangan, faktur PPN, dan event organizer. Harga mulai Rp13.000.",
};

const TRUST = [
  { icon: BadgeCheck, label: "Rumus otomatis & anti-error" },
  { icon: FileSpreadsheet, label: "Excel + Google Sheets" },
  { icon: ShieldCheck, label: "Sel rumus terproteksi" },
  { icon: RefreshCw, label: "Update gratis 1 tahun (bundle)" },
];

export default async function TemplatePage(props: PageProps<"/template">) {
  const searchParams = await props.searchParams;
  const rawCategory = searchParams.kategori;
  const initialCategory =
    typeof rawCategory === "string" &&
    TEMPLATE_CATEGORIES.some((cat) => cat.name === rawCategory)
      ? (rawCategory as TemplateCategory)
      : undefined;

  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50 dark:grid-pattern-dark" />
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/30" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300">
            <Table2 className="size-3.5" /> Produk Digital — Otomatisasi Operasional
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
            Katalog Template Spreadsheet{" "}
            <span className="text-gradient">Siap Pakai</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
            Pilih template sesuai kebutuhan, isi kolom berwarna, dan biarkan
            rumus bekerja. Tidak perlu belajar formula rumit — cocok untuk
            pemilik usaha yang ingin hasil instan.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {TRUST.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400"
                >
                  <Icon className="size-4 text-emerald-600 dark:text-emerald-400" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 dark:bg-zinc-950">
        <CatalogBrowser initialCategory={initialCategory} />
      </section>

      <section className="bg-white pb-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 px-6 py-10 sm:px-10">
            <div className="pointer-events-none absolute -right-10 -top-10 size-56 rounded-full bg-white/10 blur-2xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
              <div className="max-w-2xl text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                  <Sparkles className="size-3.5" /> Bundle All-in-One
                </span>
                <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                  Dapatkan semua template + video tutorial
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-emerald-50">
                  Paket terlengkap untuk mengotomatisasi seluruh operasional
                  bisnis. Hanya Rp65.000 — hemat hingga 70% dibanding beli
                  terpisah.
                </p>
              </div>
              <a
                href={`/checkout?items=tpl-bundle`}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-50"
              >
                Beli Bundle Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative hidden overflow-hidden rounded-3xl border border-zinc-200 shadow-sm lg:block dark:border-zinc-800">
            <div className="relative aspect-[4/3]">
              <Image
                src="/Custom Template.jpg"
                alt="Kustomisasi template Google Sheets sesuai SOP bisnis"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/90 p-4 backdrop-blur dark:bg-zinc-950/85">
              <p className="text-sm font-bold text-zinc-900 dark:text-white">
                Template sesuai SOP Anda
              </p>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Laporan otomatis, dashboard custom, hingga alur kerja unik
                bisnis Anda.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-8 max-w-2xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Punya alur kerja unik? Kami buatkan khusus
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                Tim kami siap membangun template Google Sheets yang disesuaikan
                dengan SOP bisnis Anda.
              </p>
            </div>
            <CustomSheetForm />
          </div>
        </div>
      </section>
    </>
  );
}
