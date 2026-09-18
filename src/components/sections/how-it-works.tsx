import {
  CreditCard,
  MousePointerClick,
  PackageCheck,
  Search,
} from "lucide-react";

const STEPS = [
  {
    icon: Search,
    title: "Pilih Layanan",
    description:
      "Jelajahi katalog template spreadsheet atau portofolio jasa website kami.",
  },
  {
    icon: MousePointerClick,
    title: "Klik & Konsultasi",
    description:
      "Hubungi kami via WhatsApp dengan pesan otomatis berisi detail pilihan Anda.",
  },
  {
    icon: CreditCard,
    title: "Bayar Mudah",
    description:
      "Pembayaran via QRIS, transfer bank, atau e-wallet. Aman dan instan.",
  },
  {
    icon: PackageCheck,
    title: "Langsung Terima",
    description:
      "Template & link akses dikirim ke WhatsApp/email. Website siap sesuai SLA.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="cara-kerja"
      className="scroll-mt-20 bg-zinc-50 py-20 sm:py-24 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            Proses Mudah
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Dari pilih sampai pakai, cuma 4 langkah
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            Tanpa proses berbelit. Rata-rata pelanggan kami mulai menggunakan
            produk dalam waktu kurang dari 24 jam.
          </p>
        </div>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent lg:block dark:via-zinc-700" />
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center">
                <span className="relative mx-auto grid size-16 place-items-center rounded-2xl border border-zinc-200 bg-white text-brand-600 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 dark:text-brand-300">
                  <Icon className="size-7" />
                  <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-zinc-900 text-[11px] font-bold text-white dark:bg-white dark:text-zinc-900">
                    {index + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-base font-bold text-zinc-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
