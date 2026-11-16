import { linkTelefono, linkWhatsApp, negocio } from "@/content/negocio";
import { BotonPedido } from "./BotonPedido";
import { Icono } from "./Icono";

/** Tarjeta de pedido para las páginas internas: en escritorio queda fija al costado mientras se lee. */
export function TarjetaPedido({
  marca,
  servicio,
  zona,
  mensaje,
}: {
  marca?: string;
  servicio?: string;
  zona?: string;
  mensaje?: string;
}) {
  return (
    <aside aria-label="Pedí tu service" className="rounded-2xl border border-linea bg-marino p-6 lg:sticky lg:top-24">
      <p className="titular-medio text-xl">¿Lo coordinamos?</p>
      <p className="mt-1.5 text-sm leading-relaxed text-celeste">Visita técnica en el día en Villa Gesell y la zona. Técnico matriculado.</p>
      <BotonPedido marca={marca} servicio={servicio} zona={zona} className="mt-5 w-full" />
      <div className="mt-3 grid grid-cols-2 gap-2">
        <a
          href={linkWhatsApp(mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          data-ubicacion="tarjeta_pedido"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-whatsapp text-sm font-semibold text-[#05341a] transition hover:brightness-110"
        >
          <Icono nombre="whatsapp" className="h-4 w-4" /> WhatsApp
        </a>
        <a
          href={linkTelefono}
          data-ubicacion="tarjeta_pedido"
          aria-label={`Llamar: ${negocio.telefono.visible}`}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-linea text-sm font-semibold transition hover:border-celeste/50"
        >
          <Icono nombre="telefono" className="h-4 w-4 text-celeste" /> Llamar
        </a>
      </div>
    </aside>
  );
}
