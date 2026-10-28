import Image from "next/image";
import { Footer, Header } from "./components";
import { ContactForm } from "./contact-form";
import { TechBadgeIcon } from "./tech-badge-icon";
import { projects, type Locale } from "@/data/projects";
import { education, experience, recommendations } from "@/data/profile";

const techIcons: Record<string, string> = {
  "react": "/tech-icons/react.webp", "react native": "/tech-icons/react.webp",
  "typescript": "/tech-icons/typescript.webp", "javascript": "/tech-icons/javascript.webp",
  "unity": "/tech-icons/unity.webp",
  "node.js": "/tech-icons/nodejs.webp", "nodejs": "/tech-icons/nodejs.webp",
  "redux": "/tech-icons/redux.webp", "redux toolkit": "/tech-icons/redux.webp",
  "postgresql": "/tech-icons/postgresql.webp", "mongodb": "/tech-icons/mongodb.webp",
  "tailwind css": "/tech-icons/tailwind.webp", "html": "/tech-icons/html.webp",
  "css": "/tech-icons/css.webp", "three.js": "/tech-icons/threejs.svg", "git": "/tech-icons/git.webp",
};

// Local assets take priority. For the remaining branded technologies, use
// Simple Icons' SVG endpoint so badges show the actual logo instead of a
// misleading initial. Keep generic concepts on the text fallback below.
const brandIconSlugs: Record<string, string> = {
  "next.js": "nextdotjs", nextjs: "nextdotjs",
  flutter: "flutter", dart: "dart", firebase: "firebase", supabase: "supabase",
  aws: "amazonaws", java: "openjdk", spring: "spring", "spring boot": "spring",
  revenuecat: "revenuecat", ios: "apple", android: "android", expo: "expo",
  sqlite: "sqlite", zustand: "zustand", "google ml kit": "google", opencv: "opencv",
  bootstrap: "bootstrap", sass: "sass", jquery: "jquery", "framer motion": "framer",
  express: "express", graphql: "graphql", csharp: "csharp", "c#": "csharp",
  "meta xr sdk": "meta", arfoundation: "unity", visionlib: "opencv", godot: "godot",
  vite: "vite", pwa: "pwa", "unity webgl": "unity", electron: "electron", sharp: "sharp", ffmpeg: "ffmpeg",
  "tailwind css": "tailwindcss", mongodb: "mongodb", postgresql: "postgresql",
  javascript: "javascript", typescript: "typescript", react: "react", "react native": "react",
  unity: "unity", "node.js": "nodedotjs", nodejs: "nodedotjs", redux: "redux",
  "redux toolkit": "redux", html: "html5", css: "css3", git: "git",
  jest: "jest", "material ui": "mui", netlify: "netlify", keystatic: "keystatic",
};

const techGlyphs: Record<string, string> = { "next.js": "N", nextjs: "N", flutter: "F", dart: "D", firebase: "F", supabase: "S", aws: "aws", java: "J", "spring boot": "S", spring: "S", graphql: "GQL", express: "Ex", revenuecat: "RC", "material ui": "MUI", "seo técnico": "SEO" };
const brandIconColors: Record<string, string> = { arfoundation: "2F5D9F" };

