"use client";

import Image from "next/image";
import React, { useRef } from "react";
import ParticleBackground from "~/components/ParticleBackground";
import SplitText from "~/components/SplitText";
import { gsap, ScrollTrigger, useGSAP } from "~/lib/gsap";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { useToast } from "~/hooks/use-toast";

const galleryImages = [
  "/images/172023/1.jpg",
  "/images/172024/1.jpg",
  "/images/172024/5.jpg",
  "/images/172023/5.jpg",
  "/images/172024/2.jpg",
  "/images/172024/6.jpg",
  "/images/172023/3.jpg",
  "/images/172024/3.jpg",
  "/images/172024/7.jpg",
  "/images/172024/8.jpg",
];

const Gallery = () => {
  const { toast } = useToast();
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const grid = gridRef.current;
      if (!grid) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const items = gsap.utils.toArray<HTMLElement>(grid.children);
        // Start hidden, then reveal in batches as they enter the viewport.
        gsap.set(items, { opacity: 0, y: 40 });
        ScrollTrigger.batch(items, {
          start: "top 90%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              stagger: 0.08,
              overwrite: true,
            }),
        });
        // Recalculate positions once images have loaded/laid out.
        ScrollTrigger.refresh();
      });
      return () => mm.revert();
    },
    { scope: gridRef },
  );

  return (
    <section
      id="gallery"
      className="relative flex min-h-screen flex-col items-center p-6 py-24"
    >
      <ParticleBackground />

      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-merah">
          Dokumentasi
        </span>
        <SplitText
          as="h2"
          text="GALLERY"
          className="font-display text-4xl font-bold text-primary lg:text-5xl"
        />
      </div>

      {/* Real masonry via CSS columns */}
      <div
        ref={gridRef}
        className="masonry-grid w-full max-w-4xl columns-2 md:columns-3"
      >
        {galleryImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            width={400}
            height={index % 3 === 0 ? 520 : index % 2 === 0 ? 300 : 400}
            alt={`Dokumentasi kegiatan Karang Taruna Mekar Jadi ${index + 1}`}
            className="mb-4 h-auto w-full rounded-lg object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
        ))}
      </div>

      <div className="mt-10">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="rounded-md bg-merah px-4 py-2 text-merah-foreground hover:bg-merah-dark">
              Lihat Dokumentasi [Google Drive]
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Dokumentasi [Kartar]</AlertDialogTitle>
              <AlertDialogDescription>
                Dokumentasi Kartar yang tersimpan di Google Drive, silahkan
                pilih dokumentasi sesuai dengan kegiatan yang ingin dilihat.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex gap-4 md:flex-col">
              <AlertDialogAction
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1Pa9sEVVXzremmmWOY7pjAO-vOYdBLL_3?usp=drive_link",
                  )
                }
              >
                17 Agustus 2023
              </AlertDialogAction>
              <AlertDialogAction
                onClick={() => {
                  toast({ description: "Dokumentasi Tidak Tersedia." });
                }}
              >
                Voli Antar Dusun 2024
              </AlertDialogAction>
              <AlertDialogAction
                onClick={() =>
                  window.open(
                    "https://drive.google.com/drive/folders/1KE-lf1L611O1cWn-EdZ2axpW-hGmeoFV?usp=sharing",
                  )
                }
              >
                17 Agustus 2024
              </AlertDialogAction>
              <AlertDialogCancel className="border-merah">
                Tutup
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
};

export default Gallery;
