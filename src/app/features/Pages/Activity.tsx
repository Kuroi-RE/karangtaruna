import Image from "next/image";
import Link from "next/link";
import Reveal from "~/components/Reveal";
import { getActivities } from "~/lib/api/client";

export default async function Activity() {
  const activities = await getActivities({ limit: 4 });

  return (
    <section id="kegiatan" className="section-space scroll-mt-20">
      <div className="site-container">
        <div className="grid gap-6 border-b-2 border-foreground pb-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="eyebrow">Arsip kegiatan</p>
            <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Kegiatan yang tercatat, bukan sekadar cerita.
            </h2>
          </div>
          <Link href="/program-kegiatan" className="text-link">
            Buka seluruh arsip
          </Link>
        </div>

        {activities.length === 0 ? (
          <p className="mt-10 max-w-2xl leading-7 text-muted-foreground">
            Belum ada kegiatan yang dapat ditampilkan. Arsip akan tampil di sini
            begitu dokumentasi kegiatan selesai.
          </p>
        ) : (
          <Reveal className="mt-10 grid gap-10 lg:grid-cols-2" stagger={0.12}>
            {activities.map((activity, index) => (
              <article
                key={activity.slug}
                className={index === 1 ? "lg:mt-24" : undefined}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-2 border-foreground">
                  <Image
                    src={activity.coverUrl ?? "/images/172024/1.jpg"}
                    alt={activity.coverAlt ?? `Dokumentasi ${activity.title}`}
                    fill
                    sizes="(max-width: 1023px) 92vw, 44vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
                <div className="grid grid-cols-[auto_1fr] gap-5 border-b-2 border-foreground py-5">
                  <p className="font-display text-3xl font-extrabold text-accent">
                    {activity.year}
                  </p>
                  <div>
                    <h3 className="font-display text-xl font-bold sm:text-2xl">
                      {activity.title}
                    </h3>
                    <p className="mt-2 leading-7 text-muted-foreground">
                      {activity.summary}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
