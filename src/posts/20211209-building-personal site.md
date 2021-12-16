---
title: Lessons Learnt Making my First Proper Website
subtitle: It’s a big job —even with a relatively simple site.
lead: The list of little jobs, tweaks and enhancements seems to go on forever. All I can suggest is make a list and take them on one at a time.
date: 2021-12-08
tags:
  - Learning
  - Making
---

It’s not finished by a long way, but the site you are reading this on is my first attempt at building something from scratch with no design brief or guidance to follow. A total “blank canvas”; pretty intimidating stuff! Once I got started and into the technical stuff I really enjoyed it; the main issue now is that I think I could go on tweaking things forever…

Here’s my take-aways if you are thinking of building your own site for the first time:

## Just start

Honestly just start. I know everyone says this, but really, just start. I was waiting until I had a good number of decent projects that I was happy with to showcase (still not the case), and was thinking about how I could "wow" people so much they’d instantly want me to join their team. Then I asked around about the best approach and the overwhelming consensus (from like everyone) was to just get on build something, get it out there and improve later. Looking back now this was very good advice.

## Design is Hard

I’ve never really designed anything before, beyond a PowerPoint slide, so I wasn’t really sure how to go about this. I knew that I wanted my site to feel friendly, welcoming and not to take itself too seriously. The two things I knew would help with this were the colours I chose and the fonts.

I chose colours first and just went for bold primary colours because, well, it seemed easy and obvious (and it reminded me of Lego). For fonts I knew I just wanted something clean and simple for the body, and something quirky, but readable, for the headings, so I just went to Google Fonts and chose something. I didn’t look elsewhere.

Regarding page layout and other design features I did or didn’t add, my overall approach reminds me of how I wrote CSS when I was rubbish at it: basically try something and if it doesn’t work, try another thing until I can just about live with the result, even if I’m not 100% sure why the change made things better.

I knew I just wanted a very simple structure, focused on showing my work and writing, and how to get in touch, so the architecture of the site was quite simple. Generally with the design side of things once things were “OK” I just went with it rather than loose momentum and get lost down endless rabbit holes of details.

## Have Some Content Ready

I kinda knew this day would come so I’d actually been recording some of my experiences learning to code since I started way back in 2018. I don’t think the articles will win any prizes, but at least it gave me some content to work with. I also have a stack of articles on things I’ve made that I should incorporate (another one for the todo list…).

I should also say that writing **good** content is hard. It still feels strange to be sat here writing things that I feel are kind of obvious now. But again, just like the site design, I just have to start. I think that now that I actually have somewhere to put out what I have written it will make all this seem more real, and force me to up my game.

## Don’t Stress About the Stack

I feel a bit pretentious even writing about a “stack” but there we have it. For me this was pretty simple. I wanted the site to be fast, secure, and easy to update. I only know one static site generator (eleventy) so I went with that. So far this choice has proven to be pretty good and I’m happy with it.

I’d not tried [Netlify](https://www.netlify.com/) before, but wanted to as I’d heard a lot of good things about them. I have to say, aside from the hype, my experience with them has been excellent. I am using their forms feature on the contact page and it was really simple to set up. I also set up things so that the font files are cached, which again they made super easy.

## Build the Thing

Finally, we get to talk about actually building the site. I’d done other sites approaching a similar size and complexity before, but not quite at this level. That said, although it took a while, scaffolding out the site was actually OK as I was only focused on that side of things and as I’d already dealt with the design and other details.

What actually got to me, and still needs sorting, is the long-tail of things that need to be sorted in order for a site to be considered close to completion, and have, what I hope would be, a polished feel to it. I still have a long todo list of things that I’d like to address on the repos’s readme and I am sure I am missing many more.

On the design side of things, this included addressing hover, active, selected states, transitions on buttons and other elements, styles that I missed when setting up the CSS for links, quotes, blockquotes. On the development side, testing in browsers and screen readers, sorting font loading (still not happy), optimising images, and performance.

That’s just stuff I’ve done. The todo list goes on…

## Track Your Time (I like to anyway)

Overall I spent a totally of around 38 hours building the site. This includes everything from npm install to the moment I’m writing this. I think the bulk of the site was complete in about 30 hours. Since then I’ve been fiddling around down in the details. Most of this has probably been trying to fix the FOUT that I’m still not happy with!

Overall I’ve already learnt a lot making this site, and now I have something to work with I’m super excited about trying to take things further and improve both its design and performance. I want to try a CDN for images, service workers for fonts, and add in some fun animations.I guess a personal site is never really finished? And that’s just fine with me.
