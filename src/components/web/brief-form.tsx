"use client";

import { useState } from "react";
import { ClipboardList, Send } from "lucide-react";
import { WEB_SERVICES } from "@/data/services";
import { waLink } from "@/config";

const BUDGETS = [
  "< Rp 500.000",
  "Rp 500.000 – Rp 1.000.000",
  "Rp 1.000.000 – Rp 3.000.000",
  "> Rp 3.000.000",
];

export function BriefForm() {
  const [name, setName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [service, setService] = useState(WEB_SERVICES[0].name);
  const [reference, setReference] = useState("");
  const [budget, setBudget] = useState(BUDGETS[1]);
  const [details, setDetails] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = [
      "Halo TechMind, saya ingin mengajukan brief proyek website.",
      "",
      `Nama: ${name || "-"}`,
      `Jenis Usaha: ${businessType || "-"}`,
      `Layanan: ${service}`,
      `Estimasi Budget: ${budget}`,
      `Referensi Desain: ${reference || "-"}`,
      "",
      `Detail Kebutuhan: ${details || "-"}`,
      "",
      "Mohon dihubungi untuk langkah selanjutnya. Terima kasih!",
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-11 place-items-center rounded-xl bg-brand-100 text-brand-700">
          <ClipboardList className="size-5" />
        </span>
        <div>
          <h3 className="text-lg font-bold text-zinc-900">
            Ajukan Brief Proyek Anda
          </h3>
          <p className="text-sm text-zinc-500">
            Isi detail berikut agar kami bisa memberi rekomendasi tepat.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Nama Lengkap" required>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Nama Anda"
            className={inputClass}
          />
        </Field>
        <Field label="Jenis Usaha" required>
          <input
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            required
            placeholder="Contoh: Kedai Kopi / EO / Butik"
            className={inputClass}
          />
        </Field>
        <Field label="Layanan yang Dibutuhkan" required>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            {WEB_SERVICES.map((svc) => (
              <option key={svc.id} value={svc.name}>
                {svc.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Estimasi Budget">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className={inputClass}
          >
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Referensi Desain (link/akun)"
          className="sm:col-span-2"
        >
          <input
            value={reference}
            onChange={(e) => setReference(e.target.value)}
            placeholder="Contoh: https://instagram.com/brand.favorit atau nama website"
            className={inputClass}
          />
        </Field>
      </div>

      <div className="mt-4">
        <Field label="Detail Kebutuhan" required>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
            rows={4}
            placeholder="Ceritakan tujuan website, fitur yang diinginkan, dan target waktu Anda."
            className={`${inputClass} resize-none`}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 sm:w-auto"
      >
        <Send className="size-4" />
        Kirim Brief via WhatsApp
      </button>
      <p className="mt-3 text-xs text-zinc-400">
        Brief akan tersusun otomatis dalam chat WhatsApp agar proses konsultasi
        lebih cepat.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-zinc-200 bg-white px-3.5 py-2.5 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-400 focus:border-brand-400 focus:ring-2 focus:ring-brand-100";

function Field({
  label,
  required,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-1.5 text-sm ${className}`}>
      <span className="font-medium text-zinc-700">
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </span>
      {children}
    </label>
  );
}
