"use client";

import { useEffect, useState } from "react";
import { estadoAhora, type Estado } from "@/lib/horarios";

/** Indicador "Abierto ahora / Cerrado" calculado con la hora de Argentina. Se actualiza cada minuto. */
export function AbiertoAhora({ className = "" }: { className?: string }) {
  const [estado, setEstado] = useState<Estado | null>(null);
  useEffect(() => {
    const tick = () => setEstado(estadoAhora());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);
  return (
    <span
      className={`inline-flex min-h-8 items-center gap-2 rounded-full border px-3 py-1 text-sm transition-opacity duration-500 ${
        estado ? "opacity-100" : "opacity-0"
      } ${estado?.abierto ? "border-whatsapp/30 bg-whatsapp/10 text-[#7cf0ad]" : "border-linea bg-white/5 text-celeste"} ${className}`}
      aria-live="polite"
    >
      <span className={`h-2 w-2 rounded-full ${estado?.abierto ? "pulso bg-whatsapp" : "bg-humo"}`} aria-hidden="true" />
      {estado?.texto ?? "Horario de atención"}
    </span>
  );
}
