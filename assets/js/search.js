/*
 * Search over /index.json.
 *
 * Deliberately no search library. For an archive of this size a weighted
 * token match is instant and behaves predictably, and it keeps the site free
 * of vendored third-party JavaScript — which is the same reason the analytics
 * and fonts were brought in-house.
 *
 * Scoring: every query token must appear somewhere in the note (AND), and
 * each hit scores by the field it landed in. Whole-word and prefix hits beat
 * mid-word ones so "trust" ranks "Building Blocks of Trust" above a note that
 * merely contains "entrusted".
 */

(function () {
  'use strict';

  var FIELD_WEIGHT = { title: 10, tags: 6, summary: 4, content: 1 };
  var MAX_RESULTS = 30;

  var input = document.getElementById('search-input');
  var results = document.getElementById('search-results');
  var status = document.getElementById('search-status');
  var indexUrl = document.currentScript ? document.currentScript.dataset.index : '/index.json';
  if (!input || !results) return;

  var docs = null;
  var pending = null;

  function load() {
    if (pending) return pending;
    pending = fetch(indexUrl)
      .then(function (r) {
        if (!r.ok) throw new Error('index ' + r.status);
        return r.json();
      })
      .then(function (data) {
        docs = data.map(function (d) {
          return {
            raw: d,
            haystack: {
              title: (d.title || '').toLowerCase(),
              tags: (d.tags || []).join(' ').toLowerCase(),
              summary: (d.summary || '').toLowerCase(),
              content: (d.content || '').toLowerCase()
            }
          };
        });
        return docs;
      });
    return pending;
  }

  function scoreField(hay, token) {
    var at = hay.indexOf(token);
    if (at === -1) return 0;
    var before = at === 0 ? '' : hay.charAt(at - 1);
    var after = hay.charAt(at + token.length);
    var atWordStart = at === 0 || !/[a-z0-9]/.test(before);
    var wholeWord = atWordStart && !/[a-z0-9]/.test(after);
    if (wholeWord) return 3;
    if (atWordStart) return 2;
    return 1;
  }

  function score(doc, tokens) {
    var total = 0;
    for (var i = 0; i < tokens.length; i++) {
      var best = 0;
      for (var field in FIELD_WEIGHT) {
        var s = scoreField(doc.haystack[field], tokens[i]);
        if (s) best = Math.max(best, s * FIELD_WEIGHT[field]);
      }
      if (!best) return 0; // every token must land somewhere
      total += best;
    }
    return total;
  }

  function excerpt(doc, tokens) {
    var text = doc.raw.summary || doc.raw.content || '';
    var lower = text.toLowerCase();
    var at = -1;
    for (var i = 0; i < tokens.length && at === -1; i++) at = lower.indexOf(tokens[i]);
    var start = at > 60 ? at - 60 : 0;
    var slice = text.slice(start, start + 200).trim();
    return (start > 0 ? '…' : '') + slice + (start + 200 < text.length ? '…' : '');
  }

  function highlight(text, tokens) {
    var frag = document.createDocumentFragment();
    var lower = text.toLowerCase();
    var cursor = 0;
    while (cursor < text.length) {
      var next = -1;
      var length = 0;
      tokens.forEach(function (t) {
        var at = lower.indexOf(t, cursor);
        if (at !== -1 && (next === -1 || at < next)) { next = at; length = t.length; }
      });
      if (next === -1) {
        frag.appendChild(document.createTextNode(text.slice(cursor)));
        break;
      }
      frag.appendChild(document.createTextNode(text.slice(cursor, next)));
      var mark = document.createElement('mark');
      mark.textContent = text.slice(next, next + length);
      frag.appendChild(mark);
      cursor = next + length;
    }
    return frag;
  }

  function render(hits, tokens) {
    results.textContent = '';
    hits.forEach(function (hit) {
      var d = hit.doc.raw;
      var li = document.createElement('li');
      li.className = 'note';

      var h = document.createElement('h3');
      h.className = 'note__title';
      var a = document.createElement('a');
      a.href = d.permalink;
      a.appendChild(highlight(d.title, tokens));
      h.appendChild(a);
      li.appendChild(h);

      var p = document.createElement('p');
      p.className = 'note__summary';
      p.appendChild(highlight(excerpt(hit.doc, tokens), tokens));
      li.appendChild(p);

      var meta = document.createElement('div');
      meta.className = 'note__meta';
      meta.textContent = d.date || '';
      li.appendChild(meta);

      results.appendChild(li);
    });
  }

  function run() {
    var query = input.value.trim().toLowerCase();
    if (!query) {
      results.textContent = '';
      status.textContent = '';
      return;
    }
    status.textContent = 'Searching…';
    load().then(function () {
      var tokens = query.split(/\s+/).filter(Boolean);
      var hits = [];
      docs.forEach(function (doc) {
        var s = score(doc, tokens);
        if (s) hits.push({ doc: doc, score: s });
      });
      hits.sort(function (a, b) { return b.score - a.score; });
      hits = hits.slice(0, MAX_RESULTS);
      render(hits, tokens);
      status.textContent = hits.length
        ? hits.length + ' match' + (hits.length === 1 ? '' : 'es')
        : 'No matches for “' + input.value.trim() + '”.';
    }).catch(function () {
      status.textContent = 'Could not load the search index.';
    });
  }

  var timer;
  input.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(run, 120);
  });

  // Deep link: /search/?q=trust
  var initial = new URLSearchParams(window.location.search).get('q');
  if (initial) {
    input.value = initial;
    run();
  }
})();
