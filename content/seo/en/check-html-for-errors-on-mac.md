---
slug: "check-html-for-errors-on-mac"
title: "Check HTML for Common Mistakes on Mac: Missing Alt Text, Viewport, Duplicate IDs, and Broken Paths"
shortTitle: "Check HTML for Errors on Mac"
description: "Find unclosed tags, missing alt text, duplicate IDs, and broken local file paths in an HTML file on Mac, and preview it on phone and tablet sizes, all inside {{APP_NAME}}."
datePublished: "2026-09-30"
dateModified: "2026-09-30"
keywords:
  - "check HTML errors Mac"
  - "HTML validator Mac offline"
  - "HTML editor with preview Mac"
  - "find missing alt text HTML"
  - "HTML duplicate id checker"
  - "responsive HTML preview Mac"
heroKicker: "Catch the boring mistakes before the browser does"
heroSummary: "Most HTML problems are not exotic: a tag that never closes, an image with no alt text, a page without a viewport tag, an image path that only works on your machine. A quick inspection finds these while you edit, next to a live preview."
related:
  - label: "HTML editor with live preview on Mac"
    href: "/en/html-editor-with-live-preview-mac/"
  - label: "Responsive HTML preview on Mac"
    href: "/en/responsive-html-preview-mac/"
  - label: "Open and validate JSON, JSONC, and JSON5 on Mac"
    href: "/en/open-and-validate-json-jsonc-json5-on-mac/"
  - label: "Validate XML against an XSD or DTD on Mac"
    href: "/en/validate-xml-xsd-dtd-on-mac/"
  - label: "Text editor for Mac"
    href: "/en/text-editor-for-mac/"
  - label: "Back to product overview"
    href: "/en/"
externalLinks:
  - label: "Download {{APP_NAME}} on the App Store"
    href: "appStore"
    external: true
  - label: "View this website repository on GitHub"
    href: "github"
    external: true
faq:
  - q: "Is this a full W3C HTML validator?"
    a: "No. It is a quick inspection that catches common structural, accessibility, and path mistakes while you edit. For strict standards conformance, use a dedicated validator such as the Nu HTML Checker."
  - q: "Does it check pictures, stylesheets, and scripts I reference?"
    a: "Yes, through Inspect local resources, which is part of Pro. It reports files that do not exist, files outside the folder the preview can read, paths that use backslashes or a leading tilde, and absolute file paths that will not work on another machine."
  - q: "Do I need to save the file first?"
    a: "For the local resource check, yes. The app asks you to save the HTML file into a folder before it can check relative paths."
  - q: "Can I see how the page looks on a phone?"
    a: "Yes. The preview offers Responsive, Desktop, iPad, and Phone modes, with common resolutions, custom sizes, and a button to switch between portrait and landscape. Responsive and Desktop are available without Pro; the iPad and Phone modes are part of Pro."
---

## What goes wrong in real HTML

Most HTML problems are not exotic. A tag is left open, so the layout shifts. An `img` has no `alt`, so a screen reader says nothing. There is no viewport tag, so a phone shows a shrunken desktop page. Two elements share an `id`, so a link or script grabs the wrong one. An image path points at a file on your desktop and works only on your machine.

None of these needs a heavyweight validator. They need a fast check that runs while you type.

## What the HTML inspection looks for

{{APP_NAME}} inspects the HTML file you have open and lists problems with their location. The checks fall into groups.

| Group | What it flags |
| --- | --- |
| Tag structure | A closing tag with no matching opening tag; a tag missing its closing `>`; a tag that is never closed; an attribute that appears twice on one tag |
| Document basics | No `<!doctype html>`; no `lang` on `<html>`; no `<title>`; no declared character encoding; no viewport setting for phones and tablets |
| Accessibility and forms | An image without `alt`; a form control with no label; a form control with no `name`, which means it is left out of form data |
| Links inside the page | An `id` that duplicates another; a link to `#something` that no element matches |
| Local resource paths | An invalid path; an absolute file path; a path starting with `~`; backslashes instead of `/`; a path outside the file's folder; a file that does not exist; a file that cannot be read |

If nothing is wrong, the panel says no problems were found.

## Inspect local resources (Pro)

Broken paths are the most frustrating mistake because the page looks fine on your machine. **Inspect local resources** looks for missing images, stylesheets, and scripts, and for paths that will not work when the page is moved. Save the file into a folder first, because relative paths are checked against that folder.

Preview errors are also collected in a separate **Preview errors** panel, which lists script errors and resources that failed to load, along with line and column where available. It is part of Pro.

## Preview on any screen size

The preview can show your page as it would look on different devices:

- **Responsive** and **Desktop** modes, which are available without Pro
- **iPad** and **Phone** modes, which are part of Pro
- A list of common resolutions, or a **custom** width and height
- A button to **switch between portrait and landscape**

Two more tools help you move between preview and source. **HTML structure** lists the page sections and jumps to their opening tags. **Preview and code location**, part of Pro, lets you click a preview element to find its code, or highlight the preview element at your cursor.

## Quick edit

For small changes, **HTML quick edit** wraps selected text in common elements such as a container, paragraph, inline area, strong text, link, or comment, and inserts common snippets such as an image, a stylesheet, a script, or a phone viewport tag. The viewport snippet adds the tag that phones need in one step.

## Where this fits

| You want | Use |
| --- | --- |
| A fast check while you edit | HTML inspection |
| To find broken image or stylesheet paths | Inspect local resources (Pro) |
| To see script errors and failed loads | Preview errors (Pro) |
| To see the page on a phone or iPad | Device preview (iPad and Phone modes are Pro) |
| Strict standards validation | A dedicated validator such as the Nu HTML Checker |
