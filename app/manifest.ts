import type { MetadataRoute } from "next";
import { negocio } from "@/content/negocio";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${negocio.nombre} – ${negocio.lema}`,
    short_name: negocio.nombreCorto,
    description: negocio.descripcion,
    start_url: "/",
    display: "standalone",
    background_color: "#040B1D",
    theme_color: "#040B1D",
    lang: "es-AR",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/brand/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
