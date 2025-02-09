"use client";

import * as React from "react";
import Link from "next/link";
import { AlignJustify, ChevronDown, X } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Image from "next/image";

export default function Navbar() {
  const [selectedTheme, setSelectedTheme] = React.useState<string | null>(
    "dark",
  );
  const [isOpen, setIsOpen] = React.useState(false);
  const { setTheme } = useTheme();

  return (
    <nav className="fixed z-50 h-16 w-full bg-background shadow-md">
      <div className="container !mx-5 flex h-full items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex gap-2 text-xl font-bold">
          <Image src="/favicon.ico" width={40} height={40} alt="logo" />
          <span className="max-w-3.5 text-sm">Karang Taruna</span>
        </Link>

        {/* Menu desktop */}
        <div className="mr-20 hidden gap-6 md:flex md:items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <h1 className="inline-flex cursor-pointer font-semibold">
                Theme <ChevronDown />
              </h1>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem
                checked={selectedTheme === "dark"}
                onCheckedChange={() => {
                  setSelectedTheme("dark");
                  setTheme("dark");
                }}
              >
                Dark
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={selectedTheme === "light"}
                onCheckedChange={() => {
                  setSelectedTheme("light");
                  setTheme("light");
                }}
              >
                Light
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            className="!font-semibold transition-colors hover:!text-blue-300"
            href="#about"
          >
            Tentang Kita
          </Link>
          <Link
            className="!font-semibold transition-colors hover:!text-blue-300"
            href="#kegiatan"
          >
            Kegiatan
          </Link>
          <Link
            className="!font-semibold transition-colors hover:!text-blue-300"
            href="#gallery"
          >
            Gallery
          </Link>
        </div>

        {/* Toggle Menu (Mobile) */}
        <button
          onClick={() => setIsOpen(true)}
          className="!pr-10 text-gray-700 focus:outline-none md:hidden"
        >
          <AlignJustify size={28} />
        </button>
      </div>

      {/* Fullscreen Mobile Menu dengan Animasi */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 space-y-6 bg-background transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        <div className="absolute left-5 top-14 flex gap-2 font-bold">
          <Image src="/favicon.ico" width={40} height={40} alt="logo" />
          <span className="max-w-3.5 text-sm">Karang Taruna</span>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-gray-700 focus:outline-none"
        >
          <X size={32} />
        </button>

        <Link
          onClick={() => setIsOpen(false)}
          className="!font-semibold transition-colors hover:!text-blue-300"
          href="#about"
        >
          Tentang Kita
        </Link>

        <Link
          onClick={() => setIsOpen(false)}
          className="!font-semibold transition-colors hover:!text-blue-300"
          href="#kegiatan"
        >
          Kegiatan
        </Link>

        <Link
          onClick={() => setIsOpen(false)}
          className="!font-semibold transition-colors hover:!text-blue-300"
          href="#gallery"
        >
          Gallery
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h1 className="inline-flex cursor-pointer font-semibold">
              Theme <ChevronDown />
            </h1>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={selectedTheme === "dark"}
              onCheckedChange={() => {
                setSelectedTheme("dark");
                setTheme("dark");
              }}
            >
              Dark
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={selectedTheme === "light"}
              onCheckedChange={() => {
                setSelectedTheme("light");
                setTheme("light");
              }}
            >
              Light
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
