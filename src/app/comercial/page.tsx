"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Properties from "@/components/Properties";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";

function ComercialContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    const propertyType = type === 'office' ? 'Office' : 'Premise';
    const title = type === 'office' ? 'Oficinas en Renta' : 'Locales Comerciales';
    const subtitle = type === 'office'
        ? 'Espacios corporativos de primer nivel en zonas estratégicas.'
        : 'Locales comerciales en ubicaciones de alto flujo y crecimiento.';

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <PageHeader title={title} subtitle={subtitle} />
            <Properties
                category="Commercial"
                propertyType={propertyType}
            />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}

export default function ComercialPage() {
    return (
        <Suspense fallback={
            <main className="min-h-screen bg-white">
                <Navbar />
                <div className="pt-28 flex items-center justify-center min-h-[50vh]">
                    <p className="text-gray-500">Cargando propiedades...</p>
                </div>
                <Footer />
            </main>
        }>
            <ComercialContent />
        </Suspense>
    );
}
