import { productosVenta, preciosActualizados } from "@/content/venta";
import { productoVentaSchema } from "@/lib/jsonld";
import { Encabezado } from "../Encabezado";
import { JsonLd } from "../JsonLd";
import { ListaVenta } from "./ListaVenta";

/** Equipos en venta: listado corto con precio de lista y consulta directa por WhatsApp. */
export function EquiposVenta() {
  return (
    <section id="equipos" aria-labelledby="equipos-titulo" className="mx-auto max-w-6xl scroll-mt-24 px-5 md:px-6">
      <Encabezado
        etiqueta="Equipos en venta"
        id="equipos-titulo"
        titulo="Calderas y climatizadores, con instalación"
        bajada={`Precios de lista de referencia al ${preciosActualizados}. Tocá el + y te pasamos el precio final con instalación, envío y formas de pago.`}
      />
      <ListaVenta productos={productosVenta} />
      <JsonLd datos={productosVenta.map(productoVentaSchema)} />
    </section>
  );
}
