import { Reveal } from "@/components/reveal";

export function AboutUs() {
  return (
    <section
      id="tentang"
      className="scroll-mt-20 bg-zinc-50 py-20 sm:py-24 dark:bg-zinc-900/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="right">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
                Tentang Kami
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
                Mitra solusi digital serba ada untuk bisnis lokal
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120} direction="left">
            <div className="space-y-4 text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
              <p>
                Techmind.id hadir sebagai mitra solusi digital serba ada
                (all-in-one digital solution) yang berfokus membantu pelaku
                UMKM, pemilik bisnis lokal, dan profesional untuk{" "}
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Go Digital
                </span>{" "}
                secara praktis dan terjangkau.
              </p>
              <p>
                Kami menyediakan kombinasi Layanan Jasa Digital (Pembuatan
                Website, Landing Page Penjualan, &amp; Undangan Digital) serta
                Produk Digital Siap Pakai (Template Spreadsheet &amp; E-Book
                Edukasi) yang dirancang untuk menghemat waktu operasional dan
                meningkatkan kredibilitas bisnis Anda.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}