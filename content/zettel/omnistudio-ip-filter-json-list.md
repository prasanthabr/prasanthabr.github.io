---
title: 'How do i filter JSON lists based on an attribute? - using integration
procedures' 
date: '2025-03-31T05:33:30+12:00'
lastmod: '2025-03-31T05:33:30+12:00'
draft: false
status: seeding
zettel_tags: ["OmniStudio","Integration Procedure"]
summary: "There are no obvious ways to split JSON lists based on the attributes within the list" 
---

Common literature would point to using a loop and a setvalue with an execution
condition to filter record.  
Thinking being, the list loops and the values get added when the conditions in
the execution condition match.  

Practically, I observed that a JSON list with three elements were looping nine
times. (3 x 3). This meant that the list output had null values, which again
needed to be filtered out. Additionally, loop blocks are very hard to debug,
since the values do not show in debugs.  

This solution uses the list action.  
- The list action takes the list in Merge List Order.
- Filter is applied under Modify List, with a Filter List Formula.


Note: There is no delimiters (%%) that are needed in the filter list formula.  
Note: The attribute does not need the list name, its as if the list action is
within the list and operating in the context of the list item.  

![Filter Ref](/img/ip-list-filter.png)

[From Salesforce
Documentation](https://help.salesforce.com/s/articleView?id=xcloud.os_list_action_properties_for_integration_procedures_53602.htm&type=5)

> Filter List Formula
> 
> Specifies a formula that is run on each node of the list to determine if it
> remains in the list. If FormulaResult returns TRUE after evaluating a node, the
> node is retained; otherwise the node is removed. For example, you can specify
> nodename != "" to remove null values from a list.


```
{
    "executionConditionalFormula": "",
    "failureConditionalFormula": "",
    "failOnStepError": true,
    "useFormulas": true,
    "additionalInput": {},
    "additionalOutput": {},
    "failureResponse": {},
    "sendOnlyAdditionalInput": false,
    "returnOnlyAdditionalOutput": false,
    "returnOnlyFailureResponse": false,
    "responseJSONPath": "",
    "responseJSONNode": "",
    "sendJSONPath": "",
    "sendJSONNode": "",
    "advancedMerge": false,
    "advancedMergeMap": [],
    "preventIntraListMerge": false,
    "mergeFields": [],
    "allowMergeNulls": true,
    "hasPrimary": false,
    "primaryListKey": "",
    "sortBy": [],
    "sortInDescendingOrder": false,
    "mergeListsOrder": [
        "GetPublicNotes"
    ],
    "filterListFormula": "DefaultCheckType == '3 - Not checked'",
    "dynamicOutputFields": "",
    "updateFieldValue": {},
    "chainOnStep": false,
    "actionMessage": "",
    "additionalChainableResponse": {},
    "show": {
        "group": {
            "operator": "AND",
            "rules": []
        }
    },
    "label": "ListAction2",
    "disOnTplt": false
}
```
