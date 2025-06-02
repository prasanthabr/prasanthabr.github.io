---
title: 'Marketing Cloud Roles Behaviour'
date: '2024-07-14T20:15:02+12:00'
lastmod: '0001-01-01 00:00:00 +0000 UTC'
draft: false
status: seeding
zettel_tags: ["marketing cloud", "security"]
summary: "in role conflicts in MC, the most restrictive wins."
links:
    external_link:
        text: "" 
        icon: "fas fa-thin fa-link"
        href: ""
        weight: 1
---

Marketing Cloud Permissions when conflicted, the most restrictive wins.  
This is unlike the Salesforce Core permissions, where the most liberal wins.  

A common issue is when multiple standard permissions are added to a new user.  
An admin who has the view only permission added, will behave as view only user.  

[Marketing Cloud Roles]({{< ref "marketing_cloud_roles.md" >}}
"Marketing Cloud Roles")
