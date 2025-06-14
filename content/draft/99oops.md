---
title: "Sandi Mentz 99Bottles Design Notes"
date: 2025-01-19
lastmod: 2025-01-19
draft: false
tags: ["oops","design"]
summary: "Notes from reading the 99 Bottles book on Oops design."
status: "seeding"
---

Write tests, or think about tests when writing code.  
This is a translation of the requirement in test form.  


Consider the API structure to come up with the methods to be called in tests.  


Principle: When a test becomes specific, the code should become more generic  

When writing tests, when there is no fully formed idea on what the solution
could be, we may write a test that taps the next logical value. eg: after
testing for 99 bottles, maybe next would be test for 98 bottles. But dont be
afraid to change the 98 test when it is identified that both of them fall in the
same range and does not make a material test difference. Eg: Update the 98 test
to 3, to push to the edge of that range. Often this may be driven by intuition
and maybe formed by experience.   


Focus on what your future self or another dev would look at. Attempt to reduce
the cognitive load on that future self. eg: When using conditionals, consider,
where appropriate, changing ifs to case, when there are multiple conditionals 
to indicate that the same value is being tested in each case.


Consider the responsibility of different methods to decide on how they are
written. Eg: Why it is ok to have duplication in one method, while its not okay
in another method  

Use tests as a way of thinking and directing how the code is written. Sort of to
box the thinking to an approach that is acceptable and clean.  
