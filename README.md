# SPILL THE BEANS CAFE website package

This is a lightweight static website built for **SPILL THE BEANS CAFE** and the domain **spill.cafe**.

## What is included

- `index.html` = the main page
- `css/styles.css` = all styling
- `js/config.js` = the easy edit file for business details, menu paths, and booking link
- `js/main.js` = lightweight front-end logic
- `assets/` = logo, sample hero art, sample menu images, and social preview image
- `manifest.webmanifest`, `robots.txt`, `sitemap.xml` = simple launch-ready extras

## Fast way to edit the site

Open `js/config.js` and update these parts:

- Business address and opening hours
- Official statement text
- `menu.pdf`
- `menu.images`
- `bookings.nowBookItUrl`

## How to add your menu

### Option 1: PDF menu
1. Upload your PDF into the site folder, for example:
   `assets/menu.pdf`
2. In `js/config.js`, change:
   `pdf: "assets/menu.pdf"`
3. Save and upload the updated files to hosting.

### Option 2: Menu images
1. Export each menu page as JPG, PNG, or WebP
2. Put them into `assets/`
3. In `js/config.js`, update the list:
   `images: ["assets/menu-1.jpg", "assets/menu-2.jpg"]`

You can use both PDF and images together.

## How to add Now Book It

1. Log in to your Now Book It admin
2. Generate or copy your widget / booking link
3. In `js/config.js`, paste it here:
   `nowBookItUrl: "https://your-nowbookit-link"`
4. Upload the files again

The website will:
- show the booking flow in an iframe
- keep a direct booking button as fallback

## Hosting

You can upload this to almost any web host that supports static files, including:

- cPanel hosting
- Netlify
- Vercel
- Cloudflare Pages
- Shopify custom page hosting if adapted by a developer

## Suggested launch checklist

- Replace sample menu files with your real menu
- Add your real Now Book It link
- Confirm address and opening hours
- Point the `spill.cafe` domain DNS to your hosting
- Submit the live site to Google Search Console
- Use the live website link when reporting brand impersonation / username disputes

## Notes about the Instagram evidence angle

A live branded domain helps show that:
- SPILL THE BEANS CAFE actively owns and uses `spill.cafe`
- the business has a public-facing official website under that name
- customers can view menu and bookings through that domain

It is useful evidence, but platform decisions are still made by Instagram / Meta.
