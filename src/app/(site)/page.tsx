import { PageGlow } from "@/components/layout";
import {
  ContactSection,
  CrmSpotlightSection,
  HomeHero,
  PartnersSection,
  ServiceAreasSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <PageGlow preset="home" />
      <HomeHero />
      <CrmSpotlightSection />
      <ServiceAreasSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}
