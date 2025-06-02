---
title: 'How do I get values from within a loop action'
date: '2025-03-31T05:33:30+12:00'
lastmod: '2025-03-31T05:33:30+12:00'
draft: false
status: seeding
zettel_tags: ["OmniStudio","Integration Procedure"]
summary: "Getting values out of a loop action is hard. Documentation is misleading and sparce"
---

The loop has a additional loop output function that feeds out values for every
loop run.  
This shows up on the debug logs, but when using set values, the value just seems
to get overwritten, so essentially this leads to the last value being sent out.  

Creatively looking at adding values to a node does not seem to work.  
And also results is bad json structures, which in turn become harder to parse.  

What had worked was instantiating a variable as an array using a set value before the loop.  
Within the loop add values to the same variable.  
Outside of the loop use the variable to see the list  
