---
layout: post
title:  "Defining Password Policies based on attributes for Salesforce Community Users"
date:   2017-01-25 11:01:01
categories: Reviews
tags: [Salesforce.com, SFDC, Salesforce Communities, Salesforce Security, Salesforce Access Control]
author: prasanthabr
image:
  feature: busdepot.jpg
  credit: UnSplash.com
---

### tl;dr
How can we define geography specific password policies for external users on Salesforce Communities.

## Use Case Background
For a global organization leveraging Salesforce.com to expose enterprise data and applications to its community of partners, in addition to the policies that guide access to the instance for its internal users, there is the added dimension of policies that are cognizant of the agreements and contracts that the organization has signed with its individual partners. One example of a dimension that needs a partner or a geography specific treatment is the password policy that is relevant for the partners. One size fits all should not be the way to go forward.

## Low Community Capacity Utilization
Often we see communities being created for a collection of related features that needs to be exposed to the organizations partners. We have noticed that many clients do not use custom profiles when they use a community license for access; perhaps due to the limited agenda that is addressed with individual communities. What is practically seen is the use of less than 5% of community capacity by individual salesforce orgs. But we feel that as the usage of communities mature and become more main stream, with community count limits playing an important constraint, we would see requirements and tactics to effectively control the way different classes of partner users access their data within a single community. 


## Custom Salesforce Community Profiles
With the native Salesforce password policies being too broad for application, one approach that can be taken would be to leverage custom Community Profiles to effectively define and control access. This should ideally be a no brainer, but what we see in projects is a conscious underutilization of the features that can be employed in Communities. * Another example of this behavior is the usage of common sharing model for internal and external users - again this may be due to concerns around maintenance complexity - but we feel that as we see more objects being exposed to different partner groups on a community, we would see this feature being leveraged more *

## Approach for Password Policies
Our approach is to define profiles that are specific to each geography (or any other differentiation by attribute) to allow for the users to have password policies that are specific to that user group.
![Profile Password Policies]({{ site.url }}/images/Password-Policies.png)
