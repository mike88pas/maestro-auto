"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Hairline that draws itself left-to-right on scroll into view.
 * Usage: <GoldLine className="w-24" /> or <GoldLine className="w-1/3" delay={0.2} />
 */
export function GoldLine({
  className,
  delay = 0,
  duration = 1.2,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.65, 0, 0.35, 1] }}
      style={{ originX: 0 }}
      className={cn("h-px bg-gold", className)}
      aria-hidden
    />
  );
}
