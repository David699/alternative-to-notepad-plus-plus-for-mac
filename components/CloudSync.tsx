'use client'
import { motion } from 'framer-motion'
import type { CloudSyncDict, SyncStatusItem } from '@/lib/i18n/types'

interface Props { t: CloudSyncDict }

const STATUS_STYLES: Record<SyncStatusItem['status'], { chip: string; dot: string }> = {
  synced:   { chip: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30', dot: 'bg-emerald-400' },
  ignored:  { chip: 'bg-gray-500/20 text-gray-400 border border-gray-600/30',          dot: 'bg-gray-500' },
  inherited:{ chip: 'bg-sky-500/20 text-sky-300 border border-sky-500/30',             dot: 'bg-sky-400' },
}

const TYPE_ICON: Record<SyncStatusItem['type'], string> = {
  folder: '📁',
  file:   '📄',
}

export default function CloudSync({ t }: Props) {
  return (
    <section id="cloud-sync" className="py-24 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            {t.headline}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
              {t.headlineGradient}
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t.sub}</p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Left: feature bullets */}
          <div className="space-y-6">
            {t.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-xl">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">{feat.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}

          </div>

          {/* Right: mock sync panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow backdrop */}
            <div className="absolute -inset-4 bg-gradient-to-br from-sky-600/10 to-indigo-600/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative rounded-2xl border border-gray-700/60 bg-gray-900/80 backdrop-blur-sm overflow-hidden shadow-2xl">

              {/* Panel title bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700/60 bg-gray-800/60">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/70" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/70" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs font-semibold text-gray-300">{t.mockPanel.title}</span>
                  <span className="text-xs text-gray-500 ml-2">{t.mockPanel.subtitle}</span>
                </div>
              </div>

              {/* Sync direction header */}
              <div className="flex items-center gap-3 px-4 py-3 bg-sky-500/5 border-b border-gray-700/40">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-base">📂</span>
                  <span className="text-gray-300 font-medium">{t.mockPanel.syncDirName}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <span className="text-sky-500">→</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-base">☁️</span>
                  <span className="text-sky-300 font-medium">{t.mockPanel.subtitle}</span>
                </div>
              </div>

              {/* File tree */}
              <div className="px-4 py-3 space-y-1.5 border-b border-gray-700/40">
                {t.mockPanel.items.map((item, i) => {
                  const style = STATUS_STYLES[item.status]
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + i * 0.06 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                      style={{ paddingLeft: `${(item.indent ?? 0) * 16}px` }}
                    >
                      <div className="flex items-center gap-2 text-sm">
                        <span>{TYPE_ICON[item.type]}</span>
                        <span className={item.indent === 0 ? 'text-white font-semibold' : 'text-gray-300'}>
                          {item.name}
                        </span>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${style.chip}`}>
                        <span className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 ${style.dot}`} />
                        {t.mockPanel.statusLabels[item.status]}
                      </span>
                    </motion.div>
                  )
                })}
              </div>

              {/* Sync rules */}
              <div className="px-4 py-3">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">
                  {t.mockPanel.rulesTitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.mockPanel.rules.map((rule, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-gray-800 border border-gray-700 text-gray-300"
                    >
                      <span>{rule.icon}</span>
                      {rule.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
