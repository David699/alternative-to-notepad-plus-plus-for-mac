# notePad++++ Landing Page

This is the official landing page for **notePad++++**, a macOS text editing workbench.

## Stack

- **Next.js 14** (App Router, static export)
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations
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

Output goes to `out/` — ready for GitHub Pages or any static host.

## Deploy to GitHub Pages

1. Set GitHub Pages source to the `out/` directory (or use GitHub Actions)
2. Make sure `next.config.js` has `output: 'export'`

## Assets

App screenshots and icons are in `public/images/`.

Original assets sourced from `../pic/` and `../pic/appstore-promos/`.
