import { properties } from "@/data/properties";
import PropertyDetail from "@/components/PropertyDetail";
import CategorySection from "@/components/CategorySection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { notFound } from "next/navigation";
import { Metadata } from 'next';
import Image from "next/image";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props,
): Promise<Metadata> {
    const { id } = await params;
    const property = properties.find((p) => p.id === id)

    if (!property) {
        return {
            title: 'Propiedad no encontrada',
        }
    }

    return {
        title: property.title,
        description: property.description || `Propiedad en ${property.city} - ${property.title}`,
        openGraph: {
            title: `${property.title} | Punto Tierra`,
            description: property.description || `Propiedad en ${property.city} - ${property.title}`,
            images: [property.image],
        },
    }
}

export async function generateStaticParams() {
    return properties.map((property) => ({
        id: property.id,
    }))
}

export default async function PropertyPage({ params }: Props) {
    const { id } = await params;
    const property = properties.find(p => p.id === id);

    if (!property) {
        notFound();
    }

    const relatedProperties = properties
        .filter(p => p.category === property.category && p.id !== property.id)
        .slice(0, 3);

    const categoryLinks: Record<string, string> = {
        'Residential': '/residencial',
        'Commercial': '/comercial',
        'Development': '/desarrollos',
        'Macrolot': '/macrolotes',
        'Plurifamiliar': '/macrolotes' // Assuming Plurifamiliar goes to Macrolotes based on page.tsx logic
    };

    const categoryNames: Record<string, string> = {
        'Residential': 'Residencial',
        'Commercial': 'Comercial',
        'Development': 'Desarrollos',
        'Macrolot': 'Macrolotes',
        'Plurifamiliar': 'Plurifamiliar'
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />

            {/* Hero Section with Property Image Background */}
            <div className="relative bg-gradient-to-br from-primary via-primary to-secondary pt-32 pb-24 px-4 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={property.image}
                        alt={`Portada de ${property.title} - ${property.propertyType} en ${property.city}`}
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40" />
                </div>

                <div className="relative container mx-auto z-10 text-center text-white">
                    {/* Breadcrumbs */}
                    <div className="flex justify-start mb-6 text-sm md:text-base backdrop-blur-sm bg-black/10 px-4 py-2 rounded-full w-fit">
                        <nav className="flex items-center gap-2 text-white/80">
                            <a href="/" className="hover:text-white transition-colors">Inicio</a>
                            <span>/</span>
                            <a href={categoryLinks[property.category] || '/'} className="hover:text-white transition-colors">
                                {categoryNames[property.category] || property.category}
                            </a>
                            <span>/</span>
                            <span className="text-white font-medium truncate max-w-[150px] md:max-w-xs">{property.title}</span>
                        </nav>
                    </div>

                    <h1 className="font-heading text-3xl md:text-5xl font-bold drop-shadow-lg mb-2">
                        {property.title}
                    </h1>
                    <p className="text-lg md:text-xl drop-shadow-md text-white/90 flex items-center justify-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {property.ubicacion}
                    </p>
                </div>
            </div>

            <div className="flex-grow py-12 relative z-20 px-4">
                <div className="container mx-auto">
                    <div className="max-w-7xl mx-auto">
                        <PropertyDetail property={property} />
                    </div>
                </div>
            </div>

            {/* Related Properties */}
            {relatedProperties.length > 0 && (
                <div className="bg-white border-t border-gray-100">
                    <CategorySection
                        title="Propiedades Similares"
                        description="Otras opciones que te podrían interesar."
                        properties={relatedProperties}
                        viewMoreLink={categoryLinks[property.category] || '/'}
                    />
                </div>
            )}

            <Footer />
            <WhatsAppButton />
        </main>
    );
}
