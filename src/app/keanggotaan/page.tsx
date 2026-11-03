import { type Metadata } from "next";
import JsonLd from "~/components/JsonLd";
import MembershipView from "~/components/MembershipView";
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
          <MembershipView members={members} />
        </div>
      </section>
    </>
  );
}
