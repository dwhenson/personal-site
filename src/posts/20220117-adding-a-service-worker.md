---
title: How I added a service worker to my website
subtitle: It’s not as mysterious as it sounds.
lead: You just write some JavaScript and put it at the top level of your site's folder structure and let it work it's magic..
date: 2022-01-17
tags:
  - Learning
  - Making
---

I'd been hearing about service workers for a while, and was keen to try and add one to my site. Also I was really struggling with some FOUT issues on this site, and service workers were part of one recommended solution. I think I've got things working OK, but no doubt there's still room for improvement.

## Why Would You Want to Use a Service Worker?

There are two main benefits of using a service worker on your website. Firstly, it allows you to improve your visitors' offline experience (by allowing access to content that has been downloaded or a specific page only shown when a user is offline). Secondly, it can enhance a user's online experience by allowing content to load faster (by serving files from a local cache rather than the network).

## So What is a Service Worker?

A service worker is just a JavaScript file that you add to your website. It runs separately from the main browser thread (i.e. it does its stuff "asynchronously", which means it won't block code on your webpages from doing what it needs to do). A service worker intercepts network requests from your site and then either caches files, images and other resources as a user browsers your site, or retrieves these files from the cache when they are needed on a page (avoiding a network request).

Most importantly, it can still do this even when a user is offline.

## How Does it Do What it Does?

To work its magic, a service worker intercepts all the network requests from your site. Through the JavaScript you wrote in the service worker file you can then dictate how each intercepted request should be handled. This mainly comes down to two options: the service worker returns files or resources from the browser cache whenever possible; or, the service worker returns files from the network whenever possible.

In practice, at least on my site, this means that resources that don't change very often (e.g. fonts, images and CSS and JavaScript files) should be served from the browser cache when they can. They are most likely unchanged from any previous visits and this reduces network requests and improves performance. You can always "reset" a service worker and force the browser to re-download everything if you change these files.

For other file types, which in my case means HTML files, I prefer the browser to fetch them from the network (just as if there wasn't a service worker in place). Unless, and here's the good part, the user is offline. If that's the case I would like the files served from the cache. This allows a visitor to access content while they are offline. You can also show an "offline page" to visitors if they request a page that isn't cached.

If you scan through the sentences above, you can probably start to see some of the kind of flow-control you would put in the JavaScript in your service worker. E.g. If a user is online, the file requested is of a certain type, and the file is in the cache, return it from the cache; alternatively, if a user is offline and the file is in the cache, return the file from the cache, but if it's not in the cache, return the offline page.

## OK, I'm keen, how do I add one?

There are a few steps in getting a service worker up and running on your site, but with a good guide this should be no problem. There's some really good guides out there already, so rather than trying to do a better job than them, I'll point you to some resources I found really useful in going from knowing nothing about service workers to getting one up and running and doing its stuff on my personal site.

I hate this part of these kind of posts when someone points me to a 50 minute long YouTube video explaining all kinds of vaguely relevant things I don't have time for. ("I just want to know what I came here to find out, I don't have time for this I hear you shout!") But, that's what I'm going to do now because [this talk](https://www.youtube.com/watch?v=RVdW-P_oAJ0) by [Jeremy Keith](https://adactio.com/) is really, really good. It's clear, concise and explains the logic of the process wonderfully, and then the code too.

<figure class="quote">
  <blockquote>
    The logic is more important than the code.
  </blockquote>
  <figcaption>
    &mdash; Jeremy Keith, <cite>Going Offline</cite>
  </figcaption>
</figure>

For a really nice walk through of the process, some very handy code snippets, and a nice boiler plate to get you started at the end, [this CSS Tricks article](https://css-tricks.com/add-a-service-worker-to-your-site/) by [Chris Ferdinandi](https://gomakethings.com/) is an excellent place to continue on to. If you like his approach, I can also highly recommend his [Service Worker Pocket Guide](https://vanillajsguides.com/service-workers/). This guide provides a more detailed explanation of the steps involved, with short instructional videos, starter code for each stage, and a boilerplate to get you started at the end.

## Tips and Gotchas

Both Chrome based browsers and Firefox have a great section for dealing with service workers in their dev tools under the application tab. This allows you to test the offline experience, refresh the service worker, and totally unregister it to start over as if visiting the site for the first time. You can also view and delete files from the caches you are using under the same tab. I spent quite a bit of time here.

Lastly, don't forget to go revert the offline setting in your dev tools when you are done testing. This sounds daft, but more than once, I forgot that I was offline when I was testing my site. This caused git errors (the horror!), and all kinds of confusion. I'm just not used to testing offline, so making sure that I'm online wasn't part of my mental model for working in the browser. If you get a strange error check this first!

To make things "worse" (better?), having a service worker returning webpages that work offline made it less immediately obvious that I was offline (normally I'd notice pretty quickly when checking my work!). Once the service worker was installed I could go on reviewing pages on my site for quite a while before I realized that I was still offline. Which is kind of the point I guess!
