import { readTheme } from "@/lib/theme";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Manifest } from "@/components/manifest";
import { InventoryTeaser } from "@/components/inventory-teaser";
import { ValueProps } from "@/components/value-props";
import { HowItWorks } from "@/components/how-it-works";
import { ConciergeIntro } from "@/components/concierge-intro";
import { Services } from "@/components/services";
import { Trust } from "@/components/trust";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { StickyPhone } from "@/components/sticky-phone";

export default async function HomePage() {
  const theme = await readTheme();

  return (
    <>
      <Nav theme={theme} />
      <main className="pb-16 md:pb-0">
        <Hero theme={theme} />
        <Manifest theme={theme} />
        <InventoryTeaser />
        <ValueProps theme={theme} />
        <HowItWorks />
        <ConciergeIntro theme={theme} />
        <Services />
        <Trust theme={theme} />
        <ContactCTA theme={theme} />
      </main>
      <Footer theme={theme} />
      <StickyPhone theme={theme} />
    </>
  );
}
