import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WA_MESSAGES, waLink } from "@/config";

export function CtaBand() {
  return (
    <section className="bg-white pb-20 sm:pb-24 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-violet-600 px-6 py-14 text-center shadow-2xl shadow-brand-600/25 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Siap Bawa Bisnis UMKM Anda Naik Kelas?
            </h2>
            <p className="mt-4 text-base text-brand-50">
              Konsultasikan kebutuhan website, landing page, atau pencatatan
              bisnis Anda bersama tim Techmind.id sekarang!
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400 active:scale-[0.98]"
              >
                <MessageCircle className="size-4" />
                Chat Konsultasi Gratis via WhatsApp
              </a>
              <Link
                href="#layanan"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/20 active:scale-[0.98]"
              >
                Lihat Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
