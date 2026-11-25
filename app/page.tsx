import { metaPagina } from "@/lib/seo";
import { faqs } from "@/content/faqs";
import { getTrabajos } from "@/content/trabajos";
import { Portada } from "@/components/secciones/Portada";
import { TiraMarcas } from "@/components/secciones/TiraMarcas";
import { Servicios } from "@/components/secciones/Servicios";
import { BloquePeisa } from "@/components/secciones/BloquePeisa";
import { BloquePiscinas } from "@/components/secciones/BloquePiscinas";
import { EquiposVenta } from "@/components/secciones/EquiposVenta";
import { Trabajos } from "@/components/secciones/Trabajos";
import { Resenas } from "@/components/secciones/Resenas";
import { Zonas } from "@/components/secciones/Zonas";
import { Preguntas } from "@/components/secciones/Preguntas";
import { Contacto } from "@/components/secciones/Contacto";
import { Separador } from "@/components/Separador";

export const metadata = metaPagina({
  titulo: "Servicio técnico y venta de calderas en Villa Gesell | Gesetec",
  descripcion:
    "Servicio técnico, service y venta de calderas en Villa Gesell. Service oficial Peisa en Mar de las Pampas, Cariló, Pinamar, Costa Esmeralda y Madariaga.",
  ruta: "/",
});

/** Trabajos de la portada: 6 (la grilla es de 6). El resto aparece en las páginas de servicio, marca y zona. */
const TRABAJOS_PORTADA = [
  "tameco-cp100-la-frontera-pinamar",
  "apart-hotel-carilo",
  "piso-radiante-prima-tec-32",
  "tameco-cp30-costa-esmeralda",
  "tameco-cp70-la-herradura",
  "prima-tec-24-dsf",
];

export default function Inicio() {
  return (
    <>
      <Portada />
      <div className="pt-6 md:pt-2">
        <TiraMarcas />
      </div>
      <Separador className="my-20 md:my-28" />
      <Servicios
        destacado
        titulo="Servicio técnico de calderas en Villa Gesell"
        bajada="Service de calderas, reparación, instalación y venta de calderas: desde el service de una caldera mural hasta proyectos completos de calefacción central y piscinas climatizadas."
      />
      <div className="mt-24 md:mt-32">
        <BloquePeisa />
      </div>
      <BloquePiscinas fondo="fondo-piscina-climatizada-atardecer-pinos" />
      <div className="mt-6 md:mt-10">
        <EquiposVenta />
      </div>
      <div className="mt-16 md:mt-24">
        <Trabajos lista={getTrabajos(TRABAJOS_PORTADA)} />
      </div>
      <Separador className="my-20 md:my-28" />
      <Resenas />
      <Separador className="my-20 md:my-28" />
      <Zonas />
      <Separador className="my-20 md:my-28" />
      <Preguntas lista={faqs.filter((f) => f.portada)} />
      <Separador className="my-20 md:my-28" />
      <Contacto />
    </>
  );
}
