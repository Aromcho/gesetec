/**
 * MARCAS — tira de logos de la portada y páginas /marcas/[slug].
 *
 * PEISA es la marca principal y tiene su propia página: /service-oficial-peisa.
 * Logos: public/marcas/ — los oficiales de cada marca (tomados de sus sitios), todos sobre el azul del sitio.
 * Cada uno con sus colores reales; Baxi va en blanco porque su azul se pierde sobre el fondo (pedido de Leo).
 * PEISA va en blanco sobre su rojo (#E10600) en la tira de marcas.
 * Orden confirmado por el cliente: PEISA, Baxi, Tameco, Ferroli, Euterma, Rinnai, Bowman, Rowa.
 */

export interface Marca {
  slug: string;
  nombre: string;
  /** Logo oficial en sus colores (ruta en /public). Null = se muestra el nombre en texto. */
  logo: { src: string; ancho: number; alto: number } | null;
  /** Qué hace Gesetec con esta marca, en una línea (tira de marcas y tarjetas). */
  rol: string;
  /** Título de la página (≤ 60 caracteres). */
  seoTitulo: string;
  /** Meta description (≤ 155 caracteres). */
  seoDescripcion: string;
  h1: string;
  bajada: string;
  /** Párrafos propios de la página (texto original, no copiado de la marca). */
  parrafos: string[];
  /** Qué hacemos con la marca. */
  servicios: string[];
  /** Equipos de la marca que aparecen en trabajos reales de Gesetec. */
  equipos: string[];
  /** Slugs de servicios relacionados (content/servicios.ts). */
  serviciosRelacionados: string[];
  /** Ids de trabajos relacionados (content/trabajos.ts). */
  trabajos: string[];
  /** Ids de preguntas frecuentes (content/faqs.ts). */
  faqs: string[];
}

export const peisa = {
  nombre: "PEISA",
  logo: { src: "/marcas/peisa.png", ancho: 500, alto: 121 },
};

