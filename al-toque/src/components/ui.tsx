import type { ReactNode } from "react";

/** Contenedor de cada pantalla: ancho de celular, deja espacio para el menú inferior. */
export function Pantalla({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[480px] flex-col gap-4 px-4 pt-6 pb-32">
      {children}
    </main>
  );
}

/** Título de sección con la tipografía de cartel. */
export function Titulo({ children }: { children: ReactNode }) {
  return (
    <h1 className="font-titulo text-[34px] leading-tight text-tinta">
      {children}
    </h1>
  );
}

/** Tarjeta blanca muy redondeada. */
export function Tarjeta({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`rounded-tarjeta bg-white p-5 ${className}`}>
      {children}
    </section>
  );
}

const COLORES = {
  amarillo: "bg-amarillo",
  fucsia: "bg-fucsia",
  verde: "bg-verde",
  naranja: "bg-naranja",
  celeste: "bg-celeste",
} as const;

export type ColorNeon = keyof typeof COLORES;

/** Etiqueta pequeña en Bungee sobre color neón (siempre texto negro). */
export function Etiqueta({
  children,
  color = "amarillo",
}: {
  children: ReactNode;
  color?: ColorNeon;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-etiqueta text-[11px] tracking-wide text-tinta ${COLORES[color]}`}
    >
      {children}
    </span>
  );
}

export function fondoNeon(color: ColorNeon) {
  return COLORES[color];
}
