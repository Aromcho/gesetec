interface Props {
  etiqueta: string;
  titulo: React.ReactNode;
  bajada?: React.ReactNode;
  id?: string;
  centrado?: boolean;
  /** Nivel del título (h2 por defecto: cada página tiene un solo h1). */
  nivel?: "h2" | "h3";
}

/** Encabezado de sección: etiqueta chica + titular ancho. */
export function Encabezado({ etiqueta, titulo, bajada, id, centrado = false, nivel = "h2" }: Props) {
  const H = nivel;
  return (
    <header className={`max-w-3xl ${centrado ? "mx-auto text-center" : ""}`}>
      <p className="etiqueta texto-acento flex items-center gap-2 transition-colors duration-700" style={centrado ? { justifyContent: "center" } : undefined}>
        <span className="inline-block h-px w-6 bg-acento" aria-hidden="true" />
        {etiqueta}
      </p>
      <H id={id} className="titular-medio mt-3 text-[1.85rem] leading-[1.02] xs:text-[2.1rem] md:text-5xl">
        {titulo}
      </H>
      {bajada && <p className="mt-4 text-base leading-relaxed text-celeste md:text-lg">{bajada}</p>}
    </header>
  );
}
