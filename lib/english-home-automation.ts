import type { SeoArticleFigure } from './seo-articles'
import { APP_NAME } from './seo'

function screenshot(src: string, width: number, height: number, alt: string, caption: string): SeoArticleFigure {
  return { src, width, height, alt, caption, source: { label: 'View the actual App screenshot at full size', href: src } }
}

// Reuse the script tutorial's captures directly; do not copy or regenerate assets.
export const englishHomeAutomationFigures = {
  builtIn: screenshot(
    '/images/seo/english-home/pipeline-gallery-real.webp', 2536, 1305,
    `${APP_NAME} Pipeline Gallery with built-in text cleanup sequences.`,
    'Actual Pipeline Gallery with seven ready-made sequences for lists, links and other text tasks.',
  ),
  custom: screenshot(
    '/images/seo/script-automation/custom-editor-real.webp', 780, 360,
    `${APP_NAME} Script window with Demo - OLD to NEW saved under My Scripts.`,
    'Actual custom script: change OLD- to NEW- only at the start of a line. Save the rule under My Scripts to use it again.',
  ),
  preview: screenshot(
    '/images/seo/script-automation/batch-diff-real.webp', 860, 295,
    'Actual folder-processing preview comparing the original roster with a cleaned and sorted list.',
    'Before applying: the preview removes blank lines and duplicates, trims trailing spaces and sorts the IDs. The files on disk are still unchanged.',
  ),
  backups: screenshot(
    '/images/seo/script-automation/backups-real.webp', 532, 435,
    'Actual Operation History with three available file backups and Restore this operation.',
    'After applying: Operation History lists three available backups for the demonstration TXT files.',
  ),
  restored: screenshot(
    '/images/seo/script-automation/restored-real.webp', 532, 435,
    'The same three demonstration files marked Restored in the actual operation history.',
    'After restoring: all three files say Restored. Their bytes matched the originals, including the blank lines and trailing spaces.',
  ),
}
