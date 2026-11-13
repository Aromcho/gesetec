import { infoImagen, srcImagen } from "@/lib/imagenes";

interface Props {
  nombre: string;
  alt: string;
  /** Atributo sizes (cuánto ocupa en pantalla). */
  sizes?: string;
  className?: string;
  /** Prioridad de carga (solo para la imagen principal de la pantalla). */
  prioridad?: boolean;
  /** Recorte por CSS: la imagen cubre el contenedor. */
  cubrir?: boolean;
}

/**
 * Imagen optimizada: WebP en varios tamaños + placeholder borroso mientras carga.
 * Los archivos los genera scripts/optimize-images.mjs a partir de assets/fotos.
 */
export function Foto({ nombre, alt, sizes = "100vw", className = "", prioridad = false, cubrir = true }: Props) {
  const info = infoImagen(nombre);
  const srcSet = info.anchos.map((w) => `${srcImagen(nombre, w)} ${w}w`).join(", ");
  const fallback = srcImagen(nombre, info.anchos[Math.min(1, info.anchos.length - 1)]);
  return (
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={info.ancho}
      height={info.alto}
      loading={prioridad ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={prioridad ? "high" : "auto"}
      className={`${cubrir ? "h-full w-full object-cover" : ""} ${className}`}
      style={{ backgroundImage: `url(${info.blur})`, backgroundSize: "cover", backgroundPosition: "center" }}
    />
  );
}
