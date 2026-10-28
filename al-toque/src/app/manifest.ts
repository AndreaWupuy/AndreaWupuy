import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "al toque",
    short_name: "al toque",
    description: "Los 3 del día: juegos cortos de cultura pop peruana.",
    lang: "es-PE",
    start_url: "/",
    display: "standalone",
    background_color: "#ECEAE6",
    theme_color: "#ECEAE6",
    icons: [
      { src: "/icono/192", sizes: "192x192", type: "image/png" },
      { src: "/icono/512", sizes: "512x512", type: "image/png" },
      {
        src: "/icono/512",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
