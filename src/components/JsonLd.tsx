import { properties } from "@/data/properties";

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://puntotierra.mx/#organization",
                "name": "Punto Tierra",
                "url": "https://puntotierra.mx",
                "logo": "https://puntotierra.mx/logo.png", // Ensure this exists or update
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+52-222-192-1012",
                    "contactType": "sales",
                    "areaServed": "zona Angelópolis"
                }
            },
            {
                "@type": "RealEstateAgent",
                "@id": "https://puntotierra.mx/#agent",
                "name": "Punto Tierra",
                "description": "Punto Tierra ofrece propiedades residenciales y comerciales, desarrollos exclusivos y macrolotes en las mejores ubicaciones de México.",
                "parentOrganization": {
                    "@id": "https://puntotierra.mx/#organization"
                },
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Puebla",
                    "addressRegion": "Puebla",
                    "addressCountry": "MX"
                },
                "priceRange": "$$$"
            },
            {
                "@type": "OfferCatalog",
                "@id": "https://puntotierra.mx/#catalog",
                "name": "Catálogo de Propiedades Inmobiliarias en México",
                "itemListElement": properties.map((prop) => ({
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": prop.category === 'Residential' ? "SingleFamilyResidence" :
                            prop.category === 'Commercial' ? "CommercialRealEstate" :
                                prop.category === 'Development' ? "Apartment" : "RealEstateListing",
                        "name": `${prop.title} - ${prop.ubicacion}`,
                        "description": prop.description || prop.especificaciones[0] || `Propiedad en ${prop.ubicacion}`,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": prop.city,
                            "addressRegion": prop.ubicacion,
                            "addressCountry": "MX"
                        },
                        "numberOfRooms": parseInt(prop.especificaciones.find(e => e.includes("hab")) || "0"),
                        "floorSize": {
                            "@type": "QuantitativeValue",
                            "value": prop.area,
                            "unitCode": "MTK"
                        }
                    },
                    ...(prop.price != null && prop.currency ? {
                        "price": prop.price.toString(),
                        "priceCurrency": prop.currency
                    } : {}),
                    "availability": "https://schema.org/InStock",
                    "seller": {
                        "@id": "https://puntotierra.mx/#organization"
                    }
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
