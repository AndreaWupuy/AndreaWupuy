import { ImageResponse } from "next/og";
import { DibujoIcono } from "@/lib/dibujoIcono";

const TAMANOS = [192, 512];

export function generateStaticParams() {
  return TAMANOS.map((t) => ({ tamano: String(t) }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ tamano: string }> }
) {
  const pedido = Number((await params).tamano);
  const tamano = TAMANOS.includes(pedido) ? pedido : 512;
  return new ImageResponse(<DibujoIcono tamano={tamano} />, {
    width: tamano,
    height: tamano,
  });
}
