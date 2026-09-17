import type { Metadata } from "next";
import { Suspense } from "react";
import { CheckoutClient } from "@/components/checkout/checkout-client";

export const metadata: Metadata = {
  title: "Checkout Pesanan",
  description:
    "Selesaikan pembelian template spreadsheet TechMind melalui QRIS, transfer bank, atau e-wallet.",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-4 py-24 text-center text-sm text-zinc-500">
          Memuat keranjang...
        </div>
      }
    >
      <CheckoutClient />
    </Suspense>
  );
}
