import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

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
    url: "https://puntotierra.mx",
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
  icons: {
    icon: "/logo_corto.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="antialiased font-body">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
