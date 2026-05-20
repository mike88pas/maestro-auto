"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, contact } from "@/lib/copy";
import { Sigil } from "./ui/sigil";

const HERO_PRIMARY = "/placeholders/velure/hero-vault.webp";
const HERO_ALT = "/placeholders/velure/hero-alt.webp";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.55]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[520px] w-full overflow-hidden flex flex-col"
    >
      {/* Background — dual-layer crossfade with ken-burns */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
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
      </motion.div>

      {/* Top bar — sigil + caption left, established marker right. In flow so it cannot overlap with bottom copy on short viewports. */}
      <div className="relative z-10 pt-0 md:pt-24 pointer-events-none">
        <div className="container-x flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center gap-3"
          >
            <Sigil className="h-8 w-8 text-gold" />
            <span className="caption text-gold/85 tracking-[0.24em]">
              Six capitals · One concierge
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block"
          >
            <span className="caption text-ink/40 tracking-[0.3em]">
              MMXXVI · Established
            </span>
          </motion.div>
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
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" }}
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
                  transition={{
                    duration: 1.1,
                    delay: 0.15 + i * 0.18,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="block"
                >
                  {line.replace(".", "")}
                  <span className="text-gold">.</span>
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Sub + CTA — narrower, anchored independently for visual rhythm */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 md:mt-6 text-sm md:text-lg text-ink/85 leading-relaxed"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 md:mt-6 flex flex-wrap items-center gap-6 md:gap-8"
            >
              <a href="#kontakt" className="btn-primary">
                <span>{hero.ctaPrimary}</span>
              </a>
              <a href="#kolekcja" className="btn-secondary">
                {hero.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="mt-6 md:mt-10 hidden md:flex items-center gap-6"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.4, delay: 1.4, ease: [0.65, 0, 0.35, 1] }}
                style={{ originX: 0 }}
                className="h-px bg-gold/70 w-24 md:w-40"
              />
              <span className="caption text-muted">{hero.capitals}</span>
            </motion.div>
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
