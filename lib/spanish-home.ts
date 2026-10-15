import { APP_NAME } from './seo'
import type { SeoArticleFigure } from './seo-articles'

export const spanishHomeSeo = {
  title: `Notepad++ para Mac: una alternativa nativa | ${APP_NAME}`,
  description: `¿Buscas Notepad++ para Mac? ${APP_NAME} ofrece pestañas, modo columna, expresiones regulares y vistas previas. Descárgalo en el Mac App Store.`,
  keywords: ['Notepad++ para Mac', 'alternativa a Notepad++ para Mac', 'Notepad Mac español', 'editor de texto para Mac', 'modo columna Mac', 'buscar y reemplazar en Mac'],
}

function screenshot(src: string, alt: string, caption: string, width = 2536, height = 1305): SeoArticleFigure {
  return { src, alt, caption, width, height, source: { label: 'Ver captura original', href: src } }
}

// Reuse real screenshots from the English homepage and existing format guides.
export const spanishHomeHero = screenshot(
  '/images/seo/notepad-mac-features/tabs-syntax-real.webp',
  `${APP_NAME} en Mac: varios archivos en pestañas, código JSON resaltado y un árbol de datos junto al editor.`,
  'Captura real: archivos de una carpeta de trabajo en pestañas y un JSON con su vista de estructura.',
)

export const spanishHomeWorkflows = [
  {
    title: 'Modo columna: cambia un bloque vertical de texto',
    body: 'Selecciona un rectángulo en varias líneas alineadas. En este ejemplo, el bloque marcado contiene cinco prefijos OLD: puedes sustituirlos por NEW sin seleccionar los identificadores ni los estados que aparecen a su derecha.',
    figure: screenshot('/images/seo/notepad-mac-features/column-selection-real.webp', `${APP_NAME} seleccionando el prefijo OLD en cinco filas con el modo columna.`, 'Selección real antes del cambio. Las columnas de caracteres no equivalen automáticamente a los campos de un CSV.'),
    href: '/en/column-mode-editor-for-mac/', label: 'Ver la guía de modo columna (en inglés)',
  },
  {
    title: 'Busca patrones y conserva la parte que necesitas',
    body: 'Las expresiones regulares permiten buscar un patrón en lugar de una palabra exacta. Aquí, customer_id=([0-9]+) encuentra un identificador y captura su número; client_id=$1 cambia el nombre del campo y conserva ese número. Revisa las coincidencias antes de reemplazar.',
    figure: screenshot('/images/seo/notepad-mac-features/regex-replace-real.webp', `${APP_NAME} con el panel de búsqueda y reemplazo: patrón customer_id y sustitución client_id con el número capturado.`, 'Panel real de búsqueda y reemplazo. La demostración encuentra cuatro registros; account_id e invoice_id no coinciden con el patrón.'),
    href: '/en/regex-find-replace-mac/', label: 'Ver ejemplos de búsqueda y reemplazo (en inglés)',
  },
  {
    title: 'Busca también en los archivos de una carpeta',
    body: 'Cuando las notas, los registros y la configuración están repartidos entre varios archivos, elige la carpeta y los tipos de archivo que quieres revisar. Así puedes buscar un campo fuera del documento activo.',
    figure: screenshot('/images/seo/notepad-mac-features/workspace-search-real.webp', `${APP_NAME} mostrando los controles de búsqueda en una carpeta y un resumen de coincidencias.`, 'Controles reales y resumen del ejemplo: 14 líneas coincidentes en cinco archivos ficticios.'),
    href: '/es/notepad-plus-plus-for-mac/', label: 'Leer la guía de Notepad++ para Mac en español',
  },
]

