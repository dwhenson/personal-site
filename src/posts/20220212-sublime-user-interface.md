---
title: Sublime Text - Making it look Beautiful
subtitle: I love a clean, minimal editor, that lets me focus on the code.
lead: You don't need to do any of the stuff below to get going with Sublime Text, but it's a great displacement activity.
date: 2022-02-12
tags:
  - Sublime
---

I’ve spent quite a bit of time setting up Sublime Text so that it matches my needs pretty much perfectly. While my set up won’t suit you 100% of the time, I hope that by writing a few articles about how and why I set up Sublime it might help others that would like to use it but have found customisation a bit intimidating.

Firstly, you don't have to do any of the stuff I write about in this post to get working with Sublime Text. Sublime has perfectly good settings straight out of the box, and [more intelligent people than me](https://gomakethings.com/my-sublime-text-setup-for-front-end-web-development/) don't bother with any of this and just get on with using it. But I like to try and make things look nice, and it's a great displacement activity.

## My Set Up

You can change pretty much whatever setting that you want on Sublime’s interface, but, frankly, it’s not easy. I like a clean, minimal, interface that feels open and spacious and enables me to easily find errors, scan code and generally makes me feel comfortable looking at my screen for a long time. Here’s how Sublime looks on my machine:

<img src="https://ik.imagekit.io/dwhenson/personal-site/posts/sublime-screenshot_mZP6U4JGsAR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1644655110079" alt="A screenshot of my Sublime Text editor">

The following paragraphs provide some details on how I got to make things look like this.

## Typefaces: Monospaced and Interface

I am using [MonoLisa](https://www.monolisa.dev/) as my monospace typeface combined with [Substance](https://www.facetype.org/?font=substance) for Sublime's UI. Both typefaces are designed by Marcus Sterz from the [FaceType Foundry](https://www.facetype.org/). I think MonoLisa is wonderful. A very decent, and free, alternative is [JetBrains Mono](https://www.jetbrains.com/lp/mono/).

I like the very well respected, and widely used, [Operator and Operator Mono](https://www.typography.com/blog/introducing-operator) font pairing, but, after spending time with MonoLisa, I find both these a little to quirky for my taste and I can't go back. This is [a great page for playing around with fonts](https://coding-fonts.css-tricks.com/) and finding one you like. I use the following settings for my fonts to give things a bit more space (the UI font is set through my theme, see below):

```
"caret_extra_top": 2,
"caret_extra_bottom": 2,
"caret_extra_width": 3,
"font_face": "MonoLisa",
"font_size": 16,
```

## Theme and Colour Scheme

I use the [Monokai Pro theme](https://monokai.pro/). The great thing about this theme is that aside from having a very nice colour scheme there are also a number of settings that come along with it that allow you to easily change Sublime's UI typeface and size, the size of scrollbars, sidebar fonts and spacing and a host of other things.

You can edit all these settings in the theme's CSS file but it is tricky. I add the following in my main Sublime settings file to achieve the minimalist look I want. There's a description of all the settings available on the Monokai Pro Sublime page (click on the drop down arrow about halfway down the page).

```
"theme": "Monokai Pro (Filter Machine).sublime-theme",
"color_scheme": "Monokai Pro (Filter Machine).sublime-color-scheme",
"monokai_pro_minimal": true,
"monokai_pro_file_icons": true,
"monokai_pro_file_icons_monochrome": false,
"monokai_pro_sidebar_font_size": 19,
"monokai_pro_label_font_size": 19,
"monokai_pro_sidebar_lighter": false,
"monokai_pro_small_scrollbar": true,
"monokai_pro_ui_font_face": "Substance",
"monokai_pro_style_title_bar": true,
"monokai_pro_panel_font_size": 19,
"monokai_pro_sidebar_row_padding": 4,
```

## User Interface

I have a range of other settings that strip out other features from Sublime's interface to leave things clear, clean and simple. The settings I use are below, and if you apply them you will see that you aren’t left with much clutter on the screen. You of course may like to leave in a bit more than me.

```
"highlight_line": false,
"highlight_gutter": false,
"highlight_line_number": false,
"line_numbers": false,
"show_definitions": false,
"preview_on_click": false,
"show_sidebar_button": false,
"inactive_sheet_dimming": false,
"show_tab_close_buttons": false,
"hide_tab_scrolling_buttons": true,
"draw_indent_guides": false,
"line_padding_top": 3,
"line_padding_bottom": 3,
"close_windows_when_empty": true,
"margin": 0,
```

I have also added key bindings to allow me to toggle tabs, the sidebar, and status bar. I also hide the line numbers (again toggle-able with a key binding), and line and gutter highlighting, and things like new tab buttons and close tab buttons (both can easily be done with key bindings).

Lastly, I turn off "show_definitions" as I don’t want popups appearing unless I ask them to. The only other general settings I use are below, This hides files for folders I don’t want to see in the sidebar.

```
"folder_exclude_patterns": [
    "node_modules",
    ".git",
  ],

  "file_exclude_patterns": [
    "package-lock.json",
    ".gitignore",
    "*.sublime-workspace",
    "*.sublime-project",
  ]
```

I also add a bit of custom CSS to the theme to hide a few other small UI features I don't need to see. This can be done by accessing the "UI:Customisze Theme" setting through the command panel, and adding the code below to the file that opens (the colours are set for the Molokai Pro, Filter Machine theme).

```
  "rules": [
    // Hide tab change buttons
    {
      "class": "show_tabs_dropdown_button",
      "content_margin": [ 8, 8 ],
    },
    // Hide text in title bar
    {
      "settings": [
        "monokai_pro_minimal"
      ],
      "class": "title_bar",
      "fg": [ 39, 49, 54 ]
    },
  ]
```

As I said, all of this is optional and totally unnecessary to start using Sublime and getting busy writing code, and many people don't bother. But personally I like to keep what I'm spending hours looking at simple, clean, and as easy as possible to understand. Hopefully, using the above guide as basis you can get Sublime looking in a way that suits you.
