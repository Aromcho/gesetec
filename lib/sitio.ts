import { negocio } from "@/content/negocio";

/** URL absoluta a partir de una ruta del sitio. */
export function urlAbsoluta(ruta = "/"): string {
  return ruta === "/" ? negocio.url : `${negocio.url}${ruta}`;
}

/** Navegación principal (header y pie). */
export const navegacion = [
  { href: "/service-oficial-peisa", texto: "Service PEISA" },
  { href: "/#servicios", texto: "Servicios" },
  { href: "/#trabajos", texto: "Trabajos" },
  { href: "/#zonas", texto: "Zonas" },
  { href: "/#resenas", texto: "Reseñas" },
  { href: "/#contacto", texto: "Contacto" },
] as const;
