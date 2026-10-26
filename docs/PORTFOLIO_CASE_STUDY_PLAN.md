# Portfolio: inventario y documentación de proyectos

Objetivo: atraer oportunidades de desarrollo móvil, web y producto con evidencia concreta del trabajo. La vitrina debe privilegiar pocos casos completos y enlazar a productos que se puedan probar.

## Contenido recuperado y contraste de fuentes

La migración a Next.js conserva el inventario de la web/mobile anterior en `src/constants/index.ts`, además de sus imágenes, enlaces y descripciones. El nuevo catálogo vive en `src/data/projects.ts`; el historial laboral, especialidades, tecnologías, formación y redes está en `src/data/profile.ts`.

- El catálogo actual contiene 24 fichas: productos móviles, landings relacionadas y proyectos web/mobile anteriores.
- El perfil contiene 21 puestos entre web/mobile y juegos/XR, con el historial de juegos desde 2018 separado de la lista de productos.
- La web/mobile anterior confirma tecnologías y roles como React, Redux, React Query, TypeScript, GraphQL, Node.js y Java para Subterra, además de Material UI, Sass, jQuery, MongoDB y PostgreSQL.
- El sitio de juegos/XR amplía la trayectoria profesional, formación y ocho recomendaciones originales. Se importaron las ocho recomendaciones con extractos breves, fechas localizadas y enlaces a los perfiles de quienes las escribieron; los proyectos individuales de videojuegos siguen en su sitio especializado.
- Las recomendaciones de `src/constants/index.ts` eran ejemplos de plantilla y no se reutilizaron.
- La paleta antigua de web/mobile está definida en `tailwind.config.cjs` y `src/index.css`: fondo `#050816`, superficies `#100d25`/`#151030`, violeta `#804dee`, verde/cian `#00cea8` y lavanda `#aaa6c3`. Se recuperó para el sitio nuevo conservando su estructura actual.
- Los proyectos antiguos aparecen como archivo. Sus enlaces se conservaron de la web anterior y deben comprobarse antes de promocionarlos como demos activas.
- Quedaron dos imágenes huérfanas en los assets antiguos (`Voting` y `Frontend-makeIt`) sin una ficha de proyecto asociada. Se documentan aquí para clasificar con Aldhair antes de mostrarlas.
- La descripción laboral de TGA se amplió con coordinación técnica, revisiones de código, backend Strapi e interfaces responsivas, a partir del sitio de juegos/XR.
- La descripción de TSC se amplió con los datos verificables de la migración iOS/Android, alineación espacial, QR y modo offline. No se añadieron fichas de esos productos.
- Subterra se actualizó para explicar que Java y Node.js se usaron en AWS Lambda, junto con React, GraphQL y AWS. Food Ya conserva el backend Node.js/Express y MongoDB confirmado por Aldhair.

La web/mobile anterior usaba un portafolio 3D en React; el portfolio de videojuegos es un sitio separado. Aquí solo se presenta como enlace especializado y como contexto de experiencia/tecnologías, no se importan sus fichas de juegos.

El inventario migrado conserva descripciones cortas basadas en el texto previo. Los casos extendidos de producto usan la ficha de Cozy Pomodoro, SafeBite, Nox Notes y Fast Task Manager; no se fabrican retos, métricas ni resultados para los proyectos históricos.

## Modelo para cada caso

Antes de publicar, completar y confirmar:

1. **Producto y estado:** publicado, beta, en desarrollo o archivado; plataformas y enlaces de tienda actuales.
2. **Personas y problema:** quién lo usa y qué situación mejora.
3. **Mi aporte:** responsabilidades propias frente al trabajo de otras personas o servicios.
4. **Decisiones técnicas:** arquitectura y decisiones relevantes, no solo una lista de tecnologías.
5. **Resultado verificable:** uso, tiempo ahorrado, estabilidad, adopción u otro dato que podamos respaldar. Si no hay métricas, explicar el alcance entregado sin inventarlas.
6. **Evidencia visual:** capturas actuales, mockups propios y permiso para publicar cualquier material de clientes.
7. **Enlaces:** demo, producto, tiendas y repositorio público solo cuando corresponda.
8. **Idiomas:** versión completa en español e inglés; título y descripción propios para búsquedas y redes.

## Orden inicial

### Casos principales propuestos

| Proyecto | Base disponible | Confirmación antes de ampliar el caso |
|---|---|---|
| Cozy Pomodoro | Flutter; temporizador, audio, temas, widgets y Live Activities; enlaces de ambas tiendas | Revisar capturas actuales y decidir cómo etiquetar macOS, que sigue en pruebas |
| SafeBite | React Native/Expo, OCR de etiquetas, Supabase y compras; el usuario confirmó publicación en iOS además de Android | Confirmar URLs públicas de las dos tiendas y seleccionar capturas del flujo real |
| Nox Notes | Modo invitado, notas/listas, SQLite, sincronización opcional y bloqueo biométrico | Confirmar plataformas y enlaces públicos vigentes; usar capturas recientes, no arte de marca como si fuera una pantalla |

### Proyectos que pueden ampliar la vitrina

| Proyecto | Por qué podría aportar | Falta verificar |
|---|---|---|
| GlowWords | Flutter/Firebase, widgets y contenido multilingüe | Estado de publicación, disponibilidad actual, capturas reales y contribución exacta |
| PocketBudget | Producto financiero móvil y uso sin conexión | Madurez, tiendas/demo, alcance entregado y política sobre datos de ejemplo |
| Habit Grow | Producto de hábitos y persistencia local | Estado, pantalla actual, disponibilidad y si debe ser público |
| ShipKit | Herramienta de escritorio y creación de recursos visuales | Producto ejecutable/demo, alcance implementado, instalador y capturas |
| App Factory CLI | Automatización de arranque de apps Flutter/Expo | Estado de mantenimiento, documentación pública y ejemplos reproducibles |
| ShipKit Mobile Dashboard | Operación y seguimiento de publicaciones desde web | Estado, URL de demo, qué datos son ficticios y medidas de seguridad |
| Mix2Word / 2Pics1Word | Proyecto Unity; muestra variedad de stack móvil | Estado actual, nombre público definitivo, build/demo y capturas aprobadas |

### Experiencia en equipos y clientes

Subterra AI, GlobalTask, MASuno y Siente Móvil pueden aparecer en una sección de experiencia, separados de los productos propios. Antes, confirmar fechas, títulos, atribución, confidencialidad y qué resultados se pueden divulgar.

## Reglas de publicación

- No mostrar métricas estimadas como resultados reales.
- No presentar una app como publicada si no abre desde su enlace público actual.
- No atribuir al portfolio capturas de landing, mockups o arte de marca como si fueran pantallas de producto.
- Mantener el contenido de cada proyecto en una fuente única: `src/data/projects.ts`.
- Las imágenes subidas al sitio deben ser assets aprobados, de tamaño razonable y con texto alternativo descriptivo.
