import Link from "next/link";
import { Property } from "@/data/properties";
import PropertyCarousel from "./PropertyCarousel";
import { ArrowRight } from "lucide-react";

interface CategorySectionProps {
    title: string;
    description: string;
    properties: Property[];
    viewMoreLink: string;
    onPropertyClick: (property: Property) => void;
}

export default function CategorySection({
    title,
    description,
    properties,
    viewMoreLink,
    onPropertyClick
}: CategorySectionProps) {
    if (properties.length === 0) {
        return null; // Don't show section if no properties
    }

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mb-10">
                    <h2 className="font-heading text-3xl md:text-4xl font-medium text-text-main mb-2">
                        {title}
                    </h2>
                    <p className="text-gray-600 max-w-2xl">
                        {description}
                    </p>
                </div>

                {/* Carousel */}
                <PropertyCarousel
                    properties={properties}
                    onPropertyClick={onPropertyClick}
                />

                {/* Ver más button at bottom */}
                <div className="mt-10 flex justify-center">
                    <Link
                        href={viewMoreLink}
                        className="group flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-white font-semibold text-lg px-12 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg w-full md:w-auto md:min-w-[460px]"
                    >
                        Ver todas las propiedades
                        <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
