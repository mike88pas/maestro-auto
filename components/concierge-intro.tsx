import { concierge, microcopy } from "@/lib/copy";
import type { Theme } from "@/lib/theme";

export function ConciergeIntro({ theme }: { theme: Theme }) {
  const copy = concierge[theme];

  return (
    <section className="py-24 md:py-32 border-t border-gold/15 bg-accent/30">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="caption section-number" data-num="06">
              AI Concierge
            </div>
            <h2 className="display text-[clamp(36px,5vw,56px)] mt-4">
              {copy.headline}
            </h2>
            <p className="mt-6 text-base text-muted leading-relaxed max-w-md">
              {copy.sub}
            </p>

            <div className="mt-10">
              <a href="#concierge" className="btn-primary">
                {copy.cta}
              </a>
            </div>

            <p className="mt-8 text-xs text-muted/70 italic max-w-md leading-relaxed">
              {microcopy.conciergeDisclosure}
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-7">
            {/* Mock dialog */}
            <div className="border border-gold/20 p-8 md:p-10 bg-bg space-y-5">
              {copy.dialog.map((line, i) => {
                const [speaker, ...rest] = line.split(": ");
                const message = rest.join(": ");
                const isAssistant = speaker.toLowerCase().includes("asystent");
                return (
                  <div key={i} className={isAssistant ? "" : "pl-6 md:pl-12"}>
                    <div className="caption mb-1">{speaker}</div>
                    <div
                      className={
                        isAssistant
                          ? "text-ink text-base leading-relaxed"
                          : "text-muted text-base leading-relaxed italic"
                      }
                    >
                      {message}
                    </div>
                  </div>
                );
              })}
              <div className="pt-4 border-t border-muted/20 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="caption">Asystent online · odpowiedź w sekundach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
