import type { Metadata } from "next";
import HomePage from "../home-page";

export const metadata: Metadata = {
  title: "Apps móviles y productos web",
  description:
    "Desarrollador de producto en Lima: apps iOS y Android, webapps y juegos. Mira qué construí, con qué tecnologías y cómo llegan a producción.",
  alternates: { canonical: "/", languages: { es: "/", en: "/en/" } },
  openGraph: {
    type: "website",
    locale: "es_PE",
    title: "Aldhair Vera — Apps móviles y productos web",
    description: "Apps, webapps y juegos construidos desde el problema hasta su publicación.",
    images: [{ url: "/projects/cozy-pomodoro.jpeg", width: 1320, height: 2868, alt: "Cozy Pomodoro, app móvil desarrollada por Aldhair Vera" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldhair Vera — Apps móviles y productos web",
    description: "Apps, webapps y juegos construidos desde el problema hasta su publicación.",
    images: ["/projects/cozy-pomodoro.jpeg"],
  },
};

export default function SpanishHome() {
  return <HomePage locale="es" />;
}
