interface Props {
  etiqueta: string;
  titulo: React.ReactNode;
  bajada?: React.ReactNode;
  id?: string;
  centrado?: boolean;
  /** Nivel del título (h2 por defecto: cada página tiene un solo h1). */
  nivel?: "h2" | "h3";
}

/** Encabezado de sección: etiqueta chica con línea roja + titular ancho de dos líneas como máximo. */
export function Encabezado({ etiqueta, titulo, bajada, id, centrado = false, nivel = "h2" }: Props) {
  const H = nivel;
  return (
    <header className={`max-w-3xl ${centrado ? "mx-auto text-center" : ""}`}>
      <p className="etiqueta flex items-center gap-2.5 text-celeste" style={centrado ? { justifyContent: "center" } : undefined}>
        <span className="inline-block h-[2px] w-6 bg-rojo" aria-hidden="true" />
        {etiqueta}
      </p>
      <H id={id} className={`titular-medio mt-3 max-w-[22ch] text-[1.75rem] xs:text-[1.95rem] md:text-[2.5rem] ${centrado ? "mx-auto" : ""}`}>
        {titulo}
      </H>
      {bajada && <p className={`mt-4 max-w-[62ch] text-base leading-relaxed text-celeste md:text-[1.075rem] ${centrado ? "mx-auto" : ""}`}>{bajada}</p>}
    </header>
  );
}
