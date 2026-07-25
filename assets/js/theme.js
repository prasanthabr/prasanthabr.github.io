/*
 * Light/dark theme. Inlined in <head> so the correct theme is set before the
 * first paint — moving this to a deferred file reintroduces a flash.
 *
 * Precedence: explicit choice in localStorage > OS preference > the
 * `defaultTheme` param.
 */
(function () {
  'use strict';

  var KEY = 'pref-theme';
  var root = document.documentElement;

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  function resolve() {
    var choice = stored();
    if (choice === 'light' || choice === 'dark') return choice;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  root.dataset.theme = resolve();

  // Follow the OS until the reader makes an explicit choice.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!stored()) root.dataset.theme = e.matches ? 'dark' : 'light';
  });

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('theme-toggle');
    if (!button) return;
    button.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem(KEY, next); } catch (e) { /* private mode */ }
    });
  });
})();
