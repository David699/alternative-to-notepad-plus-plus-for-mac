---
slug: "delete-lines-containing-text-on-mac"
title: "Delete Lines Containing Text on Mac: Regex in an Editor, or Terminal"
shortTitle: "Delete Lines Containing Text on Mac"
description: "Remove every line that contains a word or pattern from a text file on Mac, using regex find and replace in notePad++++ or grep and sed in Terminal, with tested examples."
datePublished: "2026-09-30"
dateModified: "2026-09-30"
keywords:
  - "delete lines containing text Mac"
  - "remove lines containing string Mac"
  - "Notepad++ remove lines containing Mac"
  - "regex delete line Mac text editor"
  - "delete lines with word Mac"
heroKicker: "Filter a log or list by deleting what you do not need"
heroSummary: "Deleting every line that contains a word is a one-line regex, but it is easy to get the last line, the line break, or the capitalization wrong. Here are patterns that were tested, plus Terminal equivalents and a safer non-destructive route."
heroImage: "/images/screen-search-en.png"
heroImageAlt: "notePad++++ search and replace with regex, showing match counts per file and replacement previews"
related:
  - label: "Sort lines and remove duplicate lines on Mac"
    href: "/en/sort-and-remove-duplicate-lines-on-mac/"
  - label: "Regex find and replace on Mac"
    href: "/en/regex-find-replace-mac/"
  - label: "Batch text processing on Mac"
    href: "/en/batch-text-processing-mac/"
  - label: "Text editor for Mac"
    href: "/en/text-editor-for-mac/"
  - label: "Back to product overview"
    href: "/en/"
externalLinks:
  - label: "Download notePad++++ on the App Store"
    href: "appStore"
    external: true
  - label: "Official Notepad++ website"
    href: "notepadPlusPlus"
    external: true
  - label: "View this website repository on GitHub"
    href: "github"
    external: true
faq:
  - q: "Is the search case sensitive?"
    a: "In notePad++++ it ignores capitals unless you turn on Match Case. In the Terminal sed and grep examples below, matching is case sensitive by default, so ERROR and error are different."
  - q: "How do I keep only the lines that contain the word?"
    a: "Use Extract to New Tab, which copies the matching lines into a new tab and leaves the original untouched. In Terminal, grep 'word' file prints only the matching lines."
  - q: "Why does my regex leave an empty line behind?"
    a: "The line break at the end of each line is part of what you need to match. End the pattern with \\n? so the break is deleted along with the text."
  - q: "Can I undo a Replace All?"
    a: "Work on a copy of the file first, or save before you start. After Replace All the app reports how many replacements were made, which is a quick check that the count matches what you expected."
---

## The idea

To delete every line that contains a word, you match the entire line and replace it with nothing. In regular expressions, `^.*word.*` matches a whole line containing `word`, and adding `\n?` at the end includes the line break so that no empty line is left behind.

## Option 1: Regex find and replace in notePad++++

1. Open the file and open the search panel.
2. Turn on **Regex**. Turn on **Match Case** only if capitals matter.
3. In the find field, enter the pattern below.
4. Leave **Replace with** empty.
5. Choose **Replace All**. The app reports how many replacements were made.

Patterns to copy, using `error` as the example word:

| You want to | Pattern |
| --- | --- |
| Delete lines containing `error` | `^.*error.*\n?` |
| Delete lines that do **not** contain `error` | `^(?!.*error).*\n?` |
| Delete lines that start with `#` | `^#.*\n?` |
| Delete blank lines | `^[ \t]*\n` |
| Delete lines containing `foo` or `bar` | `^.*(foo|bar).*\n?` |

These were run against sample text with a regex engine using the same rules as the editor: a line-anchored pattern with case-insensitive matching. On a small test, `^.*error.*\n?` removed every line containing `error`, in any capitalization, and left the other lines intact.

## A safer route: keep, do not delete

If you are not sure you want to lose the lines, extract instead. **Extract to New Tab** copies every line that matches your search into a new tab and leaves the original file as it was. You can review the result and only then decide what to do.

## Option 2: Terminal

To write the result to a new file without touching the original:

```
grep -v 'error' log.txt > cleaned.txt
```

`grep -v` prints every line that does **not** contain the text, which is the same as deleting the lines that do. Matching is case sensitive. Add `-i` to ignore capitals.

To edit the file in place, macOS needs an empty string after `-i`:

```
sed -i '' '/error/d' log.txt
```

This is where most Mac users get tripped up: the Linux form `sed -i '/error/d'` fails on macOS because its `sed` is the BSD version. The command above was tested on macOS and deletes only the lines that match exactly as typed, so it left a line containing `ERROR` in place.

In-place editing overwrites the file. Keep a copy.

## Choosing between them

| Situation | Best route |
| --- | --- |
| A one-off cleanup where you want to see it happen | Regex Replace All in notePad++++ |
| You are unsure and want to review first | Extract to New Tab |
| A script or a repeated job on many files | `grep -v` or `sed` in Terminal |
| Capitalization must be ignored | Regex with Match Case off, or `grep -vi` |

## Common mistakes

- **Forgetting the line break.** Without `\n?`, the text disappears but an empty line remains.
- **Matching too much.** `.*` is greedy within a line. A pattern such as `^.*id.*` also matches `video` and `provide`. Anchor the word if that matters, for example `^.*\bid\b.*\n?`.
- **Running it on the only copy.** Save first, or work on a duplicate.
