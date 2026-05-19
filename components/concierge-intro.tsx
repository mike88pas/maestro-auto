import { concierge, microcopy } from "@/lib/copy";
import { Reveal } from "./ui/reveal";
import { GoldLine } from "./ui/gold-line";

export function ConciergeIntro() {
  return (
    <section className="relative py-28 md:py-36 border-t border-gold/15 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 50%, color-mix(in srgb, var(--gold-deep) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <Reveal>
              <div className="caption mb-3 text-gold">— 07</div>
              <h2 className="display text-[clamp(36px,5vw,56px)] leading-tight">
                {concierge.headline}
              </h2>
              <GoldLine className="w-16 mt-8" />
              <p className="mt-8 text-base text-muted leading-relaxed max-w-md">
                {concierge.sub}
              </p>

              <div className="mt-10">
                <a href="#concierge" className="btn-primary">
                  {concierge.cta}
                </a>
              </div>

              <p className="mt-8 text-xs text-muted/70 italic max-w-md leading-relaxed">
                {microcopy.conciergeDisclosure}
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <Reveal delay={0.2}>
              <div className="border border-gold/25 bg-accent/40 backdrop-blur-sm">
                <div className="px-6 py-4 border-b border-gold/15 flex items-center justify-between">
                  <span className="caption text-gold">Asystent Velure</span>
                  <span className="inline-flex items-center gap-2 text-[10px] text-muted tracking-wider-2 uppercase">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-60 animate-ping" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
                    </span>
                    Online
                  </span>
                </div>
                <div className="p-8 md:p-10 space-y-5">
                  {concierge.dialog.map((line, i) => {
                    const [speaker, ...rest] = line.split(": ");
                    const message = rest.join(": ");
                    const isAssistant = speaker.toLowerCase().includes("asystent");
                    return (
                      <div
                        key={i}
                        className={isAssistant ? "" : "pl-6 md:pl-12"}
                      >
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
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
