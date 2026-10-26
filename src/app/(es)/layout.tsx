import type { Metadata } from "next";
import "../globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aldhairvera-portfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aldhair Vera — Desarrollo de producto móvil y web",
    template: "%s | Aldhair Vera",
  },
  description:
    "Aldhair Vera diseña y desarrolla productos móviles y web con Flutter, React Native y Next.js.",
  applicationName: "Aldhair Vera — Portfolio",
  authors: [{ name: "Aldhair Vera", url: siteUrl }],
  creator: "Aldhair Vera",
  openGraph: {
    type: "website",
    siteName: "Aldhair Vera — Portfolio",
    locale: "es_PE",
    title: "Aldhair Vera — Desarrollo de producto móvil y web",
    description: "Productos digitales desde la idea hasta su publicación en tiendas.",
    images: [{ url: "/projects/cozy-pomodoro.jpeg", width: 1320, height: 2868, alt: "Cozy Pomodoro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldhair Vera — Desarrollo de producto móvil y web",
    description: "Apps móviles y productos web creados para resolver problemas reales.",
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
