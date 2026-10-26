import Image from "next/image";
import { notFound } from "next/navigation";
import { Footer, Header } from "./components";
import { getProject, projects, type Locale } from "@/data/projects";

const labels = {
  es: { back: "← Todos los proyectos", category: "Categoría", status: "Estado", role: "Mi contribución", languages: "Idiomas del contenido", challenge: "El reto", approach: "La solución", work: "Qué construí", stack: "Tecnologías y plataformas", website: "Landing del producto", openWebsite: "Visitar la landing", connectedProduct: "App móvil relacionada", viewProduct: "Ver ficha del producto", previous: "← Caso anterior", next: "Siguiente caso →" },
  en: { back: "← All projects", category: "Category", status: "Status", role: "My contribution", languages: "Content languages", challenge: "The challenge", approach: "The approach", work: "What I built", stack: "Technology and platforms", website: "Product website", openWebsite: "Visit product website", connectedProduct: "Related mobile app", viewProduct: "View product case study", previous: "← Previous case", next: "Next case →" },
} satisfies Record<Locale, Record<string, string>>;

export default function ProjectPage({ slug, locale }: { slug: string; locale: Locale }) {
  const project = getProject(slug);
  if (!project) notFound();
  const relatedProject = project.relatedProjectSlug ? getProject(project.relatedProjectSlug) : undefined;
  const t = labels[locale];
  const relatedCases = projects.filter((item) => item.kind === project.kind);
  const index = relatedCases.findIndex((item) => item.slug === project.slug);
  const previous = relatedCases[(index - 1 + relatedCases.length) % relatedCases.length];
  const next = relatedCases[(index + 1) % relatedCases.length];
  const href = (targetSlug: string) => locale === "es" ? `/proyectos/${targetSlug}/` : `/en/projects/${targetSlug}/`;
  const languageSummary = project.languages && (locale === "es"
    ? `${project.languages.es.length} idiomas: ${project.languages.es.slice(0, -1).join(", ")}${project.languages.es.length > 1 ? " e " : ""}${project.languages.es[project.languages.es.length - 1]}`
    : `${project.languages.en.length} languages: ${project.languages.en.slice(0, -1).join(", ")}${project.languages.en.length > 1 ? " and " : ""}${project.languages.en[project.languages.en.length - 1]}`);
  return (
    <div className="wrap">
      <Header locale={locale} alternateHref={locale === "es" ? `/en/projects/${project.slug}/` : `/proyectos/${project.slug}/`} />
      <main className="case-main" lang={locale}>
        <section className="project-hero">
          <a className="back-link" href={locale === "es" ? "/#work" : "/en/#work"}>{t.back}</a>
          <p className="eyebrow" style={{ marginTop: 34 }}>{project.category[locale]}</p>
          <h1>{project.name}</h1>
          <p className="lead">{project.summary[locale]}</p>
          {project.image ? <Image className="project-cover" src={project.image} alt={project.imageAlt[locale]} width={1200} height={760} priority unoptimized /> : <div className="project-cover-placeholder" aria-label={project.imageAlt[locale]}><span>WEB · LANDING</span><strong>{locale === "es" ? "Captura real pendiente" : "Real website screenshot pending"}</strong></div>}
          <div className="project-facts">
            <div className="project-fact"><span>{t.category}</span><strong>{project.category[locale]}</strong></div>
            <div className="project-fact"><span>{t.status}</span><strong>{project.status[locale]}</strong></div>
            {project.contribution && <div className="project-fact"><span>{t.role}</span><strong>{project.contribution[locale]}</strong></div>}
            {project.languages && <div className="project-fact"><span>{t.languages}</span><strong>{languageSummary}</strong></div>}
          </div>
        </section>
        {project.productWebsite && <section className="product-website" aria-labelledby="product-website-title">
          <Image className="website-preview-image" src={project.productWebsite.image} alt={project.productWebsite.imageAlt[locale]} width={1440} height={900} unoptimized />
          <div className="product-website-copy">
            <p className="eyebrow">{t.website}</p>
            <h2 id="product-website-title">{project.productWebsite.name}</h2>
            <p>{project.productWebsite.purpose[locale]}</p>
            <a className="button button-primary" href={project.productWebsite.href} target="_blank" rel="noreferrer">{t.openWebsite}<span aria-hidden="true">↗</span></a>
          </div>
        </section>}
        {relatedProject && <section className="related-product" aria-label={t.connectedProduct}>
          <div><p className="eyebrow">{t.connectedProduct}</p><h2>{relatedProject.name}</h2><p>{relatedProject.summary[locale]}</p></div>
          <a className="button button-primary" href={href(relatedProject.slug)}>{t.viewProduct}<span aria-hidden="true">↗</span></a>
        </section>}
        <div className="case-grid">
          <article className="case-content">
            {project.challenge && <section><h2>{t.challenge}</h2><p>{project.challenge[locale]}</p></section>}
            {project.approach && <section><h2>{t.approach}</h2><p>{project.approach[locale]}</p></section>}
            {project.highlights && <section><h2>{t.work}</h2><ul>{project.highlights[locale].map((item) => <li key={item}>{item}</li>)}</ul></section>}
            {project.legacyDescription && <section className="legacy-note"><p>{project.legacyDescription[locale]}</p></section>}
            <nav className="case-nav" aria-label={locale === "es" ? "Otros casos" : "Other case studies"}>
              <a href={href(previous.slug)}>{t.previous}: {previous.name}</a>
              <a href={href(next.slug)}>{t.next}: {next.name}</a>
            </nav>
          </article>
          <aside className="case-aside">
            <h2>{t.stack}</h2>
            <div className="tag-row">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            <div className="tag-row" style={{ marginTop: 28 }}>
              {project.links.filter((link) => link.href !== project.productWebsite?.href).map((link) => <a className="button button-quiet" href={link.href} key={link.href} target="_blank" rel="noreferrer">{link.label[locale]} ↗</a>)}
            </div>
          </aside>
        </div>
      </main>
      <Footer locale={locale} />
    </div>
  );
}
