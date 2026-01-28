"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CategorySection from "@/components/CategorySection";
import TechnicalSheetModal from "@/components/TechnicalSheetModal";
import { properties, Property } from "@/data/properties";

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Filter properties by category
  const residentialProperties = properties.filter(p => p.category === "Residential");
  const commercialProperties = properties.filter(p => p.category === "Commercial");
  const developmentProperties = properties.filter(p => p.category === "Development");
  const macrolotProperties = properties.filter(p => p.category === "Macrolot");

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ValueProps />

      {/* Property Sections with Carousels */}
      <div className="bg-gray-50">
        <CategorySection
          title="Propiedades Residenciales"
          description="Casas y departamentos en venta y renta en las mejores ubicaciones."
          properties={residentialProperties}
          viewMoreLink="/residencial?type=sale"
          onPropertyClick={setSelectedProperty}
        />

        <div className="border-t border-gray-200" />

        <CategorySection
          title="Propiedades Comerciales"
          description="Locales comerciales y oficinas para impulsar tu negocio."
          properties={commercialProperties}
          viewMoreLink="/comercial?type=premise"
          onPropertyClick={setSelectedProperty}
        />

        <div className="border-t border-gray-200" />

        <CategorySection
          title="Desarrollos Exclusivos"
          description="Proyectos inmobiliarios en las mejores ciudades de México."
          properties={developmentProperties}
          viewMoreLink="/desarrollos"
          onPropertyClick={setSelectedProperty}
        />

        <div className="border-t border-gray-200" />

        <CategorySection
          title="Macrolotes"
          description="Terrenos de gran extensión para desarrollo inmobiliario."
          properties={macrolotProperties}
          viewMoreLink="/macrolotes"
          onPropertyClick={setSelectedProperty}
        />
      </div>

      <HowItWorks />
      <LeadForm />
      <Footer />
      <WhatsAppButton />

      {/* Property Details Modal */}
      <TechnicalSheetModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </main>
  );
}
