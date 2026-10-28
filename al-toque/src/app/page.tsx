import { Logo } from "@/components/Logo";
import {
  IconoAmpay,
  IconoCandado,
  IconoFuego,
  IconoVaso,
} from "@/components/Iconos";
import { Etiqueta, Pantalla, Tarjeta, fondoNeon, type ColorNeon } from "@/components/ui";
import { fechaLegible, fechaLima, numeroDelDia } from "@/lib/fecha";

// La fecha depende de la hora de Lima en cada visita, no del momento del build.
export const dynamic = "force-dynamic";

const JUEGOS: {
  nombre: string;
  descripcion: string;
  minutos: number;
  color: ColorNeon;
  letra: string;
}[] = [
  {
    nombre: "La Palabra",
    descripcion: "Adivina la palabra peruana en 6 intentos.",
    minutos: 2,
    color: "verde",
    letra: "P",
  },
  {
    nombre: "Trivia peruana",
    descripcion: "5 preguntas: TV, fútbol, comida, música e historia.",
    minutos: 2,
    color: "fucsia",
    letra: "T",
  },
  {
    nombre: "Sopa de letras",
    descripcion: "Encuentra las 8 palabras del tema del día.",
    minutos: 1,
    color: "celeste",
    letra: "S",
  },
];

export default function Hoy() {
  const hoy = fechaLima();

  return (
    <Pantalla>
      <header className="flex items-center justify-between">
        <Logo />
        <Etiqueta color="amarillo">#{numeroDelDia(hoy)}</Etiqueta>
      </header>

      <p className="-mt-1 text-[15px] text-tinta-suave first-letter:uppercase">
        {fechaLegible(hoy)}
      </p>

      {/* Racha y salvavidas */}
      <Tarjeta className="grid grid-cols-2 divide-x divide-borde p-0">
        <div className="flex flex-col gap-1 p-5">
          <span className="flex items-center gap-1.5 text-[13px] text-tinta-suave">
            <IconoFuego className="h-4 w-4" />
            Racha
          </span>
          <span className="font-etiqueta text-[28px] leading-none">0</span>
          <span className="text-[13px] text-tinta-suave">días</span>
        </div>
        <div className="flex flex-col gap-1 p-5">
          <span className="flex items-center gap-1.5 text-[13px] text-tinta-suave">
            <IconoVaso className="h-4 w-4" />
            Chicha morada
          </span>
          <span className="font-etiqueta text-[28px] leading-none">0</span>
          <span className="text-[13px] text-tinta-suave">salvavidas</span>
        </div>
      </Tarjeta>

      {/* Los 3 del día */}
      <section aria-labelledby="titulo-tres" className="flex flex-col gap-3">
        <div className="flex items-end justify-between px-1 pt-2">
          <h2 id="titulo-tres" className="font-titulo text-[26px] leading-none">
            Los 3 del día
          </h2>
          <span className="font-etiqueta text-[12px] text-tinta-suave">0/3</span>
        </div>

        {JUEGOS.map((juego) => (
          <article
            key={juego.nombre}
            className="flex items-center gap-4 rounded-tarjeta bg-white p-4"
          >
            <div
              aria-hidden
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] font-etiqueta text-[24px] text-tinta ${fondoNeon(juego.color)}`}
            >
              {juego.letra}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-[17px] font-bold leading-tight">{juego.nombre}</h3>
              <p className="mt-0.5 text-[14px] leading-snug text-tinta-suave">
                {juego.descripcion}
              </p>
            </div>
            <span className="flex shrink-0 flex-col items-center gap-1 text-tinta-suave">
              <IconoCandado className="h-5 w-5" />
              <span className="text-[11px]">Pronto</span>
            </span>
          </article>
        ))}
      </section>

      {/* Ampay de la semana */}
      <article className="flex items-center gap-4 rounded-tarjeta bg-tinta p-5 text-white">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amarillo text-tinta">
          <IconoAmpay className="h-7 w-7" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-titulo text-[22px] leading-tight">Ampay</h3>
          <p className="text-[14px] leading-snug text-white/80">
            El misterio de la semana. Una pista nueva cada día.
          </p>
        </div>
      </article>
    </Pantalla>
  );
}
