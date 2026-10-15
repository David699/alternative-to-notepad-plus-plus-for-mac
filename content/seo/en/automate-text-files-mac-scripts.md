---
slug: "automate-text-files-mac-scripts"
title: "Automate Text Files on Mac: Built-in & Custom Scripts"
shortTitle: "Automate Text Files on Mac with Scripts"
description: "Clean up text files on Mac with built-in or custom scripts. See real folder previews, automatic backups and restoration in {{APP_NAME}}."
datePublished: "2026-10-16"
dateModified: "2026-10-16"
keywords:
  - "automate text files mac"
  - "batch edit text files mac"
  - "text processing scripts mac"
  - "bulk text processing mac"
  - "custom text editor scripts mac"
heroKicker: "Start with a ready-made rule. Keep it when it works."
heroSummary: "Clean up a list with built-in scripts, write a rule for your own text, and reuse it across a folder. In {{APP_NAME}}, you can inspect changes before writing and recover eligible batch changes from their backups."
heroImage: "/images/seo/english-home/pipeline-gallery-real.webp"
heroImageAlt: "Real {{APP_NAME}} Pipeline Gallery with built-in workflows for cleaning lists, extracting links and preparing email lists."
related:
  - label: "JavaScript script contract and reusable pipelines"
    href: "/en/javascript-text-processing-mac/"
  - label: "Batch text processing overview"
    href: "/en/batch-text-processing-mac/"
  - label: "Sort and remove duplicate lines on Mac"
    href: "/en/sort-and-remove-duplicate-lines-on-mac/"
  - label: "Search multiple keywords in text files"
    href: "/en/search-multiple-keywords-text-file-mac/"
  - label: "Product overview"
    href: "/en/"
externalLinks:
  - label: "Download {{APP_NAME}} on the Mac App Store"
    href: "appStore"
    external: true
  - label: "View the website repository"
    href: "github"
    external: true
faq:
  - q: "Can I automate text cleanup on Mac without writing code?"
    a: "Yes. Start with a built-in script or a ready-made pipeline for jobs such as trimming trailing spaces, removing empty lines, deduplicating, sorting or extracting links. Inspect its result on a small example first."
  - q: "What if none of the built-in scripts fits my text?"
    a: "Write a custom JavaScript run(ctx) function, or use Copy as My Script to adapt an existing script. Save it under My Scripts for reuse. The script receives text from the App; it does not open arbitrary files itself."
  - q: "Can AI help me write the script?"
    a: "Yes. Configure your own AI provider and API access, then use AI Script Assistant to create or modify a script. This is optional. Check the generated code and preview its output; provider terms and charges apply."
  - q: "Can I run a script on a folder of text files?"
    a: "Yes. Open an authorized workspace folder, select file types and filters, choose a script or pipeline, then use Preview. Check the file list and per-file differences before applying changes. Batch processing requires Pro access or an eligible trial."
  - q: "Does Preview change the original files?"
    a: "The batch Preview mode calculates results without writing to disk. Apply or Apply All is a separate action. In our three-file test, the original bytes were unchanged after Preview."
  - q: "How do I undo a batch script operation?"
    a: "Open its entry in Operation History and use Restore this operation while its backups are available. Batch backups are retained for seven days. Files edited since that operation, or with unsaved open edits, are skipped rather than overwritten."
  - q: "Do I need Node.js, npm or a Terminal command?"
    a: "No. The App runs supported text-processing JavaScript locally. It is not a general Node.js environment: arbitrary filesystem, network and process access are unavailable, and execution has limits."
  - q: "Does restoration replace a separate backup of my work?"
    a: "No. Operation backups are temporary, apply to the files backed up for that operation and have eligibility checks. Keep your normal backups for important work and check any errors or skipped files after restoring."
---

## Automate the repeated part of editing

**To automate text files on Mac, start with a built-in rule, check its result, then reuse it on the files that need the same change.** If the rule does not exist yet, save a custom script instead of repeating the edit by hand.

The useful combination in {{APP_NAME}} is more than a code box: ready-made scripts, reusable sequences, an optional AI writing assistant, folder selection, a preview before writing, and an operation history with recoverable backups.

This guide is written by the developer of {{APP_NAME}}. The opening image reuses our real Pipeline Gallery capture. The close-ups below were captured from the installed Mac App with a small, fictional roster folder. They have been cropped and converted to WebP; the controls and result counts have not been redrawn. The AI screenshot shows a prepared request, not a submitted request or a claimed AI-generated result.

