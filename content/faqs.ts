/**
 * PREGUNTAS FRECUENTES — se muestran en la portada, en /service-oficial-peisa y en cada servicio/marca.
 * Cada página genera su JSON-LD FAQPage con las preguntas que muestra.
 * `portada: true` = aparece en la landing. `peisa: true` = aparece en /service-oficial-peisa.
 */

export interface Faq {
  id: string;
  pregunta: string;
  respuesta: string;
  portada?: boolean;
  peisa?: boolean;
}

export const faqs: Faq[] = [
  {
    id: "service-oficial-peisa",
    pregunta: "¿Gesetec es service oficial PEISA?",
    respuesta:
      "Sí. Somos servicio técnico oficial PEISA en Villa Gesell y toda la zona: Mar de las Pampas, Mar Azul, Cariló, Valeria del Mar, Pinamar, Costa Esmeralda y Madariaga. Reparamos y mantenemos calderas PEISA con repuestos originales, y también vendemos e instalamos equipos PEISA nuevos.",
    portada: true,
    peisa: true,
  },
  {
    id: "que-marcas",
    pregunta: "¿Con qué marcas trabajan?",
    respuesta:
      "Representamos y somos servicio técnico oficial de PEISA, Baxi, Tameco, Ferroli, Euterma, Rinnai, Bowman y bombas Rowa. Si tu equipo es de otra marca, escribinos igual por WhatsApp y te decimos si podemos ayudarte.",
    portada: true,
  },
  {
    id: "zonas",
    pregunta: "¿En qué zonas atienden?",
    respuesta:
      "Atendemos en Villa Gesell, Mar de las Pampas, Las Gaviotas, Mar Azul, Cariló, Valeria del Mar, Pinamar y General Madariaga, y en los barrios privados Costa Esmeralda, North Beach, La Herradura y Villa Robles. Para venta de equipos hacemos envíos a todo el país.",
    portada: true,
  },
  {
    id: "urgencias",
    pregunta: "¿Atienden urgencias? ¿Cuánto tardan en venir?",
    respuesta:
      "Escribinos por WhatsApp contando qué le pasa a la caldera. Coordinamos la visita técnica en el día siempre que la agenda lo permite, y muchas fallas se resuelven en la misma visita.",
    portada: true,
    peisa: true,
  },
  {
    id: "cada-cuanto-service",
    pregunta: "¿Cada cuánto hay que hacerle el service a la caldera?",
    respuesta:
      "Lo recomendable es un mantenimiento por año, antes de que empiece el frío. Si la casa estuvo cerrada varios meses, conviene además una revisión antes de volver a encenderla.",
    portada: true,
    peisa: true,
  },
  {
    id: "casas-veraneo",
    pregunta: "Mi casa de la costa estuvo cerrada todo el año. ¿Qué hago antes de prender la caldera?",
    respuesta:
      "Pedí una puesta en marcha de temporada. Después de meses sin uso, con salitre y humedad, conviene revisar el equipo, cargar y purgar el circuito y controlar el encendido antes de usarlo. Si no estás en la costa, lo coordinamos por WhatsApp.",
    portada: true,
  },
  {
    id: "pierde-presion",
    pregunta: "Mi caldera pierde presión. ¿Es grave?",
    respuesta:
      "Que la presión baje un poco de vez en cuando puede ser normal, pero si tenés que cargar agua seguido hay algo que revisar: una pérdida en el circuito, la válvula de seguridad o el vaso de expansión. Fijate en el manual de tu caldera cuál es la presión de trabajo y, si baja una y otra vez, pedí una revisión.",
    peisa: true,
  },
  {
    id: "codigo-error",
    pregunta: "La caldera muestra un código de error. ¿Qué hago?",
    respuesta:
      "Anotá el código o sacale una foto a la pantalla y mandánosla por WhatsApp junto con la marca y el modelo. Muchas veces el código indica qué revisar y nos permite llegar a la visita mejor preparados. No desarmes el equipo ni lo reinicies muchas veces seguidas.",
    peisa: true,
  },
  {
    id: "repuestos",
    pregunta: "¿Usan repuestos originales?",
    respuesta:
      "Sí. Como servicio técnico oficial trabajamos con repuestos originales de cada marca: es lo que mantiene la seguridad, el rendimiento y la garantía del equipo.",
    peisa: true,
  },
  {
    id: "garantia",
    pregunta: "¿Los trabajos tienen garantía?",
    respuesta:
      "Trabajamos con garantía oficial y repuestos originales. Los equipos nuevos tienen la garantía oficial del fabricante, según sus condiciones.",
    portada: true,
    peisa: true,
  },
  {
    id: "venden-calderas",
    pregunta: "¿Venden calderas o solo hacen el service?",
    respuesta:
      "Las dos cosas. Vendemos calderas, radiadores, toalleros, termostatos y climatizadores de piscina, los instalamos y los ponemos en marcha. Te asesoramos para elegir el equipo según tu casa.",
    peisa: true,
  },
  {
    id: "envios",
    pregunta: "¿Hacen envíos?",
    respuesta:
      "Sí. Hacemos la logística de los equipos que vendemos, con envío bonificado en productos seleccionados según zona y condiciones de entrega, y envíos coordinados a todo el país.",
  },
  {
    id: "termostato-wifi",
    pregunta: "¿Se puede manejar la calefacción desde el celular?",
    respuesta:
      "Sí. Instalamos el termostato Wi-Fi Zentraly de PEISA, que permite ver y ajustar la temperatura de la casa desde una app en el celular.",
    peisa: true,
  },
  {
    id: "piscina-potencia",
    pregunta: "¿Qué climatizador necesito para mi piscina?",
    respuesta:
      "Depende del volumen de agua, de si la piscina está al aire libre o cubierta y de cuántos meses la quieras usar. Como referencia, según Tameco: el CP-30 es para piletas de hasta 45.000 litros, el CP-70 hasta 100.000, el CP-80 hasta 130.000 y el CP-100 hasta 200.000. Pasanos las medidas y te asesoramos.",
  },
  {
    id: "piscina-un-dia",
    pregunta: "¿Cuánto tarda la instalación de un climatizador de piscina?",
    respuesta:
      "En muchos casos la dejamos lista en un solo día: base de cemento, instalación y puesta en marcha. Depende del lugar donde va el equipo y de la instalación existente.",
  },
  {
    id: "hoteles",
    pregunta: "¿Trabajan con hoteles, complejos y obras?",
    respuesta:
      "Sí. Hicimos, por ejemplo, la calefacción completa de un apart hotel de 10 departamentos en Cariló y la calefacción y climatización de piscina de otro apart hotel con una caldera PEISA XP 100. Te acompañamos desde la elección de los equipos hasta la puesta en marcha.",
  },
  {
    id: "presurizadora",
    pregunta: "¿Una bomba presurizadora sirve si la caldera se apaga al abrir otra canilla?",
    respuesta:
      "Muchas veces sí: las calderas y calefones de paso necesitan un caudal mínimo de agua para funcionar bien. Antes de instalar una bomba revisamos la instalación para confirmar que la causa sea la presión.",
  },
];

export function getFaqs(ids: string[]): Faq[] {
  return ids.map((id) => faqs.find((f) => f.id === id)).filter((f): f is Faq => Boolean(f));
}
