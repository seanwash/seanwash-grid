---
title: CSS is hard — Thoughts on managing the cascade
date: 2016-11-04
published: true
tags: ['CSS']
canonical_url: false
description: "For as long as I’ve been a web developer, the CSS Cascade has been a thorn in my side. I understand how it can be helpful, but the number of times that I’ve been frustrated by it far outweigh the the number of times that I’ve thought to myself “hey, this is pretty great”! Does this mean that we should throw it away?"
---

# CSS is hard — Thoughts on managing the cascade

For as long as I’ve been a web developer, the CSS Cascade has been a thorn in my side. I understand how it can be helpful, but the number of times that I’ve been frustrated by it far outweigh the the number of times that I’ve thought to myself “hey, this is pretty great”! Does this mean that we should throw it away? [Some people certainly think so](http://www.jon.gold/2015/07/functional-css/), and as much as I want to agree, I believe the sweet spot lies somewhere between Functional CSS (see also: Utility Classes) and [Presentational based CSS selectors](https://seesparkbox.com/foundry).

## Cascade: The Trouble Areas

### Tunnel vision

As projects grow larger in scope, it becomes difficult to keep the entire scope in mind. For example, an issue comes through to adjust the margin/padding on an element. Sure, you can go ahead and just change it but do you actually know every view where this change to the CSS will be inherited?

### Naming things is hard

Its no secret that naming things is one of the hardest problems to solve in programming, an often something that will break my flow when I can’t think of something right away. There have been quite a few attempts to solve this problem with standards like BEM, and they get you most of the way there, but they often work best in a scenario where a design is completely consistent and there aren’t a lot of edge cases to consider.

### Inconsistencies in design can be difficult to deal with

The cascade can be great for styling many different parts of a website or app very quickly, but what happens when you start running into all of those design edge cases or inconsistencies? Typically one’s response is to write more CSS via modifier classes or even duplicated selectors that have all but one or two more styles applied. When this starts to happen, the maintainability of your app starts to decline, and the quality of your work suffers. A better way to approach this problem would include some code refactoring as well as some communication with the designers to see if there’s any part of the UI that can be consolidated in the interest of consistency, but both of these options take more time in debugging and communication.

## Cascade: Some Helpful Habits

### Rules and standards

While conventions like BEMs and ITCSS aren’t perfect, they help us by removing some of the cognitive effort in building and styling components. Suddenly, instead of wondering how the DOM should be structured and how the CSS classes should apply, you’re in auto pilot mode following conventions and building your components.

### Your text editor

How many times have you made a change to a set of CSS selectors in a project, only to be notified by a client or co-worker that your most recent changes have affected another page elsewhere on the site? One easy way to combat this is to use the ‘Find in Project’ (or similarly named feature) in your text editor. If you’re modifying the styles of a selector, do a quick search in HTML and CSS files to see what directly will be impacted.

### Tooling

There are a [host of tools](https://www.sitepoint.com/improving-the-quality-of-your-css-with-postcss/) out there, like [immutable-css](https://github.com/johnotander/immutable-css), or linters like [Stylelint](https://css-tricks.com/stylelint/) or a [BEM linter for postcss](https://github.com/postcss/postcss-bem-linter) if that’s your thing. The bottom line is that there are tools out there that make our lives easier. Use them!

### Eliminate it

Now, I know this is a pretty controversial topic as of late, but I built a few sites and an app with Functional/Utility Class/Whatever based CSS and I enjoyed it a lot. A common argument against this approach is that duplication moves from the CSS to the HTML. In my book, that’s ok! HTML is much less difficult to reason about that layers of CSS inheritance, especially when your site is split up into small components (React, Vue, Twig, doesn’t matter). Another common argument is that the HTML becomes “bloated’ with CSS classes — what happens when you need to change every instance of x selector at once? Well, the answer is again to use your text editor! Every editor available (yes, including Vim) has this ability. Put it to good use!

If you’ve never head of Functional CSS before, I’d recommend checking out the following articles:

- [Expressive CSS](http://johnpolacek.github.io/expressive-css/)
- [About HTML semantics and front-end architecture — Nicolas Gallagher](http://nicolasgallagher.com/about-html-semantics-front-end-architecture)
- [Css and Scalability](http://mrmrs.io/writing/2016/03/24/scalable-css/)
- [CSS Purge](http://csspurge.com/)
