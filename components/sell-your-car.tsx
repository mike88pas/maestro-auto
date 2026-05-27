import { sellYourCar } from "@/lib/copy";
import { Reveal, RevealStagger, RevealItem } from "./ui/reveal";
import { GoldLine } from "./ui/gold-line";

export function SellYourCar() {
  return (
    <section
      id="sprzedaz"
      className="py-28 md:py-36 border-t border-gold/15"
    >
      <div className="container-x">
        <Reveal>
          <div className="caption mb-3 text-gold">{sellYourCar.caption}</div>
          <h2 className="display text-[clamp(40px,6vw,68px)] max-w-3xl leading-tight">
            {sellYourCar.title}
          </h2>
          <GoldLine className="w-16 mt-8" />
          <p className="mt-8 text-base md:text-lg text-muted max-w-2xl leading-relaxed italic">
            {sellYourCar.intro}
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid md:grid-cols-2 gap-px bg-muted/15">
          {sellYourCar.options.map((o, i) => (
            <RevealItem
              key={i}
              className="bg-bg p-10 md:p-14 group hover:bg-accent/50 transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <span className="display text-3xl text-gold tabular leading-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 space-y-4">
                  <h3 className="display text-2xl md:text-3xl group-hover:text-gold/95 transition-colors">
                    {o.title}
                  </h3>
                  <p className="text-base text-ink/85 italic leading-relaxed">
                    {o.subhead}
                  </p>
                  <div className="hairline w-10" />
                  <p className="text-sm text-muted leading-relaxed">{o.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal>
          <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-12 border-t border-muted/15">
            <p className="caption text-muted">{sellYourCar.ctaCaption}</p>
            <div className="flex flex-wrap items-center gap-6 md:gap-8">
              <a href="#kontakt" className="btn-primary">
                <span>{sellYourCar.ctaPrimary}</span>
              </a>
              <a
                href={`tel:${sellYourCar.ctaSecondary.replace(/\s/g, "")}`}
                className="btn-secondary"
              >
                {sellYourCar.ctaSecondary}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
