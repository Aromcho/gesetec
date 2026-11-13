# Plan — web de Gesetec Calderas

**Objetivo número uno:** SEO local. Superar a Tecnicalderas en Google, sobre todo en las búsquedas de PEISA, en Villa Gesell, Cariló, Pinamar y Costa Esmeralda.

## Relevamiento (13/11/2026)

- **Instagram @gesetec.calderas:** se revisaron las 42 publicaciones (textos completos), 2 historias destacadas con contenido útil ("Calderas" y "ServicioTécnico"), la bio y el link de WhatsApp. Se sacaron 20 fotos reales de trabajos de los reels, sin caras ni textos encima.
- **Ficha de Google:** 56 reseñas, todas de 5 ★ (33 con texto, copiadas tal cual), horarios, dirección y coordenadas.
- **Web actual (Canva):** unas 240 palabras, H1 dividido en dos, sin meta description ni JSON-LD.
- **Tecnicalderas:** unas 155 palabras, sin H1 ni meta description ni JSON-LD, con el texto de plantilla "Copyright © Your Website 2025". Su fuerte es que repite "PEISA" y "distribuidor oficial".

### Datos confirmados por el cliente
- Dirección: **Av. Buenos Aires 737**, Villa Gesell (igual que en la ficha de Google).
- Horarios: lunes a viernes de 8 a 18 h, sábados de 8 a 13 h.
- Marcas: PEISA, Baxi, Tameco, Ferroli, Euterma, **Rinnai**, Bowman, Rowa.
- Matrícula visible: Martín Alleva · Mat. 2928 · 2da categoría.

## Concepto de diseño

**Frío / calor.** La llama del logo, mitad azul y mitad roja, es el elemento firma:
- En la portada se enciende con un brillo suave, late despacio, baja con parallax y la rodea un sello que gira ("Service oficial PEISA").
- Reaparece como separador entre secciones, en el formulario y en la página 404.
- El color de acento pasa del azul al rojo a medida que se baja por la página.
- Tipografía: Archivo variable. Los titulares van en Expanded Black (ancha y pesada como el logo) y las etiquetas en Condensed con mayúsculas espaciadas.
- Colores del logo: azul marino de fondo, rojo para botones, bordó para detalles, azul de la llama como acento y celeste para textos secundarios.
- Mobile primero. Las animaciones son en CSS (ligadas al scroll) y respetan "reducir movimiento"; motion se usa en "Pedí tu service", que se carga recién al usarlo.

## Páginas

| Ruta | Búsqueda objetivo |
|---|---|
| `/` | calderas Villa Gesell, service de calderas Villa Gesell |
| `/service-oficial-peisa` | service oficial Peisa Villa Gesell, calderas Peisa Villa Gesell, distribuidor Peisa costa atlántica |
| `/servicios/instalacion` | instalación de calderas Villa Gesell |
| `/servicios/reparacion` | reparación de calderas, técnico de calderas |
| `/servicios/mantenimiento` | mantenimiento / service anual de calderas |
| `/servicios/presurizacion` | bombas presurizadoras, Rowa |
| `/servicios/puesta-en-marcha` | puesta en marcha de calderas en casas de temporada |
| `/servicios/climatizacion-de-piscinas` | climatización de piscinas, Tameco (agregada: es la mitad del Instagram) |
| `/servicios/calefaccion-central` | calefacción central, radiadores, losa radiante (agregada: búsqueda objetivo) |
| `/marcas/{baxi,tameco,ferroli,euterma,rinnai,bowman,rowa}` | service [marca] Villa Gesell |

## Próximos pasos (fuera del código)

1. DNS → VPS y Certbot (ver README).
2. Search Console: verificación por DNS, enviar el sitemap y pedir la indexación de `/` y `/service-oficial-peisa`.
3. Ficha de Google: link a la web con UTM, servicios, productos y fotos semanales.
4. Mail con dominio propio (info@gesetecalderas.com) en Google Workspace, cargando los registros en el DNS del dominio.
5. Sumar trabajos nuevos con fotos de Leo (marca + modelo + zona).
