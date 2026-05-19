import { howItWorks } from "@/lib/copy";
import { Reveal, RevealStagger, RevealItem } from "./ui/reveal";
import { GoldLine } from "./ui/gold-line";

export function HowItWorks() {
  return (
    <section className="py-28 md:py-36 border-t border-gold/15 bg-accent/30">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-4">
            <Reveal>
              <div className="caption mb-3 text-gold">— 05</div>
              <h2 className="display text-[clamp(36px,5vw,56px)] leading-tight">
                Cztery kroki.<br />Jedenaście dni.
              </h2>
              <GoldLine className="w-16 mt-8" />
            </Reveal>
          </div>
          <div className="md:col-span-7 md:col-start-6 self-end">
            <Reveal delay={0.15}>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                Od pierwszej rozmowy do dostawy. Bez zbędnych wizyt w salonie. Bez handlowego targowania się. Z pełną transparencją procesu na każdym kroku.
              </p>
            </Reveal>
          </div>
        </div>

        <RevealStagger className="space-y-0">
          {howItWorks.map((step, i) => (
            <RevealItem
              key={step.num}
              className={`grid md:grid-cols-12 gap-8 py-10 ${i > 0 ? "border-t border-muted/15" : ""} group hover:border-gold/40 transition-colors`}
            >
              <div className="md:col-span-2 flex items-baseline gap-3">
                <span className="display text-6xl text-gold tabular leading-none">
                  {step.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="display text-2xl group-hover:text-gold transition-colors">{step.title}</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-base text-muted leading-relaxed">{step.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
