export interface Property {
    id: number;
    title: string;
    price: string;
    currency: string;
    terreno?: string;
    construccion?: string;
    especificaciones: string[];
    image: string;
    images?: string[];
    type: string;
}

export const properties: Property[] = [
    {
        id: 1,
        title: "Parque Milan 11",
        price: "$4,890,000.00",
        currency: "MXN",
        terreno: "143.615 m²",
        construccion: "238.135 m²",
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
        ],
        type: "Casa Residencial"
    },
    {
        id: 2,
        title: "Parque Milan 9",
        price: "$4,980,000.00",
        currency: "MXN",
        terreno: "143.345 m²",
        construccion: "248.97 m²",
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
        ],
        type: "Casa Residencial"
    },
    {
        id: 3,
        title: "Parque Milan 7",
        price: "$5,070,000.00",
        currency: "MXN",
        terreno: "143.323 m²",
        construccion: "270.08 m²",
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
        ],
        type: "Casa Residencial"
    },
    {
        id: 4,
        title: "COLIMA",
        price: "$5,300,000.00",
        currency: "MXN",
        terreno: "184.36 m²",
        construccion: "252.9 m²",
        especificaciones: [
            "Cocina integral con barra",
            "Cuarto de lavado",
            "3 habitaciones con baño c/u",
            "Principal con vestidor",
            "Terraza con pergolado",
            "Hab. de servicio con baño"
        ],
        image: "https://images.unsplash.com/photo-1600596542815-2495db969ef8?q=80&w=2075&auto=format&fit=crop",
        type: "Casa Residencial"
    },
    {
        id: 5,
        title: "VIENA",
        price: "$9,600,000.00",
        currency: "MXN",
        terreno: "207 m²",
        construccion: "357 m²",
        especificaciones: [
            "3 habitaciones con baño y vestidor c/u",
            "Estudio o 4ta hab",
            "Family room con baño",
            "Cuarto de servicio y lavado",
            "Cocina con barra y alacena"
        ],
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
        type: "Casa Residencial"
    },
    {
        id: 6,
        title: "MÓNACO",
        price: "$10,960,000.00",
        currency: "MXN",
        terreno: "250 m²",
        construccion: "374 m²",
        especificaciones: [
            "4 habitaciones",
            "Family room",
            "Estudio"
        ],
        image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop",
        type: "Casa Residencial"
    },
    {
        id: 7,
        title: "GRAN RESERVA",
        price: "Por confirmar",
        currency: "MXN",
        terreno: "260 m²",
        construccion: "400 m²",
        especificaciones: [
            "La veré el jueves",
            "por confirmar"
        ],
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop",
        type: "Casa Residencial"
    },
    {
        id: 8,
        title: "SAN JUAN",
        price: "$14,000,000.00",
        currency: "MXN",
        terreno: "por confirmar",
        construccion: "por confirmar",
        especificaciones: [
            "por confirmar"
        ],
        image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop",
        type: "Casa Residencial"
    },
    {
        id: 9,
        title: "ÁNIMAS",
        price: "$23,000,000.00",
        currency: "MXN",
        terreno: "1000 m²",
        construccion: "1800 m²",
        especificaciones: [
            "USADA",
            "3 HAB GRANDES CON BAÑO C/U Y DOBLE ALTURA",
            "JARDÍN",
            "SALA DE TV",
            "BAR",
            "PUERTAS DE SEGURIDAD",
            "COCINA GRANDE REMODELADA CON ALACENA",
            "CASCADA INTERIOR",
            "BODEGAS DE BLANCOS Y VAJILLAS",
            "2 CUARTO DE SERVICIO"
        ],
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop",
        type: "Casa Residencial"
    },
    {
        id: 10,
        title: "DEPA EN LA CIMA",
        price: "$4,700,000.00",
        currency: "MXN",
        terreno: "-",
        construccion: "170 m²",
        especificaciones: [
            "3 HAB",
            "2.5 BAÑOS",
            "CUARTO DE SERVICIO CON BAÑO",
            "LAVANDERÍA",
            "COCINA INTEGRAL",
            "2 COCHERAS",
            "VISTA AL POPO Y LA VISTA",
            "AMENIDADES: LUDOTECA, SALON DE JUEGOS, GYM, SALON USOS MULTIPLES"
        ],
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
        type: "Departamento"
    },
    {
        id: 11,
        title: "DEPA TORRES DE PLATA",
        price: "$8,200,000.00",
        currency: "MXN",
        terreno: "-",
        construccion: "227 m²",
        especificaciones: [
            "3 HAB CON VESTIDOR Y BAÑO C/U",
            "SALA COMEDOR CON BAR",
            "COCINA INTEGRAL CON ISLA",
            "CUARTO DE SERVICIO CON BAÑO",
            "LAVANDERÍA",
            "3 COCHERAS",
            "BODEGA",
            "AMENIDADES: ALBERCA, USOS MULTIPLES"
        ],
        image: "https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=2070&auto=format&fit=crop",
        type: "Departamento"
    },
    {
        id: 12,
        title: "DEPA PALMAS",
        price: "por confirmar",
        currency: "MXN",
        terreno: "-",
        construccion: "220 m²",
        especificaciones: [
            "3 HAB, PRINCIPAL CON VESTIDOR",
            "2.5 BAÑOS",
            "CUARTO DE SERVICIO CON BAÑO",
            "COCINA INTEGRAL",
            "LAVANDERÍA",
            "AMENIDADES: 3000M DE JARDÍN, PISTA, PADEL, GYM, BUSINESS CENTER Y CUARTO DE CHOFERES"
        ],
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
        type: "Departamento"
    },
    {
        id: 13,
        title: "AGUASCALIENTES",
        price: "$4,600,000.00",
        currency: "MXN",
        terreno: "POR CONFIRMAR",
        construccion: "POR CONFIRMAR",
        especificaciones: [
            "POR CONFIRMAR"
        ],
        image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop",
        type: "Casa Residencial"
    },
    {
        id: 14,
        title: "QUINTANA ROO",
        price: "$4,850,000.00",
        currency: "MXN",
        terreno: "145 m²",
        construccion: "250 m²",
        especificaciones: [
            "4 HAB CON BAÑO, PRINCIPAL CON VESTIDOR",
            "LAVANDERÍA",
            "COCINA CON ALACENA",
            "BAÑO VISITAS",
            "2 COCHERAS",
            "BODEGA",
            "TERRAZA CON PERGOLA Y ASADOR"
        ],
        image: "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2070&auto=format&fit=crop",
        type: "Casa Residencial"
    },
    {
        id: 15,
        title: "SONORA",
        price: "$6,650,000.00",
        currency: "MXN",
        terreno: "179 m²",
        construccion: "297 m²",
        especificaciones: [
            "4 HAB, 6 BAÑOS, 2 COCHERAS"
        ],
        image: "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=2078&auto=format&fit=crop",
        type: "Casa Residencial"
    },
    {
        id: 16,
        title: "SOFIA",
        price: "$7,280,000.00",
        currency: "MXN",
        terreno: "204 m²",
        construccion: "361 m²",
        especificaciones: [
            "3 HAB CON BAÑO, PRINCIPAL CON VESTIDOR",
            "SALÓN DE JUEGOS CON 1/2 BAÑO",
            "ROOFGARDEN",
            "CUARTO DE LAVADO Y SERVICIO CON BAÑO",
            "TERRAZA DE SERVICIO",
            "COCINA INTEGRAL CON ISLA Y BARRA DE GRANITO",
            "ESTUDIO",
            "JARDÍN",
            "COCHERA PARA 2 AUTOS."
        ],
        image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
        type: "Casa Residencial"
    },
    {
        id: 17,
        title: "NAPA",
        price: "$5,470,000.00",
        currency: "MXN",
        terreno: "-",
        construccion: "267 m²",
        especificaciones: [
            "4 HAB CON BAÑO",
            "2 MEDIOS BAÑOS",
            "COCINA INTEGRAL",
            "ROOF GARDEN",
            "GARAGE PARA 2 COCHES"
        ],
        image: "https://images.unsplash.com/photo-1599809275311-5d672072e270?q=80&w=2070&auto=format&fit=crop",
        type: "Townhouse"
    }
];
