import "~/styles/globals.css";

import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { type Metadata } from "next";

import { ThemeProvider } from "~/components/theme-provider";
import SmoothScroll from "~/components/SmoothScroll";
import Navbar from "./features/components/Navbar";
import Footer from "./features/components/Footer";
import { Toaster } from "~/components/ui/toaster";
import JsonLd from "~/components/JsonLd";
import { organizationSchema, websiteSchema } from "~/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const SITE_URL = "https://mekarjadi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Karang Taruna Mekar Jadi — Dusun Domas",
    template: "%s | Karang Taruna Mekar Jadi",
  },
  description:
    "Karang Taruna Mekar Jadi adalah organisasi kepemudaan Dusun Domas, Desa Domas. Wadah pemuda-pemudi untuk berkarya, berkegiatan, dan membangun masyarakat yang mandiri dan sejahtera.",
  keywords: [
    "Karang Taruna",
    "Karang Taruna Mekar Jadi",
    "Dusun Domas",
    "Desa Domas",
    "organisasi pemuda",
    "kegiatan pemuda Domas",
  ],
  authors: [{ name: "Karang Taruna Mekar Jadi" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Karang Taruna Mekar Jadi",
    title: "Karang Taruna Mekar Jadi — Dusun Domas",
    description:
      "Organisasi kepemudaan Dusun Domas. Berkarya, berkegiatan, dan membangun masyarakat bersama.",
    images: [
      {
        url: "/images/172024/1.jpg",
        alt: "Karang Taruna Mekar Jadi - Dusun Domas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Karang Taruna Mekar Jadi — Dusun Domas",
    description:
      "Organisasi kepemudaan Dusun Domas. Berkarya, berkegiatan, dan membangun masyarakat bersama.",
    images: ["/images/172024/1.jpg"],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <body suppressHydrationWarning>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Navbar />
            <main>{children}</main>
            <Toaster />
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
