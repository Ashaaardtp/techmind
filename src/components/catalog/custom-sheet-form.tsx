"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { waLink } from "@/config";

export function CustomSheetForm() {
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [needs, setNeeds] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      "Halo TechMind, saya ingin konsultasi kustomisasi template Google Sheets.",
      "",
      `Nama Usaha: ${businessName || "-"}`,
      `Jenis Usaha: ${businessType || "-"}`,
      `Kebutuhan/SOP: ${needs || "-"}`,
      "",
      "Mohon info estimasi pengerjaan dan biayanya. Terima kasih!",
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
          <MessageCircle className="size-5" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-zinc-900">
            Konsultasi Kustomisasi Google Sheets
          </h3>
          <p className="text-sm text-zinc-500">
            Ceritakan SOP bisnis Anda, kami buatkan template khusus.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-zinc-700">Nama Usaha</span>
          <input
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
            placeholder="Contoh: Kopi Senja"
            className="rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-zinc-700">Jenis Usaha</span>
          <input
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="Contoh: Kafe / Retail"
            className="rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
          />
        </label>
      </div>

      <label className="mt-4 flex flex-col gap-1.5 text-sm">
        <span className="font-medium text-zinc-700">
          Kebutuhan / Alur Kerja
        </span>
        <textarea
          value={needs}
          onChange={(e) => setNeeds(e.target.value)}
          rows={4}
          required
          placeholder="Contoh: Saya butuh rekap penjualan 3 cabang yang otomatis digabung dan laporan harian yang dikirim ke WhatsApp."
          className="resize-none rounded-xl border border-zinc-200 px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
        />
      </label>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 sm:w-auto"
      >
        <Send className="size-4" />
        Kirim & Konsultasi via WhatsApp
      </button>
      <p className="mt-3 text-xs text-zinc-400">
        Dengan menekan tombol, Anda akan diarahkan ke WhatsApp dengan ringkasan
        kebutuhan Anda.
      </p>
    </form>
  );
}
