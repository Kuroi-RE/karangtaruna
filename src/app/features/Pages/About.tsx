"use client";

import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-[70vh] flex-col text-black dark:text-white"
    >
      <div className="flex w-full flex-col gap-16 pb-36 pt-24 md:flex-row md:justify-between lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:divide-x-2">
        <div className="relative flex items-center gap-4 px-4 md:h-full lg:pl-16">
          <h1 className="text-3xl font-bold md:text-4xl lg:self-start lg:pt-5 lg:text-6xl">
            Siapa Kita?
          </h1>
          <svg
            className="absolute left-28 -z-10 h-[129px] w-[120px] md:left-52 lg:left-80 lg:top-0"
            viewBox="0 0 170 129"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 108.507L168.417 40.5767L169 35.2605V30.5349L168.417 25.8093L164.333 21.6744L149.167 12.2233L132.25 5.72558L114.817 1L106.583 2.77209L100.167 8.67907L98.4167 16.3581L99 23.4465L128.167 128"
              stroke="#00A9FF"
            />
          </svg>
        </div>

        <div className="relative flex flex-col gap-4 md:max-w-96 md:pt-10 lg:max-w-full">
          <div className="absolute right-0 top-10 -z-10 h-48 w-48 rounded-l-full bg-blueSea-foreground dark:bg-zinc-900 sm:w-72"></div>
          <div className="px-4 lg:px-10">
            <h2 className="lg:text-xl">
              Kami adalah pemuda-pemudi dusun domas, kami bekerja sama untuk
              membangun dusun domas menjadi lebih maju.
            </h2>
            <p className="lg:text-md text-muted-foreground">
              Kami memiliki tujuan untuk membangun dusun domas menjadi dusun
              yang memiliki keinginan untuk maju lorem ipsum lorem lorem ipsum,
              untuk itu kami ada disini untuk bertukar pemikiran demi kemajuan
              dusun domas.
            </p>
          </div>

          <div className="pl-4 lg:pl-10">
            <Link href="/about">
              <Button
                variant="outline"
                className="border-blueSea text-primary hover:bg-primary"
              >
                Selengkapnya
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