function technologyDescription(item: string, locale: Locale) {
  const key = item.toLowerCase().replace(/\s+\d+(\.\d+)*$/, "");
  const descriptions: Record<string, { es: string; en: string }> = {
    "next.js": { es: "Framework React para sitios y aplicaciones web", en: "React framework for websites and web apps" },
    "seo técnico": { es: "SEO (optimización para buscadores): ajustes para que Google encuentre, indexe y entienda las páginas", en: "Search engine optimization (SEO): improvements that help Google find, index and understand pages" },
    flutter: { es: "Framework para aplicaciones multiplataforma", en: "Framework for cross-platform applications" },
    dart: { es: "Lenguaje utilizado para crear apps con Flutter", en: "Language used to build Flutter apps" },
    react: { es: "Biblioteca para construir interfaces", en: "Library for building user interfaces" },
    "react native": { es: "Framework React para aplicaciones móviles", en: "React framework for mobile applications" },
    typescript: { es: "JavaScript con tipos estáticos", en: "JavaScript with static types" },
    javascript: { es: "Lenguaje para interfaces y aplicaciones web", en: "Language for web interfaces and applications" },
    unity: { es: "Motor para crear videojuegos y experiencias interactivas 2D, 3D y XR", en: "Engine for building 2D, 3D and XR games and interactive experiences" },
    godot: { es: "Motor de videojuegos de código abierto para crear juegos 2D y 3D", en: "Open-source game engine for building 2D and 3D games" },
    vite: { es: "Herramienta de desarrollo y compilación para aplicaciones web", en: "Development and build tool for web applications" },
    electron: { es: "Framework para crear aplicaciones de escritorio con tecnologías web", en: "Framework for building desktop apps with web technologies" },
    sharp: { es: "Procesamiento rápido de imágenes en Node.js", en: "High-performance image processing for Node.js" },
    ffmpeg: { es: "Herramienta para convertir y procesar audio y video", en: "Tool for converting and processing audio and video" },
    "c#": { es: "Lenguaje usado para programar en Unity", en: "Programming language commonly used with Unity" },
    "node.js": { es: "Entorno JavaScript para servicios backend", en: "JavaScript runtime for backend services" },
    "three.js": { es: "Biblioteca 3D para gráficos en navegador", en: "3D library for browser graphics" },
    "redux toolkit": { es: "Gestión predecible del estado de interfaces React", en: "Predictable state management for React interfaces" },
    redux: { es: "Gestión del estado de aplicaciones", en: "Application state management" },
    "tailwind css": { es: "Framework de utilidades CSS para interfaces", en: "Utility-first CSS framework for interfaces" },
    "material ui": { es: "Componentes de interfaz para React", en: "React interface component library" },
    graphql: { es: "Consulta tipada de datos desde APIs", en: "Typed data queries for APIs" },
    express: { es: "Framework Node.js para APIs y servicios web", en: "Node.js framework for APIs and web services" },
    mongodb: { es: "Base de datos documental", en: "Document database" },
    postgresql: { es: "Base de datos relacional", en: "Relational database" },
    firebase: { es: "Backend gestionado: autenticación, datos y servicios", en: "Managed backend: authentication, data and services" },
    supabase: { es: "Backend PostgreSQL con autenticación y APIs", en: "PostgreSQL backend with authentication and APIs" },
    revenuecat: { es: "Gestión de compras y suscripciones dentro de la app", en: "In-app purchase and subscription management" },
    "spring boot": { es: "Framework Java para servicios backend", en: "Java framework for backend services" },
    java: { es: "Lenguaje de programación usado en backend", en: "Programming language used for backend development" },
    aws: { es: "Servicios cloud; fundamentos de DevOps y despliegue", en: "Cloud services; introductory DevOps and deployment" },
    html: { es: "Estructura semántica de páginas web", en: "Semantic structure for web pages" },
    css: { es: "Presentación y diseño responsivo de interfaces web", en: "Styling and responsive web interface design" },
    jest: { es: "Pruebas automatizadas de JavaScript", en: "Automated JavaScript testing" },
    git: { es: "Control de versiones y colaboración en código", en: "Version control and code collaboration" },
    webgl: { es: "Ejecución de gráficos y experiencias 3D en navegador", en: "3D graphics and experiences in the browser" },
    "unity webgl": { es: "Exportación de experiencias Unity para navegador", en: "Unity experiences exported for browsers" },
    "2d physics": { es: "Simulación e interacción física en juegos 2D", en: "Physics simulation and interaction in 2D games" },
    "procedural generation": { es: "Creación algorítmica de contenido de juego", en: "Algorithmic generation of game content" },
    "devops (intro)": { es: "Fundamentos introductorios de DevOps y despliegue", en: "Introductory DevOps and deployment fundamentals" },
    "meta xr sdk": { es: "SDK para funciones XR en dispositivos Meta Quest", en: "SDK for XR features on Meta Quest devices" },
    "xr interaction toolkit": { es: "Herramientas de interacción XR para Unity", en: "XR interaction tools for Unity" },
    arfoundation: { es: "Framework de Unity para crear funciones de realidad aumentada en iOS y Android", en: "Unity framework for building augmented reality features on iOS and Android" },
    visionlib: { es: "SDK de visión por computadora y seguimiento", en: "Computer vision and tracking SDK" },
    opencv: { es: "Biblioteca de visión por computadora", en: "Computer vision library" },
    "gemini stt/tts": { es: "Reconocimiento y síntesis de voz con Gemini", en: "Speech recognition and synthesis with Gemini" },
    addressables: { es: "Carga y gestión de contenido bajo demanda en Unity", en: "On-demand content loading and management in Unity" },
    android: { es: "Plataforma móvil Android", en: "Android mobile platform" },
    ios: { es: "Plataforma móvil de Apple", en: "Apple mobile platform" },
    expo: { es: "Herramientas y servicios para desarrollar apps React Native", en: "Tools and services for React Native development" },
    sqlite: { es: "Base de datos relacional integrada en el dispositivo", en: "Relational database embedded on the device" },
    zustand: { es: "Gestión ligera del estado en React", en: "Lightweight state management for React" },
    "google ml kit": { es: "APIs de aprendizaje automático para apps móviles", en: "Machine learning APIs for mobile apps" },
    "rest api": { es: "Integración con servicios mediante APIs HTTP", en: "Integration with services through HTTP APIs" },
    bootstrap: { es: "Sistema de diseño y componentes web responsivos", en: "Responsive web design system and components" },
    "laravel blade": { es: "Plantillas del lado del servidor para Laravel", en: "Server-side templates for Laravel" },
    sass: { es: "Preprocesador para organizar estilos CSS", en: "CSS preprocessor for organizing stylesheets" },
    jquery: { es: "Biblioteca JavaScript para interacciones web", en: "JavaScript library for web interactions" },
    "framer motion": { es: "Animaciones para interfaces React", en: "Animation library for React interfaces" },
    jspdf: { es: "Generación de archivos PDF desde JavaScript", en: "PDF generation from JavaScript" },
    keystatic: { es: "CMS conectado al repositorio para editar páginas y artículos del sitio", en: "Repository-based CMS for editing website pages and articles" },
    netlify: { es: "Hosting, despliegue y funciones para sitios web", en: "Hosting, deployment and functions for websites" },
    pwa: { es: "Aplicación web instalable con funciones offline", en: "Installable web app with offline capabilities" },
    json: { es: "Formato estructurado para intercambio de datos", en: "Structured format for data exchange" },
    "game design": { es: "Diseño de sistemas, reglas y experiencia de juego", en: "Design of game systems, rules and player experience" },
    teaching: { es: "Enseñanza y acompañamiento técnico", en: "Teaching and technical mentorship" },
    "game development": { es: "Programación e implementación de videojuegos", en: "Programming and implementation of games" },
    xr: { es: "Realidad extendida: experiencias VR, AR y MR", en: "Extended reality: VR, AR and MR experiences" },
    vr: { es: "Experiencias de realidad virtual", en: "Virtual reality experiences" },
    "htc vive pro": { es: "Hardware de realidad virtual para PC", en: "PC-based virtual reality hardware" },
    "mobile games": { es: "Desarrollo de juegos para dispositivos móviles", en: "Game development for mobile devices" },
    "software engineering": { es: "Principios de diseño y construcción de software", en: "Principles of software design and construction" },
    "ingeniería de software": { es: "Principios de diseño y construcción de software", en: "Principles of software design and construction" },
    "desarrollo de juegos": { es: "Diseño e implementación de videojuegos", en: "Game design and implementation" },
  };
  const description = descriptions[key] ?? { es: `Tecnología utilizada: ${item}`, en: `Technology used: ${item}` };
  return description[locale];
}

