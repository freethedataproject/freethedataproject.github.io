---
layout: post_toc
title: Publishing to the site via RMarkdown????
subtitle: Maybe! Who freaking knows."
author: frida
tags: rmarkdown r
umbrella: "data-101"
permalink: /projects/data-101/rmarkdowntest
image_path: https://images.unsplash.com/photo-1591786409812-8260a746fd1c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1217&q=80
category: [data-101]
image_alt: Photo of an old Commodoe monitor with a smiley, also a datasette and old instructions.
output: jekyllthat::jekylldown
---

Whenever someone asks what my PhD program was like, I am always overcome
by an insidious sense of guilt. The reason for this, as far as I can
tell, is that instead of recalling a warm and fuzzy memory of
camaraderie or an instance of pride and accomplishment, my brain
defaults to a very particular feeling, a feeling that was a constant
presence in my life as a doctoral student and which still weighs heavily
on me whenever I meet a person interested in research: a feeling of
split personality.

Imagine a business school graduate seminar on the topic of developing
countries, but we won’t generally go into specifics; it’s better to
focus on the task at hand, X. Regardless of the topic, the goal is
always the same: to maximize profit at any cost and optimize the process
in order to maximize profit. And sure, we can mention in passing how, in
addition to strengthening the financial bottom line of a company, X can
potentially help people in developing countries, and yet—lest you
forget—the paramount task is to maximize profit.

## R Markdown

This is an R Markdown document. Markdown is a simple formatting syntax
for authoring HTML, PDF, and MS Word documents. For more details on
using R Markdown see <http://rmarkdown.rstudio.com>.

When you click the **Knit** button a document will be generated that
includes both content as well as the output of any embedded R code
chunks within the document. You can embed an R code chunk like this:

``` r
summary(cars)
```

    ##      speed           dist       
    ##  Min.   : 4.0   Min.   :  2.00  
    ##  1st Qu.:12.0   1st Qu.: 26.00  
    ##  Median :15.0   Median : 36.00  
    ##  Mean   :15.4   Mean   : 42.98  
    ##  3rd Qu.:19.0   3rd Qu.: 56.00  
    ##  Max.   :25.0   Max.   :120.00

## Including Plots

You can also embed plots, for example:

![]({{site.baseurl}}/media/posts/2021-3-2-rmarkdown_test_files/figure-gfm/pressure-1.png)<!-- -->

Note that the `echo = FALSE` parameter was added to the code chunk to
prevent printing of the R code that generated the plot.
