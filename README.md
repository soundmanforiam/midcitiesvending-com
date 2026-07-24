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

## Images

All 17 images are stored locally in the `img/` folder and referenced with
relative paths (`./img/filename.png`) — the site has no dependency on
midcitiesvending.com staying online. The table below is kept for reference,
in case you ever need to re-download the original source file for one of
them (e.g. the client sends a replacement photo and you want to compare).

| File (in `img/`) | Original source | Used for |
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
| `bg-texture.png` | https://www.midcitiesvending.com/image_2026-07-01_220743701.png | Background texture — used behind "How It Works", "Service Areas", and "FAQ" |
| `bg-machines-dark.png` | https://www.midcitiesvending.com/image_2026-06-27_161754398.png | Background photo behind "Modern machines" section (dark tint + white text) |
| `bg-testimonials.png` | https://www.midcitiesvending.com/image_2026-07-01_222436702.png | Background photo behind the testimonials section |
| `bg-features.png` | https://www.midcitiesvending.com/image_2026-06-27_165314358.png | Background texture behind the feature cards (white tint) |
| `bg-cta.png` | https://www.midcitiesvending.com/image_2026-04-05_004045982.png | Background photo behind the "Ready for an upgrade?" band (orange tint) |

To replace any image (e.g. a client sends an updated photo), just overwrite
the matching file in `img/` with the same filename — no code changes needed.
If you rename a file instead, update its one matching path in `content.js`
(for the 12 content images) or `styles.css` (for the 5 background images,
search for `background-image`).

### About the section backgrounds

Six sections use a background image with a semi-transparent color layered
on top (a common Zoho Sites pattern) instead of a flat color. These are set
directly in `styles.css` (search for `background-image`) rather than in
`content.js`, since they're decorative rather than content a client would
typically swap. Two of those sections — "Modern machines" and the CTA band —
sit on a darker tint, so their heading/body text is white instead of the
usual navy-gray; that's intentional and matches the live site.

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
