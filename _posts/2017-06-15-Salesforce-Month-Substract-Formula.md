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

This is reproduced from https://success.salesforce.com/ideaview?id=08730000000BrQ2AAK
This is a good baseplate for creating date formulas on Salesforce

```

DATE (
    /*YEAR*/
    YEAR ( EndDate ) - FLOOR( Notice_for_Client_to_Terminate_months__c  / 12) - IF (MONTH ( EndDate ) - MOD( Notice_for_Client_to_Terminate_months__c , 12) > 0, 0, 1),
 
    /*MONTH*/
    IF (MONTH ( EndDate ) - MOD ( Notice_for_Client_to_Terminate_months__c , 12) > 0, MONTH ( EndDate ) - MOD ( Notice_for_Client_to_Terminate_months__c , 12), MONTH ( EndDate ) - MOD ( Notice_for_Client_to_Terminate_months__c , 12) + 12),
 
    /*DAY*/
    MIN (DAY ( EndDate ),
        CASE (
  
   /* Month */    
   IF (MONTH ( EndDate ) - MOD ( Notice_for_Client_to_Terminate_months__c , 12) > 0, MONTH ( EndDate ) - MOD ( Notice_for_Client_to_Terminate_months__c , 12), MONTH ( EndDate ) - MOD ( Notice_for_Client_to_Terminate_months__c , 12) + 12), 9, 30, 4, 30, 6, 30, 11, 30, 2,
   
   /* return max days for February dependent on if end date is leap year */
   IF (MOD (YEAR ( EndDate ) - FLOOR( Notice_for_Client_to_Terminate_months__c / 12) - IF (MONTH ( EndDate ) - MOD( Notice_for_Client_to_Terminate_months__c , 12) > 0, 0, 1), 400) = 0 || (MOD (YEAR ( EndDate ) - FLOOR( Notice_for_Client_to_Terminate_months__c / 12) - IF (MONTH ( EndDate ) - MOD( Notice_for_Client_to_Terminate_months__c , 12) > 0, 0, 1) ,4) = 0 && MOD (YEAR ( EndDate ) - FLOOR( Notice_for_Client_to_Terminate_months__c / 12) - IF (MONTH ( EndDate ) - MOD( Notice_for_Client_to_Terminate_months__c , 12) > 0, 0, 1) ,100) <> 0 ), 29, 28), 31)
    )
)
```