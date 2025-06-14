---
title: 'Refreshing browsers for change incontent; poor mans dev workflow'
date: '2024-12-25T09:42:30+12:00'
lastmod: '2024-12-25T09:42:30+12:00'
draft: false
status: seeding
tags: ["front-end","brower-sync"]
summary: "How do we refresh browser automatically when working on a front end
development workflow?"
links:
    external_link1:
        text: "Stackoverflow" 
        icon: "fas fa-thin fa-link"
        href: "https://stackoverflow.com/questions/5588658/auto-reload-browser-when-i-save-changes-to-html-file-in-chrome#comment137481589_37593590"
        weight: 1
---

When working on pure html, setting up servers to render html and refresh on
changes.  
Was looking for gulp, but found this which seems to do it well.

```
In my opinion it's simpler to (on Linux) install nodejs and npm sudo apt install
nodejs npm. Then you can do npm -g install browser-sync, and finally
browser-sync start --server --files "*.html", "*.css". – 
PetaspeedBeaver
Commented Feb 12 at 20:40 

```
