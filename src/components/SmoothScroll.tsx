"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "~/lib/gsap";

/**
 * SmoothScroll wires Lenis smooth scrolling into GSAP's ScrollTrigger so that
 * scroll-driven animations stay in sync with the eased scroll position.
 *
 * Respects `prefers-reduced-motion`: when the user opts out of motion we skip
 * Lenis entirely and let the browser use native scrolling.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Keep ScrollTrigger in sync with Lenis' virtual scroll position.
    lenis.on("scroll", () => ScrollTrigger.update());

    // Drive Lenis from GSAP's ticker for a single shared RAF loop.
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    // Large images can change layout after triggers are computed; recalc
    // ScrollTrigger positions once everything has loaded.
    const refresh = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      refresh();
    } else {
      window.addEventListener("load", refresh);
    }

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
