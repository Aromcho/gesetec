/**
 * TRABAJOS REALES — galería de la portada y de cada página.
 * Fotos: reales, de los álbumes de trabajos que pasa Leo y de los reels de @gesetec.calderas (assets/fotos). Sin caras ni patentes.
 * Para sumar un trabajo: copiá las fotos a assets/fotos/ con un nombre descriptivo
 * (marca-modelo-zona.jpg) y agregá un objeto acá. `npm run build` genera los WebP.
 */

export interface Foto {
  /** Nombre del archivo en assets/fotos, sin extensión. */
  src: string;
  alt: string;
}

export interface Trabajo {
  id: string;
  titulo: string;
  lugar: string;
  marcas: string[];
  equipos: string[];
  descripcion: string;
  fotos: Foto[];
  /** Publicación original en Instagram (si la hay). */
  instagram?: string;
  /** Aparece en la página de PEISA. */
  peisa?: boolean;
}

export const trabajos: Trabajo[] = [
  {
    id: "tameco-cp100-la-frontera-pinamar",
    titulo: "Tameco CP-100 para una pileta grande en La Frontera",
    lugar: "La Frontera, Pinamar",
    marcas: ["tameco"],
    equipos: ["Tameco CP-100 · 98.500 kcal/h"],
    descripcion:
      "Venta, traslado e instalación de un climatizador de piscina Tameco CP-100, el de mayor potencia de la línea, para una pileta grande en La Frontera, Pinamar. El equipo quedó protegido dentro de un gabinete de madera, al lado de la pileta.",
    fotos: [
      { src: "piscina-climatizada-la-frontera-pinamar", alt: "Pileta con cascadas y deck entre pinos en La Frontera, Pinamar" },
      { src: "climatizador-piscina-tameco-cp-100-la-frontera-pinamar", alt: "Climatizador Tameco CP-100 dentro de su gabinete de madera en La Frontera, Pinamar" },
      { src: "gabinete-climatizador-tameco-cp-100-la-frontera-pinamar", alt: "Gabinete de madera abierto con el climatizador Tameco durante la instalación" },
    ],
  },
  {
    id: "apart-hotel-carilo",
    titulo: "Calefacción central de un apart hotel de 10 departamentos",
    lugar: "Cariló",
    marcas: ["peisa"],
    equipos: ["2 calderas PEISA 32 DSF", "Radiadores Gamma 500 y Tropical 500", "Toalleros Dominó", "Boiler acumulador"],
    descripcion:
      "Venta, logística e instalación del sistema completo: dos calderas PEISA 32 DSF vinculadas a un boiler acumulador para el agua caliente, radiadores Gamma 500 blancos y Tropical 500 negros, y toalleros Dominó en cada departamento. Puesta a punto y puesta en marcha de todo el sistema.",
    fotos: [
      { src: "radiador-peisa-tropical-500-negro-carilo", alt: "Radiador PEISA Tropical 500 negro instalado en un apart hotel de Cariló" },
      { src: "toallero-peisa-domino-negro-carilo", alt: "Toallero calefaccionado PEISA Dominó negro en un baño de Cariló" },
      { src: "logistica-equipos-peisa", alt: "Utilitario de Gesetec cargado con radiadores y toalleros PEISA para el apart hotel de Cariló" },
      { src: "radiador-peisa-blanco-valvula-termostatica-carilo", alt: "Radiador PEISA blanco con válvula termostática en un departamento del apart hotel de Cariló" },
    ],
    instagram: "https://www.instagram.com/reel/DeuwkQVibAc/",
    peisa: true,
  },
  {
    id: "piso-radiante-prima-tec-32",
    titulo: "Piso radiante con caldera PEISA Prima Tec 32 DSF",
    lugar: "Costa atlántica",
    marcas: ["peisa"],
    equipos: ["PEISA Prima Tec 32 DSF", "Piso radiante con colectores"],
    descripcion:
      "Instalación de calefacción por piso radiante en una casa en obra entre pinos, alimentada por una caldera PEISA Prima Tec 32 DSF de doble servicio. Trabajo realizado junto a @osseshns y @hidraulicsupply.",
    fotos: [
      { src: "serpentinas-piso-radiante-instalacion", alt: "Serpentinas de piso radiante instaladas antes del contrapiso, con luz de la tarde" },
      { src: "caldera-peisa-prima-tec-32-dsf-piso-radiante", alt: "Caldera PEISA Prima Tec 32 DSF nueva para piso radiante" },
      { src: "colector-piso-radiante-peisa-prima-tec", alt: "Colector de piso radiante con caudalímetros en su gabinete" },
      { src: "obra-piso-radiante-entre-pinos", alt: "Serpentinas de piso radiante en una casa en obra con ventanales al bosque" },
    ],
    instagram: "https://www.instagram.com/reel/De4MQbBiTut/",
    peisa: true,
  },
  {
    id: "diva-tecno-smart-gamma",
    titulo: "Caldera PEISA Diva Tecno Smart con termostato Zentraly",
    lugar: "Villa Gesell y zona",
    marcas: ["peisa"],
    equipos: ["PEISA Diva Tecno Smart", "Termostato Wi-Fi Zentraly", "Radiadores Gamma 500"],
    descripcion:
      "Instalación de una caldera mural PEISA Diva Tecno Smart negra, termostato Wi-Fi Zentraly para manejar la calefacción desde el celular y radiadores Gamma 500 en todos los ambientes.",
    fotos: [
      { src: "caldera-peisa-diva-tecno-smart-negra", alt: "Caldera mural PEISA Diva Tecno Smart negra instalada" },
      { src: "radiador-peisa-gamma-500-blanco", alt: "Radiador PEISA Gamma 500 blanco con válvulas" },
      { src: "service-caldera-peisa-diva-tecno-abierta", alt: "Caldera PEISA abierta durante la puesta en marcha" },
    ],
    instagram: "https://www.instagram.com/reel/DJ9pQN1NUDj/",
    peisa: true,
  },
  {
    id: "prima-tec-24-dsf",
    titulo: "Caldera PEISA Prima Tec 24 DSF: venta, instalación y puesta en marcha",
    lugar: "Villa Gesell y zona",
    marcas: ["peisa"],
    equipos: ["PEISA Prima Tec 24 DSF (doble servicio, tiro forzado)"],
    descripcion:
      "Venta, instalación y puesta en marcha de una caldera mural PEISA Prima Tec 24 DSF, de doble servicio y tiro forzado: calefacción y agua caliente sanitaria en un solo equipo.",
    fotos: [
      { src: "camioneta-gesetec-service-oficial-villa-gesell", alt: "Caldera PEISA en su caja, en la camioneta de Gesetec, lista para instalar" },
      { src: "caldera-peisa-prima-tec-24-dsf-nueva", alt: "Caldera PEISA Prima Tec 24 DSF recién instalada, con el cartel de garantía" },
      { src: "caldera-peisa-prima-tec-24-dsf-instalada", alt: "Caldera PEISA Prima Tec 24 DSF instalada con su panel digital" },
    ],
    instagram: "https://www.instagram.com/reel/DT-b7DCArTD/",
    peisa: true,
  },
  {
    id: "tameco-cp30-costa-esmeralda",
    titulo: "Piscina a 30° todo el año con Tameco CP-30",
    lugar: "Costa Esmeralda",
    marcas: ["tameco"],
    equipos: ["Tameco CP-30 · 30.000 kcal/h"],
    descripcion:
      "Instalación de un climatizador de piscina Tameco CP-30 en Costa Esmeralda: base de cemento, instalación profesional y puesta en marcha con service oficial Tameco. La pileta quedó lista para usar en un solo día.",
    fotos: [
      { src: "climatizador-tameco-cp-30-cerco-costa-esmeralda", alt: "Climatizador Tameco CP-30 recién colocado sobre su platea, entre pinos, en Costa Esmeralda" },
      { src: "climatizador-piscina-tameco-cp-30-costa-esmeralda", alt: "Climatizador de piscina Tameco CP-30 sobre su platea, junto al cerco de palos, en Costa Esmeralda" },
    ],
    instagram: "https://www.instagram.com/reel/DfRxDnhifTs/",
  },
  {
    id: "tameco-cp70-la-herradura",
    titulo: "Climatizador Tameco CP-70 en La Herradura",
    lugar: "La Herradura, Pinamar",
    marcas: ["tameco"],
    equipos: ["Tameco CP-70 · 70.000 kcal/h"],
    descripcion:
      "Instalación de un climatizador de piscina Tameco CP-70 para una pileta entre pinos en el barrio La Herradura, en Pinamar. El equipo quedó al costado de la casa, con las conexiones de agua y de gas a la vista para el service.",
    fotos: [
      { src: "climatizador-piscina-tameco-cp-70-la-herradura", alt: "Climatizador de piscina Tameco CP-70 instalado al costado de una casa en La Herradura" },
      { src: "piscina-climatizada-la-herradura-entre-pinos", alt: "Pileta climatizada entre pinos en el barrio La Herradura, Pinamar" },
      { src: "climatizador-tameco-cp-70-abierto-la-herradura", alt: "Tameco CP-70 abierto durante la instalación, con la válvula de gas a la vista" },
    ],
  },
  {
    id: "peisa-xp100-bowman-apart-hotel",
    titulo: "Caldera PEISA XP 100 + intercambiador Bowman para un apart hotel",
    lugar: "Costa atlántica",
    marcas: ["peisa", "bowman"],
    equipos: ["PEISA XP 100 (alta potencia)", "Intercambiador Bowman FC100"],
    descripcion:
      "Venta, logística e instalación de una caldera de alta potencia PEISA XP 100 combinada con un intercambiador de calor Bowman: un solo sistema para la calefacción central y la climatización de la piscina del apart hotel.",
    fotos: [
      { src: "entrega-caldera-peisa-xp-100-apart-hotel", alt: "Caldera PEISA XP 100 en su caja, lista para la entrega" },
      { src: "intercambiador-bowman-fc100-piscina-apart-hotel", alt: "Intercambiador de calor Bowman FC100 instalado para climatizar la piscina" },
    ],
    instagram: "https://www.instagram.com/reel/CiK2m3jgd3c/",
    peisa: true,
  },
];

export function getTrabajos(ids: string[]): Trabajo[] {
  return ids.map((id) => trabajos.find((t) => t.id === id)).filter((t): t is Trabajo => Boolean(t));
}
