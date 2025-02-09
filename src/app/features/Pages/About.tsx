"use client";

import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } },
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="flex min-h-[70vh] flex-col text-black dark:text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative flex w-full flex-col gap-7 pb-36 pt-24 md:grid md:grid-cols-2 md:grid-rows-1 lg:divide-x-2">
        {/* Bagian Kiri */}
        <motion.div
          className="relative flex items-center gap-4 px-4 md:h-full lg:pl-16"
          variants={fadeIn}
        >
          <h1 className="text-3xl font-bold md:self-start md:text-4xl lg:pt-5 lg:text-6xl">
            Siapa Kita?
          </h1>

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
        </motion.div>

        {/* Bagian Kanan */}
        <motion.div
          className="relative flex flex-col gap-4 md:max-w-full md:pt-10 lg:max-w-full"
          variants={fadeIn}
        >
          <motion.div
            className="absolute right-0 top-10 -z-10 h-48 w-48 rounded-l-full bg-blueSea-foreground dark:bg-zinc-900 sm:w-72"
            variants={fadeIn}
          ></motion.div>

          <motion.div className="px-4 lg:px-10" variants={fadeIn}>
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
          </motion.div>

          <motion.div className="pl-4 lg:pl-10" variants={fadeIn}>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-blueSea text-primary hover:bg-primary"
              >
                Selengkapnya
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
