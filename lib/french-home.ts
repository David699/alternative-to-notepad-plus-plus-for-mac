import { APP_NAME } from './seo'
import type { SeoArticleFigure } from './seo-articles'

export const frenchHomeSeo = {
  title: `Notepad++ pour Mac : une alternative native | ${APP_NAME}`,
  description: `Notepad++ pour Mac ? Découvrez ${APP_NAME} : onglets, mode colonne, scripts intégrés et personnalisés, aperçu Markdown. Sur le Mac App Store.`,
  keywords: ['Notepad++ pour Mac', 'alternative à Notepad++ pour Mac', 'Notepad pour Mac', 'éditeur de texte Mac', 'mode colonne Mac', 'recherche multi-mots Mac', 'scripts de traitement de texte Mac'],
}

function screenshot(src: string, alt: string, caption: string, width = 2536, height = 1305): SeoArticleFigure {
  return { src, alt, caption, width, height, source: { label: 'Afficher la capture en taille réelle', href: src } }
}

// Existing real App captures only: no copied image files or redrawn interfaces.
export const frenchHomeHero = screenshot(
  '/images/seo/notepad-mac-features/tabs-syntax-real.webp',
  `${APP_NAME} sur Mac : plusieurs fichiers ouverts dans des onglets, un JSON dans l’éditeur et son arborescence à droite.`,
  'Capture réelle : un dossier de démonstration, des documents dans des onglets et un fichier JSON avec son arborescence.',
)

export const frenchHomeWorkflows = [
  {
    title: 'Modifier une colonne de texte sans sélectionner toute la ligne',
    body: 'Le mode colonne permet de sélectionner un rectangle sur plusieurs lignes alignées. Ici, cinq préfixes OLD sont sélectionnés : remplacez-les par NEW sans sélectionner les identifiants et les états à droite. Ce mode sélectionne des positions de caractères ; il ne reconnaît pas automatiquement les champs d’un CSV.',
    figure: screenshot('/images/seo/notepad-mac-features/column-selection-real.webp', `${APP_NAME} en mode colonne, avec le préfixe OLD sélectionné sur cinq lignes.`, 'Capture réelle avant la modification : une sélection verticale dans un petit fichier de texte aligné.'),
    href: '/en/column-mode-editor-for-mac/', label: 'Tutoriel du mode colonne (en anglais)',
  },
  {
    title: 'Rechercher un motif et conserver les nombres lors du remplacement',
    body: 'Une expression régulière décrit un motif à rechercher. Dans cet exemple, customer_id=([0-9]+) trouve un champ et mémorise son nombre ; client_id=$1 change le nom du champ en conservant ce nombre. Vérifiez les correspondances avant de remplacer, surtout dans un fichier de configuration.',
    figure: screenshot('/images/seo/notepad-mac-features/regex-replace-real.webp', `${APP_NAME} avec une recherche customer_id et le remplacement client_id=$1 dans le panneau de recherche.`, 'Panneau réel : quatre correspondances pour customer_id. Les champs account_id et invoice_id ne correspondent pas au motif.'),
    href: '/en/regex-find-replace-mac/', label: 'Exemples de recherche et remplacement (en anglais)',
  },
  {
    title: 'Trouver plusieurs mots, même dans un ordre différent',
    body: 'Dans un journal, payment timeout et timeout during payment peuvent signaler le même problème. Le mode multi-mots « AND » exige que tous les mots soient présents, sur la même ligne ou dans le même paragraphe. Saisissez de 2 à 8 mots séparés par des espaces, dans n’importe quel ordre. Les lignes vides séparent les paragraphes. Ces modes nécessitent Pro ou un essai donnant accès à la fonction et ne permettent pas le remplacement.',
    figure: screenshot('/images/seo/multi-keyword-search/line-real.webp', `${APP_NAME} recherchant payment timeout avec le mode Multi-Keyword AND Line ; le compteur indique la première des deux lignes trouvées.`, 'Capture réelle : le compteur 1 / 2 indique deux lignes contenant les deux mots, y compris celle où leur ordre est inversé.', 1640, 850),
    href: '/en/search-multiple-keywords-text-file-mac/', label: 'Comparer la recherche par ligne et par paragraphe (en anglais)',
  },
]

export const frenchHomeFormats = [
  {
    title: 'Markdown : le texte et l’aperçu défilent ensemble',
    body: 'Gardez le texte source à gauche et le document rendu à droite. Activez le petit bouton en forme de maillon pour synchroniser leur défilement. Le document d’exemple réunit une liste de tâches, un tableau, un diagramme et une photo. Les outils d’image permettent aussi de recadrer, faire pivoter ou redimensionner une image locale depuis l’aperçu.',
    figure: screenshot('/images/seo/markdown-workbench/overview-real.webp', `${APP_NAME} avec le texte Markdown à gauche et l’aperçu à droite : tâches, tableau, diagramme et photo de montagne.`, 'Capture réelle de notre document Markdown de démonstration. Le bouton de synchronisation se trouve en haut de l’éditeur, près de la séparation.', 2536, 1302),
    href: '/en/markdown-editor-for-mac-2026/', label: 'Voir la synchronisation et les outils d’image (en anglais)',
  },
  {
    title: 'SQL : consulter un aperçu au survol',
    body: 'Placez le pointeur sur une instruction SQL compatible pour afficher un petit panneau de prévisualisation. Ici, CREATE TABLE présente les colonnes et leurs types. Cet aperçu aide à lire le fichier ; il n’exécute pas la requête et ne se connecte pas à une base de données.',
    figure: screenshot('/images/seo/json-sql/sql-hover-create-real.webp', `${APP_NAME} affichant au survol un panneau avec les colonnes d’une instruction SQL CREATE TABLE.`, 'Capture réelle du panneau SQL au survol. Les noms et les données utilisés pour la démonstration sont fictifs.', 1050, 600),
    href: '/en/sql-file-viewer-mac/', label: 'Ouvrir et lire un fichier SQL sur Mac (en anglais)',
  },
]

