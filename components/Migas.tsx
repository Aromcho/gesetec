import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { migasSchema } from "@/lib/jsonld";

/** Migas de pan visibles + BreadcrumbList. */
export function Migas({ items }: { items: { nombre: string; ruta: string }[] }) {
  const todos = [{ nombre: "Inicio", ruta: "/" }, ...items];
  return (
    <>
      <nav aria-label="Estás en" className="text-sm text-humo">
        <ol className="flex flex-wrap items-center gap-1.5">
          {todos.map((it, i) => (
            <li key={it.ruta} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i < todos.length - 1 ? (
                <Link href={it.ruta} className="hover:text-white">
                  {it.nombre}
                </Link>
              ) : (
                <span aria-current="page" className="text-celeste">
                  {it.nombre}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd datos={migasSchema(todos)} />
    </>
  );
}
