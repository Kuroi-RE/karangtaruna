"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";
import { navigation } from "~/content/site";
import { cn } from "~/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const dark = resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground/20 bg-background">
      <nav
        aria-label="Navigasi utama"
        className="site-container flex min-h-16 items-center justify-between gap-4"
      >
        <Link
          href="/"
          className="group flex min-h-11 items-center font-display font-extrabold leading-none"
        >
          <span className="text-xl sm:text-2xl">MEKAR</span>
          <span className="text-xl text-accent sm:text-2xl">JADI</span>
          <span className="sr-only">, Karang Taruna Dusun Domas</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cn(
                "flex min-h-11 items-center border-b-2 px-3 font-display text-sm font-bold transition-colors",
                isActive(item.href)
                  ? "border-accent text-accent"
                  : "border-transparent text-foreground hover:border-primary hover:text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center border-2 border-foreground bg-background transition-colors hover:bg-secondary"
            onClick={() => setTheme(dark ? "light" : "dark")}
            aria-label={
              mounted && dark ? "Gunakan tema terang" : "Gunakan tema gelap"
            }
          >
            {mounted && dark ? (
              <Sun aria-hidden="true" />
            ) : (
              <Moon aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            className="flex h-11 items-center gap-2 border-2 border-foreground px-3 font-display text-sm font-bold lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            Menu
          </button>
        </div>
      </nav>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t-2 border-foreground bg-background lg:hidden"
        >
          <div className="site-container grid py-3">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "flex min-h-12 items-center border-b border-border font-display font-bold",
                  isActive(item.href) ? "text-accent" : "text-foreground",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
