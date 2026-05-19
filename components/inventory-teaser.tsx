import { inventoryTeaser } from "@/lib/copy";
import { InventoryCard } from "./inventory-card";
import { Reveal } from "./ui/reveal";
import { GoldLine } from "./ui/gold-line";

export function InventoryTeaser() {
  return (
    <section
      id="kolekcja"
      className="py-28 md:py-36 border-t border-gold/15"
    >
      <div className="container-x">
        <div className="flex items-end justify-between mb-20 flex-wrap gap-8">
          <Reveal className="max-w-3xl">
            <div className="caption mb-3 text-gold">— 03 · Kolekcja</div>
            <h2 className="display text-[clamp(40px,6vw,72px)] leading-tight">
              Sześć aut. Sześć decyzji.<br />
              <span className="text-gold/90 italic">Jedna kuracja.</span>
            </h2>
            <GoldLine className="w-16 mt-8" />
            <p className="mt-8 text-muted text-base md:text-lg max-w-xl leading-relaxed">
              Wybrane sztuki tygodnia. Pełna kolekcja — wraz z aukcjami off-market — w prywatnej strefie klienta.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="/kolekcja" className="btn-secondary">
              Cała kolekcja →
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {inventoryTeaser.map((card, i) => (
            <InventoryCard key={card.slug} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
