import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarHeart,
  CheckCircle2,
  Clock,
  Globe,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { DemoPreview } from "@/components/web/demo-preview";
import { PricingTable } from "@/components/web/pricing-table";
import { BriefForm } from "@/components/web/brief-form";
import { WEB_SERVICES } from "@/data/services";
import { formatIDR, waLink } from "@/config";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website, Landing Page, Company Profile & Undangan Digital",
  description:
    "Landing page template siap pakai mulai 250rb, company profile multi-halaman ramah budget, undangan digital interaktif, dan website kustom dari nol. Garansi revisi 30 hari.",
};

const ICONS = {
  monitor: MonitorSmartphone,
  building: Building2,
  mail: CalendarHeart,
  "shopping-bag": Rocket,
};

const SLA_STEPS = [
  { title: "Brief & Konsultasi", desc: "Diskusi kebutuhan via WhatsApp." },
  { title: "Desain & Review", desc: "Anda menyetujui desain sebelum coding." },
  { title: "Development", desc: "Pengerjaan cepat sesuai SLA layanan." },
  { title: "Rilis & Garansi", desc: "Revisi minor 30 hari + tutorial." },
];

const WEB_FAQ = [
  {
    q: "Apakah saya mendapat file sumber website?",
    a: "Ya. Untuk website kustom dari nol kami serahkan source code dan akses penuh. Untuk landing page, company profile, dan undangan digital berbasis template, Anda mendapat akses pengelolaan serta panduan video.",
  },
  {
    q: "Berapa lama proses pengerjaannya?",
    a: "Landing page 1–3 hari kerja, undangan digital 1–2 hari kerja, company profile 3–7 hari kerja, dan website kustom 7–21 hari kerja setelah brief dan materi (teks/gambar) lengkap.",
  },
  {
    q: "Kenapa harganya terjangkau?",
    a: "Landing page dan company profile kami bangun dari template dengan section yang sudah paten dan teruji, jadi pengerjaannya cepat dan murah. Kebutuhan tambahan (section baru, copywriting, desain custom) tetap bisa dengan biaya add-on yang transparan.",
  },
  {
    q: "Apakah sudah termasuk domain dan hosting?",
    a: "Untuk paket tertentu sudah termasuk deployment dan subdomain gratis. Domain .com dapat kami bantu beli dengan biaya terpisah sesuai penyedia.",
  },
  {
    q: "Bisa revisi berapa kali?",
    a: "Revisi desain sebelum rilis sesuai kesepakatan. Setelah rilis, Anda mendapat garansi revisi minor hingga 30 hari untuk penyesuaian konten dan tampilan.",
  },
];

export default function JasaWebPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute -left-32 top-0 size-[32rem] rounded-full bg-brand-600/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 size-[32rem] rounded-full bg-violet-600/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold text-brand-300">
              <Globe className="size-3.5" /> Layanan Jasa — Jasa Website
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Website yang bekerja <span className="text-gradient">untuk</span>{" "}
              bisnis Anda
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              Landing page template siap pakai yang mengubah pengunjung jadi
              pelanggan, company profile yang bikin bisnis dipercaya, undangan
              digital yang praktis, hingga website kustom dari nol. Cepat, rapi,
              harga terjangkau.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink(
                  "Halo TechMind, saya ingin konsultasi jasa pembuatan website. Mohon info paket dan estimasi waktunya.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
              >
                <MessageCircle className="size-4" /> Konsultasi via WhatsApp
              </a>
              <Link
                href="#harga"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Lihat Paket & Harga
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-400">
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-brand-400" /> Landing page 1–3
                hari
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-brand-400" /> Garansi revisi
                30 hari
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="size-4 text-brand-400" /> Desain template
                paten + add-on
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              Demo Interaktif
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Lihat hasilnya sebelum memulai
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Berikut gambaran tampilan nyata layanan kami. Pilih salah satu
              untuk melihat preview.
            </p>
          </div>
          <div className="mt-12">
            <DemoPreview />
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-20 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              Layanan Kami
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Pilih solusi sesuai tahap bisnis Anda
            </h2>
          </div>

          <div className="mt-14 space-y-16">
            {WEB_SERVICES.map((service, index) => {
              const Icon = ICONS[service.icon];
              const reversed = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2"
                >
                  <div className={reversed ? "lg:order-2" : ""}>
                    <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-950/60 dark:text-brand-300">
                      <Icon className="size-3.5" /> {service.sla}
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold text-zinc-900 sm:text-3xl dark:text-white">
                      {service.name}
                    </h3>
                    <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {service.description}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                        >
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-500 dark:text-brand-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400">
                          Mulai dari
                        </p>
                        <p className="text-xl font-extrabold text-zinc-900 dark:text-white">
                          {formatIDR(service.startingPrice)}
                        </p>
                      </div>
                      <a
                        href={waLink(service.waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                      >
                        Konsultasi Layanan Ini
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
                        Yang Anda dapatkan
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.deliverables.map((item) => (
                          <span
                            key={item}
                            className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs font-medium text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 space-y-3 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                        {service.features.slice(0, 4).map((feature, i) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400"
                          >
                            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand-100 text-[11px] font-bold text-brand-700 dark:bg-brand-900/60 dark:text-brand-300">
                              {i + 1}
                            </span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="harga" className="scroll-mt-20 bg-white py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              Paket & Harga
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Transparan, tanpa biaya tersembunyi
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Bandingkan fitur setiap paket dan pilih yang paling sesuai dengan
              kebutuhan serta budget Anda.
            </p>
          </div>
          <div className="mt-12">
            <PricingTable />
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              Alur Kerja
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Proses yang jelas dari awal sampai rilis
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SLA_STEPS.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="grid size-9 place-items-center rounded-lg bg-brand-600 text-sm font-bold">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-base font-bold">{step.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="brief" className="scroll-mt-20 bg-zinc-50 py-20 dark:bg-zinc-900/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              Mulai Proyek
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Ceritakan ide Anda, kami wujudkan
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Isi brief singkat di samping. Tim kami akan menghubungi Anda via
              WhatsApp untuk membahas detail, estimasi biaya, dan jadwal
              pengerjaan.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Konsultasi awal 100% gratis",
                "Estimasi biaya transparan",
                "Revisi desain sebelum coding",
                "Dukungan pasca rilis 30 hari",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <BriefForm />
        </div>
      </section>

      <section className="bg-white py-20 dark:bg-zinc-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Pertanyaan seputar jasa website
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {WEB_FAQ.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-zinc-200 bg-white p-5 transition-colors open:border-brand-200 dark:border-zinc-800 dark:bg-zinc-900 dark:open:border-brand-800"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                  {faq.q}
                  <span className="text-lg text-zinc-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}