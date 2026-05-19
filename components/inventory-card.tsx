"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { formatMileage, formatPrice } from "@/lib/utils";
import { flagEmoji, microcopy, type InventoryCard as InventoryCardT } from "@/lib/copy";
import { SigilBadge } from "./ui/sigil";

export function InventoryCard({ card, index = 0 }: { card: InventoryCardT; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <a href={`/kolekcja/${card.slug}`} className="block">
        {/* Image stack with hover crossfade */}
        <div className="relative aspect-[16/10] overflow-hidden bg-accent">
          <Image
            src={card.image}
            alt={`${card.marka} ${card.model}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            quality={85}
          />
          <Image
            src={card.imageAlt}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
            quality={85}
            aria-hidden
          />

          {/* Subtle gradient bottom for badge readability */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-bg/30"
          />

          {/* Top overlay: flag + sigil badge */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between z-10">
            <span
              className="inline-flex items-center gap-2 text-base bg-bg/60 backdrop-blur-sm px-2 py-1 border border-gold/20"
              title={`Origin: ${card.origin}`}
            >
              <span>{flagEmoji[card.origin]}</span>
              <span className="text-[10px] tracking-[0.18em] uppercase text-ink/90">
                {card.origin}
              </span>
            </span>
            {card.verified && <SigilBadge />}
          </div>

          {/* Hover overlay: explore arrow */}
          <div className="absolute bottom-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="inline-flex items-center justify-center w-12 h-12 border border-gold bg-bg/80 backdrop-blur-sm text-gold group-hover:bg-gold group-hover:text-bg transition-colors duration-300">
              →
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="pt-7 pb-2">
          <div className="caption text-gold mb-2">{card.marka}</div>
          <h3 className="display text-[clamp(22px,2.2vw,28px)] leading-tight mb-3 group-hover:text-gold/95 transition-colors">
            {card.model}
          </h3>

          <div className="flex items-center gap-3 text-sm text-muted tabular">
            <span>{card.rok}</span>
            <span className="text-gold/50">·</span>
            <span>{formatMileage(card.przebieg)}</span>
            <span className="text-gold/50">·</span>
            <span>{flagEmoji[card.origin]}</span>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4 pt-5 border-t border-muted/15">
            <span className="caption text-muted">Wycena</span>
            <div className="text-right">
              {card.cena === null ? (
                <span className="display italic text-gold text-xl">
                  Cena na zapytanie
                </span>
              ) : (
                <span className="tabular text-ink text-lg font-medium">
                  {formatPrice(card.cena)}
                </span>
              )}
            </div>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-muted group-hover:text-gold transition-colors">
            <span>{microcopy.ctaInquiry}</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </a>
    </motion.article>
  );
}
