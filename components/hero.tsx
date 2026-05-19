"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, contact } from "@/lib/copy";
import { Sigil } from "./ui/sigil";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -80]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.55]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[720px] w-full overflow-hidden"
    >
      {/* Background photo with ken-burns + scroll parallax */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
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
            src="/placeholders/dev/sports-car-night.jpg"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        {/* Vignette: darkens edges + bottom for headline contrast */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 60% at 50% 40%, transparent 0%, color-mix(in srgb, var(--bg) 50%, transparent) 90%),
              linear-gradient(180deg, color-mix(in srgb, var(--bg) 45%, transparent) 0%, transparent 25%, transparent 45%, color-mix(in srgb, var(--bg) 95%, transparent) 88%, var(--bg) 100%)
            `,
          }}
        />
      </motion.div>

      {/* Top bar — sigil + phone */}
      <div className="absolute top-0 left-0 right-0 z-10 pt-24 md:pt-28">
        <div className="container-x flex items-start justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center gap-3 text-gold"
          >
            <Sigil className="h-8 w-8" />
            <span className="caption text-gold tracking-[0.2em]">
              Six capitals · One concierge
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom-left copy stack */}
      <div className="relative h-full flex items-end pb-28 md:pb-36">
        <div className="container-x w-full">
          <div className="max-w-5xl">
            {/* Stagger headline lines */}
            <h1 className="display text-[clamp(56px,11vw,160px)] leading-[0.92]">
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 md:mt-12 text-base md:text-xl text-ink/85 max-w-2xl leading-relaxed"
            >
              {hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-wrap items-center gap-6"
            >
              <a href="#kontakt" className="btn-primary group">
                <span>{hero.ctaPrimary}</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a href="#kolekcja" className="btn-secondary">
                {hero.ctaSecondary}
              </a>
            </motion.div>

            {/* Bottom hairline + capitals caption */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="mt-16 md:mt-20 flex items-center gap-6"
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="caption text-muted/60 text-[9px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gold/60 to-transparent"
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
