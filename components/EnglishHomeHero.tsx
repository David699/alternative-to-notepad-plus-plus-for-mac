import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import SeoArticleFigure from '@/components/SeoArticleFigure'
import { APP_NAME } from '@/lib/seo'
import { APP_STORE_URL } from '@/lib/paths'
import { notepadAppStoreRating } from '@/lib/app-store-rating'
import { englishHomeHero } from '@/lib/english-home'

export default function EnglishHomeHero() {
  return (
    <section className="bg-gradient-to-b from-brand-50 via-white to-white pb-14 pt-28 sm:pt-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="section-label">{APP_NAME} · Notepad++ alternative for Mac</p>
          <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-950 sm:text-6xl">
            Familiar Notepad++ Features,<br /><span className="gradient-text">Built for Mac</span>
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-700">
            Edit text on your Mac with document tabs, column editing, regex find and replace, and workspace search. {APP_NAME} is an independent macOS app inspired by familiar Notepad++ workflows.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <AppStoreDownloadLink source="hero_badge" className="rounded-xl bg-brand-600 px-6 py-4 font-bold text-white shadow-sm transition hover:bg-brand-700">
              Download on the Mac App Store
            </AppStoreDownloadLink>
            <a href="#app-overview" className="rounded-xl border border-gray-300 bg-white px-6 py-4 font-semibold text-gray-800 hover:border-brand-400">Watch the 65-second tour</a>
          </div>
          <p className="mt-3 text-sm leading-6 text-gray-600">See the App Store for current pricing, trial details, and macOS requirements.</p>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-semibold text-gray-700 underline underline-offset-4">
            {notepadAppStoreRating.score.toFixed(1)} out of {notepadAppStoreRating.maxScore} · {notepadAppStoreRating.ratingCount} ratings · App Store
          </a>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-gray-600">The original Notepad++ is a Windows application. {APP_NAME} is a separate Mac editor and does not run Windows Notepad++ plugins.</p>
        </div>
        <SeoArticleFigure figure={englishHomeHero} priority />
        <p className="mt-4 text-sm text-gray-500">All App interface images on this page are actual screenshots, captured with fictional demonstration files.</p>
      </div>
    </section>
  )
}
