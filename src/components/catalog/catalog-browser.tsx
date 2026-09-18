"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Download,
  Eye,
  Filter,
  Minus,
  PackageCheck,
  Plus,
  Search,
  ShoppingCart,
  Sparkles,
  X,
} from "lucide-react";
import {
  TEMPLATES,
  TEMPLATE_CATEGORIES,
  type Template,
  type TemplateCategory,
} from "@/data/templates";
import { formatIDR, waLink } from "@/config";

const ACCENTS: Record<
  string,
  { badge: string; icon: string; button: string }
> = {
  emerald: {
    badge:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900",
    icon: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },
  sky: {
    badge:
      "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-900",
    icon: "bg-sky-100 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300",
    button: "bg-sky-600 hover:bg-sky-700",
  },
  amber: {
    badge:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-900",
    icon: "bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300",
    button: "bg-amber-600 hover:bg-amber-700",
  },
  violet: {
    badge:
      "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/50 dark:text-violet-300 dark:border-violet-900",
    icon: "bg-violet-100 text-violet-700 dark:bg-violet-950/50 dark:text-violet-300",
    button: "bg-violet-600 hover:bg-violet-700",
  },
  rose: {
    badge:
      "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-900",
    icon: "bg-rose-100 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300",
    button: "bg-rose-600 hover:bg-rose-700",
  },
};

const SELECTED_BUTTON =
  "bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200";

function discountPercent(tpl: Template) {
  return Math.round((1 - tpl.price / tpl.originalPrice) * 100);
}

