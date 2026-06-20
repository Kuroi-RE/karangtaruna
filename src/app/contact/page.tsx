import Link from "next/link";
import { type Metadata } from "next";
import FormContact from "../features/components/FormContact";
import JsonLd from "~/components/JsonLd";
import { breadcrumbSchema, localBusinessSchema } from "~/lib/schema";

export const metadata: Metadata = {
  title: "Hubungi Kami",
  description:
    "Hubungi Karang Taruna Mekar Jadi Dusun Domas. Kirim pertanyaan, saran, atau ajakan kerja sama melalui formulir kontak atau media sosial kami.",
  alternates: { canonical: "/contact" },
};

const pages = () => {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center gap-10 py-24 lg:flex-row lg:items-start lg:justify-evenly">
      <JsonLd
        data={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Hubungi Kami", path: "/contact" },
          ]),
        ]}
      />
      <div className="flex flex-col gap-2 px-4 md:items-center md:text-center lg:max-w-sm lg:items-start lg:pt-24 lg:text-start">
        <h1 className="font-display text-3xl font-bold lg:text-5xl">
          Hubungi <span className="text-merah">Kami</span>
        </h1>
        <p className="text-muted-foreground md:max-w-lg">
          Jika Anda memiliki pertanyaan atau ingin berkontribusi, jangan ragu
          untuk menghubungi kami. Kami siap mendengar dan bekerja sama demi
          kemajuan bersama.
        </p>
        <a
          href="mailto:kartarmj@gmail.com"
          className="text-muted-foreground hover:text-merah"
        >
          kartarmj@gmail.com
        </a>
        <div className="flex gap-3">
          <Link href="https://instagram.com/mekarjadi.offc">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-instagram"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </Link>
          <Link href="https://linktr.ee/kartarmj">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-link"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </Link>
          <Link href="https://youtube.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-youtube"
            >
              <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
              <path d="m10 15 5-3-5-3z" />
            </svg>
          </Link>
        </div>
      </div>
      <div className="w-[400px] rounded-lg bg-white p-4 text-black dark:bg-cyan-700 md:w-[600px] lg:w-[400px]">
        <FormContact />
      </div>
    </section>
  );
};

export default pages;
