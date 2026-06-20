"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "~/lib/gsap";

/**
 * Lightweight ambient background: a few soft blurred blobs in the brand
 * palette drifting slowly. Replaces the heavy particles-bg dependency.
 * Decorative only and hidden from assistive tech. Honors reduced-motion.
 */
export default function ParticleBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const blobs = ref.current?.querySelectorAll<HTMLElement>(".blob");
      if (!blobs) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        blobs.forEach((blob, i) => {
          gsap.to(blob, {
            x: () => gsap.utils.random(-60, 60),
            y: () => gsap.utils.random(-60, 60),
            scale: () => gsap.utils.random(0.85, 1.2),
            duration: () => gsap.utils.random(8, 14),
            delay: i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="blob absolute left-[10%] top-[15%] h-64 w-64 rounded-full bg-blueSea/40 blur-3xl" />
      <div className="blob absolute right-[12%] top-[40%] h-72 w-72 rounded-full bg-merah/20 blur-3xl" />
      <div className="blob absolute left-[35%] bottom-[10%] h-56 w-56 rounded-full bg-blueSea-foreground/40 blur-3xl" />
    </div>
  );
}
