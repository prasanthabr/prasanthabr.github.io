---
title: 'How do I find a file from a folder to edit in Vim'
date: '2023-09-09T12:58:50+12:00'
lastmod: '0001-01-01 00:00:00 +0000 UTC'
draft: false
status: seeding
tags: ["vim","tips & tricks", "snippets"]
summary: "finding files on git recursively from a folder"
---

Often you are on vim and do not want to first search for the file and figure the path and then edit it.  
Can you use wild characters to find files filtered by a folder or perhaps by name or a combination?


```
:e **/<folder name>/<filename>
```

What I have realised is that ```TAB``` after a first few characters also seem to work
