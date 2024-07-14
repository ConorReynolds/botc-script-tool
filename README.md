# Unofficial Script Tool for Blood on the Clocktower 

Try it out [here](https://creynolds.ie/botc-script-tool).

This is a minimalist unofficial script tool for [Blood on the Clocktower](https://bloodontheclocktower.com/) emphasising editing speed and producing reasonably good quality printed scripts. It currently works well on both desktop and mobile.

(This is very much a work in progress.)

## Another one?

I wanted a completely self-contained webapp that can run well on any device and I couldn’t find one. The [official script editor](https://script.bloodontheclocktower.com/) is a useful tool but:

- The top listed character is not added to the script when the enter key is pressed. A minor annoyance, but it really is annoying. This makes it slow to create scripts.
- I’m not a huge fan of the single-column output. It’s hard to read and results in occasionally squished text if the character ability is long. I would much prefer a two-column output.
- It doesn’t work on mobile.

I also didn’t want to use the official editor to generate the JSON and then feed that to an external tool to create the PDF because, well, it’s a pain. There’s no reason why this shouldn’t be self-contained.

## Basic Usage

Much of the UI is self-explanatory. The buttons on the top right allow you to (in order):

- import script JSONs
- export/download the current script JSON
- clear the script
- print the script (Ctrl+P or Cmd+P works also)

### Adding Characters

Either import the script using the import JSON button on the top right, or start typing characters into the text box. Pressing Enter will immediately add the currently underlined character. Alternatively you can click any entry listed.

### Removing Characters

Just click the character’s icon on the script – same as in the official tool.

### Exporting Script

You can download the script JSON using the button on the top right.

Exporting PDFs is designed to be done using the built-in print dialog’s ‘Print to PDF’ functionality. (Seriously, the button on the top right just calls `window.print()`.) This currently works well on Chrome and Firefox – my settings are usually A4, 105% ish scaling, don’t print headers, footers, or backgrounds. Play around with whatever looks best to you, but the defaults should be OK. Android mobile output is generally acceptable once the output is correctly scaled. Safari and browsers on iOS are currently not great but support will probably improve soon.

## Missing Features

The tool is barebones and isn’t suitable for all (or even most) use cases. Most notably it’s missing the night order, which completely prevents it from being a useful tool for Storytellers. (But that will come Soon™.)

Another useful feature would be to see a list of characters and filter them by their properties. It’s sometimes hard to think of what to add if there isn’t a big list of characters that you can peruse. The official tool does this. Currently it lets you filter by character type and edition. We could do the same, and even extend it to other more fancy filters like ‘prevents night deaths’, ‘does not wake’, etc., which can be useful in the script building process.

## Building the Tool

There’s no building required. There’s a very basic [Makefile](Makefile) which runs `python3 -m http.server` and watches the main [Sass](https://sass-lang.com/) file for changes. Launch any server in the root directory and you can try it out.

Note that the generated CSS files are not part of the repository, so you will have to compile the Sass files before launching the server.

Disclaimer: I haven’t tried anything on Windows, but it should be simple to get working.

## Acknowledgements

All of the character icons are taken from [clocktower.live](https://github.com/nicholas-eden/townsquare). The other icons are from [Font Awesome](https://fontawesome.com/). The fonts are all in the [IBM Plex family](https://www.ibm.com/plex/). The character text and jinxes are taken from the excellent [Blood on the Clocktower wiki](https://wiki.bloodontheclocktower.com).

The sole JavaScript library we depend on is [fuzzysort](https://github.com/farzher/fuzzysort).

[Blood on the Clocktower](https://bloodontheclocktower.com/) is a trademark of Steven Medway and [The Pandemonium Institute](https://www.thepandemoniuminstitute.com/). I’m not affiliated with them and they don’t endorse this tool.

