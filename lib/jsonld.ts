/**
 * Datos estructurados (JSON-LD) para Google.
 * HVACBusiness (en todas las páginas), Service, Product, BreadcrumbList y FAQPage.
 * Sin AggregateRating propio: las reseñas viven en la ficha de Google.
 */
import { negocio } from "@/content/negocio";
import { marcas, peisa } from "@/content/marcas";
import type { Faq } from "@/content/faqs";
import type { Servicio } from "@/content/servicios";
import type { Equipo } from "@/content/calderas";
import { horariosSchema } from "./horarios";
import { urlAbsoluta } from "./sitio";
import { srcMayor } from "./imagenes";

export const ID_NEGOCIO = `${negocio.url}/#negocio`;

const areaServed = [
  ...negocio.zonas.map((z) => ({
    "@type": "City",
    name: z.nombre,
    containedInPlace: { "@type": "State", name: "Buenos Aires" },
  })),
];

export function negocioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": ID_NEGOCIO,
    name: negocio.nombre,
    alternateName: "Gesetec",
    slogan: negocio.lema,
    description: negocio.descripcion,
    url: negocio.url,
    logo: urlAbsoluta("/brand/gesetec-logo.png"),
    image: [urlAbsoluta("/og/gesetec-calderas.jpg"), urlAbsoluta("/brand/gesetec-logo.png")],
    telephone: negocio.telefono.tel,
    email: negocio.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: negocio.direccion.calle,
      addressLocality: negocio.direccion.localidad,
      addressRegion: negocio.direccion.provincia,
      postalCode: negocio.direccion.codigoPostal,
      addressCountry: negocio.direccion.pais,
    },
    geo: { "@type": "GeoCoordinates", latitude: negocio.geo.lat, longitude: negocio.geo.lng },
    hasMap: negocio.googleMaps,
    openingHoursSpecification: horariosSchema(),
    areaServed,
    sameAs: [negocio.instagram.url, negocio.googleMaps],
    brand: [peisa.nombre, ...marcas.map((m) => m.nombre)].map((name) => ({ "@type": "Brand", name })),
    knowsAbout: [
      "Calderas",
      "Calefacción central",
      "Service oficial PEISA",
      "Losa radiante",
      "Climatización de piscinas",
      "Bombas presurizadoras",
    ],
    priceRange: "$$",
  };
}

export function servicioSchema(s: Pick<Servicio, "nombre" | "seoDescripcion"> & { ruta: string; tipo?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.nombre,
    serviceType: s.tipo ?? s.nombre,
    description: s.seoDescripcion,
    url: urlAbsoluta(s.ruta),
    provider: { "@id": ID_NEGOCIO },
    areaServed,
  };
}

export function productoSchema(e: Equipo) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${e.marca} ${e.modelo}`,
    category: e.categoria,
    brand: { "@type": "Brand", name: e.marca },
    description: e.descripcion,
    ...(e.foto ? { image: urlAbsoluta(srcMayor(e.foto)) } : {}),
  };
}

export function migasSchema(items: { nombre: string; ruta: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.nombre,
      item: urlAbsoluta(it.ruta),
    })),
  };
}

export function faqSchema(lista: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: lista.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: { "@type": "Answer", text: f.respuesta },
    })),
  };
}