export const frenchHomePipeline = screenshot(
  '/images/seo/english-home/pipeline-gallery-real.webp',
  `${APP_NAME} affichant sa galerie d’opérations de traitement de texte : nettoyage, tri et extraction.`,
  'Galerie réelle : sept traitements prêts à l’emploi, composés de plusieurs scripts intégrés.',
)

export const frenchHomeZen = screenshot(
  '/images/seo/lightweight-editor/zen-workspace-real.webp',
  `${APP_NAME} en mode Zen avec un fichier TXT de notes et les panneaux habituels masqués.`,
  'Capture réelle du mode Zen dans une fenêtre normale. Le fichier reste un document TXT ; seul l’affichage de l’éditeur change.',
)

export const frenchHomeFaq = {
  sectionLabel: 'Avant de choisir votre éditeur',
  headline: 'Questions sur Notepad++ pour Mac',
  sub: `Compatibilité, formats et conditions d’utilisation de ${APP_NAME}.`,
  items: [
    { q: 'Existe-t-il une version officielle de Notepad++ pour Mac ?', a: `Le projet officiel de Notepad++ fournit un éditeur pour Windows. Les ports communautaires pour d’autres systèmes sont des projets distincts. ${APP_NAME} est une application indépendante pour macOS, sans affiliation avec le projet Notepad++.` },
    { q: `Faut-il installer Windows pour utiliser ${APP_NAME} ?`, a: `Non. ${APP_NAME} fonctionne sur macOS. Téléchargez l’application depuis le Mac App Store et vérifiez les exigences système indiquées sur sa fiche.` },
    { q: 'Puis-je retrouver mes fichiers et mes plugins Notepad++ ?', a: 'Vous pouvez ouvrir vos fichiers de texte compatibles dans l’application. Cela ne transfère pas les réglages, les macros enregistrées ou les plugins Windows de Notepad++. Vérifiez séparément les fonctions dont votre travail dépend.' },
    { q: 'Quel bloc-notes choisir pour un simple fichier TXT ?', a: `TextEdit en mode texte brut est un point de départ pour un fichier occasionnel. Essayez ${APP_NAME} si vous avez besoin de plusieurs documents dans des onglets, d’une sélection en colonne ou de recherches plus précises.` },
    { q: 'Puis-je ouvrir des fichiers JSON, Markdown et SQL ?', a: 'Oui. Le JSON peut être exploré dans une arborescence, Markdown dispose d’un aperçu à côté du texte et les instructions SQL compatibles affichent un panneau au survol. Lire un fichier SQL n’exécute pas son contenu.' },
    { q: 'Comment chercher plusieurs mots dans le même paragraphe ?', a: 'Choisissez le mode multi-mots AND par paragraphe et saisissez de 2 à 8 mots séparés par des espaces. Tous doivent figurer dans le même paragraphe, sans ordre imposé. Une ligne vide sépare deux paragraphes. La fonction nécessite Pro ou un essai donnant cet accès et ne fait pas de remplacement.' },
    { q: 'L’application est-elle entièrement gratuite ?', a: 'Vérifiez le prix, les conditions d’essai et les achats intégrés sur le Mac App Store. Certaines fonctions avancées nécessitent Pro : ne supposez pas que toutes les fonctions présentées sont incluses gratuitement.' },
    { q: 'Puis-je automatiser mes propres règles et traiter un dossier ?', a: 'Oui. Vous pouvez réutiliser les scripts intégrés, enregistrer un script JavaScript personnel ou demander de l’aide à l’assistant IA configuré avec votre fournisseur. Le traitement par lots propose un aperçu sans écriture, des sauvegardes lors des modifications et une restauration depuis l’historique. Les sauvegardes sont conservées 7 jours ; les fichiers modifiés entre-temps sont ignorés lors de la restauration. Ces fonctions avancées nécessitent Pro ou un essai donnant cet accès.' },
    { q: 'L’IA est-elle obligatoire pour éditer mes fichiers ?', a: 'Non. L’édition locale ne nécessite pas de fournisseur d’IA. Pour utiliser l’assistance facultative, configurez votre fournisseur et son API, puis vérifiez les réponses. Le service choisi applique ses propres conditions, règles de traitement des données et éventuels frais.' },
  ],
}
