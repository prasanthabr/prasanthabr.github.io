---
# Title of your content; auto-derived from filename if left blank
title: "{{ replace .File.ContentBaseName "-" " " | title }}"

date: {{ now.Format "2006-01-02T15:04:05Z07:00" }}
lastmod: {{ now.Format "2006-01-02T15:04:05Z07:00" }}

draft: true
slug: "{{ .Name }}"

type: "default"

uuid: "{{ .File.UniqueID }}"
categories: []        # e.g. ["ideas", "research"]
aliases: []           # e.g. ["alias1", "alias-two"]

summary: ""         # short summary or abstract
related: []           # list of related UUIDs or slugs
link: ""            # external resource URL
---

<!--
Your content goes here.
-->
