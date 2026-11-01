import { type Metadata } from "next";
import Image from "next/image";
import JsonLd from "~/components/JsonLd";
import Reveal from "~/components/Reveal";
import { getActivities } from "~/lib/api/client";
import { breadcrumbSchema } from "~/lib/schema";

export const metadata: Metadata = {
  title: "Program & Kegiatan",
  description:
    "Arsip kegiatan Karang Taruna Mekarjadi yang telah terdokumentasi.",
  alternates: { canonical: "/program-kegiatan" },
  openGraph: {
    title: "Program & Kegiatan Mekarjadi",
    description: "Arsip kegiatan Karang Taruna Mekarjadi di Dusun Domas.",
    url: "/program-kegiatan",
  },
};

export default async function ActivitiesPage() {
  const activities = await getActivities({ limit: 50 });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Program & Kegiatan", path: "/program-kegiatan" },
        ])}
      />
      <header className="site-container grid gap-8 border-b-2 border-foreground py-16 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:py-28">
        <div>
          <p className="eyebrow">Program & kegiatan</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Arsip yang bisa dilihat kembali.
          </h1>
        </div>
        <div className="lg:justify-self-end">
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            Belum ada data program aktif yang dapat diterbitkan. Untuk saat ini,
            halaman ini berfokus pada kegiatan yang memiliki dokumentasi foto.
          </p>
        </div>
      </header>

      <section className="section-space">
        <div className="site-container space-y-20 lg:space-y-28">
          {activities.length === 0 ? (
            <p className="max-w-2xl leading-7 text-muted-foreground">
              Arsip kegiatan masih kosong atau sedang tidak dapat dimuat. Coba
              muat ulang halaman, atau kembali lagi nanti.
            </p>
          ) : (
            activities.map((activity, activityIndex) => (
              <article
                key={activity.slug}
                className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:gap-14"
              >
                <Reveal className="lg:sticky lg:top-24 lg:self-start">
                  <p className="font-display text-6xl font-extrabold leading-none text-accent sm:text-7xl">
                    {activity.year}
                  </p>
                  <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
                    {activity.title}
                  </h2>
                  <p className="mt-2 font-bold text-primary">{activity.date}</p>
                  <p className="mt-5 leading-7 text-muted-foreground">
                    {activity.summary}
                  </p>
                </Reveal>
                <Reveal
                  className="grid grid-cols-2 gap-3 sm:gap-5"
                  stagger={0.06}
                >
                  {activity.images.map((image, imageIndex) => (
                    <figure
                      key={image.url}
                      className={imageIndex === 0 ? "col-span-2" : undefined}
                    >
                      <div
                        className={`relative overflow-hidden border-2 border-foreground ${imageIndex === 0 ? "aspect-[16/10]" : "aspect-square"}`}
                      >
                        <Image
                          src={image.url}
                          alt={
                            image.alt ??
                            `Dokumentasi ${activity.title}, foto ${imageIndex + 1}`
                          }
                          fill
                          sizes={
                            imageIndex === 0
                              ? "(max-width: 1023px) 92vw, 58vw"
                              : "(max-width: 639px) 46vw, 30vw"
                          }
                          className="object-cover"
                          priority={activityIndex === 0 && imageIndex === 0}
                        />
                      </div>
                    </figure>
                  ))}
                </Reveal>
              </article>
            ))
          )}
        </div>
      </section>
    </>
  );
}
