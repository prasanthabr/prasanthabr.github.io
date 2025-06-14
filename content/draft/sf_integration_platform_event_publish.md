---
title: "Using the platform event publish for integration"
date: 2023-07-07
lastmod: 2023-07-07
draft: false
tags: ["Salesforce", "Integration"]
summary: "Learnings from discussing, planning and implementing a data layer integration using Salesforce Platform Events"
status: "growing"
---

### tl;dr  
Fire and Forget pattern that offers high reliability. Utilize creation of a platform event and use variety of tools to write into the [platform event][platform event developer guide]. This pattern offers decoupling from interfacing applications, while providing high availability. The platform event fades(deletes itself) after a given time. Allows for multiple interfacing applications for read from the publish.  

### Considerations   
- Verification: Platform events do not support SOQL; this meant verification is based on trigger on Platform events. 
- Trigger Points: Defining trigger points is critical. 
    - Look at what is to be published  
    - Look at whether this needs to be automated
    - Look at what is the last element that is created
    - Look at structuring code to remove duplicate publishes
- Noisy Platform Events: Define automated publishes to filter for criteria before publishing to platform event.  
- Common Platform Events: Guidance was that using a common platform event object targeting different subscribers is inefficient.
    - Causing half (or more) of events to be discarded by a listening subscriber is inefficient (need to find out more about this since there was difference in opinion)
- Payload Field:  When there is reduced confidence about what attributes are needed on a platform event, one field could be used to hold JSON structure.
    - define an apex type and use constructors to initiate
    - Have not yet figured out how to initialize null values efficiently (_will write more to explain_)
- End point payloads: While a lot of the mechanics could be offloaded to the middleware, there should be logic to define payload types on SF end.
    - Eg: I had thought the calling code can define a parameter and define a method to select a given type and end point, this is not prudent. In this case, searching the structure to identify how to differentiate between types is key. Spent the time to understand what the business processes and how the data flows in.


[platform event developer guide]: https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm