---
title: "Search for changes in a file"
date: 2024-08-31
lastmod: 2024-09-01
draft: false
zettel_tags: ["git", "tips & tricks"]
summary: "Search for commits, logs etc in a file"
status: "seeding"
---

The pickaxe command ```-S``` searches for files.  
Pickaxe also handles regex. NOTE: I need to understand regex for good after so
many years.  

But any of these changes can be made more specific with a file reference.  
```git log -- <reference to the file>```  
```git show <commit hash>  -- <reference to the file>```  

in both these cases, we are filtering the results by the file name, which is
cool.
