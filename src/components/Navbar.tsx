"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative z-50">
                    <div className={`relative transition-all duration-300 ${isScrolled ? "h-[50px] w-[160px] my-0" : "h-[70px] w-[220px] -my-3 brightness-0 invert drop-shadow-md"}`}>
                        <Image
                            src="/logo.png"
                            alt="Punto Tierra Logo"
                            fill
                            className="object-contain object-left"
                            sizes="(max-width: 768px) 130px, 220px"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className={`hidden md:flex gap-8 items-center font-medium ${isScrolled ? "text-text-main" : "text-white drop-shadow-md"}`}>
                    <Link href="/#propiedades" className="hover:text-primary transition-colors">Propiedades</Link>
                    <Link href="/#contacto" className="bg-primary px-5 py-2 rounded-md text-white hover:bg-opacity-90 transition-all">
                        Contacto
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <X size={28} className={isScrolled ? "text-text-main" : "text-white"} />
                    ) : (
                        <Menu size={28} className={isScrolled ? "text-text-main" : "text-white"} />
                    )}
                </button>

                {/* Mobile Sidebar */}
                <div
                    className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <Link
                        href="/#propiedades"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-heading font-medium text-text-main"
                    >
                        Propiedades
                    </Link>
                    <Link
                        href="/#contacto"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-heading font-medium text-primary"
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
}
