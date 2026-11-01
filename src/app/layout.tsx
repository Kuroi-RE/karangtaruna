import "~/styles/globals.css";

import { Caveat, Inter, Plus_Jakarta_Sans } from "next/font/google";
import { type Metadata } from "next";
import Footer from "./features/components/Footer";
import Navbar from "./features/components/Navbar";
import JsonLd from "~/components/JsonLd";
import SmoothScroll from "~/components/SmoothScroll";
import { ThemeProvider } from "~/components/theme-provider";
import { organizationSchema, websiteSchema } from "~/lib/schema";
import { site, SITE_URL } from "~/content/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} | ${site.location}`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} | ${site.location}`,
    description: site.description,
    images: [
      {
        url: "/images/172024/1.jpg",
        alt: "Dokumentasi kegiatan Karang Taruna Mekarjadi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.location}`,
    description: site.description,
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
      className={`${inter.variable} ${jakarta.variable} ${caveat.variable}`}
    >
      <body suppressHydrationWarning>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <a className="skip-link" href="#konten-utama">
            Lewati ke konten utama
          </a>
          <SmoothScroll>
            <Navbar />
            <main id="konten-utama">{children}</main>
            <Footer />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
