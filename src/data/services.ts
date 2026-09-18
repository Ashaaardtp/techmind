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
  accent: "indigo" | "emerald" | "rose" | "sky";
  icon: "monitor" | "building" | "mail" | "shopping-bag";
  demoUrl: string;
  waMessage: string;
};

export const WEB_SERVICES: WebService[] = [
  {
    id: "svc-landing",
    slug: "landing-page",
    name: "Landing Page Bisnis",
    tagline: "Satu halaman template siap pakai, fokus konversi.",
    description:
      "Landing page berbasis template dengan section yang sudah paten dan teruji — cepat jadi, harga terjangkau. Perlu section tambahan atau penyesuaian khusus? Tinggal request dengan biaya tambahan kecil.",
    sla: "1–3 hari kerja",
    startingPrice: 250000,
    features: [
      "Desain responsif mobile-first",
      "Section paten: Hero, Layanan, CTA WhatsApp",
      "Tombol WhatsApp & form leads",
      "SEO dasar on-page",
      "Deployment + subdomain gratis",
      "Request section tambahan & custom (add-on)",
    ],
    deliverables: ["Template siap pakai", "1 halaman", "Section paten"],
    accent: "indigo",
    icon: "monitor",
    demoUrl: "#demo-landing",
    waMessage:
      "Halo TechMind, saya ingin membuat Landing Page Bisnis. Mohon info harga dan prosesnya.",
  },
  {
    id: "svc-company-profile",
    slug: "company-profile",
    name: "Website Company Profile",
    tagline: "Multi-halaman template untuk citra perusahaan.",
    description:
      "Company profile multi-halaman berbasis template dengan section yang sudah paten: Beranda, Tentang, Layanan, Portofolio, Kontak. Harga ramah, tanpa berjuta-juta. Penyesuaian spesifik tetap bisa via add-on.",
    sla: "3–7 hari kerja",
    startingPrice: 550000,
    features: [
      "Template multi-halaman (5–12 halaman)",
      "Section paten: Beranda, Tentang, Layanan, Portofolio, Kontak",
      "Tombol WhatsApp & form kontak/leads",
      "SEO dasar on-page",
      "Deployment + subdomain gratis",
      "Halaman & request desain tambahan (add-on)",
    ],
    deliverables: ["Template siap pakai", "5–12 halaman", "Panduan update konten"],
    accent: "emerald",
    icon: "building",
    demoUrl: "#demo-company-profile",
    waMessage:
      "Halo TechMind, saya ingin membuat Website Company Profile. Mohon info paket dan harganya.",
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
    tagline: "Dibangun dari nol, bukan template.",
    description:
      "Website kustom yang dibangun dari nol — bukan template. Untuk kebutuhan unik seperti katalog dinamis, keranjang/e-commerce, portal berita, hingga sistem khusus. Estimasi menyesuaikan scope.",
    sla: "7–21 hari kerja",
    startingPrice: 5000000,
    features: [
      "Dibangun dari nol sesuai kebutuhan",
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
      "Halo TechMind, saya ingin membuat Website Kustom dari nol. Mohon info estimasi biaya dan durasi.",
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
    name: "Starter",
    price: 250000,
    priceNote: "sekali bayar",
    tagline: "Template siap pakai, langsung jalan.",
    features: [
      { label: "1 halaman responsif", included: true },
      { label: "Section paten: Hero, Layanan, CTA WhatsApp", included: true },
      { label: "Tombol WhatsApp", included: true },
      { label: "SEO dasar", included: true },
      { label: "Deployment + subdomain gratis", included: true },
      { label: "Copywriting premium", included: false },
      { label: "Section tambahan & animasi", included: false },
    ],
  },
  {
    name: "Professional",
    price: 300000,
    priceNote: "sekali bayar",
    tagline: "Paling seimbang untuk campaign produk.",
    highlighted: true,
    features: [
      { label: "1 halaman responsif", included: true },
      { label: "Section paten + pilih warna & foto brand", included: true },
      { label: "Tombol WhatsApp & form leads", included: true },
      { label: "SEO dasar + OG tags", included: true },
      { label: "Deployment + subdomain gratis", included: true },
      { label: "Copywriting premium", included: false },
      { label: "Section tambahan & animasi", included: false },
    ],
  },
  {
    name: "Premium",
    price: 400000,
    priceNote: "sekali bayar",
    tagline: "Tampilan paling maksimal.",
    features: [
      { label: "1 halaman responsif", included: true },
      { label: "Section paten + custom warna, foto, teks", included: true },
      { label: "Tombol WhatsApp & form leads", included: true },
      { label: "SEO lanjutan + OG tags", included: true },
      { label: "Section tambahan (hingga 8) & animasi", included: true },
      { label: "Copywriting premium", included: true },
      { label: "Revisi minor 30 hari", included: true },
    ],
  },
];

export const COMPANY_PROFILE_PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: 550000,
    priceNote: "sekali bayar",
    tagline: "Company profile ringkas dan rapi.",
    features: [
      { label: "Template 5 halaman (Beranda, Tentang, Layanan, Portofolio, Kontak)", included: true },
      { label: "Section paten siap pakai", included: true },
      { label: "Tombol WhatsApp & form kontak", included: true },
      { label: "SEO dasar", included: true },
      { label: "Deployment + subdomain gratis", included: true },
      { label: "Copywriting premium", included: false },
      { label: "Halaman tambahan & desain custom", included: false },
    ],
  },
  {
    name: "Business",
    price: 750000,
    priceNote: "sekali bayar",
    tagline: "Paling populer untuk UMKM berkembang.",
    highlighted: true,
    features: [
      { label: "Template 8 halaman + Blog / Galeri", included: true },
      { label: "Pilih warna, foto, dan penyesuaian teks", included: true },
      { label: "Tombol WhatsApp & form leads", included: true },
      { label: "SEO dasar + analytics", included: true },
      { label: "Deployment + subdomain gratis", included: true },
      { label: "Copywriting premium", included: false },
      { label: "Halaman tambahan & desain custom", included: false },
    ],
  },
  {
    name: "Premium",
    price: 950000,
    priceNote: "sekali bayar",
    tagline: "Company profile lengkap & profesional.",
    features: [
      { label: "Template 12 halaman, termasuk Blog & Galeri", included: true },
      { label: "Penyesuaian penuh warna, foto, teks", included: true },
      { label: "Form leads + analytics + pelatihan konten", included: true },
      { label: "SEO lanjutan + OG tags", included: true },
      { label: "Halaman tambahan & animasi (add-on)", included: true },
      { label: "Copywriting premium", included: true },
      { label: "Revisi minor 30 hari + custom domain", included: true },
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