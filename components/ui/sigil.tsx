import { cn } from "@/lib/utils";

/**
 * Velure brand sigil: V interlocked with 11 (11 verification points).
 * Hairline strokes in currentColor — set color via Tailwind text-gold etc.
 * Sizes via className h-X w-X.
 */
export function Sigil({ className, decorative = true }: { className?: string; decorative?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 80"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("inline-block", className)}
      role={decorative ? "presentation" : "img"}
      aria-label={decorative ? undefined : "Velure"}
    >
      {/* Outer frame square — subtle */}
      <rect x="6" y="6" width="68" height="68" opacity="0.18" />
      {/* V — two diagonals meeting at bottom center */}
      <path d="M 16 22 L 32 58 L 48 22" />
      {/* "11" — two vertical hairlines */}
      <line x1="58" y1="22" x2="58" y2="58" />
      <line x1="68" y1="22" x2="68" y2="58" />
      {/* Baseline serif tick */}
      <line x1="14" y1="64" x2="70" y2="64" opacity="0.4" />
      {/* Tiny apex marker — luxury detail */}
      <circle cx="32" cy="60" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Compact verification badge variant — for inventory cards */
export function SigilBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 border border-gold/60 bg-bg/40 backdrop-blur-sm",
        className
      )}
    >
      <Sigil className="h-3.5 w-3.5 text-gold" />
      <span className="text-[10px] tracking-[0.18em] uppercase text-gold font-medium">
        11 / 11
      </span>
    </span>
  );
}
