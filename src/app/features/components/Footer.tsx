import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center gap-14 border-t border-t-gray-700 bg-neutral-100 dark:bg-slate-900">
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="flex flex-col gap-2 px-10 pt-2 md:pt-10">
          <Link href="/" className="flex gap-2 text-xl font-bold">
            <Image src="/favicon.ico" width={50} height={50} alt="logo" />
          </Link>
          <h2 className="font-semibold">Kartar Mekar Jadi</h2>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="flex w-full flex-row flex-wrap gap-16 px-10 md:pt-24">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold uppercase">Company</h1>
            <Link
              className="text-muted-foreground hover:text-primary"
              href="/about"
            >
              Tentang Kita
            </Link>
            <Link
              className="text-muted-foreground hover:text-primary"
              href="/contact"
            >
              Kontak
            </Link>
            <Link
              className="text-muted-foreground hover:text-primary"
              href="/contact"
            >
              shakuroi.dev
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold uppercase">Resource</h1>
            <Link
              className="text-muted-foreground hover:text-primary"
              href="/about"
            >
              Dokumentasi
            </Link>
            <Link
              className="text-muted-foreground hover:text-primary"
              href="/contact"
            >
              Berita & Event
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold uppercase">Media Sosial</h1>
            <Link
              className="text-muted-foreground hover:text-primary"
              href="/about"
            >
              Instagram
            </Link>
            <Link
              className="text-muted-foreground hover:text-primary"
              href="/contact"
            >
              Youtube
            </Link>
            <Link
              className="text-muted-foreground hover:text-primary"
              href="/contact"
            >
              LinkTree
            </Link>
          </div>
        </div>
      </div>

      <hr className="m-0 w-full border-t border-neutral-200 p-0 dark:border-neutral-700" />
      <div className="flex w-full items-center justify-center pb-4">
        <p className="text-center text-muted-foreground">
          &copy; 2025 Karang Taruna Mekar Jadi Desa Domas
        </p>
      </div>
    </div>
  );
};

export default Footer;
