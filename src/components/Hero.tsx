"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroImages = [
    "/img/PC15/PC15_1.jpeg",
    "/img/PC15/PC15_2.jpeg",
    "/img/PM11/PM11_1.jpeg",
    "/img/PM9/PM9_2.jpg",
    "/img/PM11/PM11_2.jpeg"
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Images Carousel */}
            {heroImages.map((src, index) => (
                <div
                    key={src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
                        }`}
                >
                    <Image
                        src={src}
                        alt={`Propiedad Punto Tierra ${index + 1}`}
                        fill
                        className="object-cover brightness-[0.7]" // Slightly darker for text contrast
                        priority={index === 0}
                        quality={60}
                        sizes="100vw"
                    />
                </div>
            ))}

            <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
                <h1 className="font-heading text-4xl md:text-6xl font-semibold mb-6 drop-shadow-lg">
                    Casas en venta en zona Angelópolis
                </h1>
                <p className="font-body text-lg md:text-xl md:max-w-3xl mx-auto mb-10 drop-shadow-md text-gray-100">
                    Punto Tierra es una inmobiliaria especializada en la venta de casas en zona Angelópolis, Puebla, ofreciendo opciones accesibles para vivir o invertir en una de las zonas con mayor plusvalía del estado.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link
                        href="#contacto"
                        className="bg-primary hover:bg-secondary text-white font-medium px-8 py-3 rounded-md transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Solicita información
                    </Link>
                    <Link
                        href="#propiedades"
                        className="border-2 border-white hover:bg-white/10 text-white font-medium px-8 py-3 rounded-md transition-all duration-300 w-full sm:w-auto hover:shadow-lg"
                    >
                        Ver propiedades
                    </Link>
                </div>
            </div>

            {/* Carousel Indicators (Optional, mainly for visual feedback) */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {heroImages.map((_, idx) => (
                    <div
                        key={idx}
                        className={`h-1 rounded-full transition-all duration-300 ${idx === currentImageIndex ? "bg-white w-8" : "bg-white/40 w-2"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
}
