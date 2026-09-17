export type TemplateCategory =
  | "SDM & Gaji"
  | "Stok & Inventori"
  | "Transaksi & Keuangan"
  | "Rumus & Formula"
  | "Event & Acara";

export type Template = {
  id: string;
  slug: string;
  title: string;
  category: TemplateCategory;
  shortDescription: string;
  description: string;
  price: number;
  originalPrice: number;
  formats: string[];
  features: string[];
  popular?: boolean;
  isBundle?: boolean;
  accent: "emerald" | "sky" | "amber" | "violet" | "rose";
};

export const TEMPLATE_CATEGORIES: {
  name: TemplateCategory;
  description: string;
}[] = [
  {
    name: "SDM & Gaji",
    description: "Slip gaji, absensi, rekap upah, dan administrasi karyawan.",
  },
  {
    name: "Stok & Inventori",
    description: "Kartu stok, mutasi gudang, dan kontrol stok multi-cabang.",
  },
  {
    name: "Transaksi & Keuangan",
    description: "Kasir, arus kas, laba rugi, dan laporan keuangan harian.",
  },
  {
    name: "Rumus & Formula",
    description: "Faktur, PPN, diskon, margin, dan kalkulator bisnis otomatis.",
  },
  {
    name: "Event & Acara",
    description: "Rekap tamu, RAB acara, dan pengeluaran event organizer.",
  },
];

