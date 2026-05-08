'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { AutomationDict } from '@/lib/i18n/types'

const BEFORE_TEXT = `  apple
banana
apple

 orange
banana
  cherry
`

const AFTER_TEXT = `apple
banana
cherry
orange`

interface Props { t: AutomationDict }

export default function Automation({ t }: Props) {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const [showAfter, setShowAfter] = useState(false)

  return (
    <section id="automation" className="py-24 bg-gray-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full mb-4">
            {t.sectionLabel}
          </span>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            {t.headline}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-brand-400">
              {t.headlineGradient}
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">{t.sub}</p>
        </div>

        {/* Pipeline demo */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: pipeline steps */}
          <div>
            <p className="text-sm text-gray-500 mb-5 font-medium uppercase tracking-wide">{t.pipelineStepsLabel}</p>
            <div className="space-y-2">
              {t.pipelineSteps.map((step, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-center gap-4 p-3.5 rounded-xl border transition-all duration-200 text-left ${
                    activeStep === i
                      ? 'bg-white/10 border-white/20'
                      : 'bg-white/5 border-white/10 hover:bg-white/8'
                  }`}
                >
                  <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm flex-shrink-0">
                    {step.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-white">{step.label}</div>
                    <div className="text-xs text-gray-500">{step.desc}</div>
                  </div>
                  {i < t.pipelineSteps.length - 1 && (
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-gray-400" viewBox="0 0 10 10" fill="currentColor">
                        <path d="M3 2l4 3-4 3V2z" />
                      </svg>
                    </div>
                  )}
                  {i === t.pipelineSteps.length - 1 && (
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full flex-shrink-0">{t.completedLabel}</span>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right: Before/After */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{t.previewLabel}</p>
              <button
                onClick={() => setShowAfter(!showAfter)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  showAfter
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-white/10 text-gray-300 border border-white/10'
                }`}
              >
                {showAfter ? t.toggleAfter : t.toggleBefore}
              </button>
            </div>
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-amber-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-gray-500 font-mono">
                  {showAfter ? t.previewFileAfter : t.previewFileBefore}
                </span>
              </div>
              <div className="p-4 font-mono text-sm min-h-[200px]">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={showAfter ? 'after' : 'before'}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="text-gray-300 whitespace-pre leading-relaxed"
                  >
                    {showAfter ? AFTER_TEXT : BEFORE_TEXT}
                  </motion.pre>
                </AnimatePresence>
                {showAfter && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 pt-3 border-t border-white/10 flex gap-3 text-xs"
                  >
                    <span className="text-red-400">{t.diffRemoved}</span>
                    <span className="text-green-400">{t.diffKept}</span>
                    <span className="text-gray-500">{t.diffDeduped}</span>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Built-in pipelines */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-white mb-6 text-center">{t.pipelinesTitle}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {t.pipelines.map((pl, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-colors"
              >
                <span className="text-xl flex-shrink-0">{pl.icon}</span>
                <div>
                  <div className="font-semibold text-sm text-white mb-1">{pl.name}</div>
                  <div className="text-xs text-gray-500">{pl.desc}</div>
                  <div className="text-xs text-brand-400 mt-1">{pl.steps} {t.stepsUnit}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Batch stats */}
        <div className="rounded-2xl bg-white/5 border border-white/10 p-8">
          <h3 className="text-xl font-bold text-center mb-8">{t.batchTitle}</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {t.stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="text-3xl font-black text-white">
                  {s.value}
                  {s.unit && <span className="text-base font-normal text-gray-400 ml-1">{s.unit}</span>}
                </div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
