import { Cormorant_Garamond, Playfair_Display, Inter } from "next/font/google";

/**
 * Font pairing strategy:
 *  - Velure: Cormorant Garamond 300 (display) + Inter (body) — sensual, editorial
 *  - Atelier 11: Playfair Display 400 (display) + Inter (body) — architectural, structured
 *
 * Both pairs loaded once; theme decides which display var is active in CSS.
 * All fonts are SIL OFL licensed — commercial safe.
 */

export const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-playfair",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
