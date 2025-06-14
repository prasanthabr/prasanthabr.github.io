---
title: 'What is semantic search; an intro look'
date: '2024-11-17T20:06:12+12:00'
lastmod: '2024-11-17T00:00:00+12:00'
draft: false
status: seeding
tags: ["fundamentals","semantic search", "vector search"]
summary: "Understanding what semantic search is"
links:
    external_link:
        text: "Salesforce Architects on Semantic Search" 
        icon: "fas fa-thin fa-link"
        href: "https://help.salesforce.com/s/articleView?id=sf.mc_overview_roles.htm&type=5://medium.com/salesforce-architects/what-is-semantic-search-677a4e74e134"
        weight: 1
    external_link:
        text: "Google Blog on Semantic Search" 
        icon: "fas fa-thin fa-link"
        href: "https://cloud.google.com/blog/topics/developers-practitioners/meet-ais-multitool-vector-embeddings"
        weight: 2
---

# Background
Semantic search is being read here in the context of machine learning.  
Traditional search works on matching keywords in a data source.  
Semantic search thinks about search with the meaning and context in
consideration.  

# What it is
Think of this as a concept of plotting ideas and keywords in an n dimension by
meaning.  
Such a concept becomes important in grouping ideas together, allowing it to be
identified by meaning using vectors.  

# How are these embeddings created
The object is fed through embedding models such as
[BERT](https://www.nvidia.com/en-us/glossary/bert/) and
[T5](https://huggingface.co/docs/transformers/en/model_doc/t5) to generate
vector representations.
