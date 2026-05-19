import { hero } from "@/lib/copy";
import type { Theme } from "@/lib/theme";

export function Hero({ theme }: { theme: Theme }) {
  const copy = hero[theme];
  const isVelure = theme === "velure";

  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden">
      {/* Background photo placeholder — gradient until OpenArt assets land */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background: isVelure
            ? `radial-gradient(ellipse 60% 70% at 70% 50%, color-mix(in srgb, var(--gold-deep) 18%, transparent) 0%, transparent 60%), linear-gradient(180deg, var(--bg) 0%, var(--accent) 70%, var(--bg) 100%)`
            : `linear-gradient(135deg, var(--bg) 0%, var(--accent) 50%, var(--bg) 100%)`,
        }}
      />

      {/* Hairline grid overlay (Atelier 11 only) */}
      {!isVelure && (
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--ink) 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 100%",
          }}
        />
      )}

      <div className="container-x w-full pb-20 pt-32">
        <div className={isVelure ? "max-w-3xl" : "grid md:grid-cols-12 gap-8 items-end"}>
          <div className={isVelure ? "" : "md:col-span-7"}>
            {/* Caption above headline (A11 only) */}
            {!isVelure && (
              <p className="caption mb-6">— Atelier 11 — Concierge super-luxury</p>
            )}

            <h1 className="display text-[clamp(48px,9vw,112px)]">
              {copy.headline}
            </h1>

            <p className="mt-8 text-[clamp(16px,1.6vw,20px)] text-ink/85 max-w-2xl leading-relaxed">
              {copy.sub}
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a href="/kontakt" className="btn-primary">
                {copy.ctaPrimary}
              </a>
              <a href="/kolekcja" className="btn-secondary">
                {copy.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Right side spec (A11 only) */}
          {!isVelure && (
            <div className="hidden md:block md:col-span-5">
              <div className="border-l border-gold/30 pl-8 py-4 space-y-6">
                <div>
                  <div className="caption text-gold">— 11 punktów —</div>
                  <p className="text-sm text-muted mt-2">
                    Mechanika · dokumenty · proweniencja · historia · lakier · numery · własność · leasing · hipoteka · zastawy · VIN
                  </p>
                </div>
                <div>
                  <div className="caption text-gold">— 6 krajów —</div>
                  <p className="text-sm text-muted mt-2">
                    🇵🇱 Polska · 🇮🇹 Włochy · 🇩🇪 Niemcy · 🇨🇭 Szwajcaria · 🇦🇪 ZEA · 🇯🇵 Japonia
                  </p>
                </div>
                <div>
                  <div className="caption text-gold">— 11 dni —</div>
                  <p className="text-sm text-muted mt-2">Od decyzji do garażu.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Hairline bottom — Velure */}
        {isVelure && (
          <div className="mt-20 flex items-center gap-6">
            <div className="hairline flex-1 max-w-[120px]" />
            <span className="caption">— Polska · Włochy · Niemcy · Szwajcaria · ZEA · Japonia</span>
          </div>
        )}
      </div>
    </section>
  );
}
