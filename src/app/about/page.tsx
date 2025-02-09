import React from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import Timeline from "~/components/Timeline";

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
    <div className="py-24">
      <section
        id="about"
        className="flex min-h-[70vh] flex-col text-black dark:text-white"
      >
        <div className="flex w-full flex-col gap-16 pb-36 pt-24">
          <div className="relative flex items-center gap-4 px-4">
            <h1 className="text-3xl font-bold">Siapa Kita?</h1>
            <svg
              className="absolute left-28 -z-10 h-[129px] w-[120px]"
              viewBox="0 0 170 129"
              fillRule="inherit"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 108.507L168.417 40.5767L169 35.2605V30.5349L168.417 25.8093L164.333 21.6744L149.167 12.2233L132.25 5.72558L114.817 1L106.583 2.77209L100.167 8.67907L98.4167 16.3581L99 23.4465L128.167 128"
                stroke="#00A9FF"
              />
            </svg>
          </div>

          <div className="relative flex flex-col gap-4">
            <div className="absolute right-0 top-10 -z-10 h-48 w-48 rounded-l-full bg-blueSea-foreground dark:bg-zinc-900 sm:w-72"></div>
            <div className="px-4">
              <h2>
                Kami adalah pemuda-pemudi dusun domas, kami bekerja sama untuk
                membangun dusun domas menjadi lebih maju.
              </h2>
              <p className="text-muted-foreground">
                Kami memiliki tujuan untuk membangun dusun domas menjadi dusun
                yang memiliki keinginan untuk maju lorem ipsum lorem lorem
                ipsum, untuk itu kami ada disini untuk bertukar pemikiran demi
                kemajuan dusun domas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="visi-misi"
        className="flex min-h-[70vh] flex-col text-black dark:text-white"
      >
        <div className="flex w-full flex-col gap-16 pb-36">
          <div className="relative flex flex-col items-center gap-4 px-4">
            <h1 className="text-3xl font-bold">Visi & Misi</h1>
            <p className="text-center text-muted-foreground">
              Visi dan Misi adalah hal yang sakral bagi sebuah organisasi,
              visi&misi memperlihatkan bagaimana kualitas dari sebuah
              organisasi.
            </p>
          </div>
          <div className="relative flex flex-col gap-4">
            <div className="absolute right-0 top-10 -z-10 h-48 w-48 rounded-l-full bg-blueSea-foreground dark:bg-zinc-900 sm:w-72"></div>
            <div className="px-4">
              <h2>Visi</h2>
              <p className="text-muted-foreground">
                Menjadi organisasi pemuda-pemudi yang berprestasi dan berdaya
                saing.
              </p>
            </div>
            <div className="px-4 text-right">
              <h2>Misi</h2>
              <p className="text-muted-foreground">
                Membangun pemuda-pemudi yang berprestasi dan berdaya saing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex min-h-[300px] w-full items-center justify-center bg-gradient-to-r from-primary to-blueSea-foreground dark:from-primary dark:to-blue-800">
        <h1 className="text-center text-3xl font-bold italic dark:text-white">
          “Domas Gumebyar, Indonesia Sumunar! Domas Guyub, Indonesia Murub!”
        </h1>
      </div>

      {/* Timeline */}
      <div>
        <div className="relative flex w-full flex-col gap-5 pb-10 pt-24">
          <div className="flex items-center gap-4 px-4">
            <h1 className="text-3xl font-bold">Struktur Organisasi</h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="absolute left-0 top-24 -z-10 h-48 w-48 rounded-r-full bg-blueSea-foreground dark:bg-zinc-900 sm:w-72"></div>
            <div className="px-4">
              <p className="text-muted-foreground">
                Sebuah organisasi haruslah memiliki struktur anggota yang jelas.
                Agar dapat berjalan dengan rapi dan terstruktur. Berikut adalah
                struktur organisasi Karang Taruna Mekar Jadi
              </p>
            </div>
          </div>
        </div>
        <Timeline data={StrukturData} />
      </div>
    </div>
  );
};

export default page;
