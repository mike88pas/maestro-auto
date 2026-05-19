import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Manifest } from "@/components/manifest";
import { InventoryTeaser } from "@/components/inventory-teaser";
import { ValueProps } from "@/components/value-props";
import { HowItWorks } from "@/components/how-it-works";
import { SixCapitals } from "@/components/six-capitals";
import { ConciergeIntro } from "@/components/concierge-intro";
import { Services } from "@/components/services";
import { Trust } from "@/components/trust";
import { ContactCTA } from "@/components/contact-cta";
import { Footer } from "@/components/footer";
import { StickyPhone } from "@/components/sticky-phone";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Manifest />
        <InventoryTeaser />
        <ValueProps />
        <HowItWorks />
        <SixCapitals />
        <ConciergeIntro />
        <Services />
        <Trust />
        <ContactCTA />
      </main>
      <Footer />
      <StickyPhone />
    </>
  );
}
