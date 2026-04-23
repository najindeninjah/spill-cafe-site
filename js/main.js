(function () {
  const config = window.SPILL_CONFIG;
  if (!config) return;

  const $ = (selector) => document.querySelector(selector);
  const create = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (typeof text === "string") el.textContent = text;
    return el;
  };

  function renderText() {
    $("#hero-text").textContent = config.brand.tagline;
    $("#official-statement").textContent = config.brand.officialStatement;
    $("#proof-copy").textContent = config.brand.proofCopy;
    $("#visit-address").textContent = config.visit.address;
    $("#maps-link").href = config.visit.mapsUrl;
  }

  function renderLists() {
    const heroPoints = $("#hero-points");
    config.heroPoints.forEach((item) => {
      const li = create("li", null, item);
      heroPoints.appendChild(li);
    });

    const ticker = $("#ticker-row");
    config.highlights.forEach((item) => {
      const span = create("span", "ticker-item", item);
      ticker.appendChild(span);
    });

    const featureGrid = $("#feature-grid");
    config.features.forEach((item) => {
      const card = create("article", "feature-card reveal");
      const chip = create("span", "feature-chip", item.chip);
      const title = create("h3", null, item.title);
      const body = create("p", null, item.body);
      card.append(chip, title, body);
      featureGrid.appendChild(card);
    });

    const signatureGrid = $("#signature-grid");
    config.signatures.forEach((item) => {
      const card = create("article", "signature-card reveal");
      const badge = create("span", "signature-badge", item.badge);
      const title = create("h3", null, item.title);
      const body = create("p", null, item.body);
      card.append(badge, title, body);
      signatureGrid.appendChild(card);
    });

    const hoursList = $("#hours-list");
    config.visit.hours.forEach(([day, hours]) => {
      const row = create("div", "hours-row");
      row.innerHTML = `<strong>${day}</strong><span>${hours}</span>`;
      hoursList.appendChild(row);
    });
  }

  function renderMenu() {
    const menuStatus = $("#menu-status");
    const menuViewer = $("#menu-viewer");
    const menuGallery = $("#menu-gallery");
    const menuDownload = $("#menu-download");
    const pdf = config.menu.pdf && config.menu.pdf.trim();
    const images = Array.isArray(config.menu.images) ? config.menu.images.filter(Boolean) : [];

    if (pdf) {
      menuStatus.textContent = "Menu PDF connected. You can replace the file path in js/config.js whenever your menu changes.";
      menuDownload.href = pdf;
      menuViewer.innerHTML = `<iframe title="Cafe menu PDF" src="${pdf}#view=FitH"></iframe>`;
    } else {
      menuStatus.textContent = "No live PDF is linked yet. Add your menu PDF path in js/config.js or replace the sample menu images in the assets folder.";
      menuDownload.href = "#";
      menuDownload.setAttribute("aria-disabled", "true");
      menuDownload.style.opacity = "0.65";
      menuViewer.innerHTML = `
        <div class="menu-placeholder">
          <div>
            <h3>Menu upload area ready</h3>
            <p>Add a PDF path in <code>js/config.js</code> and it will show here.</p>
          </div>
        </div>`;
    }

    if (images.length) {
      images.forEach((src, index) => {
        const link = create("a");
        link.href = src;
        link.target = "_blank";
        link.rel = "noopener";
        link.innerHTML = `<img loading="lazy" src="${src}" alt="Menu preview ${index + 1}">`;
        menuGallery.appendChild(link);
      });
    }
  }

  function renderBookings() {
    const bookingLink = $("#booking-link");
    const bookingWrap = $("#booking-frame-wrap");
    const url = config.bookings.nowBookItUrl && config.bookings.nowBookItUrl.trim();

    if (url) {
      bookingLink.href = url;
      bookingWrap.innerHTML = `
        <iframe
          title="Now Book It online bookings"
          src="${url}"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
        ></iframe>`;
    } else {
      bookingLink.href = "#";
      bookingLink.setAttribute("aria-disabled", "true");
      bookingLink.style.opacity = "0.65";
      bookingWrap.innerHTML = `
        <div class="booking-placeholder">
          <div>
            <h3>Now Book It placeholder ready</h3>
            <p>Paste your Now Book It widget link into <code>js/config.js</code> to activate the embedded booking section.</p>
          </div>
        </div>`;
    }
  }

  function setupNav() {
    const toggle = $(".nav-toggle");
    const nav = $("#site-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setupHeader() {
    const header = document.querySelector("[data-elevate]");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-elevated", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupReveal() {
    const elements = document.querySelectorAll(".reveal");
    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((el) => observer.observe(el));
  }

  function renderStructuredData() {
    const data = {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      name: config.brand.name,
      url: config.brand.domain,
      address: {
        "@type": "PostalAddress",
        streetAddress: "89 Devereux Rd",
        addressLocality: "Linden Park",
        addressRegion: "SA",
        postalCode: "5065",
        addressCountry: "AU"
      },
      servesCuisine: ["Cafe", "Brunch", "Coffee"],
    };

    const script = $("#structured-data");
    if (script) script.textContent = JSON.stringify(data);
  }

  renderText();
  renderLists();
  renderMenu();
  renderBookings();
  setupNav();
  setupHeader();
  setupReveal();
  renderStructuredData();
})();
