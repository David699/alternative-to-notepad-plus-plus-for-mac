---
slug: "validate-xml-xsd-dtd-on-mac"
title: "Validate XML Against an XSD or DTD on Mac, Offline"
shortTitle: "Validate XML with XSD or DTD on Mac"
description: "Check that an XML file is well-formed and valid against an XSD or DTD on Mac, using xmllint in Terminal or the XML panel in notePad++++, with errors you can click to jump to the line."
datePublished: "2026-09-30"
dateModified: "2026-09-30"
keywords:
  - "validate XML against XSD Mac"
  - "validate XML against DTD Mac"
  - "XML validator Mac offline"
  - "XML syntax checker Mac"
  - "xmllint Mac"
  - "XML editor Mac"
heroKicker: "Well-formed is not the same as valid"
heroSummary: "An XML file can be perfectly well-formed and still be wrong for the system that reads it: a missing required attribute, an element in the wrong place. A schema catches that. Here is how to check both levels on a Mac without uploading the file anywhere."
related:
  - label: "Validate YAML with a schema on Mac"
    href: "/en/validate-yaml-schema-on-mac/"
  - label: "Open and validate JSON, JSONC, and JSON5 on Mac"
    href: "/en/open-and-validate-json-jsonc-json5-on-mac/"
  - label: "Check HTML for common mistakes on Mac"
    href: "/en/check-html-for-errors-on-mac/"
  - label: "Text editor for Mac"
    href: "/en/text-editor-for-mac/"
  - label: "Back to product overview"
    href: "/en/"
externalLinks:
  - label: "Download notePad++++ on the App Store"
    href: "appStore"
    external: true
  - label: "W3C XML Schema (XSD) 1.0 specification"
    href: "https://www.w3.org/TR/xmlschema-1/"
    external: true
  - label: "View this website repository on GitHub"
    href: "github"
    external: true
faq:
  - q: "Is XML validation in notePad++++ free?"
    a: "Part of it. The XML panel, the syntax check, validation against the DTD declared in the file, the manual Validate button, and click-to-jump error locating are free. Choosing your own XSD or DTD file, and granting an extra folder when the schema references other files, are part of Pro. Pro is offered as a lifetime purchase with a free trial period, described on the App Store listing."
  - q: "Does it support XSD 1.1?"
    a: "No. The supported range is XML syntax, XSD 1.0, external DTDs, and DTDs declared inside the XML."
  - q: "Will it read the schema address written in my XML file?"
    a: "No. It does not follow schema locations written in the XML. You pick the XSD or DTD file yourself, and it must be a local file. Nothing is downloaded from the network, so save a remote schema to disk first."
  - q: "Is my XML sent anywhere?"
    a: "No. Validation runs on your Mac with the xmllint tool that ships with macOS, and network access is switched off for it. The check uses the text in the editor, including unsaved changes, and does not modify the file."
  - q: "Why does a passing file say content rules have not been checked?"
    a: "In syntax-only mode the panel reports that the XML syntax passed and that content rules have not been checked. That is accurate: well-formed only means the tags are balanced and the structure is legal, not that the content matches any schema."
---

## Two levels of correct

An XML file can be wrong in two different ways.

- **Not well-formed.** A tag is never closed, tags overlap, or a quote is missing. Any XML parser rejects the file.
- **Not valid.** The file parses fine but breaks the rules of an **XSD** (XML Schema) or a **DTD**: a required attribute is missing, an element appears where it is not allowed, or a value is the wrong type.

Some tools that consume XML, such as build systems, feeds, and configuration loaders, fail only at the second level, and their error messages can be vague. Checking against the schema yourself, while you edit, is faster.

## Option 1: xmllint in Terminal

macOS includes `xmllint` at `/usr/bin/xmllint`. These four commands cover the common cases:

```
xmllint --noout file.xml
xmllint --noout --schema order.xsd file.xml
xmllint --noout --dtdvalid order.dtd file.xml
xmllint --noout --valid file.xml
```

- The first checks that the file is well-formed.
- The second validates against an XSD.
- The third validates against a separate DTD file.
- The fourth validates against the DTD declared in the file's own `DOCTYPE`.

Each of these was run on macOS with sample files. A file with an unclosed tag reports:

```
bad.xml:5: parser error : Opening and ending tag mismatch: item line 4 and order
```

A well-formed file that does not match the XSD reports:

```
wrong.xml:2: element order: Schemas validity error : Element 'order': The attribute 'id' is required but missing.
wrong.xml:4: element product: Schemas validity error : Element 'product': This element is not expected. Expected is ( item ).
wrong.xml fails to validate
```

To check several files against the same schema:

```
for f in *.xml; do xmllint --noout --schema order.xsd "$f" 2>&1 | tail -1; done
```

Each file then prints one line, either `validates` or `fails to validate`. This is the right tool for a batch or a build script. It is less pleasant for fixing one file, because you read a line number in Terminal and then go find it in an editor.

## Option 2: The XML panel in notePad++++

When you open an XML file, an **XML** button appears at the top right of the editor. If problems are found, the number of issues is shown next to it. The panel runs the same `xmllint` that macOS provides, so the messages come from that tool, shown with the line number and, when `xmllint` reports one, the column.

1. **Syntax is checked by default.** The panel starts in **Check XML syntax** mode. It re-checks shortly after you stop typing and does not modify your file.
2. **Errors are marked in the editor.** Each problem is listed as `line:column · message`. Click one and the cursor jumps to that spot.
3. **Validate against the file's own DTD.** Choose **Validate using the XML's DTD declaration** to check the file against the `DOCTYPE` it declares. If that declaration points to a separate `.dtd` file, the app may need permission to read the folder it sits in.
4. **Validate against your own XSD or DTD.** Click **Choose XSD or DTD…**, pick the rule file, and confirm the folder-access window that follows. The current editor text is then checked, including changes you have not saved. This step is part of Pro.

After you choose a rule, it is remembered. The next XML file you open, and the next launch of the app, use the same rule until you pick another one or click **Clear rule**, which returns to syntax checking. If the remembered rule can no longer be found, the panel tells you to choose it again instead of quietly showing a pass.

### When the schema pulls in other files

XSD files often `include` or `import` other local files, and a DTD can reference files too. If one of them cannot be read, the panel shows a red notice with the full path, and explains that a file in another folder may need extra access. **Allow Another Folder…** grants it and the check retries automatically. Folder access you have already given is kept. Granting an extra folder is part of Pro.

## What it does not do

- **XSD 1.0 only.** XML syntax, XSD 1.0, external DTDs, and DTDs declared in the file are supported.
- **No schema download.** The schema address written inside your XML is not followed, and external entities and XInclude are not expanded. Save a remote schema to disk and choose that file.
- **Size limits.** Automatic validation supports XML up to 16 MiB, rule files up to 5 MiB, and each check is limited to 10 seconds. If a limit is exceeded, the panel says why and the file can still be edited normally.
- **One file at a time.** For a folder of files, use the `xmllint` loop above.

## Which route to use

| You want | Use |
| --- | --- |
| To know whether an XML file is well-formed | The XML panel's syntax check (free) |
| To check against the DTD declared in the file | Validate using the XML's DTD declaration (free) |
| To check against your own XSD or a separate DTD | Choose XSD or DTD… (Pro) |
| To jump straight to each error | Click the error in the XML panel |
| To check a whole folder of files | `xmllint` in a Terminal loop |
| XSD 1.1 features | A tool that supports XSD 1.1; this one does not |
