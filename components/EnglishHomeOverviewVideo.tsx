import AppStoreDownloadLink from '@/components/AppStoreDownloadLink'
import { APP_NAME } from '@/lib/seo'

export default function EnglishHomeOverviewVideo() {
  return (
    <section id="app-overview" aria-labelledby="app-overview-heading" className="scroll-mt-20 bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="section-label">Real Mac app demo</p>
        <h2 id="app-overview-heading" className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
          Watch {APP_NAME} in 65 seconds
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-gray-600">
          See tabs, column editing and multi-keyword search in action, then take a quick look at Markdown, JSON, YAML, SQL and HTML previews, reusable scripts and folder processing.
        </p>
        <figure className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <iframe
            src="https://www.youtube-nocookie.com/embed/JrA0Y0iOdos"
            title={`Notepad++ for Mac? Meet ${APP_NAME} in 65 Seconds`}
            width="960"
            height="540"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="aspect-video h-auto w-full border-0"
          />
          <figcaption className="border-t border-gray-200 px-4 py-3 text-sm leading-6 text-gray-600">
            Recorded in the real Mac app with fictional demonstration files. English narration and captions.{' '}
            <a href="https://www.youtube.com/watch?v=JrA0Y0iOdos" target="_blank" rel="noopener noreferrer" className="text-brand-700 underline underline-offset-4">Watch on YouTube</a>.
          </figcaption>
        </figure>
        <div className="mt-6 flex flex-wrap items-center gap-5">
          <AppStoreDownloadLink source="seo_english_home_overview_video" className="rounded-xl bg-brand-600 px-6 py-3 font-bold text-white transition hover:bg-brand-700">
            Download on the Mac App Store
          </AppStoreDownloadLink>
          <a href="#features" className="font-semibold text-brand-700 underline underline-offset-4">Explore the features below</a>
        </div>
        <p className="mt-3 text-sm leading-6 text-gray-600">Some advanced features require Pro or an eligible trial. See the App Store for current pricing and requirements.</p>
      </div>
    </section>
  )
}
