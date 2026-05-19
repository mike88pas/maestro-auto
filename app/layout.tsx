import type { Metadata } from "next";
import { cormorant, playfair, inter } from "@/lib/fonts";
import { readTheme, themeLabel } from "@/lib/theme";
import { ThemeSwitcher } from "@/components/theme-switcher";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atelier 11 / Velure — concierge super-luxury",
  description:
    "Prywatny broker aut super-luxury (300k-3M PLN). Polska, Włochy, Niemcy, Szwajcaria, Dubaj, Japonia. 11 punktów weryfikacji. Aksamit, moc, dyskrecja.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Atelier 11 / Velure",
    description:
      "Prywatny broker aut super-luxury. Polska, Włochy, Niemcy, Szwajcaria, Dubaj, Japonia.",
    locale: "pl_PL",
    type: "website",
  },
  robots: { index: false, follow: false }, // pre-launch
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = await readTheme();

  return (
    <html
      lang="pl"
      data-theme={theme}
      className={`${cormorant.variable} ${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        {children}
        <ThemeSwitcher current={theme} />
      </body>
    </html>
  );
}

export { themeLabel };
