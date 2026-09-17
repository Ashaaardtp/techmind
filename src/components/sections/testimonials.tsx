import Link from "next/link";
import { ArrowRight, Quote, Star } from "lucide-react";

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
    <section id="testimoni" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
            Bukti Nyata
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
            Dipercaya pelaku usaha seperti Anda
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2 text-sm font-medium text-zinc-600">
              4.9 dari 800+ ulasan pelanggan
            </span>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-3xl border border-zinc-200 bg-zinc-50/60 p-7 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote className="size-8 text-brand-300" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-700">
                “{item.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-zinc-200 pt-5">
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${item.accent}`}
                >
                  {item.initials}
                </span>
                <div className="min-w-0">
                  <figcaption className="text-sm font-bold text-zinc-900">
                    {item.name}
                  </figcaption>
                  <p className="truncate text-xs text-zinc-500">{item.role}</p>
                </div>
              </div>
              <span className="mt-4 inline-flex w-fit items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold text-emerald-700">
                {item.metric}
              </span>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/template"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            Gabung bersama 1.200+ pengguna lainnya
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
