"""Check the exported pages for the issues confirmed by the October SEO audit."""
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
from xml.etree import ElementTree

SITE = 'https://notepad-plus-plus-mac.com'


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.alternates, self.meta, self.schemas = {}, {}, []
        self.headings, self.parts, self.text = [], None, []
        self.html, self.canonical, self.script = {}, None, False
        self.feed(html)

    def handle_starttag(self, tag, attributes):
        attrs = dict(attributes)
        if tag == 'html':
            self.html = attrs
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs['href']
        if tag == 'link' and 'hreflang' in attrs:
            self.alternates[attrs['hreflang']] = attrs['href']
        if tag == 'meta':
            self.meta[attrs.get('property', attrs.get('name'))] = attrs.get('content')
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.schemas.append('')
            self.script = True
        if tag in ('h2', 'h3'):
            self.parts = []

    def handle_endtag(self, tag):
        if tag == 'script':
            self.script = False
        if tag in ('h2', 'h3') and self.parts is not None:
            self.headings.append(self.parts)
            self.parts = None

    def handle_data(self, text):
        if self.script:
            self.schemas[-1] += text
        else:
            self.text.append(text)
        if self.parts is not None:
            self.parts.append(text)


pages = {}
for loc in ElementTree.parse('out/sitemap.xml').getroot().iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
    pathname = urlparse(loc.text).path
    file = Path('out', pathname.lstrip('/'), 'index.html')
    assert file.exists(), f'Missing page: {pathname}'
    pages[loc.text] = Page(file.read_text())

word = r'A-Za-zÀ-ž\u0400-\u04ff\uac00-\ud7af'
software_count = article_count = 0
for url, page in pages.items():
    assert page.canonical == url, f'Canonical changed: {url}'
    for language, target in page.alternates.items():
        assert target in pages, f'Invalid alternate: {url} -> {target}'
        if language == 'x-default':
            continue
        assert url in pages[target].alternates.values(), f'No return language link: {url} -> {target}'
    for parts in page.headings:
        for left, right in zip(parts, parts[1:]):
            assert not (re.search(f'[{word}]$', left) and re.match(f'[{word}]', right)), f'Joined heading text: {url}: {left!r} + {right!r}'
    if urlparse(url).path.startswith('/ar/'):
        assert page.html.get('dir') == 'rtl', f'Arabic document direction: {url}'
    schemas = []
    for raw in page.schemas:
        data = json.loads(raw)
        schemas.extend(data if isinstance(data, list) else [data])
    for data in schemas:
        if data.get('@type') == 'SoftwareApplication':
            software_count += 1
            rating, offer = data['aggregateRating'], data['offers']
            assert rating['ratingValue'] == 4.8 and rating['ratingCount'] == 501, url
            assert offer['price'] == 0 and offer['priceCurrency'] == 'USD', url
            assert 'pt=118772193' in offer['url'], url
            assert '501' in ''.join(page.text), f'Rating count must be visible: {url}'
            assert data['url'] == url, f'Software URL: {url}'
        if data.get('@type') == 'Article':
            article_count += 1
            image = data['image']
            assert image.startswith(SITE + '/images/'), f'Article image: {url}'
            assert Path('public', urlparse(image).path.lstrip('/')).exists(), image
            assert data['publisher']['url'] == SITE + '/', url
    if urlparse(url).path in ('/privacy/', '/terms/', '/en/privacy/', '/en/terms/'):
        assert page.meta.get('og:url') == url, f'Legal share URL: {url}'
        assert page.meta.get('og:image') and page.meta.get('twitter:card'), url
        assert any(item.get('@type') == 'WebPage' and item['url'] == url for item in schemas), url

group = pages[SITE + '/en/notepad-plus-plus-for-mac/'].alternates
assert len(group) == 14, 'Expected 13 article languages and x-default'
assert group['x-default'] == SITE + '/en/notepad-plus-plus-for-mac/'
assert all(pages[target].alternates == group for target in group.values()), 'Article language groups differ'
assert software_count == 11 and article_count == 47, (software_count, article_count)
print(f'SEO audit validation passed: {len(pages)} pages, {software_count} software schemas, {article_count} article schemas.')
