import { Pantalla, Tarjeta, Titulo, Etiqueta, type ColorNeon } from "@/components/ui";

const HITOS: { dia: number; nombre: string; color: ColorNeon }[] = [
  { dia: 0, nombre: "Larcomar", color: "amarillo" },
  { dia: 7, nombre: "Parque del Amor", color: "fucsia" },
  { dia: 14, nombre: "Faro La Marina", color: "naranja" },
  { dia: 21, nombre: "Costa Verde", color: "celeste" },
];

export default function Carrera() {
  return (
    <Pantalla>
      <Titulo>Tu carrera</Titulo>
      <p className="-mt-2 text-[15px] text-tinta-suave">
        Un circuito por el Malecón de Miraflores. Avanzas un tramo por cada día de racha.
      </p>

      <Tarjeta>
        <ol className="relative flex flex-col gap-6 pl-8">
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[11px] w-1 rounded-full bg-borde"
          />
          {HITOS.map((hito) => (
            <li key={hito.nombre} className="relative flex items-center justify-between gap-3">
              <span
                aria-hidden
                className="absolute -left-8 h-6 w-6 rounded-full border-4 border-white bg-tinta"
              />
              <span className="text-[17px] font-bold">{hito.nombre}</span>
              <Etiqueta color={hito.color}>
                {hito.dia === 0 ? "INICIO" : `DÍA ${hito.dia}`}
              </Etiqueta>
            </li>
          ))}
        </ol>
      </Tarjeta>

      <p className="px-1 text-[14px] text-tinta-suave">
        Muy pronto verás aquí tu avatar y a tus amigos en el circuito.
      </p>
    </Pantalla>
  );
}
