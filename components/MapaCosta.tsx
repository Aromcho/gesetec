import { zonas } from "@/content/zonas";

/**
 * Mapa ilustrativo de la costa (no a escala exacta): ubica cada zona respecto de Villa Gesell.
 * Coordenadas aproximadas proyectadas a mano; cada punto lleva a la página de su zona.
 */
const PUNTOS: Record<string, { x: number; y: number; lado?: "izq" | "der"; dy?: number }> = {
  "general-madariaga": { x: 30, y: 38, lado: "der" },
  "costa-esmeralda": { x: 302, y: 70 },
  "villa-robles": { x: 290, y: 88 },
  "north-beach": { x: 279, y: 105 },
  "la-herradura": { x: 265, y: 124 },
  pinamar: { x: 251, y: 147 },
  "valeria-del-mar": { x: 229, y: 184 },
  carilo: { x: 212, y: 203 },
  "villa-gesell": { x: 160, y: 288 },
  "mar-de-las-pampas": { x: 121, y: 357, dy: -3 },
  "las-gaviotas": { x: 113, y: 372, dy: 1 },
  "mar-azul": { x: 105, y: 386, dy: 6 },
};

export function MapaCosta({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 420" className={className} role="group" aria-labelledby="mapa-costa-titulo">
      <title id="mapa-costa-titulo">Mapa ilustrativo de las zonas de atención de Gesetec, de General Madariaga y Costa Esmeralda a Mar Azul</title>
      {/* Mar */}
      <path d="M333 0 L321 66 L296 118 L266 160 L230 210 L180 288 L134 366 L116 420 L360 420 L360 0 Z" fill="#0d2247" />
      <path d="M333 0 L321 66 L296 118 L266 160 L230 210 L180 288 L134 366 L116 420" fill="none" stroke="#3371d1" strokeOpacity="0.55" strokeWidth="1.5" />
      <text x="318" y="300" className="dato" fill="#3371d1" fillOpacity="0.7" fontSize="10" textAnchor="middle" transform="rotate(-58 318 300)">
        Mar Argentino
      </text>
      {/* Rutas */}
      <path d="M30 38 C 110 70, 190 110, 251 147" fill="none" stroke="#22355f" strokeWidth="2" strokeDasharray="5 4" />
      <path d="M296 0 L286 60 L258 112 L236 150 L204 196 L158 272 L112 350 L92 420" fill="none" stroke="#22355f" strokeWidth="2" strokeDasharray="5 4" />
      <text x="128" y="78" className="dato" fill="#8a9bc4" fontSize="9" transform="rotate(20 128 78)">Ruta 74</text>
      <text x="236" y="38" className="dato" fill="#8a9bc4" fontSize="9" transform="rotate(-62 236 38)">Ruta 11</text>

      {zonas.map((z) => {
        const p = PUNTOS[z.slug];
        if (!p) return null;
        const base = z.slug === "villa-gesell";
        const der = p.lado === "der";
        return (
          <a key={z.slug} href={`/zonas/${z.pagina}`} aria-label={`${z.nombre}: ver la página de la zona`} className="group">
            {base && <circle cx={p.x} cy={p.y} r="13" fill="#e3322a" fillOpacity="0.18" />}
            {z.tipo === "barrio privado" ? (
              <circle cx={p.x} cy={p.y} r="4" fill="#040b1d" stroke="#b9c8f0" strokeWidth="1.6" />
            ) : (
              <circle cx={p.x} cy={p.y} r={base ? 6 : 4.5} fill={base ? "#e3322a" : "#b9c8f0"} stroke="#040b1d" strokeWidth="1.5" />
            )}
            <text
              x={der ? p.x + 10 : p.x - 10}
              y={p.y + 3.5 + (p.dy ?? 0)}
              textAnchor={der ? "start" : "end"}
              fontSize={base ? 13 : 10.5}
              fontWeight={base ? 800 : 600}
              fill={base ? "#ffffff" : "#b9c8f0"}
              className="transition-colors group-hover:fill-white"
            >
              {z.nombre}
            </text>
          </a>
        );
      })}
    </svg>
  );
}
