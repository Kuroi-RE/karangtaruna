import About from "./features/Pages/About";
import Activity from "./features/Pages/Activity";
import Gallery from "./features/Pages/Gallery";
import Hero from "./features/Pages/Hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Activity />
      <Gallery />
      <section className="section-space border-t-2 border-foreground bg-accent text-accent-foreground">
        <div className="site-container grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.16em]">
              Keanggotaan
            </p>
            <h2 className="mt-3 max-w-4xl font-display text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Lihat anggota Karang Taruna Mekarjadi.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-accent-foreground/90">
              Daftar anggota tersedia di halaman keanggotaan,
              lengkap dengan ID Card setiap anggota.
            </p>
          </div>
          <Link
            href="/keanggotaan"
            className="inline-flex min-h-12 w-fit items-center border-2 border-accent-foreground px-5 font-display font-bold transition-colors hover:bg-accent-foreground hover:text-accent"
          >
            Lihat daftar anggota
          </Link>
        </div>
      </section>
    </>
  );
}
