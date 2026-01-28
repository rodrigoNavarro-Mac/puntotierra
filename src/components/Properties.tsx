"use client";

import { properties, Property } from "@/data/properties";
import { useState } from "react";
import TechnicalSheetModal from "./TechnicalSheetModal";
import PropertyCard from "./PropertyCard";

interface PropertiesProps {
    category?: Property['category'];
    listingType?: Property['listingType'];
    propertyType?: Property['propertyType'];
    title?: string;
    subtitle?: string;
}

export default function Properties({
    category,
    listingType,
    propertyType,
    title = "Propiedades Disponibles",
    subtitle = "Opciones seleccionadas en las mejores zonas."
}: PropertiesProps) {
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

    // Filter properties based on props
    const filteredProperties = properties.filter((prop) => {
        if (category && prop.category !== category) return false;
        if (listingType && prop.listingType !== listingType) return false;
        if (propertyType && prop.propertyType !== propertyType) return false;
        return true;
    });

    return (
        <section id="propiedades" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-medium text-text-main mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {filteredProperties.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No hay propiedades disponibles en esta categoría.</p>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProperties.map((prop) => (
                            <PropertyCard
                                key={prop.id}
                                property={prop}
                                onMoreInfo={setSelectedProperty}
                            />
                        ))}
                    </div>
                )}
            </div>

            <TechnicalSheetModal
                property={selectedProperty}
                onClose={() => setSelectedProperty(null)}
            />
        </section>
    );
}
