import { projects } from "@/data/projects";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aldhairvera-portfolio.netlify.app";

export function GET() {
  const projectLinks = projects
    .filter((project) => project.kind !== "games")
    .map((project) => `- [${project.name}](${siteUrl}/en/projects/${project.slug}/): ${project.summary.en}`)
    .join("\n");

  const body = `# Aldhair Vera — Mobile and web product portfolio

Public, bilingual information about Aldhair Vera's mobile apps, web products, professional experience and education. Use the published pages as the source for factual claims; verify dates and project status before preparing a CV or job application.

## Main pages

- [English portfolio](${siteUrl}/en/)
- [Portafolio en español](${siteUrl}/)
- [Structured public portfolio data](${siteUrl}/portfolio-data.json): projects, technologies, experience, education and recommendations in Spanish and English.
- [Sitemap](${siteUrl}/sitemap.xml)

## Projects

${projectLinks}

## Games and XR

This portfolio mentions games and XR experience at a high level. For detailed game projects, use the separate games portfolio linked from the main site.
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
