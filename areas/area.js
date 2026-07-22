/**
 * ============================================================
 * MID CITIES VENDING — AREA PAGE BEHAVIOR
 * ============================================================
 * Shared by every page in /areas/. Handles the mobile nav
 * toggle and the FAQ accordion. Content on these pages is
 * plain HTML (not driven by content.js) since each city page
 * has its own copy — edit the HTML file directly to change text.
 * ============================================================
 */
(function () {
  "use strict";

  // ---------- mobile nav toggle ----------
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (toggle && nav) {
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
  }

  // ---------- FAQ accordion ----------
  document.querySelectorAll(".faq-item").forEach((wrap) => {
    const btn = wrap.querySelector(".faq-question");
    const answer = wrap.querySelector(".faq-answer");
    if (!btn || !answer) return;
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
})();
