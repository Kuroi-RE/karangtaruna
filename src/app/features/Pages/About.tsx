import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import Reveal from "~/components/Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-[70vh] flex-col text-black dark:text-white"
    >
      <div className="relative flex w-full flex-col gap-7 pb-36 pt-24 md:grid md:grid-cols-2 md:grid-rows-1 lg:divide-x-2">
        {/* Left */}
        <Reveal className="relative flex items-center gap-4 px-4 md:h-full lg:pl-16">
          <h2 className="font-display text-3xl font-bold md:self-start md:text-4xl lg:pt-5 lg:text-6xl">
            Siapa <span className="text-merah">Kita?</span>
          </h2>

          <svg
            className="absolute left-28 -z-10 h-[129px] w-[120px] md:-top-5 md:left-36 lg:left-80 lg:top-0"
            viewBox="0 0 170 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 108.507L168.417 40.5767L169 35.2605V30.5349L168.417 25.8093L164.333 21.6744L149.167 12.2233L132.25 5.72558L114.817 1L106.583 2.77209L100.167 8.67907L98.4167 16.3581L99 23.4465L128.167 128"
              stroke="#00A9FF"
            />
          </svg>
        </Reveal>

        {/* Right */}
        <Reveal
          className="relative flex flex-col gap-4 md:max-w-full md:pt-10 lg:max-w-full"
          stagger={0.15}
        >
          <div className="absolute right-0 top-10 -z-10 h-48 w-48 rounded-l-full bg-blueSea-foreground dark:bg-zinc-900 sm:w-72"></div>

          <div className="px-4 lg:px-10">
            <h3 className="line-clamp-2 text-lg font-medium lg:text-xl">
              Mewujudkan Karang Taruna Mekar Jadi sebagai organisasi kepemudaan
              yang mandiri, kreatif, dan inovatif dalam membangun masyarakat
              yang berdaya saing, harmonis, dan sejahtera.
            </h3>
            <p className="lg:text-md line-clamp-3 text-muted-foreground">
              Karang Taruna Mekar Jadi hadir sebagai wadah bagi pemuda-pemudi
              Dusun Domas untuk berperan aktif dalam pembangunan sosial,
              ekonomi, dan budaya di lingkungan sekitar. Kami berkomitmen untuk
              menciptakan generasi muda yang memiliki semangat gotong royong,
              kepedulian sosial, dan kemampuan berinovasi guna menghadapi
              tantangan masa depan.
            </p>
          </div>

          <div className="pl-4 lg:pl-10">
            <Link href="/about">
              <Button
                variant="outline"
                className="border-merah text-merah hover:bg-merah hover:text-merah-foreground"
              >
                Selengkapnya
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
