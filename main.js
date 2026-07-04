/* ==========================================================================
   The Healing Play - main.js
   All page interactivity lives here. No framework, no build step.

   Contents:
     1. Mobile nav toggle
   (Smooth scrolling itself is CSS: html { scroll-behavior: smooth } with
   scroll-padding-top for the sticky header, and disabled under
   prefers-reduced-motion in styles.css.)
   ========================================================================== */

(function () {
  'use strict';

  /* --- 1. Mobile nav toggle ------------------------------------------- */

  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');

  if (!toggle || !menu) return;

  function setMenu(open) {
    menu.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setMenu(!menu.classList.contains('is-open'));
  });

  // Close the panel when a link or the CTA inside it is chosen, so the
  // menu doesn't sit over the section being scrolled to.
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });

  // Close on Escape, returning focus to the toggle.
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Close when clicking/tapping outside the header.
  document.addEventListener('click', function (event) {
    if (menu.classList.contains('is-open') && !event.target.closest('.site-header')) {
      setMenu(false);
    }
  });
})();
