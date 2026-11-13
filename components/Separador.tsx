import { Llama } from "./Llama";

/** Separador de secciones: la llama del logo entre dos líneas que toman el color del "calor". */
export function Separador({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto flex max-w-6xl items-center gap-4 px-5 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[var(--acento)] opacity-60" />
      <Llama className="h-7 w-auto" circulo={false} modo="viva" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[var(--acento)] opacity-60" />
    </div>
  );
}
