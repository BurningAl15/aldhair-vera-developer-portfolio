import type { Metadata } from "next";
import "../globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aldhairvera-portfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aldhair Vera — Software engineer · web, móvil y escritorio",
    template: "%s | Aldhair Vera",
  },
  description:
    "Aldhair Vera, software engineer y product engineer en Chincha, Perú. Desarrollo de productos web, móviles y de escritorio.",
  applicationName: "Aldhair Vera — Portfolio",
  authors: [{ name: "Aldhair Vera", url: siteUrl }],
  creator: "Aldhair Vera",
  openGraph: {
    type: "website",
    siteName: "Aldhair Vera — Portfolio",
    locale: "es_PE",
    title: "Aldhair Vera — Software engineer · web, móvil y escritorio",
    description: "Productos digitales desde la idea hasta su publicación en tiendas.",
    images: [{ url: "/projects/cozy-pomodoro.jpeg", width: 1320, height: 2868, alt: "Cozy Pomodoro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldhair Vera — Software engineer · web, móvil y escritorio",
    description: "Apps móviles, productos web y herramientas de escritorio creados para resolver problemas reales.",
    images: ["/projects/cozy-pomodoro.jpeg"],
  },
  alternates: { canonical: "/" },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function SpanishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
