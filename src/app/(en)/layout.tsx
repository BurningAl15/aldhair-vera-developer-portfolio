import type { Metadata } from "next";
import "../globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aldhairvera-portfolio.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aldhair Vera — Software engineer · web, mobile and desktop",
    template: "%s | Aldhair Vera",
  },
  description:
    "Aldhair Vera is a software and product engineer in Chincha, Peru, building web, mobile and desktop products.",
  applicationName: "Aldhair Vera — Portfolio",
  authors: [{ name: "Aldhair Vera", url: siteUrl }],
  creator: "Aldhair Vera",
  openGraph: {
    type: "website",
    siteName: "Aldhair Vera — Portfolio",
    locale: "en_US",
    title: "Aldhair Vera — Software engineer · web, mobile and desktop",
    description: "Digital products built from the initial idea through release.",
    images: [{ url: "/projects/cozy-pomodoro.jpeg", width: 1320, height: 2868, alt: "Cozy Pomodoro" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldhair Vera — Software engineer · web, mobile and desktop",
    description: "Mobile apps, web products and desktop tools built to solve real problems.",
    images: ["/projects/cozy-pomodoro.jpeg"],
  },
  alternates: { canonical: "/en/" },
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
