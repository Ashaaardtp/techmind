import Link from "next/link";
import { ArrowLeft, Compass, MessageCircle } from "lucide-react";
import { WA_MESSAGES, waLink } from "@/config";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-4 py-28 text-center sm:px-6">
        <span className="grid size-16 place-items-center rounded-2xl bg-brand-50 text-brand-600">
          <Compass className="size-8" />
        </span>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-brand-600">
          Error 404
        </p>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mt-4 max-w-md text-zinc-600">
          Sepertinya halaman yang Anda cari sudah dipindahkan atau tidak pernah
          ada. Mari kembali ke jalur yang benar.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
          >
            <ArrowLeft className="size-4" /> Kembali ke Beranda
          </Link>
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 px-6 py-3.5 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-50"
          >
            <MessageCircle className="size-4 text-emerald-600" /> Tanya via
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
