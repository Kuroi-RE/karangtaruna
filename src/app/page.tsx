"use client";

// import { Button } from "~/components/ui/button";
// import { useTheme } from "next-themes";
import Hero from "./features/Pages/Hero";
import About from "./features/Pages/About";
import Activity from "./features/Pages/Activity";
import Gallery from "./features/Pages/Gallery";

export default function HomePage() {
  // const { setTheme } = useTheme();

  return (
    <main className="flex min-h-screen flex-col pt-24 text-white md:pt-0">
      <Hero />
      <About />
      <Activity />
      <Gallery />
    </main>
  );
}
