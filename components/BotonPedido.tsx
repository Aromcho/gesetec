"use client";

import { abrirPedido } from "./pedido-evento";
import { Icono } from "./Icono";

interface Props {
  marca?: string;
  servicio?: string;
  className?: string;
  children?: React.ReactNode;
  variante?: "primario" | "secundario";
}

/** Botón que abre "Pedí tu service" (con marca o servicio preseleccionados). */
export function BotonPedido({ marca, servicio, className = "", children = "Pedí tu service", variante = "primario" }: Props) {
  const estilos =
    variante === "primario"
      ? "bg-rojo text-[1.1875rem] font-bold text-white shadow-[0_10px_30px_-10px_rgb(227_50_42/0.8)] hover:bg-rojo-hover"
      : "border border-white/20 bg-white/5 text-[1.02rem] font-semibold text-white hover:border-white/40 hover:bg-white/10";
  return (
    <button
      type="button"
      onClick={() => abrirPedido({ marca, servicio })}
      className={`group inline-flex min-h-13 items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 transition duration-300 active:scale-[0.98] ${estilos} ${className}`}
    >
      {children}
      <Icono nombre="flecha" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}
