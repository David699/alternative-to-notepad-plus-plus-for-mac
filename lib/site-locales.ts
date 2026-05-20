import { SITE_URL } from '@/lib/paths'

export const APP_SUPPORTED_LOCALE_SLUGS = [
  'de',
  'es',
  'fr',
  'it',
  'ja',
  'ko',
  'pt-br',
  'ru',
  'sv',
] as const

export type AppSupportedLocaleSlug = (typeof APP_SUPPORTED_LOCALE_SLUGS)[number]
export type SiteLocaleSlug = 'zh' | 'en' | AppSupportedLocaleSlug

export interface LocalePageContent {
  slug: SiteLocaleSlug
  hreflang: string
  htmlLang: string
  label: string
  nativeLabel: string
  path: string
  title: string
  description: string
  keywords: string[]
  nav: {
    features: string
    useCases: string
    faq: string
    download: string
    language: string
  }
  hero: {
    eyebrow: string
    headline: string
    highlight: string
    subheadline: string
    badges: string[]
    primaryCta: string
    secondaryCta: string
  }
  features: {
    title: string
    subtitle: string
    items: { title: string; body: string }[]
  }
  useCases: {
    title: string
    subtitle: string
    items: string[]
  }
  faq: {
    title: string
    items: { q: string; a: string }[]
  }
  cta: {
    title: string
    body: string
    appStore: string
  }
  footer: string
}

const baseKeywords = [
  'Notepad++ for Mac',
  'Notepad++ Mac',
  'Notepad++ alternative for Mac',
  'Notepad++ for macOS',
  'Mac text editor with column mode',
  'regex find and replace Mac text editor',
  'multi tab text editor for Mac',
  'lightweight text editor for Mac',
  'TextEdit alternative for Mac',
]

