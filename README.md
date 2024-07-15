# Unofficial Script Tool for Blood on the Clocktower

Try it out [here](https://creynolds.ie/botc-script-tool).

This is an unofficial script tool for
[Blood on the Clocktower](https://bloodontheclocktower.com/) emphasising editing
speed and producing reasonably high quality printed scripts. It currently works
well on desktop and decent on mobile.

(This is very much a work in progress.)

## Why another script tool?

I wanted a script tool that is completely self-contained, usable on any device,
supports custom characters, and produces high-quality PDFs – such a thing may
already exist, but I couldn’t find it.

The [official script editor](https://script.bloodontheclocktower.com/) is great,
but:

- I’m not a huge fan of the output. The single-column layout is hard to read. I
  would much prefer a two-column layout, similar to the one used by the official
  printed scripts in the retail copy of the game.
- Creating scripts is a little slower than I’d like. The ability to search
  characters by name is great, but the top listed character is not added to the
  script when the enter key is pressed. A small thing, but it’s really annoying.
- It doesn’t work on mobile.

I also didn’t want to use the official editor to generate the JSON and then feed
that to an external tool to create the PDF because, well, it’s a pain. There’s
no reason why this shouldn’t be self-contained.

## Examples

Here’s some script PDFs I generated with this tool.

- [Sects and Violets](https://drive.google.com/uc?export=download&id=17iYBXGlN3pION7jXl1b79aCKt7Z9bQJQ)<br/>
  ([compact night sheet version](https://drive.google.com/uc?export=download&id=1Cabp0K8AVOFqFlCO5Z9qZ_uxuyx8qySQ))
- [No Roles Barred](https://drive.google.com/uc?export=download&id=16wBqcn7G5cwZTGrT9dVp8FhECCQF6xff) by Andrew Pichot<br/>
([compact night sheet version](https://drive.google.com/uc?export=download&id=19wnYRgeQ2k5pZDcqowYrKCGo9xqIETkz)) ([JSON](https://botc-scripts.azurewebsites.net/script/258/1.0.1))
- [Boozling! v7](https://drive.google.com/uc?export=download&id=1EUW_h3nx4NKRl9BpUtUX0CM_8jnv2lHQ) by Lau<br/>
  ([compact night sheet version](https://drive.google.com/uc?export=download&id=1iZfDeaWGnkHqlpGdnjSmJbKKvrHeZMj3)) ([JSON](https://botc-scripts.azurewebsites.net/script/173/8.0.0))

## Basic Usage

The UI is largely self-explanatory. The buttons on the top right allow you to
(in order):

- import/upload script JSONs
- export/download the current script JSON
- clear the script
- print the script (Ctrl+P or Cmd+P works also)

The checkbox toggles the compact night sheet – you can see the difference in
the examples above.

You can change the name and author of the script on the top left.

### Adding Characters

Either import the script using the import JSON button on the top right, or start
typing characters into the text box. Pressing Enter will immediately add the
currently underlined character. Alternatively you can click any entry listed.

### Removing Characters

Just click the character’s icon on the script – same as in the official tool.

### Exporting the Script

You can download the script JSON using the button on the top right.

Exporting PDFs is designed to be done using the built-in print dialog’s ‘Print
to PDF’ functionality. This currently works well on Chrome and Firefox – my
settings are usually A4, 105% ish scaling, remove headers, footers, and
backgrounds. Play around with whatever looks best to you, but the defaults
should be OK. Android mobile output is generally acceptable once the output is
correctly scaled. Safari and browsers on iOS are currently not great but support
will probably improve soon.

If you print with the full night sheet, you’ll get four (PDF) pages (two
double-sided printed pages). The first two are the character sheet and the
jinxes (if any). The second two are the first night and other night
order/reminders. The full night sheet includes all the reminder text.

If you print with the compact night sheet, you’ll get two (PDF) pages (one
double-sided printed page). The first is the character sheet, same as before,
and the second has the jinxes and the night order without the reminder text.
This option is nice if you don’t care about the night order reminder text and
want something that fits on a single printed page.

## Missing Features

The tool does not support travelers, fabled, or homebrew characters. These
features are high-priority.

It would be nice to see a list of characters and filter them by their
properties. It’s sometimes hard to think of what to add if there isn’t a big
list of characters that you can peruse. The official tool does this. Currently
it lets you filter by character type and edition. We could do the same, and even
extend it to other more fancy filters like ‘prevents night deaths’, ‘does not
wake’, etc., which can be useful in the script building process.

Further in the future, it would be cool to integrate some script-building tips
directly into the editor.

## Building the Tool

There’s no building required. Launch any server in the project root and you can
try it out. There’s a very basic [Makefile](Makefile) which runs `python3 -m
http.server` and watches the [Sass](https://sass-lang.com/) files for changes.
(This requires Sass to be installed.)

Note that the generated CSS files are not part of the repository, so you will
have to compile the Sass files before launching the server.

Disclaimer: I haven’t tried anything on Windows, but it should be simple to get
working.

## Acknowledgements

All of the character icons and much of the raw data are taken directly from
[clocktower.live](https://github.com/nicholas-eden/townsquare). (I modified the
Harpy icon since it was a flat, bright red.) The other icons are from
[Font Awesome](https://fontawesome.com/). The fonts are all in the
[IBM Plex family](https://www.ibm.com/plex/). The character text and jinxes are
taken from the excellent
[Blood on the Clocktower wiki](https://wiki.bloodontheclocktower.com).

The sole JavaScript library we depend on is
[fuzzysort](https://github.com/farzher/fuzzysort).

[Blood on the Clocktower](https://bloodontheclocktower.com/) is a trademark of
Steven Medway and
[The Pandemonium Institute](https://www.thepandemoniuminstitute.com/). I’m not
affiliated with them and they don’t endorse this tool.
