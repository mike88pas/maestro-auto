import Link from "next/link";
import { footer as footerCopy, contact } from "@/lib/copy";
import type { Theme } from "@/lib/theme";

export function Footer({ theme }: { theme: Theme }) {
  const brand = theme === "velure" ? "VELURE" : "ATELIER 11";
  const tagline = footerCopy[theme].tagline;
  const c = contact[theme];

  return (
    <footer className="border-t border-gold/30 pt-20 pb-12 bg-bg">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand block */}
          <div className="md:col-span-4 space-y-4">
            <div className="display text-2xl tracking-[0.3em]">{brand}</div>
            <p className="text-sm text-muted max-w-xs leading-relaxed">
              Prywatny broker aut super-luxury. Polska i świat.
            </p>
            <div className="pt-6 space-y-2">
              <a
                href={`tel:${c.phone.replace(/\s/g, "")}`}
                className="block text-sm text-ink hover:text-gold transition-colors tabular"
              >
                {c.phone}
              </a>
              <a
                href={`mailto:${c.email}`}
                className="block text-sm text-muted hover:text-gold transition-colors"
              >
                {c.email}
              </a>
            </div>
          </div>

          {/* Link columns */}
          <FooterCol
            title="Kolekcja"
            links={[
              { href: "/kolekcja", label: "Wszystkie auta" },
              { href: "/kolekcja?brand=ferrari", label: "Ferrari" },
              { href: "/kolekcja?brand=porsche", label: "Porsche" },
              { href: "/kolekcja?brand=range-rover", label: "Range Rover" },
            ]}
          />

          <FooterCol
            title="Usługi"
            links={[
              { href: "/uslugi/broker", label: "Broker" },
              { href: "/uslugi/import", label: "Import" },
              { href: "/uslugi/wycena", label: "Wycena" },
              { href: "/uslugi/trade-in", label: "Trade-in" },
            ]}
          />

          <FooterCol
            title="O nas"
            links={[
              { href: "/o-nas", label: "Manifest" },
              { href: "/o-nas/zespol", label: "Zespół" },
              { href: "/dziennik", label: "Dziennik" },
              { href: "/kontakt", label: "Kontakt" },
            ]}
          />

          <FooterCol
            title="Prawne"
            links={[
              { href: "/prawne/polityka-prywatnosci", label: "Polityka prywatności" },
              { href: "/prawne/regulamin", label: "Regulamin" },
              { href: "/prawne/cookies", label: "Cookies" },
              { href: "/prawne/rekojmia", label: "Rękojmia" },
            ]}
          />
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-muted/20 flex flex-wrap items-center justify-between gap-4">
          <p className="caption text-muted">
            © 2026 {brand} · Wszystkie prawa zastrzeżone · NIP PL XXXXXXXXXX
          </p>
          <p className={theme === "velure" ? "display italic text-gold text-base" : "caption text-gold"}>
            {tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div className="md:col-span-2 space-y-4">
      <div className="caption text-gold">{title}</div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
