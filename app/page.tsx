import { ContactCTA } from "./components/ContactCTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-zinc-900">
      <Navbar />
      <main id="top" className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <HowItWorks />
        <Portfolio />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}
