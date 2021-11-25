---
 title: Making Sublime like an IDE - but the Good Parts
 date: 2021-05-25
 tags: ["Sublime"]
---

Autocomplete is essential for me. What I don’t want though is a long garbled mess of suggestions, snippets and file names anytime I type something. The settings below achieve this. I hear that autocomplete has been really improved in Sublime Text 4, but from my little trial I still find it a bit much and I like the more focused results from Language Server Protocol(link)

## Language Server Protocol (LSP) - https://packagecontrol.io/packages/LSP

It’s “Like an IDE, except it’s the good parts”. You can basically have the nice features like auto complete, go to definition, or documentation on hover, of VS Code, with the speed and simplicity of Sublime Text. I only really use it for two main things: autocomplete and linting. Both of these features work really nicely, and with a few setting tweaks the addition of this package won’t add clutter to your UI.

### Installation

To get going, install LSP from package manager, and then adding the servers you want I use the following: HTML, CSS, Typescript (I don’t write in TypeScript but there’s no dedicated JavaScript server), and for listing eslint and stylelint (you’ll need to have both these installed and et up for these last two to work).

### Settings

I found that the default LSP settings caused a lot of noise and added in features that I don’t really need. I settled on the following settings that work for me:

    "show_view_status": false,
    "show_diagnostics_panel_on_save": 0,
    "show_diagnostics_count_in_view_status": true,
    "diagnostics_delay_ms": 2500,
    "diagnostics_additional_delay_auto_complete_ms": 1500,
    "show_diagnostics_in_view_status": false,
    "lsp_code_actions_on_save": {
      "source.fixAll": true,
      "source.organizeImports": true,
    },
    "show_symbol_action_links": false,
    "inhibit_word_completions": true,
    "inhibit_snippet_completions": false,
    "diagnostics_highlight_style": "",
    "diagnostics_gutter_marker": "",
    "document_highlight_style": "",

To keep things simple I add the following settings in the TypeScript and eslint servers:

    "disabled_capabilities": {
        "signatureHelpProvider": true,
        "codeLensProvider": true,
        "codeActionProvider": true
      }

### Final improvements

In HTML and CSS servers, I added: `"priority_selector": "source.css”` or ‘source.basic.html’ to prevent duplicate suggestions. One bug I encountered is when working with SCSS I was still getting duplicate suggestions. To fix this create a new folder called SASS inside your packages folder, then add an empty file called `sass_completions.py`, and that should fix it. This page explains why this works. https://docs.sublimetext.io/guide/extensibility/packages.html#customizing-or-overriding-packages

Finally, I added some keyboard shortcuts to a couple additional functions which I use these are:

- LSP Hover - This means I can invoke the (limited) additional information I want on limiter errors, CSS specificity, and documentation with a key binding rather than using my mouse (XXX now disabled ??? And done through linter)
- LSP Show diagnostics panel - This opens a panel listing all the linting errors in all open documents. Clicking on each error links you to its location. I’d like to do this with a key binding, but haven’t found a way.
