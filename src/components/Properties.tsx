"use client";

import Link from "next/link";
import { properties, Property } from "@/data/properties";
import Image from "next/image";
import { useState } from "react";
import TechnicalSheetModal from "./TechnicalSheetModal";

export default function Properties() {
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

    return (
        <section id="propiedades" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-4xl font-medium text-text-main mb-4">
                        Propiedades Disponibles
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Opciones seleccionadas en las mejores zonas.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((prop) => (
                        <div key={prop.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                            <div className="relative h-80 overflow-hidden shrink-0">
                                <Image
                                    src={prop.image}
                                    alt={prop.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                                    {prop.type}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="font-heading text-xl font-semibold text-text-main">
                                        {prop.title}
                                    </h3>
                                    <p className="text-primary font-bold text-lg whitespace-nowrap ml-2">
                                        {prop.price}
                                    </p>
                                </div>

                                <div className="space-y-3 mb-6 flex-grow">
                                    {/* Dimensions */}
                                    {(prop.terreno || prop.construccion) && (
                                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 border-b border-gray-100 pb-3">
                                            {prop.terreno && prop.terreno !== "-" && (
                                                <div className="flex items-center gap-1">
                                                    <span className="font-medium">Terreno:</span> {prop.terreno}
                                                </div>
                                            )}
                                            {prop.construccion && (
                                                <div className="flex items-center gap-1">
                                                    <span className="font-medium">Construcción:</span> {prop.construccion}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Specs List */}
                                    {prop.especificaciones && prop.especificaciones.length > 0 && (
                                        <ul className="text-sm text-gray-600 space-y-1">
                                            {prop.especificaciones.slice(0, 5).map((spec, index) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <span className="text-secondary mt-1">•</span>
                                                    <span>{spec}</span>
                                                </li>
                                            ))}
                                            {prop.especificaciones.length > 5 && (
                                                <li className="text-xs text-gray-400 italic pt-1">
                                                    + {prop.especificaciones.length - 5} características más
                                                </li>
                                            )}
                                        </ul>
                                    )}
                                </div>

                                <button
                                    onClick={() => setSelectedProperty(prop)}
                                    className="block w-full text-center border border-secondary text-secondary hover:bg-secondary hover:text-white font-medium py-3 rounded-md transition-colors duration-300 mt-auto"
                                >
                                    Más información
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <TechnicalSheetModal
                property={selectedProperty}
                onClose={() => setSelectedProperty(null)}
            />
        </section>
    );
}
