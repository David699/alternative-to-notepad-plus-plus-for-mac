import Link from 'next/link'
import FrenchHomeAutomation from '@/components/FrenchHomeAutomation'
import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import SeoArticleFigure from '@/components/SeoArticleFigure'
import { APP_NAME } from '@/lib/seo'
import { withBasePath } from '@/lib/paths'
import { frenchHomeWorkflows, frenchHomeFormats, frenchHomeZen } from '@/lib/french-home'

export default function FrenchHomeContent() {
  return (
    <>
      <section id="compatibilite" className="scroll-mt-20 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Notepad++ fonctionne-t-il sur Mac ?</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">La version officielle de Notepad++ est conçue pour Windows. Pour travailler directement sur macOS, vous pouvez choisir un éditeur Mac indépendant comme {APP_NAME}. Si votre travail dépend d’un plugin ou d’une macro Notepad++ précise, vérifiez sa compatibilité avant de changer d’outil : ouvrir les mêmes fichiers ne garantit pas les mêmes extensions.</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-600"><a href="https://github.com/notepad-plus-plus/notepad-plus-plus/blob/master/SUPPORTED_SYSTEM.md" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline underline-offset-4">Systèmes pris en charge par le projet officiel</a> · <Link href={withBasePath('/fr/notepad-plus-plus-for-mac/')} className="font-semibold text-brand-700 underline underline-offset-4">Notre guide en français</Link></p>
        </div>
      </section>

      <section id="features" className="scroll-mt-20 bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label">Des fichiers, des exemples concrets</p>
          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Onglets, sélection en colonne et recherche avancée</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">Gardez vos notes, journaux et configurations dans des onglets distincts. La capture initiale montre aussi un dossier de travail et un JSON avec sa coloration syntaxique et son arborescence. Pour retrouver un texte au-delà du document actif, utilisez la recherche dans les fichiers d’un dossier.</p>
          <div className="mt-12 space-y-16">
            {frenchHomeWorkflows.map(item => (
              <article key={item.title}>
                <h3 className="text-2xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 max-w-3xl leading-7 text-gray-600">{item.body}</p>
                <SeoArticleFigure figure={item.figure} sourceLabel="Source" />
                <Link href={withBasePath(item.href)} className="mt-4 inline-block font-semibold text-brand-700 underline underline-offset-4">{item.label} →</Link>
              </article>
            ))}
          </div>
          <div className="mt-14 rounded-2xl border border-brand-200 bg-white p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-950">Essayez ces outils avec vos propres fichiers</h3>
            <p className="mt-3 leading-7 text-gray-700">Ouvrez une copie d’un TXT ou d’un journal, recherchez quelques mots, puis enregistrez le résultat dans un nouveau fichier. Vérifiez les fonctions et leurs conditions d’accès avant de choisir votre éditeur.</p>
            <AppStoreDownloadLink source="seo_french_home_workflows" className="mt-5 inline-block rounded-xl bg-brand-600 px-6 py-3 font-bold text-white hover:bg-brand-700">Découvrir {APP_NAME} sur le Mac App Store</AppStoreDownloadLink>
          </div>
        </div>
      </section>

      <section id="formats" className="scroll-mt-20 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="section-label">Du texte à sa représentation</p>
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Aperçus Markdown, JSON et SQL</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">L’arborescence JSON apparaît dans la première capture. Les vues ci-dessous illustrent deux autres usages : relire un document Markdown et comprendre une instruction SQL sans l’exécuter.</p>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {frenchHomeFormats.map(item => (
              <article key={item.title}>
                <h3 className="text-xl font-bold text-gray-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{item.body}</p>
                <SeoArticleFigure figure={item.figure} sourceLabel="Source" />
                <Link href={withBasePath(item.href)} className="mt-4 inline-block font-semibold text-brand-700 underline underline-offset-4">{item.label} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FrenchHomeAutomation />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Lire et écrire avec moins de panneaux</h2>
          <p className="mt-4 max-w-3xl leading-7 text-gray-600">Passez en mode Zen pour donner plus de place au document. Le mode Minimal propose également quelques réglages de lisibilité. Revenez à la vue habituelle pour retrouver les onglets et les outils.</p>
          <SeoArticleFigure figure={frenchHomeZen} sourceLabel="Source" />
          <p className="mt-5 text-sm leading-7 text-gray-600">Vous comparez encore les possibilités ? Consultez notre <Link href={withBasePath('/fr/notepad-plus-plus-for-mac/')} className="font-semibold text-brand-700 underline underline-offset-4">guide Notepad++ pour Mac en français</Link> ou la <Link href={withBasePath('/en/notepad-plus-plus-alternatives-for-mac/')} className="font-semibold text-brand-700 underline underline-offset-4">comparaison des éditeurs Mac (en anglais)</Link>.</p>
        </div>
      </section>

      <section id="download" className="scroll-mt-20 bg-gray-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Téléchargez {APP_NAME} pour Mac</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-300">Testez vos fichiers de texte et vos tâches habituelles dans un éditeur pour macOS. Consultez le Mac App Store pour le prix, la compatibilité, les conditions d’essai et les fonctions nécessitant Pro.</p>
          <AppStoreDownloadLink source="seo_french_home_download" className="mt-8 inline-block rounded-xl bg-white px-6 py-4 font-bold text-gray-950 hover:bg-gray-100">Télécharger sur le Mac App Store</AppStoreDownloadLink>
        </div>
      </section>
    </>
  )
}
