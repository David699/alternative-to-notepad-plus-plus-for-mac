'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { CTADict } from '@/lib/i18n/types'

interface Props { t: CTADict }

const APPLE_ICON = (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
)

const GITHUB_ICON = (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export default function CTASection({ t }: Props) {
  return (
    <section id="download" className="py-24 bg-cta-gradient text-white overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-xl border-2 border-white/20">
              <Image src="/images/app-icon.png" alt={t.iconAlt} width={80} height={80} className="object-cover" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black mb-6 leading-tight">
            {t.headline}
            <br />
            <span className="text-white/80 text-3xl sm:text-4xl font-bold">{t.headlineSub}</span>
          </h2>

          <p className="text-lg text-white/75 max-w-xl mx-auto mb-10 leading-relaxed">{t.sub}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="https://apps.apple.com/app/id6759166160?mt=12"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold text-lg hover:bg-gray-50 active:scale-95 transition-all duration-150 shadow-xl"
            >
              {APPLE_ICON}
              {t.appStoreLabel}
            </a>
            <a
              href="https://github.com/David699/notePad----"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/15 text-white rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 active:scale-95 transition-all duration-150"
            >
              {GITHUB_ICON}
              {t.githubLabel}
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
            {t.badges.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span>{b.icon}</span> {b.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
