import { type Metadata } from "next";
import Link from "next/link";
import JsonLd from "~/components/JsonLd";
import { getSite } from "~/lib/api/client";
import { breadcrumbSchema } from "~/lib/schema";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Kanal daring Karang Taruna Mekarjadi yang tercantum untuk informasi organisasi dan keanggotaan.",
  alternates: { canonical: "/kontak" },
  openGraph: {
    title: "Kontak Karang Taruna Mekarjadi",
    description:
      "Hubungi Karang Taruna Mekarjadi melalui kanal daring yang tersedia.",
    url: "/kontak",
  },
};

const FALLBACK_CHANNELS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/mekarjadi.offc/",
    note: "Lihat publikasi dan kirim pesan melalui akun yang tercantum.",
  },
  {
    name: "Linktree",
    href: "https://linktr.ee/kartarmj",
    note: "Buka kumpulan tautan Karang Taruna Mekarjadi.",
  },
];

export default async function ContactPage() {
  const site = await getSite();
  const channels =
    site?.links.map((link) => ({
      name: link.label,
      href: link.url,
      note: `Buka kanal ${link.label} Karang Taruna Mekarjadi.`,
    })) ?? FALLBACK_CHANNELS;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Kontak", path: "/kontak" },
        ])}
      />
      <div className="site-container grid min-h-[calc(100svh-4rem)] gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:py-28">
        <header>
          <p className="eyebrow">Kontak</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Informasi kontak Karang Taruna Mekarjadi
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">
            Berbagai platform komunikasi yang tersedia untuk Karang Taruna Mekarjadi.
          </p>
        </header>

        <div className="space-y-5">
          {channels.map((channel, index) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
              className="group grid min-h-40 grid-cols-[auto_1fr] gap-5 border-2 border-foreground bg-card p-6 transition-transform hover:-translate-y-1 sm:p-8"
            >
              <span className="font-display text-3xl font-extrabold text-accent">
                0{index + 1}
              </span>
              <span>
                <span className="block font-display text-2xl font-extrabold sm:text-3xl">
                  {channel.name}
                </span>
                <span className="mt-3 block leading-7 text-muted-foreground">
                  {channel.note}
                </span>
                <span className="mt-5 inline-block border-b-2 border-primary font-display font-bold text-primary">
                  Buka {channel.name}
                </span>
              </span>
            </a>
          ))}
          {/*<div className="border-l-4 border-primary bg-secondary p-6">
            <h2 className="font-display text-xl font-extrabold">
              Tentang data pribadi
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Jangan kirim nomor identitas, dokumen pribadi, atau informasi
              sensitif melalui pesan pertama. Tanyakan terlebih dahulu data apa
              yang benar-benar diperlukan.
            </p>
          </div>*/}
          <Link href="/keanggotaan" className="text-link">
            Lihat daftar anggota
          </Link>
        </div>
      </div>
    </>
  );
}
