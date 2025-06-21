---
# Title of your bookmark; auto-derived from filename if left blank
# {{ replace .Name "-" " " | title }}
title: "{{ replace .File.ContentBaseName "-" " " | title }}"

# Creation and modification timestamps (auto-populated)
date: {{ now.Format "2006-01-02T15:04:05Z07:00" }}
lastmod: {{ now.Format "2006-01-02T15:04:05Z07:00" }}

draft: true
slug: "{{ .Name }}"

# Content type for templates and taxonomies
type: "bookmarks"

uuid: "{{ .File.UniqueID }}"
categories: []        # e.g. ["reference", "web"]
tags: []              # e.g. ["bookmark", "web"]
aliases: []           # e.g. ["alias1", "alias-two"]

summary: ""         # short summary or abstract
excerpt: ""         # manual excerpt (if different from summary)
related: []           # list of related bookmark UUIDs or slugs
link: ""            # external resource URL

---

<!--
Your bookmark content goes here. Add any notes or context about why you saved this link.
-->
