---
slug: "open-and-validate-json-jsonc-json5-on-mac"
title: "Open and Validate JSON, JSONC, and JSON5 Files on Mac"
shortTitle: "Open JSON, JSONC, and JSON5 on Mac"
description: "How to open, check, and explore JSON, JSONC (JSON with comments), and JSON5 files on Mac, with a column-style structure view, search, JSONPath copying, and error locating in notePad++++."
datePublished: "2026-09-30"
dateModified: "2026-09-30"
keywords:
  - "open JSONC file Mac"
  - "JSON5 editor Mac"
  - "JSON viewer Mac"
  - "validate JSON Mac"
  - "JSON with comments Mac"
  - "copy JSONPath Mac"
heroKicker: "Three flavors of JSON, one editor"
heroSummary: "Strict JSON rejects comments, JSONC allows them, and JSON5 allows even more. Open the wrong one in a strict tool and you get errors that are not real. Here is how each is handled in notePad++++, and how to explore a big JSON file without scrolling."
related:
  - label: "Validate YAML with a schema on Mac"
    href: "/en/validate-yaml-schema-on-mac/"
  - label: "Check HTML for common mistakes on Mac"
    href: "/en/check-html-for-errors-on-mac/"
  - label: "Validate XML against an XSD or DTD on Mac"
    href: "/en/validate-xml-xsd-dtd-on-mac/"
  - label: "JavaScript text processing on Mac"
    href: "/en/javascript-text-processing-mac/"
  - label: "Text editor for Mac"
    href: "/en/text-editor-for-mac/"
  - label: "Back to product overview"
    href: "/en/"
externalLinks:
  - label: "Download notePad++++ on the App Store"
    href: "appStore"
    external: true
  - label: "JSON5 specification"
    href: "https://json5.org/"
    external: true
  - label: "Editing JSON with Visual Studio Code"
    href: "https://code.visualstudio.com/docs/languages/json"
    external: true
  - label: "View this website repository on GitHub"
    href: "github"
    external: true
faq:
  - q: "What is the difference between JSON, JSONC, and JSON5?"
    a: "JSON is the strict format with no comments. JSONC is JSON that allows comments and trailing commas, common in editor configuration files. JSON5 is a more relaxed superset that also allows single-quoted strings, unquoted keys, and hexadecimal numbers."
  - q: "How do I copy the path to a value?"
    a: "In the JSON structure view, select a node and choose Copy JSONPath or Copy JSON Pointer."
  - q: "Can I format a file that has errors?"
    a: "No. Format works only on valid content. If the content cannot be parsed, the app says it cannot be formatted and offers to locate the error."
  - q: "Are all the JSON tools free?"
    a: "No. Loading JSON from a web address and the Related values panel are part of Pro. Check the App Store listing for what else Pro includes."
---

## The three formats

- **JSON** is strict. No comments, no trailing commas, double-quoted strings and keys only.
- **JSONC**, JSON with comments, allows `//` and `/* */` comments and trailing commas. It is common in editor configuration files.
- **JSON5** relaxes more: comments, single-quoted strings, unquoted keys, hexadecimal numbers, and values such as `Infinity` and `NaN`.

A strict tool that opens a `.jsonc` or `.json5` file reports errors that are not errors in the format the file was written in. What you need is an editor that knows which flavor it is looking at.

## How each is handled in notePad++++

- **`.json`** files are checked as JSON, with syntax highlighting and error markers.
- **`.jsonc`** files allow comments and trailing commas, so a configuration file with notes in it opens without false errors.
- **`.json5`** files get their own syntax highlighting, and the content is checked with a JSON5 parser as you type, so real mistakes are marked while valid JSON5 features are not.

Visual Studio Code has a comparable mode for configuration files; its documentation describes a JSON with Comments language mode.

## Explore a large document without scrolling

The **JSON Structure** view shows the document as columns, like the Finder's column view: pick an object, and its children appear in the next column.

- **Search** by keys, paths, or values, or all three at once.
- **Resize** the columns by dragging. Double-click to reset the width.
- **Copy** a key, a value, a JSONPath, or a JSON Pointer from the selected node.
- A **Types** summary shows the mix of value types in the selected node.

If the content cannot be parsed, the view says the current content is not valid and offers **Locate error**, which jumps to the problem in the editor.

## Format a document

**Format** applies two-space indentation without changing the data. It works only on valid content. If the text has an error, the app tells you it cannot be formatted, so you fix the error first.

## Pro features

Two tools in this area are part of Pro:

- **Load JSON from URL** downloads a JSON document from an HTTP or HTTPS address. Afterwards you choose whether to replace the current content or create a new file, and recent addresses are remembered.
- **Related values** looks at a key across a set of items and summarizes how many have it, how many are missing it, and how many distinct values there are. It is useful for checking consistency in a list of records.

## Which tool for which job

| You want | Use |
| --- | --- |
| To open a config file that has comments | A `.jsonc` file, which allows comments |
| To read a relaxed JSON5 file | A `.json5` file, checked with a JSON5 parser |
| To find where a key or value occurs | Search in the JSON Structure view |
| The path to a value, for code or a query | Copy JSONPath or Copy JSON Pointer |
| To tidy indentation | Format |
| To check a key across many records | Related values (Pro) |
