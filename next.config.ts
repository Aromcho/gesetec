import type { NextConfig } from "next";

// Sitio 100% estático: `npm run build` deja todo en out/ para servirlo con Nginx.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true }, // las imágenes ya salen optimizadas por scripts/optimize-images.mjs
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
