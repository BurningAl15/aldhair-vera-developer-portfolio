export type Locale = "es" | "en";
export type ProjectKind = "mobile" | "web" | "desktop" | "games";
export type WebProjectType = "landing" | "web-app" | "mini-app" | "game";

export type ProductWebsite = {
  name: string;
  href: string;
  image: string;
  imageAlt: { es: string; en: string };
  purpose: { es: string; en: string };
};

export type ProjectScreenshot = {
  src: string;
  width?: number;
  height?: number;
  alt: { es: string; en: string };
  caption: { es: string; en: string };
};

export type Project = {
  slug: string;
  kind: ProjectKind;
  webType?: WebProjectType;
  name: string;
  category: { es: string; en: string };
  status: { es: string; en: string };
  image?: string;
  imageAlt: { es: string; en: string };
  screenshots?: ProjectScreenshot[];
  summary: { es: string; en: string };
  challenge?: { es: string; en: string };
  approach?: { es: string; en: string };
  contribution?: { es: string; en: string };
  stack: string[];
  languages?: { es: string[]; en: string[] };
  highlights?: { es: string[]; en: string[] };
  links: { label: { es: string; en: string }; href: string }[];
  productWebsite?: ProductWebsite;
  relatedProjectSlug?: string;
  featured?: boolean;
  archive?: boolean;
  legacyDescription?: { es: string; en: string };
};

