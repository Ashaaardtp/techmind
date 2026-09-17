"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarHeart,
  Globe,
  LayoutTemplate,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Table2,
} from "lucide-react";
import { TEMPLATE_CATEGORIES } from "@/data/templates";
import { WEB_SERVICES } from "@/data/services";
import { WA_MESSAGES, waLink } from "@/config";

const TABS = [
  {
    id: "template" as const,
    label: "Template Spreadsheet",
    icon: Table2,
    hint: "Otomatisasi siap pakai",
  },
  {
    id: "web" as const,
    label: "Jasa Website",
    icon: Globe,
    hint: "Solusi kehadiran digital",
  },
];

const WEB_ICONS = {
  monitor: MonitorSmartphone,
  mail: CalendarHeart,
  "shopping-bag": Rocket,
};

export function PillarSwitcher() {
  const [active, setActive] = useState<"template" | "web">("template");

  return (
    <section className="relative bg-zinc-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Dua Pilar Layanan
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Pilih yang bisnis Anda butuhkan hari ini
          </h2>
          <p className="mt-4 text-zinc-600">
            Mulai dari otomatisasi spreadsheet yang langsung dipakai, hingga
            website profesional yang meningkatkan kredibilitas bisnis.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-sm">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-zinc-900 text-white shadow-md"
                    : "text-zinc-600 hover:bg-zinc-100"
                }`}
                aria-pressed={isActive}
              >
                <Icon className="size-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">
                  {tab.id === "template" ? "Template" : "Website"}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          {active === "template" ? (
            <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
              <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <Table2 className="size-3.5" /> Pilar 1
                </span>
                <h3 className="mt-4 text-2xl font-bold text-zinc-900">
                  Otomatisasi Operasional Siap Pakai
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  Template Excel & Google Sheets plug-and-play dengan rumus
                  otomatisasi, dashboard interaktif, dan validasi data
                  terstruktur. Tanpa perlu belajar formula rumit.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-zinc-700">
                  {[
                    "Format .xlsx (Excel 2016+) & Google Sheets",
                    "Dashboard interaktif & validasi input",
                    "Print layout slip gaji, faktur, dan struk",
                    "Panduan input berwarna untuk pemula",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/template"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700"
                >
                  Buka Katalog Lengkap
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {TEMPLATE_CATEGORIES.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/template?kategori=${encodeURIComponent(cat.name)}`}
                    className="group rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                        <LayoutTemplate className="size-5" />
                      </span>
                      <ArrowRight className="size-4 text-zinc-300 transition-colors group-hover:text-emerald-600" />
                    </div>
                    <h4 className="mt-4 text-sm font-bold text-zinc-900">
                      {cat.name}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                      {cat.description}
                    </p>
                  </Link>
                ))}
                <Link
                  href={waLink(WA_MESSAGES.customSheet)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/50 p-5 transition-all hover:bg-emerald-50 sm:col-span-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                      <MessageCircle className="size-5" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">
                        Butuh kustomisasi sesuai SOP Anda?
                      </h4>
                      <p className="text-xs text-zinc-600">
                        Konsultasi template Google Sheets khusus, gratis.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="size-4 text-emerald-600" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
              <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                  <Globe className="size-3.5" /> Pilar 2
                </span>
                <h3 className="mt-4 text-2xl font-bold text-zinc-900">
                  Solusi Kehadiran Digital Modern
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                  Landing page konversi tinggi, undangan digital interaktif, dan
                  website kustom. Dibangun cepat, responsif, dan siap membawa
                  lebih banyak pelanggan.
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-zinc-700">
                  {[
                    "HTML5, Tailwind CSS, responsive mobile-first",
                    "Landing page selesai 2–4 hari kerja",
                    "Undangan digital 1–2 hari kerja",
                    "Garansi revisi minor 30 hari pasca rilis",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/jasa-web"
                  className="group mt-7 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all hover:bg-brand-700"
                >
                  Lihat Portofolio & Harga
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {WEB_SERVICES.map((service) => {
                  const Icon = WEB_ICONS[service.icon];
                  return (
                    <Link
                      key={service.id}
                      href={`/jasa-web#${service.slug}`}
                      className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg"
                    >
                      <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon className="size-5" />
                      </span>
                      <h4 className="mt-4 text-sm font-bold text-zinc-900">
                        {service.name}
                      </h4>
                      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-zinc-500">
                        {service.tagline}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600">
                        {service.sla}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
