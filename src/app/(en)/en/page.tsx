import type { Metadata } from "next";
import HomePage from "../../home-page";

export const metadata: Metadata = {
  title: "Mobile apps and web products",
  description:
    "Product developer in Lima: iOS and Android apps, web apps and games. See what I build, which technologies I use, and how products reach release.",
  alternates: { canonical: "/en/", languages: { es: "/", en: "/en/" } },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aldhair Vera — Mobile apps and web products",
    description: "Apps, web apps and games built from the problem through release.",
    images: [{ url: "/projects/safebite.jpg", width: 640, height: 640, alt: "SafeBite, a mobile app developed by Aldhair Vera" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aldhair Vera — Mobile apps and web products",
    description: "Apps, web apps and games built from the problem through release.",
    images: ["/projects/safebite.jpg"],
  },
};

export default function EnglishHome() {
  return <HomePage locale="en" />;
}
