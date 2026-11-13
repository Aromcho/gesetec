import datos from "@/content/generated/images.json";

export interface InfoImagen {
  ancho: number;
  alto: number;
  anchos: number[];
  blur: string;
}

const imagenes = datos as Record<string, InfoImagen>;

export function infoImagen(nombre: string): InfoImagen {
  const info = imagenes[nombre];
  if (!info) throw new Error(`Imagen "${nombre}" no encontrada. ¿Está en assets/fotos y corriste npm run images?`);
  return info;
}

export const srcImagen = (nombre: string, ancho: number) => `/img/${nombre}-${ancho}.webp`;

/** La versión más grande disponible (para JSON-LD y Open Graph). */
export function srcMayor(nombre: string): string {
  const { anchos } = infoImagen(nombre);
  return srcImagen(nombre, anchos[anchos.length - 1]);
}
