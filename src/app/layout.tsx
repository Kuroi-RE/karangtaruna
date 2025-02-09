import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";

import { ThemeProvider } from "~/components/theme-provider";
import Navbar from "./features/components/Navbar";
import Footer from "./features/components/Footer";
import { Toaster } from "~/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Karang Taruna",
  description: "Karang Taruna: Mekar Jadi Desa Domas",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>

          <Toaster />

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
