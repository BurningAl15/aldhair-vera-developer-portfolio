import type { Metadata } from "next";
import ProjectPage from "../../../../project-page";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  const title = `${project.name} — ${project.challenge ? "Case study" : "Project"}`;
  return {
    title,
    description: project.summary.en,
    alternates: { canonical: `/en/projects/${project.slug}/`, languages: { es: `/proyectos/${project.slug}/`, en: `/en/projects/${project.slug}/` } },
    openGraph: { type: "article", title: `${title} — Aldhair Vera`, description: project.summary.en, ...(project.image ? { images: [project.image] } : {}), locale: "en_US" },
    twitter: { card: "summary_large_image", title: `${title} — Aldhair Vera`, description: project.summary.en, ...(project.image ? { images: [project.image] } : {}) },
  };
}

export default async function EnglishProject({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectPage slug={slug} locale="en" />;
}
