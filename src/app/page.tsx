"use client";

import { Button } from "~/components/ui/button";
import { useTheme } from "next-themes";
import Hero from "./features/Pages/Hero";
import About from "./features/Pages/About";

export default function HomePage() {
  const { setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center pt-24 text-white md:pt-0">
      <Hero />
      <About />
    </main>
  );
}
