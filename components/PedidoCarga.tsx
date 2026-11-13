"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { EVENTO_PEDIDO, type DetallePedido } from "./pedido-evento";

const PedidoService = dynamic(() => import("./PedidoService").then((m) => m.PedidoService), { ssr: false });

/**
 * Carga "Pedí tu service" recién cuando hace falta (primer toque en la página o primer clic en el botón).
 * Así el formulario y sus animaciones no pesan en la carga inicial.
 */
export function PedidoCarga() {
  const [inicial, setInicial] = useState<DetallePedido | null>(null);

  useEffect(() => {
    const abrir = (e: Event) => setInicial((v) => v ?? (e as CustomEvent<DetallePedido>).detail ?? {});
    const precargar = () => void import("./PedidoService");
    window.addEventListener(EVENTO_PEDIDO, abrir);
    window.addEventListener("pointerdown", precargar, { once: true, passive: true });
    window.addEventListener("keydown", precargar, { once: true });
    return () => {
      window.removeEventListener(EVENTO_PEDIDO, abrir);
      window.removeEventListener("pointerdown", precargar);
      window.removeEventListener("keydown", precargar);
    };
  }, []);

  return inicial ? <PedidoService inicial={inicial} /> : null;
}
