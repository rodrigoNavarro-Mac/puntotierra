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
        title: "Parque Colima 15",
        price: "$5,300,000.00",
        currency: "MXN",
        terreno: "184.36 m²",
        construccion: "252.9 m²",
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
        ],
        type: "Casa Residencial"
    }
]