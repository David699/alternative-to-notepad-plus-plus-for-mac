export type Locale = 'zh' | 'en'

export interface ShortcutItem {
  action: string
  desc: string
  win: string
  mac: string[]
  color: string
  accent: string
  border: string
}

export interface TagItem {
  label: string
  iconSrc: string
  classes: string
  iconFrame: string
  glow: string
}

export interface FloatItem {
  icon: string
  text: string
  color: string
  delay: number
}

export interface NavDict {
  links: { label: string; href: string }[]
  downloadLabel: string
  githubLabel: string
  switchLang: string
  switchLangHref: string
}

export interface HeroDict {
  appBadgeOS: string
  headline: string
  headlineGradient: string
  subheadline: string
  tags: TagItem[]
  floats: FloatItem[]
  shortcuts: ShortcutItem[]
  shortcutPanelTitle: string
  shortcutColLeft: string
  shortcutColRight: string
  shortcutFooterLeft: string
  shortcutFooterRight: string
  ctaPrimary: string
  ctaSecondary: string
}

export interface PillarItem {
  icon: string
  title: string
  desc: string
  points: string[]
  image: string
  imageAlt: string
  gradient: string
  accent: string
  badge: string
}

export interface WhyNotNotepadDict {
  sectionLabel: string
  headline: string
  headlineGradient: string
  sub: string
  pillars: PillarItem[]
}

export interface FeatureItem {
  icon: string
  title: string
  desc: string
  badge: { text: string; color: string } | null
}

export interface FeaturesMatrixDict {
  sectionLabel: string
  headline: string
  headlineGradient: string
  sub: string
  features: FeatureItem[]
}

export interface PipelineStep {
  label: string
  desc: string
  icon: string
  color: string
}

export interface PipelinePreset {
  name: string
  desc: string
  icon: string
  steps: number
}

export interface StatItem {
  value: string
  unit: string
  label: string
  icon: string
}

export interface AutomationDict {
  sectionLabel: string
  headline: string
  headlineGradient: string
  sub: string
  pipelineStepsLabel: string
  previewLabel: string
  toggleBefore: string
  toggleAfter: string
  previewFileBefore: string
  previewFileAfter: string
  diffRemoved: string
  diffKept: string
  diffDeduped: string
  pipelineSteps: PipelineStep[]
  pipelines: PipelinePreset[]
  pipelinesTitle: string
  stepsUnit: string
  batchTitle: string
  stats: StatItem[]
  completedLabel: string
}

export interface AIFeatureItem {
  icon: string
  title: string
  desc: string
  tag: string
  tagColor: string
}

export interface AIFlowStep {
  step: string
  label: string
  example: string
  color: string
}

export interface AISectionDict {
  sectionLabel: string
  headline: string
  headlineGradient: string
  sub: string
  flowTitle: string
  features: AIFeatureItem[]
  flowSteps: AIFlowStep[]
  privacyTitle: string
  privacyBody: string
  screenshotAlt: string
}

export interface TextCase {
  icon: string
  title: string
  desc: string
  before: string
  after: string
  tag: string
}

export interface TextCleaningDict {
  sectionLabel: string
  headline: string
  headlineGradient: string
  sub: string
  beforeLabel: string
  afterLabel: string
  toggleBefore: string
  toggleAfter: string
  cleanedBadge: string
  showPlaceholder: string
  cases: TextCase[]
}

export interface SyncStatusItem {
  name: string
  type: 'folder' | 'file'
  status: 'synced' | 'ignored' | 'inherited'
  indent?: number
}

export interface SyncRuleChip {
  icon: string
  label: string
}

export interface CloudSyncFeatureItem {
  icon: string
  title: string
  desc: string
}

export interface CloudSyncDict {
  sectionLabel: string
  headline: string
  headlineGradient: string
  sub: string
  features: CloudSyncFeatureItem[]
  mockPanel: {
    title: string
    subtitle: string
    syncDirLabel: string
    syncDirName: string
    statusLabels: { synced: string; ignored: string; inherited: string }
    items: SyncStatusItem[]
    rulesTitle: string
    rules: SyncRuleChip[]
    proLabel: string
    proNote: string
  }
}

export interface TrustPoint {
  icon: string
  title: string
  desc: string
  color: string
  accent: string
  bg: string
}

export interface PrivacyDict {
  sectionLabel: string
  headline: string
  headlineGradient: string
  sub: string
  points: TrustPoint[]
  disclaimer: string
}

export interface ScenarioItem {
  icon: string
  title: string
  flow: string[]
  useCases: string[]
  color: string
  flowColor: string
}

export interface ScenariosDict {
  sectionLabel: string
  headline: string
  headlineGradient: string
  sub: string
  items: ScenarioItem[]
}

export interface ReviewItem {
  name: string
  role: string
  avatar: string
  rating: number
  text: string
}

export interface ReviewsDict {
  sectionLabel: string
  headline: string
  headlineGradient: string
  appStoreCaption: string
  reviewsAlt: string
  items: ReviewItem[]
}

export interface FAQItem {
  q: string
  a: string
}

export interface FAQDict {
  sectionLabel: string
  headline: string
  sub: string
  items: FAQItem[]
}

export interface CTADict {
  headline: string
  headlineSub: string
  sub: string
  appStoreLabel: string
  githubLabel: string
  iconAlt: string
  badges: { icon: string; text: string }[]
}

export interface FooterDict {
  tagline: string
  navTitle: string
  linksTitle: string
  navLinks: { label: string; href: string }[]
  appStoreLabel: string
  githubLabel: string
  downloadLabel: string
  copyright: string
  trademark: string
  legalTitle: string
  privacyLabel: string
  privacyHref: string
  termsLabel: string
  termsHref: string
}

export interface Dict {
  locale: Locale
  nav: NavDict
  hero: HeroDict
  whyNotNotepad: WhyNotNotepadDict
  featuresMatrix: FeaturesMatrixDict
  automation: AutomationDict
  aiSection: AISectionDict
  textCleaning: TextCleaningDict
  privacy: PrivacyDict
  cloudSync: CloudSyncDict
  scenarios: ScenariosDict
  reviews: ReviewsDict
  faq: FAQDict
  cta: CTADict
  footer: FooterDict
}
