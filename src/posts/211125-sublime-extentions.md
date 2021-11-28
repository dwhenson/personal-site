---
 title: Making Sublime Text Nicer with Packages
 date: 2021-05-30
 tags:
   - "Sublime"
---

I like to keep my packages to a minimum. I have not experienced any of the packages I have installed in Sublime Text slowing down the editor but it’s worth keeping any eye on this as it is an issue with other editors. There are many articles out there on the ‘best’ or ‘essential’ packages you should install. Here’s my list and settings, which have served me well for basic frontend development in HTML, CSS (SCSS) and JavaScript.

## File Management

### File manager - https://packagecontrol.io/packages/FileManager

Makes creating, renaming, moving, duplicating and other things to do with files easier. You can do this through the quick panel or by right clicking on the file in the sidebar.

### Image preview - https://packagecontrol.io/packages/ImagePreview

Shows a preview and dimensions of the image when hovered over. I invoke it with a key binding as I like to avoid popups. Useful for adding image dimensions to the `<img>` tags in HTML.

## Consistency

### Doxygen - https://packagecontrol.io/packages/DoxyDoxygen

Enables docblocker style comments to be added based on a key stroke. I use this for adding comments to my JavaScript files and like that it enforces a common style.

### Editor Config - https://packagecontrol.io/packages/EditorConfig

This helps developers maintain consistent coding styles between different editors (https://editorconfig.org/). I just have this set up and then add it to all my projects.

### JS prettier - https://packagecontrol.io/packages/JsPrettier

Provides a plug-in for Prettier (https://prettier.io/), “the opinionated code formatter”. You’ll need to have Prettier installed. The only settings I have in Sublime are:

```
{
  "auto_format_on_save": true,
  "allow_inline_formatting": true,
}
```

No HTML formatting do this with LSP instead.

## Interface

### Bracket highlighter - https://packagecontrol.io/packages/BracketHighlighter

Highlights matching brackets and flags any brackets that aren’t paired properly. It also has a host of other key bindings you can use. I only use select within brackets or quotes.

### Highlight words - https://packagecontrol.io/packages/HighlightWords

Highlights specific words in your - I only use this in my comments to flag things (settings are below with the highlighted words in capitals). I use the same words in ToDoReview to double check things.

    "permanent_highlight_keyword_color_mappings": [
        {"keyword": "FIX:", "color": "source.css meta.selector.css entity.name.tag.html.css "},
        {"keyword": "TODO:", "color": "source.css meta.selector.css entity.other.attribute-name.class.css "},
        {"keyword": "CHECK:", "color": "source.css meta.property-list.css meta.block.css meta.property-value.css meta.function-call.arguments.css meta.group.css support.constant.property-value.css "},
        {"keyword": "HACK:", "color": "source.css meta.property-list.css meta.block.css meta.property-value.css meta.string.css string.quoted.double.css "},
        {"keyword": "NOTE:", "color": "source.css meta.at-rule.media.css meta.group.css meta.number.integer.decimal.css constant.numeric.value.css "},
      ]

### TodoReview - https://packagecontrol.io/packages/TodoReview

Finds and presents specific words in a new Sublime Tab. I use the same words as the Highlight Words package and to check for todos, issues or other things. My settings are below.

    "patterns": {
        "TODO": "TODO[\\s]*?:[\\s]*(?P<todo>.*)$",
        "NOTE": "NOTE[\\s]*?:[\\s]*(?P<note>.*)$",
        "FIX": "FIX[\\s]*?:[\\s]*(?P<fix>.*)$",
        "HACK": "HACK[\\s]*?:[\\s]*(?P<hack>.*)$",
        "CHECK": "CHECK[\\s]*?:[\\s]*(?P<check>.*)$"
    },
    "case_sensitive": true,
    "exclude_folders": [
      "*.git*",
      "*node_modules*",
      "User"
      ]
    }

## Extras

### ExpandRegion - https://packagecontrol.io/packages/ExpandRegion

Expands or contracts selection by a range of values (word, quotes, brackets, scope etc). Sublime does have this built in, and LSP as well, but I just find that this works better and more precisely.

### Plain tasks - https://packagecontrol.io/packages/PlainTasks

Creates a .todo file that you can use to take notes, todo lists, and a whole set of other things. I really just use it for writing psudeo code and taking notes. I fixed the colour scheme to match Monokai Pro.

### Quokka - https://packagecontrol.io/packages/Quokka

Runs JavaScript immediately as you type and displays various execution results in your code editor. I find it useful from time to time, but mostly when trying out small code snippets.

### Sync settings - https://packagecontrol.io/packages/Sync%20Settings

Synchronizes Sublime settings among multiple devices, and keeps them updated. A little fiddly to set up, but also provides a nice back up of all your settings.

### Terminal - https://packagecontrol.io/packages/Terminal

Opens a terminal at the current file, or the current root project folder. I don’t use this much but it’s a nice simple addition when combined with a key binding.

### Open URL - https://packagecontrol.io/packages/Open%20URL

Opens a local file or webpage from Sublime Text using a key binding or right click. Very handy and saves copying and pasting url strings into your browser.

### Colorpicker

Highlights CSS colors in all documents - not just SCSS/CSS files - so a bit more flexible than LSP, also some other nice functions XXX, turn off in LSP
