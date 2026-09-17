"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE, WA_MESSAGES, waLink } from "@/config";

export function WhatsAppFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl">
          <div className="flex items-center gap-3 bg-emerald-500 px-4 py-3 text-white">
            <span className="grid size-9 place-items-center rounded-full bg-white/20">
              <MessageCircle className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold">TechMind Care</p>
              <p className="text-xs text-emerald-50">Online • balas cepat</p>
            </div>
          </div>
          <div className="space-y-3 p-4">
            <p className="rounded-2xl rounded-tl-sm bg-zinc-100 px-3 py-2 text-sm text-zinc-700">
              Halo! Ada yang bisa kami bantu? Pilih topik di bawah ya.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={waLink(WA_MESSAGES.spreadsheet)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-emerald-300 hover:bg-emerald-50"
              >
                Tanya Template Spreadsheet
              </a>
              <a
                href={waLink(WA_MESSAGES.landingPage)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-indigo-300 hover:bg-indigo-50"
              >
                Konsultasi Jasa Website
              </a>
              <a
                href={waLink(WA_MESSAGES.customSheet)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-zinc-200 px-3 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-violet-300 hover:bg-violet-50"
              >
                Kustomisasi Google Sheets
              </a>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-500/30 transition-all hover:bg-emerald-400 active:scale-95"
        aria-label={open ? "Tutup chat WhatsApp" : "Buka chat WhatsApp"}
      >
        {open ? (
          <>
            <X className="size-5" /> Tutup
          </>
        ) : (
          <>
            <MessageCircle className="size-5" />
            <span className="hidden sm:inline">Chat Kami</span>
          </>
        )}
      </button>
      <span className="sr-only">{SITE.whatsappDisplay}</span>
    </div>
  );
}
