---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
slug: "{{ .Name }}"
type: "article"
summary: ""

# STATUS: Choose one - draft, active, stable, evergreen, archived
status: ["draft"]

# DOMAINS: Choose from - programming, philosophy, literature, design, entrepreneurship, personal
domains: []

# INTENT: Choose one or more - learn, build, lookup, process, connect
intent: []

# TAGS: Free-form, but consider domain-specific suggestions:
# Programming: javascript, functional-programming, algorithms, architecture, debugging
# Philosophy: ethics, epistemology, metaphysics, logic, phenomenology
# Literature: poetry, prose, modernist, analysis, criticism, narrative
# Design: ui-ux, systems-thinking, patterns, accessibility
# Personal: productivity, learning, reflection, habits
tags: []

authors: ["{{ .Site.Author.name | default "Prasanth" }}"]
showReadingTime: true
showTableOfContents: true
showRelatedContent: true
# hero: ""
---

Start writing your note here.