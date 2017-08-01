---
layout: post
title:  "Audience Mismatch :: SSO On Salesforce.com Lightning Low Level Gotcha"
date:   2017-08-01 11:01:01
categories: SFDC
tags: [Salesforce.com, SFDC, SSO]
author: prasanthabr
image:
  feature: busdepot.jpg
  credit: UnSplash.com
---

Quick Note to Self: 

For an SAML Response:
    **Recipient URL**: Would be the Salesforce Login URL from the Single Sign On Settings on Salesforce. **This would not match the lightning domain**
    **Entity Id**: The domain here may not match the domain useed on the Recipient URL: