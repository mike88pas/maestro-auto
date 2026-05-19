import { howItWorks } from "@/lib/copy";

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 border-t border-gold/15">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-4">
            <div className="caption section-number" data-num="05">
              Jak działamy
            </div>
            <h2 className="display text-[clamp(36px,5vw,56px)] mt-4">
              Cztery kroki. Jedenaście dni.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <p className="text-muted text-base leading-relaxed">
              Od pierwszej rozmowy do dostawy. Bez zbędnych wizyt w salonie. Bez handlowego targowania się. Z pełną transparencją procesu na każdym kroku.
            </p>
          </div>
        </div>

        <div className="space-y-px">
          {howItWorks.map((step) => (
            <div
              key={step.num}
              className="grid md:grid-cols-12 gap-8 py-10 border-t border-muted/20 group hover:border-gold/40 transition-colors"
            >
              <div className="md:col-span-2">
                <span className="display text-5xl text-gold tabular">
                  {step.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="display text-2xl">{step.title}</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-base text-muted leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-muted/20" />
        </div>
      </div>
    </section>
  );
}
