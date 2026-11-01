import Image from "next/image";
import Link from "next/link";
import Reveal from "~/components/Reveal";
import { getGallery } from "~/lib/api/client";

export default async function Gallery() {
  const galleryImages = await getGallery(6);

  return (
    <section
      id="gallery"
      className="section-space scroll-mt-20 overflow-hidden bg-secondary"
    >
      <div className="site-container">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">Dokumentasi</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-none sm:text-5xl lg:text-6xl">
              Potongan dari kegiatan warga.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-muted-foreground lg:justify-self-end">
            Foto yang tampil berasal dari arsip kegiatan yang telah diterbitkan.
          </p>
        </div>

        {galleryImages.length === 0 ? (
          <p className="mt-12 max-w-2xl leading-7 text-muted-foreground">
            Galeri belum memiliki foto pilihan. Pengurus dapat menetapkannya
            lewat panel pengelolaan kegiatan.
          </p>
        ) : (
          <Reveal
            className="mt-12 columns-2 gap-3 md:columns-3 md:gap-5"
            stagger={0.08}
          >
            {galleryImages.map((image) => (
              <figure
                key={image.url}
                className="mb-3 break-inside-avoid md:mb-5"
              >
                <Image
                  src={image.url}
                  alt={image.alt ?? `Dokumentasi ${image.activityTitle}`}
                  width={800}
                  height={800}
                  sizes="(max-width: 767px) 48vw, 30vw"
                  style={{ width: "100%", height: "auto" }}
                  className="border-2 border-foreground object-cover"
                />
              </figure>
            ))}
          </Reveal>
        )}

        <div className="mt-10 flex justify-end">
          <Link href="/program-kegiatan" className="text-link">
            Lihat konteks setiap kegiatan
          </Link>
        </div>
      </div>
    </section>
  );
}
