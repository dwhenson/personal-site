---
title: Learning SCSS - What another thing to learn?
subtitle: My first steps with it and is it really worth the bother?
lead: Learn it when you have a problem it will solve. If you know CSS pretty well, don’t worry, you’ll pick up the basics soon enough.
date: 2021-07-11
tags:
  - "Learning"
---

I was always a but mystified by SASS/SCSS and wondered if it was really needed. The great thing about using [Frontend Mentor](https://www.frontendmentor.io) as the main basis for learning this stuff is that I only really have to learn things when the need arises — just in time rather than just in case. This is great as it means I get to learn a thing and then apply it straight away.

Once my CSS file got up to around 1000 lines long, and my arm started aching from scrolling around. I kinda had the feeling it was time to learn SASS/SCSS (took me a while to understand the difference), and someone suggested in the feedback on one of my challenges that it would be a helpful thing to make use of.

I found it hard to find a good learning resource for SCSS (which is what I wanted to learn, and you probably do to). I have been waiting for [Kevin Powell](https://www.kevinpowell.co/courses/) to launch his SASS course, and am still waiting…. Usually when I learn something I like to go quite in depth, understand the theory and then try applying little bits of a comprehensive global mental map as I go along.

## An Alternative Learning Approach

Because I’ve not yet managed to find a SCSS learning resource that really suited me, I’ve fallen into a different approach in this case: learn just the little bit I need and then get on with using it and and building stuff. This is fine, and I think it will put me in a good place for doing Kevin’s course when it finally comes out.

What this means in practice is splitting up my code into partials, based on Andy Bell’s CUBE CSS, using one `includes` for my media queries and a little bit of selector nesting. This solves my problem of having very long stylesheets, makes it easier to adjust media queries using variables, and makes it easy to <q>scope</q> my CSS.

SCSS is undoutbly useful (even when just scratching the surface as I am) but on the down side it is another thing that can go wrong, and another place to look for errors. I have to make sure I include my partial files in the mama SCSS file, I have to make sure my build step is working (just use [CodeKit](https://codekitapp.com/) if you are just getting started with this, otherwise you can get lost in build steps).

As ever, I rely on linters to help me out with catching some of these errors. I find [stylelint](https://stylelint.io/) very useful (I have set all the notification at the warning level rather than error so its a bit more gentle). And, if you get that far, I’ve set up Gulp notifications to let me know if my SCSS compilation to CSS fails using Gulp Notifier.

## When to Start Learning It

My takeaway is use SCSS when you need to but don’t worry about learning it until you have a problem. When you find you file getting so long that it’s hard to navigate it’s probably a good time to learn. Once you’ve done a couple of projects you’ll understand the basics. If you have a solid understanding of regular CSS, it's so similar that you’ll pick it up easy enough.
