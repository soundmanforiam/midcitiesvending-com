# Mid Cities Vending — Website

A mobile-first static rebuild of midcitiesvending.com that matches the live
site's real branding: same colors, same font (Poppins), same photos/icons,
same section order and copy. The only intentional difference is the mobile
layout, which is redesigned to work properly on phones (the live site is a
shrunk-down desktop layout on mobile). No build step, no framework — plain
HTML, CSS, and JS, ready to push to GitHub and deploy on Cloudflare Pages.

## Files

```
index.html    Page structure + SEO meta tags. Rarely needs editing.
content.js    ALL editable content: headlines, body copy, phone/email, FAQ,
              service areas, image links. Edit this file to update the site.
script.js     Renders content.js into the page. Don't edit unless you're
              changing how something behaves.
styles.css    All visual styling — colors, fonts, layout, responsive rules.
img/          Empty for now — see "Images" below.
```

## Editing content

Open `content.js` in any text editor. Every piece of text on the site is a
plain JavaScript value with comments explaining each section. For example,
to change the phone number:

```js
phoneDisplay: "(682) 207-7950",
phoneHref: "tel:+16822077950",
```

To add or remove an FAQ item, copy/paste or delete one of the
`{ q: "...", a: "..." }` blocks inside `faq.items`. Same pattern for
`features` and `serviceAreas`.

Save the file, commit, push — that's it. No rebuild step required.

## Colors and fonts (pulled from the live site)

| Token | Hex | Used for |
|---|---|---|
| Orange | `#EA7704` | Primary CTA button, links, accents |
| Navy | `#013A51` | Secondary button, CTA band, footer |
| Heading text | `#364253` | All headings |
| Body text | `#6C798B` | Paragraph copy |
| Background | `#FFFFFF` / `#F7F8FA` | Alternating section backgrounds |

Font: **Poppins** (400 body / 500 headings), loaded from Google Fonts —
same as the live site.

## Images — important, read this

Every image on the site currently loads directly from the **live
midcitiesvending.com site** (e.g. `https://www.midcitiesvending.com/White%20Circle.png`).
That was a deliberate short-term choice: it means the site displays
correctly right now with zero extra work, but it also means the site
depends on the old site staying online and unchanged.

To make the site fully self-hosted, download each file below and save it
into the `img/` folder using the exact filename shown, then update the
matching line in `content.js` (search for the URL) to `./img/filename.png`
instead of the long midcitiesvending.com URL.

| Save as (in `img/`) | Download from | Used for |
|---|---|---|
| `logo.png` | https://www.midcitiesvending.com/White%20Circle.png | Header logo |
| `hero.png` | https://www.midcitiesvending.com/image_2026-07-03_211948211.png | Hero photo |
| `how-it-works.png` | https://www.midcitiesvending.com/image_2026-07-03_213317998.png | "How It Works" photo |
| `machine-tall.png` | https://www.midcitiesvending.com/image_2026-06-27_181015002.png | "Modern machines" photo |
| `google-logo.png` | https://www.midcitiesvending.com/google-logo.png | Testimonials Google icon |
| `feature-full-service.png` | https://www.midcitiesvending.com/image_2026-06-27_164814711.png | Full Service Vending icon |
| `feature-custom-mix.png` | https://www.midcitiesvending.com/image_2026-06-27_164603442.png | Custom Product Mix icon |
| `feature-support.png` | https://www.midcitiesvending.com/image_2026-06-27_164622902.png | 24/7 Support icon |
| `feature-restocking.png` | https://www.midcitiesvending.com/image_2026-06-27_164726373.png | Fast Restocking icon |
| `feature-healthy.png` | https://www.midcitiesvending.com/image_2026-06-27_164742560.png | Healthy Options icon |
| `feature-cashless.png` | https://www.midcitiesvending.com/image_2026-06-27_164530142.png | Cashless Payments icon |

Easiest way to grab them: open each URL in your browser and use
"Save Image As...", or right-click each image on the live site itself.

## Deploying on Cloudflare Pages

1. Push this folder to a new GitHub repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages →
   Connect to Git**, and select the repo.
3. Build settings: leave **Build command** blank and set **Build output
   directory** to `/` (this is a static site — nothing to build).
4. Deploy. Cloudflare will give you a `*.pages.dev` URL immediately; add
   your custom domain (midcitiesvending.com) under the project's **Custom
   domains** tab.
5. Every future push to the connected branch auto-deploys — so editing
   `content.js` and pushing is the entire update workflow going forward.

## What's different from the live site

- **Mobile layout only.** The live site's desktop layout is preserved almost
  exactly (colors, fonts, copy, images, section order). Mobile has been
  redesigned from scratch: a real hamburger menu, stacked single-column
  sections, and a tap-to-expand FAQ, instead of a shrunk-down desktop page.
- Removed the Zoho Sites builder dependency — this is a plain static site
  with no page-builder lock-in and much faster load times.
- The individual city landing pages (Dallas, Fort Worth, etc.) and the
  Articles page aren't rebuilt yet — the "We currently serve" links point at
  their original midcitiesvending.com URLs for now. They can be added later
  as their own HTML pages following the same content.js pattern.
