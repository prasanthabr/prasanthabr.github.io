---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
lastmod: {{ .Date }}
draft: true
slug: "{{ .Name }}"
type: "article"
summary: ""

# STATUS: Choose one - draft, active, stable, evergreen, archived
statuses: ["stable"]

# DOMAINS: Choose from - programming, philosophy, literature, design, entrepreneurship, personal
domains: ["personal"]

# INTENT: Choose one or more - learn, build, lookup, process, connect
intents: ["process"]

# TAGS: Consider - cooking, baking, workflow, automation, productivity, quick, comfort-food
tags: []

authors: ["{{ .Site.Author.name | default "Prasanth" }}"]
showReadingTime: true
showTableOfContents: true
# Recipe-specific fields
prep_time: ""
cook_time: ""
serves: ""
difficulty: "" # easy, medium, hard
# hero: ""
---

## Ingredients

## Instructions

## Notes