---
title: "Loopy Find"
date: 2021-08-01
draft: false
project_tags: ["Go"]
status: "evergreen"
weight: 2
summary: "Short script in Go to do a custom find and sort"
links:
    external_link:
        text: "Go Script gist"
        icon: "fas fa-external-link-alt"
        href: "https://gist.github.com/prasanthabr/fbfd16209797427de7f37ee85990597e"
        weight: 1
---

This is a custom scripts to recursively filter records similar to an index on a CSV.
Though the script, then filters down to a series of results that do have the matching result.

# Mechanism

This is pretty basic, with a couple of functions doing the heavy lift.

First the code, creates a map of the find key and recursive results that match that key. This is admittedly inefficient, but been done for cases where the key does not exist as the first available value. _will think about a better algo to make this more efficient._

The matching key is being bled into an array, which is then used to filter out the map.

The final results are then set into a 2x2 array and printed into a CSV.

## Visualization

Scenario: Find all values that the key which has Value C has and present.

| Column 0 <br> Imagine this is our key | Column 1 <br> Imagine this is our value | Column 2     | Column 3     |
| ------------------------------------- | --------------------------------------- | ------------ | ------------ |
| Keys 1                                | Value A                                 | Other Data 1 | Other Data 2 |
| Keys 2                                | Value B                                 | Other Data 1 | Other Data 2 |
| Keys 3                                | Value C **<<**                          | Other Data 1 | Other Data 2 |
| Keys 1                                | Value A                                 | Other Data 1 | Other Data 2 |
| Keys 2                                | Value D                                 | Other Data 1 | Other Data 2 |
| Keys 3                                | Value A **<<**                          | Other Data 1 | Other Data 2 |
| Keys 4                                | Value C **<<<<**                        | Other Data 1 | Other Data 2 |

Here, the two keys that have Value C are Keys 3 and Keys 4  
Keys 3 has another value Value A, while Keys 4 has no other values

This would result in the following output

| Key    | Value1  | Value2  |
| ------ | ------- | ------- |
| Keys 3 | Value C | Value A |
| Keys 4 | Value C |         |

# Learnings

How do I transpose the CSV?  
How do we split out the reading of the file, without entering an infinite loop _this should be easy, and just needs some thought_

<script src="https://gist.github.com/prasanthabr/fbfd16209797427de7f37ee85990597e.js"></script>