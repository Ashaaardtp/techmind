export type WebService = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  sla: string;
  startingPrice: number;
  features: string[];
  deliverables: string[];
  accent: "indigo" | "rose" | "sky";
  icon: "monitor" | "mail" | "shopping-bag";
  demoUrl: string;
  waMessage: string;
};

export const WEB_SERVICES: WebService[] = [
  {
    id: "svc-landing",
    slug: "landing-page",
    name: "Landing Page Bisnis",
    tagline: "Satu halaman, fokus konversi, siap jualan.",
    description:
      "Halaman promosi berkecepatan tinggi dengan copywriting menjual dan tombol langsung ke WhatsApp. Cocok untuk peluncuran produk, campaign, dan personal branding.",
    sla: "2–4 hari kerja",
    startingPrice: 850000,
    features: [
      "Desain responsif mobile-first",
      "Copywriting penjualan",
      "Tombol WhatsApp & form leads",
      "SEO dasar on-page",
      "Hosting deployment gratis",
    ],
    deliverables: ["HTML5 + Tailwind CSS", "1 halaman", "3 section utama"],
    accent: "indigo",
    icon: "monitor",
    demoUrl: "#demo-landing",
    waMessage:
      "Halo TechMind, saya ingin membuat Landing Page Bisnis. Mohon info harga dan prosesnya.",
  },
  {
    id: "svc-invitation",
    slug: "undangan-digital",
    name: "Undangan Digital Interaktif",
    tagline: "Undangan elegan, cepat dibuka dari WhatsApp.",
    description:
      "Undangan digital untuk wedding dan event dengan musik latar, galeri foto, RSVP otomatis, dan petunjuk peta Google Maps. Elegan, hemat, dan real-time.",
    sla: "1–2 hari kerja",
    startingPrice: 199000,
    features: [
      "Desain elegan & animasi halus",
      "Musik latar & galeri foto",
      "RSVP otomatis ke Google Sheets",
      "Integrasi Google Maps",
      "Countdown & love story",
    ],
    deliverables: ["Link undangan", "Subdomain gratis", "Unlimited tamu"],
    accent: "rose",
    icon: "mail",
    demoUrl: "#demo-invitation",
    waMessage:
      "Halo TechMind, saya ingin membuat Undangan Digital. Mohon info paket dan contohnya.",
  },
  {
    id: "svc-custom",
    slug: "website-kustom",
    name: "Website Kustom",
    tagline: "Company profile, katalog produk, hingga portal dinamis.",
    description:
      "Website sesuai kebutuhan bisnis: company profile, katalog produk UMKM, portal berita, hingga sistem kustom. Dibangun dengan stack modern dan mudah dikelola.",
    sla: "7–14 hari kerja",
    startingPrice: 2500000,
    features: [
      "Halaman tak terbatas",
      "Katalog produk & keranjang",
      "CMS konten mandiri",
      "Analytics & SEO",
      "Pelatihan pengelolaan website",
    ],
    deliverables: ["Next.js / WordPress", "Domain .com", "Tutorial video"],
    accent: "sky",
    icon: "shopping-bag",
    demoUrl: "#demo-custom",
    waMessage:
      "Halo TechMind, saya ingin membuat Website Kustom. Mohon info estimasi biaya dan durasi.",
  },
];

export type PricingTier = {
  name: string;
  price: number;
  priceNote: string;
  tagline: string;
  features: { label: string; included: boolean }[];
  highlighted?: boolean;
};

export const LANDING_PRICING: PricingTier[] = [
  {
    name: "Essential",
    price: 850000,
    priceNote: "sekali bayar",
    tagline: "Mulai online dengan cepat.",
    features: [
      { label: "1 halaman responsif", included: true },
      { label: "3 section utama", included: true },
      { label: "Tombol WhatsApp", included: true },
      { label: "SEO dasar", included: true },
      { label: "Copywriting premium", included: false },
      { label: "Animasi interaktif", included: false },
    ],
  },
  {
    name: "Professional",
    price: 1500000,
    priceNote: "sekali bayar",
    tagline: "Paling dipilih untuk campaign produk.",
    highlighted: true,
    features: [
      { label: "1 halaman responsif", included: true },
      { label: "6 section utama", included: true },
      { label: "Tombol WhatsApp & form leads", included: true },
      { label: "SEO dasar", included: true },
      { label: "Copywriting premium", included: true },
      { label: "Animasi interaktif", included: true },
    ],
  },
  {
    name: "Premium",
    price: 2500000,
    priceNote: "sekali bayar",
    tagline: "Untuk brand yang serius scale-up.",
    features: [
      { label: "1 halaman responsif", included: true },
      { label: "Section tak terbatas", included: true },
      { label: "Tombol WhatsApp & form leads", included: true },
      { label: "SEO lanjutan", included: true },
      { label: "Copywriting premium", included: true },
      { label: "Animasi interaktif + revisi minor 30 hari", included: true },
    ],
  },
];

export const INVITATION_PRICING: PricingTier[] = [
  {
    name: "Silver",
    price: 199000,
    priceNote: "per undangan",
    tagline: "Elegan dan hemat.",
    features: [
      { label: "1 tema pilihan", included: true },
      { label: "Musik latar", included: true },
      { label: "RSVP via WhatsApp", included: true },
      { label: "Google Maps", included: true },
      { label: "Galeri foto (10 foto)", included: false },
      { label: "Custom domain", included: false },
    ],
  },
  {
    name: "Gold",
    price: 349000,
    priceNote: "per undangan",
    tagline: "Favorit pasangan.",
    highlighted: true,
    features: [
      { label: "3 tema pilihan", included: true },
      { label: "Musik latar", included: true },
      { label: "RSVP otomatis ke Google Sheets", included: true },
      { label: "Google Maps", included: true },
      { label: "Galeri foto (30 foto)", included: true },
      { label: "Custom domain", included: false },
    ],
  },
  {
    name: "Platinum",
    price: 549000,
    priceNote: "per undangan",
    tagline: "Undangan kustom sepenuhnya.",
    features: [
      { label: "Tema custom sepenuhnya", included: true },
      { label: "Musik latar", included: true },
      { label: "RSVP otomatis + buku tamu digital", included: true },
      { label: "Google Maps & live streaming", included: true },
      { label: "Galeri foto unlimited", included: true },
      { label: "Custom domain", included: true },
    ],
  },
];
