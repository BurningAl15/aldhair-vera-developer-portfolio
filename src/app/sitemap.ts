import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aldhairvera-portfolio.netlify.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/en/`, changeFrequency: "monthly", priority: 0.9 },
  ];
  for (const project of projects) {
    routes.push(
      { url: `${base}/proyectos/${project.slug}/`, changeFrequency: "monthly", priority: project.featured ? 0.8 : 0.6 },
      { url: `${base}/en/projects/${project.slug}/`, changeFrequency: "monthly", priority: project.featured ? 0.7 : 0.5 },
    );
  }
  return routes;
}
