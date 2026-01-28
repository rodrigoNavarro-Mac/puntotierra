"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

    const menuItems = [
        {
            label: "Residencial",
            items: [
                { label: "Venta", href: "/residencial?type=sale" },
                { label: "Renta", href: "/residencial?type=rent" }
            ]
        },
        {
            label: "Comercial",
            items: [
                { label: "Locales", href: "/comercial?type=premise" },
                { label: "Oficinas", href: "/comercial?type=office" }
            ]
        },
        {
            label: "Desarrollos",
            href: "/desarrollos"
        },
        {
            label: "Macrolotes",
            href: "/macrolotes"
        }
    ];

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
                <div className={`hidden md:flex gap-6 items-center font-medium ${isScrolled ? "text-text-main" : "text-white drop-shadow-md"}`}>
                    {menuItems.map((item) => (
                        item.items ? (
                            <div
                                key={item.label}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(item.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                                    {item.label}
                                    <ChevronDown size={16} className="mt-0.5" />
                                </button>
                                <div className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden min-w-[160px] transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                                    {item.items.map((subItem) => (
                                        <Link
                                            key={subItem.label}
                                            href={subItem.href}
                                            className="block px-4 py-2 text-text-main hover:bg-gray-50 hover:text-primary transition-colors"
                                        >
                                            {subItem.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <Link key={item.label} href={item.href!} className="hover:text-primary transition-colors">
                                {item.label}
                            </Link>
                        )
                    ))}
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
                    className={`fixed inset-0 bg-white z-40 flex flex-col items-start justify-start pt-24 px-8 gap-4 transition-transform duration-300 md:hidden overflow-y-auto ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {menuItems.map((item) => (
                        item.items ? (
                            <div key={item.label} className="w-full">
                                <button
                                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                                    className="text-xl font-heading font-medium text-text-main flex items-center justify-between w-full"
                                >
                                    {item.label}
                                    <ChevronDown size={20} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                                </button>
                                {activeDropdown === item.label && (
                                    <div className="pl-4 mt-2 space-y-2">
                                        {item.items.map((subItem) => (
                                            <Link
                                                key={subItem.label}
                                                href={subItem.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block text-lg text-gray-600 hover:text-primary"
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href!}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-xl font-heading font-medium text-text-main"
                            >
                                {item.label}
                            </Link>
                        )
                    ))}
                    <Link
                        href="/#contacto"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-xl font-heading font-medium text-primary mt-4"
                    >
                        Contacto
                    </Link>
                </div>
            </div>
        </nav>
    );
}
