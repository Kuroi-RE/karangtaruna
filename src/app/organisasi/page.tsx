import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "~/components/JsonLd";
import Reveal from "~/components/Reveal";
import { getSite } from "~/lib/api/client";
import { breadcrumbSchema } from "~/lib/schema";

export const metadata: Metadata = {
  title: "Organisasi",
  description:
    "Mengenal Karang Taruna Mekarjadi dan status informasi organisasi di Dusun Domas.",
  alternates: { canonical: "/organisasi" },
  openGraph: {
    title: "Organisasi Karang Taruna Mekarjadi",
    description: "Informasi organisasi Karang Taruna Mekarjadi di Dusun Domas.",
    url: "/organisasi",
  },
};

export default async function OrganizationPage() {
  const site = await getSite();
  const hasVisionMission = Boolean(site?.vision ?? site?.mission);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Organisasi", path: "/organisasi" },
        ])}
      />
      <header className="border-b-2 border-foreground bg-primary text-primary-foreground">
        <div className="site-container grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:py-28">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em]">
              Organisasi
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Ruang gerak pemuda Dusun Domas.
            </h1>
          </div>
          <p className="max-w-xl text-lg leading-8 text-primary-foreground/90 lg:justify-self-end">
            {site?.description ??
              "Karang Taruna Mekarjadi merupakan organisasi pemuda di Dusun Domas. Halaman ini menampilkan informasi mengenai organisasi, arsip kegiatan, dan anggota."}
          </p>
        </div>
      </header>

      <section className="section-space">
        <div className="site-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-xl lg:-rotate-1">
            <div className="photo-frame relative aspect-[4/5]">
              <Image
                src={site?.profileImageUrl ?? "/images/172024/6.jpg"}
                alt="Dokumentasi kegiatan warga Dusun Domas"
                fill
                sizes="(max-width: 1023px) 92vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="space-y-12">
            <Reveal>
              <p className="eyebrow">Profil singkat</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">
                {site?.name ?? "Karang Taruna Mekarjadi"}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {site?.profile ??
                  "Menjadi jembatan bagi pemuda dusun Domas untuk memulai perjalanan organisasi, mengetahui bagaimana menjadi anggota dari sebuah organisasi yang berorientasi pada kebutuhan dan keinginan warga."}
              </p>
            </Reveal>
            <Reveal
              className="border-l-4 border-accent bg-card p-6 sm:p-8"
              delay={0.1}
            >
              <p className="eyebrow">
                {hasVisionMission ? "Visi & misi" : "Status informasi"}
              </p>
              {hasVisionMission ? (
                <>
                  {site?.vision && (
                    <>
                      <h2 className="mt-3 font-display text-2xl font-extrabold">
                        Visi
                      </h2>
                      <p className="mt-3 leading-7 text-muted-foreground">
                        {site.vision}
                      </p>
                    </>
                  )}
                  {site?.mission && (
                    <>
                      <h2 className="mt-6 font-display text-2xl font-extrabold">
                        Misi
                      </h2>
                      <p className="mt-3 leading-7 text-muted-foreground">
                        {site.mission}
                      </p>
                    </>
                  )}
                </>
              ) : (
                <>
                  <h2 className="mt-3 font-display text-2xl font-extrabold">
                    Visi, misi, dan kepengurusan masih belum tersedia.
                  </h2>
                  <p className="mt-4 leading-7 text-muted-foreground">
                    Nama pengurus, masa jabatan, serta visi dan misi
                    belum dapat ditampilkan.
                  </p>
                </>
              )}
            </Reveal>
            <Link className="text-link" href="/keanggotaan">
              Lihat daftar anggota
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
