---
title: Build Steps and Task Managers
subtitle: No one told me about this!
lead: This stuff is hectic and messy, and frustrating, but you can actually start out fairly gently while getting your head around it.
date: 2021-09-11
tags:
  - "Learning"
---

I was quite unsure about the whole build step/tool thing for a while. It was out there lurking, but I’d really never encountered them or even had to. Then as I got into projects that were a little bit more complicated it was time to start dealing with this side of things. The good news is that there’s a few ways to approach this and you can start fairly easily.

## Why bother and when are they needed?

As I understand it, the main purpose of a build step is really two fold:

1. To bundle files together that might have been separated out to make the development experience easier (e.g. SCSS partials or JS modules).

1. To make files smaller to that they are easier for users to download. This can be <q>minifying</q> for code files, and <q>compressing</q> which is mainly for images.

Honestly, I wouldn’t worry about build tools and things unless you are either making actual websites that people will use (<q>production sites</q>), or are starting to work on challenges where using SCSS or JS modules makes sense. There’s a few approaches that you can use to include a build step in your process, here’s my take on them:

### CodeKit: Easiest

If you are just getting started and just want to focus on getting things built and not worry too much about the whole build step thing, my advice is just use [CodeKit](https://codekitapp.com/). It just works, has a nice friendly interface, and I suspect that there’s probably no need for anything else if you really look into exploring it’s full functionality. I only moved on from CodeKit when I started using Eleventy and things got a bit conflicted.

### Gulp: Next level up

If you are OK with JavaScript then you will find learning Gulp much easier. I think technically Gulp is a task runner rather than a build tool (that is you set up the build tasks in it and it then runs the different tasks for you - you can do this for any tasks that needn't be build related). The best description of what Gulp is I’ve come across is from Andy Bell:

> Gulp is like a factory owner. It determines which tasks need to be run, in what order, to produce a defined output... Gulp lets us create processes like this for whatever we want. It lets us modify code, images, audio and even videos.

It’s super powerful and very flexible, and allows you to do pretty much what you want if you have enough JS skills and do a little bit of learning. If you want to get an idea of what Gulp can do just have a look at the SASS section on Andy’s [Learn Eleventy from Scratch Course](https://learneleventyfromscratch.com/). He splits the CSS and inlines some and not not essential code - impressive stuff!

I was surprised that I couldn't find many resources out there to learn Gulp, I used Coder Coder’s course. It’s good but expensive and a little out of date to be honest _[EDIT: I see it's no longer available, which is a shame as if updated it would be perfect]_. Once you have the basics down I would recommend starting simply, perhaps just with CSS or JS and go from there.

I also get the impression that Gulp is a bit dated now (I may be wrong here and it seems that plenty of people still seem to use it). Gulp does however add **yet another thing** that can go wrong to the whole process as it seems to act as a kind of wrapper around the actual tasks that you want to carry out. I think this maybe what has led people to lean towards using NPM scripts?

### NPM scripts: Back to Basics

Gulp is another level of abstraction, so using it means you are dependent on people writing gulp specific packages for the tasks you want to run (as my needs are pretty simply I don’t think that will be a problem). But, it would be nice to just write the tasks straight into my JSON file and remove that level of complication (and version updating hectic-ness).

Running scripts directly from your project's JSON file seems the best way to go about this. [Chris Ferdinandi](https://gomakethings.com/) has a great write up on how he approaches this and a nice [boilerplate](https://github.com/cferdinandi/build-tool-boilerplate). I was lucky to have a good chat with him the other day about this can can’t wait to give it a go. In a project (I"m also keen to try out [Parcel](https://parceljs.org/) which I hear good things about).

I'll update this section when I've tried these approaches.
