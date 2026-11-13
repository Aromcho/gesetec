"use client";

import { useEffect } from "react";

/**
 * Pasa el acento del azul (frío) al rojo (calor) a medida que se baja por la página.
 * Escribe la variable CSS --heat (0 → 1) en <html>. Respeta prefers-reduced-motion.
 */
export function Calor() {
  useEffect(() => {
    const raiz = document.documentElement;
    let pedido = 0;
    const actualizar = () => {
      pedido = 0;
      const max = raiz.scrollHeight - window.innerHeight;
      const t = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      // Curva suave: arranca frío, se calienta hacia la mitad de la página.
      const heat = (Math.round(t * t * (3 - 2 * t) * 50) / 50).toFixed(2);
      // Solo se escribe si cambió (evita recalcular estilos en cada frame).
      if (raiz.style.getPropertyValue("--heat") !== heat) raiz.style.setProperty("--heat", heat);
    };
    const alScroll = () => {
      if (!pedido) pedido = requestAnimationFrame(actualizar);
    };
    actualizar();
    window.addEventListener("scroll", alScroll, { passive: true });
    window.addEventListener("resize", alScroll);
    return () => {
      window.removeEventListener("scroll", alScroll);
      window.removeEventListener("resize", alScroll);
      cancelAnimationFrame(pedido);
    };
  }, []);
  return null;
}
