"use client";

import { GitCommitVertical, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Reveal from "~/components/Reveal";
import type { MemberResponse } from "~/lib/api/types";
import { cn } from "~/lib/utils";

interface MembershipViewProps {
  members: MemberResponse[];
}

export default function MembershipView({ members }: MembershipViewProps) {
  const [viewMode, setViewMode] = useState<"timeline" | "grid">("timeline");

  if (members.length === 0) {
    return (
      <p className="max-w-2xl leading-7 text-muted-foreground">
        Daftar kepengurusan sedang diperbarui. Data anggota akan tampil di sini
        setelah data resmi selesai dikumpulkan dan disetujui untuk diterbitkan.
      </p>
    );
  }

  return (
    <div>
      {/* Tombol Ganti Mode */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground/20 pb-6">
        <div>
          <p className="eyebrow">Tampilan Anggota</p>
          <p className="mt-1 text-sm font-medium text-muted-foreground">
            Pilih mode tampilan daftar pengurus
          </p>
        </div>

        <div
          role="group"
          aria-label="Pilihan mode tampilan anggota"
          className="inline-flex items-center rounded-md border-2 border-foreground bg-card p-1 shadow-sm"
        >
          <button
            type="button"
            aria-pressed={viewMode === "timeline"}
            onClick={() => setViewMode("timeline")}
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              viewMode === "timeline"
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-foreground hover:bg-foreground/10",
            )}
          >
            <GitCommitVertical className="size-4" aria-hidden="true" />
            Timeline
          </button>
          <button
            type="button"
            aria-pressed={viewMode === "grid"}
            onClick={() => setViewMode("grid")}
            className={cn(
              "inline-flex min-h-11 items-center gap-2 rounded px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.1em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              viewMode === "grid"
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-foreground hover:bg-foreground/10",
            )}
          >
            <LayoutGrid className="size-4" aria-hidden="true" />
            Card Berjejer
          </button>
        </div>
      </div>

      {/* Konten berdasarkan mode tampilan */}
      {viewMode === "timeline" ? (
        <Reveal
          key="timeline"
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
      ) : (
        <Reveal
          key="grid"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          stagger={0.08}
        >
          {members.map((member) => (
            <article
              key={member.slug}
              className="flex flex-col border-2 border-foreground bg-card transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/5] overflow-hidden border-b-2 border-foreground">
                <Image
                  src={member.photoUrl ?? "/images/172024/3.jpg"}
                  alt={`Foto ${member.name}, ${member.role}`}
                  fill
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
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
              </div>
              <div className="p-5 pt-0">
                <Link
                  href={`/keanggotaan/${member.slug}`}
                  className="flex min-h-11 w-full items-center justify-center border-2 border-foreground bg-background font-display text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
                >
                  Lihat ID Card
                </Link>
              </div>
            </article>
          ))}
        </Reveal>
      )}
    </div>
  );
}
