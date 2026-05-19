import { Cormorant_Garamond, Inter } from "next/font/google";

/**
 * Velure typography:
 *  - Cormorant Garamond 300 (display) — sensual, editorial
 *  - Inter (body) — modern, neutral, perfect for HNWI readability
 *
 * Both fonts are SIL OFL licensed — commercial safe.
 */

export const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
