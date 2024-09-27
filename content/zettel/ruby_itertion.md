---
title: 'Ruby Iterators'
date: '2024-09-28T05:33:30+12:00'
lastmod: '0001-01-01 00:00:00 +0000 UTC'
draft: false
status: seeding
zettel_tags: ["ruby","iterator","blocks"]
summary: "Short intro into the ruby iteration methods. Some are uncommon and special."
links:
    external_link1:
        text: "Iterator FAQ" 
        icon: "fas fa-thin fa-link"
        href: "https://www.ruby-lang.org/en/documentation/faq/5/"
        weight: 1
    external_link2:
        text: "Woman in Rails - Iterator" 
        icon: "fas fa-thin fa-link"
        href: "https://womanonrails.com/ruby-iterators"
        weight: 2
---

- loops and iterators are different
- ruby has some special iterators
- iterators operate on arrays and ranges _and procs_
- break can be used to break out of the iterator

## Common Methods

#### each
```
[1,2,3].each {|x| x*2}

# [2,4,6] => [1,2,3]

```
takes each element and operates  
Returns the original array  

#### collect
```
[1,2,3].collect {|x| x*2}

# [2,4,6]

```
transforms the array  
returns the transformed array  

#### select
```
[1,2,3].select { |x| (x % 2) == 0 }

# [2]
```
filters the array based on the conditions in block  
returns the filtered list of the array

#### inject
```
[1,2,3].inject(1) {|result, item| result + item}

# 7
```
injects the value and does an inner loop
returns the result  
