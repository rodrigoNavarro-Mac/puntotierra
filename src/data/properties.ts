export interface Property {
    id: string;
    title: string;
    category: 'Residential' | 'Commercial' | 'Development' | 'Macrolot';
    listingType: 'Sale' | 'Rent';
    propertyType: 'House' | 'Apartment' | 'Office' | 'Premise' | 'Land';
    city: string;
    ubicacion: string; // Full location for display and SEO
    developmentName?: string;
    price?: number | null;
    currency?: string;
    terreno?: string;
    construccion?: string;
    area: number;
    especificaciones: string[];
    image: string;
    images: string[];
    description?: string;
}

export const properties: Property[] = [
    // Existing Residential Properties - Migrated
    {
        id: "pm11",
        title: "Parque Milan 11",
        category: "Residential",
        listingType: "Sale",
        propertyType: "House",
        city: "Puebla",
        ubicacion: "Parque Milan, Lomas de Angelópolis, Puebla",
        price: 4890000,
        currency: "MXN",
        terreno: "143.615 m²",
        construccion: "238.135 m²",
        area: 238.135,
        especificaciones: [
            "Cochera para 2 autos con cuarto de maquinaria y bodega",
            "Lobby con doble altura",
            "Cocina integral con isla de granito y alacena",
            "Sala y comedor iluminado con ventanales en dos lados y 1/2 baño",
            "3 habitaciones con baño c/u principal con walk in closet",
            "Cuarto de usos múltiples con 1/2 baño",
            "Terraza para roofgarden",
            "Area de lavado techado",
            "Cancellería de vidrio templado y aluminio premium matte",
            "Piso de formato grande matte",
            "Baños con cubiertas de marmol"
        ],
        image: "/img/PM11/PM11_1.jpeg",
        images: [
            "/img/PM11/PM11_1.jpeg",
            "/img/PM11/PM11_2.jpeg",
            "/img/PM11/PM11_3.jpeg",
            "/img/PM11/PM11_4.jpeg",
            "/img/PM11/PM11_5.jpeg",
            "/img/PM11/PM11_6.jpeg",
            "/img/PM11/PM11_7.jpeg",
            "/img/PM11/PM11_8.jpeg",
            "/img/PM11/PM11_9.jpeg",
            "/img/PM11/PM11_10.jpeg",
            "/img/PM11/PM11_11.jpeg",
            "/img/PM11/PM11_12.jpeg"
        ]
    },
    {
        id: "pm9",
        title: "Parque Milan 9",
        category: "Residential",
        listingType: "Sale",
        propertyType: "House",
        city: "Puebla",
        ubicacion: "Parque Milan, Lomas de Angelópolis, Puebla",
        price: 4980000,
        currency: "MXN",
        terreno: "143.345 m²",
        construccion: "248.97 m²",
        area: 248.97,
        especificaciones: [
            "Cochera para 2 autos con cuarto de maquinaria y bodega",
            "Cocina integral con isla de granito y alacena",
            "Sala y comedor iluminado con ventanales en dos lados y 1/2 baño",
            "3 habitaciones con baño c/u principal con walk in closet",
            "Cuarto de TV",
            "Cuarto de usos múltiples con 1/2 baño",
            "Terraza para roofgarden",
            "Cuarto de servicio con baño completo y area de lavado techado",
            "Cancellería de vidrio templado y aluminio premium matte",
            "Piso de formato grande matte",
            "Baños con cubiertas de marmol"
        ],
        image: "/img/PM9/PM9_1.jpg",
        images: [
            "/img/PM9/PM9_1.jpg",
            "/img/PM9/PM9_2.jpg",
            "/img/PM9/PM9_3.jpg",
            "/img/PM9/PM9_4.jpg",
            "/img/PM9/PM9_5.jpg",
            "/img/PM9/PM9_6.jpg",
            "/img/PM9/PM9_7.jpg",
            "/img/PM9/PM9_8.jpg",
            "/img/PM9/PM9_9.jpg",
            "/img/PM9/PM9_10.jpg",
            "/img/PM9/PM9_11.jpg",
            "/img/PM9/PM9_12.jpg"
        ]
    },
    {
        id: "pm7",
        title: "Parque Milan 7",
        category: "Residential",
        listingType: "Sale",
        propertyType: "House",
        city: "Puebla",
        ubicacion: "Parque Milan, Lomas de Angelópolis, Puebla",
        price: 5070000,
        currency: "MXN",
        terreno: "143.323 m²",
        construccion: "270.08 m²",
        area: 270.08,
        especificaciones: [
            "Cochera para 2 autos con cuarto de maquinaria y bodega",
            "Cocina integral con isla de granito y alacena",
            "Sala y comedor iluminado con ventanales en dos lados y 1/2 baño",
            "3 habitaciones con baño c/u principal con walk in closet",
            "Cuarto de TV",
            "Cuarto de usos múltiples con 1/2 baño",
            "Terraza para roofgarden",
            "Cuarto de servicio con baño completo y area de lavado techado",
            "Cancellería de vidrio templado y aluminio premium matte",
            "Piso de formato grande matte",
            "Baños con cubiertas de marmol"
        ],
        image: "/img/PM7/PM7_1.jpeg",
        images: [
            "/img/PM7/PM7_1.jpeg",
            "/img/PM7/PM7_2.jpg",
            "/img/PM7/PM7_3.jpg",
            "/img/PM7/PM7_5.jpeg",
            "/img/PM7/PM7_6.jpeg",
            "/img/PM7/PM7_7.jpeg",
            "/img/PM7/PM7_8.jpeg",
            "/img/PM7/PM7_9.jpeg",
            "/img/PM7/PM7_10.jpeg",
            "/img/PM7/PM7_11.jpeg",
            "/img/PM7/PM7_12.jpeg",
            "/img/PM7/PM7_13.jpeg"
        ]
    },
    {
        id: "pc15",
        title: "Parque Colima 15",
        category: "Residential",
        listingType: "Sale",
        propertyType: "House",
        city: "Puebla",
        ubicacion: "Parque Colima, Lomas de Angelópolis, Puebla",
        price: 5300000,
        currency: "MXN",
        terreno: "184.36 m²",
        construccion: "252.9 m²",
        area: 252.9,
        especificaciones: [
            "Cocina integral con barra",
            "Cuarto de lavado",
            "3 habitaciones con baño c/u",
            "Principal con vestidor",
            "Terraza con pergolado, asador ",
            "Hab. de servicio con baño",
            "Jardin interior",
            "Jardin trasero",
            "Alacena de cocina",
            "Cancelleria de vidrio templado y aluminio premium matte"
        ],
        image: "/img/PC15/PC15_1.jpeg",
        images: [
            "/img/PC15/PC15_1.jpeg",
            "/img/PC15/PC15_2.jpeg",
            "/img/PC15/PC15_3.jpeg",
            "/img/PC15/PC15_4.jpeg",
            "/img/PC15/PC15_5.jpeg",
            "/img/PC15/PC15_6.jpeg",
            "/img/PC15/PC15_7.jpeg",
            "/img/PC15/PC15_8.jpeg",
            "/img/PC15/PC15_9.jpeg",
            "/img/PC15/PC15_10.jpeg",
            "/img/PC15/PC15_11.jpeg",
            "/img/PC15/PC15_12.jpeg",
            "/img/PC15/PC15_13.jpeg",
            "/img/PC15/PC15_14.jpeg",
            "/img/PC15/PC15_15.jpeg"
        ]
    },
    {
        id: "pc17",
        title: "Parque Colima 17",
        category: "Residential",
        listingType: "Sale",
        propertyType: "House",
        city: "Puebla",
        ubicacion: "Parque Colima, Lomas de Angelópolis, Puebla",
        price: 5154000,
        currency: "MXN",
        terreno: "180 m²",
        construccion: "296 m²",
        area: 296,
        especificaciones: [
            "Cochera para 2 coches con cuarto de maquinas",
            "Doble altura en lobby y acceso a cochera",
            "Cocina integral con alacena y cuarto de servicio/lavado",
            "Jardín trasero",
            "1/2 baño",
            "Cuarto de TV",
            "Canceles de vidrio templado y aluminio",
            "3 habitaciones con baño, principal con walk in closet",
            "Cuarto multiusos con baño completo",
            "Estudio",
            "Terraza para roof"
        ],
        image: "/img/PC17/PC17_1.jpeg",
        images: [
            "/img/PC17/PC17_1.jpeg",
            "/img/PC17/PC17_2.jpeg",
            "/img/PC17/PC17_3.jpeg",
            "/img/PC17/PC17_4.jpeg",
            "/img/PC17/PC17_5.jpeg",
            "/img/PC17/PC17_6.jpeg",
            "/img/PC17/PC17_7.jpeg",
            "/img/PC17/PC17_8.jpeg",
            "/img/PC17/PC17_9.jpeg",
            "/img/PC17/PC17_10.jpeg",
            "/img/PC17/PC17_11.jpeg",
            "/img/PC17/PC17_12.jpeg",
            "/img/PC17/PC17_13.jpeg",
            "/img/PC17/PC17_14.jpeg",
            "/img/PC17/PC17_15.jpeg",
            "/img/PC17/PC17_16.jpeg",
            "/img/PC17/PC17_17.jpeg",
            "/img/PC17/PC17_18.jpeg",
            "/img/PC17/PC17_19.jpeg",
            "/img/PC17/PC17_20.jpeg"
        ]
    },

    // Developments
    {
        id: "fuego-cancun",
        title: "Fuego",
        category: "Development",
        listingType: "Sale",
        propertyType: "Apartment",
        city: "Cancún",
        ubicacion: "Cancún, Quintana Roo",
        developmentName: "Fuego",
        price: 3500000,
        currency: "MXN",
        area: 85,
        especificaciones: [
            "Ubicación privilegiada en Cancún, Quintana Roo",
            "Desarrollo moderno con amenidades premium",
            "Cerca de las mejores playas del Caribe",
            "Seguridad 24/7",
            "Gimnasio y áreas recreativas",
            "Alberca infinity"
        ],
        description: "Desarrollo exclusivo en Cancún con vistas al mar Caribe",
        image: "/img/placeholder-fuego.jpg",
        images: ["/img/placeholder-fuego.jpg"]
    },
    {
        id: "amura-merida",
        title: "Amura",
        category: "Development",
        listingType: "Sale",
        propertyType: "Apartment",
        city: "Mérida",
        ubicacion: "Temozon Norte, Mérida, Yucatán",
        developmentName: "Amura",
        price: 2800000,
        currency: "MXN",
        area: 75,
        especificaciones: [
            "Ubicación estratégica en Mérida, Yucatán",
            "Arquitectura contemporánea",
            "Acabados de lujo",
            "Amenidades completas",
            "Roof garden",
            "Estacionamiento techado"
        ],
        description: "Desarrollo contemporáneo en el corazón de Mérida",
        image: "/img/placeholder-amura.jpg",
        images: ["/img/placeholder-amura.jpg"]
    },

    // Commercial
    {
        id: "fratta-office-1",
        title: "Fratta Oficinas",
        category: "Commercial",
        listingType: "Rent",
        propertyType: "Office",
        city: "Puebla",
        ubicacion: "zona Angelópolis, Puebla",
        developmentName: "Fratta",
        area: 18000,
        especificaciones: [
            "Complejo corporativo de 18,000 m² Clase A+",
            "Torre B: Oficinas en renta desde 350 m²",
            "Torre C: Plantas desde 720 m²",
            "Torre D: Oficinas en venta desde 96 m²",
            "Torre A: Locales comerciales",
            "3 sótanos de estacionamiento",
            "Más de 600 cajones de estacionamiento",
            "1 cajón por cada 30 m²",
            "100 estaciones para bicicletas",
            "Cajones con carga eléctrica",
            "Regaderas",
            "Auditorio capacidad 100 personas",
            "Salas de juntas",
            "Sala de consejo",
            "Servicio de cafetería",
            "Gimnasio totalmente equipado",
            "Configuraciones flexibles adaptables"
        ],
        description: "Complejo corporativo de oficinas Clase A+ conformado por 4 edificios interconectados, diseñado para albergar empresas líderes con acceso a amenidades exclusivas y espacios flexibles adaptables a distintos tamaños de operación",
        image: "/img/Fratta/FRATTA-1.jpg",
        images: [
            "/img/Fratta/FRATTA-1.jpg",
            "/img/Fratta/FRATTA-2.jpg",
            "/img/Fratta/FRATTA-3.jpg",
            "/img/Fratta/FRATTA-4.jpg",
            "/img/Fratta/FRATTA-5.jpg",
            "/img/Fratta/FRATTA-6.jpg",
            "/img/Fratta/FRATTA-7.jpg",
            "/img/Fratta/FRATTA-8.jpg",
            "/img/Fratta/FRATTA-9.jpg",
            "/img/Fratta/FRATTA-10.jpg",
            "/img/Fratta/FRATTA-12.jpeg",
            "/img/Fratta/FRATTA-13.jpg"
        ]
    },
    {
        id: "local-angelopolis-1",
        title: "Local Comercial",
        category: "Commercial",
        listingType: "Sale",
        propertyType: "Premise",
        city: "Puebla",
        ubicacion: "Zona Angelópolis, Puebla",
        price: 4500000,
        currency: "MXN",
        area: 180,
        especificaciones: [
            "Excelente ubicación comercial",
            "Alto flujo peatonal",
            "Estacionamiento amplio",
            "Instalaciones listas para operar",
            "Acceso a vías principales"
        ],
        description: "Local comercial en zona de alto crecimiento",
        image: "/img/placeholder-local.jpg",
        images: ["/img/placeholder-local.jpg"]
    },

    // Macrolots
    {
        id: "macrolote-atlixco",
        title: "Macrolote Atlixco",
        category: "Macrolot",
        listingType: "Sale",
        propertyType: "Land",
        city: "Atlixco",
        ubicacion: "Atlixco, Puebla",
        price: 15000000,
        currency: "MXN",
        area: 5000,
        terreno: "5,000 m²",
        especificaciones: [
            "Terreno ideal para desarrollo inmobiliario",
            "Ubicación estratégica",
            "Todos los servicios disponibles",
            "Documentación en regla",
            "Gran potencial de plusvalía"
        ],
        description: "Excelente oportunidad de inversión en Atlixco",
        image: "/img/placeholder-macrolote.jpg",
        images: ["/img/placeholder-macrolote.jpg"]
    },
    {
        id: "macrolote-cholula",
        title: "Macrolote Cholula",
        category: "Macrolot",
        listingType: "Sale",
        propertyType: "Land",
        city: "Cholula",
        ubicacion: "San Andrés Cholula, Puebla",
        price: 12000000,
        currency: "MXN",
        area: 4000,
        terreno: "4,000 m²",
        especificaciones: [
            "Terreno en zona de alto crecimiento",
            "Acceso a servicios",
            "Ideal para proyectos residenciales o comerciales",
            "Escrituras al día",
            "Zona con alta demanda"
        ],
        description: "Inversión estratégica en Cholula",
        image: "/img/placeholder-macrolote.jpg",
        images: ["/img/placeholder-macrolote.jpg"]
    }
]