import { ImageResponse } from "next/og";
import { DibujoIcono } from "@/lib/dibujoIcono";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(<DibujoIcono tamano={64} />, size);
}
