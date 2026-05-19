import { formatMileage, formatPrice } from "@/lib/utils";
import { flagEmoji, microcopy, type InventoryCard as InventoryCardT } from "@/lib/copy";

export function InventoryCard({ card }: { card: InventoryCardT }) {
  return (
    <article className="card group cursor-pointer">
      {/* Image */}
      <div className="card-image aspect-[16/9] bg-accent/60 relative overflow-hidden">
        {/* Placeholder gradient until real image lands */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, var(--accent) 0%, color-mix(in srgb, var(--gold-deep) 25%, var(--bg)) 50%, var(--bg) 100%)`,
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="caption text-muted/40">
            {card.marka} · {card.model}
          </span>
        </div>

        {/* Top overlay: flag + verified badge */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
          <span className="text-base" title={`Origin: ${card.origin}`}>
            {flagEmoji[card.origin]}
          </span>
          {card.verified && <span className="badge-11">11/11</span>}
        </div>
      </div>

      {/* Meta */}
      <div className="pt-6 pb-2 px-1">
        <div className="caption mb-2">{card.marka}</div>
        <h3 className="display text-[clamp(20px,2vw,26px)] leading-snug mb-3">
          {card.model}
        </h3>
        <div className="flex items-center gap-3 text-sm text-muted tabular">
          <span>{card.rok}</span>
          <span>·</span>
          <span>{formatMileage(card.przebieg)}</span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div className="hairline w-1/4 mb-2" />
          <div className="text-right">
            {card.cena === null ? (
              <span className="display italic text-gold text-lg">
                Cena na zapytanie
              </span>
            ) : (
              <span className="tabular text-ink">
                {formatPrice(card.cena)}
              </span>
            )}
          </div>
        </div>

        <a
          href={`/kolekcja/${card.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-[12px] tracking-wider-3 uppercase text-muted hover:text-gold transition-colors"
        >
          {microcopy.ctaInquiry}
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}
