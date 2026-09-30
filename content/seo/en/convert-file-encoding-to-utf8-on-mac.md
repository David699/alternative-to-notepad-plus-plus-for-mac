---
slug: "convert-file-encoding-to-utf8-on-mac"
title: "Convert GBK, Shift-JIS, or Big5 Text Files to UTF-8 on Mac (and Fix Garbled Text)"
shortTitle: "Convert File Encoding to UTF-8 on Mac"
description: "Fix garbled Chinese, Japanese, or Korean text files on Mac and convert them to UTF-8, using iconv in Terminal or the encoding menu in notePad++++."
datePublished: "2026-09-30"
dateModified: "2026-09-30"
keywords:
  - "convert GBK to UTF-8 Mac"
  - "Shift-JIS to UTF-8 Mac"
  - "Big5 to UTF-8 Mac"
  - "fix garbled text file Mac"
  - "change text file encoding Mac"
  - "Mac text editor encoding"
heroKicker: "When old text files open as gibberish"
heroSummary: "A file from a Windows machine, an old export, or a log from another system can open as random symbols because it is not UTF-8. The fix is to tell the editor the real encoding, then save a clean UTF-8 copy."
related:
  - label: "Sort lines and remove duplicate lines on Mac"
    href: "/en/sort-and-remove-duplicate-lines-on-mac/"
  - label: "Plain text editor for Mac"
    href: "/en/plain-text-editor-for-mac/"
  - label: "Text editor for Mac"
    href: "/en/text-editor-for-mac/"
  - label: "Does Notepad++ work on Mac?"
    href: "/en/does-notepad-plus-plus-work-on-mac/"
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
  - q: "What is the difference between re-reading and converting?"
    a: "Re-reading changes how the app interprets the bytes already on disk, which fixes garbled text without altering the file. Converting rewrites the file in a new encoding. Fix the display first with re-read, and only convert once the text looks right."
  - q: "Does notePad++++ support EUC-KR or EUC-JP?"
    a: "The encoding menu lists UTF-8, UTF-16 LE and BE, Latin-1, Win-1252, GBK, GB18030, Big5, Shift-JIS, and Win-949. Win-949 is Microsoft's Korean code page, a superset of EUC-KR. EUC-JP is not in the menu, so for those files use iconv in Terminal."
  - q: "Why does the file command guess wrong?"
    a: "Detecting a legacy encoding from bytes is a guess, and short files give little to go on. In a quick test on macOS, file -I reported a GBK sample as iso-8859-1. Treat any automatic detection as a starting point and confirm by reading the text."
  - q: "Will converting to UTF-8 damage my file?"
    a: "Not if you choose the correct source encoding. If you convert a file that was decoded with the wrong encoding, the wrong characters are written out permanently. Keep the original until you have checked the result."
---

## Why the text is garbled

Text files store characters as bytes, and different encodings map the same bytes to different characters. Modern files are almost always UTF-8. Older files from Chinese, Japanese, and Korean systems often are not: they use GBK or GB18030, Big5, Shift-JIS, or a Korean code page. Open one of those as UTF-8 and you get random symbols or question marks.

The fix has two steps: read the file using its real encoding, then, if you want to, save a copy as UTF-8.

## Which encoding is it

If you know where the file came from, this table usually settles it:

| Source | Likely encoding |
| --- | --- |
| Simplified Chinese, Windows | GBK or GB18030 |
| Traditional Chinese, Taiwan or Hong Kong | Big5 |
| Japanese, Windows | Shift-JIS |
| Korean, Windows | Win-949 (a superset of EUC-KR) |
| Western European, Windows | Win-1252 |

If you are not sure, try the likely candidates and see which one produces readable text.

## Option 1: iconv in Terminal

macOS includes `iconv`. Give it the source encoding and the target, and write to a new file:

```
iconv -f GBK -t UTF-8 input.txt > output.txt
iconv -f SHIFT_JIS -t UTF-8 input.txt > output.txt
iconv -f EUC-KR -t UTF-8 input.txt > output.txt
```

Each of these was tested on macOS with a short sample and produced the expected characters. `iconv -l` lists every encoding name your Mac accepts.

To convert a whole folder of files into a new `utf8` folder:

```
mkdir utf8
for f in *.txt; do iconv -f GBK -t UTF-8 "$f" > "utf8/$f"; done
```

Always write to a new file. Redirecting onto the input file would empty it.

## Option 2: The encoding menu in notePad++++

1. Open the file. notePad++++ tries to detect the encoding when it opens, and can recognize GB18030, GBK, Big5, Shift-JIS, and Korean text among others.
2. Look at the encoding shown in the status bar. If the text is garbled, click it to open the encoding menu.
3. Choose **Re-read using specified encoding** and pick the correct one, for example GBK or Shift-JIS. The text is reloaded using that encoding. You must save or discard unsaved changes first, because the current text is replaced.
4. When the text reads correctly, open the encoding menu again, choose **Convert to specified encoding and save**, and pick **UTF-8**. Confirm the prompt.

The menu lists UTF-8, UTF-16 LE and BE, Latin-1, Win-1252, GBK, GB18030, Big5, Shift-JIS, and Win-949.

## Two things worth knowing

- **Detection is only a guess.** Even command-line detection can be wrong. In a quick test, `file -I` reported a short GBK sample as `iso-8859-1`. Always confirm by reading the result.
- **Fix the display before you save.** Re-reading is reversible because it does not change the file. Saving in a different encoding does. If you save while the text is still garbled, you make the garbage permanent.

## Which method to use

| Situation | Best route |
| --- | --- |
| One file, and you want to see the text as you fix it | notePad++++ re-read, then convert |
| Many files with the same encoding | `iconv` in a loop |
| A file in an encoding not in the menu, such as EUC-JP | `iconv` |
| You are not sure which encoding it is | Try candidates with Re-read and compare |
