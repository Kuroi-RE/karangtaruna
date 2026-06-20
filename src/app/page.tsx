import Hero from "./features/Pages/Hero";
import About from "./features/Pages/About";
import Activity from "./features/Pages/Activity";
import Gallery from "./features/Pages/Gallery";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col pt-24 text-white md:pt-0">
      <Hero />
      <About />
      <Activity />
      <Gallery />
    </div>
  );
}
