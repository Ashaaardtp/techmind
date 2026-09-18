import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Apakah saya perlu jago Excel untuk memakai template?",
    a: "Tidak sama sekali. Semua rumus sudah terpasang otomatis dan sel rumus dilindungi. Anda cukup mengisi kolom berwarna sesuai panduan yang disertakan.",
  },
  {
    q: "Template bisa dipakai di HP?",
    a: "Bisa. Template tersedia dalam format Excel (.xlsx) dan Google Sheets. Versi Google Sheets dapat dibuka dan diisi langsung dari HP tanpa menginstal aplikasi tambahan.",
  },
  {
    q: "Apakah pembelian berlaku selamanya?",
    a: "Ya, ini pembelian sekali bayar (one-time purchase). Anda bebas memakai template tanpa langganan bulanan. Paket bundle juga mendapat update gratis selama 1 tahun.",
  },
  {
    q: "Bagaimana cara menerima template setelah bayar?",
    a: "Setelah pembayaran dikonfirmasi, link download dan akses Google Sheets dikirim otomatis ke WhatsApp dan email Anda dalam hitungan menit.",
  },
  {
    q: "Metode pembayaran apa saja yang tersedia?",
    a: "Kami menerima QRIS, transfer bank (BCA, Mandiri, BNI, BRI), dan e-wallet (GoPay, OVO, Dana, ShopeePay). Proses checkout dapat dilakukan langsung dari website.",
  },
  {
    q: "Apakah ada garansi untuk jasa pembuatan website?",
    a: "Tentu. Setiap proyek website mendapat garansi revisi minor hingga 30 hari pasca rilis, plus video tutorial operasional agar Anda bisa mengelola sendiri.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-zinc-50 py-20 sm:py-24 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Pertanyaan yang sering ditanyakan
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-zinc-200 bg-white p-5 transition-colors open:border-brand-200 dark:border-zinc-800 dark:bg-zinc-900 dark:open:border-brand-800"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                {faq.q}
                <ChevronDown className="size-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
