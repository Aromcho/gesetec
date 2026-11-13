/** Inserta datos estructurados JSON-LD en el HTML exportado. */
export function JsonLd({ datos }: { datos: object | object[] }) {
  const lista = Array.isArray(datos) ? datos : [datos];
  return (
    <>
      {lista.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d).replace(/</g, "\\u003c") }}
        />
      ))}
    </>
  );
}
