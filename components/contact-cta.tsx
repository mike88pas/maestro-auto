import { contact } from "@/lib/copy";
import { Reveal } from "./ui/reveal";
import { GoldLine } from "./ui/gold-line";

export function ContactCTA() {
  return (
    <section
      id="kontakt"
      className="relative py-28 md:py-40 border-t border-gold/15 bg-accent/40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, color-mix(in srgb, var(--gold-deep) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
          <div className="md:col-span-6">
            <Reveal>
              <div className="caption mb-3 text-gold">— 10 · Kontakt</div>
              <h2 className="display text-[clamp(48px,7vw,96px)] leading-[0.95]">
                {contact.headline}
              </h2>
              <GoldLine className="w-16 mt-8" />
              <p className="mt-8 text-base md:text-lg text-muted leading-relaxed max-w-md">
                {contact.sub}
              </p>

              <div className="mt-14 space-y-4">
                <ContactChannel
                  label="Telefon"
                  value={contact.phone}
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                />
                <ContactChannel
                  label="WhatsApp"
                  value="Otwórz rozmowę →"
                  href={`https://wa.me/${contact.phone.replace(/[^\d]/g, "")}`}
                />
                <ContactChannel
                  label="Email"
                  value={contact.email}
                  href={`mailto:${contact.email}`}
                />
                <ContactChannel
                  label="Spotkanie"
                  value="Umów slot w kalendarzu →"
                  href={process.env.NEXT_PUBLIC_CALCOM_URL ?? "#"}
                />
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={0.2}>
              <div className="border border-gold/20 bg-bg/60 backdrop-blur-sm p-8 md:p-10">
                <div className="caption mb-6 text-gold">— lub napisz</div>
                <form className="space-y-6" action="#" method="post">
                  <Field id="name" label="Imię" placeholder="Imię (opcjonalnie)" />
                  <Field id="phone" type="tel" required label="Telefon" placeholder="+48 …" />
                  <Field id="car" label="Auto" placeholder="Marka, model, rok" />
                  <FieldTextarea id="message" label="Wiadomość" placeholder="Opisz, czego szukasz" />

                  <button type="submit" className="btn-primary w-full md:w-auto group">
                    <span>Wyślij zapytanie</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>

                  <p className="text-xs text-muted/70 leading-relaxed">
                    Wysyłając zgadzasz się na kontakt zwrotny w celu obsługi zapytania.
                  </p>
                </form>
              </div>
            </Reveal>
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
      className="grid grid-cols-[110px_1fr] items-baseline gap-6 py-4 border-b border-muted/20 hover:border-gold transition-colors duration-300 group"
    >
      <span className="caption text-muted group-hover:text-gold transition-colors">
        {label}
      </span>
      <span className="text-ink text-base md:text-lg tabular group-hover:text-gold transition-colors">
        {value}
      </span>
    </a>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="caption block mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="field"
        placeholder={placeholder}
      />
    </div>
  );
}

function FieldTextarea({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="caption block mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        rows={3}
        className="field resize-none"
        placeholder={placeholder}
      />
    </div>
  );
}
