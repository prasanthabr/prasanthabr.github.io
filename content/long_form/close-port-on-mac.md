---
title: 'Close the tcp port on a Mac'
date: '2024-10-19T05:20:51+12:00'
lastmod: '2024-10-19T05:20:51+12:00'
draft: false
status: seeding
tags: [Development, SF]
summary: "When apps are using a particular port, this is how it can be closed"
links:
    external_link:
        text: "Killing process on port" 
        icon: "fas fa-thin fa-link"
        href: "https://medium.com/@jonathangatz.fl/salesforce-development-kill-the-process-running-on-port-1717-235c60853600"
        weight: 1
---

faced this when using a custom connected app for linking to VSCode.  

Open terminal to get the process details

```
lsof -i tcp:1717
```

Use the PID on that command and close the port

```
kill -9 <port#>
```





