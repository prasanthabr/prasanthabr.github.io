---
# Title of your snip; auto-derived from filename if left blank
title: "{{ replace .File.ContentBaseName "-" " " | title }}"

# Creation and modification timestamps (auto-populated)
date: {{ now.Format "2006-01-02T15:04:05Z07:00" }}
lastmod: {{ now.Format "2006-01-02T15:04:05Z07:00" }}

draft: true
slug: "{{ .Name }}"

type: "snip"

uuid: "{{ .File.UniqueID }}"
categories: []        # e.g. ["ideas", "research"]
aliases: []           # e.g. ["alias1", "alias-two"]

summary: ""         # short summary or abstract
related: []           # list of related snip UUIDs or slugs
link: ""            # external resource URL

---

<!--
Your snip content goes here. Keep it short and to the point—think of a fleeting note.
-->
