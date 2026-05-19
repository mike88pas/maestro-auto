import { manifest } from "@/lib/copy";
import type { Theme } from "@/lib/theme";

export function Manifest({ theme }: { theme: Theme }) {
  return (
    <section className="py-24 md:py-40 border-t border-gold/15">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <div className="caption section-number" data-num="02">
              Manifest
            </div>
          </div>
          <div className="md:col-span-10 max-w-4xl">
            <p
              className={
                theme === "velure"
                  ? "display text-[clamp(24px,3vw,36px)] italic leading-snug text-ink/90"
                  : "display text-[clamp(24px,3vw,36px)] leading-snug text-ink/90"
              }
            >
              {manifest[theme]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
