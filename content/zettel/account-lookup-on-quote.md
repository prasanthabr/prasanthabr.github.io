---
title: 'Account Lookup on Quote'
date: '2024-07-25T05:20:51+12:00'
lastmod: '0001-01-01 00:00:00 +0000 UTC'
draft: false
status: seeding
zettel_tags: [Industries, weird]
summary: "The Lookup of Account on Quote behaves like a formula"
links:
    external_link:
        text: "" 
        icon: "fas fa-thin fa-link"
        href: ""
        weight: 1
---

On the quote object the standard account lookup is AccountId.  
When trying to get a related list (and also when adding the timeline component)  
found that we are not able to access the related list.  

This is very strange and inconsistent for me.  
I will always expect the standard lookups to have a relationship.  

I did not find documentation around it, but have checked this in July 2024.  
I did find a stackexchange post giving the idea that the lookup behaves like a
formula
