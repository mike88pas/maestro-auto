import { manifest } from "@/lib/copy";
import { Reveal } from "./ui/reveal";
import { GoldLine } from "./ui/gold-line";

export function Manifest() {
  return (
    <section
      id="manifest"
      className="relative py-32 md:py-44 overflow-hidden"
    >
      {/* Subtle background vignette */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 30%, color-mix(in srgb, var(--gold-deep) 12%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            <Reveal>
              <div className="caption mb-4">— 02</div>
              <h2 className="display text-3xl text-gold/80">Manifest</h2>
              <GoldLine className="w-12 mt-6" />
            </Reveal>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <Reveal delay={0.1}>
              <p className="display italic text-[clamp(22px,2.6vw,34px)] leading-[1.35] text-ink/90 max-w-4xl">
                {manifest.split("Polujemy")[0]}
                <span className="text-gold">Polujemy{manifest.split("Polujemy")[1]?.split("Sprawdzamy")[0]}</span>
                Sprawdzamy{manifest.split("Sprawdzamy")[1]}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
