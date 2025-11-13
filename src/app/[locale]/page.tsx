import HeroSection from "../components/HeroSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ServicesSection from "../components/ServicesSection";
import IndustriasSection from "../components/IndustriasSection";
import ValuesSection from "../components/ValuesSection";
import TeamSection from "../components/TeamSection";
import NewCallToAction from "../components/NewCallToAction";
import NewFooter from "../components/NewFooter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <IndustriasSection />
      <ValuesSection />
      <TeamSection />
      <NewCallToAction />
      <NewFooter />
    </main>
  );
}

