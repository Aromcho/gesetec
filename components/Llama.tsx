import { LLAMA } from "./llama-trazos";

interface Props {
  className?: string;
  /** "encender": se prende al cargar y después late (portada). "viva": late. "quieta": sin animación. */
  modo?: "encender" | "viva" | "quieta";
  /** Muestra el círculo azul marino del logo. */
  circulo?: boolean;
  /** Halo de luz detrás de la llama. */
  brillo?: boolean;
  titulo?: string;
}

/**
 * La llama del logo de Gesetec: mitad azul (frío) y mitad roja (calor).
 * Es el elemento firma del sitio. Las animaciones son CSS (globals.css) para no sumar JavaScript.
 */
export function Llama({ className, modo = "viva", circulo = true, brillo = false, titulo }: Props) {
  const { ancho, alto, circulo: c } = LLAMA;
  const pad = brillo ? 60 : 2;
  const clase = modo === "encender" ? "llama-encender" : modo === "viva" ? "llama-viva" : "";
  const id = `llama-${modo}-${brillo ? "b" : "n"}`;
  return (
    <svg
      viewBox={`${-pad} ${-pad} ${ancho + pad * 2} ${alto + pad * 2}`}
      className={`${clase} ${className ?? ""}`}
      role={titulo ? "img" : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
      focusable="false"
    >
      {brillo && (
        <defs>
          <radialGradient id={`${id}-frio`} cx="0.3" cy="0.55" r="0.6">
            <stop offset="0" stopColor="#3371D1" stopOpacity="0.55" />
            <stop offset="1" stopColor="#3371D1" stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`${id}-calor`} cx="0.68" cy="0.62" r="0.55">
            <stop offset="0" stopColor="#E3322A" stopOpacity="0.55" />
            <stop offset="1" stopColor="#E3322A" stopOpacity="0" />
          </radialGradient>
        </defs>
      )}
      {brillo && (
        <g className="llama-brillo" style={{ transformOrigin: "50% 60%" }}>
          <ellipse cx={c.cx - 14} cy={c.cy - 6} rx={c.r + 52} ry={c.r + 62} fill={`url(#${id}-frio)`} />
          <ellipse cx={c.cx + 18} cy={c.cy + 8} rx={c.r + 48} ry={c.r + 56} fill={`url(#${id}-calor)`} />
        </g>
      )}
      {circulo && <circle cx={c.cx} cy={c.cy} r={c.r} fill="#0B1A38" stroke="#22355f" strokeWidth={3} />}
      <path className="llama-mitad llama-azul" d={LLAMA.azul} fill="#3371D1" />
      <path className="llama-mitad llama-roja" d={LLAMA.roja} fill="#E3322A" />
    </svg>
  );
}
