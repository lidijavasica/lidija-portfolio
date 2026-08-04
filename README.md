# Lidija Vasica — TESOL Teaching Portfolio

A static, accessible portfolio website built from your Wix site's content and
your friend's instructions. Plain HTML/CSS/JS — no build step, no
dependencies, ready to push straight to GitHub Pages.

## What's in this folder

```
tesol-portfolio/
  index.html                    About Me (also serves as the homepage)
  teaching-philosophy.html
  resume.html                   CV
  teaching-portfolio.html       Hub page linking to the 8 pages below
  lesson-plans.html             4.1
  syllabi.html                  4.2
  videos.html                   4.3
  feedback.html                 4.4
  assessment.html                4.5
  academic-research.html        4.6
  materials-development.html    4.7
  curriculum-development.html   4.8
  serbian-croatian.html
  contact.html
  assets/
    styles.css                  All site styling (one shared file)
    script.js                   Mobile menu + dropdown behavior
    images/about/                14 photos cropped from your visual, used on the About page
  README.md                     This file
```

Every page shares the same header, footer, and navigation, generated from a
single template so they stay consistent. (If you ever want to edit copy
site-wide later, the source generator is not included in this delivery — you
can just edit the HTML files directly; they're plain, readable markup.)

## How the site is organized

- **Multi-page**, not single-file — with this much content, separate pages
  load faster and are easier to navigate and to link to individually.
- **About Me doubles as your homepage** (`index.html`). Your original "Hello!
  Welcome to my Portfolio Website" text works as a landing hero, and your
  organization doc listed "About Me" as page 1 with no separate Home page —
  so I didn't invent one.
- **Nav order**: About Me → Teaching Philosophy → CV → Teaching Portfolio →
  Serbian & Croatian → Contact. Your friend's instructions specifically asked
  for Teaching Philosophy to sit immediately after About Me in every nav, so
  I moved it ahead of CV (your organization doc had CV listed second).
- **All 8 portfolio subpages (4.1–4.8)** live under a "Teaching Portfolio"
  dropdown, with their own hub/overview page.
- Every "View the ___" link points to the actual Google Drive/Docs file or
  folder you listed — I linked out rather than hosting copies of those
  documents, since that's what you asked for.

## Preview it locally before publishing

You don't need any special software. From inside the `tesol-portfolio`
folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. (Opening `index.html`
directly by double-clicking also works for a quick look, though a couple of
things — like the sticky footer — display best through a local server.)

## Publishing to GitHub Pages

1. Create a new repository on GitHub (e.g. `lidija-portfolio`). Don't
   initialize it with a README — you already have one.
2. On your computer, open a terminal in this `tesol-portfolio` folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   git push -u origin main
   ```
3. On GitHub, go to your repository's **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a branch,"
   pick the **main** branch and the **/ (root)** folder, then save.
3. GitHub will give you a live URL after a minute or two, typically
   `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`.
4. Add that URL to your CV, LinkedIn, and email signature once it's live.

No custom configuration is needed — there's no build process, and every link
between pages uses a relative path, so it will work at whatever URL GitHub
Pages assigns.

## Follow-up checklist

Nothing on the site uses invented placeholder text — every sentence comes
directly from the documents you gave me. One thing is still worth a check:

```text
Item: Google Drive / Docs sharing settings
File: All pages with "View the ___" links
Note: You've confirmed these are set correctly. If you ever move or
      reorganize files in Drive, double-check the links still resolve to
      "Anyone with the link can view" so visitors don't hit a
      permission-denied screen.
```

All 14 About-page photos are included (student consent confirmed via signed
waiver), and the video clips are embedded without captions per your call.

```text
Item: Phone number
File: resume.html
Note: Per your choice, your phone number is not published on the site —
      only email and LinkedIn appear. If you'd like it added later
      (e.g. for job applications), it's a one-line edit.
```

## Accessibility checklist

Built to WCAG 2.2 AA where practical:

- [x] Semantic HTML5 (`header`, `nav`, `main`, `footer`, `article`, `section`)
- [x] One `<h1>` per page, consistent heading hierarchy (no skipped levels)
- [x] Descriptive, unique `<title>` and meta description per page
- [x] Descriptive link text throughout (e.g. "View the Reading lesson plan,"
      never "click here")
- [x] Skip-to-main-content link on every page
- [x] Keyboard-operable navigation, including the "Teaching Portfolio"
      dropdown (works with Enter/Space to open, Escape to close, and normal
      Tab order)
- [x] Visible focus outlines on every interactive element, tuned to pass
      3:1 contrast against both light and dark section backgrounds
- [x] Text/background color contrast checked programmatically — every
      text pairing in the palette exceeds the 4.5:1 AA minimum (most are
      well above 8:1)
- [x] Responsive layout tested at mobile (390px), tablet, and desktop widths
- [x] All meaningful images have descriptive `alt` text; no purely
      decorative images needing empty `alt`
- [x] Video iframes have descriptive `title` attributes
- [x] `prefers-reduced-motion` respected (smooth scroll and transitions
      disable automatically)
- [x] No auto-playing media, no flashing/blinking content
- [x] Print stylesheet (CV page prints cleanly without navy backgrounds)
- [x] Sticky footer pattern (stays at the bottom on short pages)

Video captions/transcripts were intentionally left off per your decision —
worth revisiting if the site's audience broadens (e.g. for job or program
applications with their own accessibility requirements), since captions are
a WCAG 2.2 AA requirement for prerecorded video with audio.

If you ever want a second opinion, browser extensions like **axe DevTools**
or **WAVE** can double-check the live site in a couple of clicks.
