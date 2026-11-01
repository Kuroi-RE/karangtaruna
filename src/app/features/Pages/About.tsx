import Image from "next/image";
import Link from "next/link";
import Reveal from "~/components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="section-space scroll-mt-20 border-y-2 border-foreground bg-primary text-primary-foreground"
    >
      <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal className="self-start">
          <p className="font-display text-sm font-bold uppercase tracking-[0.16em]">
            Tentang organisasi
          </p>
          <h2 className="mt-4 max-w-lg font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Satu ruang untuk pemuda Dusun Domas.
          </h2>
        </Reveal>

        <Reveal className="grid gap-8 sm:grid-cols-[0.8fr_1.2fr]" delay={0.1}>
          <div className="relative aspect-[3/4] overflow-hidden border-2 border-primary-foreground">
            <Image
              src="/images/172023/3.jpg"
              alt="Dokumentasi kegiatan warga Dusun Domas tahun 2023"
              fill
              sizes="(max-width: 639px) 92vw, 28vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="text-lg leading-8 text-primary-foreground/90">
                Karang Taruna Mekarjadi adalah organisasi kepemudaan di Dusun
                Domas. Situs ini menyatukan informasi organisasi dan arsip
                kegiatan yang tersedia.
              </p>
              <p className="mt-5 leading-7 text-primary-foreground/90">
                Informasi visi, misi, dan kepengurusan sedang diperbarui agar
                data yang diterbitkan dapat dipertanggungjawabkan.
              </p>
            </div>
            <Link
              className="inline-flex min-h-11 w-fit items-center border-b-2 border-primary-foreground font-display font-bold"
              href="/organisasi"
            >
              Kenali organisasi
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
