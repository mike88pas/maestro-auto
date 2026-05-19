import { contact } from "@/lib/copy";
import type { Theme } from "@/lib/theme";

export function ContactCTA({ theme }: { theme: Theme }) {
  const copy = contact[theme];

  return (
    <section className="py-24 md:py-40 border-t border-gold/15 bg-accent/40">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left: headline + channels */}
          <div className="md:col-span-6">
            <div className="caption section-number" data-num="09">
              Kontakt
            </div>
            <h2 className="display text-[clamp(40px,6vw,72px)] mt-4">
              {copy.headline}
            </h2>
            <p className="mt-6 text-base text-muted leading-relaxed max-w-md">
              {copy.sub}
            </p>

            <div className="mt-12 space-y-5">
              <ContactChannel
                label="Telefon"
                value={copy.phone}
                href={`tel:${copy.phone.replace(/\s/g, "")}`}
              />
              <ContactChannel
                label="WhatsApp"
                value="Otwórz rozmowę →"
                href={`https://wa.me/${copy.phone.replace(/[^\d]/g, "")}`}
              />
              <ContactChannel
                label="Email"
                value={copy.email}
                href={`mailto:${copy.email}`}
              />
              <ContactChannel
                label="Spotkanie"
                value="Umów slot w kalendarzu →"
                href={process.env.NEXT_PUBLIC_CALCOM_URL ?? "#"}
              />
            </div>
          </div>

          {/* Right: form (secondary) */}
          <div className="md:col-span-5 md:col-start-8">
            <div className="caption mb-6">— lub napisz —</div>
            <form className="space-y-6" action="#" method="post">
              <div>
                <label className="caption block mb-2" htmlFor="name">
                  Imię
                </label>
                <input
                  id="name"
                  type="text"
                  className="field"
                  placeholder="Imię (opcjonalnie)"
                />
              </div>
              <div>
                <label className="caption block mb-2" htmlFor="phone">
                  Telefon
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="field"
                  placeholder="+48 …"
                />
              </div>
              <div>
                <label className="caption block mb-2" htmlFor="car">
                  Auto
                </label>
                <input
                  id="car"
                  type="text"
                  className="field"
                  placeholder="Marka, model, rok"
                />
              </div>
              <div>
                <label className="caption block mb-2" htmlFor="message">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  rows={3}
                  className="field resize-none"
                  placeholder="Opisz, czego szukasz"
                />
              </div>

              <button type="submit" className="btn-primary w-full md:w-auto">
                Wyślij zapytanie
              </button>

              <p className="text-xs text-muted/70 leading-relaxed">
                Wysyłając zgadzasz się na kontakt zwrotny w celu obsługi zapytania.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactChannel({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="grid grid-cols-[100px_1fr] items-baseline gap-6 py-3 border-b border-muted/20 hover:border-gold transition-colors group"
    >
      <span className="caption text-muted group-hover:text-gold transition-colors">
        {label}
      </span>
      <span className="text-ink text-base tabular group-hover:text-gold transition-colors">
        {value}
      </span>
    </a>
  );
}
