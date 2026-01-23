import { properties } from "@/data/properties";

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://puntotierra.com/#organization",
                "name": "Punto Tierra",
                "url": "https://puntotierra.com",
                "logo": "https://puntotierra.com/logo.png", // Ensure this exists or update
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+52-222-192-1012",
                    "contactType": "sales",
                    "areaServed": "Lomas de Angelópolis"
                }
            },
            {
                "@type": "RealEstateAgent",
                "@id": "https://puntotierra.com/#agent",
                "name": "Punto Tierra",
                "description": "Punto Tierra es una inmobiliaria especializada en la venta de casas en Lomas de Angelópolis, Puebla, ofreciendo opciones accesibles para vivir o invertir en una de las zonas con mayor plusvalía del estado.",
                "parentOrganization": {
                    "@id": "https://puntotierra.com/#organization"
                },
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lomas de Angelópolis",
                    "addressRegion": "Puebla",
                    "addressCountry": "MX"
                },
                "priceRange": "$$$"
            },
            {
                "@type": "OfferCatalog",
                "@id": "https://puntotierra.com/#catalog",
                "name": "Catálogo de Casas en Lomas de Angelópolis",
                "itemListElement": properties.map((prop) => ({
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "SingleFamilyResidence",
                        "name": `Casa en Lomas de Angelópolis - ${prop.title}`,
                        "description": prop.especificaciones[0] || "Casa residencial de lujo",
                        "numberOfRooms": parseInt(prop.especificaciones.find(e => e.includes("hab")) || "3"), // Rough extraction
                    },
                    "price": prop.price.replace(/[^0-9.]/g, ""),
                    "priceCurrency": prop.currency
                }))
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
