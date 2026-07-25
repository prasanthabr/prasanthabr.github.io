/*
 * Home index filtering.
 *
 * Contract with the templates — nothing else is assumed:
 *   #note-list          <ul> of <li class="note"> rows
 *   li.note[data-<facet>]  pipe-delimited slugs, one attribute per facet
 *   li.note[data-date|data-lastmod|data-title|data-text]  sort/search keys
 *   #filters            the control bar, rendered hidden
 *   .filters__group[data-facet] > button.chip[data-value]
 *   #filter-text, #filter-sort, #filter-count, #filter-reset
 *
 * Facets are discovered from the DOM, so adding a filterable taxonomy in
 * data/taxonomy.toml needs no change here.
 *
 * Selections are mirrored into the URL hash (?-style, e.g.
 * #statuses=active,stable&tags=trust&sort=title) so a slice is bookmarkable
 * and shareable — that is what makes this useful for coming back to.
 */

(function () {
  'use strict';

  var bar = document.getElementById('filters');
  var list = document.getElementById('note-list');
  if (!bar || !list) return;

  var notes = Array.prototype.slice.call(list.querySelectorAll('.note'));
  var groups = Array.prototype.slice.call(bar.querySelectorAll('.filters__group'));
  var textInput = document.getElementById('filter-text');
  var sortSelect = document.getElementById('filter-sort');
  var countEl = document.getElementById('filter-count');
  var resetBtn = document.getElementById('filter-reset');
  var emptyEl = document.getElementById('note-list-empty');

  // facet name -> Set of selected slugs
  var selected = {};
  groups.forEach(function (g) { selected[g.dataset.facet] = new Set(); });

  var query = '';
  var sortKey = sortSelect ? sortSelect.value : 'date';

  /* data-my-things surfaces as dataset.myThings, so a hyphenated taxonomy
     name has to be camel-cased before the lookup. */
  function datasetKey(facet) {
    return facet.replace(/-([a-z])/g, function (_, c) { return c.toUpperCase(); });
  }

  function termsOf(note, facet) {
    var raw = note.dataset[datasetKey(facet)];
    return raw ? raw.split('|') : [];
  }

  /* A note matches when every facet with a selection has at least one of the
     selected terms (AND across facets, OR within one) and the text matches. */
  function matches(note, skipFacet) {
    for (var facet in selected) {
      if (facet === skipFacet) continue;
      var want = selected[facet];
      if (!want.size) continue;
      var have = termsOf(note, facet);
      var hit = have.some(function (t) { return want.has(t); });
      if (!hit) return false;
    }
    if (query && (note.dataset.text || '').indexOf(query) === -1) return false;
    return true;
  }

  function compare(a, b) {
    if (sortKey === 'title') {
      return (a.dataset.title || '').localeCompare(b.dataset.title || '');
    }
    var key = sortKey === 'lastmod' ? 'lastmod' : 'date';
    return (b.dataset[key] || '').localeCompare(a.dataset[key] || '');
  }

  function apply() {
    var shown = 0;
    notes.forEach(function (note) {
      var ok = matches(note, null);
      note.hidden = !ok;
      if (ok) shown++;
    });

    /* Grey out chips that would return nothing given the other facets, so you
       can see which cuts are live before clicking. */
    groups.forEach(function (g) {
      var facet = g.dataset.facet;
      g.querySelectorAll('.chip').forEach(function (chip) {
        var value = chip.dataset.value;
        var possible = notes.some(function (note) {
          return termsOf(note, facet).indexOf(value) !== -1 && matches(note, facet);
        });
        chip.dataset.empty = String(!possible);
      });
    });

    var sorted = notes.slice().sort(compare);
    sorted.forEach(function (note) { list.appendChild(note); });
    if (emptyEl) {
      list.appendChild(emptyEl);
      emptyEl.hidden = shown !== 0;
    }

    if (countEl) {
      countEl.textContent = shown === notes.length
        ? notes.length + ' note' + (notes.length === 1 ? '' : 's')
        : shown + ' of ' + notes.length;
    }
    if (resetBtn) {
      resetBtn.hidden = query === '' && sortKey === 'date' &&
        Object.keys(selected).every(function (f) { return selected[f].size === 0; });
    }

    writeHash();
  }

  function writeHash() {
    var parts = [];
    Object.keys(selected).forEach(function (facet) {
      if (selected[facet].size) {
        parts.push(facet + '=' + Array.from(selected[facet]).join(','));
      }
    });
    if (sortKey !== 'date') parts.push('sort=' + sortKey);
    var hash = parts.length ? '#' + parts.join('&') : '';
    if (hash !== window.location.hash) {
      history.replaceState(null, '', window.location.pathname + window.location.search + hash);
    }
  }

  function readHash() {
    var hash = window.location.hash.replace(/^#/, '');
    if (!hash) return;
    hash.split('&').forEach(function (pair) {
      var bits = pair.split('=');
      var key = decodeURIComponent(bits[0]);
      var value = decodeURIComponent(bits[1] || '');
      if (key === 'sort') {
        sortKey = value;
        if (sortSelect) sortSelect.value = value;
      } else if (selected[key]) {
        value.split(',').filter(Boolean).forEach(function (v) { selected[key].add(v); });
      }
    });
    groups.forEach(function (g) {
      var facet = g.dataset.facet;
      g.querySelectorAll('.chip').forEach(function (chip) {
        chip.setAttribute('aria-pressed', String(selected[facet].has(chip.dataset.value)));
      });
    });
  }

  groups.forEach(function (g) {
    g.addEventListener('click', function (event) {
      var chip = event.target.closest('.chip');
      if (!chip) return;
      var facet = g.dataset.facet;
      var value = chip.dataset.value;
      if (selected[facet].has(value)) {
        selected[facet].delete(value);
        chip.setAttribute('aria-pressed', 'false');
      } else {
        selected[facet].add(value);
        chip.setAttribute('aria-pressed', 'true');
      }
      apply();
    });
  });

  if (textInput) {
    textInput.addEventListener('input', function () {
      query = textInput.value.trim().toLowerCase();
      apply();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', function () {
      sortKey = sortSelect.value;
      apply();
    });
  }

  function resetAll() {
    Object.keys(selected).forEach(function (f) { selected[f].clear(); });
    bar.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
    query = '';
    if (textInput) textInput.value = '';
    sortKey = 'date';
    if (sortSelect) sortSelect.value = 'date';
    apply();
  }

  document.querySelectorAll('#filter-reset, [data-reset]').forEach(function (el) {
    el.addEventListener('click', resetAll);
  });

  bar.hidden = false;
  readHash();
  apply();
})();
