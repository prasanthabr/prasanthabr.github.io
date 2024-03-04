---
title: 'Why do picklist values on Omniscript not display?'
date: '2023-09-17T10:09:22+12:00'
lastmod: '0001-01-01 00:00:00 +0000 UTC'
draft: false
status: seeding
zettel_tags: ["OmniScipts","picklist values","configuration"]
summary: "Omniscripts have a variety of ways to pick values on the UI; \n One way is to mind a Vlocity Open interface class that returns options; \n We observed that the values do not load up "
links:
    external_link:
        text: "Vlocity Open Interface" 
        icon: "fas fa-thin fa-link"
        href: "https://help.salesforce.com/s/articleView?id=ind.v_dev_t_vlocityopeninterface2_657967.htm&type=5"
        weight: 1
    external_link:
        text: "Implementation of finding picklist values"
        icon: "fas fa-thin fa-link"
        href: "https://help.salesforce.com/s/articleView?id=sf.os_populating_picklist_values_from_apex_21650.htm&type=5" 
        weight: 2
---
Vlocity has is fairly mature in terms on how it converts configuration to operating code.  
For example we are able to present options for a picklist from Apex.  

Recently troubleshot a situation where the picklist values so returned were not populating.
This is particularly difficult to troubleshoot since the method input is often JSON structures for input and output parameters.  

Based on work done, it was noticed the OmniScript at the build tab, has a checkmark that allows for prepopulating values for picklists.  
If that checkmark is not checked, even if the method returns values for the input, nothing is returned, possibly since the method is not called until after the picklist (select) element is made available on screen..
