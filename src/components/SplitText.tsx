"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "~/lib/gsap";

interface SplitTextProps {
  text?: string;
  className?: string;
  /** Stagger between characters in seconds. */
  stagger?: number;
  /** Tag to render as. */
  as?: "p" | "h1" | "h2" | "h3" | "span";
  textAlign?: React.CSSProperties["textAlign"];
}

/**
 * Reveals text character-by-character on scroll into view using a GSAP
 * stagger. Splits manually (no paid SplitText plugin needed) and keeps whole
 * words unbreakable for clean wrapping. Honors prefers-reduced-motion.
 */
const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "",
  stagger = 0.03,
  as = "p",
  textAlign = "center",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const chars = ref.current?.querySelectorAll<HTMLElement>(".st-char");
      if (!chars || chars.length === 0) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(chars, {
          yPercent: 110,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{ textAlign, display: "block" }}
      aria-label={text}
    >
      {words.map((word, wi) => (
        <span
          key={wi}
          aria-hidden="true"
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="st-char"
              style={{ display: "inline-block", willChange: "transform" }}
            >
              {char}
            </span>
          ))}
          {wi < words.length - 1 && (
            <span style={{ display: "inline-block", width: "0.3em" }}>
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </Tag>
  );
};

export default SplitText;
