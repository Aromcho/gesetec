import datos from "@/content/generated/images.json";

export interface InfoImagen {
  ancho: number;
  alto: number;
  anchos: number[];
  blur: string;
  /** Huella del archivo original: cambia cuando cambia la foto. */
  v?: string;
}

const imagenes = datos as Record<string, InfoImagen>;

export function infoImagen(nombre: string): InfoImagen {
  const info = imagenes[nombre];
  if (!info) throw new Error(`Imagen "${nombre}" no encontrada. ¿Está en assets/fotos y corriste npm run images?`);
  return info;
}

/** URL de una imagen. Lleva ?v=<huella> para que una foto nueva con el mismo nombre no quede tapada por la caché. */
export function srcImagen(nombre: string, ancho: number): string {
  const v = imagenes[nombre]?.v;
  return `/img/${nombre}-${ancho}.webp${v ? `?v=${v}` : ""}`;
}

/** La versión más grande disponible (para JSON-LD y Open Graph). */
export function srcMayor(nombre: string): string {
  const { anchos } = infoImagen(nombre);
  return srcImagen(nombre, anchos[anchos.length - 1]);
}
