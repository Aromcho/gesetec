/**
 * TRABAJOS REALES — galería de la portada y de cada página.
 * Fotos: cuadros tomados de los reels de @gesetec.calderas (assets/fotos). Sin caras ni textos encima.
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
  /** Publicación original en Instagram. */
  instagram: string;
  /** Aparece en la página de PEISA. */
  peisa?: boolean;
}

export const trabajos: Trabajo[] = [
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
      { src: "sala-de-maquinas-calderas-peisa-carilo", alt: "Cañerías de termofusión y válvulas de la sala de máquinas del apart hotel de Cariló" },
      { src: "toallero-peisa-domino-negro-carilo", alt: "Toallero calefaccionado PEISA Dominó negro en un baño de Cariló" },
      { src: "logistica-equipos-peisa", alt: "Depósito con equipos PEISA embalados para la entrega" },
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
      { src: "serpentinas-piso-radiante-instalacion", alt: "Serpentinas de piso radiante instaladas antes del contrapiso" },
      { src: "caldera-peisa-prima-tec-32-dsf-piso-radiante", alt: "Caldera PEISA Prima Tec 32 DSF nueva para piso radiante" },
      { src: "colector-piso-radiante-peisa-prima-tec", alt: "Colector de piso radiante con circuitos rojos" },
      { src: "obra-piso-radiante-entre-pinos", alt: "Obra con piso radiante en una casa entre pinos de la costa" },
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
      { src: "caldera-peisa-prima-tec-24-dsf-instalada", alt: "Caldera PEISA Prima Tec 24 DSF instalada con su panel digital" },
      { src: "caldera-peisa-prima-tec-24-dsf-conexiones", alt: "Conexiones de una caldera PEISA Prima Tec 24 DSF durante la instalación" },
      { src: "camioneta-gesetec-service-oficial-villa-gesell", alt: "Camioneta de Gesetec Calderas con la caldera PEISA lista para instalar" },
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
      { src: "piscina-climatizada-costa-esmeralda", alt: "Piscina climatizada entre pinos en Costa Esmeralda" },
      { src: "climatizador-piscina-tameco-cp-30-costa-esmeralda", alt: "Climatizador de piscina Tameco CP-30 instalado en Costa Esmeralda" },
    ],
    instagram: "https://www.instagram.com/reel/DfRxDnhifTs/",
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
      { src: "entrega-caldera-peisa-xp-100-apart-hotel", alt: "Entrega de una caldera PEISA XP 100 embalada para un apart hotel" },
      { src: "intercambiador-bowman-fc100-piscina-apart-hotel", alt: "Intercambiador de calor Bowman FC100 instalado para climatizar la piscina" },
    ],
    instagram: "https://www.instagram.com/reel/CiK2m3jgd3c/",
    peisa: true,
  },
];

export function getTrabajos(ids: string[]): Trabajo[] {
  return ids.map((id) => trabajos.find((t) => t.id === id)).filter((t): t is Trabajo => Boolean(t));
}
