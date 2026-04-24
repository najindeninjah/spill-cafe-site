# SPILL THE BEANS CAFE GitHub Pages website

This folder is ready to upload to GitHub Pages.

## Files

- `index.html` is the website page.
- `styles.css` controls the layout, desktop view, and mobile view.
- `CNAME` is already set to `spill.cafe`.
- `.nojekyll` tells GitHub Pages to publish this as a plain static website.
- `assets/images/` contains the optimized images.

## Easy edits

Open `index.html` and search for these comments:

- `Replace #order-online` for your real online ordering link.
- `Replace # with your live social links` for Facebook, X, and Instagram.
- `Replace # with your signup form link` for email signup.

To replace photos later, keep the same filenames inside `assets/images/`:

- `logo.jpg`
- `reservations.jpg` and `reservations.webp`
- `menus.jpg` and `menus.webp`
- `hospitality.jpg` and `hospitality.webp`
- `contact.jpg` and `contact.webp`

If you only have JPG photos later, replace the JPG file and delete the matching `.webp` line in `index.html`, or ask ChatGPT to convert them.

## Upload to GitHub Pages

1. Create a GitHub repository.
2. Upload everything in this folder to the root of the repository, not inside another folder.
3. Make sure `index.html`, `styles.css`, `CNAME`, `.nojekyll`, and the `assets` folder are visible at the top level.
4. Go to **Settings** in the repository.
5. Go to **Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Choose branch `main`, folder `/root`, then save.
8. Under **Custom domain**, enter `spill.cafe`, then save.
9. After DNS has been set and GitHub has finished checking it, enable **Enforce HTTPS**.

## DNS setup for spill.cafe

At your domain DNS provider, set these records for the root domain:

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Optional but recommended, also add:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace `YOUR-GITHUB-USERNAME` with your GitHub username or organisation name.

DNS can take up to 24 hours to fully update.
