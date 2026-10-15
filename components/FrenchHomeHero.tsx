import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import SeoArticleFigure from '@/components/SeoArticleFigure'
import { APP_NAME } from '@/lib/seo'
import { frenchHomeHero } from '@/lib/french-home'

export default function FrenchHomeHero() {
  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-white pb-14 pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="section-label">{APP_NAME} · Éditeur de texte pour macOS</p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-6xl">
            Notepad++ pour Mac :<br /><span className="gradient-text">une alternative native</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Retrouvez des outils familiers pour vos notes, journaux et fichiers de configuration. {APP_NAME} réunit les onglets, le mode colonne, la recherche avancée, les scripts de traitement et les aperçus de documents dans une application pour Mac.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Le projet officiel de Notepad++ est destiné à Windows. {APP_NAME} est un éditeur indépendant pour macOS, sans affiliation avec Notepad++ ; il n’exécute pas ses plugins Windows.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <AppStoreDownloadLink source="seo_french_home_hero" className="rounded-xl bg-brand-600 px-6 py-4 font-bold text-white shadow-sm transition hover:bg-brand-700">
              Télécharger sur le Mac App Store
            </AppStoreDownloadLink>
            <a href="#features" className="rounded-xl border border-gray-300 bg-white px-6 py-4 font-semibold text-gray-800 hover:border-brand-400">Voir les fonctions en action</a>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">Consultez la fiche App Store pour la compatibilité, le prix et les conditions d’essai. Certaines fonctions avancées nécessitent Pro.</p>
        </div>
        <SeoArticleFigure figure={frenchHomeHero} sourceLabel="Source" priority />
        <p className="mt-4 text-sm leading-6 text-gray-500">Captures réelles de notre application, réutilisées depuis nos guides. L’interface et les fichiers d’exemple sont en anglais ; les données sont fictives. Cliquez sur le lien sous chaque image pour la voir en taille réelle.</p>
      </div>
    </section>
  )
}
