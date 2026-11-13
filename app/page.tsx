import { metaPagina } from "@/lib/seo";
import { faqs } from "@/content/faqs";
import { trabajos } from "@/content/trabajos";
import { Portada } from "@/components/secciones/Portada";
import { TiraMarcas } from "@/components/secciones/TiraMarcas";
import { Servicios } from "@/components/secciones/Servicios";
import { BloquePeisa } from "@/components/secciones/BloquePeisa";
import { Trabajos } from "@/components/secciones/Trabajos";
import { Resenas } from "@/components/secciones/Resenas";
import { Zonas } from "@/components/secciones/Zonas";
import { Preguntas } from "@/components/secciones/Preguntas";
import { Contacto } from "@/components/secciones/Contacto";
import { Separador } from "@/components/Separador";

export const metadata = metaPagina({
  titulo: "Calderas en Villa Gesell: venta y service oficial | Gesetec",
  descripcion:
    "Venta y service oficial de calderas en Villa Gesell, Cariló, Pinamar y Costa Esmeralda. Service oficial PEISA, Baxi, Tameco y más. Pedí tu service por WhatsApp.",
  ruta: "/",
});

export default function Inicio() {
  return (
    <>
      <Portada />
      <div className="pt-6 md:pt-2">
        <TiraMarcas />
      </div>
      <Separador className="my-20 md:my-28" />
      <Servicios destacado />
      <div className="mt-24 md:mt-32">
        <BloquePeisa />
      </div>
      <div className="mt-24 md:mt-32">
        <Trabajos lista={trabajos} />
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
