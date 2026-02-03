"use client";

import { Property } from "@/data/properties";
import { submitZohoLead } from "@/app/actions";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

interface PropertyDetailProps {
    property: Property;
    onClose?: () => void;
    isModal?: boolean;
}

export default function PropertyDetail({ property, onClose, isModal = false }: PropertyDetailProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    // Prepare images array
    const images = property?.images && property.images.length > 0
        ? property.images
        : (property ? [property.image] : []);

    useEffect(() => {
        setCurrentImageIndex(0);
        setShowContactForm(false);
        setFormStatus("idle");
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

    return (
        <div className={`w-full ${isModal ? 'bg-white rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto' : 'bg-transparent'}`}>

            {isModal && onClose && (
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-30 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-colors shadow-sm"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}

            <div className={`flex flex-col ${isModal ? 'md:flex-row' : 'lg:grid lg:grid-cols-2 lg:gap-12'}`}>
                {/* Image Carousel Section */}
                <div className={`w-full relative group bg-gray-100 ${isModal ? 'md:w-1/2 min-h-[350px] h-64 md:h-auto' : 'h-[500px] lg:h-[650px] rounded-2xl overflow-hidden'}`}>
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
                    <div className="absolute top-4 left-4 bg-primary/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide z-30 pointer-events-none">
                        {property.propertyType}
                    </div>

                    {/* Carousel Controls */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/90 text-white hover:text-black p-2 rounded-full backdrop-blur-sm transition-all z-30 opacity-0 group-hover:opacity-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/90 text-white hover:text-black p-2 rounded-full backdrop-blur-sm transition-all z-30 opacity-0 group-hover:opacity-100"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
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

                {/* Content Section */}
                <div className={`w-full flex flex-col ${isModal ? 'md:w-1/2 p-6 md:p-8 md:pt-16' : 'py-6 lg:py-8'}`}>
                    {!showContactForm ? (
                        <>
                            <div className="flex justify-between items-start mb-2">
                                {(isModal) && (
                                    <h2 className="font-heading text-3xl font-bold text-text-main leading-tight">
                                        {property.title}
                                    </h2>
                                )}
                                <button
                                    onClick={async () => {
                                        const url = `${window.location.origin}/propiedades/${property.id}`;

                                        if (navigator.share) {
                                            try {
                                                await navigator.share({
                                                    title: property.title,
                                                    text: `Mira esta propiedad en Punto Tierra: ${property.title}`,
                                                    url: url
                                                });
                                                return;
                                            } catch (err) {
                                                console.log('Error sharing:', err);
                                            }
                                        }

                                        // Fallback: Copy to clipboard
                                        navigator.clipboard.writeText(url);
                                        const btn = document.getElementById(`share-btn-${property.id}`);
                                        if (btn) {
                                            const originalContent = btn.innerHTML;
                                            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>`;
                                            setTimeout(() => {
                                                btn.innerHTML = originalContent;
                                            }, 2000);
                                        }
                                    }}
                                    id={`share-btn-${property.id}`}
                                    className={`p-2 text-gray-400 hover:text-primary transition-colors rounded-full hover:bg-gray-50 flex-shrink-0 ${!isModal ? 'ml-0' : 'ml-4'}`}
                                    title="Compartir enlace"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </button>
                            </div>

                            {isModal && (
                                <p className="text-gray-500 mb-6 flex items-center gap-1.5 text-sm font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {property.ubicacion}
                                </p>
                            )}

                            <p className="text-3xl font-bold text-primary mb-8">
                                {property.price != null && property.currency
                                    ? new Intl.NumberFormat('es-MX', {
                                        style: 'currency',
                                        currency: property.currency,
                                        minimumFractionDigits: 0
                                    }).format(property.price)
                                    : 'Precio a consultar'
                                }
                            </p>

                            <div className="flex flex-wrap gap-8 mb-8 text-sm text-gray-600 border-b border-gray-100 pb-8">
                                {(property.terreno && property.terreno !== "-" && property.terreno !== "por confirmar" && property.terreno !== "POR CONFIRMAR") && (
                                    <div>
                                        <span className="block font-bold text-gray-900 mb-1">Terreno</span>
                                        {property.terreno}
                                    </div>
                                )}
                                {(property.construccion && property.construccion !== "por confirmar" && property.construccion !== "POR CONFIRMAR") && (
                                    <div>
                                        <span className="block font-bold text-gray-900 mb-1">Construcción</span>
                                        {property.construccion}
                                    </div>
                                )}
                            </div>

                            <div className="mb-8 flex-grow">
                                <h3 className="font-heading text-xl font-semibold text-text-main mb-4">
                                    Características
                                </h3>
                                <ul className="grid grid-cols-1 gap-y-3 text-gray-600 mb-8">
                                    {property.especificaciones.map((spec, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <span className="text-secondary mt-1.5 min-w-[6px]">
                                                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                                            </span>
                                            <span className="leading-snug">{spec}</span>
                                        </li>
                                    ))}
                                </ul>
                                {property.description && (
                                    <div className="mt-8 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-8">
                                        <h3 className="font-heading text-xl font-semibold text-text-main mb-3">Descripción</h3>
                                        <p className="whitespace-pre-line">{property.description}</p>
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={handleContactClick}
                                className="w-full bg-primary text-white font-medium py-4 rounded-xl hover:bg-secondary transition-colors duration-300 shadow-lg hover:shadow-xl text-center mt-auto text-lg"
                            >
                                Solicitar Cotización / Contactar
                            </button>
                        </>
                    ) : (
                        <div className="flex flex-col h-full animate-fadeIn bg-gray-50 p-6 rounded-xl border border-gray-100">
                            <button
                                onClick={handleBackToDetails}
                                className="mb-6 text-sm text-gray-500 hover:text-primary flex items-center gap-2 self-start font-medium transition-colors"
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
                                    {isModal && onClose && (
                                        <button
                                            onClick={onClose}
                                            className="bg-primary text-white px-6 py-2 rounded-md hover:bg-secondary transition-colors"
                                        >
                                            Cerrar
                                        </button>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Solicitar información</h3>
                                    <p className="text-sm text-gray-500 mb-6">
                                        Ingresa tus datos para contactarte sobre: <br />
                                        <span className="font-semibold text-primary">{property.title}</span>
                                    </p>

                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow overflow-y-auto pr-1 custom-scrollbar">
                                        {/* Hidden Inputs for Zoho */}
                                        <input type="text" style={{ display: "none" }} name="xnQsjsdp" value="ea6f746f1d5ee7e96285217e45c0339e2c73e8fcff48293e6d57ffe5dfa78dfc" readOnly />
                                        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                                        <input type="text" style={{ display: "none" }} name="xmIwtLD" value="7ef8279dc67c1b129d77958381bbc67d5281cc15acccd8f2cb94c3a311c3dd18a3a60fe0c907393f70fd3a9496be65b5" readOnly />
                                        <input type="text" style={{ display: "none" }} name="actionType" value="TGVhZHM=" readOnly />
                                        <input type="text" style={{ display: "none" }} name="returnURL" value="null" readOnly />
                                        <input type="text" style={{ display: "none" }} name="LEADCF10" value="Punto Tierra" readOnly />

                                        <textarea
                                            style={{ display: "none" }}
                                            name="LEADCF9"
                                            readOnly
                                            value={`Propiedad: ${property.title}\nPrecio: ${property.price != null && property.currency ? `${property.price} ${property.currency}` : 'A consultar'}\nTerreno: ${property.terreno || "N/A"}\nConstrucción: ${property.construccion || "N/A"}`}
                                        />

                                        <input type="text" style={{ display: "none" }} name="aG9uZXlwb3Q" value="" readOnly />

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="First_Name" className="block text-xs font-bold text-gray-700 mb-1">Nombre *</label>
                                                <input type="text" id="First_Name" name="First Name" required maxLength={40} className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Nombre" />
                                            </div>
                                            <div>
                                                <label htmlFor="Last_Name" className="block text-xs font-bold text-gray-700 mb-1">Apellidos *</label>
                                                <input type="text" id="Last_Name" name="Last Name" required maxLength={80} className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Apellidos" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="Email" className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                                            <input type="email" id="Email" name="Email" required maxLength={100} className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="correo@ejemplo.com" />
                                        </div>

                                        <div>
                                            <label htmlFor="Mobile" className="block text-xs font-bold text-gray-700 mb-1">Móvil *</label>
                                            <input type="text" id="Mobile" name="Mobile" required maxLength={30} className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Teléfono" />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={formStatus === "submitting"}
                                            className="w-full bg-primary text-white font-medium py-3 rounded-xl hover:bg-secondary transition-colors duration-300 shadow-md mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
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

            {/* Lightbox */}
            {isLightboxOpen && (
                <div className="fixed inset-0 z-[90] bg-black/95 flex items-center justify-center p-4">
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
        </div>
    );
}
