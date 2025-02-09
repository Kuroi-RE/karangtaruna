"use client";

import dynamic from "next/dynamic";
import React from "react";

import { motion } from "framer-motion";

const ParticleBackground = dynamic(
  () => import("~/components/ParticleBackground"),
  { ssr: false, loading: () => <p>Loading</p> },
);
const Timeline = dynamic(() => import("~/components/Timeline"), {
  ssr: false,
  loading: () => <p>Loading</p>,
});

const Misi = dynamic(() => import("~/components/Misi"), {
  ssr: false,
  loading: () => <p>Loading</p>,
});
import SplitText from "~/components/SplitText";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.7 } },
};

type StrukturData = {
  avatar: string;
  name: string;
  role: string;
  medsos: string;
  date: string;
}[];

const StrukturData: StrukturData = [
  {
    avatar: "/images/kegiatan1/1.jpg",
    name: "Angga",
    role: "Ketua",
    medsos: "@angga",
    date: "2020 - present",
  },
  {
    avatar: "/images/kegiatan1/1.jpg",
    name: "Budi",
    role: "Wakil Ketua",
    medsos: "@budi",
    date: "2021 - present",
  },
  {
    avatar: "/images/kegiatan1/1.jpg",
    name: "Citra",
    role: "Sekretaris",
    medsos: "@citra",
    date: "2019 - present",
  },
  {
    avatar: "/images/kegiatan1/1.jpg",
    name: "Dewi",
    role: "Bendahara",
    medsos: "@dewi",
    date: "2022 - present",
  },
  {
    avatar: "/images/kegiatan1/1.jpg",
    name: "Eko",
    role: "Humas",
    medsos: "@eko",
    date: "2023 - present",
  },
];

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 20 }} // Tidak hilang total, tapi tetap ada efek masuk
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-24"
    >
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <ParticleBackground type="cobweb" />
      </div>
      <section
        id="about"
        className="flex min-h-[70vh] flex-col text-black dark:text-white"
      >
        <div className="relative flex w-full flex-col gap-7 pb-36 pt-24 md:grid md:grid-cols-2 md:grid-rows-1 lg:divide-x-2">
          {/* Bagian Kiri */}
          <motion.div
            className="relative flex items-center gap-5 px-4 md:h-full lg:pl-16"
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
                Mewujudkan Karang Taruna Mekar Jadi sebagai organisasi
                kepemudaan yang mandiri, kreatif, dan inovatif dalam membangun
                masyarakat yang berdaya saing, harmonis, dan sejahtera.
              </h2>
              <p className="lg:text-md text-muted-foreground">
                Karang Taruna Mekar Jadi hadir sebagai wadah bagi pemuda-pemudi
                Dusun Domas untuk berperan aktif dalam pembangunan sosial,
                ekonomi, dan budaya di lingkungan sekitar. Kami berkomitmen
                untuk menciptakan generasi muda yang memiliki semangat gotong
                royong, kepedulian sosial, dan kemampuan berinovasi guna
                menghadapi tantangan masa depan. Melalui berbagai program dan
                kegiatan, kami mendorong partisipasi aktif dalam pengembangan
                keterampilan, kewirausahaan, serta kepemimpinan yang bertanggung
                jawab. Dengan memperkuat solidaritas dan kerja sama, kami yakin
                bahwa Dusun Domas dapat berkembang menjadi lingkungan yang lebih
                maju, mandiri, dan sejahtera bagi seluruh masyarakat.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section
        id="visi-misi"
        className="flex min-h-[70vh] flex-col text-black dark:text-white"
      >
        <div className="flex w-full flex-col gap-16 pb-36">
          <motion.div
            variants={fadeIn}
            className="relative flex flex-col items-center gap-4 px-4"
          >
            <h1 className="text-3xl font-bold md:text-4xl lg:text-6xl">
              Visi & Misi
            </h1>
            <p className="max-w-prose text-center text-muted-foreground md:px-4 md:text-lg">
              Visi dan misi merupakan landasan utama bagi sebuah organisasi.
              Keduanya mencerminkan arah, tujuan, serta komitmen dalam
              menjalankan peran dan tanggung jawabnya. Dengan visi yang jelas
              dan misi yang terstruktur, organisasi dapat tumbuh dan berkembang
              secara berkelanjutan.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="relative flex flex-col gap-4"
          >
            <div className="px-4">
              <h2 className="text-xl tracking-wider md:text-2xl lg:text-4xl">
                Visi
              </h2>
              <p className="max-w-prose text-sm text-muted-foreground md:text-lg">
                Menjadikan Karang Taruna Mekar Jadi sebagai organisasi
                kepemudaan yang mandiri, kreatif, dan inovatif, serta berperan
                aktif dalam membangun masyarakat yang berdaya saing, harmonis,
                dan sejahtera. Dengan semangat kebersamaan dan gotong royong,
                kami berkomitmen untuk menciptakan lingkungan yang lebih maju,
                inklusif, dan berdaya guna bagi seluruh generasi muda serta
                masyarakat sekitar.
              </p>
            </div>
            <div className="px-4 text-right">
              <h2 className="text-xl tracking-wider md:text-2xl lg:text-4xl">
                Misi
              </h2>
              <div className="flex w-full justify-end text-muted-foreground">
                <Misi />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="flex min-h-[300px] w-full items-center justify-center bg-gradient-to-r from-primary to-blueSea-foreground dark:from-primary dark:to-blue-800">
        <SplitText
          text="“Domas Gumebyar, Indonesia Sumunar! Domas Guyub, Indonesia Murub!”"
          className="text-center text-3xl font-bold italic dark:text-white lg:text-6xl"
          delay={50}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>

      {/* Timeline */}
      <div>
        <motion.div
          variants={fadeIn}
          className="relative flex w-full flex-col gap-5 pb-10 pt-36 md:pb-24 lg:items-center"
        >
          <div className="flex items-center gap-4 px-4">
            <h1 className="text-3xl font-bold">Struktur Organisasi</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="px-4">
              <p className="max-w-prose text-muted-foreground lg:text-center">
                Struktur organisasi Karang Taruna Mekar Jadi dibentuk untuk
                memastikan setiap anggota memiliki peran dan tanggung jawab yang
                jelas dalam menjalankan program-program organisasi. Dengan
                struktur yang terorganisir, setiap kegiatan dapat berjalan
                secara efektif dan efisien.
              </p>
            </div>
          </div>
        </motion.div>
        <Timeline data={StrukturData} />
      </div>
    </motion.div>
  );
};

export default page;
