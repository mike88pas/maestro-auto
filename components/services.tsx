import { services } from "@/lib/copy";

export function Services() {
  return (
    <section className="py-24 md:py-32 border-t border-gold/15">
      <div className="container-x">
        <div className="caption section-number mb-4" data-num="07">
          Usługi
        </div>
        <h2 className="display text-[clamp(36px,5vw,56px)] mb-16 max-w-3xl">
          Cztery sposoby, w jakie z nami pracujesz.
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-muted/15">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-bg p-10 md:p-14 group hover:bg-accent/40 transition-colors"
            >
              <div className="flex items-start gap-6">
                <span className="display text-3xl text-gold tabular">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <h3 className="display text-2xl mb-3">{s.title}</h3>
                  <p className="text-base text-ink/85 italic mb-4">
                    {s.subhead}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{s.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
