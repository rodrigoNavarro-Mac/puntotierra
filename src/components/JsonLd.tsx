import { properties } from "@/data/properties";

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "RealEstateAgent",
                "@id": "https://puntotierra.mx/#organization",
                "name": "Punto Tierra",
                "url": "https://puntotierra.mx",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://puntotierra.mx/logo_corto.png",
                    "width": 112,
                    "height": 112
                },
                "image": "https://puntotierra.mx/logo_corto.png",
                "description": "Punto Tierra ofrece propiedades residenciales y comerciales, desarrollos exclusivos y macrolotes en las mejores ubicaciones de México.",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Puebla",
                    "addressRegion": "Puebla",
                    "addressCountry": "MX"
                },
                "telephone": "+52-222-192-1012",
                "priceRange": "$$$"
            },
            {
                "@type": "WebSite",
                "@id": "https://puntotierra.mx/#website",
                "url": "https://puntotierra.mx",
                "name": "Punto Tierra",
                "publisher": {
                    "@id": "https://puntotierra.mx/#organization"
                }
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
