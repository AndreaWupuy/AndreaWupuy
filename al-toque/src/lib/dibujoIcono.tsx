/** Dibujo del ícono de la app: "at" negro sobre amarillo con una franja fucsia. */
export function DibujoIcono({ tamano }: { tamano: number }) {
  return (
    <div
      style={{
        width: tamano,
        height: tamano,
        background: "#FFE600",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: tamano * 0.46,
          fontWeight: 900,
          color: "#111111",
          letterSpacing: -tamano * 0.02,
          lineHeight: 1,
        }}
      >
        at
      </div>
      <div
        style={{
          marginTop: tamano * 0.04,
          width: tamano * 0.42,
          height: tamano * 0.07,
          borderRadius: tamano,
          background: "#FF2E88",
        }}
      />
    </div>
  );
}
