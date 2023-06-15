---
title: Design to Pixel Pretty Close — Part 2
sub-title: My approach for laying out and styling a page
lead: Adding CSS. OK now the fun really starts. We can to make things look and feel good (well better at least!).
date: 2022-05-02
tags:
  - "Making"
  - "Learning"
---

I've been carrying around a few bits of paper that I refer to when translating a design to code. These are now falling to bits so I thought I better document my process here for my own benefit, and in the hope that others might find it useful too.

## Sit Back, Relax and Take a Good Look (again!)

Well, you've just done all that [marking up the document in HTML](https://dwhenson.com/posts/design-to-pixel-pretty-close-part-1/) so you deserve a little rest. What I tend to focus on here is how the layout changes between screen sizes, any elements that appear out of flow (e.g. sticky footers, floating buttons etc). I also try to see if I can see any common, repeated patterns that might be candidates for a utility class.

One thing to clarify at the outset is that I aim for [Pixel Pretty Close](https://www.joshwcomeau.com/css/pixel-perfection/) not pixel perfect when working on a page. I want to [be the browser's mentor, not its manager](https://buildexcellentwebsit.es/) and would take a fluid, intrinsically designed site of a ridge 'pixel perfect' creation any day. Of course, your opinion (or that of the designer you are working with) may differ.

## Let's Add some CSS!

When adding CSS to a design I typically start with the mobile version of the designs, as these are normally the simplest. As a result, if people access the site on older browsers they should be able to use the site (I do the opposite with HTML)[https://dwhenson.com/posts/design-to-pixel-pretty-close-part-1/].

CSS starts off easy but does get tricky pretty quickly. As with HTML, it's really worth spending some time learning how to use some of its slightly more advanced features (and once sites get a bit more complex, SCSS too). So assuming you've done that, I'd suggest doing something like the following:

### Add a CSS Reset

<figure class="quote">
  <blockquote>
    The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on.
  </blockquote>
  <figcaption>
    &mdash; Eric Mayers
  </figcaption>
</figure>

Honestly, adding one at the start of your project just makes things so much easier and saves a lot of pain. Browser consistency isn't as bad as it once was, so I like to do the minimum necessary. I use [Andy Bell's Modern CSS Reset](https://piccalil.li/blog/a-modern-css-reset/).

### Include Some Design Tokens

CSS custom properties are like a superpower when writing CSS. I won't go on about all the uses here, as we are just at the start of setting things up, but it's essential that all the colours provided in your design should be set as custom properties and available throughout your project.

I also like to add custom properties for font sizes and spacing. [Utopia](https://utopia.fyi/) is the place to go for generating fluid, responsive tokens that you can add to a set of custom properties that will provide consistency throughout the site and reduce (or remove) the need for breakpoints.

### Define Your Global Styles

With that in place, we can now turn to adding some styles that will provide the base for everything to come. I typically add these directly on the element selector (e.g. `h1`) so that the specificity is low and they can be easily overridden.

I don't do that much here, and mainly focus on adding some basic styles to the body that are inherited throughout the site (often things like font-family, text alignment, line height etc), and styling the typography of heading elements.

### Add the Utility Classes

I was a bit intimidated by the name utility classes for a while, but they are actually very simple. Basically, each class is designed just to do one thing and do that thing well. Here are a whole load of great [example utility classes](https://smolcss.dev/) by [Stephanie Eckles](https://moderncss.dev/). To make use of them, you just add them to an element in your HTML and they do what they are designed to do.

I have a bunch of these classes that I move from project to project. Common ones that I make use of are utility classes to hide content accessibly, add margin to elements, add outline focus styles, and for things like intrinsic containers and padding. If you have a look at any one of my recent projects on [GitHub](https://github.com/dwhenson) you'll see these.

### Sort Your Layout

By now if you've done your reset, added global styles and included some utility classes things should be looking not too bad on your site by now. The next thing we need to start thinking about again is one of the more complicated sides of CSS, adding a responsive, intrinsic layout for each page.

I don't focus on styles here, such as colour or font style (which should have been done under global styles), just how things are placed and move about on a page. The absolute best resource that I can point you to for this is [Every Layout](https://every-layout.dev/). [CUBE CSS more on that later](https://cube.fyi/) is also a really useful complement to Every Layout.

To do layout well and make the most of these resources (which can be a bit complicated at first glance) you are going to need a good understanding of `flexbox` and, to a lesser degree, but still very useful `grid`. The first time I went through Every Layout I thought the title was a bit of a claim, but I recently went through it again, and I have to say I think it's pretty close!

### Deal With Each Block

I typically now begin, for the first time, to start working through the page block (or component) by block (or component). A block would, to me, be something like a navigation element, a footer, a section or a header. Because of all the work you've already done (reset, global styles, utility classes and composition styles), there should not be too much to do here.

I tend to "scope" each block with a class name (e.g. `.footer`) and then select elements or classes inside this scope (using nesting if using SCSS). This adds a little bit of extra specificity that can help override rules from global styles or utility classes within the block. This means you can be free to style away without rules "leaking" out and impacting other parts of the page.

Some blocks (like a `nav`) might need quite a bit of code, but I find that most standard sections don't need too much code – especially if you've used custom properties with a fallback pattern (one of my all-time favourite CSS things) and have made good use of your utility classes. With that and a final review, your page should be looking pretty close by now.

### Keep Organised!

This is quite a lot, and you will need a system to keep your CSS organised. If you can use SCSS that will help on more complicated pages as you can split things up into smaller files, otherwise the CSS file can get very, very long. But honestly, you will need a system.

There're many systems out there, but the one that works best for me is [CUBE CSS](https://cube.fyi/) created by Andy Bell. I love it as rather than trying to obliterate some of the best features of CSS (i.e. the cascade) it works with the language and leverages its features wonderfully.

### Things We've not Covered

Again This assumes a pretty simple page, with pretty simple interactions required. There's a lot more to consider once you get on to marking up more complicated pages. Other things to keep in mind with your CSS are:

- Hiding/showing elements: be very careful here as this can have a big impact on the accessibility of your site. If you are hiding/showing elements that require JavaScript to work you might want to consider a [progressively enhanced](https://www.gov.uk/service-manual/technology/using-progressive-enhancement) approach.
- Animating/changing things: these can add a lovely user experience and are one of my favourite things to do with CSS, but, again, care is needed to ensure that people can turn them off if they want to. There are media features that enable you to easily do this.

With that you should be ready to do an accessibility and performance review (note to self to write these posts!) and then add some JavaScript (if needed)!
