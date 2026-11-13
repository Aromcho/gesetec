import Link from "next/link";
import { Llama } from "@/components/Llama";

export const metadata = { title: "Página no encontrada", robots: { index: false } };

export default function NoEncontrada() {
  return (
    <section className="mx-auto flex min-h-[80dvh] max-w-xl flex-col items-center justify-center px-5 pt-24 text-center">
      <Llama className="h-36 w-auto" modo="viva" />
      <h1 className="titular mt-8 text-4xl">Esta página se enfrió</h1>
      <p className="mt-4 text-celeste">No encontramos lo que buscabas. Volvé al inicio o pedí tu service desde ahí.</p>
      <Link href="/" className="mt-8 inline-flex h-13 items-center rounded-2xl bg-rojo px-6 text-[1.1875rem] font-bold">
        Ir al inicio
      </Link>
    </section>
  );
}
