import { PageGlow } from "@/components/layout";
import {
  ContactSection,
  HomeHero,
  PartnersSection,
  ServiceAreasSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <PageGlow preset="home" />
      <HomeHero />
      <ServiceAreasSection />
      <PartnersSection />
      <ContactSection />
    </>
  );
}
