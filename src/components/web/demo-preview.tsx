"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarHeart,
  Heart,
  MapPin,
  MonitorSmartphone,
  Music,
  Rocket,
  Search,
  ShoppingBag,
  Star,
} from "lucide-react";

const DEMOS = [
  {
    id: "landing",
    label: "Landing Page",
    icon: MonitorSmartphone,
    frame: "browser" as const,
    image: "/david-becker-crs2vlkSe98-unsplash.jpg",
  },
  {
    id: "invitation",
    label: "Undangan Digital",
    icon: CalendarHeart,
    frame: "phone" as const,
    image: "/mymind-tZCrFpSNiIQ-unsplash.jpg",
  },
  {
    id: "custom",
    label: "Website Kustom",
    icon: ShoppingBag,
    frame: "browser" as const,
    image: "/pawel-czerwinski-Y8Y_s90SK3A-unsplash.jpg",
  },
];

export function DemoPreview() {
  const [active, setActive] = useState(DEMOS[0].id);
  const current = DEMOS.find((d) => d.id === active) ?? DEMOS[0];

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {DEMOS.map((demo) => {
          const Icon = demo.icon;
          const isActive = active === demo.id;
          return (
            <button
              key={demo.id}
              type="button"
              onClick={() => setActive(demo.id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                isActive
                  ? "bg-zinc-900 text-white shadow-md"
                  : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
              }`}
              aria-pressed={isActive}
            >
              <Icon className="size-4" />
              {demo.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center">
        {current.frame === "phone" ? (
          <div className="relative w-full max-w-xs rounded-[2.5rem] border-[10px] border-zinc-900 bg-zinc-900 shadow-2xl">
            <span className="absolute left-1/2 top-0 z-20 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-zinc-900" />
            <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-white">
              <Image
                src={current.image}
                alt=""
                fill
                sizes="320px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/90 via-rose-900/30 to-transparent" />
              <div className="absolute inset-x-0 top-12 px-6 text-center text-white">
                <Music className="mx-auto size-4 opacity-80" />
                <p className="mt-3 font-serif text-lg italic tracking-wide">
                  The Wedding of
                </p>
                <p className="mt-1 font-serif text-3xl font-bold">
                  Rina &amp; Dimas
                </p>
                <p className="mt-2 text-xs opacity-90">
                  Sabtu, 20 Desember 2026
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-8 px-6">
                <div className="rounded-2xl bg-white/95 p-4 text-center shadow-lg backdrop-blur">
                  <div className="grid grid-cols-3 gap-2 text-rose-700">
                    {[
                      ["D", "12"],
                      ["H", "08"],
                      ["J", "24"],
                    ].map(([unit, value]) => (
                      <div key={unit} className="rounded-lg bg-rose-50 py-2">
                        <p className="text-lg font-extrabold">{value}</p>
                        <p className="text-[9px] font-semibold uppercase">
                          {unit === "D" ? "Hari" : unit === "H" ? "Jam" : "Menit"}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button className="mt-3 w-full rounded-full bg-rose-600 py-2.5 text-xs font-semibold text-white">
                    Konfirmasi Kehadiran
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
            <div className="flex items-center gap-2 border-b border-zinc-100 bg-zinc-50 px-4 py-3">
              <span className="flex gap-1.5">
                <span className="size-3 rounded-full bg-rose-400" />
                <span className="size-3 rounded-full bg-amber-400" />
                <span className="size-3 rounded-full bg-emerald-400" />
              </span>
              <span className="ml-2 flex-1 rounded-md bg-white px-3 py-1 text-[11px] text-zinc-400">
                {active === "landing"
                  ? "https://brand-anda.com"
                  : "https://katalog-umkm.com"}
              </span>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={current.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/85 via-zinc-900/50 to-transparent" />
              {active === "landing" ? (
                <div className="absolute inset-0 flex flex-col justify-center px-8 text-white sm:px-12">
                  <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur">
                    New Collection
                  </span>
                  <p className="mt-4 max-w-sm text-2xl font-extrabold leading-tight sm:text-3xl">
                    Tampil profesional, ubah pengunjung jadi pelanggan.
                  </p>
                  <p className="mt-3 max-w-xs text-xs text-zinc-300 sm:text-sm">
                    Desain modern, cepat dibuka, dan tombol langsung ke
                    WhatsApp.
                  </p>
                  <div className="mt-5 flex gap-2">
                    <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-900">
                      Pesan Sekarang
                    </button>
                    <button className="rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white">
                      Lihat Katalog
                    </button>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col justify-center px-8 text-white sm:px-12">
                  <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur">
                    Katalog Produk
                  </span>
                  <p className="mt-4 max-w-sm text-2xl font-extrabold leading-tight sm:text-3xl">
                    Satu website untuk semua produk UMKM Anda.
                  </p>
                  <div className="mt-5 grid max-w-sm grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-lg border border-white/15 bg-white/10 p-2 backdrop-blur"
                      >
                        <div className="flex items-center gap-1">
                          <Star className="size-3 fill-amber-400 text-amber-400" />
                          <span className="text-[9px]">4.9</span>
                        </div>
                        <p className="mt-2 text-[10px] font-semibold">
                          Produk {i}
                        </p>
                        <p className="text-[9px] text-zinc-300">Rp99.000</p>
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 flex w-fit items-center gap-1.5 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white">
                    <Search className="size-3.5" /> Cari Produk
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
        {[
          { icon: Rocket, label: "LCP < 1.8 detik", desc: "Skor performa tinggi" },
          { icon: Heart, label: "Mobile-first", desc: "Nyaman di semua layar" },
          { icon: MapPin, label: "SEO & Maps", desc: "Mudah ditemukan" },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-200 bg-white p-4 text-center"
            >
              <Icon className="mx-auto size-5 text-brand-600" />
              <p className="mt-2 text-sm font-bold text-zinc-900">
                {item.label}
              </p>
              <p className="text-xs text-zinc-500">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
