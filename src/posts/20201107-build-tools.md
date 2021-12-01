---
title: Build Steps and Task Managers 
sub-title: No one really told me about this either!
lead: The good news is that there’s a few ways to approach this and you can start fairly easily.
date: 2020-09-11
tags:
  - "Learning"
---

I was quite unsure about the whole build step/tool thing for a while. It was out there lurking, but I’d never encountered them or even had to. Then as I got into projects that were a little bit more complicated it was time to start dealing with them. And the good news is that there’s a few ways to approach this and you can start fairly easily. 

## Why bother and when are they needed?

As I understand it, the main purpose of a build step is really two fold:

1. To bundle files together that might have been separated out to make the development experience easier (e.g. SCSS partials —which also gets converted into plain CSS or JS modules).

1. To make files smaller to that they are easier for users to download. This can be ‘minifying’ for code files, and ‘compressing’ which is mainly for images. 

Honestly, I wouldn’t worry about build tools and things unless you are either making actual websites that people will use (“production”), or are starting to work on challenges where using SCSS or ES Modules makes sense.There’s a few approaches that you can use to include a build step in your process, here’s my take on them:

### CodeKit: Easiest but least flexible

If you are just getting started and just want to focus on getting things built and not worry too much about the whole build step thing, my advice is just use CodeKit. It just works, has a nice friendly interface, and I suspect that there’s probably no need for anything else if you really look into exploring it’s full functionality. I only moved on from CodeKit when I started using eleventy and the things got a bit conflicted. 

### Gulp: Next level up, very flexible but a little bit hectic

If you are OK with JavaScript then you will find learning Gulp much easier. I think technically Gulp is a task runner rather than a build tool. The best description of what Gulp is I’ve come across is from Andy Bell’s LEFS course:

>Gulp is like a factory owner. It determines which tasks need to be run, in what order, to produce a defined output. Imagine the defined output is a cake… Gulp lets us create processes like this for whatever we want. It lets us modify code, images, audio and even videos.”

It’s super powerful and very flexible, and allows you to do pretty much what you want if you have enough JS skills and do a little bit of learning. If you want to get an idea of what Gulp can do just have a look at the SASS section on Andy’s course. He splits the CSS and inlines some and not not essential code - impressive stuff!

I was surprised that there’s not too many great courses out there to learn Gulp, I used Coder Coder’s course. It’s good but expensive and a little out of date to be honest, so this Udemy course might be better. Then I would recommend starting simply, perhaps just with CSS or JS and go from there. 

I get the impression that Gulp is a bit dated now (I may be wrong here and plenty of people still seem to use it) but does however add **yet another thing** that can go wrong to the whole process as Gulp seems to act as a kind of wrapper around the actual tasks that you want to carry out themselves. 

### NPM scripts: Back to Basics

Gulp is another level of abstraction, so you are dependent on people writing gulp specific packages for things, but as my needs are pretty simply I don’t think that will be a problem. Still it would be nice to just write this stuff straight into my JSON file and remove that level of complication. 

Running scripts directly from your projects JSON file (what’s a JSON file?) is the best way to go about this. Chris Ferdinandi has a great write up on how he approaches this and a nice boilerplate. I was lucky to have a good chat with him the other day about this can can’t wait to give it a go. 

I might update this section if I ever get this far…