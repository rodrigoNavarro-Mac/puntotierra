"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function MacrolotesPage() {
    // Filter to show both Macrolot and Plurifamiliar categories
    const macrolotProperties = properties.filter(p =>
        p.category === "Macrolot" || p.category === "Plurifamiliar"
    );

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <PageHeader
                title="Macrolotes Disponibles"
                subtitle="Terrenos de gran extensión para desarrollo inmobiliario en ubicaciones estratégicas."
            />
            <section id="propiedades" className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {macrolotProperties.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No hay propiedades disponibles en esta categoría.</p>
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {macrolotProperties.map((prop) => (
                                <PropertyCard
                                    key={prop.id}
                                    property={prop}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <Footer />
            <WhatsAppButton />

        </main>
    );
}
