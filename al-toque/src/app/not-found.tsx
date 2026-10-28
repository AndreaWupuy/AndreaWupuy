import Link from "next/link";
import { Pantalla, Tarjeta, Titulo } from "@/components/ui";

export default function NoEncontrado() {
  return (
    <Pantalla>
      <Titulo>¡Roche!</Titulo>
      <Tarjeta>
        <p className="text-[15px]">Esta página no existe.</p>
        <Link
          href="/"
          className="mt-4 inline-flex min-h-11 items-center rounded-full bg-tinta px-5 font-bold text-white"
        >
          Volver a Hoy
        </Link>
      </Tarjeta>
    </Pantalla>
  );
}
