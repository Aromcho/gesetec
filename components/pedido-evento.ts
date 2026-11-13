/** Evento para abrir "Pedí tu service" desde cualquier botón (sin cargar el formulario hasta que hace falta). */
export const EVENTO_PEDIDO = "gesetec:pedido";

export interface DetallePedido {
  marca?: string;
  servicio?: string;
}

export function abrirPedido(detalle: DetallePedido = {}) {
  window.dispatchEvent(new CustomEvent<DetallePedido>(EVENTO_PEDIDO, { detail: detalle }));
}
