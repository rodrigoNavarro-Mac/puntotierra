import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ValueProps from "@/components/ValueProps";
import Properties from "@/components/Properties";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ValueProps />
      <Properties />
      <HowItWorks />
      <LeadForm />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
