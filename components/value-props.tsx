import { valueProps } from "@/lib/copy";
import { Reveal, RevealStagger, RevealItem } from "./ui/reveal";
import { GoldLine } from "./ui/gold-line";

export function ValueProps() {
  return (
    <section className="py-28 md:py-36 border-t border-gold/15">
      <div className="container-x">
        <Reveal>
          <div className="caption mb-3 text-gold">— 04</div>
          <h2 className="display text-[clamp(36px,5vw,56px)] max-w-3xl">
            Cztery filary. Jedna umowa.
          </h2>
          <GoldLine className="w-16 mt-8" />
        </Reveal>

        <RevealStagger className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {valueProps.map((p, i) => (
            <RevealItem key={i} className="space-y-5">
              <div className="caption text-gold tabular">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="display text-[clamp(22px,2.2vw,28px)] leading-snug">
                {p.title}
              </h3>
              <div className="hairline w-10" />
              <p className="text-sm text-muted leading-relaxed">{p.body}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
