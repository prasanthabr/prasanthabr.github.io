---
layout: post
title:  "Apex Sharing without Apex"
date:   2015-07-21 07:51:19
categories: SFDC
tags: [SFDC, Salesforce.com, SFDC Cookbook]
author: prasanthabr
---

#### The premise
Sharing for Salesforce.com is primarily via the sharing rule ui section. But there is an inherent limitation due to the number of sharing rules that an object can support. But more than this fact, there is a pronounced lack of flexibility since the record sharing cannot be done on the fly.

#### How does Salesforce.com sharing work?
Since Salesforce as a tool is meta data driven, one would imagine that sharing attributes shall also be defined via meta data. For every record shared, there is an entry that is created on the sharing system object that would allow the system to map and share the record. 

For Example, for leads, the system object where sharing is defined is LeadShare. An entry on lead share defining the record id, the shared group and the sharing reason would allow for the record to be shared automagically.

#### Apex Sharing *without the Apex*
For the longest time, access to these system objects and these flexible sharing options were available only via Apex classes and was thus the exclusive privy to Salesforce.com developers. But while these differentiations are being removed, Salesforce has offered Visual Flows, which allows for sharing entries in system share objects.


#### My Approach
