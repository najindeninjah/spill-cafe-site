# SPILL THE BEANS CAFE — Search-optimised GitHub Pages website (Nov 2026)

**Website:** https://spill.cafe/  
**Structure:** Fully static HTML/CSS. No build tools, fonts, JavaScript or paid plugins required.

## What is inside

- `index.html` — homepage; original photo-grid styling with clear Asian-fusion cafe heading and dog-friendly/coffee context.
- `about.html` — two-paragraph story, Glam Adelaide article, 10 customer FAQ entries.
- `menu.html` — crawlable menu highlights and an easy link to the menu PDF.
- `hiring.html` — expression-of-interest form, existing FormSubmit service, resume upload.
- `thanks.html` — confirmation page. `noindex` because it isn't a search landing page.
- `styles.css` — all styles, original layout and sticky navigation, responsive on iPhone Safari/Chrome.
- `assets/images/*` — compressed original photos, JPG/WebP.
- `menu.pdf` — **PLACEHOLDER ONLY** in the website root. Replace it with your real PDF before publishing. Once published, the menu opens at `https://spill.cafe/menu.pdf`.
- `robots.txt`, `sitemap.xml` — allow public search crawling including OAI-SearchBot, list indexable pages.
- `CNAME` — configured for `spill.cafe`.

## Publish

1. Unzip the package. Upload all the files and `assets` folder to the **root** of your GitHub Pages repository (not the parent ZIP folder).
2. In repository **Settings > Pages**, select **Deploy from a branch > main > /(root)**. Ensure the custom domain is `spill.cafe` and enable **Enforce HTTPS** once available.
3. Keep the existing DNS records that connect your domain to GitHub Pages. Do not change DNS unnecessarily.
4. Replace `menu.pdf` at the repository root with your real menu. **Keep exactly the filename `menu.pdf`**. Upload the replacement to GitHub using `Add file > Upload files` or edit in your local clone.
5. Check all links and navigation on iPhone Safari, iPhone Chrome and desktop. Open `https://spill.cafe/menu.html`, `https://spill.cafe/sitemap.xml`, `https://spill.cafe/robots.txt`.
6. FormSubmit **cannot be validated offline**. Test `hiring.html` with a genuine test submission and verify delivery to `hiring@spill.cafe`, including resume attachment and first-time activation if needed.

## Search setup after publishing

1. Verify `spill.cafe` in **Google Search Console**, preferably with a DNS TXT record (domain property). Submit `https://spill.cafe/sitemap.xml` and inspect/request indexing for the homepage, menu and About page.
2. Verify the site in **Bing Webmaster Tools**. Submit the same sitemap.
3. Make sure **Google Business Profile**, **Bing Places**, **Apple Business Connect**, Facebook and Instagram use the same cafe name, address, phone, hours, menu URL and primary website.
4. Keep the actual dishes and opening hours updated. If you change an item, edit `menu.html` and replace the root `menu.pdf` file if necessary. Review public-holiday hours separately.
5. Optionally run URLs through Google's **Rich Results Test** and URL Inspection after going live. Review real traffic queries in Search Console rather than trying to fill the page with keywords.

## Quick edits

- Change menu highlights in `menu.html` within `<section class="menu-category">`.
- Change FAQ answers in `about.html` within the `<div class="faq-list">` section. `<details>` makes them accessible click-to-expand panels.
- Edit home copy under `<section class="intro"` in `index.html`.
- Edit colours, fonts and spacing in `styles.css`; original logo/header/photo grid and sticky nav are retained.
- Top navigation and business phone/address are repeated as plain HTML on every page so each page is fast and works without JavaScript. If a link changes, update it in all pages.
- Structured business details appear within each HTML `<script type="application/ld+json">`. If hours, contact details, menu URL or address change, update the JSON-LD to match **visible** information on the page.
- If you update a page, update its matching `<lastmod>` date in `sitemap.xml` to reflect a **real** content change.

## Important pre-publication checks

- **Public-holiday surcharge:** Preserved **15%** from your own `index.html`. Please confirm this is still correct before publishing.
- **Hours:** Listed as Monday-Sunday 7am–3pm, with PH hours potentially different. Confirm before publishing.
- **Food descriptions:** The 15 items in `menu.html` reflect the menu list supplied on 2 November 2026. Verify ingredients, dish availability and prices before publishing; the online menu is a highlights page, not an exhaustive priced menu.
- **Application forms:** The hiring form uses **FormSubmit**, a third-party service; GitHub Pages does not independently send email. Test activation and attachments; consider your privacy requirements for applicant data.
- **PDF:** The included root `menu.pdf` is a placeholder, NOT the real menu. Replace it before publishing. Your PDF will be available at `https://spill.cafe/menu.pdf`. The HTML link already points there.

## What this SEO work can and cannot do

We use descriptive page titles, accurate on-page information, Restaurant schema.org markup, canonicals, internal links, a sitemap, responsive pages, and crawl-friendly HTML. We do **not** use hidden keyword blocks, fabricated rankings/reviews, or repetitive location stuffing. Search engines and ChatGPT Search decide independently whether to crawl, index, rank or cite a website; no ranking or recommendation is guaranteed.

## Menu URL and updates

- The menu PDF MUST be named `menu.pdf` and uploaded alongside `index.html`, NOT inside the `assets` folder. Public URL: `https://spill.cafe/menu.pdf`.
- The searchable HTML menu is `https://spill.cafe/menu.html`; MENUS in the navigation intentionally opens the HTML page first.
- To update just the PDF later: replace the existing `menu.pdf` in your GitHub repository and commit. Keep the same filename; no link changes needed.
- The HTML page includes 15 items in three sections. Update the wording in `menu.html` separately whenever the PDF changes.
