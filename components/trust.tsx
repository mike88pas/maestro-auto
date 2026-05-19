import { trust } from "@/lib/copy";
import { Reveal, RevealStagger, RevealItem } from "./ui/reveal";
import { GoldLine } from "./ui/gold-line";

export function Trust() {
  return (
    <section className="py-28 md:py-36 border-t border-gold/15">
      <div className="container-x">
        <Reveal>
          <div className="caption mb-3 text-gold">— 09 · Zaufanie</div>
          <h2 className="display text-[clamp(40px,6vw,68px)] max-w-3xl leading-tight">
            {trust.headline}
          </h2>
          <GoldLine className="w-16 mt-8" />
        </Reveal>

        <RevealStagger
          delayChildren={0.2}
          staggerChildren={0.15}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8 border-t border-gold/30 pt-14"
        >
          {trust.stats.map((s, i) => (
            <RevealItem key={i} className="space-y-4">
              <div className="display text-[clamp(56px,8vw,108px)] text-gold tabular leading-none">
                {s.number}
              </div>
              <div className="hairline w-10" />
              <div className="text-sm text-muted leading-snug max-w-[200px]">
                {s.label}
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
