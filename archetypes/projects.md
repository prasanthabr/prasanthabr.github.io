---
# Title of your project; auto-derived from filename if left blank
# {{ replace .Name "-" " " | title }}
title: "{{ replace .File.ContentBaseName "-" " " | title }}"

date: {{ now.Format "2006-01-02T15:04:05Z07:00" }}
lastmod: {{ now.Format "2006-01-02T15:04:05Z07:00" }}

draft: true
slug: "{{ .Name }}"

type: "projects"

uuid: "{{ .File.UniqueID }}"
categories: []        # e.g. ["development", "update"]
tags: []              # e.g. ["project", "update"]
aliases: []           # e.g. ["alias1", "alias-two"]

summary: ""         # short summary or abstract
excerpt: ""         # manual excerpt (if different from summary)
related: []           # list of related project UUIDs or slugs
link: ""            # external resource URL

---

<!--
Your project update or description goes here. Use this for tracking project work and milestones.
-->
