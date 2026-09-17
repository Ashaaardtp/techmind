export const SITE = {
  name: "TechMind Digital Service",
  shortName: "TechMind",
  tagline: "Solusi Digital & Otomatisasi Operasional untuk UMKM",
  description:
    "Template spreadsheet siap pakai, undangan digital, landing page, dan website kustom untuk UMKM, profesional, agensi, dan event organizer.",
  whatsappNumber: "6281234567890",
  whatsappDisplay: "+62 812-3456-7890",
  email: "halo@techmind.id",
  instagram: "@techmind.digital",
  city: "Jakarta, Indonesia",
  foundedYear: 2023,
} as const;

export function waLink(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: `Halo ${SITE.name}, saya ingin bertanya mengenai layanan digital Anda.`,
  spreadsheet: `Halo ${SITE.name}, saya tertarik dengan template spreadsheet-nya. Bisa dibantu rekomendasi?`,
  customSheet: `Halo ${SITE.name}, saya ingin jasa kustomisasi template Google Sheets untuk SOP bisnis saya.`,
  landingPage: `Halo ${SITE.name}, saya ingin membuat Landing Page bisnis. Mohon info harga dan prosesnya.`,
  invitation: `Halo ${SITE.name}, saya ingin membuat Undangan Digital. Mohon info paket dan contohnya.`,
  customWeb: `Halo ${SITE.name}, saya ingin membuat Website Kustom. Mohon info estimasi biaya dan durasi.`,
} as const;

export function formatIDR(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
