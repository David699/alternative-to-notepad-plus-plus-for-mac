import fs from 'node:fs'
import path from 'node:path'
import assert from 'node:assert/strict'
import ts from 'typescript'

const source = fs.readFileSync('lib/app-store-campaign.ts', 'utf8')
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2020 } }).outputText
const { appStoreCampaignForPath, APP_STORE_PROVIDER_TOKEN } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`)
const campaigns = new Map()
let checkedLinks = 0

function checkDirectory(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name)
    if (entry.isDirectory()) { checkDirectory(file); continue }
    if (!file.endsWith('.html')) continue
    const html = fs.readFileSync(file, 'utf8')
    const pathname = `/${path.relative('out', path.dirname(file)).split(path.sep).filter(Boolean).join('/')}/`.replace('//', '/')
    const expectedCampaign = appStoreCampaignForPath(pathname)
    const links = [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)]
      .map((match) => match[1].replaceAll('&amp;', '&'))
      .filter((href) => href.includes('apps.apple.com') && href.includes('id6759166160'))
    if (!links.length) continue
    assert(!campaigns.has(expectedCampaign), `Duplicate campaign: ${pathname}`)
    campaigns.set(expectedCampaign, pathname)
    for (const href of links) {
      const url = new URL(href)
      assert.equal(url.pathname, '/app/id6759166160', pathname)
      assert.equal(url.searchParams.get('pt'), APP_STORE_PROVIDER_TOKEN, pathname)
      assert.equal(url.searchParams.get('mt'), '12', pathname)
      assert.equal(url.searchParams.get('ct'), expectedCampaign, pathname)
      assert.match(expectedCampaign, /^[a-zA-Z0-9_]{1,30}$/)
      checkedLinks++
    }
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      const data = JSON.parse(match[1])
      if (data['@type'] === 'SoftwareApplication' && data.offers) {
        const offer = new URL(data.offers.url)
        assert.equal(offer.searchParams.get('ct'), expectedCampaign, `Offer campaign: ${pathname}`)
        assert.equal(offer.searchParams.get('pt'), APP_STORE_PROVIDER_TOKEN)
      }
    }
  }
}

checkDirectory('out')
assert(campaigns.size >= 58, 'Homepage or article download links are missing')
console.log(`App Store campaign validation passed: ${campaigns.size} pages, ${checkedLinks} download links.`)