export const marcas: Marca[] = [
  {
    slug: "baxi",
    nombre: "Baxi",
    logo: { src: "/marcas/baxi.svg", ancho: 91, alto: 28 },
    rol: "Service oficial de calderas Baxi",
    seoTitulo: "Service oficial Baxi en Villa Gesell | Gesetec Calderas",
    seoDescripcion:
      "Service oficial de calderas Baxi en Villa Gesell, Pinamar, Cariló y Costa Esmeralda: reparación, mantenimiento e instalación con repuestos originales.",
    h1: "Service oficial de calderas Baxi en Villa Gesell",
    bajada:
      "Reparación, mantenimiento anual e instalación de calderas Baxi, con el respaldo de un service oficial en la costa.",
    parrafos: [
      "Baxi es una marca europea de calderas murales. En Gesetec somos service oficial Baxi desde hace años: atendemos equipos de doble servicio (calefacción y agua caliente) y equipos solo calefacción, tanto en viviendas permanentes como en casas que se usan por temporada.",
      "Cuando una Baxi deja de calentar, pierde presión o muestra un código en la pantalla, lo primero es un diagnóstico hecho por alguien que conoce el equipo. Revisamos la caldera en el lugar, te explicamos qué tiene y, si hay que cambiar una pieza, usamos repuestos originales para que el equipo mantenga su rendimiento y su garantía.",
      "Si tenés una Baxi que estuvo apagada todo el invierno o una casa que se abre solo en verano, te conviene un service antes de volver a usarla: el salitre y la humedad de la costa castigan los equipos parados.",
    ],
    servicios: [
      "Diagnóstico y reparación de fallas",
      "Mantenimiento anual preventivo",
      "Puesta en marcha de temporada",
      "Instalación y reemplazo de calderas",
      "Repuestos originales",
    ],
    equipos: ["Calderas murales Baxi doble servicio", "Calderas murales Baxi solo calefacción"],
    serviciosRelacionados: ["reparacion", "mantenimiento", "puesta-en-marcha", "instalacion"],
    trabajos: [],
    faqs: ["que-marcas", "cada-cuanto-service", "pierde-presion", "garantia"],
  },
  {
    slug: "tameco",
    nombre: "Tameco",
    logo: { src: "/marcas/tameco.png", ancho: 395, alto: 75 },
    rol: "Service oficial · climatizadores de piscinas y spa",
    seoTitulo: "Tameco en Villa Gesell: climatizadores de piscina | Gesetec",
    seoDescripcion:
      "Venta, instalación y service oficial de climatizadores de piscina Tameco CP-30, CP-70, CP-80 y CP-100 en Villa Gesell, Pinamar, Cariló y Costa Esmeralda.",
    h1: "Climatizadores de piscina Tameco: venta, instalación y service oficial",
    bajada:
      "Somos service oficial Tameco en la costa. Vendemos, instalamos y ponemos en marcha sus climatizadores de calentamiento indirecto, «a baño María», para piscinas y spa.",
    parrafos: [
      "Tameco fabrica en Argentina calderas pensadas para climatizar piscinas y spa. Son equipos robustos, con gabinete protegido contra la corrosión y la intemperie, que se pueden instalar al aire libre o en una sala de máquinas. En la costa, donde el aire salino ataca todo lo metálico, eso hace la diferencia.",
      "Los climatizadores Tameco son de calentamiento indirecto, «a baño María»: la llama calienta un circuito de agua aparte, que el termostato no deja pasar de 85 °C, y el agua de la pileta circula por un intercambiador de cobre sumergido en ese circuito, sin contacto con la llama ni con los gases. Según Tameco, así las incrustaciones que deja el agua de la pileta son mínimas y el equipo depende menos del caudal de la bomba. En un climatizador de calentamiento directo, en cambio, el agua de la pileta pasa por el intercambiador que calienta el quemador.",
      "En Gesetec hacemos el proyecto completo: te ayudamos a elegir la potencia según el volumen de tu piscina y el uso que le vas a dar, coordinamos la entrega, armamos la base de cemento, hacemos la instalación hidráulica y de gas, y dejamos el equipo funcionando. En muchos casos la pileta queda lista para usar en un solo día.",
      "Como service oficial Tameco, también hacemos el mantenimiento y la reparación de equipos ya instalados, con repuestos originales.",
    ],
    servicios: [
      "Asesoramiento para elegir la potencia",
      "Venta de equipos originales",
      "Envío bonificado de los equipos que vendemos",
      "Base de cemento, instalación y puesta en marcha",
      "Service oficial y repuestos originales",
    ],
    equipos: [
      "Tameco CP-30 · 30.000 kcal/h · piletas de hasta 45.000 litros",
      "Tameco CP-70 · 70.000 kcal/h · piletas de hasta 100.000 litros",
      "Tameco CP-80 · 80.000 kcal/h · piletas de hasta 130.000 litros",
      "Tameco CP-100 · 98.500 kcal/h · piletas de hasta 200.000 litros",
    ],
    serviciosRelacionados: ["climatizacion-de-piscinas", "instalacion", "mantenimiento"],
    trabajos: ["tameco-cp30-costa-esmeralda"],
    faqs: ["piscina-directo-indirecto", "piscina-potencia", "piscina-un-dia", "envios", "que-marcas"],
  },
  {
    slug: "ferroli",
    nombre: "Ferroli",
    logo: { src: "/marcas/ferroli.svg", ancho: 112, alto: 56 },
    rol: "Service oficial de calderas Ferroli",
    seoTitulo: "Service oficial Ferroli en Villa Gesell | Gesetec Calderas",
    seoDescripcion:
      "Service oficial de calderas Ferroli en Villa Gesell y la costa: diagnóstico, reparación, mantenimiento anual y puesta en marcha con repuestos originales.",
    h1: "Service oficial de calderas Ferroli en Villa Gesell",
    bajada: "Diagnóstico, reparación y mantenimiento de calderas Ferroli en toda la zona.",
    parrafos: [
      "Ferroli es una marca italiana de calderas murales. En Gesetec somos service oficial Ferroli: abrimos el equipo, medimos, encontramos la falla y la resolvemos con repuestos originales.",
      "Las consultas más comunes son calderas que no encienden, que se apagan solas, que pierden presión o que no entregan agua caliente. Muchas de esas fallas se previenen con un mantenimiento anual, sobre todo en casas que pasan meses cerradas cerca del mar.",
      "Si tu Ferroli muestra un código de error, sacale una foto a la pantalla y mandánosla por WhatsApp: con eso llegamos a la visita con una idea más clara de qué puede ser.",
    ],
    servicios: [
      "Diagnóstico y reparación",
      "Mantenimiento anual",
      "Puesta en marcha de temporada",
      "Repuestos originales",
    ],
    equipos: ["Calderas murales Ferroli"],
    serviciosRelacionados: ["reparacion", "mantenimiento", "puesta-en-marcha"],
    trabajos: [],
    faqs: ["codigo-error", "cada-cuanto-service", "pierde-presion", "garantia"],
  },
  {
    slug: "euterma",
    nombre: "Euterma",
    logo: { src: "/marcas/euterma.svg", ancho: 1090, alto: 178 },
    rol: "Service oficial de calderas Euterma",
    seoTitulo: "Service oficial Euterma en Villa Gesell | Gesetec Calderas",
    seoDescripcion:
      "Service oficial de calderas Euterma en Villa Gesell, Pinamar, Cariló y Costa Esmeralda: reparación, mantenimiento y puesta en marcha de temporada.",
    h1: "Service oficial de calderas Euterma en Villa Gesell",
    bajada: "Reparación y mantenimiento de calderas Euterma con repuestos originales.",
    parrafos: [
      "Euterma es una marca argentina de calderas para calefacción central. En Gesetec somos su service oficial en la zona: hacemos diagnóstico, reparación, mantenimiento anual y puesta en marcha.",
      "Una caldera bien mantenida consume menos, dura más y no te deja sin calefacción en el peor momento. Por eso recomendamos un service por año, antes de que empiece el frío.",
      "Si tu equipo es de otra marca, también podemos ayudarte: trabajamos con PEISA, Baxi, Tameco, Ferroli, Rinnai, Bowman y bombas Rowa.",
    ],
    servicios: ["Diagnóstico y reparación", "Mantenimiento anual", "Puesta en marcha", "Repuestos originales"],
    equipos: ["Calderas Euterma"],
    serviciosRelacionados: ["reparacion", "mantenimiento", "puesta-en-marcha"],
    trabajos: [],
    faqs: ["cada-cuanto-service", "que-marcas", "garantia"],
  },
  {
    slug: "rinnai",
    nombre: "Rinnai",
    logo: { src: "/marcas/rinnai.svg", ancho: 310, alto: 75 },
    rol: "Calefones y agua caliente Rinnai",
    seoTitulo: "Rinnai en Villa Gesell: calefones y service | Gesetec",
    seoDescripcion:
      "Venta, instalación y service de calefones Rinnai en Villa Gesell, Pinamar, Cariló y Costa Esmeralda. Agua caliente para varios baños a la vez.",
    h1: "Calefones Rinnai en Villa Gesell: venta, instalación y service",
    bajada: "Agua caliente instantánea y pareja, aunque se usen varias canillas al mismo tiempo.",
    parrafos: [
      "Rinnai es una marca japonesa especializada en agua caliente. Sus calefones de tiro forzado calientan el agua al instante y mantienen la temperatura estable aunque se abra otra canilla, algo clave en casas con varios baños o con mucha gente en temporada.",
      "En Gesetec trabajamos con Rinnai: vendemos e instalamos sus calefones y hacemos el service de los equipos. La Serie Comfort, por ejemplo, entrega agua caliente para hasta cuatro servicios simultáneos.",
      "Un calefón de paso necesita buena presión de agua para funcionar bien. Si en tu casa el agua llega floja, revisamos también la presurización.",
    ],
    servicios: [
      "Asesoramiento según la cantidad de baños",
      "Venta e instalación de calefones",
      "Service y reparación",
      "Revisión de la presión de agua",
    ],
    equipos: ["Calefones Rinnai Serie Comfort (hasta 4 servicios simultáneos)", "Calefones digitales Rinnai"],
    serviciosRelacionados: ["instalacion", "reparacion", "presurizacion"],
    trabajos: [],
    faqs: ["presurizadora", "que-marcas", "garantia"],
  },
  {
    slug: "bowman",
    nombre: "Bowman",
    logo: { src: "/marcas/bowman.png", ancho: 360, alto: 78 },
    rol: "Service oficial · intercambiadores de calor",
    seoTitulo: "Intercambiadores Bowman en Villa Gesell | Gesetec Calderas",
    seoDescripcion:
      "Instalación y service oficial de intercambiadores de calor Bowman para climatizar piscinas con caldera en Villa Gesell, Pinamar, Cariló y la costa.",
    h1: "Intercambiadores de calor Bowman: instalación y service oficial",
    bajada:
      "La solución para climatizar una piscina con la misma caldera que calefacciona la casa o el hotel.",
    parrafos: [
      "Los intercambiadores Bowman, fabricados en Inglaterra, permiten calentar el agua de una piscina usando el calor de una caldera, sin que el agua de la pileta pase por el equipo. Es la forma de sumar climatización de piscina a una instalación de calefacción central existente o de resolver con un solo sistema la calefacción y la pileta de un hotel.",
      "En un apart hotel de la costa instalamos una caldera PEISA XP 100 de alta potencia combinada con un intercambiador Bowman FC100: un solo sistema para la calefacción central y la piscina.",
      "Como service oficial Bowman, también revisamos y mantenemos intercambiadores ya instalados.",
    ],
    servicios: [
      "Cálculo y selección del intercambiador",
      "Instalación vinculada a la caldera",
      "Mantenimiento y service oficial",
    ],
    equipos: ["Bowman FC100 (combinado con PEISA XP 100)"],
    serviciosRelacionados: ["climatizacion-de-piscinas", "calefaccion-central", "instalacion"],
    trabajos: ["peisa-xp100-bowman-apart-hotel"],
    faqs: ["piscina-potencia", "hoteles", "que-marcas"],
  },
  {
    slug: "rowa",
    nombre: "Rowa",
    logo: { src: "/marcas/rowa.svg", ancho: 125, alto: 49 },
    rol: "Servicio técnico de bombas presurizadoras",
    seoTitulo: "Bombas Rowa en Villa Gesell: service y presurización",
    seoDescripcion:
      "Servicio técnico oficial de bombas Rowa en Villa Gesell y la costa. Bombas presurizadoras: instalación, reparación y mantenimiento.",
    h1: "Bombas Rowa: servicio técnico y presurización en Villa Gesell",
    bajada: "Agua con presión en toda la casa: instalamos, reparamos y mantenemos bombas presurizadoras Rowa.",
    parrafos: [
      "En muchas casas de la costa el agua llega con poca presión: la ducha sale floja, el calefón o la caldera no encienden bien y cuesta usar dos canillas a la vez. Una bomba presurizadora bien elegida e instalada lo resuelve.",
      "En Gesetec somos servicio técnico oficial de bombas Rowa. Revisamos tu instalación, te recomendamos el equipo adecuado, lo instalamos y lo dejamos regulado. También reparamos bombas que hacen ruido, que arrancan y paran solas o que dejaron de funcionar.",
      "La presión de agua también influye en el funcionamiento de calderas y calefones de paso: por eso solemos revisar todo el sistema junto.",
    ],
    servicios: [
      "Diagnóstico de presión de agua",
      "Venta e instalación de bombas presurizadoras",
      "Reparación y mantenimiento",
    ],
    equipos: ["Bombas presurizadoras Rowa"],
    serviciosRelacionados: ["presurizacion", "reparacion"],
    trabajos: [],
    faqs: ["presurizadora", "que-marcas"],
  },
];

export function getMarca(slug: string): Marca | undefined {
  return marcas.find((m) => m.slug === slug);
}