export const TEMPLATES: Template[] = [
  {
    id: "tpl-kasir",
    slug: "kasir-transaksi-harian",
    title: "Kasir & Catatan Transaksi Harian",
    category: "Transaksi & Keuangan",
    shortDescription:
      "Catat penjualan harian otomatis dengan rekap pemasukan dan laporan tutup buku.",
    description:
      "Template kasir plug-and-play untuk toko, kafe, dan resto. Cukup isi transaksi, dashboard otomatis menghitung total pemasukan, produk terlaris, dan rekap harian/bulanan tanpa perlu menguasai rumus rumit.",
    price: 19900,
    originalPrice: 39900,
    formats: ["Excel 2016+", "Google Sheets"],
    features: [
      "Dashboard omzet otomatis (harian & bulanan)",
      "Rekap produk terlaris",
      "Validasi input anti salah ketik",
      "Print struk kasir siap pakai",
    ],
    popular: true,
    accent: "emerald",
  },
  {
    id: "tpl-stok",
    slug: "stok-gudang-inventori",
    title: "Stok Gudang & Inventori Multi-Cabang",
    category: "Stok & Inventori",
    shortDescription:
      "Pantau stok masuk-keluar, notifikasi stok minimum, dan nilai inventori real-time.",
    description:
      "Kelola stok gudang hingga beberapa cabang tanpa pusing. Template ini mencatat mutasi barang, menghitung stok akhir otomatis, dan memberi peringatan berwarna ketika stok menipis.",
    price: 35000,
    originalPrice: 69000,
    formats: ["Excel 2016+", "Google Sheets"],
    features: [
      "Kartu stok masuk / keluar",
      "Notifikasi stok minimum otomatis",
      "Rekap nilai inventori per cabang",
      "Sheet proteksi pada sel rumus",
    ],
    popular: true,
    accent: "sky",
  },
  {
    id: "tpl-gaji",
    slug: "slip-gaji-rekap-upah",
    title: "Slip Gaji & Rekap Upah Karyawan",
    category: "SDM & Gaji",
    shortDescription:
      "Generate slip gaji karyawan otomatis lengkap dengan potongan dan print layout.",
    description:
      "Hitung gaji, lembur, bonus, dan potongan karyawan secara otomatis. Setiap slip gaji siap dicetak atau dikirim dalam format PDF dengan layout profesional.",
    price: 24900,
    originalPrice: 49900,
    formats: ["Excel 2016+", "Google Sheets"],
    features: [
      "Slip gaji otomatis per karyawan",
      "Perhitungan lembur & potongan BPJS",
      "Print layout siap kirim PDF",
      "Panduan input berwarna",
    ],
    accent: "violet",
  },
  {
    id: "tpl-absensi",
    slug: "absensi-rekap-kehadiran",
    title: "Absensi & Rekap Kehadiran Karyawan",
    category: "SDM & Gaji",
    shortDescription:
      "Rekap kehadiran, keterlambatan, dan izin karyawan dalam satu dashboard.",
    description:
      "Tinggalkan absensi kertas. Catat kehadiran harian dan biarkan template merekap jumlah hadir, alpa, izin, serta keterlambatan setiap karyawan selama sebulan penuh.",
    price: 19000,
    originalPrice: 39000,
    formats: ["Excel 2016+", "Google Sheets"],
    features: [
      "Kalender absensi bulanan",
      "Rekap hadir / izin / alpa otomatis",
      "Highlight keterlambatan",
      "Kompatibel dengan template gaji",
    ],
    accent: "amber",
  },
  {
    id: "tpl-keuangan",
    slug: "laporan-keuangan-umkm",
    title: "Laporan Keuangan & Arus Kas UMKM",
    category: "Transaksi & Keuangan",
    shortDescription:
      "Laporan laba rugi, arus kas, dan neraca sederhana untuk keputusan bisnis.",
    description:
      "Pahami kesehatan bisnis Anda tanpa akuntan. Template ini menyusun laporan laba rugi, arus kas, dan neraca ringkas dari pencatatan transaksi harian yang Anda input.",
    price: 49900,
    originalPrice: 99000,
    formats: ["Excel 2016+", "Google Sheets"],
    features: [
      "Laba rugi & arus kas otomatis",
      "Neraca ringkas UMKM",
      "Grafik tren pemasukan",
      "Kategori akun dapat dikustom",
    ],
    popular: true,
    accent: "emerald",
  },
  {
    id: "tpl-faktur",
    slug: "faktur-ppn-otomatis",
    title: "Faktur & PPN Otomatis",
    category: "Rumus & Formula",
    shortDescription:
      "Buat invoice dan hitung PPN otomatis dengan nomor faktur berurutan.",
    description:
      "Template faktur profesional yang menghitung subtotal, PPN, dan total otomatis. Nomor invoice berurutan dan siap dicetak untuk kebutuhan administrasi bisnis Anda.",
    price: 17000,
    originalPrice: 34000,
    formats: ["Excel 2016+", "Google Sheets"],
    features: [
      "Nomor faktur otomatis berurutan",
      "Perhitungan PPN & diskon",
      "Print layout invoice rapi",
      "Termin pembayaran fleksibel",
    ],
    accent: "rose",
  },
  {
    id: "tpl-margin",
    slug: "kalkulator-diskon-margin",
    title: "Kalkulator Diskon & Margin Keuntungan",
    category: "Rumus & Formula",
    shortDescription:
      "Tentukan harga jual, diskon, dan margin tanpa salah hitung lagi.",
    description:
      "Alat bantu penetapan harga untuk pemilik brand dan toko. Masukkan harga modal, target margin, dan besar diskon — template menghitung harga jual ideal secara instan.",
    price: 13000,
    originalPrice: 27000,
    formats: ["Excel 2016+", "Google Sheets"],
    features: [
      "Hitung margin & markup otomatis",
      "Simulasi diskon berjenjang",
      "Break-even point sederhana",
      "Ringan & cepat dibuka",
    ],
    accent: "sky",
  },
  {
    id: "tpl-event",
    slug: "rekap-event-pengeluaran-acara",
    title: "RAB & Pengeluaran Acara (Event Organizer)",
    category: "Event & Acara",
    shortDescription:
      "Rancang RAB acara, rekap vendor, dan kontrol pengeluaran event.",
    description:
      "Dirancang untuk event organizer dan panitia acara. Susun anggaran, bandingkan realisasi pengeluaran, dan pastikan setiap acara tetap dalam jalur profit.",
    price: 19000,
    originalPrice: 38000,
    formats: ["Excel 2016+", "Google Sheets"],
    features: [
      "RAB vs realisasi otomatis",
      "Daftar vendor & status bayar",
      "Rekap tamu undangan",
      "Sisa anggaran real-time",
    ],
    accent: "amber",
  },
  {
    id: "tpl-bundle",
    slug: "bundle-all-in-one",
    title: "BUNDLE All-in-One + Video Tutorial",
    category: "Transaksi & Keuangan",
    shortDescription:
      "Semua template (8+ produk) + video tutorial pengoperasian. Paling hemat!",
    description:
      "Paket lengkap seluruh template TechMind untuk mengotomatisasi operasional bisnis dari kasir, stok, gaji, keuangan, hingga event. Termasuk video tutorial langkah demi langkah dan akses update gratis.",
    price: 65000,
    originalPrice: 210000,
    formats: ["Excel 2016+", "Google Sheets", "Video Tutorial"],
    features: [
      "8+ template siap pakai",
      "Video tutorial pengoperasian",
      "Update template gratis 1 tahun",
      "Grup tanya-jawab WhatsApp",
    ],
    popular: true,
    isBundle: true,
    accent: "emerald",
  },
];

export function getTemplateBySlug(slug: string): Template | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}

export function getTemplateById(id: string): Template | undefined {
  return TEMPLATES.find((t) => t.id === id);
}
