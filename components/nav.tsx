import Link from "next/link";
import { nav, contact } from "@/lib/copy";
import { BRAND } from "@/lib/theme";
import { Sigil } from "./ui/sigil";

export function Nav() {
  const phone = contact.phone;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-bg/70 backdrop-blur-md border-b border-gold/15">
      <div className="container-x flex items-center justify-between h-20">
        {/* Wordmark + sigil */}
        <Link
          href="/"
          className="group flex items-center gap-3 hover:text-gold transition-colors"
          aria-label={`${BRAND.wordmark} — strona główna`}
        >
          <Sigil className="h-6 w-6 text-gold transition-transform group-hover:rotate-3" />
          <span className="display text-xl md:text-2xl tracking-[0.4em]">
            {BRAND.wordmark}
          </span>
        </Link>

        {/* Central nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[11px] tracking-wider-3 uppercase text-muted hover:text-ink transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          ))}
        </nav>

        {/* Right: phone + lang */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="text-[12px] tracking-wider-2 text-ink hover:text-gold transition-colors tabular"
          >
            {phone}
          </a>
          <span className="caption text-muted/60">PL · EN</span>
        </div>

        <button className="md:hidden text-ink p-2" aria-label="Menu">
          <svg width="22" height="14" viewBox="0 0 22 14" fill="none">
            <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" />
            <line x1="0" y1="7" x2="22" y2="7" stroke="currentColor" />
            <line x1="0" y1="13" x2="22" y2="13" stroke="currentColor" />
          </svg>
        </button>
      </div>
    </header>
  );
}