Some advanced tools, including folder batch processing, its history and AI assistance, require **Pro access or an eligible trial**. Check the [Mac App Store listing](https://apps.apple.com/cn/app/id6759166160?ct=seo_script_automation_intro&mt=12) for current requirements and terms.

## Start with the built-in scripts

You do not have to write JavaScript to begin. The checked App contains dozens of individual scripts, grouped by job, plus ready-made sequences in **Pipeline Gallery**.

| Your repeated task | A built-in starting point | Check before using it |
| --- | --- | --- |
| Clean up pasted text | Trim Trailing Whitespace; Remove Empty Lines | Trimming trailing spaces is different from removing leading indentation. |
| Keep one copy of each entry | Deduplicate Lines (Keep Order) | Decide whether the original order matters and whether differently capitalized entries should remain distinct. |
| Order a list | Sort Lines A-Z or Z-A | Sorting deliberately changes the order. |
| Collect values from notes | Extract URLs, Emails, Numbers, IPs or Dates | Inspect the extracted values against your real input. |
| Reformat JSON | JSON Format (Pretty) or JSON Minify | Use valid JSON as input and review the output. |
| Convert identifiers or encodings | Naming-style conversions, URL encoding and Base64 tools | Choose the conversion that matches the receiving tool. |

Built-in scripts are read-only starting points. To adapt one, use **Copy as My Script** and save your own version rather than changing the original.

## Reuse a sequence instead of repeating four commands

A **pipeline** is an ordered sequence of scripts: one step's output becomes the next step's input. The gallery includes:

- **Word List / Roster Cleanup:** trim trailing spaces, remove empty lines, remove duplicate lines, then sort.
- **Link Harvest / URL List Cleanup:** extract and organize links.
- **Email List Cleanup / Address Book Dedup:** extract addresses, normalize case, remove duplicates and sort.
- Other starting points for date lists, Markdown-to-text conversion, typography and shuffled lists.

The roster workflow is the one demonstrated below. It sorts the result; choose a different sequence when preserving the original order is part of the requirement. You can keep custom sequences in the Pipeline Center rather than choosing each step again.

## Try the same folder used in the screenshots

[Download the fictional demonstration folder (.zip)](/samples/script-automation-demo.zip). Extract it before opening it as a workspace in the App.

```text
script-automation-demo/
  roster-east.txt
  roster-west.txt
  team/
    roster-north.txt
  README.md
```

The three TXT files contain repeated IDs, blank lines and trailing spaces. The Markdown file explains the example and should be excluded when only TXT is selected.

For example, the east roster starts with:

```text
OLD-104
OLD-101

OLD-104
OLD-102
```

The downloaded second line also has trailing spaces. The roster cleanup produces the three IDs in order: **OLD-101, OLD-102, OLD-104**.

## Add a custom script when the built-ins do not match

Suppose the next job is specific to your project: change **OLD-** to **NEW-** only at the beginning of each line, leaving everything else alone.

1. Open the sample TXT file, then click **Script** in the toolbar.
2. Choose **Script Draft**, or use **Copy as My Script** when starting from a built-in.
3. Enter a supported `run(ctx)` function. Here is the rule used in our demonstration:

```javascript
function run(ctx) {
  return {
    mode: "transform",
    transform: {
      text: ctx.text.replace(/^OLD-/gm, "NEW-")
    }
  };
}
```

`ctx.text` is the text supplied by the App. The rule returns the proposed result; it does not open or write files itself. The beginning-of-line pattern limits the change to the prefix.

<figure class="mx-auto max-w-3xl">
<img src="/images/seo/script-automation/custom-editor-real.webp" width="780" height="360" loading="lazy" alt="Real Script window with Demo - OLD to NEW saved as a custom text-processing rule." />
<figcaption>The same rule, saved as “Demo - OLD to NEW” in the real App. The screenshot shows it on one wrapped code line; the formatted example above has the same behavior.</figcaption>
</figure>

Use **Save as My Script** to give the rule a name and reuse it later. In this demonstration, **Run** opened a **Script Change Preview** before the result could be applied to the document.

<figure class="mx-auto max-w-4xl">
<img src="/images/seo/script-automation/custom-preview-real.webp" width="920" height="620" loading="lazy" alt="Real custom-script preview comparing OLD prefixes with NEW prefixes while preserving blank lines." />
<figcaption>Four ID prefixes change; the empty lines remain. “Apply to Document” is a separate action. We cancelled this preview after checking it.</figcaption>
</figure>

This example was written manually. For the input fields, supported return values and reusable script details, read the [JavaScript text-processing guide](/en/javascript-text-processing-mac/).

## Ask AI to help express your rule

If you can describe the edit more easily than you can code it, configure your chosen provider and its API access, then open **AI Script Assistant** from an editable script.

Choose **Generate New Content** to request a new rule or **Modify Existing Content** to work from the current script. A useful request names both the required change and the text that must stay unchanged:

> Change OLD- to NEW- only at the start of each line. Keep every other character, line order and blank line unchanged. Return a run(ctx) function using the App script contract.

<figure class="mx-auto max-w-2xl">
<img src="/images/seo/script-automation/ai-assistant-real.webp" width="620" height="500" loading="lazy" alt="Real AI Script Assistant with Generate New Content selected and a request to change only the OLD prefix." />
<figcaption>Real request-entry screen, before pressing Generate. No model response is shown and no API key appears in the capture.</figcaption>
</figure>

Review the returned code in the script editor and test its output on a small example before saving or applying it. AI can misunderstand a rule; a successful request does not prove the edit is correct.

Built-in and custom scripts can run locally without AI. The optional assistant sends a request to the provider you configure, whose data-handling terms and possible fees apply. Use a fictional sample when you do not want to include a real document in a request.

## Preview a script or pipeline across a folder

1. Use **Workspace → Open Folder** to open the extracted demonstration folder.
2. Expand **Batch** in the workspace panel. Select **.txt** and deselect other types for this example.
3. Open the script/pipeline menu and choose **Word List / Roster Cleanup**. A saved custom script can be selected there instead when that is the rule you want to apply.
4. Check the displayed file count, then click **Preview**.
5. Confirm the target list and choose **Preview mode (no disk writes)**.

<figure class="mx-auto max-w-lg">
<img src="/images/seo/script-automation/batch-targets-real.webp" width="480" height="245" loading="lazy" alt="Real folder confirmation listing three TXT files, including a nested team file, in Preview No writes mode." />
<figcaption>The actual target list contains three TXT files, including the file in team/. README.md is excluded.</figcaption>
</figure>

After the run, expand a **Would Change** result and click **View Diff**. Review each kind of change before applying it.

<figure class="mx-auto max-w-4xl">
<img src="/images/seo/script-automation/batch-diff-real.webp" width="860" height="295" loading="lazy" alt="Real folder preview showing the original east roster on the left and its cleaned, sorted IDs on the right." />
<figcaption>A crop of the real difference view. Duplicate entries and blank lines are removed, trailing spaces are trimmed, and the three remaining IDs are sorted.</figcaption>
</figure>

In our test, the three TXT files and README.md were byte-for-byte unchanged after Preview. The preview computed proposed results; it had not written them to disk.

For a larger folder, narrow the file types and use the available path and filename filters. Inspect the resulting file list rather than assuming every file in the folder will be processed. This workflow edits text contents; it is not a general file-renaming tool.

## Apply the reviewed changes and inspect their backups

Use **Apply** for an individual preview result or **Apply All** for the eligible results you reviewed. This writes changes to disk. Actual batch writes create backups before changing the files; a backup failure is reported rather than silently proceeding with an unbacked write.

Open **Operation History**, select the applied operation and inspect its file list.

<figure class="mx-auto max-w-xl">
<img src="/images/seo/script-automation/backups-real.webp" width="532" height="435" loading="lazy" alt="Real Operation History showing backups available for all three cleaned roster files and Restore this operation." />
<figcaption>The applied roster cleanup has three available file backups. Each file also has a Diff control to compare with its current contents.</figcaption>
</figure>

The demonstration changed all three TXT files and left README.md unchanged. Each TXT contained its three unique IDs in sorted order after application.

## Restore an operation while its backups are available

In that operation's details, choose **Restore this operation**. The screenshot below was captured after restoring the same three files.

<figure class="mx-auto max-w-xl">
<img src="/images/seo/script-automation/restored-real.webp" width="532" height="435" loading="lazy" alt="The same three roster files marked Restored in the real operation history." />
<figcaption>All three entries now say Restored. We checked their bytes against the originals: the duplicates, blank lines and trailing spaces were restored too.</figcaption>
</figure>

Restoration has specific boundaries:

- **Backups are kept for seven days**, not indefinitely.
- The operation belongs to its workspace; open that folder to restore it.
- A file changed since the operation, or open with unsaved edits, is skipped rather than overwritten.
- Missing or expired backups cannot be used. Check the completion message for errors or skipped files.

Keep your normal backups for important work. Operation recovery is useful for reversing an eligible batch edit; it is not a permanent version archive.

## Make the rule reusable, then widen the scope

Start with one file and a clear expected result. Keep the built-in script or save your custom rule once the output is correct. If the task has several stages, save them as a pipeline. Move to a folder only after checking the target files and differences.

The practical advantage is having these steps in the same App: **ready-made operations → your own rule → optional AI help → folder preview → backed-up application → recovery**.

Try the [demonstration folder](/samples/script-automation-demo.zip), then open a copy of your own files in {{APP_NAME}}. For a task that only needs to locate several clues rather than change files, the [multi-keyword search guide](/en/search-multiple-keywords-text-file-mac/) is a better starting point.
