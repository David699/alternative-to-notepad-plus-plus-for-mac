# Notepad++ for Mac Alternative - notePad++++

This repository powers the public landing page for **notePad++++**, a lightweight macOS text editor built for people searching for a practical **Notepad++ for Mac alternative**.

Live site: https://david699.github.io/alternative-to-notepad-plus-plus-for-mac/

## Why this page exists

Many Mac users search for **Notepad++ for Mac** after moving from Windows, only to find that Notepad++ does not ship an official native macOS version. The usual choices are either heavy IDEs, minimal note apps, or ports that do not feel like a clean Mac-first editor.

**notePad++++** is designed around that gap: a fast, focused text editing workbench for macOS users who want the familiar spirit of Notepad++ without leaving the Mac experience behind.

## What notePad++++ is

notePad++++ is a native macOS editor for everyday text work: opening local files, editing plain text and code-like documents, working across tabs, handling useful editor workflows, and staying lightweight enough for quick daily use.

It is positioned as:

- A **Notepad++ alternative for Mac**
- A lightweight **Mac text editor**
- A practical editor for users who want something simpler than a full IDE
- A macOS-focused replacement for common Notepad++ workflows

## Search intent this landing page targets

The landing page is written for users searching terms such as:

- `notepad++ for mac`
- `notepad plus plus for mac`
- `notepad++ mac alternative`
- `alternative to notepad++ for mac`
- `mac notepad++ replacement`
- `lightweight text editor for mac`

The goal is to make the page easy for search engines to understand while still reading naturally for real users.

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

The global Google Ads tag is installed in `app/layout.tsx` only when `NEXT_PUBLIC_GOOGLE_ADS_ID` is provided at build time.

App Store download clicks emit `app_store_download_click` and also report the Google Ads conversion when the build-time environment variables are configured:

```bash
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_ADS_DOWNLOAD_CONVERSION_LABEL=XXXXXXXXXXXX
# or
NEXT_PUBLIC_GOOGLE_ADS_DOWNLOAD_CONVERSION_SEND_TO=AW-XXXXXXXXXX/XXXXXXXXXXXX
```

## Deploy to GitHub Pages

1. Set GitHub Pages source to the `out/` directory (or use GitHub Actions).
2. Make sure `next.config.js` has `output: export`.

## Assets

App screenshots and icons are in `public/images/`.

Original assets sourced from `../pic/` and `../pic/appstore-promos/`.
