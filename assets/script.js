/* Lidija Vasica — TESOL Teaching Portfolio
   Small progressive-enhancement script: mobile nav toggle + accessible
   dropdown for "Teaching Portfolio". No frameworks, no build step. */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.getAttribute("data-mobile-open") === "true";
      nav.setAttribute("data-mobile-open", String(!isOpen));
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });
  }

  var dropdowns = document.querySelectorAll(".nav-item-dropdown");
  dropdowns.forEach(function (item) {
    var btn = item.querySelector(".nav-caret-btn");
    if (!btn) return;

    function closeDropdown() {
      item.setAttribute("data-open", "false");
      btn.setAttribute("aria-expanded", "false");
    }
    function openDropdown() {
      item.setAttribute("data-open", "true");
      btn.setAttribute("aria-expanded", "true");
    }

    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = item.getAttribute("data-open") === "true";
      dropdowns.forEach(closeDropdown);
      if (!isOpen) openDropdown();
    });

    item.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeDropdown();
        btn.focus();
      }
    });
  });

  document.addEventListener("click", function () {
    dropdowns.forEach(function (item) {
      item.setAttribute("data-open", "false");
      var btn = item.querySelector("button.nav-link");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  });

  // Close mobile menu when a link inside it is activated (nice on phones)
  if (nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.matchMedia("(max-width: 900px)").matches) {
          nav.setAttribute("data-mobile-open", "false");
          if (toggle) toggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
})();