function TechBadges({ items, locale, keyboardDetails = false }: { items: string[]; locale: Locale; keyboardDetails?: boolean }) {
  return <div className="tech-badges" aria-label={locale === "es" ? "Tecnologías utilizadas" : "Technologies used"}>
    {items.map((item) => {
      const normalized = item.toLowerCase().replace(/\s+\d+(\.\d+)*$/, "");
      const icon = techIcons[normalized] ?? (brandIconSlugs[normalized]
        ? `https://cdn.simpleicons.org/${brandIconSlugs[normalized]}${brandIconColors[normalized] ? `/${brandIconColors[normalized]}` : ""}`
        : undefined);
      const tooltip = technologyDescription(item, locale);
      const glyph = techGlyphs[normalized] ?? (item.length > 3 ? item.slice(0, 2).toUpperCase() : item);
      return <span className="tech-badge" key={item} title={`${item} — ${tooltip}`} role="img" aria-label={`${item}. ${tooltip}`} data-tooltip={`${item} — ${tooltip}`} tabIndex={keyboardDetails ? 0 : undefined}>
        <TechBadgeIcon src={icon} fallback={glyph} />
        <span className="tech-name">{item}</span>
      </span>;
    })}
  </div>;
}

const copy = {
  es: {
    eyebrow: "SOFTWARE · PRODUCT ENGINEER · CHINCHA, PERÚ",
    headline: <>Hago que las ideas<br />se conviertan en <em>productos.</em></>,
    intro: "Soy Aldhair Vera, software engineer y product engineer. Diseño y desarrollo productos web, móviles y de escritorio, desde la definición inicial hasta su publicación.",
    work: "Ver proyectos", contact: "Hablemos", availability: "Disponible para oportunidades y proyectos seleccionados",
    showreel: "PRODUCTOS Y PROYECTOS", art: "IDEA → PRODUCTO → PRODUCCIÓN",
    workEyebrow: "TRABAJO SELECCIONADO", workTitle: "Apps, productos web y herramientas de escritorio.", workIntro: "Cada caso cuenta qué resuelve, por qué tomé ciertas decisiones y cómo se conecta con las personas que lo usan.",
    mobileTitle: "Apps móviles", mobileIntro: "Productos para iOS y Android: qué necesidad atienden y cómo funcionan por dentro.",
    webTitle: "Webs y webapps", webIntro: "Sitios y herramientas web, desde páginas de producto hasta aplicaciones interactivas.",
    gamesTitle: "Juegos, VR y XR", gamesIntro: "Los casos completos están en mi portfolio especializado. Aquí muestro cómo encaja ese perfil con mi experiencia profesional.",
    pathWebMobile: "WEB + MOBILE", pathGamesXR: "GAMES + VR / XR",
    webMobilePathTitle: "Web y mobile", gamesXRPathTitle: "Juegos, VR y XR",
    webMobilePathIntro: "Sitios y aplicaciones web, productos para iOS y Android, y herramientas de escritorio.", gamesXRPathIntro: "Los proyectos se mantienen en su sitio propio. Aquí quedan la experiencia, formación y recomendaciones de esta trayectoria.",
    mobileProjectsTitle: "Aplicaciones móviles", webProjectsTitle: "Web y webapps", desktopProjectsTitle: "Apps de escritorio", gamesPortfolioLabel: "Mi portfolio de videojuegos y XR", visitGamesPortfolio: "Visitar portfolio de videojuegos y XR",
    landingProjectsTitle: "Landings", webAppsTitle: "Web apps y herramientas", miniAppsTitle: "Mini apps", browserGamesTitle: "Juegos web",
    gamesPortfolioTech: "Unity · C# · Godot · WebGL · VR / XR",
    experienceLabel: "Experiencia", educationLabel: "Formación", recommendationsLabel: "Recomendaciones",
    contactTitle: "¿Tienes un producto que necesita construirse o mejorar?", contactButton: "Cuéntame tu idea", more: "Conocer el caso", category: "CASO DE ESTUDIO", status: "ESTADO",
    archiveTitle: "Proyectos anteriores", archiveIntro: "Otros sitios, herramientas y prototipos de mi recorrido.", archiveEyebrow: "ARCHIVO",
    experienceEyebrow: "CÓMO CONSTRUYO", experienceTitle: "De una necesidad a un producto que funciona.",
    workflowIntro: "Un recorrido concreto: entender el problema, elegir la plataforma, conectar las piezas y comprobar el resultado.",
    workflowSteps: [
      { title: "Entender el problema", detail: "Aterrizo quién lo usará, qué necesita hacer y cómo sabremos si la solución funciona.", marker: "PROBLEMA → FLUJO" },
      { title: "Elegir y construir", detail: "La tecnología depende del producto. Cada stack resuelve una parte distinta.", marker: "PLATAFORMA → EXPERIENCIA" },
      { title: "Conectar datos y lógica", detail: "Integro estado, servicios y backend para que la interfaz haga trabajo real.", marker: "INTERFAZ → SISTEMA" },
      { title: "Validar y entregar", detail: "Reviso los flujos y preparo el producto para web o para las tiendas.", marker: "PRUEBA → PUBLICACIÓN" },
    ],
    userFlow: ["Persona", "Tarea clave", "Señal de éxito"], releaseFlow: ["Revisar", "Construir", "Publicar"],
    platformTitle: "La tecnología tiene un trabajo concreto",
    webTechTitle: "Tecnologías web por responsabilidad",
    webTechGroups: [
      { label: "Interfaz", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
      { label: "UI y estado", items: ["Redux Toolkit", "Tailwind CSS", "Material UI"] },
      { label: "Backend y datos", items: ["Node.js", "Express", "Java", "Spring Boot", "GraphQL", "AWS", "MongoDB", "PostgreSQL"] },
      { label: "3D en navegador", items: ["Three.js"] },
    ],
    platforms: [
      { title: "Web y webapps", stack: ["Next.js", "React", "TypeScript"], outcome: "Este portfolio: páginas renderizadas en servidor y rutas preparadas para buscadores." },
      { title: "Apps móviles", stack: ["Flutter", "Dart", "React Native"], outcome: "Productos para iOS y Android con lógica compartida." },
      { title: "Juegos y XR", stack: ["Unity", "C#", "WebGL"], outcome: "Experiencias interactivas para móvil y navegador." },
    ],
    integrations: [
      { label: "Subterra AI", flow: "React + GraphQL → AWS", outcome: "Dashboards conectados a servicios y datos." },
      { label: "Apps de producto", flow: "Flutter / React Native → Firebase / Supabase", outcome: "Aplicaciones conectadas a servicios de backend." },
    ],
    deliveryLabel: "CALIDAD Y ENTREGA", deliveryTitle: "Comprobar antes de publicar", deliveryStack: "Jest en Subterra · App Store · Google Play · WebGL",
    historyTitle: "Experiencia profesional", historyMore: "Más información",
  },
  en: {
    eyebrow: "SOFTWARE · PRODUCT ENGINEER · CHINCHA, PERU",
    headline: <>I turn ideas<br />into <em>real products.</em></>,
    intro: "I’m Aldhair Vera, a software engineer and product engineer. I design and build web, mobile and desktop products, from early product decisions through release.",
    work: "Explore my work", contact: "Let’s talk", availability: "Open to opportunities and selected projects",
    showreel: "PRODUCTS IN THE WILD", art: "IDEA → PRODUCT → RELEASE",
    workEyebrow: "SELECTED WORK", workTitle: "Mobile apps, web products and desktop tools.", workIntro: "Each case explains what it solves, why I made key product decisions, and how it reaches people.",
    mobileTitle: "Mobile apps", mobileIntro: "Products for iOS and Android: the needs they address and how they work under the hood.",
    webTitle: "Websites and web apps", webIntro: "Sites and web tools, from product pages to interactive applications.",
    gamesTitle: "Games, VR and XR", gamesIntro: "Full case studies live in my specialist portfolio. Here I show how that profile fits my professional experience.",
    pathWebMobile: "WEB + MOBILE", pathGamesXR: "GAMES + VR / XR",
    webMobilePathTitle: "Web and mobile", gamesXRPathTitle: "Games, VR and XR",
    webMobilePathIntro: "Websites and web apps, products for iOS and Android, and desktop tools.", gamesXRPathIntro: "Game projects stay on their dedicated site. This profile brings together the related experience, education and recommendations.",
    mobileProjectsTitle: "Mobile apps", webProjectsTitle: "Websites and web apps", desktopProjectsTitle: "Desktop apps", gamesPortfolioLabel: "My games and XR portfolio", visitGamesPortfolio: "Visit games and XR portfolio",
    landingProjectsTitle: "Landing pages", webAppsTitle: "Web apps and tools", miniAppsTitle: "Mini apps", browserGamesTitle: "Browser games",
    gamesPortfolioTech: "Unity · C# · Godot · WebGL · VR / XR",
    experienceLabel: "Experience", educationLabel: "Education", recommendationsLabel: "Recommendations",
    contactTitle: "Have a product that needs to be built or improved?", contactButton: "Tell me about it", more: "Read the case study", category: "CASE STUDY", status: "STATUS",
    archiveTitle: "Earlier projects", archiveIntro: "Other websites, tools and prototypes from my journey.", archiveEyebrow: "ARCHIVE",
    experienceEyebrow: "HOW I BUILD", experienceTitle: "From a need to a product that works.",
    workflowIntro: "A practical sequence: understand the problem, choose a platform, connect the pieces, and verify the result.",
    workflowSteps: [
      { title: "Understand the problem", detail: "I clarify who will use it, what they need to do, and how we will know the solution works.", marker: "PROBLEM → FLOW" },
      { title: "Choose and build", detail: "The technology follows the product. Each stack handles a different part.", marker: "PLATFORM → EXPERIENCE" },
      { title: "Connect data and logic", detail: "I connect state, services and backend so the interface can do real work.", marker: "INTERFACE → SYSTEM" },
      { title: "Verify and ship", detail: "I check the core flows and prepare the product for the web or app stores.", marker: "TEST → RELEASE" },
    ],
    userFlow: ["Person", "Key task", "Success signal"], releaseFlow: ["Review", "Build", "Release"],
    platformTitle: "Every technology has a specific job",
    webTechTitle: "Web technologies by responsibility",
    webTechGroups: [
      { label: "Interface", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
      { label: "UI and state", items: ["Redux Toolkit", "Tailwind CSS", "Material UI"] },
      { label: "Backend and data", items: ["Node.js", "Express", "Java", "Spring Boot", "GraphQL", "AWS", "MongoDB", "PostgreSQL"] },
      { label: "3D in the browser", items: ["Three.js"] },
    ],
    platforms: [
      { title: "Web and web apps", stack: ["Next.js", "React", "TypeScript"], outcome: "This portfolio: server-rendered pages and search-ready routes." },
      { title: "Mobile apps", stack: ["Flutter", "Dart", "React Native"], outcome: "iOS and Android products with shared application logic." },
      { title: "Games and XR", stack: ["Unity", "C#", "WebGL"], outcome: "Interactive experiences for mobile and browser." },
    ],
    integrations: [
      { label: "Subterra AI", flow: "React + GraphQL → AWS", outcome: "Dashboards connected to services and data." },
      { label: "Product apps", flow: "Flutter / React Native → Firebase / Supabase", outcome: "Applications connected to backend services." },
    ],
    deliveryLabel: "QUALITY AND DELIVERY", deliveryTitle: "Verify before release", deliveryStack: "Jest at Subterra · App Store · Google Play · WebGL",
    historyTitle: "Professional experience", historyMore: "More information",
  }
} satisfies Record<Locale, Record<string, unknown>>;

export default function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale] as typeof copy.es;
  const mobileProjects = projects.filter((project) => project.kind === "mobile");
  const webProjects = projects.filter((project) => project.kind === "web");
  const desktopProjects = projects.filter((project) => project.kind === "desktop");
  const landingProjects = webProjects.filter((project) => project.webType === "landing");
  const webAppProjects = webProjects.filter((project) => !project.webType || project.webType === "web-app");
  const miniAppProjects = webProjects.filter((project) => project.webType === "mini-app");
  const browserGameProjects = webProjects.filter((project) => project.webType === "game");
  const gamesProjects = projects.filter((project) => project.kind === "games");
  const mobileFeatured = mobileProjects.filter((project) => project.featured);
  const mobileArchive = mobileProjects.filter((project) => !project.featured);
  const featuredLandingProjects = landingProjects.filter((project) => project.featured);
  const landingArchive = landingProjects.filter((project) => !project.featured);
  const featuredWebApps = webAppProjects.filter((project) => project.featured);
  const webAppArchive = webAppProjects.filter((project) => !project.featured);
  const heroImage = locale === "es" ? "/projects/cozy-pomodoro.jpeg" : "/projects/safebite.jpg";
  const renderCards = (items: typeof projects) => <div className="project-grid">
    {items.map((project, index) => {
      const href = locale === "es" ? `/proyectos/${project.slug}/` : `/en/projects/${project.slug}/`;
      return <a className="project-card" href={href} key={project.slug}>
        <div className={`project-card-image${project.kind === "mobile" ? " project-card-image-mobile" : ""}`}>
          {project.image ? <Image src={project.image} alt={project.imageAlt[locale]} width={960} height={620} unoptimized /> : <div className="media-placeholder" aria-label={project.imageAlt[locale]}><span>{project.kind === "games" ? "GAMES · XR" : project.kind === "desktop" ? "DESKTOP APP" : "WEB · LANDING"}</span><strong>{locale === "es" ? "Captura del proyecto pendiente" : "Project screenshot pending"}</strong></div>}
          <span className="project-number">0{index + 1} / 0{items.length}</span>
        </div>
        <div className="project-card-body">
          <div className="project-card-meta"><span>{project.category[locale]}</span><span>{project.status[locale]}</span></div>
          <h3>{project.name}<span className="project-arrow" aria-hidden="true">↗</span></h3>
          <p>{project.summary[locale]}</p>
          {project.languages && <p className="project-languages"><span aria-hidden="true">◎</span>{locale === "es"
            ? `${project.languages.es.length} idiomas · ${project.languages.es.slice(0, -1).join(", ")}${project.languages.es.length > 1 ? " e " : ""}${project.languages.es.at(-1)}`
            : `${project.languages.en.length} languages · ${project.languages.en.slice(0, -1).join(", ")}${project.languages.en.length > 1 ? " and " : ""}${project.languages.en.at(-1)}`}</p>}
          <TechBadges items={project.stack} locale={locale} />
        </div>
      </a>;
    })}
  </div>;
  const renderArchive = (items: typeof projects) => items.length > 0 && <div className="archive-grid">
    {items.map((project) => {
      const href = locale === "es" ? `/proyectos/${project.slug}/` : `/en/projects/${project.slug}/`;
      return <a className="archive-card" href={href} key={project.slug}>
        {project.image ? <Image src={project.image} alt={project.imageAlt[locale]} width={180} height={140} unoptimized /> : <div className="archive-image-placeholder" aria-label={project.imageAlt[locale]}><span>{project.kind === "desktop" ? "DESKTOP" : "WEB"}</span><small>{locale === "es" ? "Captura pendiente" : "Screenshot pending"}</small></div>}
        <div><span className="archive-meta">{project.category[locale]}</span><h3>{project.name}</h3><p>{project.summary[locale]}</p><TechBadges items={project.stack} locale={locale} /><span className="archive-link">{t.more} ↗</span></div>
      </a>;
    })}
  </div>;
  return (
    <div className="wrap">
      <Header locale={locale} alternateHref={locale === "es" ? "/en/" : "/"} />
      <main lang={locale}>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" />{t.eyebrow}</p>
            <h1>{t.headline}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">{t.work}<span aria-hidden="true">↓</span></a>
              <a className="button button-quiet" href="mailto:aldhairvera15@gmail.com">{t.contact}<span aria-hidden="true">↗</span></a>
            </div>
            <p className="hero-note">● {t.availability}</p>
          </div>
          <div className="hero-art" aria-label={t.showreel as string}>
            <div className="hero-art-top"><span>{t.showreel}</span><span>01 / 04</span></div>
            <Image className="hero-image" src={heroImage} alt={locale === "es" ? "Vista de uno de los productos móviles desarrollados por Aldhair" : "A glimpse of a mobile product built by Aldhair"} width={640} height={900} priority unoptimized />
            <span className="hero-sticker">{locale === "es" ? <>DE LA IDEA<br />A LA TIENDA</> : <>FROM IDEA<br />TO STORE</>}</span>
            <div className="hero-art-bottom"><span>DESIGN</span><b>×</b><span>ENGINEERING</span><b>×</b><span>DELIVERY</span></div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">{t.workEyebrow}</p><h2>{t.workTitle}</h2></div>
            <p>{t.workIntro}</p>
          </div>
          <nav className="pathway-nav" aria-label={locale === "es" ? "Áreas de trabajo" : "Professional tracks"}>
            <a href="#web-mobile-path"><span>01</span>{t.pathWebMobile}<b aria-hidden="true">↓</b></a>
            <a href="#games-xr-path"><span>02</span>{t.pathGamesXR}<b aria-hidden="true">↓</b></a>
          </nav>
          <section className="work-category pathway-section" id="web-mobile-path" aria-labelledby="web-mobile-title">
            <div className="category-heading"><span className="pathway-kicker">01 / {t.pathWebMobile}</span><h3 id="web-mobile-title">{t.webMobilePathTitle}</h3><p>{t.webMobilePathIntro}</p></div>
            <div className="pathway-subcategory"><div className="category-heading"><h4>{t.mobileProjectsTitle}</h4></div>{renderCards(mobileFeatured)}{renderArchive(mobileArchive)}</div>
            <div className="pathway-subcategory"><div className="category-heading"><h4>{t.landingProjectsTitle}</h4></div>{renderCards(featuredLandingProjects)}{renderArchive(landingArchive)}</div>
            <div className="pathway-subcategory"><div className="category-heading"><h4>{t.webAppsTitle}</h4></div>{renderCards(featuredWebApps)}{renderArchive(webAppArchive)}</div>
            <div className="pathway-subcategory"><div className="category-heading"><h4>{t.miniAppsTitle}</h4></div>{renderArchive(miniAppProjects)}</div>
            <div className="pathway-subcategory"><div className="category-heading"><h4>{t.browserGamesTitle}</h4></div>{renderArchive(browserGameProjects)}</div>
            <div className="pathway-subcategory"><div className="category-heading"><h4>{t.desktopProjectsTitle}</h4></div>{renderCards(desktopProjects.filter((project) => project.featured))}{renderArchive(desktopProjects.filter((project) => !project.featured))}</div>
          </section>
          <section className="work-category pathway-section" id="games-xr-path" aria-labelledby="games-xr-title">
            <div className="category-heading"><span className="pathway-kicker">02 / {t.pathGamesXR}</span><h3 id="games-xr-title">{t.gamesXRPathTitle}</h3><p>{t.gamesXRPathIntro}</p></div>
            <div className="games-profile-tech"><span>{t.gamesPortfolioLabel}</span><strong>{t.gamesPortfolioTech}</strong></div>
            {renderCards(gamesProjects)}
            <a className="button button-primary games-profile-link" href="https://aldhairvera.netlify.app/" target="_blank" rel="noreferrer">{t.visitGamesPortfolio}<span aria-hidden="true">↗</span></a>
          </section>
        </section>

        <section className="section background-section" id="about">
          <div className="section-heading">
            <div><p className="eyebrow">{t.experienceEyebrow}</p><h2>{t.experienceTitle}</h2></div>
            <p>{t.workflowIntro}</p>
          </div>
          <ol className="workflow-list" aria-label={locale === "es" ? "Etapas de trabajo" : "Work stages"}>
            {t.workflowSteps.map((step, index) => <li className="workflow-step" key={step.title}>
              <div className="workflow-step-top"><span className="workflow-number">0{index + 1}</span><span className="workflow-marker">{step.marker}</span></div>
              <h3>{step.title}</h3><p>{step.detail}</p>
              {index === 0 && <div className="workflow-flow" aria-label={locale === "es" ? "Persona, tarea y criterio de éxito" : "Person, task and success measure"}>{t.userFlow.map((label, nodeIndex) => <span className="workflow-node" key={label}><b>0{nodeIndex + 1}</b>{label}</span>)}</div>}
              {index === 1 && <div className="platform-map" aria-label={t.platformTitle as string}>
                <h4>{t.platformTitle}</h4>
                <div className="platform-grid">{t.platforms.map((platform) => <div className="platform-card" key={platform.title}>
                  <span className="platform-title">{platform.title}</span><TechBadges items={platform.stack} locale={locale} keyboardDetails /><span className="platform-arrow" aria-hidden="true">↓</span><span>{platform.outcome}</span>
                </div>)}</div>
                <div className="web-tech-map">
                  <h4>{t.webTechTitle}</h4>
                  <div className="web-tech-groups">{t.webTechGroups.map((group) => <div className="web-tech-group" key={group.label}>
                    <strong>{group.label}</strong><TechBadges items={group.items} locale={locale} keyboardDetails />
                  </div>)}</div>
                </div>
              </div>}
              {index === 2 && <div className="integration-map">{t.integrations.map((integration) => <div className="integration-row" key={integration.label}>
                <span>{integration.label}</span><code>{integration.flow}</code><strong>{integration.outcome}</strong>
              </div>)}</div>}
              {index === 3 && <div className="delivery-map"><span>{t.deliveryLabel}</span><strong>{t.deliveryTitle}</strong><div className="workflow-flow">{t.releaseFlow.map((label, nodeIndex) => <span className="workflow-node" key={label}><b>0{nodeIndex + 1}</b>{label}</span>)}</div><code>{t.deliveryStack}</code></div>}
            </li>)}
          </ol>
        </section>

        <section className="section profile-records" id="experience">
          <div className="section-heading"><div><p className="eyebrow">{locale === "es" ? "TRAYECTORIA" : "CAREER"}</p><h2>{t.historyTitle}</h2></div><p>{locale === "es" ? "Mi recorrido profesional en producto web y móvil, y en videojuegos y XR." : "My professional path across web and mobile products, and games and XR."}</p></div>
          <nav className="profile-section-nav" aria-label={locale === "es" ? "Secciones del perfil" : "Profile sections"}>
            <a href="#experience">{t.experienceLabel}</a><a href="#education">{t.educationLabel}</a><a href="#recommendations">{t.recommendationsLabel}</a>
          </nav>
          <div className="experience-tracks">
            {(["web-mobile", "games-xr"] as const).map((track) => <section className="experience-track" key={track} aria-labelledby={`experience-${track}`}>
              <h3 id={`experience-${track}`}>{track === "web-mobile" ? t.webMobilePathTitle : t.gamesXRPathTitle}</h3>
              {(() => {
                const jobs = experience.filter((item) => item.track === track);
                const visibleJobs = track === "games-xr" ? jobs.slice(0, 4) : jobs;
                const hiddenJobs = track === "games-xr" ? jobs.slice(4) : [];
                const renderJob = (item: typeof jobs[number]) => <article className="experience-item" key={`${item.company}-${item.period.en}`}>
                  <div className="experience-heading"><div><h4>{item.role[locale]}</h4><p className="experience-company">{item.company}</p></div><span>{item.period[locale]}</span></div>
                  <p className="experience-focus">{item.focus[locale]}</p>
                  <TechBadges items={item.stack} locale={locale} keyboardDetails />
                  <details className="job-details"><summary>{t.historyMore}</summary><ul>{item.points[locale].map((point) => <li key={point}>{point}</li>)}</ul></details>
                </article>;
                return <>{visibleJobs.map(renderJob)}{hiddenJobs.length > 0 && <details className="more-jobs"><summary>{locale === "es" ? `Mostrar ${hiddenJobs.length} puestos anteriores` : `Show ${hiddenJobs.length} earlier roles`}</summary>{hiddenJobs.map(renderJob)}</details>}</>;
              })()}
            </section>)}
          </div>
        </section>

        <section className="section profile-records background-section" id="education">
          <div className="section-heading"><div><p className="eyebrow">{t.educationLabel}</p><h2>{t.educationLabel}</h2></div><p>{locale === "es" ? "Estudios y formación técnica, asociados al perfil profesional donde aportan contexto." : "Academic and technical training, grouped under the professional track it supports."}</p></div>
          {education.filter((item) => item.track === "both").map((item) => <article className="education-common" key={`${item.institution}-${item.name.en}`}>
            <div className="experience-heading"><div><h3>{item.name[locale]}</h3><p className="experience-company">{item.institution}</p></div><span>{item.period[locale]}</span></div>
            <TechBadges items={item.stack} locale={locale} keyboardDetails />
          </article>)}
          <div className="experience-tracks">
            {(["web-mobile", "games-xr"] as const).map((track) => <section className="experience-track" key={track} aria-labelledby={`education-${track}`}>
              <h3 id={`education-${track}`}>{track === "web-mobile" ? t.webMobilePathTitle : t.gamesXRPathTitle}</h3>
              {education.filter((item) => item.track === track).map((item) => <article className="credential-item" key={`${item.institution}-${item.name.en}`}>
                <div className="experience-heading"><div><h4>{item.name[locale]}</h4><p className="experience-company">{item.institution}</p></div><span>{item.period[locale]}</span></div>
                <p className="experience-focus">{item.focus[locale]}</p>
                <TechBadges items={item.stack} locale={locale} keyboardDetails />
              </article>)}
            </section>)}
          </div>
        </section>

        <section className="section profile-records" id="recommendations">
          <div className="section-heading"><div><p className="eyebrow">{t.recommendationsLabel}</p><h2>{t.recommendationsLabel}</h2></div><p>{locale === "es" ? "Comentarios de personas con quienes he trabajado." : "Feedback from people I have worked with."}</p></div>
          <div className="recommendations-grid">
            {recommendations.map((item) => <details className="recommendation-card" key={item.author}>
              <summary><span className="recommendation-mark" aria-hidden="true">“</span><span><strong>{item.author}</strong><small>{item.role} · {item.date[locale]}</small></span></summary>
              <p>“{item.quote[locale]}”</p>
              <a className="recommendation-source" href={item.href} target="_blank" rel="noreferrer">{locale === "es" ? "Ver perfil en LinkedIn ↗" : "View LinkedIn profile ↗"}</a>
            </details>)}
          </div>
        </section>

        <section className="callout">
          <div><h2>{t.contactTitle}</h2><p>{locale === "es" ? "Trabajo remoto · Chincha, Perú" : "Remote work · Chincha, Peru"}</p></div>
          <a className="button button-primary" href="#contact">{t.contactButton}<span aria-hidden="true">↓</span></a>
        </section>
        <ContactForm locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
