"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./features/Pages/Hero"), { ssr: false });
const About = dynamic(() => import("./features/Pages/About"), { ssr: false });
const Activity = dynamic(() => import("./features/Pages/Activity"), {
  ssr: false,
});
const Gallery = dynamic(() => import("./features/Pages/Gallery"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col pt-24 text-white md:pt-0">
      <Hero />
      <About />
      <Activity />
      <Gallery />
    </main>
  );
}
