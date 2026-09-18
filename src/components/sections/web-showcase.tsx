import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarHeart,
  CheckCircle2,
  Clock,
  Globe,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
} from "lucide-react";
import { WEB_SERVICES } from "@/data/services";
import { formatIDR, WA_MESSAGES, waLink } from "@/config";

const ICONS = {
  monitor: MonitorSmartphone,
  building: Building2,
  mail: CalendarHeart,
  "shopping-bag": Rocket,
};

const VISUALS: Record<string, { src: string; alt: string }> = {
  "svc-landing": {
    src: "/david-becker-crs2vlkSe98-unsplash.jpg",
    alt: "Contoh landing page bisnis",
  },
  "svc-company-profile": {
    src: "/pawel-czerwinski-Y8Y_s90SK3A-unsplash.jpg",
    alt: "Contoh website company profile",
  },
  "svc-invitation": {
    src: "/mymind-tZCrFpSNiIQ-unsplash.jpg",
    alt: "Contoh undangan digital",
  },
  "svc-custom": {
    src: "/david-becker-crs2vlkSe98-unsplash.jpg",
    alt: "Contoh website kustom",
  },
};

export function WebShowcase() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -left-40 top-0 size-[30rem] rounded-full bg-brand-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[30rem] rounded-full bg-violet-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              <Globe className="size-4" /> Layanan Jasa — Website &amp; Landing Page
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Kehadiran digital yang bikin bisnis dipercaya
            </h2>
            <p className="mt-4 text-zinc-400">
              Landing page template siap pakai, company profile yang bikin
              bisnis dipercaya, hingga undangan digital yang praktis dan elegan.
            </p>
          </div>
          <Link
            href="/jasa-web"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-200"
          >
            Lihat portofolio & harga
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {WEB_SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            const visual = VISUALS[service.id];
            return (
              <article
                key={service.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/25"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur">
                    <Clock className="size-3" /> {service.sla}
                  </span>
                  <span className="absolute bottom-4 left-4 grid size-11 place-items-center rounded-xl bg-white text-zinc-900">
                    <Icon className="size-5" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {service.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-zinc-300"
                      >
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-zinc-500">
                        Mulai dari
                      </p>
                      <p className="text-lg font-extrabold text-white">
                        {formatIDR(service.startingPrice)}
                      </p>
                    </div>
                    <Link
                      href={`/jasa-web#${service.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-white hover:text-zinc-900"
                    >
                      Detail <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row">
          <p className="text-sm text-zinc-300">
            Belum yakin mau yang mana? Ceritakan kebutuhan bisnis Anda, kami
            bantu rekomendasikan.
          </p>
          <a
            href={waLink(WA_MESSAGES.landingPage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
          >
            <MessageCircle className="size-4" /> Konsultasi Gratis
          </a>
        </div>
      </div>
    </section>
  );
}
