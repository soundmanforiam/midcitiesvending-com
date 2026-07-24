/**
 * ============================================================
 * MID CITIES VENDING — SITE RENDERER
 * ============================================================
 * You shouldn't need to edit this file. It reads CONTENT from
 * content.js and fills in the page. To change words, links,
 * phone number, FAQ, images, etc., edit content.js instead.
 * ============================================================
 */
(function () {
  "use strict";

  const c = window.CONTENT;
  if (!c) {
    console.error("content.js did not load — CONTENT is missing.");
    return;
  }

  function getPath(obj, path) {
    return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
  }

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
    if (val != null && val !== "") el.textContent = val;
    else if (val === "") el.remove();
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

  // ---------- hero image ----------
  const heroImage = document.getElementById("hero-image");
  if (c.hero.image) {
    heroImage.src = c.hero.image;
    heroImage.alt = c.hero.imageAlt || "";
  } else {
    heroImage.closest(".hero-media").remove();
  }

  // ---------- how it works image ----------
  const howImage = document.getElementById("how-it-works-image");
  if (c.howItWorks.image) {
    howImage.src = c.howItWorks.image;
    howImage.alt = c.howItWorks.imageAlt || "";
  }

  // ---------- upgrade / modern machines image ----------
  const upgradeImage = document.getElementById("upgrade-image");
  if (c.upgrade.photo) {
    upgradeImage.src = c.upgrade.photo;
    upgradeImage.alt = c.upgrade.photoAlt || "";
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

  // ---------- google logo (testimonials) ----------
  const googleLogo = document.getElementById("google-logo");
  if (googleLogo && c.testimonials.googleLogo) {
    googleLogo.src = c.testimonials.googleLogo;
  }

  // ---------- feature cards ----------
  const featureGrid = document.getElementById("feature-grid");
  c.features.forEach((f) => {
    const card = document.createElement("div");
    card.className = "feature-card";
    const imgHtml = f.image ? `<img src="${f.image}" alt="" width="56" height="56">` : "";
    card.innerHTML = `
      ${imgHtml}
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
