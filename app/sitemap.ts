import type { MetadataRoute } from "next";
import { servicios } from "@/content/servicios";
import { marcas } from "@/content/marcas";
import { paginasZona } from "@/content/zonas";
import { urlAbsoluta } from "@/lib/sitio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const hoy = new Date();
  return [
    { url: urlAbsoluta("/"), lastModified: hoy, changeFrequency: "weekly", priority: 1 },
    { url: urlAbsoluta("/service-oficial-peisa"), lastModified: hoy, changeFrequency: "weekly", priority: 0.95 },
    ...servicios.map((s) => ({ url: urlAbsoluta(`/servicios/${s.slug}`), lastModified: hoy, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...paginasZona.map((z) => ({ url: urlAbsoluta(`/zonas/${z.slug}`), lastModified: hoy, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...marcas.map((m) => ({ url: urlAbsoluta(`/marcas/${m.slug}`), lastModified: hoy, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
