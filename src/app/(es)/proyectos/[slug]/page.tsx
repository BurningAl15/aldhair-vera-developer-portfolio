import type { Metadata } from "next";
import ProjectPage from "../../../project-page";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Proyecto no encontrado" };
  const title = `${project.name} — ${project.challenge ? "Caso de estudio" : "Proyecto"}`;
  return {
    title,
    description: project.summary.es,
    alternates: { canonical: `/proyectos/${project.slug}/`, languages: { es: `/proyectos/${project.slug}/`, en: `/en/projects/${project.slug}/` } },
    openGraph: { type: "article", title: `${title} — Aldhair Vera`, description: project.summary.es, ...(project.image ? { images: [project.image] } : {}), locale: "es_PE" },
    twitter: { card: "summary_large_image", title: `${title} — Aldhair Vera`, description: project.summary.es, ...(project.image ? { images: [project.image] } : {}) },
  };
}

export default async function SpanishProject({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectPage slug={slug} locale="es" />;
}
