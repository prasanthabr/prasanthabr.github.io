# The theme

There is no theme. Layouts live in `layouts/`, styles in `assets/css/`, and
`config/_default/hugo.toml` has no `theme =` line. Nothing is vendored, so
anything you want to change is a file you can open.

The design rule underneath all of it: **the URL never encodes maturity.**
Every note is at `/notes/<slug>/` from creation and keeps that address. How
finished a piece is lives in `statuses` front matter, so promoting a note is a
one-word edit.

## Where things are

```
config/_default/
  hugo.toml        registered taxonomies, related-content tuning, output formats
  params.toml      every value the templates read
  menus.en.toml    header and footer nav

data/
  taxonomy.toml    labels, term order, badge hue and help text per term

layouts/
  baseof.html      page shell; templates fill the `main` and `scripts` blocks
  home.html        the filterable index
  list.html        section archive, grouped by year
  page.html        both a note and a standalone page (branches on mainSections)
  term.html        /statuses/active/ etc.
  taxonomy.html    /statuses/ etc.
  search.html      selected by `layout: search` front matter
  404.html
  home.rss.xml     feed, notes only
  home.json.json   search index
  _markup/
    render-table.html   wraps tables so wide ones scroll, not the page
  _partials/
    head, header, footer, breadcrumbs, analytics
    note.html           the only note-row markup in the theme
    badge.html          the only badge markup in the theme
    filter-bar.html     the home page controls
    filter-taxonomies.html  which axes are sliceable (from data/taxonomy.toml)
    term-config.html    slug-normalised view of data/taxonomy.toml
    article-meta.html, related.html, taxonomy-hues.html

assets/
  css/  fonts, tokens, base, layout, components, chroma — concatenated in the
        order listed in _partials/head.html
  js/   theme.js (inlined in head), filter.js (home), search.js (search page)

static/fonts/   self-hosted Inter, Literata, JetBrains Mono (SIL OFL 1.1)
```

## Common changes

**Add a status, domain or any other term.** Edit `data/taxonomy.toml`:

```toml
[statuses.terms.parked]
  hue = 250
  help = "Stopped, might come back to it."
```

That is the whole change. The badge gets a colour, the tooltip gets text, the
filter chip appears, and the term page picks up the help line. No template and
no CSS edit — `_partials/taxonomy-hues.html` turns the hue into a CSS custom
property and `components.css` computes the rest. Omit `hue` and the term uses
`--hue-default`.

**Add a whole new taxonomy.** Register it in `hugo.toml` under `[taxonomies]`,
then add a section to `data/taxonomy.toml`:

```toml
[sources]
  label  = "Source"
  filter = true    # show it in the home filter bar
  weight = 40      # filter groups sort by this
```

`filter-taxonomies.html` will error the build if you set `filter = true` on a
taxonomy that is not registered, rather than silently rendering nothing.

**Change how badges look** (not which colours): `--badge-l`, `--badge-c`,
`--badge-bg-l`, `--badge-bg-c` in `assets/css/tokens.css`. They are OKLCH
lightness/chroma, applied to every badge in both themes. The current values
give at least 6.8:1 contrast on every hue in the data file.

**Change reading width:** `--measure` in `tokens.css`. `.wrap--wide`, used by
index views, has its own value in `layout.css`.

**Turn analytics on:** uncomment the `[analytics]` block in `params.toml`.
GoatCounter and Plausible are supported and both are cookieless — which is why
there is no consent banner and why the privacy page can say what it says. A
provider that sets cookies means the banner has to come back with it.

**Add a second stream** (not just `notes`): create the section, add it to
`mainSections` in `params.toml`. Home, RSS and the search index all read that
param, and `page.html` branches on it to decide whether a page is a note.

**Change syntax highlighting:** re-run

```
hugo gen chromastyles --style=<name>       # light half
hugo gen chromastyles --style=<name>-dark  # dark half
```

and rewrite `assets/css/chroma.css`, scoping the dark half under
`[data-theme='dark']`. Background rules are dropped on purpose so code blocks
keep `--bg-sunken`.

## The home page

`home.html` lists every note and lets you cut it down client-side. Filter
groups come from `data/taxonomy.toml`, so they follow your vocabulary.

Selections are written to the URL hash — `/#statuses=stable&tags=cooking` —
so a slice you keep coming back to can be bookmarked. Chips that would return
nothing given the other selections are dimmed rather than hidden.

The contract between `note.html` and `filter.js` is the `data-*` attributes on
each row; facets are discovered from the DOM, so adding a filterable taxonomy
needs no JavaScript change.

Without JavaScript the filter bar stays hidden and the full list renders, so
the page is never a set of dead controls.

## Fonts

Self-hosted in `static/fonts/`, latin subset only, variable weights. They were
generated from the Google Fonts css2 API and the `@font-face` block lives at
the top of `assets/css/fonts.css`. Nothing on the site requests a third-party
host at runtime.

To refresh or add a weight, fetch the css2 URL with a modern browser
user-agent, keep the `latin` block, download the woff2 it points at, and
rewrite the `src:` to `/fonts/<file>`.
