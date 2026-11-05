import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { getGallery } from "~/lib/api/client";

export default async function Hero() {
  const [heroImage] = await getGallery(1);

  return (
    <section className="site-container grid min-h-[calc(100svh-4rem)] items-center gap-10 py-12 md:grid-cols-[1.05fr_0.95fr] md:py-16 lg:gap-16">
      <div className="relative z-10 max-w-3xl">
        <p className="eyebrow">Karang Taruna, Dusun Domas</p>
        <h1 className="mt-4 font-display text-[clamp(3rem,8vw,7.5rem)] font-extrabold leading-[0.88] tracking-[-0.065em]">
          PEMUDA
          <span className="block text-primary">DOMAS,</span>
          <span className="block text-accent">BERGERAK.</span>
        </h1>
        <div className="marker-line mt-7" aria-hidden="true" />
        <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
          <strong>Karang Taruna Mekarjadi</strong>, lihat kegiatan yang
          terdokumentasi, dan kenali anggota kami.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/program-kegiatan">Arsip kegiatan</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/keanggotaan">Anggota kami</Link>
          </Button>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-xl pb-8 pr-3 sm:pr-8 md:rotate-1">
        <div className="photo-frame relative aspect-[4/5]">
          <Image
            src={heroImage?.url ?? "/images/172024/1.jpg"}
            alt={
              heroImage?.alt ??
              "Dokumentasi kegiatan Karang Taruna Mekarjadi tahun 2024"
            }
            fill
            priority
            sizes="(max-width: 767px) 92vw, 45vw"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-2 left-4 max-w-[15rem] -rotate-2 border-2 border-foreground bg-primary px-4 py-3 font-display text-sm font-bold text-primary-foreground sm:left-8 sm:text-base">
          Dokumentasi kegiatan warga, 2024
        </div>
      </div>
    </section>
  );
}
