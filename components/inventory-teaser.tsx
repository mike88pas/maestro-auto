import { inventoryTeaser } from "@/lib/copy";
import { InventoryCard } from "./inventory-card";

export function InventoryTeaser() {
  return (
    <section className="py-24 md:py-32 border-t border-gold/15">
      <div className="container-x">
        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
          <div>
            <div className="caption section-number" data-num="03">
              Kolekcja
            </div>
            <h2 className="display text-[clamp(36px,5vw,64px)] mt-4 max-w-2xl">
              Wybrane auta dostępne w tym tygodniu.
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md">
              Pełna kolekcja w prywatnej strefie klienta.
            </p>
          </div>
          <a href="/kolekcja" className="btn-secondary">
            Cała kolekcja
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {inventoryTeaser.map((card) => (
            <InventoryCard key={card.slug} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
