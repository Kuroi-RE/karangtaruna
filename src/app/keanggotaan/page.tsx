import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JsonLd from "~/components/JsonLd";
import Reveal from "~/components/Reveal";
import { getMembers } from "~/lib/api/client";
import { breadcrumbSchema } from "~/lib/schema";

export const metadata: Metadata = {
  title: "Keanggotaan",
  description:
    "Daftar kepengurusan Karang Taruna Mekarjadi beserta ID Card setiap anggota.",
  alternates: { canonical: "/keanggotaan" },
  openGraph: {
    title: "Anggota Karang Taruna Mekarjadi",
    description:
      "Daftar kepengurusan Karang Taruna Mekarjadi beserta ID Card setiap anggota.",
    url: "/keanggotaan",
  },
};

export default async function MembershipPage() {
  const members = await getMembers({ period: "current", limit: 60 });

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Keanggotaan", path: "/keanggotaan" },
        ])}
      />
      <header className="bg-accent text-accent-foreground">
        <div className="site-container py-16 sm:py-20 lg:py-28">
          <p className="font-display text-sm font-bold uppercase tracking-[0.16em]">
            Keanggotaan
          </p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Anggota Karang Taruna Mekarjadi.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-accent-foreground/90">
            Daftar kepengurusan saat ini, lengkap dengan ID Card setiap anggota.
          </p>
        </div>
      </header>

      <section className="section-space">
        <div className="site-container">
          {members.length === 0 ? (
            <p className="max-w-2xl leading-7 text-muted-foreground">
              Daftar kepengurusan sedang diperbarui. Data anggota akan tampil di
              sini setelah data resmi selesai dikumpulkan dan disetujui untuk
              diterbitkan.
            </p>
          ) : (
            <Reveal
              className="relative mx-auto max-w-5xl space-y-10 before:absolute before:bottom-4 before:left-5 before:top-4 before:w-px before:bg-foreground/30 md:space-y-16 md:before:left-1/2 md:before:-translate-x-1/2"
              stagger={0.08}
            >
              {members.map((member, index) => {
                const isRight = index % 2 === 1;
                return (
                  <article
                    key={member.slug}
                    className="relative grid grid-cols-[2.5rem_1fr] md:grid-cols-2 md:gap-16"
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-[calc(1.25rem-0.35rem)] top-7 z-10 h-3 w-3 rounded-full border-2 border-background bg-accent md:left-1/2 md:-translate-x-1/2"
                    />
                    <div
                      className={
                        isRight
                          ? "col-start-2 md:col-start-2 md:pl-8"
                          : "col-start-2 md:col-start-1 md:row-start-1 md:pr-8"
                      }
                    >
                      <div className="flex flex-col border-2 border-foreground bg-card transition-transform duration-300 hover:-translate-y-1">
                        <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-foreground sm:aspect-[5/3]">
                          <Image
                            src={member.photoUrl ?? "/images/172024/3.jpg"}
                            alt={`Foto ${member.name}, ${member.role}`}
                            fill
                            sizes="(max-width: 767px) calc(100vw - 5rem), 42vw"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex flex-col p-5">
                          <p className="font-display text-xs font-bold uppercase tracking-[0.16em] text-accent">
                            {member.role}
                          </p>
                          <h2 className="mt-2 font-display text-2xl font-extrabold">
                            {member.name}
                          </h2>
                          {member.instagram && (
                            <p className="mt-1 text-sm font-bold text-primary">
                              @{member.instagram}
                            </p>
                          )}
                          <Link
                            href={`/keanggotaan/${member.slug}`}
                            className="mt-5 flex min-h-11 w-full items-center justify-center border-2 border-foreground bg-background font-display text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
                          >
                            Lihat ID Card
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
