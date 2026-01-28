"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Properties from "@/components/Properties";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHeader from "@/components/PageHeader";

function ResidencialContent() {
    const searchParams = useSearchParams();
    const type = searchParams.get('type');

    const listingType = type === 'rent' ? 'Rent' : 'Sale';
    const title = type === 'rent' ? 'Propiedades Residenciales en Renta' : 'Propiedades Residenciales en Venta';
    const subtitle = type === 'rent'
        ? 'Encuentra tu hogar ideal para rentar en las mejores zonas.'
        : 'Descubre casas y departamentos en venta en ubicaciones premium.';

    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <PageHeader title={title} subtitle={subtitle} />
            <Properties
                category="Residential"
                listingType={listingType}
            />
            <Footer />
            <WhatsAppButton />
        </main>
    );
}

export default function ResidencialPage() {
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
            <ResidencialContent />
        </Suspense>
    );
}
