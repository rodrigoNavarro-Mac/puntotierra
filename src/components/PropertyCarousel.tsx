"use client";

import { useState, useRef, useEffect } from "react";
import { Property } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PropertyCarouselProps {
    properties: Property[];
    onPropertyClick: (property: Property) => void;
}

export default function PropertyCarousel({ properties, onPropertyClick }: PropertyCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const itemsToShow = {
        mobile: 1,
        tablet: 2,
        desktop: 3
    };

    const [itemsPerView, setItemsPerView] = useState(itemsToShow.desktop);

    useEffect(() => {
        const updateItemsPerView = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(itemsToShow.mobile);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(itemsToShow.tablet);
            } else {
                setItemsPerView(itemsToShow.desktop);
            }
        };

        updateItemsPerView();
        window.addEventListener('resize', updateItemsPerView);
        return () => window.removeEventListener('resize', updateItemsPerView);
    }, []);

    const maxIndex = Math.max(0, properties.length - itemsPerView);

    const handlePrevious = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    useEffect(() => {
        if (carouselRef.current) {
            const scrollAmount = currentIndex * (carouselRef.current.scrollWidth / properties.length);
            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }, [currentIndex, properties.length]);

    if (properties.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="text-gray-500">No hay propiedades disponibles en esta categoría.</p>
            </div>
        );
    }

    return (
        <div className="relative">
            {/* Navigation Buttons */}
            {properties.length > itemsPerView && (
                <>
                    <button
                        onClick={handlePrevious}
                        disabled={currentIndex === 0}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        aria-label="Anterior"
                    >
                        <ChevronLeft size={24} className="text-primary" />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex >= maxIndex}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        aria-label="Siguiente"
                    >
                        <ChevronRight size={24} className="text-primary" />
                    </button>
                </>
            )}

            {/* Carousel Container */}
            <div
                ref={carouselRef}
                className="flex gap-6 overflow-hidden scroll-smooth"
                style={{
                    scrollSnapType: 'x mandatory'
                }}
            >
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="flex-shrink-0"
                        style={{
                            width: `calc((100% - ${(itemsPerView - 1) * 1.5}rem) / ${itemsPerView})`,
                            scrollSnapAlign: 'start'
                        }}
                    >
                        <PropertyCard property={property} onMoreInfo={onPropertyClick} />
                    </div>
                ))}
            </div>

            {/* Dots Indicator */}
            {properties.length > itemsPerView && (
                <div className="flex justify-center gap-2 mt-6">
                    {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-2 rounded-full transition-all ${idx === currentIndex
                                    ? 'bg-primary w-8'
                                    : 'bg-gray-300 w-2'
                                }`}
                            aria-label={`Ir a posición ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
