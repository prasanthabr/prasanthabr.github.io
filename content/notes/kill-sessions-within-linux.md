---
title: "Kill Sessions Within Linux"
date: 2026-01-02T18:43:08+13:00
lastmod: 2026-01-02T18:43:08+13:00
draft: false
slug: "kill-sessions-within-linux"
type: "article"
summary: "working with ssh how do you kill stale sessions"

# STATUS: Choose one - draft, active, stable, evergreen, archived
statuses: ["active"]

# DOMAINS: Choose from - programming, philosophy, literature, design, entrepreneurship, personal
domains: [programming]

# INTENT: Choose one or more - learn, build, lookup, process, connect
intents: [learn]

# TAGS: Free-form, but consider domain-specific suggestions:
# Programming: javascript, functional-programming, algorithms, architecture, debugging
# Philosophy: ethics, epistemology, metaphysics, logic, phenomenology
# Literature: poetry, prose, modernist, analysis, criticism, narrative
# Design: ui-ux, systems-thinking, patterns, accessibility
# Personal: productivity, learning, reflection, habits
tags: [debugging]

authors: ["Prasanth"]
showReadingTime: true
showTableOfContents: true
showRelatedContent: true
# hero: ""
---

When working with sessions over ssh, linux commands to manage sessions become useful.

Get a list of active sessions with a w  
```
$ w
```

To skill a specific session, reference the TTY on the session (in my case, its tagged on the what).  
```
$ pkill -HUP -t pts/1
```

