import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import SeoArticleFigure from '@/components/SeoArticleFigure'
import { APP_NAME } from '@/lib/seo'
import { APP_STORE_URL } from '@/lib/paths'
import { notepadAppStoreRating } from '@/lib/app-store-rating'
import { spanishHomeHero } from '@/lib/spanish-home'

export default function SpanishHomeHero() {
  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-white pb-14 pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="section-label">{APP_NAME} · Editor de texto para macOS</p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-6xl">
            Una alternativa a Notepad++<br /><span className="gradient-text">para Mac</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Trabaja con notas, registros y archivos de configuración en tu Mac. {APP_NAME} reúne pestañas, modo columna, búsqueda y reemplazo con expresiones regulares y búsqueda en carpetas en una aplicación para macOS.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <AppStoreDownloadLink source="seo_spanish_home_hero" className="rounded-xl bg-brand-600 px-6 py-4 font-bold text-white shadow-sm transition hover:bg-brand-700">
              Descargar en el Mac App Store
            </AppStoreDownloadLink>
            <a href="#features" className="rounded-xl border border-gray-300 bg-white px-6 py-4 font-semibold text-gray-800 hover:border-brand-400">Ver las funciones en acción</a>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Consulta en el App Store la compatibilidad, el precio y las condiciones de prueba vigentes.</p>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-semibold text-gray-700 underline underline-offset-4">
            {notepadAppStoreRating.score.toLocaleString('es', { minimumFractionDigits: 1 })} de {notepadAppStoreRating.maxScore} · {notepadAppStoreRating.ratingCount.toLocaleString('es')} valoraciones · App Store
          </a>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-600">Notepad++ es una aplicación para Windows. {APP_NAME} es un editor independiente para Mac y no ejecuta los plugins de Notepad++ para Windows.</p>
        </div>
        <SeoArticleFigure figure={spanishHomeHero} sourceLabel="Fuente" priority />
        <p className="mt-4 text-sm text-gray-500">Todas las imágenes de la aplicación son capturas reales ya utilizadas en nuestras guías. Muestran la interfaz en inglés y archivos ficticios de demostración.</p>
      </div>
    </section>
  )
}