export function CatalogBrowser({
  initialCategory,
}: {
  initialCategory?: TemplateCategory;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<TemplateCategory | "Semua">(
    initialCategory ?? "Semua",
  );
  const [selected, setSelected] = useState<string[]>([]);
  const [preview, setPreview] = useState<Template | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TEMPLATES.filter((tpl) => {
      const matchCategory = category === "Semua" || tpl.category === category;
      const matchQuery =
        !q ||
        tpl.title.toLowerCase().includes(q) ||
        tpl.shortDescription.toLowerCase().includes(q) ||
        tpl.category.toLowerCase().includes(q) ||
        tpl.features.some((f) => f.toLowerCase().includes(q));
      return matchCategory && matchQuery;
    });
  }, [query, category]);

  const selectedTemplates = selected
    .map((id) => TEMPLATES.find((t) => t.id === id))
    .filter((t): t is Template => Boolean(t));
  const total = selectedTemplates.reduce((sum, t) => sum + t.price, 0);

  function toggle(id: string) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  }

  const checkoutHref = `/checkout?items=${selected.join(",")}`;

  return (
    <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
      <div className="sticky top-16 z-30 -mx-4 mb-8 border-b border-zinc-200 bg-white/90 px-4 py-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari template: kasir, stok, gaji, faktur..."
              className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand-500"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500 lg:shrink-0 dark:text-zinc-400">
            <Filter className="size-4" />
            <span>
              Menampilkan{" "}
              <span className="font-semibold text-zinc-800 dark:text-zinc-100">
                {filtered.length}
              </span>{" "}
              template
            </span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <CategoryChip
            label="Semua"
            active={category === "Semua"}
            onClick={() => setCategory("Semua")}
          />
          {TEMPLATE_CATEGORIES.map((cat) => (
            <CategoryChip
              key={cat.name}
              label={cat.name}
              active={category === cat.name}
              onClick={() => setCategory(cat.name)}
            />
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 py-20 text-center dark:border-zinc-700 dark:bg-zinc-900">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Tidak ada template yang cocok dengan pencarian Anda.
          </p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("Semua");
            }}
            className="mt-3 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
          >
            Reset filter
          </button>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tpl) => {
            const accent = ACCENTS[tpl.accent];
            const isSelected = selected.includes(tpl.id);
            return (
              <article
                key={tpl.id}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900 ${
                  isSelected
                    ? "border-brand-400 ring-2 ring-brand-100 dark:ring-brand-900"
                    : "border-zinc-200 dark:border-zinc-800"
                }`}
              >
                {tpl.isBundle && (
                  <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-zinc-900 px-3 py-1 text-[11px] font-bold text-white dark:bg-white dark:text-zinc-900">
                    <Sparkles className="size-3" /> PALING HEMAT
                  </span>
                )}
                <div className="flex items-center justify-between px-6 pt-6">
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${accent.badge}`}
                  >
                    {tpl.category}
                  </span>
                  <span className="rounded-full bg-rose-100 px-2.5 py-1 text-[11px] font-bold text-rose-700 dark:bg-rose-950/50 dark:text-rose-300">
                    -{discountPercent(tpl)}%
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold leading-snug text-zinc-900 dark:text-white">
                    {tpl.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {tpl.shortDescription}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {tpl.features.slice(0, 3).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                      >
                        <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {tpl.formats.map((format) => (
                      <span
                        key={format}
                        className="rounded-md bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {format}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-xs text-zinc-400 line-through">
                          {formatIDR(tpl.originalPrice)}
                        </p>
                        <p className="text-xl font-extrabold text-zinc-900 dark:text-white">
                          {formatIDR(tpl.price)}
                        </p>
                      </div>
                      <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                        sekali bayar
                      </span>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button
                        type="button"
                        onClick={() => setPreview(tpl)}
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-200 px-3 py-2.5 text-xs font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                      >
                        <Eye className="size-3.5" /> Detail
                      </button>
                      <button
                        type="button"
                        onClick={() => toggle(tpl.id)}
                        className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl px-3 py-2.5 text-xs font-semibold text-white transition-colors ${
                          isSelected ? SELECTED_BUTTON : accent.button
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Minus className="size-3.5" /> Batal
                          </>
                        ) : (
                          <>
                            <Plus className="size-3.5" /> Keranjang
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {selected.length > 0 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 px-4 py-4 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] backdrop-blur sm:px-6 lg:px-8 dark:border-zinc-800 dark:bg-zinc-950/95">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                <ShoppingCart className="size-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                  {selected.length} template dipilih
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Total {formatIDR(total)}
                </p>
              </div>
            </div>
            <div className="flex w-full gap-2 sm:w-auto">
              <button
                type="button"
                onClick={() => setSelected([])}
                className="rounded-full border border-zinc-200 px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                Kosongkan
              </button>
              <Link
                href={checkoutHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:flex-none"
              >
                <PackageCheck className="size-4" /> Lanjut Checkout
              </Link>
            </div>
          </div>
        </div>
      )}

      {preview && (
        <PreviewModal
          template={preview}
          selected={selected.includes(preview.id)}
          onToggle={() => toggle(preview.id)}
          onClose={() => setPreview(null)}
        />
      )}
    </div>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-2 text-xs font-semibold transition-colors ${
        active
          ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
          : "border border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
      }`}
    >
      {label}
    </button>
  );
}

function PreviewModal({
  template,
  selected,
  onToggle,
  onClose,
}: {
  template: Template;
  selected: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const accent = ACCENTS[template.accent];
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-zinc-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-label={template.title}
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative border-b border-zinc-100 p-6 sm:p-8 dark:border-zinc-800">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 grid size-9 place-items-center rounded-full bg-zinc-100 text-zinc-500 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            aria-label="Tutup"
          >
            <X className="size-4" />
          </button>
          <span
            className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-semibold ${accent.badge}`}
          >
            {template.category}
          </span>
          <h3 className="mt-3 max-w-lg text-xl font-extrabold text-zinc-900 sm:text-2xl dark:text-white">
            {template.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {template.description}
          </p>
        </div>

        <div className="grid gap-6 p-6 sm:grid-cols-2 sm:p-8">
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
              Fitur Otomatisasi
            </h4>
            <ul className="mt-3 space-y-2">
              {template.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">
              Format File
            </h4>
            <div className="mt-3 space-y-2">
              {template.formats.map((format) => (
                <div
                  key={format}
                  className="flex items-center gap-2 rounded-xl border border-zinc-200 px-3 py-2.5 text-sm text-zinc-700 dark:border-zinc-700 dark:text-zinc-300"
                >
                  <Download className="size-4 text-zinc-400" />
                  {format}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-800">
              <p className="text-xs text-zinc-400 line-through">
                {formatIDR(template.originalPrice)}
              </p>
              <p className="text-2xl font-extrabold text-zinc-900 dark:text-white">
                {formatIDR(template.price)}
              </p>
              <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                Hemat {formatIDR(template.originalPrice - template.price)} —
                sekali bayar
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-zinc-100 p-6 sm:flex-row sm:justify-end sm:p-8 dark:border-zinc-800">
          <a
            href={waLink(
              `Halo TechMind, saya ingin membeli template "${template.title}" (${formatIDR(template.price)}). Mohon info pembayaran & pengirimannya.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-950/70"
          >
            Tanya via WhatsApp
          </a>
          <button
            type="button"
            onClick={onToggle}
            className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors ${
              selected ? SELECTED_BUTTON : accent.button
            }`}
          >
            <ShoppingCart className="size-4" />
            {selected ? "Hapus dari Keranjang" : "Tambah ke Keranjang"}
          </button>
        </div>
      </div>
    </div>
  );
}