/* Íconos dibujados a mano en SVG (nada de emojis en la interfaz). */

type Props = { className?: string };

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconoHoy({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="5" width="18" height="16" rx="4" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <circle cx="12" cy="15.5" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function IconoCarrera({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 3.5L16 11H5" />
    </svg>
  );
}

export function IconoAmpay({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="m15 15 5.5 5.5" />
    </svg>
  );
}

export function IconoPerfil({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
    </svg>
  );
}

export function IconoFuego({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M12 22c4 0 7-2.7 7-6.8 0-3.6-2.4-5.6-3.8-8.2-.5 1.8-1.5 3-2.7 3.4.3-3-1-5.9-3.5-8.4C9 5.7 5 9 5 15.2 5 19.3 8 22 12 22Z" />
    </svg>
  );
}

export function IconoVaso({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M6 4h12l-1.5 16a2 2 0 0 1-2 1.8h-5a2 2 0 0 1-2-1.8L6 4Z" />
      <path d="M6.6 10h10.8" />
      <path d="M14 4l2-2.5" />
    </svg>
  );
}

export function IconoCandado({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="11" width="14" height="10" rx="3" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function IconoFlecha({ className }: Props) {
  return (
    <svg {...base} className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
