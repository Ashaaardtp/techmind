import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";

const TESTIMONIALS = [
  {
    name: "Pak Hendra",
    role: "Pemilik Resto & Toko Retail, Bandung",
    initials: "PH",
    accent: "bg-emerald-600",
    quote:
      "Dulu catat kasir dan stok di kertas, sering selisih. Setelah pakai template TechMind, tutup buku cuma 10 menit dan slip gaji karyawan otomatis. Gak perlu bisa rumus Excel.",
    metric: "Hemat 8 jam/minggu",
  },
  {
    name: "Rina & Dimas",
    role: "Pasangan Pengantin, Surabaya",
    initials: "RD",
    accent: "bg-rose-500",
    quote:
      "Undangan digitalnya elegan dan cepat dibuka dari WhatsApp. Tamu bisa RSVP langsung, jadi kami tahu jumlah hadir real-time tanpa telepon satu-satu. Jauh lebih murah dari undangan cetak.",
    metric: "RSVP otomatis 214 tamu",
  },
  {
    name: "Sari",
    role: "Founder Brand Fashion, Jakarta",
    initials: "S",
    accent: "bg-brand-600",
    quote:
      "Saya bukan orang teknis, tapi landing page-nya jadi dalam 3 hari dan langsung mengarahkan leads ke WhatsApp. Penjualan campaign pertama naik 3x lipat. Worth it banget.",
    metric: "Konversi naik 3x",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="scroll-mt-20 bg-white py-20 sm:py-24 dark:bg-zinc-950"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              Bukti Nyata
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Dipercaya pelaku usaha seperti Anda
            </h2>
            <div className="mt-4 flex items-center justify-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                4.9 dari 800+ ulasan pelanggan
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 90}>
              <figure
                className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-zinc-50/60 p-7 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
              <Quote className="size-8 text-brand-300 dark:text-brand-400" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                “{item.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${item.accent}`}
                >
                  {item.initials}
                </span>
                <div className="min-w-0">
                  <figcaption className="text-sm font-bold text-zinc-900 dark:text-white">
                    {item.name}
                  </figcaption>
                  <p className="truncate text-xs text-zinc-500 dark:text-zinc-400">
                    {item.role}
                  </p>
                </div>
              </div>
              <span className="mt-4 inline-flex w-fit items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
                {item.metric}
              </span>
            </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Reveal>
            <Link
              href="/template"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              Gabung bersama 1.200+ pengguna lainnya
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