export const spanishHomeFormats = [
  {
    title: 'Markdown: comprueba el documento mientras escribes',
    body: 'Mantén el texto Markdown a un lado y su vista previa al otro. Comprueba encabezados, listas de tareas, tablas y bloques de código sin perder de vista el archivo original.',
    figure: screenshot('/images/seo/english-home/markdown-preview-real.webp', `${APP_NAME} editando una lista de publicación en Markdown con la vista previa a su lado.`, 'Captura real con una lista de tareas, una tabla y un bloque de código de demostración.'),
    href: '/en/markdown-editor-with-live-preview-for-mac/', label: 'Guía de Markdown (en inglés)',
  },
  {
    title: 'SQL: consulta la estructura al pasar el puntero',
    body: 'Al situar el puntero sobre una sentencia SQL compatible, aparece un pequeño panel de vista previa. En el ejemplo de CREATE TABLE puedes revisar las columnas de la tabla mientras lees el archivo, sin ejecutar la sentencia.',
    figure: screenshot('/images/seo/json-sql/sql-hover-create-real.webp', `${APP_NAME} con un panel flotante que muestra las columnas de una sentencia SQL CREATE TABLE.`, 'Captura real del panel de vista previa SQL al pasar el puntero sobre el texto.', 1050, 600),
    href: '/en/sql-file-viewer-mac/', label: 'Guía del visor SQL (en inglés)',
  },
]

export const spanishHomePipeline = screenshot(
  '/images/seo/english-home/pipeline-gallery-real.webp',
  `${APP_NAME} mostrando la galería de secuencias para limpiar listas y extraer enlaces.`,
  'Galería real de operaciones integradas. No se muestran tiempos de ejecución ni resultados simulados.',
)

export const spanishHomeZen = screenshot(
  '/images/seo/lightweight-editor/zen-workspace-real.webp',
  `${APP_NAME} en modo Zen mostrando un archivo TXT de notas del proyecto.`,
  'Modo Zen real con un archivo TXT ficticio; la captura ya se utiliza en nuestra guía de editores ligeros.',
)

export const spanishHomeFaq = {
  sectionLabel: 'Antes de descargar',
  headline: 'Preguntas sobre Notepad++ en Mac',
  sub: `Comprueba si las funciones de ${APP_NAME} cubren el trabajo que haces con tus archivos.`,
  items: [
    { q: '¿Existe una versión oficial de Notepad++ para Mac?', a: `El proyecto oficial de Notepad++ distribuye una aplicación para Windows. ${APP_NAME} es un editor independiente para macOS; no es una versión oficial de Notepad++ ni está vinculado a ese proyecto.` },
    { q: `¿Necesito Windows para usar ${APP_NAME}?`, a: `No. ${APP_NAME} es una aplicación para macOS y se distribuye en el Mac App Store. Consulta allí los requisitos de compatibilidad antes de descargarla.` },
    { q: '¿Puedo usar mis plugins o macros de Notepad++?', a: `${APP_NAME} no ejecuta los plugins de Windows de Notepad++ ni importa sus macros grabadas. Prueba las funciones integradas de edición y automatización con una copia de tus archivos para comprobar si cubren tus tareas.` },
    { q: '¿Puedo trabajar con TXT, JSON, Markdown y SQL?', a: 'Sí. Puedes editar archivos de texto y utilizar las herramientas disponibles para cada formato. El JSON de la captura se muestra junto a un árbol de datos; Markdown tiene vista previa y SQL ofrece paneles al pasar el puntero sobre sentencias compatibles.' },
    { q: '¿Es gratis? ¿Qué funciones requieren Pro?', a: 'El Mac App Store muestra las condiciones vigentes de prueba, compra y compatibilidad. Algunas funciones avanzadas requieren Pro; comprueba la ficha de la aplicación para ver qué incluye antes de decidir.' },
    { q: '¿Necesito configurar IA para editar mis archivos?', a: 'No. Puedes editar archivos locales sin configurar un proveedor de IA. Si activas esa asistencia opcional, el servicio que elijas tiene sus propias condiciones, tratamiento de datos y posibles costes.' },
  ],
}
