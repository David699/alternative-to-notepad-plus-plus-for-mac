import Link from 'next/link'
import SeoArticleFigure from '@/components/SeoArticleFigure'
import { APP_NAME } from '@/lib/seo'
import { withBasePath } from '@/lib/paths'
import { frenchHomePipeline } from '@/lib/french-home'

export default function FrenchHomeAutomation() {
  return (
    <section id="automation" className="scroll-mt-20 bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="section-label">Des scripts prêts à l’emploi à vos propres règles</p>
        <h2 className="max-w-4xl text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">Automatisez le texte d’un fichier ou d’un dossier, avec aperçu et restauration</h2>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">{APP_NAME} propose des dizaines de scripts intégrés : supprimer des lignes vides, dédupliquer en conservant l’ordre, trier, extraire des liens ou des adresses e-mail, formater du JSON et convertir les noms. Une suite d’opérations peut aussi être conservée comme un traitement réutilisable, appelé pipeline dans l’application.</p>
        <SeoArticleFigure figure={frenchHomePipeline} sourceLabel="Source" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-bold text-gray-950">Commencez par un traitement intégré</h3>
            <p className="mt-3 leading-7 text-gray-600">La galerie propose par exemple un nettoyage de listes, une extraction de liens et une préparation d’adresses e-mail. Le traitement de listes enchaîne la suppression des espaces de fin de ligne, celle des lignes vides, la déduplication puis le tri. Chaque étape a un effet précis que vous pouvez vérifier.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <h3 className="text-xl font-bold text-gray-950">Ajoutez votre script, avec ou sans IA</h3>
            <p className="mt-3 leading-7 text-gray-600">Si votre règle n’existe pas, écrivez un petit script JavaScript, ou copiez un script intégré dans « My Scripts » pour l’adapter. Vous pouvez aussi demander de l’aide à « AI Script Assistant » après avoir configuré votre fournisseur et son API. Enregistrez votre règle pour la réutiliser ; relisez et testez tout code généré avant de l’appliquer.</p>
          </div>
        </div>
        <h3 className="mt-12 text-2xl font-bold text-gray-950">Choisissez les fichiers, prévisualisez, puis appliquez</h3>
        <p className="mt-3 max-w-3xl leading-7 text-gray-600">Ouvrez un dossier de travail, choisissez les types de fichiers et le script ou le pipeline. Le bouton « Preview » calcule les changements sans écrire sur le disque. Dans cette démonstration réelle, trois fichiers TXT sont nettoyés ; le fichier Markdown du même dossier est exclu par le filtre.</p>
        <div className="mt-6 grid items-start gap-8 lg:grid-cols-2">
          <SeoArticleFigure figure={{
            src: '/images/seo/script-automation/batch-diff-real.webp', width: 860, height: 295,
            alt: 'Aperçu réel du nettoyage de roster-east.txt : anciennes lignes à gauche et liste triée sans doublons à droite.',
            caption: 'Avant l’application : les lignes vides et les doublons disparaissent, puis les identifiants sont triés. Les fichiers sur le disque sont encore inchangés.',
            source: { label: 'Afficher la capture en taille réelle', href: '/images/seo/script-automation/batch-diff-real.webp' },
          }} sourceLabel="Source" />
          <SeoArticleFigure figure={{
            src: '/images/seo/script-automation/backups-real.webp', width: 532, height: 435,
            alt: 'Historique réel avec trois sauvegardes disponibles et le bouton Restore this operation.',
            caption: 'Après l’application : trois sauvegardes sont disponibles dans « Operation History ». Le bouton de restauration rétablit les fichiers de cette opération.',
            source: { label: 'Afficher la capture en taille réelle', href: '/images/seo/script-automation/backups-real.webp' },
          }} sourceLabel="Source" />
        </div>
        <p className="mt-6 max-w-3xl leading-7 text-gray-600">Les écritures du traitement par lots créent des sauvegardes, conservées pendant 7 jours. La restauration vérifie que les fichiers n’ont pas changé depuis l’opération ; un fichier modifié entre-temps ou ouvert avec des changements non enregistrés est ignoré. Vérifiez le résultat et les éventuels fichiers ignorés. Le traitement par lots, son historique et l’assistance IA font partie des fonctions avancées nécessitant Pro ou un essai donnant cet accès.</p>
        <p className="mt-5"><Link href={withBasePath('/en/automate-text-files-mac-scripts/')} className="font-semibold text-brand-700 underline underline-offset-4">Voir le tutoriel complet : scripts, aperçu, sauvegardes et restauration (en anglais) →</Link></p>
        <p className="mt-4 text-sm leading-7 text-gray-600">Les scripts traitent le texte fourni par l’application ; ils n’accèdent pas eux-mêmes aux dossiers ou au réseau. L’assistance IA est facultative et le fournisseur choisi applique ses propres conditions et éventuels frais.</p>
      </div>
    </section>
  )
}
