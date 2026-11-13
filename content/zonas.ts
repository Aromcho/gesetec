/**
 * ZONAS DE ATENCIÓN — localidades y barrios privados donde trabaja Gesetec (confirmado por el cliente, 13/11/2026).
 *
 * Cada zona aparece en: la portada (sección Zonas), el pie, "Pedí tu service", el JSON-LD (areaServed)
 * y en su página /zonas/[pagina]. Algunas zonas comparten página (Mar Azul y Las Gaviotas; los barrios privados
 * de la Ruta 11) para no crear páginas casi vacías, que Google penaliza.
 * En los textos se pueden usar {direccion} y {horarios}: se completan con content/negocio.ts.
 *
 * Para sumar una zona: agregala en `zonas` y, si va a tener página propia, en `paginasZona`.
 */

export type GrupoZona = "Partido de Villa Gesell" | "Partido de Pinamar" | "Ruta 11 al norte de Pinamar" | "Tierra adentro";

export interface Zona {
  slug: string;
  nombre: string;
  tipo: "localidad" | "barrio privado";
  grupo: GrupoZona;
  /** Slug de la página /zonas/[pagina] donde se habla de esta zona. */
  pagina: string;
  /** Se nombra en los textos cortos (portada, formulario). */
  principal?: boolean;
}

export const zonas: Zona[] = [
  { slug: "villa-gesell", nombre: "Villa Gesell", tipo: "localidad", grupo: "Partido de Villa Gesell", pagina: "villa-gesell", principal: true },
  { slug: "mar-de-las-pampas", nombre: "Mar de las Pampas", tipo: "localidad", grupo: "Partido de Villa Gesell", pagina: "mar-de-las-pampas", principal: true },
  { slug: "las-gaviotas", nombre: "Las Gaviotas", tipo: "localidad", grupo: "Partido de Villa Gesell", pagina: "mar-azul-y-las-gaviotas" },
  { slug: "mar-azul", nombre: "Mar Azul", tipo: "localidad", grupo: "Partido de Villa Gesell", pagina: "mar-azul-y-las-gaviotas", principal: true },
  { slug: "carilo", nombre: "Cariló", tipo: "localidad", grupo: "Partido de Pinamar", pagina: "carilo", principal: true },
  { slug: "valeria-del-mar", nombre: "Valeria del Mar", tipo: "localidad", grupo: "Partido de Pinamar", pagina: "valeria-del-mar", principal: true },
  { slug: "pinamar", nombre: "Pinamar", tipo: "localidad", grupo: "Partido de Pinamar", pagina: "pinamar", principal: true },
  { slug: "la-herradura", nombre: "La Herradura", tipo: "barrio privado", grupo: "Partido de Pinamar", pagina: "barrios-privados" },
  { slug: "costa-esmeralda", nombre: "Costa Esmeralda", tipo: "barrio privado", grupo: "Ruta 11 al norte de Pinamar", pagina: "costa-esmeralda", principal: true },
  { slug: "north-beach", nombre: "North Beach", tipo: "barrio privado", grupo: "Ruta 11 al norte de Pinamar", pagina: "barrios-privados" },
  { slug: "villa-robles", nombre: "Villa Robles", tipo: "barrio privado", grupo: "Ruta 11 al norte de Pinamar", pagina: "barrios-privados" },
  { slug: "general-madariaga", nombre: "General Madariaga", tipo: "localidad", grupo: "Tierra adentro", pagina: "general-madariaga", principal: true },
];

export const gruposZona: GrupoZona[] = ["Partido de Villa Gesell", "Partido de Pinamar", "Ruta 11 al norte de Pinamar", "Tierra adentro"];

/** "Villa Gesell, Mar de las Pampas, …" — todas las zonas en una línea. */
export const zonasEnTexto = (lista: Zona[] = zonas) =>
  lista.length > 1 ? `${lista.slice(0, -1).map((z) => z.nombre).join(", ")} y ${lista[lista.length - 1].nombre}` : lista[0]?.nombre ?? "";

