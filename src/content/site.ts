export const SITE_URL = "https://mekarjadi.vercel.app";

export const site = {
  name: "Karang Taruna Mekarjadi",
  shortName: "Mekarjadi",
  location: "Dusun Domas",
  description:
    "Ruang informasi Karang Taruna Mekarjadi di Dusun Domas untuk mengenal organisasi, melihat arsip kegiatan, dan menanyakan keanggotaan.",
  instagram: "https://www.instagram.com/mekarjadi.offc/",
  linktree: "https://linktr.ee/kartarmj",
} as const;

export const navigation = [
  { label: "Beranda", href: "/" },
  { label: "Organisasi", href: "/organisasi" },
  { label: "Program & Kegiatan", href: "/program-kegiatan" },
  { label: "Keanggotaan", href: "/keanggotaan" },
  { label: "Kontak", href: "/kontak" },
] as const;

export type Activity = {
  slug: string;
  title: string;
  date: string;
  year: string;
  summary: string;
  cover: string;
  images: readonly string[];
};

export const activities: readonly Activity[] = [
  {
    slug: "hut-ri-2024",
    title: "Peringatan HUT RI ke-79",
    date: "17 Agustus 2024",
    year: "2024",
    summary:
      "Arsip foto kegiatan peringatan Hari Ulang Tahun ke-79 Republik Indonesia di lingkungan Dusun Domas.",
    cover: "/images/172024/1.jpg",
    images: [
      "/images/172024/1.jpg",
      "/images/172024/2.jpg",
      "/images/172024/3.jpg",
      "/images/172024/4.jpg",
      "/images/172024/5.jpg",
      "/images/172024/6.jpg",
      "/images/172024/7.jpg",
      "/images/172024/8.jpg",
      "/images/172024/9.jpg",
      "/images/172024/10.jpg",
      "/images/172024/11.jpg",
    ],
  },
  {
    slug: "hut-ri-2023",
    title: "Peringatan HUT RI ke-78",
    date: "17 Agustus 2023",
    year: "2023",
    summary:
      "Arsip foto kegiatan peringatan Hari Ulang Tahun ke-78 Republik Indonesia di lingkungan Dusun Domas.",
    cover: "/images/172023/1.jpg",
    images: [
      "/images/172023/1.jpg",
      "/images/172023/2.jpg",
      "/images/172023/3.jpg",
      "/images/172023/4.jpg",
      "/images/172023/5.jpg",
    ],
  },
] as const;

export const galleryImages = [
  {
    src: "/images/172024/1.jpg",
    alt: "Dokumentasi kegiatan HUT RI ke-79 tahun 2024",
  },
  {
    src: "/images/172024/4.jpg",
    alt: "Dokumentasi kegiatan warga pada Agustus 2024",
  },
  {
    src: "/images/172023/1.jpg",
    alt: "Dokumentasi kegiatan HUT RI ke-78 tahun 2023",
  },
  {
    src: "/images/172024/8.jpg",
    alt: "Dokumentasi kebersamaan warga pada kegiatan tahun 2024",
  },
  {
    src: "/images/172023/4.jpg",
    alt: "Dokumentasi kebersamaan warga pada kegiatan tahun 2023",
  },
  {
    src: "/images/172024/11.jpg",
    alt: "Dokumentasi penutup kegiatan warga tahun 2024",
  },
] as const;
