import type { Metadata } from "next";
import { negocio } from "@/content/negocio";
import { urlAbsoluta } from "./sitio";

interface MetaPagina {
  titulo: string;
  descripcion: string;
  ruta: string;
  /** Imagen Open Graph (ruta en /public). */
  imagen?: string;
}

/** Metadata única por página: título, descripción, canonical y Open Graph. */
export function metaPagina({ titulo, descripcion, ruta, imagen = "/og/gesetec-calderas.jpg" }: MetaPagina): Metadata {
  const url = urlAbsoluta(ruta);
  return {
    title: { absolute: titulo },
    description: descripcion,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url,
      siteName: negocio.nombre,
      title: titulo,
      description: descripcion,
      images: [{ url: imagen, width: 1200, height: 630, alt: `${negocio.nombre} – ${negocio.lema}` }],
    },
    twitter: { card: "summary_large_image", title: titulo, description: descripcion, images: [imagen] },
  };
}
