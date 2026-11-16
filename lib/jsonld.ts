/**
 * Datos estructurados (JSON-LD) para Google.
 * HVACBusiness (en todas las páginas), Service, Product, BreadcrumbList y FAQPage.
 * Sin AggregateRating propio: las reseñas viven en la ficha de Google.
 * Product sólo con precio (content/venta.ts): sin oferta, Search Console lo marca como error.
 */
import { negocio } from "@/content/negocio";
import { marcas, peisa } from "@/content/marcas";
import type { Faq } from "@/content/faqs";
import type { Servicio } from "@/content/servicios";
import type { Equipo } from "@/content/calderas";
import { getProductoVenta, preciosValidosHasta, type ProductoVenta } from "@/content/venta";
import { horariosSchema } from "./horarios";
import { urlAbsoluta } from "./sitio";
import { srcMayor } from "./imagenes";

export const ID_NEGOCIO = `${negocio.url}/#negocio`;

const areaServed = negocio.zonas.map((z) =>
  z.tipo === "localidad"
    ? { "@type": "City", name: z.nombre, containedInPlace: { "@type": "State", name: "Provincia de Buenos Aires" } }
    : { "@type": "Place", name: `${z.nombre} (barrio privado)`, containedInPlace: { "@type": "State", name: "Provincia de Buenos Aires" } },
);

/** Una zona puntual (para las páginas /zonas). */
export function areaZona(nombres: string[]) {
  return areaServed.filter((a) => nombres.some((n) => a.name.startsWith(n)));
}

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

export function servicioSchema(s: Pick<Servicio, "nombre" | "seoDescripcion"> & { ruta: string; tipo?: string; zonas?: string[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.nombre,
    serviceType: s.tipo ?? s.nombre,
    description: s.seoDescripcion,
    url: urlAbsoluta(s.ruta),
    provider: { "@id": ID_NEGOCIO },
    areaServed: s.zonas ? areaZona(s.zonas) : areaServed,
  };
}

/**
 * Product con su oferta. Google exige precio (offers), reseñas o calificación para mostrar un Product:
 * por eso sólo se generan para los equipos con precio publicado (content/venta.ts).
 */
export function productoVentaSchema(p: ProductoVenta) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": urlAbsoluta(`/#producto-${p.id}`),
    name: `${p.marca} ${p.modelo}`,
    category: p.categoria,
    brand: { "@type": "Brand", name: p.marca },
    description: p.descripcion,
    image: urlAbsoluta(srcMayor(p.foto)),
    offers: {
      "@type": "Offer",
      url: urlAbsoluta("/#equipos"),
      price: p.precio.toFixed(2),
      priceCurrency: "ARS",
      priceValidUntil: preciosValidosHasta,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: p.precio.toFixed(2),
        priceCurrency: "ARS",
        valueAddedTaxIncluded: p.ivaIncluido,
      },
      seller: { "@id": ID_NEGOCIO },
    },
  };
}

/** Product de un equipo sólo si tiene precio publicado; si no, null (filtrar con .filter(Boolean)). */
export function productoSchema(e: Equipo) {
  const p = getProductoVenta(e.id);
  return p ? productoVentaSchema(p) : null;
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
