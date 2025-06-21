---
# Title of your long form article; auto-derived from filename if left blank
# {{ replace .Name "-" " " | title }}
title: "{{ replace .File.ContentBaseName "-" " " | title }}"

date: {{ now.Format "2006-01-02T15:04:05Z07:00" }}
lastmod: {{ now.Format "2006-01-02T15:04:05Z07:00" }}

draft: true
slug: "{{ .Name }}"

type: "long_form"

uuid: "{{ .File.UniqueID }}"
categories: []        # e.g. ["research", "essay"]
tags: []              # e.g. ["longform", "essay"]
aliases: []           # e.g. ["alias1", "alias-two"]

summary: ""         # short summary or abstract
excerpt: ""         # manual excerpt (if different from summary)
related: []           # list of related article UUIDs or slugs
link: ""            # external resource URL

---

<!--
Your long-form content goes here. This is for in-depth articles, essays, or research notes.
-->
