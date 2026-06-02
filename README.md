# notePad++++ Landing Page

This is the official landing page for **notePad++++**, a macOS text editing workbench.

Live site: https://david699.github.io/alternative-to-notepad-plus-plus-for-mac/

## Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS** - utility-first styling
- **Framer Motion** - animations
- **TypeScript**

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build (static export)

```bash
npm run build
```

Output goes to `out/` - ready for GitHub Pages or any static host.

## Google Ads download conversion

The global Google Ads tag is installed in `app/layout.tsx`.

App Store download clicks emit `app_store_download_click` and also report the Google Ads conversion `AW-10873493085/GAr0COeAorEcEN2s8cAo`. To override it, set one of these build-time environment variables before `npm run build`:

```bash
NEXT_PUBLIC_GOOGLE_ADS_DOWNLOAD_CONVERSION_LABEL=GAr0COeAorEcEN2s8cAo
# or
NEXT_PUBLIC_GOOGLE_ADS_DOWNLOAD_CONVERSION_SEND_TO=AW-10873493085/GAr0COeAorEcEN2s8cAo
```

## Deploy to GitHub Pages

1. Set GitHub Pages source to the `out/` directory (or use GitHub Actions).
2. Make sure `next.config.js` has `output: export`.

## Assets

App screenshots and icons are in `public/images/`.

Original assets sourced from `../pic/` and `../pic/appstore-promos/`.
