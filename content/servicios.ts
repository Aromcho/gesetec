/**
 * SERVICIOS — tarjetas de la portada y páginas /servicios/[slug].
 * Fuente: publicaciones de Instagram y web anterior de Gesetec. Textos originales.
 * El orden del array es el orden en que se muestran (pedido del cliente: calefacción central en 4.º lugar y piscinas en 7.º; las piscinas tienen además su bloque propio en la portada).
 */

export interface Servicio {
  slug: string;
  nombre: string;
  /** Línea corta para la tarjeta de la portada. */
  resumen: string;
  /** Ícono (ver components/Icono.tsx). */
  icono: "instalacion" | "reparacion" | "mantenimiento" | "presion" | "temporada" | "piscina" | "radiador";
  seoTitulo: string;
  seoDescripcion: string;
  h1: string;
  bajada: string;
  parrafos: string[];
  /** Lista "Qué incluye". */
  incluye: string[];
  /** Lista "Cuándo conviene" / señales. */
  senales: { titulo: string; items: string[] };
  /** Opción preseleccionada en "Pedí tu service" (paso 2). */
  pedido: string;
  /** Fotos (nombres en assets/fotos o assets/fondos, sin extensión). La primera va en la cabecera de la página. */
  fotos: string[];
  marcas: string[];
  trabajos: string[];
  faqs: string[];
}

