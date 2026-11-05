import { type Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "~/components/JsonLd";
import LanyardBadge from "~/components/ui/lanyard-badge";
import { getMemberBySlug, getMembers } from "~/lib/api/client";
import { breadcrumbSchema } from "~/lib/schema";
import type { MemberResponse } from "~/lib/api/types";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const members = await getMembers({ period: "all", limit: 100 });
  return members.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = await getMemberBySlug(slug);
  if (!member) {
    return { title: "ID Card tidak ditemukan" };
  }
  return {
    title: `ID Card ${member.name}`,
    description: `ID Card ${member.name}, ${member.role} Karang Taruna Mekarjadi Dusun Domas.`,
    alternates: { canonical: `/keanggotaan/${member.slug}` },
  };
}

// Wajah kartu dan latar halaman ini memakai warna fisik tetap di kedua tema:
// kertas krem, tinta navy, dan aksen koral — sama seperti strap lanyard.
const CARD_BG = "#faf7f1";
const CARD_INK = "#102b38";
const ACCENT = "#b23d2c";

function BadgeFront({ member }: { member: MemberResponse }) {
  return (
    <div
      className="relative flex h-full w-full flex-col px-[18px] pb-[16px] pt-[30px]"
      style={{ background: CARD_BG, color: CARD_INK }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-display text-[15px] font-extrabold leading-none tracking-tight">
            MEKAR<span style={{ color: ACCENT }}>JADI</span>
          </p>
          <p className="mt-1 text-[6.5px] font-bold uppercase tracking-[0.18em] opacity-70">
            Karang Taruna · Dusun Domas
          </p>
        </div>
        {member.memberNo && (
          <p className="font-mono text-[9px] font-semibold leading-none">
            {member.memberNo}
          </p>
        )}
      </div>

      <div
        className="relative mt-3 aspect-[5/4] overflow-hidden border-2"
        style={{ borderColor: CARD_INK, boxShadow: `6px 6px 0 0 ${ACCENT}` }}
      >
        <Image
          src={member.photoUrl ?? "/images/172024/3.jpg"}
          alt={`Foto ${member.name}`}
          fill
          sizes="240px"
          draggable={false}
          className="object-cover"
        />
      </div>

      <p className="mt-4 font-display text-[24px] font-extrabold leading-none">
        {member.name}
      </p>
      <p
        className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.14em]"
        style={{ color: ACCENT }}
      >
        {member.role}
      </p>

      <div className="mt-auto">
        <div
          className="h-px w-full"
          style={{ background: "rgba(16,43,56,0.18)" }}
        />
        <div className="mt-2 flex items-center justify-between text-[9px]">
          <span className="font-bold">
            {member.instagram ? `@${member.instagram}` : ""}
          </span>
          <span className="font-semibold uppercase tracking-[0.14em] opacity-70">
            Kartu Anggota
          </span>
        </div>
      </div>
    </div>
  );
}

function BadgeBack({ member }: { member: MemberResponse }) {
  return (
    <div
      className="relative flex h-full w-full flex-col"
      style={{ background: CARD_BG, color: CARD_INK }}
    >
      <div className="flex flex-1 flex-col px-[18px] pt-[30px]">
        <p className="text-[6.5px] font-bold uppercase tracking-[0.18em] opacity-70">
          Karang Taruna Mekarjadi
        </p>
        <div className="mt-2 h-[2px] w-10" style={{ background: ACCENT }} />
        <p className="mt-4 font-display text-[22px] font-extrabold leading-tight">
          {member.name}
        </p>
        <p
          className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em]"
          style={{ color: ACCENT }}
        >
          {member.role}
        </p>
        {member.memberNo && (
          <p className="mt-4 font-mono text-[10px] font-semibold">
            No. Anggota {member.memberNo}
          </p>
        )}
        {member.instagram && (
          <p className="font-mono text-[10px] font-semibold">
            @{member.instagram}
          </p>
        )}
      </div>
      <div
        className="px-[18px] pb-[16px] pt-[14px]"
        style={{ background: ACCENT, color: CARD_BG, borderTopLeftRadius: 36 }}
      >
        <p className="font-display text-[13px] font-extrabold leading-none">
          MEKARJADI
        </p>
        <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.18em]">
          Dusun Domas · mekarjadi.web.id
        </p>
      </div>
    </div>
  );
}

export default async function MemberIdCardPage({ params }: PageProps) {
  const { slug } = await params;
  const member = await getMemberBySlug(slug);
  if (!member) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Keanggotaan", path: "/keanggotaan" },
          {
            name: `ID Card ${member.name}`,
            path: `/keanggotaan/${member.slug}`,
          },
        ])}
      />
      {/* Latar dinamis mengikuti tema (--idc-surface): putih di tema terang,
          navy gelap di tema gelap; --lyd-blend membuat ujung lanyard melebur
          ke permukaan ini. */}
      <div
        className="min-h-[calc(100svh-4rem)] bg-[var(--idc-surface)] text-[var(--idc-surface-ink)]"
        style={
          {
            "--lyd-blend": "var(--idc-surface)",
            "--lyd-blend-ink": "var(--idc-surface-ink)",
          } as CSSProperties
        }
      >
        <div className="site-container grid gap-6 lg:min-h-[calc(100svh-4rem)] lg:grid-cols-[1fr_auto] lg:gap-10">
          <header className="order-2 flex flex-col justify-center py-12 lg:order-1 lg:py-10">
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-accent">
              ID Card Anggota
            </p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              {member.name}
            </h1>
            <p className="mt-6 text-lg font-bold leading-8 text-accent">
              {member.role}
            </p>
            <p className="text-base leading-8 text-muted-foreground">
              {member.instagram ? `@${member.instagram}` : ""}
              {member.instagram && member.memberNo ? " · " : ""}
              {member.memberNo ? `No. Anggota ${member.memberNo}` : ""}
            </p>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground">
              Kartu Interaktif yang dapat digeser dan diklik untuk melihat informasi anggota.
            </p>
            <Link
              href="/keanggotaan"
              className="mt-8 inline-flex min-h-11 w-fit items-center border-2 border-foreground px-5 font-display text-sm font-bold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Kembali ke daftar anggota
            </Link>
          </header>
          <div className="order-1 w-full max-w-[420px] justify-self-center lg:order-2 lg:w-[420px] lg:justify-self-end">
            <LanyardBadge
              height="calc(100svh - 4rem)"
              cardWidth={240}
              strapColor="#b23d2c"
              inkColor="#f7f2e8"
              cardColor={CARD_BG}
              strapText="karang taruna mekarjadi"
              strapLabel="DUSUN DOMAS"
              front={<BadgeFront member={member} />}
              back={<BadgeBack member={member} />}
              flipButton={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
