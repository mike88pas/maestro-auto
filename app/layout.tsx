import type { Metadata } from "next";
import { cormorant, inter } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velure — Aksamit. Moc. Dyskrecja.",
  description:
    "Prywatny broker aut super-luxury (300k-3M PLN). Polska, Włochy, Niemcy, Szwajcaria, Dubaj, Japonia. Sześć stolic. Jedna sieć. Aksamit, moc, dyskrecja.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Velure — concierge super-luxury",
    description:
      "Prywatny broker aut super-luxury. Sześć stolic. Jedna sieć.",
    locale: "pl_PL",
    type: "website",
  },
  robots: { index: false, follow: false }, // pre-launch
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pl"
      data-theme="velure"
      className={`${cormorant.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
