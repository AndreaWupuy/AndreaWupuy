import type { Metadata, Viewport } from "next";
import { Bungee, DM_Sans, Shrikhand } from "next/font/google";
import { MenuInferior } from "@/components/MenuInferior";
import { RegistrarServiceWorker } from "@/components/RegistrarServiceWorker";
import "./globals.css";

const shrikhand = Shrikhand({
  variable: "--font-shrikhand",
  weight: "400",
  subsets: ["latin"],
});

const bungee = Bungee({
  variable: "--font-bungee",
  weight: "400",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "al toque",
  description: "Los 3 del día: juegos cortos de cultura pop peruana.",
  applicationName: "al toque",
  appleWebApp: {
    capable: true,
    title: "al toque",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#ECEAE6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-PE">
      <body
        className={`${shrikhand.variable} ${bungee.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        <MenuInferior />
        <RegistrarServiceWorker />
      </body>
    </html>
  );
}
