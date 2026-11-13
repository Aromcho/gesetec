import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { negocio } from "@/content/negocio";
import { negocioSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/JsonLd";
import { Cabecera } from "@/components/Cabecera";
import { Pie } from "@/components/Pie";
import { AccionesFijas } from "@/components/AccionesFijas";
import { PedidoCarga } from "@/components/PedidoCarga";
import { Calor } from "@/components/Calor";
import { Analytics } from "@/components/Analytics";

// Archivo (variable: peso 100–900 y ancho 62–125%). Los titulares usan el ancho máximo, como el logo.
const archivo = localFont({
  src: "./fonts/archivo-latin-wdth.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(negocio.url),
  title: { default: `${negocio.nombre} | Service oficial PEISA en Villa Gesell`, template: `%s | ${negocio.nombre}` },
  description: negocio.descripcion,
  applicationName: negocio.nombre,
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/brand/gesetec-llama.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
  robots: { index: true, follow: true, "max-image-preview": "large" },
};

export const viewport: Viewport = {
  themeColor: "#040B1D",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR" className={archivo.variable}>
      <body>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-noche">
          Saltar al contenido
        </a>
        <Cabecera />
        <main id="contenido">{children}</main>
        <Pie />
        <AccionesFijas />
        <PedidoCarga />
        <Calor />
        <Analytics />
        <JsonLd datos={negocioSchema()} />
      </body>
    </html>
  );
}