export const projects: Project[] = [
  {
    slug: "cozy-pomodoro",
    kind: "mobile",
    name: "Cozy Pomodoro",
    category: { es: "Productividad · Flutter", en: "Productivity · Flutter" },
    status: { es: "iOS y Android · macOS en pruebas", en: "iOS & Android · macOS in testing" },
    image: "/projects/promo/cozy-pomodoro-promo.webp",
    screenshots: [
      { src: "/projects/cozy-pomodoro/screenshots/01-achievements.jpg", alt: { es: "Progreso de logros y rachas en Cozy Pomodoro", en: "Achievement and streak progress in Cozy Pomodoro" }, caption: { es: "Logros y progreso", en: "Achievements and progress" } },
      { src: "/projects/cozy-pomodoro/screenshots/02-focus-idle.jpg", alt: { es: "Temporizador de enfoque listo para iniciar sobre un paisaje ilustrado", en: "Focus timer ready to start over an illustrated landscape" }, caption: { es: "Timer listo", en: "Timer ready" } },
      { src: "/projects/cozy-pomodoro/screenshots/03-focus-running.jpg", alt: { es: "Sesión Pomodoro activa con controles de pausa y audio Cozy Radio", en: "Active Pomodoro session with pause controls and Cozy Radio audio" }, caption: { es: "Sesión en curso", en: "Session in progress" } },
      { src: "/projects/cozy-pomodoro/screenshots/04-android-notification.jpg", alt: { es: "Notificación de Android con el tiempo restante y controles para pausar o detener", en: "Android notification showing time remaining with pause and stop controls" }, caption: { es: "Controles en Android", en: "Android controls" } },
      { src: "/projects/cozy-pomodoro/screenshots/05-themes.jpg", alt: { es: "Ajustes de Cozy Pomodoro para elegir paletas de color y paisajes", en: "Cozy Pomodoro settings for choosing color palettes and landscapes" }, caption: { es: "Temas y paisajes", en: "Themes and landscapes" } },
      { src: "/projects/cozy-pomodoro/screenshots/06-statistics.jpg", alt: { es: "Estadísticas de racha, tiempo de enfoque, sesiones y objetivo diario", en: "Statistics for streak, focus time, sessions and daily goal" }, caption: { es: "Estadísticas", en: "Statistics" } },
    ],
    imageAlt: {
      es: "Imagen promocional de Cozy Pomodoro en un teléfono, con un temporizador frente a un jardín lluvioso",
      en: "Cozy Pomodoro promotional image showing a phone timer against a rainy garden",
    },
    summary: {
      es: "Un temporizador de enfoque que combina ciclos Pomodoro, audio ambiental y temas visuales para hacer más amable el momento de empezar.",
      en: "A focus timer combining Pomodoro sessions, ambient audio and visual themes to make getting started feel easier.",
    },
    challenge: {
      es: "El reto era que el temporizador siguiera siendo claro y confiable mientras el usuario cambiaba de pantalla, bloqueaba el teléfono o personalizaba su espacio.",
      en: "The challenge was keeping the timer clear and reliable while people switched apps, locked their phones or personalized their space.",
    },
    approach: {
      es: "Construí una experiencia multiplataforma con ciclos de enfoque y descanso, audio en segundo plano y continuidad visible desde widgets y Live Activities.",
      en: "I built a cross-platform experience with focus and break cycles, background audio, and timer continuity through widgets and Live Activities.",
    },
    contribution: {
      es: "Diseño e implementación de producto con Flutter y Dart, además de integración de Firebase y compras multiplataforma.",
      en: "Product design and implementation with Flutter and Dart, plus Firebase and cross-platform purchase integrations.",
    },
    stack: ["Flutter", "Dart", "Firebase", "RevenueCat", "iOS", "Android"],
    highlights: {
      es: ["Temas visuales con ilustraciones y colores", "Audio ambiental coordinado con los ciclos de enfoque", "Live Activities en iOS y widgets para consultar el timer"],
      en: ["Illustrated and color-based visual themes", "Ambient audio coordinated with focus cycles", "iOS Live Activities and widgets for at-a-glance timer status"],
    },
    links: [
      { label: { es: "App Store", en: "App Store" }, href: "https://apps.apple.com/es/app/cozy-pomodoro-timer-enfoque/id6759178972" },
      { label: { es: "Google Play", en: "Google Play" }, href: "https://play.google.com/store/apps/details?id=com.fatcatgamestudio.cozypomodoro" },
      { label: { es: "Landing del producto", en: "Product website" }, href: "https://cozy-pomodoro-landing.vercel.app/" },
    ],
    productWebsite: {
      name: "Cozy Pomodoro — sitio del producto",
      href: "https://cozy-pomodoro-landing.vercel.app/",
      image: "/projects/landing-previews/cozy-pomodoro.webp",
      imageAlt: { es: "Landing de Cozy Pomodoro con temporizador y temas visuales", en: "Cozy Pomodoro landing page with timer and visual themes" },
      purpose: {
        es: "Presenta el método, los temas y el audio de Cozy, y reúne enlaces de descarga, soporte y políticas. La landing explica el producto antes de llevar a cada tienda.",
        en: "It introduces Cozy’s method, themes and audio, and brings together store, support and policy links. The landing explains the product before sending visitors to a store.",
      },
    },
    relatedProjectSlug: "cozy-pomodoro-website",
    featured: true,
  },
  {
    slug: "portfolio-3d-anterior",
    kind: "web",
    name: "Portfolio personal 3D",
    category: { es: "Web · React · Three.js", en: "Web · React · Three.js" },
    status: { es: "Versión anterior del portfolio", en: "Previous portfolio version" },
    image: "/projects/portfolio-3d-pendiente.svg",
    imageAlt: { es: "Marcador temporal; falta una captura del portfolio personal 3D", en: "Temporary placeholder; a screenshot of the personal 3D portfolio is still needed" },
    summary: {
      es: "Portfolio personal interactivo con escenas 3D, presentación de experiencia y una selección de proyectos de desarrollo web, móvil y videojuegos.",
      en: "An interactive personal portfolio with 3D scenes, experience, and selected work across web, mobile and game development.",
    },
    challenge: { es: "Presentar distintas áreas de trabajo en una experiencia visual interactiva.", en: "Presenting different areas of work in an interactive visual experience." },
    approach: { es: "La experiencia combinaba una interfaz React con escenas 3D interactivas, animación y secciones tradicionales de perfil y proyectos. El rediseño actual conserva el contenido útil y lo reorganiza en páginas renderizadas en servidor.", en: "The experience combined a React interface with interactive 3D scenes, animation, and conventional profile and project sections. The current redesign keeps its useful content and reorganizes it into server-rendered pages." },
    contribution: { es: "Portfolio personal; desarrollo frontend y escenas 3D.", en: "Personal portfolio; frontend development and 3D scenes." },
    stack: ["React", "TypeScript", "Three.js", "Framer Motion", "Tailwind CSS"],
    highlights: { es: ["Escenas y modelos 3D", "Secciones de proyectos y experiencia", "Diseño adaptable a móvil"], en: ["3D scenes and models", "Project and experience sections", "Mobile-responsive design"] },
    links: [{ label: { es: "Código fuente", en: "Source code" }, href: "https://github.com/BurningAl15/aldhair-vera-developer-portfolio" }],
    archive: true,
  },
  {
    slug: "videogame-developer-portfolio",
    kind: "games",
    name: "Portfolio de videojuegos y XR",
    category: { es: "Portfolio · Videojuegos · XR", en: "Portfolio · Games · XR" },
    status: { es: "Sitio publicado", en: "Published website" },
    image: "/projects/videogame-portfolio.png",
    imageAlt: { es: "Portfolio profesional de videojuegos y experiencias XR", en: "Professional portfolio for games and XR experiences" },
    summary: {
      es: "Un portfolio especializado en videojuegos y experiencias XR, con proyectos, artículos y demos jugables en el navegador.",
      en: "A dedicated portfolio for video games and XR experiences, with projects, articles and playable browser demos.",
    },
    challenge: { es: "Reunir proyectos de juego, simulación y XR en un sitio que permita explorar el trabajo y, cuando existe una build web, probarla directamente.", en: "Bringing game, simulation and XR work together in a site where people can explore projects and, when a web build exists, try it directly." },
    approach: { es: "El sitio usa Next.js y páginas bilingües para presentar casos de estudio, artículos, testimonios y proyectos con builds de Unity o Godot para navegador.", en: "The site uses Next.js and bilingual pages to present case studies, articles, testimonials, and projects with Unity or Godot browser builds." },
    contribution: { es: "Diseño y desarrollo del portfolio y sus herramientas de contenido.", en: "Portfolio design and development, including its content tools." },
    stack: ["Next.js", "TypeScript", "Unity WebGL", "Godot", "Keystatic", "Netlify"],
    languages: { es: ["Español", "inglés"], en: ["Spanish", "English"] },
    highlights: { es: ["Casos de estudio de videojuegos y XR", "Demos Unity y Godot ejecutables en navegador cuando están disponibles", "Portfolio y blog en español e inglés"], en: ["Game and XR case studies", "Unity and Godot browser demos where available", "Portfolio and blog in English and Spanish"] },
    links: [{ label: { es: "Ver portfolio", en: "Visit portfolio" }, href: "https://aldhairvera.netlify.app/" }],
    archive: true,
  },
  {
    slug: "fast-task-manager",
    kind: "web",
    name: "Fast Task Manager",
    category: { es: "Productividad · Web · PWA", en: "Productivity · Web · PWA" },
    status: { es: "Demo pública · proyecto aislado", en: "Public demo · isolated project" },
    image: "/projects/fast-task-manager.png",
    imageAlt: { es: "Captura del administrador de tareas Fast Task Manager", en: "Fast Task Manager project screenshot" },
    summary: {
      es: "Un gestor web para convertir proyectos y pendientes en trabajo ordenado, con tareas, subtareas y seguimiento del avance.",
      en: "A web task manager for turning projects and to-dos into organized work, with tasks, subtasks and progress tracking.",
    },
    challenge: { es: "Mantener el contexto y el ritmo al dividir proyectos en tareas pequeñas, sin que organizar el trabajo se convierta en otra tarea más.", en: "Preserve context and momentum while breaking projects into small tasks, without making organization another task in itself." },
    approach: { es: "La interfaz organiza proyectos, tareas, sprints y versiones, mientras Firebase guarda el espacio de trabajo. La demo pública corre en un proyecto Firebase separado del entorno privado y debe usarse solo con información ficticia.", en: "The interface organizes projects, tasks, sprints and releases, while Firebase stores the workspace. The public demo runs in a Firebase project separate from the private environment and should only be used with fictional information." },
    contribution: { es: "Diseño y desarrollo de producto: interfaz, flujos de tareas e integración con Firebase.", en: "Product design and development: interface, task workflows and Firebase integration." },
    stack: ["Next.js", "Firebase", "Tailwind CSS", "PWA"],
    highlights: { es: ["Proyectos, tareas, sprints y versiones", "Espacio de trabajo persistido con Firebase", "Demo pública aislada para explorar el flujo"], en: ["Projects, tasks, sprints and releases", "Firebase-backed workspace persistence", "Isolated public demo to explore the workflow"] },
    links: [{ label: { es: "Probar demo", en: "Try the demo" }, href: "https://fast-task-manager-demo.vercel.app/" }],
    featured: true,
  },
  {
    slug: "image-prep",
    kind: "desktop",
    name: "Aldha's Media Toolkit",
    category: { es: "Herramientas de escritorio · Electron", en: "Desktop media tools · Electron" },
    status: { es: "En desarrollo · macOS arm64 sin firma ni notarización", en: "In development · macOS arm64, unsigned and not notarized" },
    image: "/projects/aldhas-media-toolkit/screenshots/images-workspace.webp",
    imageAlt: { es: "Espacio de trabajo de Aldha's Media Toolkit para preparar imágenes y archivos multimedia", en: "Aldha's Media Toolkit workspace for preparing images and media files" },
    screenshots: [
      { src: "/projects/aldhas-media-toolkit/screenshots/images-workspace.webp", width: 1800, height: 1200, alt: { es: "Espacio de trabajo con herramientas para preparar imágenes y otros medios", en: "Workspace with tools for preparing images and other media" }, caption: { es: "Herramientas de medios en un solo espacio", en: "Media tools in one workspace" } },
      { src: "/projects/aldhas-media-toolkit/screenshots/image-crop-editor.webp", width: 1800, height: 1200, alt: { es: "Editor de recorte de imágenes con vista previa y controles de encuadre", en: "Image crop editor with preview and framing controls" }, caption: { es: "Recorte y encuadre de imágenes", en: "Image cropping and framing" } },
      { src: "/projects/aldhas-media-toolkit/screenshots/video-vertical-export.webp", width: 1800, height: 1200, alt: { es: "Exportación de video con formato vertical y ajustes de salida", en: "Video export with a vertical format and output settings" }, caption: { es: "Exportación de video vertical", en: "Vertical video export" } },
      { src: "/projects/aldhas-media-toolkit/screenshots/video-crop-preview.webp", width: 1800, height: 1200, alt: { es: "Vista previa para encuadrar y posicionar el recorte de un video", en: "Preview for framing and positioning a video crop" }, caption: { es: "Ajuste del encuadre de video", en: "Video crop positioning" } },
      { src: "/projects/aldhas-media-toolkit/screenshots/base64-video-to-text.webp", width: 1800, height: 1200, alt: { es: "Herramienta local para convertir video a texto Base64", en: "Local tool for converting video to Base64 text" }, caption: { es: "Conversión de medios a Base64", en: "Media to Base64 conversion" } },
    ],
    summary: {
      es: "Una app de escritorio local-first para preparar imágenes y trabajar con GIF, video, audio, Base64 y archivos protegidos. Antes se llamaba Image Prep.",
      en: "A local-first desktop app for preparing images and working with GIFs, video, audio, Base64 and protected archives. Formerly called Image Prep.",
    },
    challenge: {
      es: "Preparar recursos visuales y de audio suele repartir el trabajo entre varias herramientas. La app reúne conversiones por lotes y utilidades de medios en un mismo flujo local, sin subir los archivos del usuario.",
      en: "Preparing visual and audio assets often means moving between several tools. The app brings batch conversions and media utilities into one local workflow without uploading users' files.",
    },
    approach: {
      es: "Electron mantiene el acceso a archivos y el procesamiento pesado en el proceso principal; React y TypeScript presentan los controles. Sharp trabaja imágenes, FFmpeg convierte medios, y Whisper.cpp permite transcribir voz localmente al configurar whisper-cli y un modelo.",
      en: "Electron keeps file access and heavy processing in the main process, while React and TypeScript power the interface. Sharp handles images, FFmpeg converts media, and Whisper.cpp can transcribe speech locally when whisper-cli and a model are configured.",
    },
    contribution: {
      es: "Diseñé y desarrollé la app de escritorio, sus flujos de procesamiento local y el empaquetado para macOS.",
      en: "I designed and built the desktop app, its local media workflows, and the macOS packaging.",
    },
    stack: ["Electron", "React", "TypeScript", "Vite", "Sharp", "FFmpeg", "Whisper.cpp"],
    highlights: {
      es: ["Redimensiona, recorta, optimiza y quita fondos a imágenes por lotes; también crea GIF y convierte video y audio", "Extrae fotogramas y transcribe voz localmente; no incluye OCR", "Codifica o decodifica medios Base64 y crea archivos SecurePack con AES-256-GCM", "El video se exporta completo: todavía no permite recortar un segmento por inicio y fin"],
      en: ["Batch-resizes, crops, optimizes and removes image backgrounds; also creates GIFs and converts video and audio", "Extracts video frames and transcribes speech locally; OCR is not included", "Encodes or decodes Base64 media and creates SecurePack archives with AES-256-GCM", "Video exports the full source; trimming a start/end segment is not available yet"],
    },
    links: [{ label: { es: "Landing del producto", en: "Product website" }, href: "https://burningal15.github.io/aldhas-media-toolkit/" }],
    featured: true,
  },
  {
    slug: "blackjack",
    kind: "web",
    webType: "game",
    name: "Blackjack",
    category: { es: "Juego web · JavaScript", en: "Web game · JavaScript" },
    status: { es: "Demo histórica", en: "Historical demo" },
    image: "/projects/blackjack.webp",
    imageAlt: { es: "Proyecto de Blackjack en JavaScript", en: "JavaScript Blackjack project" },
    summary: { es: "Una implementación web sencilla de Blackjack creada con JavaScript y CSS.", en: "A small web implementation of Blackjack built with JavaScript and CSS." },
    legacyDescription: { es: "La web anterior la describía como una aplicación para simular una partida de Blackjack con JavaScript vanilla.", en: "The previous portfolio described it as a web application simulating a Blackjack game with vanilla JavaScript." },
    stack: ["JavaScript", "CSS"],
    links: [
      { label: { es: "Demo", en: "Demo" }, href: "https://burningal15.github.io/blackjack-js/" },
      { label: { es: "Código", en: "Source code" }, href: "https://github.com/BurningAl15/blackjack-js" },
    ],
    archive: true,
  },
  {
    slug: "sabor-a-peru",
    kind: "web",
    webType: "landing",
    name: "Sabor a Perú",
    category: { es: "Landing · Gastronomía", en: "Landing page · Food" },
    status: { es: "Demo histórica", en: "Historical demo" },
    image: "/projects/sabor-a-peru.webp",
    imageAlt: { es: "Diseño web de Sabor a Perú", en: "Sabor a Perú website design" },
    summary: { es: "Landing page para presentar un restaurante peruano.", en: "A landing page introducing a Peruvian restaurant." },
    legacyDescription: { es: "Proyecto frontend histórico, construido con JavaScript y CSS.", en: "Historical frontend project built with JavaScript and CSS." },
    stack: ["JavaScript", "CSS"],
    links: [
      { label: { es: "Demo", en: "Demo" }, href: "https://burningal15.github.io/sabor_a_peru/" },
      { label: { es: "Código", en: "Source code" }, href: "https://github.com/BurningAl15/sabor_a_peru" },
    ],
    archive: true,
  },
  {
    slug: "cake-n-coffee",
    kind: "web",
    webType: "landing",
    name: "Cake N Coffee",
    category: { es: "Sitio web · Landing page", en: "Website · Landing page" },
    status: { es: "Demo histórica", en: "Historical demo" },
    image: "/projects/cake-n-coffee.webp",
    imageAlt: { es: "Landing page Cake N Coffee", en: "Cake N Coffee landing page" },
    summary: { es: "Landing page para presentar una cafetería.", en: "A landing page introducing a coffee shop." },
    legacyDescription: { es: "Proyecto frontend histórico, construido con JavaScript y CSS.", en: "Historical frontend project built with JavaScript and CSS." },
    stack: ["JavaScript", "CSS"],
    links: [
      { label: { es: "Demo", en: "Demo" }, href: "https://burningal15.github.io/CakeNCoffee-JS/" },
      { label: { es: "Código", en: "Source code" }, href: "https://github.com/BurningAl15/CakeNCoffee-JS" },
    ],
    archive: true,
  },
  {
    slug: "tulum-mexico",
    kind: "web",
    webType: "landing",
    name: "Tulum México",
    category: { es: "Landing · Turismo", en: "Landing page · Travel" },
    status: { es: "Demo histórica", en: "Historical demo" },
    image: "/projects/tulum.webp",
    imageAlt: { es: "Sitio web sobre Tulum, México", en: "Website about Tulum, Mexico" },
    summary: { es: "Landing page que presenta información sobre Tulum, México.", en: "A landing page introducing Tulum, Mexico." },
    legacyDescription: { es: "La web anterior enlazaba esta demo publicada en Surge.", en: "The previous portfolio linked to this demo hosted on Surge." },
    stack: ["JavaScript", "CSS"],
    links: [{ label: { es: "Demo", en: "Demo" }, href: "https://fundajs-aldhairvera.surge.sh/" }],
    archive: true,
  },
  {
    slug: "random-quote",
    kind: "web",
    webType: "mini-app",
    name: "Random Quote",
    category: { es: "Mini app · React", en: "Mini app · React" },
    status: { es: "Demo histórica", en: "Historical demo" },
    image: "/projects/random-quote.webp",
    imageAlt: { es: "Aplicación web Random Quote", en: "Random Quote web application" },
    summary: { es: "Mini app en React para obtener una frase aleatoria de una colección local.", en: "A small React app that picks a random quote from a local collection." },
    legacyDescription: { es: "Proyecto frontend con React y CSS, publicado en Netlify.", en: "Frontend project using React and CSS, deployed to Netlify." },
    stack: ["React", "JSON", "CSS"],
    links: [
      { label: { es: "Demo", en: "Demo" }, href: "https://random-quotes-by-aldhair.netlify.app/" },
      { label: { es: "Código", en: "Source code" }, href: "https://github.com/BurningAl15/fcc-random-quote" },
    ],
    archive: true,
  },
  {
    slug: "food-ya",
    kind: "web",
    webType: "web-app",
    name: "Food Ya!",
    category: { es: "Web · React · Comida", en: "Web · React · Food" },
    status: { es: "Demo fuera de servicio · reimplementación pendiente", en: "Demo unavailable · redeployment pending" },
    image: "/projects/food-ya.webp",
    imageAlt: { es: "Proyecto Food Ya!", en: "Food Ya! project" },
    summary: { es: "Aplicación web para explorar y comprar comida de distintos restaurantes, con un backend Node.js y Express y una base de datos MongoDB.", en: "A web app for exploring and ordering food from multiple restaurants, backed by Node.js, Express and MongoDB." },
    legacyDescription: { es: "El frontend estaba construido con React y Bootstrap. El backend usaba Node.js con Express, exponía una REST API y guardaba los datos en MongoDB. El proyecto incluía un video de presentación y el repositorio del equipo.", en: "The frontend was built with React and Bootstrap. Its Node.js and Express backend exposed a REST API and stored data in MongoDB. The project listing included a presentation video and the team repository." },
    stack: ["React", "Node.js", "Express", "MongoDB", "REST API", "Bootstrap"],
    links: [
      { label: { es: "Presentación", en: "Presentation" }, href: "https://www.youtube.com/live/okLcs2-lf60?si=Cq27gpMacCmbepxy&t=1100" },
      { label: { es: "Repositorio del equipo", en: "Team repository" }, href: "https://github.com/Lizethsuk/food-ya/tree/presentation" },
    ],
    archive: true,
  },
  {
    slug: "aldhanote",
    kind: "mobile",
    name: "AldhaNote",
    category: { es: "Móvil · React Native", en: "Mobile · React Native" },
    status: { es: "Proyecto histórico · disponibilidad por verificar", en: "Historical project · availability unverified" },
    image: "/projects/promo/aldhanote-promo.webp",
    imageAlt: { es: "Imagen promocional de AldhaNote con la lista de notas abierta en un teléfono", en: "AldhaNote promotional image showing the notes list on a phone" },
    summary: { es: "Aplicación móvil creada con React Native, presentada en la web anterior junto con un video y repositorio.", en: "A React Native mobile app listed on the previous portfolio with a video and repository." },
    legacyDescription: { es: "La descripción anterior la identificaba como app móvil React Native con integración de una REST API.", en: "The previous description identified it as a React Native mobile app integrated with a REST API." },
    stack: ["React Native", "REST API"],
    links: [
      { label: { es: "Video", en: "Video" }, href: "https://www.youtube.com/watch?v=XA4EZ8pANb0" },
      { label: { es: "Repositorio", en: "Repository" }, href: "https://github.com/BurningAl15/personal-makeitreal/" },
    ],
    archive: true,
  },
  {
    slug: "student-manager-kodland",
    kind: "web",
    webType: "mini-app",
    name: "Student Manager for Kodland",
    category: { es: "Mini app · Herramienta educativa", en: "Mini app · Education tool" },
    status: { es: "Proyecto histórico · mejoras pendientes", en: "Historical project · improvements pending" },
    image: "/projects/student-manager.webp",
    imageAlt: { es: "Student Manager para organizar grupos de estudiantes", en: "Student Manager for organizing student groups" },
    summary: { es: "Herramienta creada para organizar grupos de estudiantes y la información necesaria para las clases.", en: "A tool built to organize student groups and information needed for classes." },
    legacyDescription: { es: "La ficha anterior mencionaba React, JSON y Material UI, además de una demo en Netlify.", en: "The previous listing mentioned React, JSON and Material UI, plus a Netlify demo." },
    stack: ["React", "JSON", "Material UI"],
    links: [
      { label: { es: "Demo", en: "Demo" }, href: "https://student-manager-test.netlify.app/" },
      { label: { es: "Código", en: "Source code" }, href: "https://github.com/BurningAl15/Students-Manager" },
    ],
    archive: true,
  },
  {
    slug: "pokedex-mobile",
    kind: "mobile",
    name: "Pokedex",
    category: { es: "Móvil · React Native Expo", en: "Mobile · React Native Expo" },
    status: { es: "Proyecto histórico · sin publicación confirmada", en: "Historical project · no confirmed release" },
    image: "/projects/promo/pokedex-mobile-promo.webp",
    imageAlt: { es: "Imagen promocional de la Pokédex móvil con la lista de criaturas y una ficha abierta", en: "Mobile Pokédex promotional image showing the creature list and an open detail view" },
    summary: { es: "Pokédex móvil que consulta PokeAPI y guarda favoritos localmente.", en: "A mobile Pokédex that uses PokeAPI and saves favorites locally." },
    legacyDescription: { es: "La ficha anterior indicaba React Native Expo, PokeAPI y AsyncStorage; no afirmaba que estuviera publicada.", en: "The previous listing noted React Native Expo, PokeAPI and AsyncStorage; it did not claim a public release." },
    stack: ["React Native", "Expo", "PokeAPI", "AsyncStorage"],
    links: [{ label: { es: "Código", en: "Source code" }, href: "https://github.com/BurningAl15/pokedexMobile" }],
    archive: true,
  },
  {
    slug: "safebite",
    kind: "mobile",
    name: "SafeBite",
    category: { es: "Salud y alimentación · React Native", en: "Food & health · React Native" },
    status: { es: "Disponible en iOS y Android", en: "Available on iOS and Android" },
    image: "/projects/promo/safebite-promo.webp",
    screenshots: [
      { src: "/projects/safebite/screenshots/01-aplv-guide.jpg", alt: { es: "Guía de información sobre APLV y señales de alerta en SafeBite", en: "SafeBite's APLV information guide and warning signs" }, caption: { es: "Información y guía rápida", en: "Information and quick guide" } },
      { src: "/projects/safebite/screenshots/02-scan-history.jpg", alt: { es: "Historial de productos revisados con opción de guardar el historial al iniciar sesión", en: "History of reviewed products with an option to save it by signing in" }, caption: { es: "Historial de escaneos", en: "Scan history" } },
      { src: "/projects/safebite/screenshots/03-scanner-home.jpg", alt: { es: "Inicio de SafeBite con acceso al escáner y al recordatorio de seguridad diaria", en: "SafeBite home with scanner access and a daily safety reminder" }, caption: { es: "Inicio y acceso al escáner", en: "Home and scanner entry point" } },
    ],
    imageAlt: {
      es: "Imagen promocional de SafeBite con un teléfono que muestra el escáner de etiquetas de alimentos",
      en: "SafeBite promotional image with a phone showing the food-label scanner",
    },
    summary: {
      es: "Una app para revisar ingredientes desde el teléfono y ayudar a las personas a tomar decisiones informadas sobre alimentos.",
      en: "A mobile app for checking ingredients and helping people make informed food choices.",
    },
    challenge: {
      es: "Leer etiquetas pequeñas puede ser lento, especialmente cuando alguien necesita vigilar ingredientes concretos. La experiencia debía facilitar el escaneo y funcionar también con conectividad irregular.",
      en: "Small labels can be slow to read, especially when someone needs to watch for specific ingredients. Scanning needed to be straightforward and resilient to spotty connectivity.",
    },
    approach: {
      es: "Google ML Kit reconoce el texto en el teléfono y un motor local resalta términos relacionados con leche y trazas. Así el escaneo no necesita consultar un catálogo remoto; la cuenta permite conservar y sincronizar el historial. El resultado es informativo, no certifica que un producto sea seguro.",
      en: "Google ML Kit recognizes text on the device, and a local rules engine highlights milk-related terms and trace warnings. Scanning does not need a remote product catalog; an account can keep and sync scan history. Results are informational and do not certify a product as safe.",
    },
    contribution: {
      es: "Desarrollo de producto móvil con React Native y Expo e integración de servicios para datos, sincronización y compras.",
      en: "Mobile product development with React Native and Expo, integrating services for data, sync and purchases.",
    },
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Google ML Kit", "RevenueCat", "iOS", "Android"],
    highlights: {
      es: ["Lectura de etiquetas mediante OCR en el dispositivo", "Modo invitado para probar el escáner", "Historial sincronizado al usar una cuenta"],
      en: ["On-device OCR for ingredient labels", "Guest mode to try the scanner", "Synced scan history when using an account"],
    },
    links: [
      { label: { es: "Google Play", en: "Google Play" }, href: "https://play.google.com/store/apps/details?id=com.FatCatGameStudio.SafeBite" },
      { label: { es: "Web de SafeBite", en: "SafeBite website" }, href: "https://safe-bite-landing.vercel.app/es" },
    ],
    productWebsite: {
      name: "SafeBite — sitio del producto",
      href: "https://safe-bite-landing.vercel.app/es",
      image: "/projects/landing-previews/safebite.webp",
      imageAlt: { es: "Landing de SafeBite con escaneo de etiquetas de alimentos", en: "SafeBite landing page showing food-label scanning" },
      purpose: {
        es: "Explica qué puede detectar el escáner y cuáles son sus límites, presenta privacidad y soporte, y dirige a las tiendas. Esto ayuda a que la gente entienda la herramienta antes de instalarla.",
        en: "It explains what the scanner can detect and its limits, provides privacy and support information, and links to the stores so people can understand the tool before installing it.",
      },
    },
    relatedProjectSlug: "safebite-website",
    featured: true,
  },
  {
    slug: "nox-notes",
    kind: "mobile",
    name: "Nox Notes",
    category: { es: "Notas y escritura · React Native", en: "Notes & writing · React Native" },
    status: { es: "Android disponible · iOS en revisión", en: "Available on Android · iOS in review" },
    image: "/projects/promo/nox-notes-promo.webp",
    screenshots: [
      { src: "/projects/nox-notes/screenshots/01-settings.jpg", alt: { es: "Ajustes de Nox Notes para elegir tema y textura de papel", en: "Nox Notes settings for choosing a theme and paper texture" }, caption: { es: "Temas y papel", en: "Themes and paper" } },
      { src: "/projects/nox-notes/screenshots/02-theme-achievement.jpg", alt: { es: "Logro Paper Artist al cambiar el tema o la textura del papel", en: "Paper Artist achievement for changing the theme or paper texture" }, caption: { es: "Logros", en: "Achievements" } },
      { src: "/projects/nox-notes/screenshots/03-wardrobe.jpg", alt: { es: "Armario para elegir aspectos de Nox", en: "Wardrobe for choosing Nox character skins" }, caption: { es: "Personalización de Nox", en: "Nox customization" } },
      { src: "/projects/nox-notes/screenshots/04-tasks.jpg", alt: { es: "Lista de tareas con una tarea y el logro Tiny Plan", en: "Task list with one task and the Tiny Plan achievement" }, caption: { es: "Tareas y logros", en: "Tasks and achievements" } },
      { src: "/projects/nox-notes/screenshots/05-streak.jpg", alt: { es: "Racha actual y calendario de escritura en Nox Path", en: "Current writing streak and calendar in Nox Path" }, caption: { es: "Racha de escritura", en: "Writing streak" } },
      { src: "/projects/nox-notes/screenshots/06-first-note.jpg", alt: { es: "Inicio con un diario, una nota reciente y el logro First Thought", en: "Home screen with a journal, a recent note and the First Thought achievement" }, caption: { es: "Diarios y notas", en: "Journals and notes" } },
      { src: "/projects/nox-notes/screenshots/07-note-editor.jpg", alt: { es: "Editor de notas con selector de diario y teclado abierto", en: "Note editor with a journal selector and keyboard open" }, caption: { es: "Escritura de una nota", en: "Writing a note" } },
      { src: "/projects/nox-notes/screenshots/08-new-journal.jpg", alt: { es: "Ventana para crear un diario y elegir su color", en: "Dialog for creating a journal and choosing its color" }, caption: { es: "Crear un diario", en: "Creating a journal" } },
      { src: "/projects/nox-notes/screenshots/09-daily-ritual.jpg", alt: { es: "Inicio de Nox Notes con registro del estado de ánimo y ritual diario", en: "Nox Notes home with a mood check-in and daily ritual" }, caption: { es: "Ritual diario", en: "Daily ritual" } },
      { src: "/projects/nox-notes/screenshots/10-reminders.jpg", alt: { es: "Ajustes para activar recordatorios de racha y tareas pendientes", en: "Settings for streak and pending-task reminders" }, caption: { es: "Recordatorios", en: "Reminders" } },
      { src: "/projects/nox-notes/screenshots/11-language-onboarding.jpg", alt: { es: "Onboarding para elegir inglés o español", en: "Onboarding screen to choose English or Spanish" }, caption: { es: "Idioma", en: "Language" } },
      { src: "/projects/nox-notes/screenshots/12-nox-illustration.jpg", alt: { es: "Ilustración de Nox, la mascota de la app, en una biblioteca nocturna", en: "Illustration of Nox, the app mascot, in a night-time library" }, caption: { es: "Nox, la mascota", en: "Nox, the mascot" } },
    ],
    imageAlt: { es: "Imagen promocional de Nox Notes con la mascota junto a la pantalla de un diario en el teléfono", en: "Nox Notes promotional image with its mascot beside a phone showing a journal" },
    summary: {
      es: "Una app de notas que abre en modo invitado y permite empezar a escribir sin tener que crear una cuenta primero.",
      en: "A notes app that opens in guest mode so people can start writing without creating an account first.",
    },
    challenge: {
      es: "El primer uso debía ser inmediato y las notas debían seguir disponibles localmente, incluso antes de que la persona decidiera activar la sincronización.",
      en: "First use needed to be immediate, with notes available locally before someone decides to enable sync.",
    },
    approach: {
      es: "Puedes empezar a escribir localmente sin cuenta. La sincronización requiere iniciar sesión; también puedes personalizar el espacio y proteger la app o notas con la autenticación del dispositivo.",
      en: "Start writing locally without an account. Sync requires signing in; you can also personalize the space and protect the app or notes with device authentication.",
    },
    contribution: {
      es: "Desarrollo móvil con React Native y Expo, almacenamiento local, sincronización de cuenta y flujos de privacidad y seguridad.",
      en: "Mobile development with React Native and Expo, local storage, account sync, and privacy and security flows.",
    },
    stack: ["React Native", "Expo", "SQLite", "Firebase", "RevenueCat", "iOS", "Android"],
    highlights: {
      es: ["Modo invitado desde el primer inicio", "Notas, diarios y tareas", "Temas, texturas y autenticación del dispositivo"],
      en: ["Guest mode from first launch", "Notes, journals and tasks", "Themes, paper textures and device authentication"],
    },
    links: [
      { label: { es: "Google Play", en: "Google Play" }, href: "https://play.google.com/store/apps/details?id=com.fatcatgamestudio.noxnotes" },
      { label: { es: "Web de Nox Notes", en: "Nox Notes website" }, href: "https://noxnotes-landing.vercel.app/" },
    ],
    productWebsite: {
      name: "Nox Notes — sitio del producto",
      href: "https://noxnotes-landing.vercel.app/",
      image: "/projects/landing-previews/nox-notes.webp",
      imageAlt: { es: "Landing de Nox Notes con su presentación visual", en: "Nox Notes landing page with its visual introduction" },
      purpose: {
        es: "Muestra el enfoque de escritura tranquila, sus funciones y sus opciones de personalización; también concentra ayuda, privacidad y enlaces de descarga.",
        en: "It presents Nox’s calm writing approach, features and personalization, while bringing together help, privacy and download links.",
      },
    },
    relatedProjectSlug: "nox-notes-website",
    featured: true,
  },
  {
    slug: "pocketbudget",
    kind: "mobile",
    name: "PocketBudget",
    category: { es: "Finanzas personales · React Native", en: "Personal finance · React Native" },
    status: { es: "MVP en desarrollo · no publicado", en: "MVP in development · not released" },
    image: "/projects/pocketbudget-app-icon.png",
    imageAlt: { es: "Icono de PocketBudget, una billetera con sobres de presupuesto", en: "PocketBudget icon showing a wallet with budget envelopes" },
    summary: {
      es: "Una app local-first para organizar gastos, sobres, tarjetas y cuotas desde el teléfono.",
      en: "A local-first mobile app for organizing expenses, envelopes, cards and installments.",
    },
    challenge: {
      es: "El reto es ayudar a llevar el control del mes sin depender de una conexión constante ni pedir credenciales bancarias.",
      en: "The challenge is helping people manage their month without depending on a constant connection or asking for bank credentials.",
    },
    approach: {
      es: "La app guarda los datos localmente en SQLite y organiza el presupuesto con sobres, movimientos, tarjetas y cuotas. PocketBudget Lab acompaña el producto con simuladores web para comparar decisiones antes de comprometer dinero.",
      en: "The app stores data locally in SQLite and organizes budgets with envelopes, transactions, cards and installments. PocketBudget Lab complements it with web simulators for comparing decisions before committing money.",
    },
    contribution: {
      es: "Diseño e implementación del MVP móvil con React Native y Expo.",
      en: "Product design and implementation of the mobile MVP with React Native and Expo.",
    },
    stack: ["React Native", "Expo", "TypeScript", "SQLite", "Zustand"],
    highlights: {
      es: ["Almacenamiento local para usar el presupuesto sin conexión", "Sobres, movimientos, tarjetas y cuotas", "Enlace a simuladores web con datos precargados"],
      en: ["Local storage for using the budget offline", "Envelopes, transactions, cards and installments", "Web simulator links with prefilled data"],
    },
    links: [],
    relatedProjectSlug: "pocketbudget-lab",
  },
  {
    slug: "glowwords",
    kind: "mobile",
    name: "GlowWords",
    category: { es: "Bienestar · Flutter", en: "Wellbeing · Flutter" },
    status: { es: "En desarrollo · iOS y Android · aún no publicada", en: "In development · iOS & Android · not released yet" },
    image: "/projects/promo/glowwords-promo.webp",
    imageAlt: { es: "Imagen promocional de GlowWords con una tarjeta de afirmación en un teléfono, sobre nubes violetas", en: "GlowWords promotional image with an affirmation card on a phone against violet clouds" },
    summary: {
      es: "Una app de afirmaciones y citas en español e inglés, con categorías, favoritos, temas visuales y recordatorios.",
      en: "An affirmations and quotes app in English and Spanish, with categories, favorites, visual themes and reminders.",
    },
    challenge: {
      es: "Hacer que una colección de frases y afirmaciones sea fácil de explorar, personalizar y guardar en una rutina diaria.",
      en: "Making a collection of quotes and affirmations easy to explore, personalize and bring into a daily routine.",
    },
    approach: {
      es: "El catálogo incluido ofrece contenido en español e inglés. La app permite guardar favoritos y frases propias, configurar recordatorios y personalizar temas; las preferencias de cuenta se respaldan con Firebase.",
      en: "The bundled catalog includes English and Spanish content. The app supports favorites and custom quotes, reminders and theme personalization; account preferences are backed up with Firebase.",
    },
    contribution: {
      es: "Desarrollo de producto y cliente móvil con Flutter, Firebase y compras dentro de la app.",
      en: "Product and mobile client development with Flutter, Firebase and in-app purchases.",
    },
    stack: ["Flutter", "Dart", "Firebase", "RevenueCat", "iOS", "Android"],
    highlights: {
      es: ["Afirmaciones y citas por categorías", "Favoritos, frases propias y temas visuales", "Recordatorios configurables"],
      en: ["Affirmations and quotes by category", "Favorites, custom quotes and visual themes", "Configurable reminders"],
    },
    productWebsite: {
      name: "GlowWords — sitio del producto",
      href: "https://glowwords-landing.vercel.app/",
      image: "/projects/landing-previews/glowwords.webp",
      imageAlt: { es: "Landing de GlowWords con una tarjeta de afirmaciones", en: "GlowWords landing page with an affirmation card" },
      purpose: {
        es: "Presenta la propuesta y las funciones de GlowWords en español e inglés, y sirve como lugar central para soporte y futura información de descarga.",
        en: "It introduces GlowWords and its features in English and Spanish, and acts as a central place for support and future download information.",
      },
    },
    links: [{ label: { es: "Landing de GlowWords", en: "GlowWords website" }, href: "https://glowwords-landing.vercel.app/" }],
    relatedProjectSlug: "glowwords-website",
  },
  {
    slug: "pocketbudget-lab",
    kind: "web",
    name: "PocketBudget Lab",
    category: { es: "Finanzas · Web app · Next.js", en: "Finance · Web app · Next.js" },
    status: { es: "Preview de portfolio · landing pública pausada", en: "Portfolio preview · public landing paused" },
    image: "/projects/pocketbudget-lab-preview.svg",
    imageAlt: { es: "Ilustración de PocketBudget Lab con sus cuatro herramientas financieras", en: "PocketBudget Lab illustration showing its four financial tools" },
    summary: {
      es: "Una colección de simuladores gratuitos para calcular cuotas, comparar préstamos, estimar depósitos a plazo y ordenar deudas.",
      en: "A collection of free simulators for calculating payments, comparing loans, estimating fixed-term deposits and organizing debt.",
    },
    challenge: {
      es: "Las tasas anunciadas no siempre muestran el costo completo. La web busca ayudar a explorar escenarios y estimaciones antes de tomar una decisión financiera.",
      en: "Advertised rates do not always show the full cost. The website helps people explore scenarios and estimates before making a financial decision.",
    },
    approach: {
      es: "Construí herramientas independientes para comparar préstamos, calcular costos totales, estimar rendimientos y revisar opciones de pago de deudas. La app móvil gestiona el presupuesto cotidiano; Lab sirve para analizar una decisión puntual y puede recibir datos precargados desde la app.",
      en: "I built separate tools for comparing loans, calculating total costs, estimating returns and reviewing debt payoff options. The mobile app handles everyday budgeting; Lab helps analyze a specific decision and can receive prefilled data from the app.",
    },
    contribution: {
      es: "Diseño y desarrollo de producto web con Next.js, TypeScript y herramientas financieras en español e inglés.",
      en: "Product design and web development with Next.js, TypeScript and financial tools in English and Spanish.",
    },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "jsPDF"],
    highlights: {
      es: ["Calculadora de préstamos y TCEA estimada", "Comparador de ofertas y simulador de depósitos a plazo", "Diagnóstico de deudas y exportación de reportes PDF", "Enlaces desde la app móvil con parámetros precargados"],
      en: ["Loan calculator with estimated APR", "Offer comparison and fixed-term deposit simulator", "Debt diagnosis and PDF report export", "Mobile app links with prefilled parameters"],
    },
    links: [],
    relatedProjectSlug: "pocketbudget",
    featured: true,
  },
  {
    slug: "cozy-pomodoro-website", kind: "web", webType: "landing", name: "Landing de Cozy Pomodoro",
    category: { es: "Landing · Next.js · SEO", en: "Landing page · Next.js · SEO" },
    status: { es: "Sitio publicado", en: "Published website" },
    image: "/projects/landing-previews/cozy-pomodoro.webp",
    imageAlt: { es: "Landing de Cozy Pomodoro con temporizador y temas visuales", en: "Cozy Pomodoro landing page with timer and visual themes" },
    summary: { es: "La web presenta el temporizador, sus temas y audio, y lleva a soporte, políticas y tiendas.", en: "The website introduces the timer, themes and audio, and guides visitors to support, policies and app stores." },
    challenge: { es: "Una app con varias funciones necesita explicar rápido qué la hace distinta antes de pedir una descarga.", en: "An app with several features needs to quickly explain what makes it different before asking for a download." },
    approach: { es: "La landing organiza la propuesta y la información útil en páginas localizadas, con rutas de soporte y enlaces hacia las tiendas. Es la superficie web para descubrimiento y evaluación del producto.", en: "The landing organizes the product story and practical information in localized pages, with support routes and store links. It is the web surface for product discovery and evaluation." },
    stack: ["Next.js", "React", "TypeScript"],
    languages: { es: ["Español", "inglés"], en: ["Spanish", "English"] },
    highlights: { es: ["Presentación de funciones y temas", "Páginas de soporte y políticas", "Enlaces localizados a las tiendas"], en: ["Feature and theme overview", "Support and policy pages", "Localized store links"] },
    links: [{ label: { es: "Abrir landing", en: "Open landing" }, href: "https://cozy-pomodoro-landing.vercel.app/" }],
    relatedProjectSlug: "cozy-pomodoro",
  },
  {
    slug: "safebite-website", kind: "web", webType: "landing", name: "Landing de SafeBite",
    category: { es: "Landing · Next.js · SEO", en: "Landing page · Next.js · SEO" },
    status: { es: "Sitio publicado", en: "Published website" },
    image: "/projects/landing-previews/safebite.webp",
    imageAlt: { es: "Landing de SafeBite con escaneo de etiquetas de alimentos", en: "SafeBite landing page showing food-label scanning" },
    summary: { es: "Un sitio bilingüe que explica el escáner de etiquetas, su alcance informativo y sus límites.", en: "A bilingual site explaining the label scanner, its informational purpose and its limitations." },
    challenge: { es: "La web debía explicar un tema sensible con claridad, sin presentar el análisis como una garantía médica o de seguridad alimentaria.", en: "The site needed to explain a sensitive topic clearly without presenting the analysis as a medical or food-safety guarantee." },
    approach: { es: "La landing detalla cómo se reconoce y analiza el texto, qué significan los resultados y qué no puede asegurar la app. Privacidad, soporte y enlaces de tienda completan el recorrido.", en: "The landing explains how text is recognized and analyzed, what results mean, and what the app cannot guarantee. Privacy, support and store links complete the journey." },
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    languages: { es: ["Español", "inglés"], en: ["Spanish", "English"] },
    highlights: { es: ["Contenido de producto en español e inglés", "Explicación de OCR local y límites del análisis", "Soporte, privacidad y enlaces de descarga"], en: ["Product content in English and Spanish", "On-device OCR and analysis limitations explained", "Support, privacy and download links"] },
    links: [{ label: { es: "Abrir landing", en: "Open landing" }, href: "https://safe-bite-landing.vercel.app/es" }],
    relatedProjectSlug: "safebite",
  },
  {
    slug: "nox-notes-website", kind: "web", webType: "landing", name: "Landing de Nox Notes",
    category: { es: "Landing · React · Vite", en: "Landing page · React · Vite" },
    status: { es: "Sitio publicado", en: "Published website" },
    image: "/projects/landing-previews/nox-notes.webp",
    imageAlt: { es: "Landing de Nox Notes con su presentación visual", en: "Nox Notes landing page with its visual introduction" },
    summary: { es: "Un sitio de producto para presentar el espacio de escritura, sus funciones y la descarga de Nox Notes.", en: "A product site introducing Nox Notes’ writing space, features and download options." },
    challenge: { es: "El reto era trasladar a la web una app visual y tranquila, explicando a la vez qué queda en el dispositivo y qué requiere una cuenta.", en: "The challenge was bringing a calm, visual app to the web while explaining what stays on-device and what requires an account." },
    approach: { es: "La landing combina contenido bilingüe con páginas de soporte, privacidad y eliminación de cuenta. Está construida con React y Vite, con metadatos en el HTML inicial y contenido renderizado en cliente; si el posicionamiento orgánico se vuelve una prioridad, convendría prerenderizar o migrar a Next.js.", en: "The landing combines bilingual content with support, privacy and account-deletion pages. It is built with React and Vite, with metadata in the initial HTML and client-rendered content; if organic search becomes a priority, prerendering or a Next.js migration would be worth considering." },
    stack: ["React", "TypeScript", "Vite"],
    languages: { es: ["Español", "inglés"], en: ["Spanish", "English"] },
    highlights: { es: ["Funciones y personalización explicadas", "Contenido en español e inglés", "Páginas de soporte y privacidad"], en: ["Features and personalization explained", "English and Spanish content", "Support and privacy pages"] },
    links: [{ label: { es: "Abrir landing", en: "Open landing" }, href: "https://noxnotes-landing.vercel.app/" }],
    relatedProjectSlug: "nox-notes",
  },
  {
    slug: "glowwords-website", kind: "web", webType: "landing", name: "Landing de GlowWords",
    category: { es: "Landing · Next.js · SEO", en: "Landing page · Next.js · SEO" },
    status: { es: "Sitio informativo", en: "Product information site" },
    image: "/projects/landing-previews/glowwords.webp",
    imageAlt: { es: "Landing de GlowWords con una tarjeta de afirmaciones", en: "GlowWords landing page with an affirmation card" },
    summary: { es: "Una web bilingüe que presenta GlowWords, sus afirmaciones y citas, y sus opciones de personalización.", en: "A bilingual website introducing GlowWords, its affirmations and quotes, and its personalization options." },
    challenge: { es: "Hacer tangible una app de bienestar basada en contenido: explicar el uso diario, la personalización y el estado del producto sin prometer resultados clínicos.", en: "Making a content-based wellbeing app tangible by explaining daily use, personalization and product status without promising clinical outcomes." },
    approach: { es: "La landing presenta el producto en inglés y español y concentra soporte e información básica. Puede dar contexto y visibilidad al producto mientras continúa su desarrollo.", en: "The landing presents the product in English and Spanish and centralizes support and basic information. It can provide context and visibility while the app continues development." },
    stack: ["Next.js", "React", "TypeScript"],
    languages: { es: ["Español", "inglés"], en: ["Spanish", "English"] },
    highlights: { es: ["Contenido localizado para dos idiomas", "Presentación de categorías y temas", "Acceso central a soporte e información"], en: ["Localized content in two languages", "Categories and themes introduced", "Central access to support and product information"] },
    links: [{ label: { es: "Abrir landing", en: "Open landing" }, href: "https://glowwords-landing.vercel.app/" }],
    relatedProjectSlug: "glowwords",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
