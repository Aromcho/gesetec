/**
 * RESEÑAS REALES de la ficha de Google "GESETEC CALDERAS" (relevadas el 13/11/2026).
 * Texto, nombre y fecha TAL CUAL aparecen en Google (las fechas son relativas a ese día).
 * No editar los textos. Para sumar reseñas nuevas, copiarlas igual que en Google.
 * Las 23 reseñas de 5 estrellas sin texto no se muestran.
 */

export interface Resena {
  autor: string;
  /** Fecha como la muestra Google al relevarla (13/11/2026). */
  fecha: string;
  estrellas: 5 | 4 | 3 | 2 | 1;
  texto: string;
  /** Se muestra primero en la portada. */
  destacada?: boolean;
}

/** Fecha en que se copiaron las reseñas (para el aviso "Reseñas de Google al ..."). */
export const resenasRelevadas = "13/11/2026";

export const resenas: Resena[] = [
  {
    autor: "VANESA",
    fecha: "Hace una semana",
    estrellas: 5,
    texto: "Excelente!!! Vino Julián y arregló la caldera en la misma visita, nos explicó y nos dios todos los detalles de lo que no estaba funcionando bien. Muchas gracias súper recomendable",
    destacada: true,
  },
  {
    autor: "Maria Mercedes Mingrone",
    fecha: "Hace 4 meses",
    estrellas: 5,
    texto: "Excelente servicio el del Sr. Julian, un buen profesional , muy buen trabajo y asesoramiento.\nLa caldera funciona correctamente.\nAdemás una persona honesta que no me cobró por demás. Lo.volveria a llamar con todo gusto.\nLe recomiendo 100%.",
    destacada: true,
  },
  {
    autor: "Halina S.",
    fecha: "Hace 8 meses",
    estrellas: 5,
    texto: "Excelente servicio, puntual, preciso, muy recomendable. ¡Ojalá todos trabajaran así! Gracias!!!!!",
    destacada: true,
  },
  {
    autor: "guillermo RP",
    fecha: "Hace un año",
    estrellas: 5,
    texto: "Hace poco me comunique con ellos para asesoramiento y futuros trabajos en un departamento, dado que soy de Buenos Aires.\nRespuesta rápida y profesional, conocen muy bien el rubro calefacción y también me asesoraron de aquellos temas que necesitaba.\nExcelente!!!! los recomiendo!",
    destacada: true,
  },
  {
    autor: "Marta Pereyra",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "No quise dejar de destacar el profesionalismo que encontré en Gesetec. En mi caso tuve la asistencia de Martin. Solo palabra de agradecimiento por la excelente instalación de la calefacción por radiadores de la cual opte. Hermoso sentir un calor ambiental\ntan parejo. Gracias!! (Marta de la Prov.de Mza)",
    destacada: true,
  },
  {
    autor: "Romina Coria",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "Excelentes profesionales! responden de inmediato, trabajaron en casa un día feriado, destacable atención! Sin duda recomiendo el servicio!",
    destacada: true,
  },
  {
    autor: "Sebastian Guido",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "Excelente servicio por parte de Martin y Julian. Se tomaron el trabajo de revisar cada detalle, explicar todo lo que estaba ocurriendo con la caldera y solucionaron el problema. Muchisimas gracias a ambos!",
    destacada: true,
  },
  {
    autor: "Jose Maria Ibarbia",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "Martin y Julian hicieron el servicio de puesta en marcha de la caldera de mi casa en Costa Esmeralda. Un trabajo excelente. Dieron todas las explicaciones que les requerí. Los recomiendo.",
    destacada: true,
  },
  {
    autor: "Miguel Reynal",
    fecha: "Hace 5 años",
    estrellas: 5,
    texto: "Me resolvió un problema en la calefacción, fuera de horario laboral, vía telefónica y sin conocernos! Un servicio muy profesional con mucha paciencia, toda una experiencia nueva en esta Argentina ... Súper recomendable!",
    destacada: true,
  },
  {
    autor: "Hernan Federico Casati",
    fecha: "Hace un año",
    estrellas: 5,
    texto: "Excelente atención y predisposición para solucionar mi problema.\nJulián 10 puntos!!",
  },
  {
    autor: "Sergio Malis",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "Excelente servicio !! Muy profesionales. Trabajaron de forma muy eficiente y en plazo. Los recomiendo 100%",
  },
  {
    autor: "Silvio Cuevas",
    fecha: "Hace 9 meses",
    estrellas: 5,
    texto: "Excelente atención,rápida respuesta para solucionar inconvenientes.",
  },
  {
    autor: "MLD CONSULTORA CONSULTORAENRRHH",
    fecha: "Hace un año",
    estrellas: 5,
    texto: "Imprecable servicio!! Son súper profesionales y excelente atención !! Muchas gracias!!!",
  },
  {
    autor: "Roberto Rodriguez",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "Profesionalismo, seriedad; impecable las explicaciones y tips que me dio Martín para el instalador del piso radiante para que el sistema funcione adecuadamente.\nSúper recomendable!!!!",
    destacada: true,
  },
  {
    autor: "Hernán Cicculli",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "Muy buena atención y lo más importante pudieron encontrar la solución. Súper recomendable!",
  },
  {
    autor: "Diego Loffler",
    fecha: "Hace 9 meses",
    estrellas: 5,
    texto: "Excelente servicio. Muy recomendable.",
  },
  {
    autor: "Laura Morete",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "Excelente atención, solucionó el problema de mí caldera en el momento. Recomendable cien por cien!! Gracias!!",
    destacada: true,
  },
  {
    autor: "Daniek Lesch",
    fecha: "Hace 4 años",
    estrellas: 5,
    texto: "Me atendieron de 10 puntos ahora estoy a la espera de la visita y presupuesto.",
  },
  {
    autor: "Leonardo Palma “Leo”",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "Muy buena atencion telefonica me asesoraron . Sobre lo que necesitaba",
  },
  {
    autor: "Veronica Pereira",
    fecha: "Hace 6 años",
    estrellas: 5,
    texto: "Excelente atención ,atendido por Martin y sus hijos ,altamente recomendables.",
  },
  {
    autor: "Guido Pugnale",
    fecha: "Hace 10 meses",
    estrellas: 5,
    texto: "Excelente servicio y atención!",
  },
  {
    autor: "Pablo Repetto",
    fecha: "Hace un año",
    estrellas: 5,
    texto: "Muy rápida y muy eficiente respuesta. Muchas gracias!!!",
  },
  {
    autor: "Martin Colasantti",
    fecha: "Hace 5 años",
    estrellas: 5,
    texto: "Excelente servicio. Muy profesionales!",
  },
  {
    autor: "Silvya Ro",
    fecha: "Hace 5 años",
    estrellas: 5,
    texto: "Excelente atención!!..muy recomendable!",
  },
  {
    autor: "Federico Blanco",
    fecha: "Hace 5 años",
    estrellas: 5,
    texto: "Muy buen servicio y atención, recomendado",
  },
  {
    autor: "Mariano Lombroni",
    fecha: "Hace 5 años",
    estrellas: 5,
    texto: "Rápido y eficiente..todo perfecto",
  },
  {
    autor: "georgie consoli",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "Excelente servicio y asesoramiento.",
  },
  {
    autor: "Maria Marzullo",
    fecha: "Hace 2 años",
    estrellas: 5,
    texto: "Excelente predisposición y atención!!!",
  },
  {
    autor: "Ana Maria Rodriguez",
    fecha: "Hace 4 años",
    estrellas: 5,
    texto: "Serios y responsables",
  },
  {
    autor: "Martina Enriquez",
    fecha: "Hace 5 años",
    estrellas: 5,
    texto: "Mantenimiento de sistema de calefacción",
  },
  {
    autor: "Guillermo Bonomi",
    fecha: "Hace una semana",
    estrellas: 5,
    texto: "Trabajo impecable. Con gran conocimiento!!",
    destacada: true,
  },
  {
    autor: "Silvia Garcia",
    fecha: "Hace una semana",
    estrellas: 5,
    texto: "Siempre atentos y solucionando los inconvenientes a la brevedad!!! Muy recomendables. Gracias",
  },
  {
    autor: "Juan Miguel Di Giorno",
    fecha: "Hace un mes",
    estrellas: 5,
    texto: "Profesionales de confianza !",
  },
];
