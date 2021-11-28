---
 title: Making Sublime Text more lovely
 date: 2021-05-17
 tags:
   - "Sublime"
---

I really like Sublime Text [link]. It’s fast, functional and looks pretty good straight out of the box. With some adjustments it can look amazing, and fit in around any workflow you have. To start with though it can be a bit tricky to get used to adjusting settings and getting comfortable with how to customise things.

I’ve spent quite a bit of time setting up Sublime Text so that it matches my needs pretty much perfectly. While my set up probably won’t 100% suit you , I hope that by writing a few articles about how and why I set up Sublime it might help others like me that would like to use it but have found customisation a bit intimidating.

You can change pretty much whatever setting that you want on Sublime’s interface, but, frankly, it’s not easy. I like a clean, minimal, interface that feels open and spacious and enables me to easily find errors, scan code and generally makes me feel comfortable looking at it for a long time. Here’s how Sublime looks on my machine:

_Screenshot_

## Typefaces: Monospaced and Interface

I am using MonoLisa[link] as my monospace typeface combined with Substance[link] for my UI. Both typefaces are designed by XXX from the XXX Foundry. I think MonoLisa is wonderful. A decent, free alternative is JetBrains Mono[link].

I like the Operator and Operator Mono pairing, but, after spending time with MonoLisa, I find both these a little to quirky for my taste. I use the following settings for my fonts in Sublime (the UI font is set through my theme, see below):

"font_face": "Monolisa",
"font_size": 17,
"line_padding_top": 3,
"line_padding_bottom": 3,

## Theme and Color Scheme

I use the Monokai Pro theme [link]. The great thing about this theme is that aside from having a very nice colour scheme there are also a number of settings that come along with the theme that allow you to easily change the interface typeface and size, size of scrollbars, sidebar fonts and spacing and a host of other things.

You can edit all these settings in the theme CSS file but it is time consuming and tricky. Here are my Molokai Pro settings.

"theme": "Monokai Pro (Filter Machine).sublime-theme",
"monokai_pro_minimal": true,
"monokai_pro_file_icons": true,
"monokai_pro_file_icons_monochrome": false,
"monokai_pro_sidebar_font_size": 18,
"monokai_pro_label_font_size": 18,
"monokai_pro_sidebar_lighter": false,
"monokai_pro_small_scrollbar": true,
"monokai_pro_ui_font_face": "Substance Medium",
"monokai_pro_style_title_bar": true,
"monokai_pro_panel_font_size": 18,
"monokai_pro_sidebar_row_padding": 6,

## User Interface

I have a range of other settings that strip out extra features from the interface to leave things clear, clean and simple. The settings I use are below, and if you apply them you will see that you aren’t left with much.

I have also added key bindings to allow me to toggle tabs, the sidebar, and status bar. The "reveal_tabs_with_timeout" setting means that whenever I touch my mouse or navigate between files all these features temporarily reappear.

"preview_on_click": false,
"trim_trailing_white_space_on_save": "all",
"scroll_past_end": 0.6,
"show_definitions": false,
"mini_diff": "auto",
"line_numbers": false,
"margin": 0,
"highlight_line": false,
"highlight_gutter": false,
"highlight_line_number": false,
"show_sidebar_button": false,
"show_tab_close_buttons": false,
"caret_extra_top": 2,
"caret_extra_bottom": 2,
"caret_extra_width": 3,
"draw_indent_guides": false,

I also hide the line numbers (again toggle-able with a key binding), and all line and gutter highlighting, and things like new tab buttons and close tab buttons (both can easily be done with key bindings). I add a bit of extra width and height to the caret which makes it easier to find and compensates a little for the hidden highlighting of the line, gutter and line number.

Lastly, I turn off "show_definitions" as I don’t want popups appearing unless I ask them to. The only other general settings I use are:

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

This hides files for folders I don’t want to see in the sidebar. I also include all my linter and config files in this list too as, personally, I don’t want to see them here and I can edit them through the finder if I need to.
