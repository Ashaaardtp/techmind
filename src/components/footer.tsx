import Image from "next/image";
import Link from "next/link";
import { AtSign, Mail, MapPin, MessageCircle, Music2 } from "lucide-react";
import { SITE, WA_MESSAGES, waLink } from "@/config";

const FOOTER_LINKS = [
  {
    title: "Template Spreadsheet",
    links: [
      { label: "Katalog Template", href: "/template" },
      { label: "SDM & Gaji", href: "/template?kategori=SDM%20%26%20Gaji" },
      {
        label: "Stok & Inventori",
        href: "/template?kategori=Stok%20%26%20Inventori",
      },
      {
        label: "Transaksi & Keuangan",
        href: "/template?kategori=Transaksi%20%26%20Keuangan",
      },
      {
        label: "Rumus & Formula",
        href: "/template?kategori=Rumus%20%26%20Formula",
      },
    ],
  },
  {
    title: "Jasa Website",
    links: [
      { label: "Landing Page", href: "/jasa-web#landing-page" },
      { label: "Undangan Digital", href: "/jasa-web#undangan-digital" },
      { label: "Website Kustom", href: "/jasa-web#website-kustom" },
      { label: "Paket & Harga", href: "/jasa-web#harga" },
      { label: "Ajukan Brief", href: "/jasa-web#brief" },
    ],
  },
  {
    title: "Perusahaan",
    links: [
      { label: "Cara Kerja", href: "/#cara-kerja" },
      { label: "Testimoni", href: "/#testimoni" },
      { label: "FAQ", href: "/#faq" },
      { label: "Checkout", href: "/checkout" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="flex w-fit items-center" aria-label={SITE.name}>
              <span className="grid place-items-center rounded-xl bg-white p-1 ring-1 ring-zinc-800">
                <Image
                  src="/techmind.jpg"
                  alt={`Logo ${SITE.name}`}
                  width={1280}
                  height={1280}
                  sizes="auto"
                  className="h-10 w-auto"
                />
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
              Menghilangkan friksi operasional manual dan mendemokratisasi akses
              teknologi web modern untuk UMKM, profesional, agensi, dan event
              organizer.
            </p>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-400"
            >
              <MessageCircle className="size-4" />
              Chat WhatsApp
            </a>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-800 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <Music2 className="size-4" />{" "}
              <a
                href={`https://www.tiktok.com/${SITE.tiktok}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {SITE.tiktok}
              </a>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <AtSign className="size-4" />{" "}
              <a
                href={`https://www.instagram.com/${SITE.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {SITE.instagram}
              </a>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="size-4" /> {SITE.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" /> {SITE.city}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
