import Link from "next/link";
import { navigation, site } from "~/content/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-foreground bg-foreground text-background">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.2fr_1fr] lg:py-16">
        <div className="max-w-xl">
          <p className="font-display text-3xl font-extrabold sm:text-4xl">
            MEKAR<span className="text-accent">JADI</span>
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-background/80 sm:text-base">
            Ruang informasi organisasi, kegiatan, dan keanggotaan Karang Taruna
            di Dusun Domas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="font-display font-bold">Jelajahi</h2>
            <ul className="mt-3 space-y-1">
              {navigation.slice(1).map((item) => (
                <li key={item.href}>
                  <Link
                    className="flex min-h-11 items-center text-sm text-background/80 hover:text-background"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display font-bold">Kanal resmi</h2>
            <ul className="mt-3 space-y-1">
              <li>
                <a
                  className="flex min-h-11 items-center text-sm text-background/80 hover:text-background"
                  href={site.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="flex min-h-11 items-center text-sm text-background/80 hover:text-background"
                  href={site.linktree}
                  target="_blank"
                  rel="noreferrer"
                >
                  Linktree
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20">
        <div className="site-container py-5 text-sm text-background/70">
          © {new Date().getFullYear()} {site.name}, {site.location}.
        </div>
      </div>
    </footer>
  );
}