export interface PaginaZona {
  slug: string;
  /** Nombre corto para menús y migas. */
  nombre: string;
  seoTitulo: string;
  seoDescripcion: string;
  h1: string;
  bajada: string;
  parrafos: string[];
  /** Subsecciones (barrios dentro de la página). */
  secciones?: { titulo: string; texto: string }[];
  /** Lo que más pedimos en esta zona. */
  destacados: string[];
  /** Foto de cabecera (assets/fotos o assets/fondos). */
  foto: string;
  /** Trabajos reales hechos en la zona (content/trabajos.ts). */
  trabajos: string[];
  /** Autor de una reseña real de la zona (content/resenas.ts). */
  resena?: string;
  faqs: { pregunta: string; respuesta: string }[];
}

export const paginasZona: PaginaZona[] = [
  {
    slug: "villa-gesell",
    nombre: "Villa Gesell",
    seoTitulo: "Service de calderas en Villa Gesell | Gesetec Calderas",
    seoDescripcion:
      "Service oficial de calderas en Villa Gesell: reparación, mantenimiento, instalación y piscinas climatizadas. Local en Av. Buenos Aires 737.",
    h1: "Service de calderas en Villa Gesell",
    bajada: "Somos de acá: tenemos el local en la ciudad y desde ahí salimos todos los días.",
    parrafos: [
      "Gesetec es de Villa Gesell y acá tiene su local. Atendemos casas, departamentos, hoteles, complejos y comercios de toda la ciudad, del centro a los barrios del norte y del sur, todo el año y no solo en temporada.",
      "En Gesell conviven viviendas de uso permanente con muchas casas y departamentos de alquiler temporario. Por eso hacemos tanto el service anual de las calderas que trabajan todo el invierno como la puesta en marcha de las que estuvieron apagadas durante meses.",
      "Como estamos en la ciudad, coordinar es simple: nos escribís por WhatsApp, te damos un horario y, siempre que la agenda lo permite, vamos en el día.",
    ],
    destacados: [
      "Reparación de calderas con repuestos originales",
      "Mantenimiento anual antes del invierno",
      "Puesta en marcha de casas y departamentos de temporada",
      "Venta e instalación de calderas, radiadores y climatizadores",
    ],
    foto: "camioneta-gesetec-service-oficial-villa-gesell",
    trabajos: ["prima-tec-24-dsf", "diva-tecno-smart-gamma"],
    resena: "VANESA",
    faqs: [
      {
        pregunta: "¿Dónde está el local de Gesetec en Villa Gesell?",
        respuesta:
          "En {direccion}. Atendemos {horarios}. Para coordinar una visita, lo más rápido es WhatsApp.",
      },
      {
        pregunta: "¿Hacen service de calderas en el día en Villa Gesell?",
        respuesta:
          "Siempre que la agenda lo permite, sí. Escribinos por WhatsApp con la marca de la caldera y qué le pasa, y te decimos cuándo podemos ir.",
      },
    ],
  },
  {
    slug: "mar-de-las-pampas",
    nombre: "Mar de las Pampas",
    seoTitulo: "Service de calderas en Mar de las Pampas | Gesetec",
    seoDescripcion:
      "Service, reparación y puesta en marcha de calderas en Mar de las Pampas: casas, cabañas y complejos. Climatización de piscinas. Pedí tu service.",
    h1: "Service de calderas en Mar de las Pampas",
    bajada: "Casas, cabañas y complejos entre el bosque: calefacción que tiene que andar cuando llegan los huéspedes.",
    parrafos: [
      "Mar de las Pampas queda muy cerca de nuestro local en Villa Gesell y es una de las zonas donde más trabajamos. Entre el bosque y las calles de arena hay casas, cabañas, complejos y apart hoteles que se alquilan por temporada.",
      "Muchos de esos equipos trabajan a pleno durante los meses de uso y después quedan parados, con la humedad del bosque y el aire del mar. Por eso recomendamos una puesta en marcha antes de cada temporada y un service anual: llegar con la calefacción revisada evita quedarse sin agua caliente con la casa llena.",
      "También hacemos instalaciones nuevas, calefacción central por radiadores o losa radiante y climatización de piscinas para complejos y casas particulares.",
    ],
    destacados: [
      "Puesta en marcha de cabañas y complejos antes de la temporada",
      "Service y reparación de calderas de todas las marcas que atendemos",
      "Climatización de piscinas con Tameco",
      "Coordinación con dueños, administradores o encargados",
    ],
    foto: "casa-de-veraneo-entre-pinos-costa-atlantica",
    trabajos: [],
    faqs: [
      {
        pregunta: "¿Atienden cabañas y complejos en Mar de las Pampas?",
        respuesta:
          "Sí. Hacemos el mantenimiento, las reparaciones y la puesta en marcha de las calderas de cabañas y complejos, y coordinamos la visita con el dueño, el administrador o el encargado.",
      },
      {
        pregunta: "¿Pueden revisar la caldera si no estoy en Mar de las Pampas?",
        respuesta:
          "Sí. Coordinamos todo por WhatsApp: nos indicás quién nos abre y te contamos qué encontramos y qué hicimos.",
      },
    ],
  },
  {
    slug: "mar-azul-y-las-gaviotas",
    nombre: "Mar Azul y Las Gaviotas",
    seoTitulo: "Calderas en Mar Azul y Las Gaviotas | Gesetec Calderas",
    seoDescripcion:
      "Service, reparación e instalación de calderas en Mar Azul y Las Gaviotas. Puesta en marcha de casas de temporada y climatización de piscinas.",
    h1: "Service de calderas en Mar Azul y Las Gaviotas",
    bajada: "Llegamos desde Villa Gesell a las casas del bosque más tranquilo de la costa.",
    parrafos: [
      "Mar Azul y Las Gaviotas, al sur de Mar de las Pampas, son pueblos de bosque y casas de veraneo. Buena parte de las viviendas se usan en temporada y pasan el resto del año cerradas, así que la caldera suele estar meses sin encenderse.",
      "Ese es el escenario típico de las fallas al volver: circuito sin presión, encendido que no responde, partes dañadas por la humedad o el salitre. Con una puesta en marcha antes de usar la casa, revisamos el equipo, cargamos y purgamos el circuito y dejamos calefacción y agua caliente funcionando.",
      "Para quienes viven todo el año en Mar Azul o Las Gaviotas, hacemos el service anual, reparaciones e instalaciones nuevas, con repuestos originales y la garantía oficial de cada marca.",
    ],
    destacados: [
      "Puesta en marcha de casas de temporada",
      "Service anual para viviendas permanentes",
      "Reparación con repuestos originales",
      "Climatización de piscinas",
    ],
    foto: "casa-de-veraneo-entre-pinos-costa-atlantica",
    trabajos: [],
    faqs: [
      {
        pregunta: "¿Hacen service de calderas en Las Gaviotas?",
        respuesta:
          "Sí. Atendemos Las Gaviotas y Mar Azul como el resto de la zona: escribinos por WhatsApp y coordinamos la visita.",
      },
      {
        pregunta: "Mi casa en Mar Azul estuvo cerrada todo el invierno. ¿Qué conviene hacer?",
        respuesta:
          "Una puesta en marcha antes de usarla: revisamos el equipo después de meses sin uso, cargamos y purgamos el circuito y probamos calefacción y agua caliente.",
      },
    ],
  },
  {
    slug: "carilo",
    nombre: "Cariló",
    seoTitulo: "Service de calderas en Cariló | Gesetec Calderas",
    seoDescripcion:
      "Service oficial de calderas en Cariló: casas, apart hoteles y complejos. Calefacción central, piscinas climatizadas y reparación con repuestos originales.",
    h1: "Service de calderas en Cariló",
    bajada: "Casas grandes en el bosque, apart hoteles y piscinas: instalaciones que necesitan un service a la altura.",
    parrafos: [
      "En Cariló trabajamos con casas particulares, apart hoteles y complejos. Son instalaciones grandes, muchas veces con calefacción central por radiadores o losa radiante, agua caliente para varios baños y piscina climatizada.",
      "Uno de nuestros trabajos más completos fue en Cariló: la calefacción central de un apart hotel de 10 departamentos, con dos calderas PEISA, boiler acumulador para el agua caliente, radiadores Gamma 500 y Tropical 500 y toalleros Dominó en cada unidad.",
      "Hacemos el service y la reparación de calderas de las marcas que atendemos como service oficial, el mantenimiento de sistemas completos y la climatización de piscinas con Tameco o con intercambiadores Bowman vinculados a la caldera.",
    ],
    destacados: [
      "Calefacción central para casas, apart hoteles y complejos",
      "Climatización de piscinas",
      "Mantenimiento de sistemas completos",
      "Service oficial PEISA, Baxi, Ferroli y más",
    ],
    foto: "radiador-peisa-tropical-500-negro-carilo",
    trabajos: ["apart-hotel-carilo"],
    faqs: [
      {
        pregunta: "¿Trabajan con apart hoteles en Cariló?",
        respuesta:
          "Sí. Hicimos, por ejemplo, la calefacción completa de un apart hotel de 10 departamentos en Cariló, desde la venta de los equipos hasta la puesta en marcha.",
      },
      {
        pregunta: "¿Climatizan piscinas en Cariló?",
        respuesta:
          "Sí. Instalamos climatizadores Tameco o, si la casa ya tiene calefacción central, un intercambiador Bowman vinculado a la caldera.",
      },
    ],
  },
  {
    slug: "valeria-del-mar",
    nombre: "Valeria del Mar",
    seoTitulo: "Service de calderas en Valeria del Mar | Gesetec",
    seoDescripcion:
      "Service técnico de calderas en Valeria del Mar: reparación, mantenimiento anual, puesta en marcha e instalación. Service oficial PEISA y más marcas.",
    h1: "Service técnico de calderas en Valeria del Mar",
    bajada: "Entre Pinamar y Cariló, casas de familia que necesitan la calefacción lista cuando llegan.",
    parrafos: [
      "Valeria del Mar, entre Pinamar y Cariló, es una localidad de casas: muchas de uso familiar en vacaciones y fines de semana largos, y otras de quienes viven todo el año en la costa.",
      "Para las casas que se usan por temporada, la puesta en marcha es clave: después de meses sin uso, revisamos el equipo, cargamos y purgamos el circuito y controlamos el encendido. Para las viviendas permanentes, el service anual antes del invierno ayuda a que la caldera rinda y no falle en pleno frío.",
      "También reparamos calderas con repuestos originales, instalamos equipos nuevos y climatizamos piscinas.",
    ],
    destacados: [
      "Puesta en marcha de temporada",
      "Service anual y reparaciones",
      "Instalación de calderas y calefacción central",
      "Climatización de piscinas",
    ],
    foto: "living-calido-radiador-calefaccion-central",
    trabajos: [],
    faqs: [
      {
        pregunta: "¿Llegan a Valeria del Mar para un service de caldera?",
        respuesta:
          "Sí. Valeria del Mar es parte de nuestra zona de trabajo. Escribinos por WhatsApp con la marca de la caldera y qué le pasa, y coordinamos la visita.",
      },
    ],
  },
  {
    slug: "pinamar",
    nombre: "Pinamar",
    seoTitulo: "Service de calderas en Pinamar | Gesetec Calderas",
    seoDescripcion:
      "Service oficial de calderas en Pinamar y La Herradura: reparación, mantenimiento, instalación y climatización de piscinas. Pedí tu service por WhatsApp.",
    h1: "Service de calderas en Pinamar",
    bajada: "De los departamentos del centro a las casas de los barrios cerrados de la zona norte.",
    parrafos: [
      "En Pinamar atendemos departamentos, casas, hoteles y comercios, y también los barrios cerrados de la zona norte, como La Herradura. Cada uno tiene su tipo de instalación: calderas murales en departamentos, sistemas de calefacción central en casas grandes, equipos de alta potencia en hoteles.",
      "Hacemos el service y la reparación de calderas como service oficial de PEISA, Baxi, Ferroli, Euterma y más marcas, con repuestos originales. También instalamos calderas, radiadores, losa radiante y termostatos Wi-Fi, y climatizamos piscinas.",
      "Si tu casa en Pinamar se usa por temporada, te recomendamos una puesta en marcha antes de llegar: la humedad y el salitre castigan los equipos parados.",
    ],
    destacados: [
      "Service oficial PEISA y otras marcas",
      "Barrios cerrados de la zona norte, como La Herradura",
      "Climatización de piscinas",
      "Calderas de alta potencia para hoteles",
    ],
    foto: "fondo-piscina-climatizada-atardecer-pinos",
    trabajos: [],
    faqs: [
      {
        pregunta: "¿Atienden La Herradura y los barrios cerrados de Pinamar?",
        respuesta:
          "Sí. Trabajamos en los barrios cerrados de Pinamar, como La Herradura. Coordinamos la visita con vos y con el ingreso del barrio.",
      },
      {
        pregunta: "¿Hacen service de calderas PEISA en Pinamar?",
        respuesta: "Sí, somos service oficial PEISA en Pinamar y en toda la zona, con repuestos originales.",
      },
    ],
  },
  {
    slug: "costa-esmeralda",
    nombre: "Costa Esmeralda",
    seoTitulo: "Calderas y piscinas en Costa Esmeralda | Gesetec",
    seoDescripcion:
      "Service de calderas, puesta en marcha y climatización de piscinas en el barrio Costa Esmeralda. Service oficial PEISA y Tameco. Pedí tu service.",
    h1: "Calderas y piscinas climatizadas en Costa Esmeralda",
    bajada: "Puesta en marcha de casas de temporada y piscinas a la temperatura ideal, en el barrio privado más grande de la zona.",
    parrafos: [
      "Costa Esmeralda, sobre la Ruta 11 y lindero a Pinamar, es uno de los barrios privados donde más trabajamos. Muchas casas se usan en temporada y tienen piscina, así que los pedidos más comunes son dos: dejar la calefacción lista antes de llegar y climatizar la pileta.",
      "En Costa Esmeralda instalamos, por ejemplo, un climatizador Tameco CP-30: base de cemento, instalación y puesta en marcha, con la piscina lista para usar en el día. También hacemos la puesta en marcha de calderas de casas que estuvieron cerradas, el service anual y reparaciones con repuestos originales.",
      "Coordinamos la visita con vos y con el ingreso del barrio. Si no estás en la costa, te mantenemos al tanto por WhatsApp.",
    ],
    destacados: [
      "Climatización de piscinas con Tameco",
      "Puesta en marcha de calderas antes de la temporada",
      "Service y reparación con repuestos originales",
      "Coordinación a distancia con el propietario",
    ],
    foto: "piscina-climatizada-costa-esmeralda",
    trabajos: ["tameco-cp30-costa-esmeralda"],
    resena: "Jose Maria Ibarbia",
    faqs: [
      {
        pregunta: "¿Climatizan piscinas en Costa Esmeralda?",
        respuesta:
          "Sí. Vendemos, instalamos y hacemos el service oficial de climatizadores Tameco. En muchos casos la piscina queda lista en un solo día.",
      },
      {
        pregunta: "¿Hacen la puesta en marcha de la caldera antes de la temporada?",
        respuesta:
          "Sí. Revisamos el equipo después de meses sin uso, cargamos y purgamos el circuito y dejamos calefacción y agua caliente funcionando antes de que llegues.",
      },
    ],
  },
  {
    slug: "barrios-privados",
    nombre: "North Beach, Villa Robles y La Herradura",
    seoTitulo: "Calderas en North Beach, Villa Robles y La Herradura",
    seoDescripcion:
      "Service de calderas y climatización de piscinas en los barrios privados North Beach, Villa Robles y La Herradura. Service oficial PEISA y Tameco.",
    h1: "Calderas y piscinas en North Beach, Villa Robles y La Herradura",
    bajada: "Casas grandes, losa radiante y piscinas: instalaciones exigentes que atendemos como service oficial.",
    parrafos: [
      "Además de Costa Esmeralda, trabajamos en los barrios privados de la zona de Pinamar. Son casas con instalaciones exigentes: calefacción central por losa radiante o radiadores, agua caliente para varios baños, equipos de mayor potencia y, muchas veces, piscina climatizada.",
      "En estos barrios hacemos service y reparación de calderas, mantenimiento anual, puesta en marcha de temporada, instalaciones nuevas y climatización de piscinas. Coordinamos cada visita con el propietario y con el ingreso del barrio.",
    ],
    secciones: [
      {
        titulo: "North Beach",
        texto:
          "Barrio privado sobre la Ruta 11, al norte de Pinamar y lindero a Costa Esmeralda, con edificios frente al mar y casas. Atendemos calderas de casas y departamentos, y piscinas.",
      },
      {
        titulo: "Villa Robles",
        texto:
          "Barrio privado sobre la Ruta 11, cerca de Costa Esmeralda y Pinamar, con casas entre el bosque y la laguna. Hacemos service, puesta en marcha e instalaciones de calefacción y piscinas.",
      },
      {
        titulo: "La Herradura",
        texto:
          "Barrio cerrado de la zona norte de Pinamar, de casas grandes con parque y piscina. Hacemos el mantenimiento de sistemas completos de calefacción y la climatización de piscinas.",
      },
    ],
    destacados: [
      "Losa radiante y calefacción central",
      "Climatización de piscinas",
      "Puesta en marcha de temporada",
      "Service oficial PEISA, Baxi, Tameco y más",
    ],
    foto: "fondo-piscina-climatizada-atardecer-pinos",
    trabajos: [],
    faqs: [
      {
        pregunta: "¿Trabajan en North Beach y Villa Robles?",
        respuesta:
          "Sí. Atendemos North Beach, Villa Robles, La Herradura y Costa Esmeralda. Coordinamos la visita con el propietario y con el ingreso de cada barrio.",
      },
    ],
  },
  {
    slug: "general-madariaga",
    nombre: "General Madariaga",
    seoTitulo: "Service de calderas en General Madariaga | Gesetec",
    seoDescripcion:
      "Service técnico de calderas en General Madariaga: reparación, mantenimiento anual e instalación de calderas y calefacción central. Pedí tu service.",
    h1: "Service técnico de calderas en General Madariaga",
    bajada: "Viajamos desde Villa Gesell para el service, la reparación y la instalación de tu calefacción.",
    parrafos: [
      "General Madariaga es una ciudad de casas de uso permanente: la calefacción trabaja todo el invierno, día tras día. Por eso lo más importante es el mantenimiento anual, que ayuda a que la caldera rinda, consuma lo justo y no falle en pleno frío.",
      "Desde Villa Gesell viajamos a Madariaga para hacer service y reparaciones con repuestos originales, instalar calderas nuevas y armar sistemas de calefacción central por radiadores o losa radiante. Coordinamos la visita por WhatsApp para aprovechar el viaje.",
    ],
    destacados: [
      "Mantenimiento anual antes del invierno",
      "Reparación con repuestos originales",
      "Instalación de calderas y radiadores",
      "Visitas coordinadas por WhatsApp",
    ],
    foto: "living-calido-radiador-calefaccion-central",
    trabajos: [],
    faqs: [
      {
        pregunta: "¿Viajan a General Madariaga?",
        respuesta:
          "Sí. Madariaga es parte de nuestra zona de trabajo. Escribinos por WhatsApp contándonos qué necesitás y coordinamos el día de la visita.",
      },
    ],
  },
];

export function getPaginaZona(slug: string): PaginaZona | undefined {
  return paginasZona.find((p) => p.slug === slug);
}

export const zonasDePagina = (slug: string) => zonas.filter((z) => z.pagina === slug);
