"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type WriteTextProps = {
  text: string;
  speed?: number; // Kecepatan mengetik dalam ms per huruf
  delay?: number; // Jeda setelah paragraf selesai
  loop?: boolean; // Apakah akan looping?
  className?: string;
};

const WriteText: React.FC<WriteTextProps> = ({
  text,
  speed = 50,
  delay = 3000,
  loop = false,
  className = "",
}) => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

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
    <motion.p
      className={`text-lg leading-relaxed ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {currentText}
      <span className="animate-blink">|</span>
    </motion.p>
  );
};

export default WriteText;
