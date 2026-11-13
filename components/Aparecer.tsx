/**
 * Aparece suave al entrar en pantalla (sube y se aclara).
 * Es CSS puro (animation-timeline: view() en globals.css): no suma JavaScript ni frena la carga.
 * Sin soporte o con "reducir movimiento", el contenido se ve directamente.
 */
export function Aparecer({
  children,
  className = "",
  como = "div",
}: {
  children: React.ReactNode;
  className?: string;
  /** Se mantiene por compatibilidad; con animaciones por scroll el escalonado lo da la posición. */
  retraso?: number;
  como?: "div" | "li" | "section" | "article";
}) {
  const C = como;
  return <C className={`aparecer ${className}`}>{children}</C>;
}
