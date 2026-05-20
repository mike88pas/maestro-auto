"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero, contact } from "@/lib/copy";
import { Sigil } from "./ui/sigil";

const HERO_PRIMARY = "/placeholders/velure/hero-vault.webp";
const HERO_ALT = "/placeholders/velure/hero-alt.webp";

export function Hero() {
  return (
    <section
      className="relative h-screen h-[100svh] min-h-[520px] w-full overflow-hidden flex flex-col"
    >
      {/* Background — dual-layer crossfade with ken-burns. Plain div so image is guaranteed visible even if framer-motion hydration fails. */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1 — primary, always present, ken-burns 18s */}
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_PRIMARY}
            alt=""
            fill
            priority
            quality={92}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Layer 2 — alt, fades in 8-10s, holds 10-18s, fades out 18-20s, cycle 20s */}
        <motion.div
          animate={{ opacity: [0, 0, 1, 1, 0, 0], scale: [1.05, 1, 1.05] }}
          transition={{
            opacity: {
              duration: 20,
              repeat: Infinity,
              times: [0, 0.4, 0.5, 0.9, 1, 1],
              ease: "easeInOut",
            },
            scale: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute inset-0"
        >
          <Image
            src={HERO_ALT}
            alt=""
            fill
            quality={92}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>

        {/* Vignette — softer than before, lets photo breathe while keeping headline contrast */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 110% 75% at 50% 45%, transparent 0%, color-mix(in srgb, var(--bg) 18%, transparent) 95%),
              linear-gradient(180deg, color-mix(in srgb, var(--bg) 18%, transparent) 0%, transparent 18%, transparent 55%, color-mix(in srgb, var(--bg) 55%, transparent) 90%, var(--bg) 100%)
            `,
          }}
        />
      </div>

      {/* Top bar — sigil + caption left, established marker right. In flow so it cannot overlap with bottom copy on short viewports. */}
      <div className="relative z-10 pt-0 md:pt-24 pointer-events-none">
        <div className="container-x flex items-start justify-between">
          <div className="hidden md:flex items-center gap-3">
            <Sigil className="h-8 w-8 text-gold" />
            <span className="caption text-gold/85 tracking-[0.24em]">
              Six capitals · One concierge
            </span>
          </div>

          <div className="hidden md:block">
            <span className="caption text-ink/40 tracking-[0.3em]">
              MMXXVI · Established
            </span>
          </div>
        </div>
      </div>

      {/* Bottom-left copy stack — flex-1 fills remaining space below top bar */}
      <div className="relative z-10 flex-1 flex items-end pb-20 md:pb-12">
        <div className="container-x w-full">
          {/* Headline — narrower max-width so 3 lines hold proportion */}
          <div className="max-w-4xl">
            <h1
              className="display leading-[0.95]"
              style={{ fontSize: "clamp(34px, min(6.5vw, 8vh), 96px)" }}
            >
              {hero.headlineLines.map((line, i) => (
                <span key={i} className="block">
                  {line.replace(".", "")}
                  <span className="text-gold">.</span>
                </span>
              ))}
            </h1>
          </div>

          {/* Sub + CTA — narrower, anchored independently for visual rhythm */}
          <div className="max-w-2xl">
            <p className="mt-3 md:mt-6 text-sm md:text-lg text-ink/85 leading-relaxed">
              {hero.sub}
            </p>

            <div className="mt-5 md:mt-6 flex flex-wrap items-center gap-6 md:gap-8">
              <a href="#kontakt" className="btn-primary">
                <span>{hero.ctaPrimary}</span>
              </a>
              <a href="#kolekcja" className="btn-secondary">
                {hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-6 md:mt-10 hidden md:flex items-center gap-6">
              <div className="h-px bg-gold/70 w-24 md:w-40" />
              <span className="caption text-muted">{hero.capitals}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — Aesop-minimal: thin line + dot pulse, no text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3"
      >
        <div className="h-12 w-px bg-gradient-to-b from-transparent via-gold/40 to-gold/80" />
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="h-1 w-1 rounded-full bg-gold"
        />
      </motion.div>

      {/* Skip — accessibility */}
      <a
        href="#kolekcja"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-bg focus:text-gold focus:p-3"
      >
        Przejdź do kolekcji
      </a>

      {/* Hidden phone for nav fallback (already in nav) */}
      <span className="sr-only">{contact.phone}</span>
    </section>
  );
}
