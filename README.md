# Unofficial Script Tool for Blood on the Clocktower

Try it out [here](https://creynolds.ie/botc-script-tool).

This is an unofficial script tool for
[Blood on the Clocktower](https://bloodontheclocktower.com/), emphasising
editing speed and producing reasonably high quality printed scripts. It
currently works well on desktop and decent on mobile.

## Feature Overview

- Quick-add textbox with fuzzy search, supporting search for both character
  names and ability text
- Import and export JSON (supports [bloodstar.xyz](https://www.bloodstar.xyz/)
  homebrew scripts)
- Undo and redo up to 10 recent changes
- Caches up to 15 recent scripts, accessible in the left sidebar
- Generate script links to quickly share scripts with others
- PDF export via built-in ‘Print to PDF’
- View/Edit modes – mainly useful if you want to use the tool as a substitute
  for printed scripts

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
- It’s light on features. Import and export are restricted to JSON files or
  PDFs/images, which can be cumbersome and inconvenient to share. It’s not
  possible to filter characters based on ability text, nor to work on multiple
  scripts at once.
- It doesn’t support homebrew characters.
- It doesn’t work on mobile.

I also didn’t want to use the official editor to generate the JSON and then feed
that to an external tool to create the PDF because, well, it’s a pain. There’s
no reason why this shouldn’t be self-contained.

For the record, if you’re not a fan of the printed output, you can of course use
this tool just to create the script and export the script JSON for printing
using the official tool. I won’t be upset.

## Examples

Here’s some script PDFs I generated with this tool.

- [Sects and Violets](https://drive.google.com/uc?export=download&id=17iYBXGlN3pION7jXl1b79aCKt7Z9bQJQ)
  ([compact night sheet version](https://drive.google.com/uc?export=download&id=1Cabp0K8AVOFqFlCO5Z9qZ_uxuyx8qySQ))<br/>
  by The Pandemonium Institute
- [No Roles Barred](https://drive.google.com/uc?export=download&id=16wBqcn7G5cwZTGrT9dVp8FhECCQF6xff)
  ([compact night sheet version](https://drive.google.com/uc?export=download&id=19wnYRgeQ2k5pZDcqowYrKCGo9xqIETkz))<br/>
  by Andrew Pichot
  ([JSON](https://botc-scripts.azurewebsites.net/script/258/1.0.1))
- [Boozling! v7](https://drive.google.com/uc?export=download&id=1EUW_h3nx4NKRl9BpUtUX0CM_8jnv2lHQ)
  ([compact night sheet version](https://drive.google.com/uc?export=download&id=1iZfDeaWGnkHqlpGdnjSmJbKKvrHeZMj3))<br/>by
  Lau ([JSON](https://botc-scripts.azurewebsites.net/script/173/8.0.0))
- [Kaboom](https://drive.google.com/uc?export=download&id=10TVDKnsBuMxtwhaMqHfDqs050jmM6Glp)
  ([compact night sheet version](https://drive.google.com/uc?export=download&id=1udx-kj-aZfXY1hZB9tTSyPujyK8g3nff))<br/>
  by Scuba Steve ([JSON](https://botcscripts.com/script/1205/1.0.0))

## Usage Overview

The UI is largely self-explanatory. The buttons on the top right allow you to
(in order):

- import/upload script JSONs
- export/download the current script JSON
- clear the script
- print the script (Ctrl+P or Cmd+P works also)

You can add characters using the quick-add textbox underneath the buttons.

The checkbox underneath the quick-add textbox toggles the compact night sheet –
you can see the difference in the examples above.

You can change the name and author of the script on the top left.

The sidebar on the right, which you can open using the button at the
middle-right edge of the viewport, lets you view all of the characters
(including customs if you’ve imported any) in one list and filter them by their
name and type.

The sidebar on the left (similar button) opens the recent scripts tab, where the
most recent 15 scripts that you were working on will appear.

You can undo/redo up to ten previous changes in the currently focused script
using the buttons on the bottom right or via the keyboard shortcuts Ctrl+Z /
Ctrl+Shift+Z on Windows/Linux, or Cmd+Z / Cmd+Shift+Z on Mac.

You can lock or unlock editing and certain UI elements by using the lock/unlock
button on the bottom right, next to the undo/redo buttons.

Ctrl/Cmd clicking on the export JSON button creates a script link that you can
then copy and share.

Importing directly from [bloodstar.xyz](https://www.bloodstar.xyz/) is
supported. Characters are added in the order they appear on the script and are
not SAO sorted. The tool should mostly handle the night order you create in
bloodstar, but if you want more control, you can add it explicitly in the
metadata for the script. (The
[official app](https://github.com/ThePandemoniumInstitute/botc-release/blob/7f0d23cf5b144f3175f505e1db74317fac417442/script-schema.json#L393)
supports the same format, also explained in
[this Reddit comment](https://www.reddit.com/r/BloodOnTheClocktower/comments/1c6h0d5/comment/l02cbsd/).)

```js
{
    "id": "_meta",
    "author": "Author Name",
    // ...
    // other fields 
    // ...
    "firstNight": [
        "dusk",
        "char1",
        "minioninfo",
        "char2",
        "demoninfo",
        "char3",
        ...,
        "dawn",
        "char4"
    ],
    "otherNight": [
        "char5",
        "dusk",
        "char6",
        ..., 
        "dawn",
        "char7"
    ]
}
```

Note `char1`, `char2`, … are character IDs, not names. This format gives you
maximum flexibility. Bloodstar by default does not seem to support characters
that act or have reminders before dusk, before/between minion and demon info
steps (like the Lunatic), or after dawn (like the Leviathan). It’s possible to
tweak the numbers in the exported JSON but that requires knowledge of where
these standard steps ‘usually’ go and what numbers they are assigned. The method
above is much simpler, but requires that you explicitly write the night order in
the JSON yourself.

### Adding Characters

Either import the script using the import JSON button on the top right, or start
typing characters into the text box. Pressing Enter will immediately add the
currently underlined character.

https://github.com/user-attachments/assets/781e5bcb-550d-4b96-a761-3719d932ff25

Alternatively, you can use the sidebar.

https://github.com/user-attachments/assets/ced438ee-14a0-4d26-88df-33344f745106

If you want to search through characters’ ability text rather than their names,
prefix the query with ‘has:’. Try things like has:learn align, has:mad, has:you
start knowing, has:drunk, has:poison, etc.

https://github.com/user-attachments/assets/8d83254b-9126-4e0c-9ef5-d202cdad98f2

### Removing Characters

Just click the character’s icon on the script – same as in the official tool.
The sidebar toggles characters so you can remove them there too.

https://github.com/user-attachments/assets/7ecb7884-cd8e-45d1-800c-7e7474476b67

### Undo/Redo

Undo with Ctrl+Z on Windows/Linux and Cmd+Z on Mac. Redo with Ctrl+Shift+Z on
Windows/Linux and Cmd+Shift+Z on Mac. Alternatively, use the buttons on the
bottom right of the viewport. You can undo/redo up to ten actions.

https://github.com/user-attachments/assets/2aea1072-1a45-4b69-abd6-53bd8b93933b

### Toggling Edit and View Modes

There’s an unlock/lock icon on the bottom right of the viewport. Clicking it
will toggle between edit and view mode.

A while ago I wanted to run a Teensyville script I made for some friends, but I
had forgotten the printed scripts. I linked them to the script on this tool,
and for the most part it worked well – it’s certainly much more readable than a
screenshot of the script. But some players eventually came up to me and asked
why some characters seemed to have disappeared; they were accidentally clicking
on the character’s icon and removing them. Annoying. A simple solution is to
add a view mode. It disables interaction and removes some irrelevant UI
elements for cleaner viewing.

### Exporting the Script JSON

You can export the script JSON using the button on the top right.

https://github.com/user-attachments/assets/c9ec35d1-9f37-417a-a7bd-6a6971f25422

### Exporting Script Links

JSON files can be cumbersome to pass around, so the tool has a lightweight way
to create _script links_. Currently the only way to generate a script link is by
holding Ctrl/Cmd and clicking on the Export JSON button. This will replace the
URL in your browser’s address bar with the script link, which you can then copy
and send to others. Ctrl/Cmd clicking on the Clear Script button will clear the
URL parameters only and not the script itself.

https://github.com/user-attachments/assets/f617d650-6104-4648-b8cc-8ec79e0b7fd9

### Importing Scripts

You can import scripts using the Import JSON button on the top right or by
visiting a script link. Both standard and homebrew scripts are supported.

https://github.com/user-attachments/assets/a4d428f8-ccc8-4903-87f6-d275a2c39f3a

### Working with Multiple Scripts

The Recent Scripts sidebar is on the left-hand side of the viewport. When you
import a script – whether that’s via JSON upload or a script link – it’s added
to this list. You can also add a new script manually using the button at the top
of the sidebar.

https://github.com/user-attachments/assets/9993225b-1854-464b-b011-d718392278ab

The maximum number of scripts stored in memory is 15. If you try to add more,
the bottom script will be popped off. This is not a technical limitation and may
be expanded if 15 is too few. (But 15 seems like plenty.)

### Exporting PDFs

Exporting PDFs is designed to be done using the built-in print dialog’s ‘Print
to PDF’ functionality. This currently works well on Chrome and Firefox – my
settings are usually A4, remove headers and footers (but not backgrounds). Play
around with whatever looks best to you, but the defaults should be OK. Android
mobile output is generally acceptable once the output is correctly scaled.
Safari and browsers on iOS are currently not great but support will probably
improve soon.

If you print with the full night sheet, you’ll get four (PDF) pages (two
double-sided printed pages). The first two are the character sheet and the
jinxes (if any). The second two are the first night and other night
order/reminders. The full night sheet includes all the reminder text.

If you print with the compact night sheet, you’ll get two (PDF) pages (one
double-sided printed page). The first is the character sheet, same as before,
and the second has the jinxes and the night order without the reminder text.
This option is nice if you don’t care about the night order reminder text and
want something that fits on a single printed page.

https://github.com/user-attachments/assets/501a7a7c-de29-4c4f-9c54-fe5b37565d73

## Missing Features

It would be cool to integrate some script-building tips directly into the
editor. Currently the tool does not display any script analytics whatsoever –
not even the numbers of character types.

## Incomplete Features

The special search queries are limited to ‘has:’ prefixes and the filter
functionality in the sidebar is still relatively basic.

## Building the Tool

There’s nothing to build. Launch any server in the project root and you can try
it out. There’s a very basic [Makefile](Makefile) which runs
`python3 -m http.server` and watches the [Sass](https://sass-lang.com/) files
for changes. (This requires Sass to be installed.)

Note that the generated CSS files are not part of the repository, so you will
have to compile the Sass files before launching the server.

Disclaimer: I haven’t tried anything on Windows, but it should be simple to get
working.

## Troubleshooting and Known Issues

This Works On My Machine™ (latest Firefox on macOS), but beyond that it has not
been tested much. Most of the current problems seem to revolve around competing
interpretations of `window.print()` in different browsers and operating systems.

- Microsoft Print to PDF blanks the file name. If you want the file name to be
  the name of the script by default then you’ll need to use the regular Print to
  PDF. You can change this in the ‘Destination’ field of the print options.
- Printing with the keyboard shortcut Cmd+P on Firefox (macOS) gives ‘Unofficial
  BotC Script Tool’ as the title. Not sure why this happens. The print button
  works fine, so if this is annoying you then just use the button.
- Printing is ugly on mobile devices so I can’t recommend it just yet.

## Acknowledgements

The character icons are a modified version of the unofficial icon SVGs Navean
and Tom O created and uploaded to the unofficial Discord server. Most of the
character data are taken directly from
[clocktower.live](https://github.com/nicholas-eden/townsquare). Night reminders
and other auxiliary text is written by
[Ben Finney](http://bignose.whitetree.org/projects/botc/diy/). The other icons
are from [Font Awesome](https://fontawesome.com/). The fonts are all in the
[IBM Plex family](https://www.ibm.com/plex/). The character text and jinxes are
taken from the excellent
[Blood on the Clocktower wiki](https://wiki.bloodontheclocktower.com).

The sole JavaScript library we depend on is
[fuzzysort](https://github.com/farzher/fuzzysort).

[Blood on the Clocktower](https://bloodontheclocktower.com/) is a trademark of
Steven Medway and
[The Pandemonium Institute](https://www.thepandemoniuminstitute.com/). I’m not
affiliated with them and they don’t endorse this tool.
