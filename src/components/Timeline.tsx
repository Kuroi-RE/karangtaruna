"use client";

import { useRef } from "react";
import { WorkflowIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { gsap, useGSAP } from "~/lib/gsap";

type StrukturData = {
  avatar: string;
  name: string;
  role: string;
  medsos: string;
  date: string;
}[];

type TimelineProps = {
  data: StrukturData;
};

/**
 * Custom vertical timeline animated with GSAP ScrollTrigger.
 * The center line draws in as you scroll, and each entry reveals
 * from its side. Replaces react-vertical-timeline-component.
 */
const Timeline = ({ data }: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Draw the spine.
        const line = root.querySelector<HTMLElement>(".tl-line");
        if (line) {
          gsap.from(line, {
            scaleY: 0,
            transformOrigin: "top center",
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top 70%",
              end: "bottom 80%",
              scrub: true,
            },
          });
        }

        // Reveal each item.
        root.querySelectorAll<HTMLElement>(".tl-item").forEach((item) => {
          const fromLeft = item.classList.contains("tl-left");
          gsap.from(item, {
            opacity: 0,
            x: fromLeft ? -60 : 60,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%", once: true },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-4xl px-4 py-10">
      {/* Spine */}
      <div
        className="tl-line absolute bottom-0 left-4 top-0 w-1 rounded-full bg-gradient-to-b from-primary via-blueSea to-merah md:left-1/2 md:-translate-x-1/2"
        aria-hidden="true"
      />

      <ul className="flex flex-col gap-12">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <li
              key={index}
              className={`tl-item ${isLeft ? "tl-left" : "tl-right"} relative pl-14 md:pl-0 md:w-1/2 ${
                isLeft ? "md:self-start md:pr-12 md:text-right" : "md:self-end md:pl-12"
              }`}
            >
              {/* Node */}
              <span
                className={`absolute left-1.5 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-merah text-merah-foreground shadow md:left-auto ${
                  isLeft ? "md:-right-3.5" : "md:-left-3.5"
                }`}
                aria-hidden="true"
              >
                <WorkflowIcon size={16} />
              </span>

              <div className="rounded-xl bg-blueSea-mute p-5 shadow-md dark:bg-[#03346E]">
                <div
                  className={`mb-3 flex items-center gap-3 ${
                    isLeft ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarImage src={item.avatar} alt={item.name} />
                    <AvatarFallback>KT</AvatarFallback>
                  </Avatar>
                  <div className={isLeft ? "md:text-right" : ""}>
                    <h3 className="font-display text-lg font-bold text-black dark:text-white">
                      {item.name}
                    </h3>
                    <p className="text-sm font-semibold text-merah">
                      {item.role}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.medsos}</p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Timeline;
