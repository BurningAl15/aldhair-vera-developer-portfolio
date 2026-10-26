# SEO, rastreo y analítica

## Configurado en el código

- Next.js genera `robots.txt` y `sitemap.xml` desde `src/app/robots.ts` y `src/app/sitemap.ts`.
- El sitemap enumera la portada y las páginas de proyectos en español e inglés.
- Las páginas publican título, descripción, canonical, enlaces `hreflang` y metadatos Open Graph/Twitter.
- Cada idioma genera HTML con su `lang` correcto.
- El icono del sitio está en `src/app/icon.svg` y Next lo añade al `<head>`.
- `llms.txt` guía a agentes hacia las páginas públicas y `portfolio-data.json` expone los datos bilingües de proyectos, experiencia y estudios desde la misma fuente del sitio.
- La selección inicial del idioma se hace en Netlify con el encabezado `Accept-Language`. El cambio manual se recuerda con una cookie. Las URLs y etiquetas `hreflang` mantienen cada versión accesible directamente.
- Search Console puede añadir su meta de verificación al definir `GOOGLE_SITE_VERIFICATION` durante la compilación.

## Requiere configuración antes del despliegue

Define estas variables en el entorno de compilación de Netlify:

```text
NEXT_PUBLIC_SITE_URL=https://<dominio-publico-de-este-portfolio>
GOOGLE_SITE_VERIFICATION=<token-de-verificacion-de-search-console>
```

`NEXT_PUBLIC_SITE_URL` debe ser el origen público exacto de este portfolio, sin una ruta como `/en/`. Si se omite, el código usa `https://aldhairvera-portfolio.netlify.app`.

Después del despliegue, añade `/sitemap.xml` en Google Search Console y verifica la propiedad. La meta de verificación opcional se configura desde Search Console; el token no se incluye en Git.

## Analítica

No hay un proveedor de analítica conectado en el código actual. No se envía telemetría a Google Analytics, Tag Manager, Plausible ni otro proveedor. Para activarla hace falta elegir el proveedor y configurar su identificador. Si se elige analítica que usa cookies o identificadores, añade también el aviso y la gestión de consentimiento y documenta el tratamiento en privacidad antes de habilitarla.