const localizedPages = {
  de: {
    slug: 'de',
    hreflang: 'de',
    htmlLang: 'de',
    label: 'German',
    nativeLabel: 'Deutsch',
    path: '/de/',
    title: 'notePad++++ - Notepad++ Alternative für Mac',
    description:
      'Eine leichte Notepad++ Alternative für Mac mit Tabs, Spaltenmodus, regulärer Suche und Ersetzung, Workspace-Suche, Skript-Pipelines, Stapelverarbeitung und KI-Unterstützung.',
    keywords: [
      'Notepad++ Alternative für Mac',
      'Notepad++ Mac Deutsch',
      'Mac Texteditor mit Tabs',
      'Spaltenmodus Editor Mac',
      'Regex Suchen Ersetzen Mac',
      'TextEdit Alternative Mac',
      ...baseKeywords,
    ],
    nav: { features: 'Funktionen', useCases: 'Anwendungsfälle', faq: 'FAQ', download: 'Download', language: 'Sprachen' },
    hero: {
      eyebrow: 'macOS Texteditor',
      headline: 'Eine Notepad++ Alternative',
      highlight: 'für Mac',
      subheadline:
        'notePad++++ bringt vertraute Notepad++-Workflows auf macOS: Tabs, Spaltenmodus, Regex-Suche, Workspace-Suche, Skript-Pipelines und KI-Hilfe für wiederkehrende Textarbeit.',
      badges: ['Tabs', 'Spaltenmodus', 'Regex-Ersetzung', 'Batch-Textverarbeitung'],
      primaryCta: 'Im App Store laden',
      secondaryCta: 'Funktionen ansehen',
    },
    features: {
      title: 'Alles für tägliche Textarbeit auf Mac',
      subtitle: 'Für Nutzer, die von Notepad++ oder TextEdit zu einem stärkeren macOS-Editor wechseln.',
      items: [
        { title: 'Tabs und Workspace-Suche', body: 'Öffne mehrere Dateien, durchsuche ganze Ordner und springe direkt zur passenden Zeile.' },
        { title: 'Spaltenmodus und Regex', body: 'Bearbeite ausgerichtete Listen, Logs, CSV-Daten und Konfigurationen schneller und genauer.' },
        { title: 'Automatisierung', body: 'Skripte und Pipelines bereinigen Text, extrahieren Daten und zeigen Änderungen vor dem Anwenden.' },
      ],
    },
    useCases: {
      title: 'Gebaut für echte Mac-Workflows',
      subtitle: 'Schnelle Bearbeitung, saubere Listen und wiederholbare Textprozesse in einem leichten Fenster.',
      items: ['Logs und CSV-Dateien bereinigen', 'Markdown-Dokumente bearbeiten', 'Links, E-Mails und Daten extrahieren', 'Wiederkehrende Formatierungen automatisieren'],
    },
    faq: {
      title: 'Häufige Fragen',
      items: [
        { q: 'Ist notePad++++ die offizielle Mac-Version von Notepad++?', a: 'Nein. notePad++++ ist ein eigenständiger macOS-Texteditor, inspiriert von bekannten Notepad++-Workflows.' },
        { q: 'Welche macOS-Versionen werden unterstützt?', a: 'macOS 13 Ventura oder neuer, inklusive Apple Silicon und Intel Mac.' },
        { q: 'Kann ich Regex und Spaltenbearbeitung nutzen?', a: 'Ja. Beides gehört zu den Kernfunktionen der App.' },
      ],
    },
    cta: { title: 'Bereit für einen besseren Mac-Texteditor?', body: 'Installiere notePad++++ und erledige wiederkehrende Textarbeit schneller.', appStore: 'Im App Store laden' },
    footer: 'Notepad++ ist ein Open-Source-Projekt von Don Ho. notePad++++ ist ein eigenständiger macOS-Texteditor.',
  },
  es: {
    slug: 'es',
    hreflang: 'es',
    htmlLang: 'es',
    label: 'Spanish',
    nativeLabel: 'Español',
    path: '/es/',
    title: 'notePad++++ - Alternativa a Notepad++ para Mac',
    description:
      'Una alternativa ligera a Notepad++ para Mac con pestañas, modo columna, búsqueda y reemplazo con regex, búsqueda en carpetas, pipelines de scripts, procesamiento por lotes y ayuda de IA.',
    keywords: [
      'alternativa a Notepad++ para Mac',
      'Notepad++ Mac español',
      'editor de texto Mac con pestañas',
      'editor modo columna Mac',
      'buscar y reemplazar regex Mac',
      'alternativa a TextEdit para Mac',
      ...baseKeywords,
    ],
    nav: { features: 'Funciones', useCases: 'Usos', faq: 'FAQ', download: 'Descargar', language: 'Idiomas' },
    hero: {
      eyebrow: 'Editor de texto para macOS',
      headline: 'La alternativa a Notepad++',
      highlight: 'para Mac',
      subheadline:
        'notePad++++ lleva a macOS un flujo familiar: pestañas, modo columna, búsqueda con expresiones regulares, búsqueda en carpetas, automatización con scripts y ayuda de IA.',
      badges: ['Pestañas', 'Modo columna', 'Regex', 'Procesamiento por lotes'],
      primaryCta: 'Descargar en App Store',
      secondaryCta: 'Ver funciones',
    },
    features: {
      title: 'Un editor ligero para trabajar con texto en Mac',
      subtitle: 'Pensado para quienes echan de menos Notepad++ o necesitan más que TextEdit.',
      items: [
        { title: 'Pestañas y búsqueda de workspace', body: 'Abre varios archivos, busca dentro de carpetas completas y salta al resultado exacto.' },
        { title: 'Modo columna y regex', body: 'Edita listas alineadas, logs, CSV y configuraciones con precisión.' },
        { title: 'Automatización segura', body: 'Scripts y pipelines procesan texto por lotes con vista previa de diferencias antes de aplicar cambios.' },
      ],
    },
    useCases: {
      title: 'Para trabajos reales de texto',
      subtitle: 'Limpieza, extracción y normalización de contenido sin abrir un IDE pesado.',
      items: ['Limpiar logs y CSV', 'Editar Markdown y notas', 'Extraer enlaces, correos y fechas', 'Automatizar cambios repetitivos'],
    },
    faq: {
      title: 'Preguntas frecuentes',
      items: [
        { q: '¿Es la versión oficial de Notepad++ para Mac?', a: 'No. notePad++++ es una app independiente para macOS inspirada en flujos de trabajo populares de Notepad++.' },
        { q: '¿Soporta modo columna y regex?', a: 'Sí. El modo columna y la búsqueda/reemplazo con regex son funciones principales.' },
        { q: '¿Necesito una cuenta?', a: 'No para editar archivos locales. Las funciones de IA solo se usan cuando tú las configuras.' },
      ],
    },
    cta: { title: 'Empieza a editar texto mejor en Mac', body: 'Descarga notePad++++ y acelera tus tareas repetitivas de texto.', appStore: 'Descargar en App Store' },
    footer: 'Notepad++ es un proyecto open-source de Don Ho. notePad++++ es un editor independiente para macOS.',
  },
  fr: {
    slug: 'fr',
    hreflang: 'fr',
    htmlLang: 'fr',
    label: 'French',
    nativeLabel: 'Français',
    path: '/fr/',
    title: 'notePad++++ - Alternative à Notepad++ pour Mac',
    description:
      'Une alternative légère à Notepad++ pour Mac avec onglets, mode colonne, recherche et remplacement regex, recherche dans les dossiers, scripts, traitement par lots et assistance IA.',
    keywords: [
      'alternative à Notepad++ pour Mac',
      'Notepad++ Mac français',
      'éditeur de texte Mac avec onglets',
      'éditeur mode colonne Mac',
      'recherche remplacement regex Mac',
      'alternative à TextEdit pour Mac',
      ...baseKeywords,
    ],
    nav: { features: 'Fonctions', useCases: 'Usages', faq: 'FAQ', download: 'Télécharger', language: 'Langues' },
    hero: {
      eyebrow: 'Éditeur de texte macOS',
      headline: 'Une alternative à Notepad++',
      highlight: 'pour Mac',
      subheadline:
        'notePad++++ apporte sur macOS les habitudes de Notepad++ : onglets, mode colonne, regex, recherche dans les dossiers, automatisation par scripts et aide IA.',
      badges: ['Onglets', 'Mode colonne', 'Regex', 'Traitement par lots'],
      primaryCta: 'Télécharger sur l’App Store',
      secondaryCta: 'Voir les fonctions',
    },
    features: {
      title: 'Un vrai atelier de texte pour Mac',
      subtitle: 'Pour remplacer Notepad++ ou aller plus loin que TextEdit sans utiliser un IDE lourd.',
      items: [
        { title: 'Onglets et recherche de dossier', body: 'Ouvrez plusieurs fichiers et trouvez rapidement du texte dans tout un workspace.' },
        { title: 'Mode colonne et regex', body: 'Modifiez listes, logs, CSV et fichiers de configuration avec précision.' },
        { title: 'Scripts et pipelines', body: 'Nettoyez, extrayez et normalisez du texte par lots avec aperçu des différences.' },
      ],
    },
    useCases: {
      title: 'Pour les tâches répétitives',
      subtitle: 'Transformez du texte brut en contenu propre et exploitable.',
      items: ['Nettoyer des listes et logs', 'Préparer de la documentation Markdown', 'Extraire liens, e-mails et dates', 'Automatiser les formats récurrents'],
    },
    faq: {
      title: 'Questions fréquentes',
      items: [
        { q: 'notePad++++ est-il Notepad++ officiel pour Mac ?', a: 'Non. C’est un éditeur macOS indépendant inspiré des workflows appréciés dans Notepad++.' },
        { q: 'Le mode colonne est-il inclus ?', a: 'Oui. Le mode colonne est conçu pour les listes alignées, tableaux, logs et CSV.' },
        { q: 'Les scripts modifient-ils les fichiers sans confirmation ?', a: 'Non. Les changements importants peuvent être prévisualisés avant application.' },
      ],
    },
    cta: { title: 'Essayez un éditeur Mac plus pratique', body: 'Téléchargez notePad++++ pour traiter du texte plus vite.', appStore: 'Télécharger sur l’App Store' },
    footer: 'Notepad++ est un projet open-source de Don Ho. notePad++++ est un éditeur macOS indépendant.',
  },
  it: {
    slug: 'it',
    hreflang: 'it',
    htmlLang: 'it',
    label: 'Italian',
    nativeLabel: 'Italiano',
    path: '/it/',
    title: 'notePad++++ - Alternativa a Notepad++ per Mac',
    description:
      'Una leggera alternativa a Notepad++ per Mac con schede, modalità colonna, ricerca e sostituzione regex, ricerca nel workspace, pipeline di script, elaborazione batch e assistenza IA.',
    keywords: [
      'alternativa a Notepad++ per Mac',
      'Notepad++ Mac italiano',
      'editor di testo Mac con schede',
      'editor modalità colonna Mac',
      'trova sostituisci regex Mac',
      'alternativa a TextEdit per Mac',
      ...baseKeywords,
    ],
    nav: { features: 'Funzioni', useCases: 'Usi', faq: 'FAQ', download: 'Scarica', language: 'Lingue' },
    hero: {
      eyebrow: 'Editor di testo macOS',
      headline: 'L’alternativa a Notepad++',
      highlight: 'per Mac',
      subheadline:
        'notePad++++ porta su macOS schede, modalità colonna, regex, ricerca nel workspace, automazione con script e assistenza IA per il lavoro testuale ripetitivo.',
      badges: ['Schede', 'Modalità colonna', 'Regex', 'Elaborazione batch'],
      primaryCta: 'Scarica da App Store',
      secondaryCta: 'Vedi funzioni',
    },
    features: {
      title: 'Un editor leggero per il testo su Mac',
      subtitle: 'Per chi cerca un’alternativa a Notepad++ o uno strumento più potente di TextEdit.',
      items: [
        { title: 'Schede e ricerca workspace', body: 'Apri più file e cerca contenuti in intere cartelle.' },
        { title: 'Modalità colonna e regex', body: 'Modifica liste, log, CSV e configurazioni in modo rapido e preciso.' },
        { title: 'Automazione con anteprima', body: 'Script e pipeline processano file in batch mostrando le differenze prima di applicarle.' },
      ],
    },
    useCases: {
      title: 'Per attività reali',
      subtitle: 'Pulizia, estrazione e normalizzazione del testo in una finestra leggera.',
      items: ['Pulire log e CSV', 'Modificare Markdown', 'Estrarre link, email e date', 'Automatizzare formati ricorrenti'],
    },
    faq: {
      title: 'Domande frequenti',
      items: [
        { q: 'È Notepad++ ufficiale per Mac?', a: 'No. notePad++++ è un editor indipendente per macOS ispirato ai flussi di lavoro di Notepad++.' },
        { q: 'Supporta regex e modalità colonna?', a: 'Sì, entrambe sono funzioni centrali.' },
        { q: 'Funziona con file locali?', a: 'Sì. L’app lavora prima di tutto con file locali e autorizzazioni macOS.' },
      ],
    },
    cta: { title: 'Porta più potenza nel testo su Mac', body: 'Scarica notePad++++ e velocizza le attività ripetitive.', appStore: 'Scarica da App Store' },
    footer: 'Notepad++ è un progetto open-source di Don Ho. notePad++++ è un editor macOS indipendente.',
  },
  ja: {
    slug: 'ja',
    hreflang: 'ja',
    htmlLang: 'ja',
    label: 'Japanese',
    nativeLabel: '日本語',
    path: '/ja/',
    title: 'notePad++++ - Mac向けNotepad++代替エディタ',
    description:
      'Mac向けの軽量なNotepad++代替エディタ。タブ編集、矩形選択・列編集、正規表現検索と置換、ワークスペース検索、スクリプト処理、バッチ処理、AI支援に対応。',
    keywords: [
      'Mac Notepad++ 代替',
      'Notepad++ Mac 日本語',
      'Mac テキストエディタ',
      'Mac 列編集 エディタ',
      'Mac 正規表現 置換',
      'TextEdit 代替 Mac',
      ...baseKeywords,
    ],
    nav: { features: '機能', useCases: '用途', faq: 'FAQ', download: 'ダウンロード', language: '言語' },
    hero: {
      eyebrow: 'macOS テキストエディタ',
      headline: 'Mac向けの',
      highlight: 'Notepad++代替',
      subheadline:
        'notePad++++ は、タブ編集、列編集、正規表現検索と置換、フォルダ横断検索、スクリプト自動化、AI支援を備えたMac向けテキスト作業環境です。',
      badges: ['タブ編集', '列編集', '正規表現置換', 'バッチ処理'],
      primaryCta: 'App Storeで入手',
      secondaryCta: '機能を見る',
    },
    features: {
      title: 'Macで毎日使える軽量テキストエディタ',
      subtitle: 'Notepad++の操作感を求める人や、TextEditより強力な編集環境が必要な人に向けています。',
      items: [
        { title: 'タブとワークスペース検索', body: '複数ファイルを開き、フォルダ全体から必要な行をすばやく見つけられます。' },
        { title: '列編集と正規表現', body: 'ログ、CSV、設定ファイル、整列したリストを効率よく編集できます。' },
        { title: 'スクリプトとパイプライン', body: 'テキストの整形、抽出、変換をバッチ実行し、適用前に差分を確認できます。' },
      ],
    },
    useCases: {
      title: '繰り返しのテキスト作業に',
      subtitle: '重いIDEを開かずに、日常の編集と整理をすばやく処理できます。',
      items: ['ログやCSVの整形', 'Markdownドキュメント編集', 'URL・メール・日付の抽出', '定型フォーマット変換'],
    },
    faq: {
      title: 'よくある質問',
      items: [
        { q: 'Notepad++の公式Mac版ですか？', a: 'いいえ。notePad++++ はNotepad++のワークフローに着想を得た独立したmacOSアプリです。' },
        { q: '列編集と正規表現に対応していますか？', a: 'はい。どちらも主要機能として搭載されています。' },
        { q: 'ローカルファイルを編集できますか？', a: 'はい。macOSの権限に基づき、ローカルファイル中心に動作します。' },
      ],
    },
    cta: { title: 'Macのテキスト作業をもっと速く', body: 'notePad++++ を入手して、繰り返し作業を効率化しましょう。', appStore: 'App Storeで入手' },
    footer: 'Notepad++ は Don Ho によるオープンソースプロジェクトです。notePad++++ は独立したmacOSテキストエディタです。',
  },
  ko: {
    slug: 'ko',
    hreflang: 'ko',
    htmlLang: 'ko',
    label: 'Korean',
    nativeLabel: '한국어',
    path: '/ko/',
    title: 'notePad++++ - Mac용 Notepad++ 대안',
    description:
      'Mac용 가벼운 Notepad++ 대안입니다. 탭 편집, 열 모드, 정규식 찾기 및 바꾸기, 워크스페이스 검색, 스크립트 파이프라인, 일괄 처리, AI 지원을 제공합니다.',
    keywords: [
      'Mac용 Notepad++ 대안',
      'Notepad++ Mac 한국어',
      'Mac 텍스트 편집기',
      'Mac 열 편집기',
      'Mac 정규식 바꾸기',
      'TextEdit 대안 Mac',
      ...baseKeywords,
    ],
    nav: { features: '기능', useCases: '사용 사례', faq: 'FAQ', download: '다운로드', language: '언어' },
    hero: {
      eyebrow: 'macOS 텍스트 편집기',
      headline: 'Mac용',
      highlight: 'Notepad++ 대안',
      subheadline:
        'notePad++++는 탭 편집, 열 모드, 정규식 검색/바꾸기, 워크스페이스 검색, 스크립트 자동화, AI 지원을 갖춘 Mac 텍스트 작업 도구입니다.',
      badges: ['탭 편집', '열 모드', '정규식 바꾸기', '일괄 처리'],
      primaryCta: 'App Store에서 받기',
      secondaryCta: '기능 보기',
    },
    features: {
      title: 'Mac에서 매일 쓰기 좋은 텍스트 편집기',
      subtitle: 'Notepad++에 익숙한 사용자와 TextEdit보다 강한 도구가 필요한 사용자를 위한 페이지입니다.',
      items: [
        { title: '탭과 워크스페이스 검색', body: '여러 파일을 열고 폴더 전체에서 필요한 텍스트를 빠르게 찾습니다.' },
        { title: '열 모드와 정규식', body: '로그, CSV, 설정 파일, 정렬된 목록을 정확하게 편집합니다.' },
        { title: '스크립트 자동화', body: '반복 작업을 파이프라인으로 처리하고 적용 전 diff를 확인합니다.' },
      ],
    },
    useCases: {
      title: '반복 텍스트 작업에 적합',
      subtitle: '무거운 IDE 없이 정리, 추출, 변환 작업을 빠르게 처리합니다.',
      items: ['로그와 CSV 정리', 'Markdown 문서 편집', '링크, 이메일, 날짜 추출', '반복 포맷 변환 자동화'],
    },
    faq: {
      title: '자주 묻는 질문',
      items: [
        { q: '공식 Notepad++ Mac 버전인가요?', a: '아닙니다. notePad++++는 Notepad++ 워크플로에서 영감을 받은 독립 macOS 앱입니다.' },
        { q: '열 모드와 정규식을 지원하나요?', a: '네. 두 기능 모두 핵심 기능입니다.' },
        { q: '계정이 필요한가요?', a: '로컬 파일 편집에는 계정이 필요하지 않습니다.' },
      ],
    },
    cta: { title: 'Mac 텍스트 작업을 더 빠르게', body: 'notePad++++를 설치하고 반복 편집 시간을 줄이세요.', appStore: 'App Store에서 받기' },
    footer: 'Notepad++는 Don Ho의 오픈소스 프로젝트입니다. notePad++++는 독립적인 macOS 텍스트 편집기입니다.',
  },
  'pt-br': {
    slug: 'pt-br',
    hreflang: 'pt-BR',
    htmlLang: 'pt-BR',
    label: 'Portuguese Brazil',
    nativeLabel: 'Português',
    path: '/pt-br/',
    title: 'notePad++++ - Alternativa ao Notepad++ para Mac',
    description:
      'Uma alternativa leve ao Notepad++ para Mac com abas, modo coluna, busca e substituição com regex, pesquisa no workspace, pipelines de scripts, processamento em lote e assistência de IA.',
    keywords: [
      'alternativa ao Notepad++ para Mac',
      'Notepad++ Mac português',
      'editor de texto Mac com abas',
      'editor modo coluna Mac',
      'buscar substituir regex Mac',
      'alternativa ao TextEdit para Mac',
      ...baseKeywords,
    ],
    nav: { features: 'Recursos', useCases: 'Casos de uso', faq: 'FAQ', download: 'Baixar', language: 'Idiomas' },
    hero: {
      eyebrow: 'Editor de texto para macOS',
      headline: 'A alternativa ao Notepad++',
      highlight: 'para Mac',
      subheadline:
        'notePad++++ leva ao macOS abas, modo coluna, busca com regex, pesquisa em pastas, automação por scripts e IA para tarefas repetitivas de texto.',
      badges: ['Abas', 'Modo coluna', 'Regex', 'Processamento em lote'],
      primaryCta: 'Baixar na App Store',
      secondaryCta: 'Ver recursos',
    },
    features: {
      title: 'Um editor leve para texto no Mac',
      subtitle: 'Para quem procura uma alternativa ao Notepad++ ou algo mais poderoso que o TextEdit.',
      items: [
        { title: 'Abas e busca no workspace', body: 'Abra vários arquivos e pesquise em pastas inteiras rapidamente.' },
        { title: 'Modo coluna e regex', body: 'Edite listas, logs, CSVs e configurações com precisão.' },
        { title: 'Automação segura', body: 'Scripts e pipelines processam texto em lote com prévia das diferenças antes de aplicar.' },
      ],
    },
    useCases: {
      title: 'Para trabalho real com texto',
      subtitle: 'Limpe, extraia e normalize conteúdo sem abrir um IDE pesado.',
      items: ['Limpar logs e CSVs', 'Editar Markdown', 'Extrair links, e-mails e datas', 'Automatizar formatos repetitivos'],
    },
    faq: {
      title: 'Perguntas frequentes',
      items: [
        { q: 'É a versão oficial do Notepad++ para Mac?', a: 'Não. notePad++++ é um app macOS independente inspirado em fluxos de trabalho do Notepad++.' },
        { q: 'Suporta regex e modo coluna?', a: 'Sim. Ambos são recursos principais.' },
        { q: 'Preciso criar conta?', a: 'Não para editar arquivos locais. IA só é usada quando você configura.' },
      ],
    },
    cta: { title: 'Edite texto melhor no Mac', body: 'Baixe notePad++++ e reduza o trabalho repetitivo.', appStore: 'Baixar na App Store' },
    footer: 'Notepad++ é um projeto open-source de Don Ho. notePad++++ é um editor macOS independente.',
  },
  ru: {
    slug: 'ru',
    hreflang: 'ru',
    htmlLang: 'ru',
    label: 'Russian',
    nativeLabel: 'Русский',
    path: '/ru/',
    title: 'notePad++++ - альтернатива Notepad++ для Mac',
    description:
      'Легкая альтернатива Notepad++ для Mac: вкладки, режим колонок, поиск и замена с regex, поиск по рабочей папке, скриптовые пайплайны, пакетная обработка и помощь AI.',
    keywords: [
      'альтернатива Notepad++ для Mac',
      'Notepad++ Mac русский',
      'текстовый редактор Mac',
      'редактор с режимом колонок Mac',
      'regex поиск замена Mac',
      'альтернатива TextEdit для Mac',
      ...baseKeywords,
    ],
    nav: { features: 'Функции', useCases: 'Сценарии', faq: 'FAQ', download: 'Скачать', language: 'Языки' },
    hero: {
      eyebrow: 'Текстовый редактор macOS',
      headline: 'Альтернатива Notepad++',
      highlight: 'для Mac',
      subheadline:
        'notePad++++ переносит на macOS привычные возможности: вкладки, режим колонок, regex, поиск по папкам, автоматизацию скриптами и AI для повторяющейся работы с текстом.',
      badges: ['Вкладки', 'Режим колонок', 'Regex', 'Пакетная обработка'],
      primaryCta: 'Скачать в App Store',
      secondaryCta: 'Смотреть функции',
    },
    features: {
      title: 'Легкий редактор для ежедневной работы с текстом',
      subtitle: 'Для пользователей, которым нужен Notepad++ на Mac или более мощная замена TextEdit.',
      items: [
        { title: 'Вкладки и поиск по workspace', body: 'Открывайте несколько файлов и ищите текст по всей папке проекта.' },
        { title: 'Колонки и regex', body: 'Быстро редактируйте списки, логи, CSV и конфигурации.' },
        { title: 'Скрипты и пайплайны', body: 'Автоматизируйте очистку и преобразование текста с предварительным просмотром изменений.' },
      ],
    },
    useCases: {
      title: 'Для практических задач',
      subtitle: 'Очистка, извлечение и нормализация текста без тяжелой IDE.',
      items: ['Чистка логов и CSV', 'Редактирование Markdown', 'Извлечение ссылок, email и дат', 'Автоматизация повторяющихся форматов'],
    },
    faq: {
      title: 'Частые вопросы',
      items: [
        { q: 'Это официальный Notepad++ для Mac?', a: 'Нет. notePad++++ - независимый редактор для macOS, вдохновленный рабочими процессами Notepad++.' },
        { q: 'Есть ли режим колонок и regex?', a: 'Да. Оба режима входят в основные функции.' },
        { q: 'Нужен ли аккаунт?', a: 'Для редактирования локальных файлов аккаунт не нужен.' },
      ],
    },
    cta: { title: 'Работайте с текстом на Mac быстрее', body: 'Установите notePad++++ и ускорьте повторяющиеся задачи.', appStore: 'Скачать в App Store' },
    footer: 'Notepad++ - open-source проект Don Ho. notePad++++ - независимый текстовый редактор для macOS.',
  },
  sv: {
    slug: 'sv',
    hreflang: 'sv',
    htmlLang: 'sv',
    label: 'Swedish',
    nativeLabel: 'Svenska',
    path: '/sv/',
    title: 'notePad++++ - Notepad++ alternativ för Mac',
    description:
      'Ett lätt Notepad++ alternativ för Mac med flikar, kolumnläge, regex-sök och ersätt, workspace-sökning, skript-pipelines, batchbearbetning och AI-stöd.',
    keywords: [
      'Notepad++ alternativ för Mac',
      'Notepad++ Mac svenska',
      'textredigerare Mac med flikar',
      'kolumnläge redigerare Mac',
      'regex sök ersätt Mac',
      'TextEdit alternativ Mac',
      ...baseKeywords,
    ],
    nav: { features: 'Funktioner', useCases: 'Användning', faq: 'FAQ', download: 'Ladda ner', language: 'Språk' },
    hero: {
      eyebrow: 'Textredigerare för macOS',
      headline: 'Ett Notepad++ alternativ',
      highlight: 'för Mac',
      subheadline:
        'notePad++++ ger macOS flikar, kolumnläge, regex-sökning, workspace-sökning, skriptautomation och AI-stöd för återkommande textarbete.',
      badges: ['Flikar', 'Kolumnläge', 'Regex', 'Batchbearbetning'],
      primaryCta: 'Ladda ner från App Store',
      secondaryCta: 'Se funktioner',
    },
    features: {
      title: 'En lätt textredigerare för Mac',
      subtitle: 'För dig som vill ha ett Notepad++-liknande arbetsflöde eller mer kraft än TextEdit.',
      items: [
        { title: 'Flikar och workspace-sökning', body: 'Öppna flera filer och sök snabbt i hela mappar.' },
        { title: 'Kolumnläge och regex', body: 'Redigera listor, loggar, CSV och konfigurationsfiler med precision.' },
        { title: 'Skript och pipelines', body: 'Automatisera rensning och omformatering med diff-förhandsvisning.' },
      ],
    },
    useCases: {
      title: 'För dagligt textarbete',
      subtitle: 'Rensa, extrahera och normalisera text utan en tung IDE.',
      items: ['Rensa loggar och CSV', 'Redigera Markdown', 'Extrahera länkar, e-post och datum', 'Automatisera återkommande format'],
    },
    faq: {
      title: 'Vanliga frågor',
      items: [
        { q: 'Är detta den officiella Mac-versionen av Notepad++?', a: 'Nej. notePad++++ är en fristående macOS-app inspirerad av Notepad++-arbetsflöden.' },
        { q: 'Finns kolumnläge och regex?', a: 'Ja. Båda ingår som kärnfunktioner.' },
        { q: 'Fungerar appen lokalt?', a: 'Ja. Lokal filredigering kräver inget konto.' },
      ],
    },
    cta: { title: 'Gör textarbete snabbare på Mac', body: 'Ladda ner notePad++++ och minska repetitiv redigering.', appStore: 'Ladda ner från App Store' },
    footer: 'Notepad++ är ett open-source-projekt av Don Ho. notePad++++ är en fristående textredigerare för macOS.',
  },
} satisfies Record<AppSupportedLocaleSlug, LocalePageContent>

