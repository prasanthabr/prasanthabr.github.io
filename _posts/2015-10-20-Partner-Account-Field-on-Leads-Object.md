---
layout: post
title:  "Partner Account : Standard Field on Lead Object Salesforce.com"
date:   2015-10-20 13:01:19
categories: SFDC
tags: [SFDC, Salesforce.com, SFDC Cookbook]
author: prasanthabr
---

#tl;dr
Partner Account on Leads is a standard field that populate the partner account of the lead owning partner user.

##Background
One of the lead management solutions that we were building involved sharing leads with partner accounts over a partner community. The leads were to change ownership to the partners, the different partners were not to have visibility to each others leads since they could be competitors, visibility and edit access to all members of a partner account, when any one of the partner members owned the lead. While a simple solution on paper, my orignial solution had been to use a custom button to trigger a visual flow which creates a apex sharing rule on the LeadShare object, sharing the lead with the partner users and subordinates group. This group id was to be stored on a custom setting so that the flow can pick the same up. The flow also gave benifits of search and filtering by partner account names rather than individual partner user names. A new field on leads can also populate the partner account value allowing for reporting on the sharing aswell.

Well, as luck would have it, it was rejected by the review team and the final solution included disabling partner community visibility, a partner user sharing rule, super user access to the all partner community users and assignment by way of ownership changes to pretty much achieve the same features as the original solution.

##Challenge
The original solution had a partner account name field capture that allowed for easy reporting and identification of the partner to which the lead has been shared. I reckon it was my excitement in trying out the flow and the process builder, but my solution for this was to trigger an auto launched flow via a process builder and populate a preexisting custom lookup field to help report on the data. Populating the lookup field for some reason did not seem to work, the different triggers and flows acting on the lead, tended to clear the field. (plan to research further to understand why - but thats for later)

##The 'aha' moment 
It is in this context that I was researching the fields available on the Lead Object. I noticed a Partner Account field, that too a standard field, which was hidden from the system admin on the profile field level security (FLS). Anything that is hidden from the system admin is naturally interesting, and so I went about attempting to enable the field. I noticed that the field can be read (and hence shown on a pagelayout) but the edit could not be enabled.

Turns out, if a partner user is owning the lead, this field automatically populates the partner account to which the owner is a part.
