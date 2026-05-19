"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sixCapitals, flagEmoji, type City } from "@/lib/copy";
import { Reveal } from "./ui/reveal";
import { GoldLine } from "./ui/gold-line";
import { cn } from "@/lib/utils";

export function SixCapitals() {
  const [active, setActive] = useState<City["code"]>("PL");

  return (
    <section
      id="sieć"
      className="relative py-28 md:py-36 border-t border-gold/15 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, color-mix(in srgb, var(--gold-deep) 12%, transparent), transparent 70%)",
        }}
      />

      <div className="container-x">
        <Reveal className="max-w-4xl mb-16">
          <div className="caption mb-3 text-gold">— 06 · {sixCapitals.caption}</div>
          <h2 className="display text-[clamp(40px,6vw,72px)] leading-tight">
            {sixCapitals.title}
          </h2>
          <GoldLine className="w-16 mt-8" />
          <p className="mt-8 text-base md:text-lg text-muted leading-relaxed max-w-2xl">
            {sixCapitals.intro}
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Map */}
          <Reveal delay={0.2} className="lg:col-span-7">
            <div className="relative aspect-[1000/500] border border-gold/20 bg-accent/30 backdrop-blur-sm overflow-hidden">
              <WorldMap
                cities={sixCapitals.cities}
                active={active}
                onSelect={setActive}
              />
            </div>
          </Reveal>

          {/* City list */}
          <div className="lg:col-span-5 space-y-1">
            {sixCapitals.cities.map((city, i) => {
              const isActive = city.code === active;
              return (
                <motion.button
                  key={city.code}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onMouseEnter={() => setActive(city.code)}
                  onClick={() => setActive(city.code)}
                  className={cn(
                    "w-full text-left py-5 px-1 border-b border-muted/15 group transition-colors duration-300",
                    isActive ? "border-b-gold" : "hover:border-b-gold/40"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xl">{flagEmoji[city.code]}</span>
                      <div>
                        <div
                          className={cn(
                            "display text-xl md:text-2xl transition-colors",
                            isActive ? "text-gold" : "text-ink"
                          )}
                        >
                          {city.name}
                        </div>
                        <div className="caption text-muted mt-1">
                          {city.country}
                        </div>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "text-gold transition-transform duration-300",
                        isActive ? "translate-x-1 opacity-100" : "opacity-0 group-hover:opacity-50"
                      )}
                    >
                      →
                    </span>
                  </div>
                  <motion.p
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? 12 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-sm text-muted leading-relaxed overflow-hidden"
                  >
                    {city.note}
                  </motion.p>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorldMap({
  cities,
  active,
  onSelect,
}: {
  cities: City[];
  active: City["code"];
  onSelect: (code: City["code"]) => void;
}) {
  return (
    <svg
      viewBox="0 0 1000 500"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      role="img"
      aria-label="Mapa sześciu stolic sieci Velure"
    >
      {/* Stylized abstract continents — Europe, Middle East, East Asia */}
      <g fill="none" stroke="var(--muted)" strokeWidth="0.6" opacity="0.45">
        {/* Europe (very loose abstraction) */}
        <path d="M 380,140 Q 420,120 470,140 L 540,150 Q 580,160 610,180 L 620,210 Q 600,230 570,240 L 530,250 Q 490,255 470,260 L 440,250 Q 410,235 395,210 L 385,180 Z" />
        {/* UK / Ireland */}
        <path d="M 410,150 Q 425,140 435,150 L 440,180 Q 430,195 415,190 L 405,170 Z" />
        {/* Mediterranean coast / Italy boot */}
        <path d="M 490,225 Q 500,240 510,260 L 515,275 Q 510,285 500,283 L 492,265 Z" />
        {/* Iberia */}
        <path d="M 410,225 Q 425,225 440,235 L 445,255 Q 425,260 410,250 Z" />
        {/* Middle East */}
        <path d="M 600,225 Q 640,220 680,240 L 720,260 Q 730,290 700,310 L 670,305 Q 640,290 620,275 L 600,255 Z" />
        {/* Arabia */}
        <path d="M 640,290 Q 670,295 690,320 L 700,355 Q 685,375 660,380 L 635,365 Q 625,335 635,310 Z" />
        {/* Eastern hemisphere — abstract Japan */}
        <path d="M 855,200 Q 870,205 875,220 L 870,245 Q 855,250 850,235 Z" />
        <path d="M 865,250 Q 880,255 880,270 L 870,285 Q 855,280 858,265 Z" />
        <path d="M 855,295 L 865,305 L 858,315 L 850,308 Z" />
        {/* China/Korea sliver */}
        <path d="M 770,200 Q 820,205 850,225 L 855,265 Q 820,280 780,275 L 760,250 Q 755,225 770,210 Z" />
      </g>

      {/* Subtle grid lines */}
      <g stroke="var(--gold)" strokeWidth="0.3" opacity="0.08">
        {[100, 200, 300, 400].map((y) => (
          <line key={y} x1="0" y1={y} x2="1000" y2={y} />
        ))}
        {[200, 400, 600, 800].map((x) => (
          <line key={x} x1={x} y1="0" x2={x} y2="500" />
        ))}
      </g>

      {/* Connection lines from Warsaw to each capital */}
      {cities
        .filter((c) => c.code !== "PL")
        .map((city) => {
          const warsaw = cities.find((c) => c.code === "PL")!;
          return (
            <line
              key={`line-${city.code}`}
              x1={warsaw.x}
              y1={warsaw.y}
              x2={city.x}
              y2={city.y}
              stroke="var(--gold)"
              strokeWidth="0.4"
              strokeDasharray="2 3"
              opacity={active === city.code || active === "PL" ? 0.5 : 0.15}
              className="transition-opacity duration-300"
            />
          );
        })}

      {/* Pins */}
      {cities.map((city) => {
        const isActive = city.code === active;
        return (
          <g
            key={city.code}
            transform={`translate(${city.x}, ${city.y})`}
            className="cursor-pointer"
            onMouseEnter={() => onSelect(city.code)}
            onClick={() => onSelect(city.code)}
          >
            {/* Pulsing outer ring */}
            <circle
              r="12"
              fill="var(--gold)"
              opacity={isActive ? 0.3 : 0.15}
              className="transition-opacity duration-300"
            >
              <animate
                attributeName="r"
                values="6;14;6"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0;0.4"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Static halo */}
            <circle
              r={isActive ? 8 : 5}
              fill="var(--gold)"
              opacity="0.25"
              className="transition-all duration-300"
            />
            {/* Dot */}
            <circle
              r={isActive ? 3.5 : 2.5}
              fill="var(--gold)"
              className="transition-all duration-300"
            />
            {/* Label */}
            <text
              y={isActive ? -16 : -10}
              textAnchor="middle"
              fill={isActive ? "var(--gold)" : "var(--ink)"}
              fontSize={isActive ? 11 : 9}
              fontWeight={isActive ? 600 : 400}
              letterSpacing="0.12em"
              className="transition-all duration-300 select-none uppercase pointer-events-none"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {city.name.split(" ")[0]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
