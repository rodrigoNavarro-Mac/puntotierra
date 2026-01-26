"use client";

import { Property } from "@/data/properties";
import { submitZohoLead } from "@/app/actions";
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
    const [showContactForm, setShowContactForm] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    // Prepare images array (use property.images if available, else property.image)
    const images = property?.images && property.images.length > 0
        ? property.images
        : (property ? [property.image] : []);

    useEffect(() => {
        if (property) {
            setIsVisible(true);
            setCurrentImageIndex(0); // Reset carousel
            setShowContactForm(false);
            setFormStatus("idle");
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
        setShowContactForm(true);
    };

    const handleBackToDetails = () => {
        setShowContactForm(false);
        setFormStatus("idle");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");

        const formData = new FormData(e.currentTarget);

        try {
            const result = await submitZohoLead(formData);

            if (result.success) {
                setFormStatus("success");
            } else {
                console.error("Submission failed:", result.message);
                setFormStatus("error");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setFormStatus("error");
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
                        {/* Image Carousel Section - Always visible */}
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

                        {/* Content Section: Either Details or Form */}
                        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
                            {!showContactForm ? (
                                // --- PROPERTY DETAILS ---
                                <>
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
                                </>
                            ) : (
                                // --- CONTACT FORM ---
                                <div className="flex flex-col h-full animate-fadeIn">
                                    <button
                                        onClick={handleBackToDetails}
                                        className="mb-4 text-sm text-gray-500 hover:text-primary flex items-center gap-1 self-start"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Volver a detalles
                                    </button>

                                    {formStatus === "success" ? (
                                        <div className="flex flex-col items-center justify-center h-full text-center py-10">
                                            <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">¡Mensaje enviado!</h3>
                                            <p className="text-gray-600 mb-6">
                                                Gracias, un asesor de Punto Tierra se comunicará contigo sobre esta propiedad.
                                            </p>
                                            <button
                                                onClick={onClose}
                                                className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors"
                                            >
                                                Cerrar
                                            </button>
                                        </div>
                                    ) : (
                                        <>
                                            <h3 className="text-xl font-bold text-gray-800 mb-2">Solicitar información</h3>
                                            <p className="text-sm text-gray-500 mb-4">
                                                Ingresa tus datos para contactarte sobre: <br />
                                                <span className="font-semibold text-primary">{property.title}</span>
                                            </p>

                                            <form onSubmit={handleSubmit} className="flex flex-col gap-3 flex-grow overflow-y-auto pr-1 custom-scrollbar">
                                                {/* Hidden Inputs for Zoho */}
                                                <input type="text" style={{ display: "none" }} name="xnQsjsdp" value="ea6f746f1d5ee7e96285217e45c0339e2c73e8fcff48293e6d57ffe5dfa78dfc" readOnly />
                                                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                                                <input type="text" style={{ display: "none" }} name="xmIwtLD" value="7ef8279dc67c1b129d77958381bbc67d5281cc15acccd8f2cb94c3a311c3dd18a3a60fe0c907393f70fd3a9496be65b5" readOnly />
                                                <input type="text" style={{ display: "none" }} name="actionType" value="TGVhZHM=" readOnly />
                                                <input type="text" style={{ display: "none" }} name="returnURL" value="null" readOnly />

                                                {/* LEADCF10 - Desarrollo (Mandatory) */}
                                                <input type="text" style={{ display: "none" }} name="LEADCF10" value="Punto Tierra" readOnly />

                                                {/* LEADCF9 - Datos (Auto-populated with Property Info) */}
                                                <textarea
                                                    style={{ display: "none" }}
                                                    name="LEADCF9"
                                                    readOnly
                                                    value={`Propiedad: ${property.title}\nPrecio: ${property.price} ${property.currency}\nTerreno: ${property.terreno || "N/A"}\nConstrucción: ${property.construccion || "N/A"}`}
                                                />

                                                {/* Honeypot */}
                                                <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q" value="" readOnly />

                                                <div className="grid grid-cols-2 gap-3">
                                                    <div>
                                                        <label htmlFor="First_Name" className="block text-xs font-bold text-gray-700 mb-1">Nombre *</label>
                                                        <input type="text" id="First_Name" name="First Name" required maxLength={40} className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Nombre" />
                                                    </div>
                                                    <div>
                                                        <label htmlFor="Last_Name" className="block text-xs font-bold text-gray-700 mb-1">Apellidos *</label>
                                                        <input type="text" id="Last_Name" name="Last Name" required maxLength={80} className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Apellidos" />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="Email" className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                                                    <input type="email" id="Email" name="Email" required maxLength={100} className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="correo@ejemplo.com" />
                                                </div>

                                                <div>
                                                    <label htmlFor="Mobile" className="block text-xs font-bold text-gray-700 mb-1">Móvil *</label>
                                                    <input type="text" id="Mobile" name="Mobile" required maxLength={30} className="w-full border border-gray-300 rounded p-2 text-sm focus:ring-1 focus:ring-primary outline-none" placeholder="Teléfono" />
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={formStatus === "submitting"}
                                                    className="w-full bg-primary text-white font-medium py-3 rounded-md hover:bg-secondary transition-colors duration-300 shadow-md mt-auto disabled:opacity-70 disabled:cursor-not-allowed"
                                                >
                                                    {formStatus === "submitting" ? "Enviando..." : "Confirmar Interés"}
                                                </button>

                                                <p className="text-[10px] text-gray-400 text-center">
                                                    Al enviar aceptas ser contactado.
                                                </p>
                                            </form>
                                        </>
                                    )}
                                </div>
                            )}
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
