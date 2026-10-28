"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconoAmpay,
  IconoCarrera,
  IconoHoy,
  IconoPerfil,
} from "@/components/Iconos";

const SECCIONES = [
  { href: "/", etiqueta: "Hoy", Icono: IconoHoy },
  { href: "/carrera", etiqueta: "Carrera", Icono: IconoCarrera },
  { href: "/ampay", etiqueta: "Ampay", Icono: IconoAmpay },
  { href: "/perfil", etiqueta: "Perfil", Icono: IconoPerfil },
];

/** Menú negro flotante en forma de píldora; el ícono activo va en un círculo amarillo. */
export function MenuInferior() {
  const ruta = usePathname();

  return (
    <nav
      aria-label="Menú principal"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-[max(16px,env(safe-area-inset-bottom))]"
    >
      <ul className="flex w-full max-w-[360px] items-center justify-between rounded-full bg-tinta p-2 shadow-[0_10px_30px_rgba(17,17,17,0.25)]">
        {SECCIONES.map(({ href, etiqueta, Icono }) => {
          const activo = href === "/" ? ruta === "/" : ruta.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-label={etiqueta}
                aria-current={activo ? "page" : undefined}
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-colors focus-visible:outline-amarillo ${
                  activo
                    ? "bg-amarillo text-tinta"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Icono className="h-6 w-6" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
