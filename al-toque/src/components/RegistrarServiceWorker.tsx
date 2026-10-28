"use client";

import { useEffect } from "react";

/** Registra el service worker para que la app se pueda instalar (PWA). */
export function RegistrarServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Si falla, la web sigue funcionando normal; solo no se instala.
    });
  }, []);

  return null;
}
