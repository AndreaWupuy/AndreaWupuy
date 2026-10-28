/**
 * Todo "el día" de al toque se calcula en hora de Lima (America/Lima).
 * Lima no tiene horario de verano, pero usamos Intl para no depender de eso.
 */

export const ZONA_LIMA = "America/Lima";

/** Día #1 del juego. Los números ("La Palabra #12") se cuentan desde aquí. */
export const FECHA_LANZAMIENTO = "2026-10-28";

/** Fecha de Lima en formato AAAA-MM-DD para un instante dado (por defecto, ahora). */
export function fechaLima(instante: Date = new Date()): string {
  // en-CA formatea como AAAA-MM-DD
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: ZONA_LIMA,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(instante);
}

/** Días transcurridos entre dos fechas AAAA-MM-DD (b - a). */
export function diasEntre(a: string, b: string): number {
  const ms = Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`);
  return Math.round(ms / 86_400_000);
}

/** Número de edición del día (#1, #2, ...). */
export function numeroDelDia(fecha: string = fechaLima()): number {
  return diasEntre(FECHA_LANZAMIENTO, fecha) + 1;
}

/** Texto amigable: "martes 28 de octubre". */
export function fechaLegible(fecha: string = fechaLima()): string {
  return new Intl.DateTimeFormat("es-PE", {
    timeZone: "UTC",
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date(`${fecha}T12:00:00Z`));
}

/** Milisegundos que faltan para la próxima medianoche en Lima. */
export function msHastaMedianocheLima(instante: Date = new Date()): number {
  const hoy = fechaLima(instante);
  // Medianoche de Lima = 05:00 UTC del día siguiente (UTC-5)
  const manana = new Date(`${hoy}T05:00:00Z`);
  manana.setUTCDate(manana.getUTCDate() + 1);
  return manana.getTime() - instante.getTime();
}
