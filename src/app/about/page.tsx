import React from "react";
import { type Metadata } from "next";
import ParticleBackground from "~/components/ParticleBackground";
import Timeline from "~/components/Timeline";
import Misi from "~/components/Misi";
import SplitText from "~/components/SplitText";
import Reveal from "~/components/Reveal";
import JsonLd from "~/components/JsonLd";
import { breadcrumbSchema } from "~/lib/schema";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Mengenal Karang Taruna Mekar Jadi Dusun Domas: visi, misi, dan struktur organisasi kepemudaan yang mandiri, kreatif, dan inovatif.",
  alternates: { canonical: "/about" },
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
    name: "Unknown",
    role: "Ketua",
    medsos: "@unknown",
    date: "2020 - present",
  },
  {
    avatar: "/images/kegiatan1/1.jpg",
    name: "Unknown",
    role: "Wakil Ketua",
    medsos: "@unknown",
    date: "2021 - present",
  },
  {
    avatar: "/images/kegiatan1/1.jpg",
    name: "Unknown",
    role: "Sekretaris",
    medsos: "@unknown",
    date: "2019 - present",
  },
  {
    avatar: "/images/kegiatan1/1.jpg",
    name: "Unknown",
    role: "Bendahara",
    medsos: "@unknown",
    date: "2022 - present",
  },
  {
    avatar: "/images/kegiatan1/1.jpg",
    name: "Unknown",
    role: "Humas",
    medsos: "@unknown",
    date: "2023 - present",
  },
];

const AboutPage = () => {
  return (
    <div className="relative py-24">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Beranda", path: "/" },
          { name: "Tentang Kami", path: "/about" },
        ])}
      />
      <ParticleBackground />

      <section
        id="about"
        className="flex min-h-[70vh] flex-col text-black dark:text-white"
      >
        <div className="relative flex w-full flex-col gap-7 pb-36 pt-24 md:grid md:grid-cols-2 md:grid-rows-1 lg:divide-x-2">
          {/* Left */}
          <Reveal className="relative flex items-center gap-5 px-4 md:h-full lg:pl-16">
            <h1 className="font-display text-3xl font-bold md:self-start md:text-4xl lg:pt-5 lg:text-6xl">
              Siapa <span className="text-merah">Kita?</span>
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
          </Reveal>

          {/* Right */}
          <Reveal
            className="relative flex flex-col gap-4 md:max-w-full md:pt-10 lg:max-w-full"
            stagger={0.15}
          >
            <div className="absolute right-0 top-10 -z-10 h-48 w-48 rounded-l-full bg-blueSea-foreground dark:bg-zinc-900 sm:w-72"></div>

            <div className="px-4 lg:px-10">
              <h2 className="text-lg font-medium lg:text-xl">
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
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="visi-misi"
        className="flex min-h-[70vh] flex-col text-black dark:text-white"
      >
        <div className="flex w-full flex-col gap-16 pb-36">
          <Reveal
            stagger={0.15}
            className="relative flex flex-col items-center gap-4 px-4"
          >
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-6xl">
              Visi & <span className="text-merah">Misi</span>
            </h2>
            <p className="max-w-prose text-center text-muted-foreground md:px-4 md:text-lg">
              Visi dan misi merupakan landasan utama bagi sebuah organisasi.
              Keduanya mencerminkan arah, tujuan, serta komitmen dalam
              menjalankan peran dan tanggung jawabnya. Dengan visi yang jelas
              dan misi yang terstruktur, organisasi dapat tumbuh dan berkembang
              secara berkelanjutan.
            </p>
          </Reveal>
          <Reveal stagger={0.15} className="relative flex flex-col gap-4">
            <div className="px-4">
              <h3 className="text-xl tracking-wider md:text-2xl lg:text-4xl">
                Visi
              </h3>
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
            <div className="px-4 text-left md:text-right">
              <h3 className="text-xl tracking-wider md:text-2xl lg:text-4xl">
                Misi
              </h3>
              <div className="flex w-full justify-end text-muted-foreground">
                <Misi />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="flex min-h-[300px] w-full items-center justify-center bg-gradient-to-r from-primary via-blueSea to-merah dark:from-primary dark:via-blue-800 dark:to-merah-dark">
        <SplitText
          as="p"
          text="Domas Gumebyar, Indonesia Sumunar! Domas Guyub, Indonesia Murub!"
          className="px-4 text-center font-display text-2xl font-bold italic text-white lg:text-5xl"
          stagger={0.02}
        />
      </div>

      {/* Struktur Organisasi */}
      <div>
        <Reveal
          stagger={0.15}
          className="relative flex w-full flex-col gap-5 pb-10 pt-36 md:pb-24 lg:items-center"
        >
          <div className="flex items-center gap-4 px-4">
            <h2 className="font-display text-3xl font-bold">
              Struktur Organisasi
            </h2>
          </div>
          <div className="px-4">
            <p className="max-w-prose text-muted-foreground lg:text-center">
              Struktur organisasi Karang Taruna Mekar Jadi dibentuk untuk
              memastikan setiap anggota memiliki peran dan tanggung jawab yang
              jelas dalam menjalankan program-program organisasi. Dengan
              struktur yang terorganisir, setiap kegiatan dapat berjalan secara
              efektif dan efisien.
            </p>
          </div>
        </Reveal>
        <Timeline data={StrukturData} />
      </div>
    </div>
  );
};

export default AboutPage;
