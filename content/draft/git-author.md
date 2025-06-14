---
title: 'Git Author'
date: '2023-09-09T10:50:30+12:00'
lastmod: '0001-01-01 00:00:00 +0000 UTC'
draft: false
status: seeding
tags: []
summary: "How do you set and amend the author on a git commit?"
---

Git commits are linked to a name and email address  
In my case this is linked to ssh; attimes repos need different ssh

To set the Author on Folder
--------------------------
```
git config user.name "Prasanth"
git config user.email "p@example.com"
```

To set the Author on specific commit
-----------------------------------
```
git commit --author="prasanth<p@example>""
```

To ammend the Author of a commit
-------------------------------
```
git commit --amend --author="prasanth<p@examples>" --no-edit
```
