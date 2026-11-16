import { Llama } from "./Llama";
import { LLAMA } from "./llama-trazos";

/**
 * La llama de la portada con el sello "Service oficial PEISA" girando alrededor.
 * El halo es un degradé difuminado (blur), sin bordes duros; todo en CSS (sin JavaScript).
 */
export function LlamaPortada({ className = "" }: { className?: string }) {
  const { ancho, alto, circulo } = LLAMA;
  const R = circulo.r + 24;
  const texto = "SERVICE OFICIAL PEISA · VILLA GESELL · CALEFACCIÓN · ";
  // Centro del círculo en % del cuadro (para girar el sello alrededor de la llama).
  const ox = ((circulo.cx + 60) / (ancho + 120)) * 100;
  const oy = ((circulo.cy + 60) / (alto + 120)) * 100;

  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <div
        className="absolute aspect-square w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          left: `${ox}%`,
          top: `${oy}%`,
          background:
            "radial-gradient(circle at 38% 42%, rgb(51 113 209 / 0.55), transparent 62%), radial-gradient(circle at 64% 62%, rgb(227 50 42 / 0.5), transparent 60%)",
        }}
      />
      <div className="sello-girar absolute inset-0 will-change-transform" style={{ transformOrigin: `${ox}% ${oy}%` }}>
        <svg viewBox={`-60 -60 ${ancho + 120} ${alto + 120}`} className="h-full w-full">
          <defs>
            <path id="sello-camino" d={`M ${circulo.cx - R},${circulo.cy} a ${R},${R} 0 1,1 ${R * 2},0 a ${R},${R} 0 1,1 ${-R * 2},0`} />
          </defs>
          <text fill="#B9C8F0" fillOpacity="0.75" style={{ fontSize: 11.5, fontWeight: 650, letterSpacing: "0.32em", fontStretch: "85%" }}>
            <textPath href="#sello-camino" textLength={2 * Math.PI * R - 6}>
              {texto}
            </textPath>
          </text>
          <circle cx={circulo.cx} cy={circulo.cy} r={R + 13} fill="none" stroke="#B9C8F0" strokeOpacity="0.14" strokeDasharray="2 6" />
        </svg>
      </div>
      <Llama modo="encender" margen className="relative z-10 h-full w-full" />
    </div>
  );
}
