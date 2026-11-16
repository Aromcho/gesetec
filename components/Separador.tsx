import { Llama } from "./Llama";

/** Separador de secciones: la llama del logo entre dos líneas finas. Quieta: sin animación. */
export function Separador({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex max-w-6xl items-center gap-4 px-5 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-linea" />
      <Llama className="h-6 w-auto" circulo={false} modo="quieta" />
      <span className="h-px flex-1 bg-linea" />
    </div>
  );
}
