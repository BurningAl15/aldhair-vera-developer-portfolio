import type { Locale } from "@/data/projects";
import { socialProfiles } from "@/data/profile";

export function Header({ locale, alternateHref }: { locale: Locale; alternateHref?: string }) {
  const isEnglish = locale === "en";
  return (
    <header className="site-header" lang={locale}>
      <a className="brand" href={isEnglish ? "/en/" : "/"} aria-label="Aldhair Vera — inicio">
        <span className="brand-mark">AV</span>
        <span className="brand-name">Aldhair Vera<small>PRODUCT ENGINEERING</small></span>
      </a>
      <div className="header-right">
        <nav className="nav-links" aria-label={isEnglish ? "Main navigation" : "Navegación principal"}>
          <a href={isEnglish ? "/en/#work" : "/#work"}>{isEnglish ? "Work" : "Proyectos"}</a>
          <a href={isEnglish ? "/en/#experience" : "/#experience"}>{isEnglish ? "About" : "Perfil"}</a>
          <a href={isEnglish ? "/en/#contact" : "/#contact"}>{isEnglish ? "Contact" : "Contacto"}</a>
        </nav>
        <a className="language-link" href={alternateHref ?? (isEnglish ? "/" : "/en/")} lang={isEnglish ? "es" : "en"}>
          {isEnglish ? "ES" : "EN"}
        </a>
      </div>
    </header>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";
  return (
    <footer className="site-footer" lang={isEnglish ? "en" : "es"}>
      <a className="brand" href={isEnglish ? "/en/" : "/"}>
        <span className="brand-mark">AV</span>
        <span className="brand-name">Aldhair Vera<small>PRODUCT ENGINEERING</small></span>
      </a>
      <div className="footer-social-profiles" aria-label={isEnglish ? "Social profiles" : "Perfiles en redes"}>
        {socialProfiles.map((profile) => <section className="footer-social-group" key={profile.label.es}>
          <h2>{profile.label[isEnglish ? "en" : "es"]}</h2>
          <div className="footer-socials">
            {profile.links.map((link) => <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>{link.label} ↗</a>)}
          </div>
        </section>)}
        <section className="footer-social-group footer-contact-group">
          <h2>{isEnglish ? "Contact" : "Contacto"}</h2>
          <div className="footer-socials"><a href="mailto:aldhairvera15@gmail.com">Email ↗</a></div>
        </section>
      </div>
      <span className="footer-credit">© {new Date().getFullYear()} · {isEnglish ? "With love by Aldhair Vera" : "Con cariño, Aldhair Vera"}</span>
    </footer>
  );
}
