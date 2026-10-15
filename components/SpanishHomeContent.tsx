import Link from 'next/link'
import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import SeoArticleFigure from '@/components/SeoArticleFigure'
import { APP_NAME } from '@/lib/seo'
import { withBasePath } from '@/lib/paths'
import { spanishHomeWorkflows, spanishHomeFormats, spanishHomePipeline, spanishHomeZen } from '@/lib/spanish-home'

export default function SpanishHomeContent() {
  return (
    <>
      <section id="features" className="scroll-mt-20 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label">Tus archivos, en una misma ventana</p>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Funciones conocidas para el trabajo diario con texto</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">Abre varios documentos en pestañas y mantén a mano los archivos de tu carpeta de trabajo. La primera captura muestra un JSON con resaltado de sintaxis y un árbol para explorar sus datos. Estos son otros ejemplos de edición en la aplicación.</p>
          <div className="mt-12 space-y-16">
            {spanishHomeWorkflows.map((item) => (
              <article key={item.title}>
                <h3 className="text-2xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-gray-600">{item.body}</p>
                <SeoArticleFigure figure={item.figure} sourceLabel="Fuente" />
                <Link href={withBasePath(item.href)} className="mt-4 inline-block font-semibold text-brand-700 underline underline-offset-4">{item.label} →</Link>
              </article>
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-brand-200 bg-brand-50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-950">Prueba tus tareas habituales en {APP_NAME}</h3>
            <p className="mt-3 leading-7 text-gray-700">Empieza con una copia de un archivo TXT, un registro o una configuración. Comprueba cómo se abre, cómo buscas y cómo queda el archivo guardado.</p>
            <AppStoreDownloadLink source="seo_spanish_home_workflows" className="mt-5 inline-block rounded-xl bg-brand-600 px-6 py-3 font-bold text-white hover:bg-brand-700">Descargar la aplicación para Mac</AppStoreDownloadLink>
          </div>
        </div>
      </section>

      <section id="formatos" className="scroll-mt-20 bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label">Más que notas de texto</p>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Lee el formato y comprueba su estructura</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">Además del texto sin formato, las vistas específicas te ayudan a revisar documentos y datos. La vista de JSON aparece en la captura inicial; aquí puedes ver Markdown y SQL.</p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {spanishHomeFormats.map((item) => (
              <article key={item.title}>
                <h3 className="text-xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.body}</p>
                <SeoArticleFigure figure={item.figure} sourceLabel="Fuente" />
                <Link href={withBasePath(item.href)} className="mt-4 inline-block font-semibold text-brand-700 underline underline-offset-4">{item.label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="automation" className="scroll-mt-20 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label">Para las tareas que se repiten</p>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Reutiliza los pasos de limpieza de una lista</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">La galería de flujos de trabajo, llamada Pipeline Gallery en la captura, agrupa operaciones como quitar líneas vacías, eliminar duplicados, ordenar elementos y extraer enlaces. Revisa los pasos y pruébalos en una copia antes de aplicarlos a tus documentos.</p>
          <SeoArticleFigure figure={spanishHomePipeline} sourceLabel="Fuente" />
          <div id="text-cleaning" className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-xl font-bold text-gray-950">Revisa los cambios antes de aplicarlos</h3>
              <p className="mt-3 leading-7 text-gray-600">En el procesamiento por lotes puedes examinar las diferencias antes de aplicar una operación a varios archivos. Para ver un ejemplo paso a paso, consulta la <Link href={withBasePath('/en/batch-text-processing-mac/')} className="font-semibold text-brand-700 underline underline-offset-4">guía de procesamiento por lotes (en inglés)</Link>.</p>
            </div>
            <div id="ai" className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <h3 className="text-xl font-bold text-gray-950">IA opcional para texto y scripts</h3>
              <p className="mt-3 leading-7 text-gray-600">Si la necesitas, configura tu proveedor de IA para ayudarte con texto o scripts y revisa su respuesta antes de usarla. La edición local funciona sin esa configuración. Cada servicio externo tiene sus propias condiciones y posibles costes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Concéntrate en el documento con el modo Zen</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">Reduce los controles alrededor del archivo cuando solo quieras leer o escribir. La captura muestra unas notas TXT en el modo Zen; puedes volver a las herramientas de edición cuando las necesites.</p>
          <SeoArticleFigure figure={spanishHomeZen} sourceLabel="Fuente" />
          <p className="mt-5 text-sm leading-7 text-gray-600">¿Todavía estás eligiendo editor? Consulta nuestra <Link href={withBasePath('/es/notepad-plus-plus-for-mac/')} className="font-semibold text-brand-700 underline underline-offset-4">guía en español</Link> o la <Link href={withBasePath('/en/notepad-plus-plus-alternatives-for-mac/')} className="font-semibold text-brand-700 underline underline-offset-4">comparación de editores para Mac (en inglés)</Link>.</p>
        </div>
      </section>

      <section id="download" className="scroll-mt-20 bg-gray-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Descarga {APP_NAME} para Mac</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">Lleva tus notas, archivos de configuración y tareas de texto a una aplicación para macOS. Consulta en el Mac App Store las condiciones vigentes y comprueba qué funciones se incluyen en Pro.</p>
          <AppStoreDownloadLink source="seo_spanish_home_download" className="mt-8 inline-block rounded-xl bg-white px-6 py-4 font-bold text-gray-950 hover:bg-gray-100">Ver {APP_NAME} en el Mac App Store</AppStoreDownloadLink>
        </div>
      </section>
    </>
  )
}
