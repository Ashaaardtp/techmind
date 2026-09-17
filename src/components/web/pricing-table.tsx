"use client";

import { useState } from "react";
import { ArrowRight, Check, Minus, Sparkles } from "lucide-react";
import {
  INVITATION_PRICING,
  LANDING_PRICING,
  type PricingTier,
} from "@/data/services";
import { formatIDR, waLink } from "@/config";

const PACKAGES = [
  { id: "landing", label: "Landing Page", tiers: LANDING_PRICING },
  { id: "invitation", label: "Undangan Digital", tiers: INVITATION_PRICING },
];

export function PricingTable() {
  const [active, setActive] = useState("landing");
  const current = PACKAGES.find((p) => p.id === active) ?? PACKAGES[0];

  return (
    <div>
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-2xl border border-zinc-200 bg-white p-1.5 shadow-sm">
        {PACKAGES.map((pkg) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() => setActive(pkg.id)}
            className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
              active === pkg.id
                ? "bg-brand-600 text-white shadow-md"
                : "text-zinc-600 hover:bg-zinc-100"
            }`}
            aria-pressed={active === pkg.id}
          >
            {pkg.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {current.tiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-zinc-500">
        Semua harga adalah sekali bayar (one-time). Tidak ada biaya langganan
        tersembunyi. Butuh penyesuaian?{" "}
        <a
          href={waLink(
            "Halo TechMind, saya ingin konsultasi paket website yang sesuai budget saya.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-600 hover:text-brand-700"
        >
          Hubungi kami
        </a>
        .
      </p>
    </div>
  );
}

function TierCard({ tier }: { tier: PricingTier }) {
  return (
    <div
      className={`relative flex flex-col rounded-3xl border bg-white p-7 transition-all ${
        tier.highlighted
          ? "border-brand-500 shadow-xl shadow-brand-600/10 lg:-translate-y-2"
          : "border-zinc-200 hover:shadow-lg"
      }`}
    >
      {tier.highlighted && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-brand-600 px-3 py-1 text-[11px] font-bold text-white">
          <Sparkles className="size-3" /> PALING DIPILIH
        </span>
      )}
      <h3 className="text-lg font-bold text-zinc-900">{tier.name}</h3>
      <p className="mt-1 text-sm text-zinc-500">{tier.tagline}</p>
      <div className="mt-5">
        <p className="text-3xl font-extrabold tracking-tight text-zinc-900">
          {formatIDR(tier.price)}
        </p>
        <p className="text-xs text-zinc-500">{tier.priceNote}</p>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature.label} className="flex items-start gap-2.5 text-sm">
            {feature.included ? (
              <Check className="mt-0.5 size-4 shrink-0 text-emerald-500" />
            ) : (
              <Minus className="mt-0.5 size-4 shrink-0 text-zinc-300" />
            )}
            <span
              className={feature.included ? "text-zinc-700" : "text-zinc-400"}
            >
              {feature.label}
            </span>
          </li>
        ))}
      </ul>
      <a
        href={waLink(
          `Halo TechMind, saya tertarik dengan paket ${tier.name} (${formatIDR(
            tier.price,
          )}). Mohon info langkah selanjutnya.`,
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
          tier.highlighted
            ? "bg-brand-600 text-white hover:bg-brand-700"
            : "border border-zinc-300 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50"
        }`}
      >
        Pilih Paket
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
