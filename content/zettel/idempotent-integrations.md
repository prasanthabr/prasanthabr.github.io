---
title: 'Idempotent Integrations'
date: '2023-09-09T12:51:57+12:00'
lastmod: '0001-01-01 00:00:00 +0000 UTC'
draft: true
status: seeding
zettel_tags: []
summary: ""
---

tl;dr: what does it mean to be idempotent?

    https://www.enterpriseintegrationpatterns.com/patterns/messaging/IdempotentReceiver.html

The idea is if you sent the files repeatedly, does it cause multiple responses;
_function that produces the same result when applied to itself_

- So question is - how do we achieve this? a unique identifier?
