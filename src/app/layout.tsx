import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Punto Tierra | Tu punto de partida en bienes raíces",
  description: "Lotes y casas de nivel medio a alto para vivir o invertir, sin complicaciones. Propiedades seleccionadas en Mérida, Yucatán.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
