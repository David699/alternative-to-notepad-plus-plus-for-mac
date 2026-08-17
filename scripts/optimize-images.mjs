import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const imageDirectory = path.resolve('public/images')
const outputDirectory = path.join(imageDirectory, 'optimized')
const sourceExtensions = new Set(['.jpg', '.jpeg', '.png'])

async function findSourceImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const images = []

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)

    if (entry.isDirectory()) {
      if (entryPath !== outputDirectory) {
        images.push(...await findSourceImages(entryPath))
      }
      continue
    }

    if (sourceExtensions.has(path.extname(entry.name).toLowerCase())) {
      images.push(entryPath)
    }
  }

  return images
}

async function needsUpdate(sourcePath, outputPath) {
  try {
    const [sourceInfo, outputInfo] = await Promise.all([
      stat(sourcePath),
      stat(outputPath),
    ])
    return sourceInfo.mtimeMs > outputInfo.mtimeMs
  } catch {
    return true
  }
}

const sourceImages = await findSourceImages(imageDirectory)
let generatedWebpCount = 0

for (const sourcePath of sourceImages) {
  const relativePath = path.relative(imageDirectory, sourcePath)
  const parsedPath = path.parse(relativePath)
  const outputPath = path.join(outputDirectory, parsedPath.dir, `${parsedPath.base}.webp`)

  if (!await needsUpdate(sourcePath, outputPath)) continue

  await mkdir(path.dirname(outputPath), { recursive: true })
  await sharp(sourcePath)
    .webp({ quality: 82, effort: 6, smartSubsample: true })
    .toFile(outputPath)
  generatedWebpCount += 1
}

const appIconSource = path.join(imageDirectory, 'app-icon.png')
const appIconVariants = [
  { fileName: 'app-icon-64.png', size: 64 },
  { fileName: 'app-icon-180.png', size: 180 },
]
let generatedIconCount = 0

for (const variant of appIconVariants) {
  const outputPath = path.join(outputDirectory, variant.fileName)
  if (!await needsUpdate(appIconSource, outputPath)) continue

  await sharp(appIconSource)
    .resize(variant.size, variant.size)
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(outputPath)
  generatedIconCount += 1
}

console.log(
  `Image optimization: ${generatedWebpCount} WebP and ${generatedIconCount} icons generated; `
  + `${sourceImages.length - generatedWebpCount} WebP and ${appIconVariants.length - generatedIconCount} icons unchanged`,
)