export const localePages = localizedPages

export const allSiteLocales = [
  { slug: 'zh', hreflang: 'zh-CN', htmlLang: 'zh-CN', nativeLabel: '简体中文', path: '/' },
  { slug: 'en', hreflang: 'en', htmlLang: 'en', nativeLabel: 'English', path: '/en/' },
  ...APP_SUPPORTED_LOCALE_SLUGS.map((slug) => ({
    slug,
    hreflang: localizedPages[slug].hreflang,
    htmlLang: localizedPages[slug].htmlLang,
    nativeLabel: localizedPages[slug].nativeLabel,
    path: localizedPages[slug].path,
  })),
] as const

export function getLocalePage(slug: string): LocalePageContent | undefined {
  return localizedPages[slug as AppSupportedLocaleSlug]
}

export function getAbsoluteUrl(path: string): string {
  if (path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path}`
}

export function getLanguageAlternates(): Record<string, string> {
  return Object.fromEntries([
    ...allSiteLocales.map((locale) => [locale.hreflang, getAbsoluteUrl(locale.path)]),
    ['x-default', `${SITE_URL}/`],
  ])
}

export function getHtmlLangForSegment(segment?: string): string {
  if (!segment) return 'zh-CN'
  return allSiteLocales.find((locale) => locale.slug === segment)?.htmlLang ?? 'zh-CN'
}
