import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  MessageCircle,
  Star,
  Zap,
} from "lucide-react";
import { WA_MESSAGES, waLink } from "@/config";

const STATS = [
  { value: "1.200+", label: "Template terjual" },
  { value: "350+", label: "Website & undangan" },
  { value: "4.9/5", label: "Rating pelanggan" },
  { value: "100%", label: "Garansi revisi" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-60" />
      <div className="pointer-events-none absolute -top-32 -right-24 size-[32rem] rounded-full bg-gradient-to-br from-brand-200/60 via-violet-200/50 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 size-[28rem] rounded-full bg-gradient-to-tr from-emerald-200/50 via-sky-100/60 to-transparent blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="animate-rise">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold text-brand-700">
            <Zap className="size-3.5" />
            Dua Pilar Solusi Digital untuk Bisnis Anda
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-zinc-900 sm:text-5xl lg:text-[3.4rem]">
            Otomatisasi operasional,{" "}
            <span className="text-gradient">tanpa ribet</span> dan tanpa skill
            teknis.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            Template spreadsheet siap pakai dan jasa pembuatan website modern
            untuk UMKM, profesional, agensi, dan event organizer. Langsung
            dipakai, langsung terasa hasilnya.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/template"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/40 active:scale-[0.98]"
            >
              Buka Katalog Lengkap Spreadsheet
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={waLink(WA_MESSAGES.landingPage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-50 active:scale-[0.98]"
            >
              <MessageCircle className="size-4 text-emerald-600" />
              Konsultasi Website via WhatsApp
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-emerald-600" /> One-time
              purchase, tanpa langganan
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Star className="size-4 fill-amber-400 text-amber-400" /> Rating
              4.9 dari 800+ ulasan
            </span>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-zinc-100 pt-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-extrabold tracking-tight text-zinc-900">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-zinc-500">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand-100 via-violet-100 to-emerald-100 opacity-70 blur-2xl" />

            <div className="relative rounded-3xl border border-zinc-200 bg-white p-4 shadow-2xl shadow-zinc-900/10">
              <div className="flex items-center justify-between px-1 pb-3">
                <div className="flex items-center gap-1.5">
                  <span className="size-2.5 rounded-full bg-rose-400" />
                  <span className="size-2.5 rounded-full bg-amber-400" />
                  <span className="size-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-medium text-zinc-400">
                  Dashboard_Keuangan.xlsx
                </span>
              </div>
              <div className="overflow-hidden rounded-2xl border border-zinc-100 bg-zinc-50">
                <div className="grid grid-cols-3 gap-3 p-4">
                  <div className="rounded-xl bg-white p-3 shadow-sm">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-400">
                      Omzet
                    </p>
                    <p className="mt-1 text-sm font-bold text-zinc-900">
                      Rp48,2jt
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-emerald-600">
                      ▲ 12,4%
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-3 shadow-sm">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-400">
                      Laba
                    </p>
                    <p className="mt-1 text-sm font-bold text-zinc-900">
                      Rp14,7jt
                    </p>
                    <p className="mt-1 text-[10px] font-semibold text-emerald-600">
                      ▲ 8,1%
                    </p>
                  </div>
                  <div className="rounded-xl bg-white p-3 shadow-sm">
                    <p className="text-[10px] font-medium uppercase tracking-wide text-zinc-400">
                      Stok
                    </p>
                    <p className="mt-1 text-sm font-bold text-zinc-900">1.284</p>
                    <p className="mt-1 text-[10px] font-semibold text-amber-600">
                      • 6 rendah
                    </p>
                  </div>
                </div>
                <div className="space-y-2 px-4 pb-4">
                  {[
                    ["Penjualan harian", "86%", "bg-brand-500"],
                    ["Pengeluaran", "42%", "bg-violet-500"],
                    ["Target bulanan", "71%", "bg-emerald-500"],
                  ].map(([label, width, color]) => (
                    <div key={label} className="rounded-lg bg-white p-2.5 shadow-sm">
                      <div className="flex items-center justify-between text-[10px] font-medium text-zinc-500">
                        <span>{label}</span>
                        <span>{width}</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-zinc-100">
                        <div
                          className={`h-full rounded-full ${color}`}
                          style={{ width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-6 w-52 animate-float rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl sm:-left-10">
              <div className="flex items-center gap-2">
                <span className="grid size-8 place-items-center rounded-lg bg-emerald-100 text-emerald-600">
                  <BadgeCheck className="size-4" />
                </span>
                <div className="leading-tight">
                  <p className="text-[11px] font-bold text-zinc-900">
                    Slip gaji terkirim
                  </p>
                  <p className="text-[10px] text-zinc-500">
                    12 karyawan • otomatis
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-6 hidden w-44 rotate-3 rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl sm:block">
              <Image
                src="/mymind-tZCrFpSNiIQ-unsplash.jpg"
                alt="Preview undangan digital"
                width={176}
                height={120}
                className="h-20 w-full rounded-lg object-cover"
              />
              <p className="mt-2 text-[11px] font-bold text-zinc-900">
                Undangan Digital
              </p>
              <p className="text-[10px] text-zinc-500">RSVP 214/250 hadir</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
