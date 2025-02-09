"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";

interface ParticleBackgroundProps {
  type:
    | "color"
    | "circle"
    | "lines"
    | "thick"
    | "cobweb"
    | "polygon"
    | "square"
    | "tadpole"
    | "fountain"
    | "random";
}

const ParticleBackground = (props: ParticleBackgroundProps) => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    // Update warna berdasarkan tema
    setColor(theme === "dark" ? "#1E90FF" : "#000000");
  }, [theme]);
  return <ParticlesBg type={props.type} bg={false} color={color} />;
};

export default ParticleBackground;
