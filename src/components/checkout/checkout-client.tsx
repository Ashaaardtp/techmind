"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Copy,
  CreditCard,
  Minus,
  PackageCheck,
  QrCode,
  ShoppingCart,
  Smartphone,
  Trash2,
  User,
  Wallet,
} from "lucide-react";
import { TEMPLATES, type Template } from "@/data/templates";
import { SITE, formatIDR, waLink } from "@/config";

const PAYMENT_METHODS = [
  {
    id: "qris",
    label: "QRIS",
    hint: "Scan & bayar dari semua e-wallet / m-banking",
    icon: QrCode,
  },
  {
    id: "transfer",
    label: "Transfer Bank",
    hint: "BCA / Mandiri / BNI / BRI",
    icon: Building2,
  },
  {
    id: "ewallet",
    label: "E-Wallet",
    hint: "GoPay / OVO / Dana / ShopeePay",
    icon: Wallet,
  },
];

export function CheckoutClient() {
  const searchParams = useSearchParams();
  const itemsParam = searchParams.get("items") ?? "";

  const initialItems = itemsParam
    .split(",")
    .map((id) => TEMPLATES.find((t) => t.id === id.trim()))
    .filter((t): t is Template => Boolean(t));

  const [items, setItems] = useState<Template[]>(initialItems);
  const [payment, setPayment] = useState("qris");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items],
  );
  const originalTotal = useMemo(
    () => items.reduce((sum, item) => sum + item.originalPrice, 0),
    [items],
  );
  const savings = originalTotal - total;
  const orderId = useMemo(
    () => `TM-${hashString(itemsParam || "techmind")}`,
    [itemsParam],
  );

  function removeItem(id: string) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const method = PAYMENT_METHODS.find((m) => m.id === payment);
    const message = [
      `Halo TechMind, saya ingin menyelesaikan pesanan.`,
      "",
      `No. Pesanan: ${orderId}`,
      `Nama: ${name}`,
      `WhatsApp: ${phone}`,
      `Email: ${email}`,
      `Metode Pembayaran: ${method?.label ?? payment}`,
      "",
      "Rincian Pesanan:",
      ...items.map(
        (item, i) =>
          `${i + 1}. ${item.title} — ${formatIDR(item.price)}`,
      ),
      "",
      `Total: ${formatIDR(total)}`,
      "",
      "Mohon konfirmasi pembayaran & pengiriman file. Terima kasih!",
    ].join("\n");
    setDone(true);
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-zinc-100 text-zinc-400 dark:bg-zinc-800">
          <ShoppingCart className="size-7" />
        </span>
        <h1 className="mt-6 text-2xl font-extrabold text-zinc-900 dark:text-white">
          Keranjang Anda masih kosong
        </h1>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Pilih template yang Anda butuhkan dari katalog, lalu lanjutkan ke
          checkout.
        </p>
        <Link
          href="/template"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Jelajahi Katalog Template
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="text-xs text-zinc-500 dark:text-zinc-400">
        <Link href="/template" className="hover:text-zinc-700 dark:hover:text-zinc-200">
          Katalog Template
        </Link>
        <span className="mx-2">/</span>
        <span className="font-medium text-zinc-800 dark:text-zinc-100">
          Checkout
        </span>
      </nav>
      <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
        Checkout Pesanan
      </h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        No. Pesanan <span className="font-semibold">{orderId || "..."}</span> • Selesaikan
        dalam beberapa langkah mudah.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <ShoppingCart className="size-5 text-brand-600 dark:text-brand-400" />{" "}
              Rincian Pesanan
            </h2>
            <div className="mt-5 divide-y divide-zinc-100 dark:divide-zinc-800">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 first:pt-0">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {item.category} • {item.formats.join(", ")}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">
                        {formatIDR(item.price)}
                      </span>
                      <span className="text-xs text-zinc-400 line-through">
                        {formatIDR(item.originalPrice)}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="grid size-9 shrink-0 place-items-center self-start rounded-lg text-zinc-400 transition-colors hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-950/40 dark:hover:text-rose-400"
                    aria-label={`Hapus ${item.title}`}
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))}
            </div>
            <Link
              href="/template"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
            >
              <Minus className="size-3.5" /> Tambah template lain
            </Link>
          </section>

          <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <CreditCard className="size-5 text-brand-600 dark:text-brand-400" />{" "}
              Metode Pembayaran
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {PAYMENT_METHODS.map((method) => {
                const Icon = method.icon;
                const isActive = payment === method.id;
                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPayment(method.id)}
                    className={`rounded-2xl border p-4 text-left transition-all ${
                      isActive
                        ? "border-brand-500 bg-brand-50 ring-2 ring-brand-100 dark:bg-brand-900/30 dark:ring-brand-900"
                        : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-700 dark:hover:border-zinc-600"
                    }`}
                    aria-pressed={isActive}
                  >
                    <Icon
                      className={`size-5 ${
                        isActive
                          ? "text-brand-600 dark:text-brand-400"
                          : "text-zinc-400"
                      }`}
                    />
                    <p className="mt-3 text-sm font-bold text-zinc-900 dark:text-white">
                      {method.label}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-zinc-500 dark:text-zinc-400">
                      {method.hint}
                    </p>
                  </button>
                );
              })}
            </div>

            {payment === "qris" && (
              <div className="mt-5 flex flex-col items-center gap-4 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 sm:flex-row dark:border-zinc-700 dark:bg-zinc-800/60">
                <div className="grid size-36 shrink-0 place-items-center rounded-xl bg-white p-3 shadow-sm">
                  <div className="grid grid-cols-5 gap-1">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <span
                        key={i}
                        className={`size-4 rounded-sm ${
                          [0, 1, 2, 5, 7, 10, 12, 14, 15, 17, 20, 22, 24].includes(
                            i,
                          )
                            ? "bg-zinc-900"
                            : "bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-zinc-900 dark:text-white">
                    Scan QRIS untuk membayar
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                    Buka aplikasi m-banking atau e-wallet, pilih menu QRIS, lalu
                    scan kode di samping. Nominal akan terisi otomatis sebesar{" "}
                    <span className="font-semibold text-zinc-700 dark:text-zinc-200">
                      {formatIDR(total)}
                    </span>
                    .
                  </p>
                </div>
              </div>
            )}

            {payment === "transfer" && (
              <div className="mt-5 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-5 text-sm dark:border-zinc-700 dark:bg-zinc-800/60">
                <p className="font-semibold text-zinc-900 dark:text-white">
                  Transfer ke rekening berikut:
                </p>
                <div className="mt-3 flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm dark:bg-zinc-900">
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      BCA a.n. PT TechMind Digital
                    </p>
                    <p className="font-mono text-base font-bold tracking-wide text-zinc-900 dark:text-white">
                      1234 5678 90
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard?.writeText("1234567890");
                      setCopied(true);
                    }}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-600 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
                  >
                    {copied ? (
                      <>
                        <CheckCircle2 className="size-3.5 text-emerald-500" />{" "}
                        Tersalin
                      </>
                    ) : (
                      <>
                        <Copy className="size-3.5" /> Salin
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {payment === "ewallet" && (
              <div className="mt-5 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-5 text-sm dark:border-zinc-700 dark:bg-zinc-800/60">
                <p className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-white">
                  <Smartphone className="size-4 text-brand-600 dark:text-brand-400" />{" "}
                  Nomor pembayaran e-wallet
                </p>
                <p className="mt-3 font-mono text-base font-bold tracking-wide text-zinc-900 dark:text-white">
                  {SITE.whatsappNumberLocal}
                </p>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                  a.n. TechMind Digital Service (GoPay / OVO / Dana / ShopeePay)
                </p>
              </div>
            )}
          </section>

          <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-white">
              <User className="size-5 text-brand-600 dark:text-brand-400" />{" "}
              Data Penerima
            </h2>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              File dan link akses akan dikirim ke WhatsApp & email ini.
            </p>
            <form
              id="checkout-form"
              onSubmit={handleSubmit}
              className="mt-5 grid gap-4 sm:grid-cols-2"
            >
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </span>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Nama Anda"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Nomor WhatsApp <span className="text-rose-500">*</span>
                </span>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  inputMode="tel"
                  placeholder="08xxxxxxxxxx"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Email <span className="text-rose-500">*</span>
                </span>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  placeholder="nama@email.com"
                  className={inputClass}
                />
              </label>
            </form>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-7 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">
              Ringkasan Pembayaran
            </h2>
            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-zinc-500 dark:text-zinc-400">Subtotal</dt>
                <dd className="font-medium text-zinc-900 dark:text-white">
                  {formatIDR(originalTotal)}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-zinc-500 dark:text-zinc-400">Diskon</dt>
                <dd className="font-medium text-emerald-600 dark:text-emerald-400">
                  −{formatIDR(savings)}
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-zinc-500 dark:text-zinc-400">Jumlah item</dt>
                <dd className="font-medium text-zinc-900 dark:text-white">
                  {items.length}
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-zinc-100 pt-3 text-base dark:border-zinc-800">
                <dt className="font-semibold text-zinc-900 dark:text-white">
                  Total
                </dt>
                <dd className="text-xl font-extrabold text-zinc-900 dark:text-white">
                  {formatIDR(total)}
                </dd>
              </div>
            </dl>

            <button
              type="submit"
              form="checkout-form"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <PackageCheck className="size-4" /> Selesaikan via WhatsApp
            </button>
            <p className="mt-3 text-center text-[11px] text-zinc-400 dark:text-zinc-500">
              Integrasi payment gateway (Midtrans / Xendit / QRIS) tersedia
              untuk versi produksi.
            </p>

            <ul className="mt-6 space-y-2.5 border-t border-zinc-100 pt-5 dark:border-zinc-800">
              {[
                "Pengiriman file otomatis",
                "Garansi template berfungsi",
                "Dukungan via WhatsApp",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400"
                >
                  <BadgeCheck className="size-4 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {done && (
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
              <p>
                Pesanan {orderId} dikirim ke WhatsApp. Selesaikan pembayaran,
                lalu tim kami akan mengirim file Anda.
              </p>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

function hashString(value: string): string {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }
  return hash.toString(36).toUpperCase().padStart(5, "0").slice(-5);
}

const inputClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand-500";