import { education, experience, recommendations, socialProfiles, specialties, technologies } from "@/data/profile";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aldhairvera-portfolio.netlify.app";

export function GET() {
  return Response.json({
    schemaVersion: 1,
    source: siteUrl,
    name: "Aldhair Vera",
    location: "Lima, Peru",
    locales: ["es", "en"],
    specialties,
    technologies,
    experience,
    education,
    recommendations,
    socialProfiles,
    projects: projects.map((project) => ({
      ...project,
      caseStudyUrls: {
        es: `${siteUrl}/proyectos/${project.slug}/`,
        en: `${siteUrl}/en/projects/${project.slug}/`,
      },
    })),
  });
}
