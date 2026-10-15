import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import FrenchHomeHero from '@/components/FrenchHomeHero'
import FrenchHomeContent from '@/components/FrenchHomeContent'
import { getLandingDict } from '@/lib/i18n'
import { frenchHomeSeo, frenchHomeHero, frenchHomeWorkflows, frenchHomeFormats, frenchHomePipeline, frenchHomeZen, frenchHomeFaq } from '@/lib/french-home'
import { APP_NAME } from '@/lib/seo'
import { SITE_URL } from '@/lib/paths'

export default function FrenchHome() {
  const t = getLandingDict('fr')
  const links = [
    { label: 'Compatibilité', href: '#compatibilite' },
    { label: 'Fonctions', href: '#features' },
    { label: 'Aperçus', href: '#formats' },
    { label: 'Scripts', href: '#automation' },
    { label: 'Questions fréquentes', href: '#faq' },
  ]
  const screenshots = [frenchHomeHero, ...frenchHomeWorkflows.map(item => item.figure), ...frenchHomeFormats.map(item => item.figure), frenchHomePipeline, frenchHomeZen]

  return (
    <main lang="fr">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'SoftwareApplication',
        name: APP_NAME, operatingSystem: 'macOS', applicationCategory: 'ProductivityApplication',
        applicationSubCategory: 'TextEditor', description: frenchHomeSeo.description,
        keywords: frenchHomeSeo.keywords.join(', '), url: `${SITE_URL}/fr/`,
        inLanguage: 'fr', image: `${SITE_URL}/images/app-icon.webp`,
        screenshot: screenshots.map(figure => `${SITE_URL}${figure.src}`),
        featureList: ['Documents dans des onglets', 'Mode colonne', 'Recherche et remplacement par expressions régulières', 'Recherche multi-mots', 'Aperçus Markdown, JSON et SQL', 'Scripts intégrés et personnalisés', 'Traitement de dossiers avec aperçu', 'Sauvegardes et restauration des opérations'],
        author: { '@type': 'Person', name: 'David699' },
      }) }} />
      <Navbar t={{ ...t.nav, links }} locale="fr" platformLabel="pour macOS" menuLabel="Menu" />
      <FrenchHomeHero />
      <FrenchHomeContent />
      <div id="faq" className="scroll-mt-20"><FAQ t={frenchHomeFaq} /></div>
      <Footer t={{
        ...t.footer,
        tagline: 'Éditeur de texte pour Mac.\nOnglets · Colonnes · Recherche · Aperçus',
        navLinks: links.map(link => ({ ...link, href: `/fr/${link.href}` })),
        guideLinks: [
          { label: 'Notepad++ pour Mac : guide en français', href: '/fr/notepad-plus-plus-for-mac/' },
          { label: 'Comparer les éditeurs Mac (en anglais)', href: '/en/notepad-plus-plus-alternatives-for-mac/' },
          { label: 'Rechercher plusieurs mots (en anglais)', href: '/en/search-multiple-keywords-text-file-mac/' },
        ],
        trademark: `${APP_NAME} est un éditeur indépendant pour macOS, sans affiliation avec le projet officiel Notepad++.`,
        privacyLabel: 'Confidentialité (en anglais)', termsLabel: 'Conditions d’utilisation (en anglais)',
      }} />
    </main>
  )
}
