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
    default: "Casas en venta en zona Angelópolis | Punto Tierra",
  },
  description:
    "Punto Tierra es una inmobiliaria especializada en la venta de casas en zona Angelópolis, Puebla, ofreciendo opciones accesibles para vivir o invertir en una de las zonas con mayor plusvalía del estado.",
  keywords: [
    "casas en venta en zona Angelópolis",
    "casas en Puebla",
    "comprar casa en zona Angelópolis",
    "inversión inmobiliaria en Puebla",
    "casas para vivir o invertir",
  ],
  openGraph: {
    title: "Casas en venta en zona Angelópolis | Punto Tierra",
    description:
      "Punto Tierra es una inmobiliaria especializada en la venta de casas en zona Angelópolis, Puebla, ofreciendo opciones accesibles para vivir o invertir en una de las zonas con mayor plusvalía del estado.",
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PCTDVKNF');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="antialiased font-body">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCTDVKNF"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
