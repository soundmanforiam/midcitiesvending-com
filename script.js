/**
 * ============================================================
 * MID CITIES VENDING — SITE RENDERER
 * ============================================================
 * You shouldn't need to edit this file. It reads CONTENT from
 * content.js and fills in the page. To change words, links,
 * phone number, FAQ, etc., edit content.js instead.
 * ============================================================
 */
(function () {
  "use strict";

  const c = window.CONTENT;
  if (!c) {
    console.error("content.js did not load — CONTENT is missing.");
    return;
  }

  /** Read a dotted path like "hero.primaryCta.label" out of an object. */
  function getPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
  }

  /** Resolve special computed hrefs that aren't stored directly in content.js. */
  function resolveHref(path) {
    if (path === "business.phoneHref") return c.business.phoneHref;
    if (path === "business.emailHref") return "mailto:" + c.business.email;
    return getPath(c, path);
  }

  // ---------- document title / meta description ----------
  if (c.meta) {
    if (c.meta.title) document.title = c.meta.title;
    if (c.meta.description) {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute("content", c.meta.description);
    }
  }

  // ---------- generic [data-key] / [data-attr-href] binding ----------
  document.querySelectorAll("[data-key]").forEach((el) => {
    const val = getPath(c, el.getAttribute("data-key"));
    if (val != null) el.textContent = val;
  });

  document.querySelectorAll("[data-attr-href]").forEach((el) => {
    const href = resolveHref(el.getAttribute("data-attr-href"));
    if (href) el.setAttribute("href", href);
  });

  // ---------- header logo ----------
  const brandLogo = document.getElementById("brand-logo");
  if (c.business.logo) {
    brandLogo.src = c.business.logo;
    brandLogo.alt = c.business.logoAlt || "";
  }

  // ---------- nav links ----------
  const navList = document.getElementById("nav-list");
  c.nav.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.label;
    li.appendChild(a);
    navList.appendChild(li);
  });

  // ---------- mobile nav toggle ----------
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("primary-nav");
  function closeNav() {
    toggle.setAttribute("aria-expanded", "false");
    nav.setAttribute("data-open", "false");
    document.body.style.overflow = "";
  }
  function openNav() {
    toggle.setAttribute("aria-expanded", "true");
    nav.setAttribute("data-open", "true");
    document.body.style.overflow = "hidden";
  }
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    isOpen ? closeNav() : openNav();
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 860) closeNav();
  });

  // ---------- hero visual ----------
  const heroVisual = document.getElementById("hero-visual");
  if (heroVisual && c.hero.image) {
    const img = document.createElement("img");
    img.src = c.hero.image;
    img.alt = c.hero.imageAlt || "";
    heroVisual.appendChild(img);
  }

  // ---------- how it works steps ----------
  const stepsList = document.getElementById("steps-list");
  c.howItWorks.steps.forEach((step) => {
    const li = document.createElement("li");
    li.className = "step";
    li.innerHTML = `
      <span class="step-code">${step.code}</span>
      <div>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </div>
    `;
    stepsList.appendChild(li);
  });

  // ---------- upgrade visual (photo if provided, else built-in graphic) ----------
  const upgradeVisual = document.getElementById("upgrade-visual");
  if (c.upgrade.photo) {
    const img = document.createElement("img");
    img.src = c.upgrade.photo;
    img.alt = c.upgrade.photoAlt || "";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    upgradeVisual.appendChild(img);
  } else {
    upgradeVisual.innerHTML = `
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="6" width="100" height="108" rx="8" stroke="#FF4B2B" stroke-width="2.5"/>
        <rect x="20" y="16" width="80" height="46" rx="3" stroke="#3DDC84" stroke-width="1.5" opacity="0.7"/>
        <line x1="20" y1="74" x2="100" y2="74" stroke="#39454B" stroke-width="1.5"/>
        <circle cx="30" cy="86" r="4" stroke="#8A9499" stroke-width="1.5"/>
        <circle cx="45" cy="86" r="4" stroke="#8A9499" stroke-width="1.5"/>
        <circle cx="60" cy="86" r="4" stroke="#8A9499" stroke-width="1.5"/>
        <circle cx="75" cy="86" r="4" stroke="#8A9499" stroke-width="1.5"/>
        <circle cx="90" cy="86" r="4" stroke="#8A9499" stroke-width="1.5"/>
        <rect x="30" y="98" width="60" height="10" rx="2" stroke="#8A9499" stroke-width="1.5"/>
      </svg>
    `;
  }

  // ---------- location type chips ----------
  const locationTypes = document.getElementById("location-types");
  c.locations.types.forEach((type) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.className = "chip";
    span.textContent = type;
    li.appendChild(span);
    locationTypes.appendChild(li);
  });

  // ---------- service area cities ----------
  const cityList = document.getElementById("city-list");
  c.serviceAreas.forEach((area) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = area.href || "#";
    a.textContent = area.label;
    li.appendChild(a);
    cityList.appendChild(li);
  });

  // ---------- feature cards ----------
  const featureGrid = document.getElementById("feature-grid");
  c.features.forEach((f) => {
    const card = document.createElement("div");
    card.className = "feature-card";
    const imgHtml = f.image ? `<img class="feature-image" src="${f.image}" alt="" width="56" height="56">` : "";
    card.innerHTML = `
      ${imgHtml}
      <span class="feature-code">${f.code}</span>
      <h3>${f.title}</h3>
      <p>${f.description}</p>
    `;
    featureGrid.appendChild(card);
  });

  // ---------- FAQ accordion ----------
  const faqList = document.getElementById("faq-list");
  c.faq.items.forEach((item, i) => {
    const wrap = document.createElement("div");
    wrap.className = "faq-item";
    wrap.setAttribute("data-open", "false");

    const btnId = "faq-q-" + i;
    const panelId = "faq-a-" + i;

    wrap.innerHTML = `
      <button class="faq-question" id="${btnId}" aria-expanded="false" aria-controls="${panelId}">
        <span>${item.q}</span>
        <span class="faq-icon" aria-hidden="true"></span>
      </button>
      <div class="faq-answer" id="${panelId}" role="region" aria-labelledby="${btnId}">
        <p>${item.a}</p>
      </div>
    `;
    faqList.appendChild(wrap);

    const btn = wrap.querySelector(".faq-question");
    const answer = wrap.querySelector(".faq-answer");
    btn.addEventListener("click", () => {
      const isOpen = wrap.getAttribute("data-open") === "true";
      if (isOpen) {
        wrap.setAttribute("data-open", "false");
        btn.setAttribute("aria-expanded", "false");
        answer.style.maxHeight = null;
      } else {
        wrap.setAttribute("data-open", "true");
        btn.setAttribute("aria-expanded", "true");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });

  // ---------- google logo (testimonials) ----------
  const googleLogo = document.getElementById("google-logo");
  if (googleLogo && c.testimonials.googleLogo) {
    googleLogo.src = c.testimonials.googleLogo;
    googleLogo.alt = "Google";
  }

  // ---------- social links ----------
  const socialRow = document.getElementById("social-row");
  const socialLinks = [
    { href: c.business.facebookUrl, label: "Facebook", icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7.5H16l.5-3.5h-3V8c0-1 .3-1.7 1.7-1.7H16.5V3.2C16.2 3.1 15.2 3 14 3c-2.5 0-4.2 1.5-4.2 4.3V10H7v3.5h2.8V21h3.7z"/></svg>` },
    { href: "mailto:" + c.business.email, label: "Email", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>` },
    { href: c.business.googleReviewsUrl, label: "Google", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18M3 12h18"/></svg>` },
  ];
  socialLinks.forEach((s) => {
    if (!s.href) return;
    const a = document.createElement("a");
    a.href = s.href;
    a.setAttribute("aria-label", s.label);
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = s.icon;
    socialRow.appendChild(a);
  });

  // ---------- footer links ----------
  const footerLinks = document.getElementById("footer-links");
  c.footer.links.forEach((link) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.label;
    li.appendChild(a);
    footerLinks.appendChild(li);
  });

})();
