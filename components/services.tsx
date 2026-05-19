import { services } from "@/lib/copy";
import { Reveal, RevealStagger, RevealItem } from "./ui/reveal";
import { GoldLine } from "./ui/gold-line";

export function Services() {
  return (
    <section className="py-28 md:py-36 border-t border-gold/15">
      <div className="container-x">
        <Reveal>
          <div className="caption mb-3 text-gold">— 08 · Usługi</div>
          <h2 className="display text-[clamp(40px,6vw,68px)] max-w-3xl leading-tight">
            Cztery sposoby, w jakie z nami pracujesz.
          </h2>
          <GoldLine className="w-16 mt-8" />
        </Reveal>

        <RevealStagger className="mt-16 grid md:grid-cols-2 gap-px bg-muted/15">
          {services.map((s, i) => (
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
                    {s.title}
                  </h3>
                  <p className="text-base text-ink/85 italic leading-relaxed">
                    {s.subhead}
                  </p>
                  <div className="hairline w-10" />
                  <p className="text-sm text-muted leading-relaxed">{s.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
