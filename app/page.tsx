import { CategoryStrip } from "./components/CategoryStrip";
import { Comparison } from "./components/Comparison";
import { ContactCTA } from "./components/ContactCTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { PriceComparison } from "./components/PriceComparison";
import { Pricing } from "./components/Pricing";
import { Portfolio } from "./components/Portfolio";
import { ProcessSteps } from "./components/ProcessSteps";
import { Problem } from "./components/Problem";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { FloatingWhatsApp } from "./components/whatsapp";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#FAF7F2] text-zinc-900">
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        <Hero />
        <CategoryStrip />
        <Problem />
        <Services />
        <PriceComparison />
        <ProcessSteps />
        <Comparison />
        <Portfolio />
        <Stats />
        <Pricing />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
