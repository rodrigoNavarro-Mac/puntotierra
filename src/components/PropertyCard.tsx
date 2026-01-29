"use client";

import Image from "next/image";
import { Property } from "@/data/properties";

interface PropertyCardProps {
    property: Property;
    onMoreInfo: (property: Property) => void;
}

export default function PropertyCard({ property, onMoreInfo }: PropertyCardProps) {
    const formatPrice = (price?: number | null, currency?: string) => {
        if (price == null || !currency) {
            return 'Precio a consultar';
        }
        return new Intl.NumberFormat('es-MX', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2
        }).format(price);
    };

    const getCategoryLabel = (category: Property['category'], propertyType: Property['propertyType']): string => {
        if (category === 'Residential') {
            return propertyType === 'House' ? 'Casa Residencial' : 'Departamento';
        }
        if (category === 'Commercial') {
            return propertyType === 'Office' ? 'Oficina' : 'Local Comercial';
        }
        if (category === 'Development') {
            return 'Desarrollo';
        }
        if (category === 'Plurifamiliar') {
            return 'Plurifamiliar';
        }
        return 'Macrolote';
    };

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
            <div
                className="relative h-80 overflow-hidden shrink-0 cursor-pointer"
                onClick={() => onMoreInfo(property)}
            >
                <Image
                    src={property.image}
                    alt={`${property.title} - ${property.city}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    {getCategoryLabel(property.category, property.propertyType)}
                </div>
                {/* Location and Development Badges - Top Right */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                    <div className="bg-white/90 text-text-main text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                        📍 {property.city}
                    </div>
                    {property.developmentName && (
                        <div className="bg-secondary/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            {property.developmentName}
                        </div>
                    )}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="font-heading text-xl font-semibold text-text-main">
                            {property.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{property.ubicacion}</p>
                    </div>
                    <p className="text-primary font-bold text-lg whitespace-nowrap ml-2">
                        {formatPrice(property.price, property.currency)}
                    </p>
                </div>

                <div className="space-y-3 mb-6 flex-grow">
                    {/* Dimensions */}
                    {(property.terreno || property.construccion) && (
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 border-b border-gray-100 pb-3">
                            {property.terreno && property.terreno !== "-" && (
                                <div className="flex items-center gap-1">
                                    <span className="font-medium">Terreno:</span> {property.terreno}
                                </div>
                            )}
                            {property.construccion && (
                                <div className="flex items-center gap-1">
                                    <span className="font-medium">Construcción:</span> {property.construccion}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Specs List */}
                    {property.especificaciones && property.especificaciones.length > 0 && (
                        <ul className="text-sm text-gray-600 space-y-1">
                            {property.especificaciones.slice(0, 5).map((spec, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-secondary mt-1">•</span>
                                    <span>{spec}</span>
                                </li>
                            ))}
                            {property.especificaciones.length > 5 && (
                                <li className="text-xs text-gray-400 italic pt-1">
                                    + {property.especificaciones.length - 5} características más
                                </li>
                            )}
                        </ul>
                    )}
                </div>

                <button
                    onClick={() => onMoreInfo(property)}
                    className="block w-full text-center border border-secondary text-secondary hover:bg-secondary hover:text-white font-medium py-3 rounded-md transition-colors duration-300 mt-auto"
                >
                    Más información
                </button>
            </div>
        </div >
    );
}
