import { Pantalla, Tarjeta, Titulo } from "@/components/ui";

const SOSPECHOSOS = [
  "La Conductora",
  "El Guerrero",
  "La Reportera",
  "El Productor",
  "La Maquilladora",
  "El Camarógrafo",
];

export default function Ampay() {
  return (
    <Pantalla>
      <Titulo>Ampay</Titulo>
      <p className="-mt-2 text-[15px] text-tinta-suave">
        Alguien se quedó a solas con el objeto. De lunes a viernes se desbloquea una pista. ¿Quién fue?
      </p>

      <Tarjeta>
        <h2 className="font-etiqueta text-[13px] tracking-wide">SOSPECHOSOS</h2>
        <ul className="mt-3 grid grid-cols-2 gap-2">
          {SOSPECHOSOS.map((s) => (
            <li
              key={s}
              className="rounded-[16px] bg-fondo px-3 py-3 text-[15px] font-medium"
            >
              {s}
            </li>
          ))}
        </ul>
      </Tarjeta>

      <p className="px-1 text-[14px] text-tinta-suave">
        El primer caso se abre muy pronto.
      </p>
    </Pantalla>
  );
}
