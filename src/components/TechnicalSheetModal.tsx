"use client";

import { Property } from "@/data/properties";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface TechnicalSheetModalProps {
    property: Property | null;
    onClose: () => void;
}

export default function TechnicalSheetModal({ property, onClose }: TechnicalSheetModalProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    // Prepare images array (use property.images if available, else property.image)
    const images = property?.images && property.images.length > 0
        ? property.images
        : (property ? [property.image] : []);

    useEffect(() => {
        if (property) {
            setIsVisible(true);
            setCurrentImageIndex(0); // Reset carousel
            document.body.style.overflow = "hidden";
        } else {
            setIsVisible(false);
            setIsLightboxOpen(false);
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [property]);

    const handleContactClick = () => {
        onClose();
        const contactSection = document.getElementById("contacto");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const nextImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    const prevImage = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const openLightbox = () => setIsLightboxOpen(true);
    const closeLightbox = () => setIsLightboxOpen(false);

    if (!property) return null;

    return (
        <>
            {/* Main Modal */}
            <div
                className={`fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                    onClick={onClose}
                />

                <div
                    className={`relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                        }`}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-colors shadow-sm"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="flex flex-col md:flex-row">
                        {/* Image Carousel Section */}
                        <div className="w-full md:w-1/2 relative h-64 md:h-auto min-h-[350px] group bg-gray-100">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${idx === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                                        }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`${property.title} - Imagen ${idx + 1}`}
                                        fill
                                        className="object-cover cursor-zoom-in"
                                        onClick={openLightbox}
                                        priority={idx === 0}
                                    />
                                </div>
                            ))}

                            {/* Type Badge */}
                            <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide z-10 pointer-events-none">
                                {property.type}
                            </div>

                            {/* Carousel Controls (only if multiple images) */}
                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/90 text-white hover:text-black p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/90 text-white hover:text-black p-2 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>

                                    {/* Dots */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                                        {images.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-white w-4" : "bg-white/50 hover:bg-white/80"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        {/* Details Section */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                            <h2 className="font-heading text-3xl font-bold text-text-main mb-2">
                                {property.title}
                            </h2>
                            <p className="text-2xl font-bold text-primary mb-6">
                                {property.price} <span className="text-sm font-normal text-gray-500">{property.currency}</span>
                            </p>

                            <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-600 border-b border-gray-100 pb-6">
                                {(property.terreno && property.terreno !== "-" && property.terreno !== "por confirmar" && property.terreno !== "POR CONFIRMAR") && (
                                    <div>
                                        <span className="block font-semibold text-gray-800">Terreno</span>
                                        {property.terreno}
                                    </div>
                                )}
                                {(property.construccion && property.construccion !== "por confirmar" && property.construccion !== "POR CONFIRMAR") && (
                                    <div>
                                        <span className="block font-semibold text-gray-800">Construcción</span>
                                        {property.construccion}
                                    </div>
                                )}
                            </div>

                            <div className="mb-8 flex-grow">
                                <h3 className="font-heading text-lg font-semibold text-text-main mb-4">
                                    Características
                                </h3>
                                <ul className="grid grid-cols-1 gap-y-2 text-gray-600">
                                    {property.especificaciones.map((spec, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-secondary mt-1.5 min-w-[6px]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                            </span>
                                            <span>{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button
                                onClick={handleContactClick}
                                className="w-full bg-primary text-white font-medium py-3 rounded-md hover:bg-secondary transition-colors duration-300 shadow-lg text-center mt-auto"
                            >
                                Solicitar Cotización / Contactar
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox / Zoom Modal */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
                        <Image
                            src={images[currentImageIndex]}
                            alt={property.title}
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Lightbox Controls */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
                                {currentImageIndex + 1} / {images.length}
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
