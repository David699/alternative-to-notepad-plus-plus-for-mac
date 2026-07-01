import { readFileSync } from 'node:fs'

const host = 'notepad-plus-plus-mac.com'
const key = readFileSync('public/a690914d34e4a7106c6bceea6e438c7c.txt', 'utf8').trim()
const keyLocation = `https://${host}/${key}.txt`
const endpoint = 'https://api.indexnow.org/indexnow'

const defaultUrls = [
  `https://${host}/en/text-editor-for-mac/`,
  `https://${host}/en/plain-text-editor-for-mac/`,
  `https://${host}/en/notepad-for-mac/`,
  `https://${host}/en/regex-find-replace-mac/`,
  `https://${host}/en/batch-text-processing-mac/`,
]

const urlList = process.argv.slice(2)
const urls = urlList.length > 0 ? urlList : defaultUrls

const response = await fetch(endpoint, {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host, key, keyLocation, urlList: urls }),
})

const body = await response.text()

console.log(`IndexNow response: ${response.status} ${response.statusText}`)
if (body) {
  console.log(body)
}

if (![200, 202].includes(response.status)) {
  process.exitCode = 1
}
