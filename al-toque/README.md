# al toque

Web app de juegos diarios de cultura pop peruana: "Los 3 del día" + el misterio semanal "Ampay".

Hecha con Next.js (App Router) + TypeScript + Tailwind. Se publica en Vercel.

## Probar en tu navegador (Vercel)

La primera vez (solo una vez):

1. Entra a https://vercel.com/signup y elige **Continue with GitHub** (usa tu cuenta de GitHub).
2. Plan: elige **Hobby** (gratis).
3. En el panel, pulsa **Add New… → Project**.
4. Busca el repositorio **AndreaWupuy** y pulsa **Import**.
   Si no aparece, pulsa **Adjust GitHub App Permissions** y dale acceso a ese repositorio.
5. En **Root Directory** pulsa **Edit** y elige la carpeta **`al-toque`**. (Importante: la app vive en esa carpeta.)
6. Framework: debe decir **Next.js** solo. No cambies nada más y pulsa **Deploy**.
7. En 1–2 minutos te da un link. Ábrelo en el celular.

Después de eso, cada vez que se suban cambios a GitHub, Vercel crea solo un link nuevo de prueba
(lo ves en la pestaña **Deployments** del proyecto, y también aparece en GitHub junto a cada cambio).

## Para desarrolladores

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

- El "día" cambia a medianoche de Lima: ver `src/lib/fecha.ts`.
- Colores y tipografías: `src/app/globals.css`.
- Nunca se guardan claves secretas en el código: van en las variables de entorno de Vercel.
