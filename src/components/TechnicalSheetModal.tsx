"use client";

import { Property } from "@/data/properties";
import { useEffect, useState } from "react";
import PropertyDetail from "./PropertyDetail";

interface TechnicalSheetModalProps {
    property: Property | null;
    onClose: () => void;
}

export default function TechnicalSheetModal({ property, onClose }: TechnicalSheetModalProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (property) {
            setIsVisible(true);
            document.body.style.overflow = "hidden";
        } else {
            setIsVisible(false);
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [property]);

    if (!property) return null;

    return (
        <div
            className={`fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div
                className={`relative bg-transparent w-full max-w-4xl transform transition-all duration-300 ${isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                    }`}
            >
                <PropertyDetail property={property} onClose={onClose} isModal={true} />
            </div>
        </div>
    );
}
