---
title: "Privacy"
date: 2024-01-01
lastmod: 2026-07-26
summary: "No tracking script and no cookies from the page itself. Cloudflare sits in front of the site and produces aggregate traffic statistics, which I do look at."
description: "What this site collects (nothing) and what the infrastructure in front of it sees (aggregate traffic statistics)."
---

The page itself has no tracking script, sets no cookies, and makes no
third-party request. But the site is served through Cloudflare, which produces
aggregate traffic statistics from the requests it handles — and I do look at
them. That is analytics, so it belongs on this page rather than being quietly
left out.

There is no consent banner because nothing here needs consent. Nothing on this
page can identify you or follow you anywhere.

## What the site itself does

- **No analytics script.** No page-view beacon, no session tracking, no
  tag manager.
- **No cookies.** The only thing stored on your device is your light/dark theme
  preference, kept in `localStorage`. It is not a cookie, it is never sent to a
  server, and it is only written if you press the toggle.
- **No third-party requests.** Fonts are served from this domain. No CDN
  scripts, no embeds, no social widgets, no ad network.
- **No accounts, no forms, no comments.** There is nothing here that could
  collect a name or an email address.

## What the infrastructure sees

A request passes through three companies before it reaches you. Each one sees
it, in the ordinary way any web host does:

- **Cloudflare** — DNS and proxy. It terminates the connection, so it sees
  every request: your IP address, the page, your browser's user agent, and the
  country you're in. It gives me an aggregate dashboard — requests, popular
  pages, countries, referrers, bandwidth, blocked bots. **This is the analytics
  I have.** It is counted at the edge from requests, not from anything running
  in your browser, and it puts nothing on your device.
- **Fastly** — the CDN GitHub Pages uses to serve the files.
- **GitHub Pages** — the origin, where the site is hosted.

Cloudflare also switches on Network Error Logging, which asks your browser to
report *failed* requests back to Cloudflare. Successful page loads are not
reported.

## What I can't see

- Who you are. There is no identifier tying one visit to another.
- Anything about you across other sites or devices.
- Individual reading behaviour — how far you scrolled, what you hovered,
  how long you stayed.

The honest summary: I can tell that a page was popular last week and roughly
where readers came from. I cannot tell that it was you.

## Third parties

- [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/)
- [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)
- [Fastly Privacy Policy](https://www.fastly.com/privacy/)

## If this changes

If I add a proper analytics tool it will be a cookieless one, and this page
will say which, before it ships.

---

*This site previously ran Google Analytics behind a consent banner — badly:
the tracker loaded before the banner appeared, so declining did nothing. Both
have been removed, along with the Google Fonts request that fired before the
banner was ever shown.*
