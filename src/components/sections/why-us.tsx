import { HandCoins, Headset, Puzzle } from "lucide-react";
import { Reveal } from "@/components/reveal";

const VALUES = [
  {
    icon: HandCoins,
    title: "Ramah UMKM",
    description:
      "Layanan dan produk didesain dengan harga yang terjangkau namun memiliki kualitas profesional.",
  },
  {
    icon: Puzzle,
    title: "Praktis & Bebas Pusing",
    description:
      "Baik jasa custom maupun produk siap pakai, semuanya dirancang agar langsung bisa digunakan tanpa perlu paham teknis yang rumit.",
  },
  {
    icon: Headset,
    title: "Dukungan Personal",
    description:
      "Tim kami siap mendampingi proses konsultasi hingga penanganan kendala teknis pascapembelian (after-sales support).",
  },
];

export function WhyUs() {
  return (
    <section className="bg-zinc-50 py-20 sm:py-24 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Nilai Utama
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Mengapa memilih Techmind.id?
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Kami bukan sekadar jualan produk digital — kami mendampingi bisnis
            Anda supaya benar-benar jalan.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUES.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 90}>
                <div className="h-full rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                      <Icon className="size-6" />
                    </span>
                    <span className="text-3xl font-extrabold tracking-tight text-zinc-100 dark:text-zinc-800">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}