import Link from "next/link";
import { nav, contact } from "@/lib/copy";
import type { Theme } from "@/lib/theme";

export function Nav({ theme }: { theme: Theme }) {
  const phone = contact[theme].phone;
  const brandLabel = theme === "velure" ? "VELURE" : "ATELIER 11";

  return (
    <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur-sm border-b border-gold/20">
      <div className="container-x flex items-center justify-between h-20">
        {/* Wordmark */}
        <Link
          href="/"
          className="display text-2xl tracking-[0.3em] hover:text-gold transition-colors"
          aria-label={`${brandLabel} — strona główna`}
        >
          {brandLabel}
        </Link>

        {/* Central nav (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-10">
          {nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[12px] tracking-wider-3 uppercase text-muted hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: phone + language */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={`tel:${phone.replace(/\s/g, "")}`}
            className="text-[12px] tracking-wider-2 text-ink hover:text-gold transition-colors tabular"
          >
            {phone}
          </a>
          <span className="text-[10px] tracking-wider-3 text-muted">PL · EN</span>
        </div>

        {/* Mobile: hamburger placeholder */}
        <button
          className="md:hidden text-ink p-2"
          aria-label="Menu"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
            <line x1="0" y1="1" x2="20" y2="1" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="1" />
            <line x1="0" y1="13" x2="20" y2="13" stroke="currentColor" strokeWidth="1" />
          </svg>
        </button>
      </div>
    </header>
  );
}
