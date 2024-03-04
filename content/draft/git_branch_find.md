---
title: Find the Git Branch from a commit hash
date: '2023-09-08T14:17:16+12:00'
lastmod: '0001-01-01 00:00:00 +0000 UTC'
draft: false
status: seeding
zettel_tags: ["git","tips & tricks","snippets"]
summary: "This is a clever git log that would print the branch commit for any commit hash passed."
---
This logs the branch commit from any commit that is passed through.i  
Quite useful when searching for branches from a commit.

git log 338666e77bb628935618d13b1201f5f7e1c43c5c..HEAD --ancestry-path --merges --oneline --color | tail -n 1

