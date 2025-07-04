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
- Caches up to 25 recent scripts, accessible in the left sidebar
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

- [Sects and Violets](https://github.com/user-attachments/files/18757505/Sects.and.Violets.pdf)
  ([compact night sheet version](https://github.com/user-attachments/files/18757516/Sects.and.Violets.CNS.pdf))<br/>
  by The Pandemonium Institute
- [No Roles Barred](https://github.com/user-attachments/files/18757554/No.Roles.Barred.pdf)
  ([compact night sheet version](https://github.com/user-attachments/files/18757557/No.Roles.Barred.CNS.pdf))<br/>
  by Andrew Pichot
  ([JSON](https://botc-scripts.azurewebsites.net/script/258/1.0.1))
- [Boozling! v7](https://github.com/user-attachments/files/18757560/Boozling.v7.pdf)
  ([compact night sheet version](https://github.com/user-attachments/files/18757573/Boozling.v7.CNS.pdf))<br/>
  by Lau ([JSON](https://botc-scripts.azurewebsites.net/script/173/8.0.0))
- [Kaboom.pdf](https://github.com/user-attachments/files/18757580/Kaboom.pdf)
  ([compact night sheet version](https://github.com/user-attachments/files/18757583/Kaboom.CNS.pdf))<br/>
  by Scuba Steve ([JSON](https://botcscripts.com/script/1205/1.0.0))

## Usage Overview

The UI is largely self-explanatory. The buttons on the top right allow you to
(in order):

- import/upload script JSONs
- export/download the current script JSON
- create a script link (more on this [later](#exporting-script-links))
- print the script (Ctrl+P or Cmd+P works also)

You can add characters using the quick-add textbox underneath the buttons, or
using the sidebar on the right. Both the quick-add box and the sidebar support
searching names and ability texts (this is explained in more detail
[here](#adding-characters)).

The checkbox underneath the quick-add textbox toggles the compact night sheet –
you can see the difference in the examples above.

You can change the name and author of the script on the top left.

The sidebar on the right, which you can open using the button at the
middle-right edge of the viewport, lets you view all of the characters
(including customs if you’ve imported any) in one list and filter them by their
name and type.

The sidebar on the left (similar button) opens the recent scripts tab, where the
most recent 25 scripts that you were working on will appear.

You can undo/redo up to ten previous changes in the currently focused script
using the buttons on the bottom right or via the keyboard shortcuts Ctrl+Z /
Ctrl+Shift+Z on Windows/Linux, or Cmd+Z / Cmd+Shift+Z on Mac.

You can lock or unlock editing and hide certain UI elements by using the
lock/unlock button on the bottom right, next to the undo/redo buttons.

Importing directly from [bloodstar.xyz](https://www.bloodstar.xyz/) is
supported. The tool will handle the night order you create in bloodstar, but if
you want more control, you can add it explicitly in the metadata for the script.
(The
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

Fortunately, you do not have to do this yourself. Once imported, the tool gives
a bloodstar script an explicit night order as above, which you can then edit
yourself in the tool by dragging and dropping. (More on this
[later](#changing-the-night-order).) This is useful for supporting characters
that act or have reminders before dusk, before/between Minion and Demon info
steps (like the Lunatic), or after dawn (like the Leviathan).

In the night reminder text, you can write `:reminder:` to insert a circle
indicating that a reminder token is to be placed.

> [!NOTE]
> The videos below are a little out of date. A few UI elements have been added
> and some have been moved around. They still give a good idea of how everything
> works. I will update the videos at some point.

### Adding Characters

Either import the script using the import JSON button on the top right, or start
typing characters into the text box. Pressing Enter will immediately add the
currently underlined character.

https://github.com/user-attachments/assets/781e5bcb-550d-4b96-a761-3719d932ff25

Alternatively, you can use the sidebar.

https://github.com/user-attachments/assets/ced438ee-14a0-4d26-88df-33344f745106

If you want to search through characters’ ability text rather than their names,
prefix the query with ‘has:’. Try things like ‘has:learn align’, ‘has:mad’,
‘has:you start knowing’, ‘has:drunk’, ‘has:poison’, etc.

https://github.com/user-attachments/assets/8d83254b-9126-4e0c-9ef5-d202cdad98f2

### Removing Characters

Just click the character’s icon on the script – same as in the official tool.
The sidebar toggles characters so you can remove them there too.

https://github.com/user-attachments/assets/7ecb7884-cd8e-45d1-800c-7e7474476b67

You can clear the whole script, including the name and author, by pressing the
clear script button on the bottom right of the viewport. (It’s the one with the
bin icon.)

### Undo/Redo

Undo with Ctrl+Z on Windows/Linux and Cmd+Z on Mac. Redo with Ctrl+Shift+Z on
Windows/Linux and Cmd+Shift+Z on Mac. Alternatively, use the buttons on the
bottom right of the viewport. You can undo/redo up to ten actions.

https://github.com/user-attachments/assets/2aea1072-1a45-4b69-abd6-53bd8b93933b

### Exporting the Script JSON

You can export the script JSON using the button on the top right.

https://github.com/user-attachments/assets/c9ec35d1-9f37-417a-a7bd-6a6971f25422

### Exporting Script Links

> [!WARNING]
> The video is out of date. You can just press the script link button to toggle
> the script link in your browser’s address bar.

JSON files can be cumbersome to pass around, so the tool has a lightweight way
to create _script links_. Pressing the script link button will replace the URL
in your browser’s address bar with the script link, which you can then copy and
send to others. Pressing the script link button again will remove it.

If a script link is already present in the address bar, updates to the script
will be immediately reflected in the script link – you do not need to clear and
regenerate the link after updates. This also works if you change scripts using
the file selector or upload a script via JSON.

https://github.com/user-attachments/assets/f617d650-6104-4648-b8cc-8ec79e0b7fd9

Script links do not work with homebrew characters. You’ll need to export the
JSON and send that if your script has custom characters or rules that are not
part of the script tool itself.

When you click a script link, a new tab will open with the script loaded. If you
already had the tool open in another tab, don’t worry – all script tool tabs are
(mostly) synchronised. You can make changes in any instance and all changes will
be reflected in all tabs.

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

The maximum number of scripts stored in memory is 25. If you try to add more,
the bottom script will be popped off. This is not a technical limitation and may
be expanded if 25 is too few. (But 25 seems like plenty.)

### Exporting PDFs

Exporting PDFs is designed to be done using the built-in print dialog’s ‘Print
to PDF’ functionality. This currently works well on Chrome and Firefox – my
settings are usually A4, no margins (important!), remove headers and footers
(but not backgrounds). Play around with whatever looks best to you. Android
mobile output is generally acceptable once it’s correctly scaled. Safari and
browsers on iOS are currently not great since neither have good support for CSS3
paged media or page break queries.[^1]

[^1]: Some basic `@page` support
    [has arrived](https://bugs.webkit.org/show_bug.cgi?id=15548) but it’s still
    not very good. Soon, maybe? In the meantime, use a proper browser.

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

### Toggling Edit and View Modes

There’s an unlock/lock icon on the bottom right of the viewport. Clicking it
will toggle between edit and view mode.

A while ago I wanted to run a Teensyville script I made for some friends, but I
had forgotten the printed scripts. I linked them to the script on this tool, and
for the most part it worked well – it’s certainly much more readable than a
screenshot of the script. But some players eventually came up to me and asked
why some characters seemed to have disappeared; they were accidentally clicking
on the character’s icon and removing them. Annoying. A simple solution is to add
a view mode. It disables interaction and removes some irrelevant UI elements for
cleaner viewing.

### Changing the Character Order

Sometimes it makes more sense to defy SAO and order some characters yourself.
For example, SAO-sorted Trouble Brewing starts with Chef, Investigator,
Washerwoman, Librarian, but the official order starts with Washerwoman,
Librarian, Investigator, Chef, which is more logical for that script.

https://github.com/user-attachments/assets/e1a8732e-3ab7-48ad-ab64-8b0509ac5b53

Note that changes to the script order are **purely cosmetic** and are reset
whenever the script is rendered again. This feature is enabled mainly so that
you can tweak a few characters just before printing.

### Changing the Night Order

The night order for any script can be edited by dragging and dropping items in
the night order section.

https://github.com/user-attachments/assets/c73093f3-e5be-42d3-b1f4-5275649cab34

There are two ‘modes’:

- If you import either a bloodstar script or a JSON with an explicit night order
  (as shown earlier), then editing the night order will also edit the underlying
  JSON. Changes are considered updates to the script and are subject to
  undos/redos. Any new characters you add, official or otherwise, will not be
  presumed to sit anywhere in the night order – you are on your own and must
  take care of the night order yourself.
- If there is no explicit night order, then changes to the night order in the
  tool are **purely cosmetic**. The next time the script is rendered, these
  changes will be lost. This feature is enabled mainly so that you can tweak a
  few entries just before printing. For example, you can put the Damsel’s first
  night reminder before Minion info to clarify that poisoning cannot interfere
  with Minions learning the Damsel, or you can put the Snake Charmer before
  Minion info if you prefer the Alejo Snake Charmer rule.

### Custom Characters, Bootlegger Rules, and Jinxes

Any custom character in an uploaded script JSON must have the following fields:

```json
{
  "id": "your_id_here",
  "name": "Your Name Here",
  "team": "townsfolk | outsider | minion | demon | traveler | fabled",
  "image": "some valid link",
  "ability": "ability text"
}
```

All fields are mandatory, including the image. Make sure that your character’s
identifier doesn’t clash with any internal identifiers or any other characters
you’ve added.

You can (and probably should) include some other information if it is relevant
for the character, like night order and reminder information, reminder tokens,
custom jinxes, etc. This tool does not directly use all of this info, but it
will pass it along unchanged to other tools that do. Here is an example of a
fully-specified official character – your own characters should follow this
template but delete the edition info.

```json
{
  "id": "philosopher",
  "name": "Philosopher",
  "edition": "snv",
  "team": "townsfolk",
  "firstNightReminder": "The Philosopher might choose a character. If necessary, swap their character token. :reminder:",
  "otherNightReminder": "The Philosopher might choose a character. If necessary, swap their character token. :reminder:",
  "reminders": [
    "Drunk"
  ],
  "remindersGlobal": [
    "Is The Philosopher"
  ],
  "setup": false,
  "ability": "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.",
  "special": [
    {
      "type": "reveal",
      "name": "replace-character"
    }
  ],
  "flavor": "If anything is real, beer is real. Drink, for tomorrow we may die.",
  "firstNight": 9,
  "otherNight": 7
}
```

You can also override built-in characters and annotate your own data. As an
example, suppose you upload a script JSON with the following character:

```json
{
  "id": "huntsman",
  "jinxes": [
    {
      "id": "villageidiot",
      "reason": "If there is a spare token, the Damsel can become a Village Idiot due to the Huntsman’s ability."
    }
  ]
}
```

This script (and only this script) will contain a new instance of the Huntsman
with an additional jinx with the Village Idiot.

Bootlegger rules are also simple to add:

```json
{
  "id": "_meta",
  "author": "Your Name",
  "name": "Your Script Name",
  "bootlegger": [
    "Your custom rule here",
    "Another custom rule"
  ]
}
```

Bloodstar scripts work as-is, but bear in mind that if you want the best output
you should try to do the following:

- Make sure that all your characters have images. Anything will do.
- Try to make sure that your character’s ability text is within the official
  character limit, which should ensure that in a printed script it is no more
  than two lines of text. I don’t know if a specific numerical limit has been
  published (somewhere around 130 characters) but since the fonts used are
  proportional this can only be an approximation. Characters with extremely long
  ability text will not render particularly nicely since the characters are laid
  out using a CSS grid: a single large item will make all other items of that
  type take up similar vertical space.

You can overcome the ability text length issue by directly inserting HTML that
decreases the letter spacing of the ability text. All ability text is
interpreted as HTML and any valid HTML should render. For example, the tool
bundles some common homebrew roles, such as the Each Night Huntsman. The ability
text is this:

```html
<span style="letter-spacing: -0.4px">
  Each night, choose a living player: a chosen Damsel becomes a not-in-play
  Townsfolk. If you choose a Minion, you are poisoned. [+the Damsel]
</span>
```

The ability text, ordinarily too long, fits in two lines with the condensed
letter spacing. It does look a little ugly, but it helps it look more consistent
with other abilities.

You can also force-activate hyphenation via `hyphens: auto` if you think that
might help. None of this is very useful for JSON exporting since no other tool I
know of supports HTML in ability text, but it can help if you need to make some
minor tweaks before printing the script.

## Missing Features

It would be cool to integrate some script-building tips directly into the
editor.

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
- If something’s broken and you’re not sure what, you can always clear the
  website’s cache. You can do this the usual way for your browser, or you can
  explicitly clear `localStorage` by opening your browser’s developer tools and
  typing `localStorage.clear()` into the console.

## Acknowledgements

The character icons are a modified version of the unofficial icon SVGs Navean
and Tom O created and uploaded to the unofficial Discord server, and which are
now available [on GitHub](https://github.com/tomozbot/botc-icons). The other
icons are from [Font Awesome](https://fontawesome.com/). Most of the character
data are taken directly from
[clocktower.live](https://github.com/nicholas-eden/townsquare). Night reminders
and other auxiliary text is close to the official text, but I have added and
changed some text to improve clarity. The fonts are all in the
[IBM Plex family](https://www.ibm.com/plex/). The character text and jinxes are
taken from the excellent
[Blood on the Clocktower wiki](https://wiki.bloodontheclocktower.com).

The JavaScript libraries we depend on are
[fuzzysort](https://github.com/farzher/fuzzysort) and
[Sortable](https://github.com/SortableJS/Sortable).

[Blood on the Clocktower](https://bloodontheclocktower.com/) is a trademark of
Steven Medway and
[The Pandemonium Institute](https://www.thepandemoniuminstitute.com/). I’m not
affiliated with them and they don’t endorse this tool.
