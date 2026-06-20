"use client";

import React, { useEffect, useRef, useState } from "react";

type WriteTextProps = {
  text: string;
  speed?: number; // ms per character
  delay?: number; // pause after a paragraph finishes (used with loop)
  loop?: boolean;
  className?: string;
};

/**
 * Typewriter effect built on a simple timer (no animation library needed).
 * The full text is exposed to assistive tech and crawlers via aria-label so
 * the progressive reveal does not hide content from SEO.
 */
const WriteText: React.FC<WriteTextProps> = ({
  text,
  speed = 50,
  delay = 3000,
  loop = false,
  className = "",
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced.current) {
      setCurrentText(text);
    }
  }, [text]);

  useEffect(() => {
    if (reduced.current) return;
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setCurrentText((prev) => text.slice(0, prev.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === text) {
      timeout = setTimeout(() => {
        if (loop) setIsDeleting(true);
      }, delay);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, text, speed, delay, loop]);

  return (
    <p className={`text-lg leading-relaxed ${className}`} aria-label={text}>
      <span aria-hidden="true">{currentText}</span>
      <span aria-hidden="true" className="animate-pulse">
        |
      </span>
    </p>
  );
};

export default WriteText;
