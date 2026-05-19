import { trust } from "@/lib/copy";
import type { Theme } from "@/lib/theme";

export function Trust({ theme }: { theme: Theme }) {
  const copy = trust[theme];

  return (
    <section className="py-24 md:py-32 border-t border-gold/15">
      <div className="container-x">
        <div className="caption section-number mb-4" data-num="08">
          Zaufanie
        </div>
        <h2 className="display text-[clamp(36px,5vw,56px)] max-w-3xl mb-16">
          {copy.headline}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 border-t border-gold/30 pt-12">
          {copy.stats.map((s, i) => (
            <div key={i} className="space-y-3">
              <div className="display text-[clamp(48px,6vw,80px)] text-gold tabular leading-none">
                {s.number}
              </div>
              <div className="hairline w-8" />
              <div className="text-sm text-muted leading-snug max-w-[180px]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
