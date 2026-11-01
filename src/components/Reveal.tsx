"use client";

import { useRef, type ElementType } from "react";
import { gsap, useGSAP } from "~/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  /** Animate direct children with this stagger (seconds) instead of the wrapper itself. */
  stagger?: number;
  /** Delay before the animation starts (seconds). */
  delay?: number;
  /** Vertical offset to animate from (px). */
  y?: number;
  id?: string;
};

/**
 * Fades + slides content in when it scrolls into view, powered by GSAP
 * ScrollTrigger. When `stagger` is provided, its direct children animate in
 * sequence. Respects prefers-reduced-motion (content stays visible, no motion).
 */
export default function Reveal({
  children,
  className,
  as,
  stagger,
  delay = 0,
  y = 40,
  id,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag: ElementType = as ?? "div";

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = stagger != null ? Array.from(el.children) : el;
        gsap.from(targets, {
          opacity: 0,
          y,
          duration: 0.8,
          delay,
          ease: "power3.out",
          stagger: stagger ?? 0,
          // Content stays visible until the trigger fires; if the trigger
          // never runs (programmatic scroll, anchor jump), nothing is hidden.
          immediateRender: false,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className} id={id}>
      {children}
    </Tag>
  );
}