export const servicios: Servicio[] = [
  {
    slug: "instalacion",
    nombre: "Instalación de calderas",
    resumen: "Venta, instalación y puesta en marcha de calderas murales y de alta potencia, con garantía oficial.",
    icono: "instalacion",
    seoTitulo: "Instalación de calderas en Villa Gesell | Gesetec Calderas",
    seoDescripcion:
      "Venta e instalación de calderas PEISA, Baxi y más en Villa Gesell, Pinamar, Cariló y Costa Esmeralda. Instalación profesional, puesta en marcha y garantía.",
    h1: "Instalación de calderas en Villa Gesell y la costa",
    bajada:
      "Te asesoramos, te vendemos el equipo, lo instalamos y lo dejamos funcionando. Una sola empresa de principio a fin.",
    parrafos: [
      "Una caldera dura muchos años si está bien elegida y bien instalada. Por eso empezamos por entender tu casa: cuántos ambientes vas a calefaccionar, si la caldera también va a dar agua caliente, si la casa se usa todo el año o por temporada, y qué instalación tenés hoy.",
      "Con esa información te recomendamos el equipo. Instalamos calderas murales de doble servicio (calefacción y agua caliente), como la PEISA Prima Tec 24 DSF, la Prima Tec 32 DSF o la Diva Tecno Smart, y calderas de alta potencia como la PEISA XP 100 para hoteles y edificios.",
      "Nos ocupamos de todo: logística y entrega, montaje, conexiones de agua y gas, vinculación con radiadores, losa radiante o boiler, configuración y puesta en marcha. Al terminar te explicamos cómo usar el equipo. Los equipos nuevos tienen la garantía oficial del fabricante.",
    ],
    incluye: [
      "Asesoramiento y elección del equipo",
      "Venta de calderas originales",
      "Logística y entrega (envíos a todo el país)",
      "Montaje y conexiones de agua y gas",
      "Vinculación con radiadores, losa radiante o boiler",
      "Termostato Wi-Fi Zentraly (opcional)",
      "Puesta en marcha y explicación de uso",
    ],
    senales: {
      titulo: "Cuándo conviene una caldera nueva",
      items: [
        "Estás construyendo o reciclando una casa",
        "Tu caldera actual tiene muchos años y fallas repetidas",
        "Querés sumar calefacción central por radiadores o piso radiante",
        "Necesitás más agua caliente o más potencia",
      ],
    },
    pedido: "Instalar una caldera nueva",
    fotos: [
      "caldera-peisa-prima-tec-24-dsf-instalada",
      "caldera-peisa-prima-tec-24-dsf-conexiones",
      "caldera-peisa-diva-tecno-smart-negra",
    ],
    marcas: ["baxi", "ferroli", "euterma"],
    trabajos: ["prima-tec-24-dsf", "diva-tecno-smart-gamma", "piso-radiante-prima-tec-32"],
    faqs: ["venden-calderas", "envios", "garantia", "termostato-wifi"],
  },
  {
    slug: "reparacion",
    nombre: "Reparación de calderas",
    resumen: "Diagnóstico en el día y reparación con repuestos originales: no enciende, pierde presión, códigos de error.",
    icono: "reparacion",
    seoTitulo: "Reparación de calderas en Villa Gesell | Técnico oficial",
    seoDescripcion:
      "Técnico de calderas en Villa Gesell y la zona: diagnóstico y reparación en el día con repuestos originales. PEISA, Baxi, Ferroli, Euterma y más.",
    h1: "Reparación de calderas en Villa Gesell",
    bajada: "Diagnóstico y reparación en el día, con repuestos originales y técnicos oficiales.",
    parrafos: [
      "Cuando la caldera falla, querés que alguien venga rápido y que la solución dure. Coordinamos la visita técnica en el día siempre que la agenda lo permite, y nuestros técnicos llegan con experiencia en las marcas que atendemos como service oficial.",
      "En la visita revisamos el equipo, encontramos la causa y te explicamos qué pasa antes de hacer nada. Si hace falta un repuesto, usamos repuestos originales: es lo que mantiene la seguridad, el rendimiento y la garantía de la caldera.",
      "Las fallas más comunes que atendemos: calderas que no encienden o se apagan, que pierden presión, que gotean, que no entregan agua caliente, que hacen ruido o que muestran un código de error en la pantalla.",
    ],
    incluye: [
      "Visita técnica coordinada por WhatsApp",
      "Diagnóstico en el lugar",
      "Explicación clara de la falla y del presupuesto",
      "Reparación con repuestos originales",
      "Prueba de funcionamiento al terminar",
    ],
    senales: {
      titulo: "Señales de que tu caldera necesita un técnico",
      items: [
        "No enciende o se apaga sola",
        "La presión baja seguido o hay que cargar agua a cada rato",
        "Aparece un código de error en la pantalla",
        "Gotea o hay humedad debajo del equipo",
        "Calienta los radiadores pero no el agua (o al revés)",
        "Hace ruidos o golpes que antes no hacía",
      ],
    },
    pedido: "No enciende / no calienta",
    fotos: [
      "service-caldera-peisa-diva-tecno-abierta",
      "service-oficial-caldera-peisa-abierta",
      "service-caldera-mural-abierta-villa-gesell",
    ],
    marcas: ["baxi", "ferroli", "euterma"],
    trabajos: [],
    faqs: ["urgencias", "codigo-error", "pierde-presion", "repuestos"],
  },
  {
    slug: "mantenimiento",
    nombre: "Mantenimiento anual",
    resumen: "Service preventivo para que la caldera rinda, consuma menos y no falle cuando llega el frío.",
    icono: "mantenimiento",
    seoTitulo: "Mantenimiento anual de calderas en Villa Gesell | Gesetec",
    seoDescripcion:
      "Service y mantenimiento anual de calderas y calefacción central en Villa Gesell, Pinamar, Cariló y Costa Esmeralda. Prevení fallas antes del invierno.",
    h1: "Mantenimiento anual de calderas y calefacción central",
    bajada: "El service preventivo que evita quedarte sin calefacción en pleno invierno.",
    parrafos: [
      "Una caldera trabaja muchas horas por día durante meses. Con el uso se acumula suciedad, se desgastan piezas y cambian las presiones del circuito. Un mantenimiento por año ayuda a conservar el rendimiento del equipo, a detectar fallas a tiempo y a que funcione de manera segura.",
      "Hacemos mantenimiento preventivo y correctivo de calderas, radiadores, toalleros y sistemas de calefacción central completos. Si encontramos algo que conviene cambiar, te lo mostramos y te lo explicamos antes.",
      "El mejor momento es antes de que empiece el frío: así llegás al invierno con todo revisado y sin apuro.",
    ],
    incluye: [
      "Revisión general del equipo y de sus seguridades",
      "Control de la presión del circuito",
      "Revisión de radiadores, toalleros y purgado",
      "Limpieza de los componentes que lo requieran",
      "Prueba de calefacción y de agua caliente",
      "Informe de lo que conviene cambiar",
    ],
    senales: {
      titulo: "Cuándo hacer el mantenimiento",
      items: [
        "Una vez por año, antes del invierno",
        "Antes de usar una casa que estuvo cerrada meses",
        "Si el consumo de gas subió sin motivo",
        "Si un radiador calienta menos que los demás",
      ],
    },
    pedido: "Service / mantenimiento anual",
    fotos: ["manos-tecnico-revisando-caldera-mantenimiento", "service-oficial-caldera-peisa-abierta", "radiador-peisa-gamma-500-blanco"],
    marcas: ["baxi", "ferroli", "euterma", "tameco"],
    trabajos: [],
    faqs: ["cada-cuanto-service", "pierde-presion", "casas-veraneo", "garantia"],
  },
  {
    slug: "calefaccion-central",
    nombre: "Calefacción central",
    resumen: "Radiadores, toalleros y losa radiante: proyectos completos para casas, hoteles y comercios.",
    icono: "radiador",
    seoTitulo: "Calefacción central y losa radiante en Villa Gesell",
    seoDescripcion:
      "Calefacción central por radiadores, toalleros y piso radiante en Villa Gesell, Cariló y Pinamar. Proyectos integrales con calderas PEISA. Pedí presupuesto.",
    h1: "Calefacción central por radiadores y losa radiante",
    bajada: "Proyectos integrales: desde la elección de los equipos hasta la puesta en marcha.",
    parrafos: [
      "La calefacción central reparte el calor de una caldera por toda la casa: con radiadores, con toalleros en los baños o con piso radiante. El resultado es un calor parejo, sin aire seco y sin aparatos en cada ambiente.",
      "Hacemos el proyecto completo. Trabajamos con radiadores PEISA Gamma 500 y Tropical 500, toalleros Dominó y sistemas de piso radiante, y los combinamos con la caldera adecuada y un termostato Wi-Fi Zentraly para manejar la temperatura desde el celular.",
      "Hicimos desde viviendas familiares hasta un apart hotel de 10 departamentos en Cariló, con dos calderas PEISA, boiler acumulador para el agua caliente, radiadores blancos y negros y toalleros en cada unidad.",
    ],
    incluye: [
      "Proyecto y cálculo de la instalación",
      "Radiadores Gamma 500 y Tropical 500",
      "Toalleros calefaccionados Dominó",
      "Piso / losa radiante con colectores",
      "Caldera, boiler y termostato Wi-Fi",
      "Puesta en marcha del sistema completo",
    ],
    senales: {
      titulo: "Para quién",
      items: [
        "Casas en construcción o en reciclaje",
        "Hoteles, apart hoteles y complejos",
        "Comercios y oficinas",
        "Casas con calefacción a renovar",
      ],
    },
    pedido: "Calefacción central / radiadores",
    fotos: [
      "living-calido-radiador-calefaccion-central",
      "serpentinas-piso-radiante-instalacion",
      "radiador-peisa-tropical-500-negro-carilo",
      "colector-piso-radiante-peisa-prima-tec",
    ],
    marcas: ["euterma", "baxi"],
    trabajos: ["apart-hotel-carilo", "piso-radiante-prima-tec-32", "diva-tecno-smart-gamma"],
    faqs: ["hoteles", "termostato-wifi", "venden-calderas"],
  },
  {
    slug: "presurizacion",
    nombre: "Presurización y bombas Rowa",
    resumen: "Bombas presurizadoras Rowa: agua con presión en toda la casa y equipos de paso que funcionan bien.",
    icono: "presion",
    seoTitulo: "Bombas presurizadoras en Villa Gesell | Service Rowa",
    seoDescripcion:
      "Instalación y reparación de bombas presurizadoras Rowa en Villa Gesell y la costa. Servicio técnico oficial Rowa. Agua con presión en toda la casa.",
    h1: "Presurización de agua y bombas Rowa en Villa Gesell",
    bajada: "Servicio técnico oficial de bombas Rowa: instalación, reparación y regulación.",
    parrafos: [
      "La poca presión de agua es un problema frecuente en la costa. Además de la incomodidad en la ducha, afecta a calderas y calefones de paso, que necesitan un caudal mínimo para encender y mantener la temperatura.",
      "Una bomba presurizadora bien dimensionada lo soluciona. Revisamos tu instalación, elegimos el equipo adecuado, lo instalamos y lo dejamos regulado. Somos servicio técnico oficial de bombas Rowa, así que también reparamos y mantenemos bombas existentes.",
    ],
    incluye: [
      "Revisión de la instalación y del tanque",
      "Elección de la bomba adecuada",
      "Instalación y regulación",
      "Reparación de bombas Rowa",
    ],
    senales: {
      titulo: "Señales de que necesitás presurizar",
      items: [
        "La ducha sale floja, sobre todo en el piso de arriba",
        "La caldera o el calefón se apagan al abrir otra canilla",
        "La bomba actual arranca y para sola o hace ruido",
      ],
    },
    pedido: "Bomba presurizadora",
    fotos: ["bomba-presurizadora-sala-de-maquinas"],
    marcas: ["rowa"],
    trabajos: [],
    faqs: ["presurizadora", "pierde-presion"],
  },
  {
    slug: "puesta-en-marcha",
    nombre: "Puesta en marcha de temporada",
    resumen: "Para casas de veraneo que pasan meses cerradas: revisamos y encendemos la caldera antes de que llegues.",
    icono: "temporada",
    seoTitulo: "Puesta en marcha de calderas: casas de temporada | Gesetec",
    seoDescripcion:
      "Puesta en marcha de calderas en casas de veraneo de Villa Gesell, Mar de las Pampas, Mar Azul, Cariló, Pinamar y Costa Esmeralda. Salitre y humedad.",
    h1: "Puesta en marcha de calderas en casas de temporada",
    bajada: "Tu casa de la costa estuvo cerrada meses. Antes de prender la calefacción, dejala en manos de un técnico.",
    parrafos: [
      "Muchas casas de Villa Gesell, Mar de las Pampas, Mar Azul, Cariló, Valeria del Mar, Pinamar y los barrios privados como Costa Esmeralda pasan buena parte del año cerradas. En ese tiempo la caldera no trabaja, el circuito puede perder presión y el aire salino y la humedad atacan las partes metálicas y eléctricas. Encenderla sin revisar puede terminar en una falla justo cuando llegás.",
      "La puesta en marcha de temporada es una visita para revisar el equipo, cargar y purgar el circuito, controlar las seguridades y dejar la calefacción y el agua caliente funcionando. Si sos propietario y no estás en la costa, coordinamos todo por WhatsApp.",
    ],
    incluye: [
      "Revisión del equipo después de meses sin uso",
      "Carga de presión y purgado del circuito",
      "Control de seguridades y del encendido",
      "Revisión de daños por salitre y humedad",
      "Prueba de calefacción y agua caliente",
      "Coordinación a distancia con el propietario",
    ],
    senales: {
      titulo: "Ideal para",
      items: [
        "Casas de veraneo y de fin de semana",
        "Propiedades en alquiler temporario",
        "Propietarios que viven lejos de la costa",
        "Complejos y apart hoteles antes de la temporada",
      ],
    },
    pedido: "Puesta en marcha de temporada",
    fotos: ["casa-de-veraneo-entre-pinos-costa-atlantica", "piscina-climatizada-costa-esmeralda", "obra-piso-radiante-entre-pinos"],
    marcas: ["baxi", "ferroli", "euterma", "tameco"],
    trabajos: [],
    faqs: ["casas-veraneo", "cada-cuanto-service", "zonas"],
  },
  {
    slug: "climatizacion-de-piscinas",
    nombre: "Climatización de piscinas",
    resumen: "Climatizadores Tameco e intercambiadores Bowman: tu pileta a la temperatura ideal más meses al año.",
    icono: "piscina",
    seoTitulo: "Climatización de piscinas en Villa Gesell | Tameco oficial",
    seoDescripcion:
      "Climatizadores de piscina Tameco CP-30, CP-70 y CP-100: venta, instalación en el día y service oficial en Villa Gesell, Pinamar, Cariló y Costa Esmeralda.",
    h1: "Climatización de piscinas en Villa Gesell y la costa",
    bajada: "Venta, instalación y service oficial de climatizadores Tameco. Tu piscina lista para usar en un solo día.",
    parrafos: [
      "Una piscina climatizada se disfruta muchos más meses. En la costa, donde las noches son frescas incluso en verano, la diferencia se nota desde el primer día.",
      "Somos service oficial Tameco. Vendemos e instalamos los climatizadores CP-30 (30.000 kcal/h), CP-70 (70.000 kcal/h) y CP-100 (100.000 kcal/h), y te ayudamos a elegir según el volumen de tu piscina y el uso que le des. Armamos la base de cemento, hacemos la instalación y la puesta en marcha, en muchos casos en un solo día.",
      "Para hoteles o casas que ya tienen calefacción central, otra opción es climatizar la piscina con la caldera mediante un intercambiador de calor Bowman. También hacemos proyectos que combinan calefacción y pileta con un solo sistema.",
    ],
    incluye: [
      "Asesoramiento para elegir la potencia",
      "Venta de equipos Tameco originales",
      "Logística a domicilio bonificada (según zona)",
      "Base de cemento e instalación",
      "Puesta en marcha y service oficial",
    ],
    senales: {
      titulo: "Opciones",
      items: [
        "Climatizador Tameco a gas, independiente",
        "Intercambiador Bowman vinculado a la caldera",
        "Proyecto integral: calefacción + piscina",
        "Climatización de spa",
      ],
    },
    pedido: "Climatizar mi piscina",
    fotos: [
      "fondo-piscina-climatizada-atardecer-pinos",
      "piscina-climatizada-costa-esmeralda",
      "climatizador-piscina-tameco-cp-30-costa-esmeralda",
      "intercambiador-bowman-fc100-piscina-apart-hotel",
    ],
    marcas: ["tameco", "bowman"],
    trabajos: ["tameco-cp30-costa-esmeralda", "peisa-xp100-bowman-apart-hotel"],
    faqs: ["piscina-potencia", "piscina-un-dia", "envios"],
  },
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}
