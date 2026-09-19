import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Star,
  Table2,
} from "lucide-react";
import { TEMPLATES } from "@/data/templates";
import { formatIDR, waLink } from "@/config";
import { Reveal } from "@/components/reveal";

const accentClasses: Record<string, string> = {
  emerald:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900",
  sky:
    "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-900",
  amber:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-900",
  violet:
    "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-900",
  rose:
    "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-900",
};

export function FeaturedTemplates() {
  const featured = TEMPLATES.filter((t) => t.popular && t.image).slice(0, 3);

  return (
    <section className="bg-white py-20 sm:py-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              <Table2 className="size-4" /> Produk Digital — Template Terlaris
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
              Langsung pakai, langsung rapi
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              Produk paling banyak dibeli pelaku usaha. Sekali bayar, bebas
              dipakai selamanya di Excel maupun Google Sheets.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Link
              href="/template"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
            >
              Lihat semua template
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {featured.map((tpl, index) => (
            <Reveal key={tpl.id} delay={index * 90}>
              <article
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-emerald-800"
              >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900">
                <Image
                  src={tpl.image ?? "/pawel-czerwinski-Y8Y_s90SK3A-unsplash.jpg"}
                  alt={tpl.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                      accentClasses[tpl.accent]
                    }`}
                  >
                    {tpl.category}
                  </span>
                  {tpl.isBundle && (
                    <span className="rounded-full bg-zinc-900 px-2.5 py-1 text-[11px] font-semibold text-white dark:bg-white dark:text-zinc-900">
                      Bundle Hemat
                    </span>
                  )}
                </div>
                <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-amber-400 px-2.5 py-1 text-[11px] font-bold text-amber-950">
                  <Star className="size-3 fill-amber-950" /> Populer
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-base font-bold leading-snug text-zinc-900 dark:text-white">
                  {tpl.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {tpl.shortDescription}
                </p>

                <ul className="mt-4 space-y-2">
                  {tpl.features.slice(0, 2).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                    >
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-end justify-between border-t border-zinc-100 pt-5 dark:border-zinc-800">
                  <div>
                    <p className="text-xs text-zinc-400 line-through">
                      {formatIDR(tpl.originalPrice)}
                    </p>
                    <p className="text-xl font-extrabold text-zinc-900 dark:text-white">
                      {formatIDR(tpl.price)}
                    </p>
                  </div>
                  <a
                    href={waLink(
                      `Halo TechMind, saya ingin membeli template "${tpl.title}" (${formatIDR(tpl.price)}). Mohon info cara download & pembayarannya.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-700"
                  >
                    <Download className="size-3.5" /> Beli
                  </a>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}