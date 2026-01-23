import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "Punto Tierra | %s",
    default: "Casas en venta en Lomas de Angelópolis | Punto Tierra",
  },
  description:
    "Punto Tierra es una inmobiliaria especializada en la venta de casas en Lomas de Angelópolis, Puebla, ofreciendo opciones accesibles para vivir o invertir en una de las zonas con mayor plusvalía del estado.",
  keywords: [
    "casas en venta en Lomas de Angelópolis",
    "casas en Puebla",
    "comprar casa en Lomas de Angelópolis",
    "inversión inmobiliaria en Puebla",
    "casas para vivir o invertir",
  ],
  openGraph: {
    title: "Casas en venta en Lomas de Angelópolis | Punto Tierra",
    description:
      "Punto Tierra es una inmobiliaria especializada en la venta de casas en Lomas de Angelópolis, Puebla, ofreciendo opciones accesibles para vivir o invertir en una de las zonas con mayor plusvalía del estado.",
    url: "https://puntotierra.com", // Adjust as needed or use metadataBase
    siteName: "Punto Tierra",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "./",
  },
};

import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
