import { valueProps } from "@/lib/copy";
import type { Theme } from "@/lib/theme";

export function ValueProps({ theme }: { theme: Theme }) {
  const props = valueProps[theme];

  return (
    <section className="py-24 md:py-32 border-t border-gold/15">
      <div className="container-x">
        <div className="caption section-number mb-12" data-num="04">
          Wartości
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {props.map((p, i) => (
            <div key={i} className="space-y-4">
              <div className="caption text-gold tabular">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="display text-[clamp(22px,2.2vw,28px)] leading-snug">
                {p.title}
              </h3>
              <div className="hairline w-12" />
              <p className="text-sm text-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
