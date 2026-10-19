import { appStoreOfferForPath } from '@/lib/app-store-offer'
import { notepadAppStoreAggregateRating } from '@/lib/app-store-rating'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import SpanishHomeHero from '@/components/SpanishHomeHero'
import SpanishHomeContent from '@/components/SpanishHomeContent'
import { getLandingDict } from '@/lib/i18n'
import { spanishHomeSeo, spanishHomeHero, spanishHomeWorkflows, spanishHomeFaq } from '@/lib/spanish-home'
import { APP_NAME } from '@/lib/seo'
import { SITE_URL } from '@/lib/paths'

export default function SpanishHome() {
  const t = getLandingDict('es')
  const links = [
    { label: 'Funciones', href: '#features' },
    { label: 'Formatos', href: '#formatos' },
    { label: 'Automatización', href: '#automation' },
    { label: 'Preguntas frecuentes', href: '#faq' },
  ]

  return (
    <main lang="es">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'SoftwareApplication',
        offers: appStoreOfferForPath('/es/'), aggregateRating: notepadAppStoreAggregateRating,
        name: APP_NAME, operatingSystem: 'macOS', applicationCategory: 'ProductivityApplication',
        applicationSubCategory: 'TextEditor', description: spanishHomeSeo.description,
        keywords: spanishHomeSeo.keywords.join(', '), url: `${SITE_URL}/es/`,
        inLanguage: 'es', image: `${SITE_URL}/images/app-icon.webp`,
        screenshot: [spanishHomeHero.src, ...spanishHomeWorkflows.map(item => item.figure.src)].map(src => `${SITE_URL}${src}`),
        featureList: ['Edición en pestañas', 'Modo columna', 'Búsqueda con expresiones regulares', 'Búsqueda en carpetas', 'Vistas previas de Markdown y SQL', 'Limpieza de texto por lotes'],
        author: { '@type': 'Person', name: 'David699' },
      }) }} />
      <Navbar t={{ ...t.nav, links }} locale="es" platformLabel="para macOS" menuLabel="Menú" />
      <SpanishHomeHero />
      <SpanishHomeContent />
      <div id="faq" className="scroll-mt-20"><FAQ t={spanishHomeFaq} /></div>
      <Footer t={{
        ...t.footer,
        tagline: 'Edición de texto para Mac.\nPestañas · Columnas · Búsqueda · Vistas previas',
        navLinks: links.map(link => ({ ...link, href: `/es/${link.href}` })),
        guideLinks: [
          { label: 'Notepad++ para Mac: guía en español', href: '/es/notepad-plus-plus-for-mac/' },
          { label: 'Comparar editores para Mac (en inglés)', href: '/en/notepad-plus-plus-alternatives-for-mac/' },
          { label: 'Visor y editor de JSON (en inglés)', href: '/en/open-and-validate-json-jsonc-json5-on-mac/' },
        ],
        trademark: `${APP_NAME} es un editor independiente para macOS. No está afiliado al proyecto oficial de Notepad++.`,
        privacyLabel: 'Política de privacidad (en inglés)', termsLabel: 'Condiciones de uso (en inglés)',
      }} />
    </main>
  )
}
