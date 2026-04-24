# SPILL THE BEANS CAFE GitHub Pages website

This folder is ready to upload to GitHub Pages.

## Files

- `index.html` is the homepage.
- `about.html` is the About page with Our Story, Press, and FAQ.
- `hiring.html` is the Work with us page.
- `thanks.html` is the confirmation page after someone applies.
- `styles.css` controls desktop, mobile, and sticky navigation.
- `CNAME` is already set to `spill.cafe`.
- `.nojekyll` tells GitHub Pages to publish this as a plain static website.
- `assets/images/` contains the website images.
- `assets/files/menu.pdf` is the menu PDF.

## Menu PDF

To update your menu:

1. Export your real menu as a PDF.
2. Rename it exactly to `menu.pdf`.
3. Replace the file inside `assets/files/menu.pdf`.
4. Upload the changed file to GitHub.

The MENUS navigation and the Menus image box already open this PDF.

## Sticky top menu

The navigation bar with ABOUT, MENUS, OUR INSTAGRAM, HIRING, and ORDER ONLINE is sticky on all pages.

## Hiring form setup

The hiring form uses FormSubmit so it can work on GitHub Pages without a backend.

First time only:

1. Upload the website to GitHub Pages.
2. Open `https://spill.cafe/hiring.html`.
3. Submit one test application.
4. Check `hiring@spill.cafe` for the FormSubmit activation email.
5. Click the confirmation link.

After confirmation, future applications should be emailed to `hiring@spill.cafe` with the resume attached.

## Upload to GitHub Pages

1. Unzip this package.
2. Open the folder named `spill-cafe-github-page`.
3. Upload everything inside that folder to the root of your GitHub repository.
4. Make sure these files are at the top level of the repository:
   - `index.html`
   - `about.html`
   - `hiring.html`
   - `thanks.html`
   - `styles.css`
   - `CNAME`
   - `.nojekyll`
   - `assets`
5. Go to repository Settings.
6. Go to Pages.
7. Under Build and deployment, choose Deploy from a branch.
8. Choose branch `main`, folder `/root`, then save.
9. Under Custom domain, enter `spill.cafe`, then save.
10. Once DNS is ready, enable Enforce HTTPS.

## DNS setup for spill.cafe

At your domain DNS provider, set these records for the root domain:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Recommended:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace `YOUR-GITHUB-USERNAME` with your GitHub username or organisation name.
