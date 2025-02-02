import { Character } from "./character.js";
import { nightorder } from "./nightorder.js";
import { Timeline } from "./timeline.js";
import { compareOn } from "./utils.js";

// Need a full list of characters that can be added.
export class Script {
  _author;
  _name;
  townsfolk;
  outsiders;
  minions;
  demons;
  travelers;
  fabled;

  // Represents all characters on the script
  charSet;

  jinxList;

  // Used for bloodstar imported scripts
  almanac;
  firstNightOrder;
  otherNightOrder;

  // undo/redo history for script
  timeline;
  isRecording;

  // official night order
  static nightorder = nightorder;

  constructor() {
    this.townsfolk = [];
    this.outsiders = [];
    this.minions = [];
    this.demons = [];
    this.travelers = [];
    this.fabled = [];
    this._name = "";
    this._author = "";
    this.charSet = new Set();
    this.jinxList = [];
    this.timeline = new Timeline(this.toJSON());
    this.isRecording = true;
  }

  clear() {
    this.townsfolk = [];
    this.outsiders = [];
    this.minions = [];
    this.demons = [];
    this.travelers = [];
    this.fabled = [];
    this._name = "";
    this._author = "";
    this.charSet = new Set();
    this.jinxList = [];
    this.almanac = undefined;
    this.firstNightOrder = undefined;
    this.otherNightOrder = undefined;

    if (this.isRecording) {
      this.timeline.addInstant(this.toJSON());
    }
  }

  isEmpty() {
    const nchars = this.charSet.size;
    const noName = this._name === "";
    const noAuthor = this._author === "";
    return noName && noAuthor && nchars === 0;
  }

  loadFromJSON(obj) {
    if (!Array.isArray(obj)) {
      console.error(obj);
      throw Error("Invalid JSON – not a list.");
    }

    this.clear();

    const wasRecording = this.isRecording;
    this.isRecording = false;

    for (const item of obj) {
      if (typeof item === "object" && item["id"] === "_meta") {
        this._name = item["name"] ? item["name"] : "";
        this._author = item["author"] ? item["author"] : "";
        this.almanac = item["almanac"];
        this.firstNightOrder = item["firstNight"];
        this.otherNightOrder = item["otherNight"];
      }

      if (typeof item === "object" && item["id"] !== "_meta") {
        const id = item["id"];
        try {
          if (item["image"]) {
            // I choose this as the marker of a custom character. I should
            // check this more rigorously.
            Character.custom[id] = item;

            const idx = Character.customFlat.findIndex((c) => c.id === id);
            // If we see another character with the same ID, just overwrite it,
            // it’s probably an update.
            if (idx !== -1) {
              Character.customFlat.splice(idx, 1);
            }

            Character.customFlat.push(item);
          }
          const char = new Character(id);
          this.add(char);
        } catch (e) {
          console.error(e);
        }
      }

      if (typeof item === "string") {
        try {
          this.add(new Character(item));
        } catch (e) {
          console.error(e);
        }
      }
    }

    this.sort();

    // If the script is a bloodstar import and has no explicit night order,
    // create one
    if (this.almanac && (!this.firstNightOrder && !this.otherNightOrder)) {
      this.firstNightOrder = [];
      this.otherNightOrder = [];
      for (const id of this.charSet.values()) {
        const c = new Character(id);
        if (c.firstNightOrder && c.firstNightOrder !== -1) {
          this.firstNightOrder.push(id);
        }
        if (c.otherNightOrder && c.otherNightOrder !== -1) {
          this.otherNightOrder.push(id);
        }
      }

      this.firstNightOrder.sort(
        compareOn((id) => new Character(id).firstNightOrder),
      );
      this.otherNightOrder.sort(
        compareOn((id) => new Character(id).otherNightOrder),
      );

      this.firstNightOrder.unshift("dusk", "minioninfo", "demoninfo");
      this.firstNightOrder.push("dawn");
      this.otherNightOrder.unshift("dusk");
      this.otherNightOrder.push("dawn");
    }

    this.isRecording = wasRecording;
    if (this.isRecording) {
      this.timeline.addInstant(this.toJSON());
    }
  }

  static asType(n) {
    switch (n) {
      case 0:
        return "townsfolk";
      case 1:
        return "outsider";
      case 2:
        return "minion";
      case 3:
        return "demon";
    }
  }

  remove(cid) {
    this.charSet.delete(cid);

    const char = new Character(cid);
    if (char.type === "townsfolk") {
      const idx = this.townsfolk.findIndex((c) => c.id === char.id);
      this.townsfolk.splice(idx, 1);
    }
    if (char.type === "outsider") {
      const idx = this.outsiders.findIndex((c) => c.id === char.id);
      this.outsiders.splice(idx, 1);
    }
    if (char.type === "minion") {
      const idx = this.minions.findIndex((c) => c.id === char.id);
      this.minions.splice(idx, 1);
    }
    if (char.type === "demon") {
      const idx = this.demons.findIndex((c) => c.id === char.id);
      this.demons.splice(idx, 1);
    }
    if (char.type === "traveler") {
      const idx = this.travelers.findIndex((c) => c.id === char.id);
      this.travelers.splice(idx, 1);
    }
    if (char.type === "fabled") {
      const idx = this.fabled.findIndex((c) => c.id === char.id);
      this.fabled.splice(idx, 1);
    }

    let idx;
    while (
      (idx = this.jinxList.findIndex((e) =>
        e.char1 === cid || e.char2 === cid
      )) !== -1
    ) {
      this.jinxList.splice(idx, 1);
    }

    if (this.isRecording) {
      this.timeline.addInstant(this.toJSON());
    }
  }

  add(newChar) {
    switch (newChar.type) {
      case "townsfolk":
        if (this.townsfolk.some((c0) => newChar.id === c0.id)) {
          break;
        }
        this.townsfolk.push(newChar);
        this.charSet.add(newChar.id);
        break;
      case "outsider":
        if (this.outsiders.some((c0) => newChar.id === c0.id)) {
          break;
        }
        this.outsiders.push(newChar);
        this.charSet.add(newChar.id);
        break;
      case "minion":
        if (this.minions.some((c0) => newChar.id === c0.id)) {
          break;
        }
        this.minions.push(newChar);
        this.charSet.add(newChar.id);
        break;
      case "demon":
        if (this.demons.some((c0) => newChar.id === c0.id)) {
          break;
        }
        this.demons.push(newChar);
        this.charSet.add(newChar.id);
        break;
      case "traveler":
        if (this.travelers.some((c0) => newChar.id === c0.id)) {
          break;
        }
        this.travelers.push(newChar);
        this.charSet.add(newChar.id);
        break;
      case "fabled":
        if (this.fabled.some((c0) => newChar.id === c0.id)) {
          break;
        }
        this.fabled.push(newChar);
        this.charSet.add(newChar.id);
        break;
    }

    for (const id of this.charSet) {
      const char = new Character(id);
      if (char.jinx(newChar)) {
        if (
          this.jinxList.some((obj) =>
            char.id === obj.char1 && newChar.id === obj.char2
          )
        ) {
          continue;
        }
        this.jinxList.push({
          char1: char.id,
          char2: newChar.id,
          jinx: char.jinx(newChar),
        });
      }
      if (newChar.jinx(char)) {
        if (
          this.jinxList.some((obj) =>
            newChar.id === obj.char1 && char.id === obj.char2
          )
        ) {
          continue;
        }
        this.jinxList.push({
          char1: newChar.id,
          char2: char.id,
          jinx: newChar.jinx(char),
        });
      }
    }

    if (this.firstNightOrder && this.otherNightOrder) {
      if (
        newChar.firstNightOrder !== -1 &&
        !this.firstNightOrder.includes(newChar.id)
      ) {
        const idx = this.firstNightOrder.findIndex((s) => s === "dawn");
        this.firstNightOrder.splice(idx === -1 ? 0 : idx, 0, newChar.id);
      }

      if (
        newChar.otherNightOrder !== -1 &&
        !this.otherNightOrder.includes(newChar.id)
      ) {
        const idx = this.otherNightOrder.findIndex((s) => s === "dawn");
        this.otherNightOrder.splice(idx === -1 ? 0 : idx, 0, newChar.id);
      }
    }

    if (this.isRecording) {
      this.timeline.addInstant(this.toJSON());
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    if (this.isRecording) {
      this.timeline.addInstant(this.toJSON());
    }
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    this._author = newAuthor;
    if (this.isRecording) {
      this.timeline.addInstant(this.toJSON());
    }
  }

  loadTimeline(str) {
    const obj = JSON.parse(str);
    this.timeline = obj;
  }

  loadPrevious() {
    this.timeline.back();
    this.isRecording = false;
    this.loadFromJSON(JSON.parse(this.timeline.now()));
    this.isRecording = true;
  }

  loadNext() {
    this.timeline.forward();
    this.isRecording = false;
    this.loadFromJSON(JSON.parse(this.timeline.now()));
    this.isRecording = true;
  }

  sort() {
    this.townsfolk.sort(Character.compare);
    this.outsiders.sort(Character.compare);
    this.minions.sort(Character.compare);
    this.demons.sort(Character.compare);

    this.travelers.sort(compareOn((o) => o.name));
    this.fabled.sort(compareOn((o) => o.name));

    this.jinxList.sort((o1, o2) =>
      Character.compare(new Character(o1.char1), new Character(o2.char1)) ||
      Character.compare(new Character(o1.char2), new Character(o2.char2))
    );
  }

  render() {
    const iconCls = (c) => {
      let str = "";
      if (c.index("image")) {
        str += "imported-icon ";
      }
      if (this.almanac !== undefined) {
        str += "bloodstar";
      }
      return str.trim();
    };
    const wikilink = (c) => {
      if (!c.isCustom) {
        return c.wikilink;
      } else if (c.isCustom && !this.almanac) {
        return c.wikilink;
      } else if (this.almanac) {
        return `${this.almanac}#${c.id}`;
      } else {
        return `#`;
      }
    };

    let str = `<div class="script">`;
    for (
      const [i, chars] of [
        this.townsfolk,
        this.outsiders,
        this.minions,
        this.demons,
      ]
        .entries()
    ) {
      const ntype = chars.length;
      const plural = Script.asType(i) === "townsfolk"
        ? Script.asType(i)
        : Script.asType(i) + "s";
      str +=
        `<h3><span>${plural?.toUpperCase()}</span><span class="noprint">(${ntype})</span></h3>`;
      str += `<div nitems="${chars.length}" class="${
        Script.asType(i)?.toLowerCase()
      }">`;
      for (const c of chars) {
        str += `<div id="${c.id}" class="item">`;
        str +=
          `<img id="${c.id}-icon-script" title="Remove the ${c.name}" class="icon ${
            iconCls(c)
          }" src="${c.icon}"/>`;
        str += `<div class="name-and-summary">`;
        str += `<h4 class="character-name">`;
        str += `<a title="Read more about the ${c.name}" href="${
          wikilink(c)
        }" ${wikilink(c) === "#" ? "" : 'target="_blank"'}>${c.name}</a>`;
        for (const otherID of this.charSet) {
          const other = new Character(otherID);
          const jinx = c.jinx(other);
          if (jinx) {
            str += `<img title="${jinx}" class="jinx-icon ${
              iconCls(c)
            }" onclick="location.assign('#${c.id}-${other.id}-jinx')" src="${other.tinyIcon}"/>`;
          }
        }
        str += `</h4>`;
        str += `<div class="character-summary">${c.summary}</div>`;
        str += `</div>`;
        str += `</div>`;
      }
      str += `</div>`;
    }
    str += `</div>`;

    str += `<div class="jinxes-container">`;
    str += `<h3 class="jinxes-heading"><span>JINXES</span></h3>`;
    str += `<div nitems="${this.jinxList.length}" class="jinxes">`;
    for (const jinx of this.jinxList) {
      const c1 = new Character(jinx.char1);
      const c2 = new Character(jinx.char2);
      str += `<div id="${c1.id}-${c2.id}-jinx" class="item">`;
      str += `<div class="icons">`;
      str += `<img id="${c1.id}-icon-jinxes" class="icon ${
        iconCls(c1)
      }" src="${c1.icon}"/>`;
      str += `<img id="${c2.id}-icon-jinxes" class="icon ${
        iconCls(c2)
      }" src="${c2.icon}"/>`;
      str += `</div>`;

      str += `<div class="jinx-text">`;
      str += jinx.jinx;
      str += `</div>`;

      str += `</div>`;
    }
    str += `</div>`;
    str += `</div>`;

    str += `<div class="travelers-and-fabled-container">`;
    str +=
      `<h3 class="travelers-and-fabled-heading"><span>TRAVELLERS & FABLED</span></h3>`;
    str += `<div class="travelers-and-fabled" nitems="${
      this.travelers.length + this.fabled.length
    }">`;
    for (const c of this.travelers) {
      str += `<div id="${c.id}" class="item">`;
      str +=
        `<img id="${c.id}-icon-script" title="Remove the ${c.name}" class="icon ${
          iconCls(c)
        }" src="${c.icon}"/>`;
      str += `<div class="name-and-summary">`;
      str += `<h4 class="character-name">`;
      str += `<a title="Read more about the ${c.name}" href="${wikilink(c)}" ${
        wikilink(c) === "#" ? "" : 'target="_blank"'
      }>${c.name}</a>`;
      str += `</h4>`;
      str += `<div class="character-summary">${c.summary}</div>`;
      str += `</div>`;
      str += `</div>`;
    }
    // str += `</div>`; // end travelers

    // str += `<div class="fabled" nitems="${this.fabled.length}">`;
    for (const c of this.fabled) {
      str += `<div id="${c.id}" class="item">`;
      str +=
        `<img id="${c.id}-icon-script" title="Remove the ${c.name}" class="icon ${
          iconCls(c)
        }" src="${c.icon}"/>`;
      str += `<div class="name-and-summary">`;
      str += `<h4 class="character-name">`;
      str += `<a title="Read more about the ${c.name}" href="${wikilink(c)}" ${
        wikilink(c) === "#" ? "" : 'target="_blank"'
      }>${c.name}</a>`;
      str += `</h4>`;
      str += `<div class="character-summary">${c.summary}</div>`;
      str += `</div>`;
      str += `</div>`;
    }
    str += `</div>`; // end travelers-and-fabled
    str += `</div>`; // end travelers-and-fabled-container

    str += `<div class="night-sheet">`;

    str += `<div class="first-night-container">`;
    str += `<h3><span>FIRST NIGHT</span></h3>`;
    str += `<div class="first-night">`;

    let firstNightOrder;
    if (this.firstNightOrder) {
      firstNightOrder = this.firstNightOrder;
    } else {
      firstNightOrder = Script.nightorder.firstNight;
    }

    for (const [position, id] of firstNightOrder.entries()) {
      if (this.charSet.has(id)) {
        const char = new Character(id);
        if (char.firstNightReminder) {
          str += `<div class="item">`;
          str += `<img class="${iconCls(char)} handle" src="${char.icon}"/>`;
          str += `<div>`;
          str += `<div class="night-sheet-char-name">${char.name}</div>`;
          str += `<div class="night-sheet-reminder">${
            char.firstNightReminder.replaceAll(
              ":reminder:",
              '<i class="fa-regular fa-circle" style="font-size: 0.9em"></i>',
            )
          }</div>`;
          str += `</div>`;
          str += `</div>`;
        }
      }
      if (id === "MINION" || id === "minioninfo" || id === "minion") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">MINION</div>`;
        str +=
          `<div>If there are 7 or more players, wake the Minions. Show the ‘This is the Demon’ token & point to the Demon.</div>`;
        str += `</div>`;
      }
      if (id === "DEMON" || id === "demoninfo" || id === "demon") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">DEMON</div>`;
        str +=
          `<div>If there are 7 or more players, wake the Demon. Show the ‘These are your Minions’ token & point to all Minions. Show the ‘These characters are not in play’ token & show 3 not-in-play good character tokens.</div>`;
        str += `</div>`;
      }
      if (id === "DUSK" || id === "dusk") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">DUSK</div>`;
        str +=
          `<div>Check that all eyes are closed. Some travellers act.</div>`;
        str += `</div>`;
      }
      if (id === "DAWN" || id === "dawn") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">DAWN</div>`;
        str +=
          `<div>Wait approximately 10 seconds. Call for eyes open, then immediately announce which players (if any) died.</div>`;
        str += `</div>`;
      }
      if (this.firstNightOrder) {
        continue;
      }
      // Handle custom characters at this position
      for (const charID of this.charSet) {
        const char = new Character(charID);
        if (char.firstNightOrder === position && !Character.data[charID]) {
          str += `<div class="item">`;
          str += `<img class="${iconCls(char)} handle" src="${char.icon}"/>`;
          str += `<div>`;
          str += `<div class="night-sheet-char-name">${char.name}</div>`;
          str += `<div class="night-sheet-reminder">${
            char.firstNightReminder.replaceAll(
              ":reminder:",
              '<i class="fa-regular fa-circle" style="font-size: 0.9em"></i>',
            )
          }</div>`;
          str += `</div>`;
          str += `</div>`;
        }
      }
    }
    str += `</div>`;
    str += `</div>`;

    str += `<div class="other-night-container">`;
    str += `<h3><span>OTHER NIGHTS</span></h3>`;
    str += `<div class="other-night">`;

    let otherNightOrder;
    if (this.otherNightOrder) {
      otherNightOrder = this.otherNightOrder;
    } else {
      otherNightOrder = Script.nightorder.otherNight;
    }

    for (const [position, id] of otherNightOrder.entries()) {
      if (this.charSet.has(id)) {
        const char = new Character(id);
        if (char.otherNightReminder) {
          str += `<div class="item">`;
          str += `<img class="${iconCls(char)} handle" src="${char.icon}"/>`;
          str += `<div>`;
          str += `<div class="night-sheet-char-name">${char.name}</div>`;
          str += `<div class="night-sheet-reminder">${
            char.otherNightReminder.replaceAll(
              ":reminder:",
              '<i class="fa-regular fa-circle" style="font-size: 0.9em"></i>',
            )
          }</div>`;
          str += `</div>`;
          str += `</div>`;
        }
      }
      if (id === "DUSK" || id === "dusk") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">DUSK</div>`;
        str +=
          `<div>Check that all eyes are closed. Some travellers act.</div>`;
        str += `</div>`;
      }
      if (id === "DAWN" || id === "dawn") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">DAWN</div>`;
        str +=
          `<div>Wait approximately 10 seconds. Call for eyes open, then immediately announce which players (if any) died.</div>`;
        str += `</div>`;
      }
      if (this.otherNightOrder) {
        continue;
      }
      for (const charID of this.charSet) {
        const char = new Character(charID);
        if (char.otherNightOrder === position && !Character.data[charID]) {
          str += `<div class="item">`;
          str += `<img class="${iconCls(char)} handle" src="${char.icon}"/>`;
          str += `<div>`;
          str += `<div class="night-sheet-char-name">${char.name}</div>`;
          str += `<div class="night-sheet-reminder">${
            char.otherNightReminder.replaceAll(
              ":reminder:",
              '<i class="fa-regular fa-circle" style="font-size: 0.9em"></i>',
            )
          }</div>`;
          str += `</div>`;
          str += `</div>`;
        }
      }
    }
    str += `</div>`;
    str += `</div>`; // end first-night-container

    str += `</div>`;
    return str;
  }

  renderFabledSmall() {
    const iconCls = (c) => {
      let str = "";
      if (c.index("image")) {
        str += "imported-icon ";
      }
      if (this.almanac !== undefined) {
        str += "bloodstar";
      }
      return str.trim();
    };
    let str = `<div class="tiny-fabled">`;
    for (const c of this.fabled) {
      str += `<div class="item">`;
      str += `<img class="icon ${iconCls(c)}" src="${c.icon}" />`;
      str += `</div>`;
    }
    str += `</div>`;
    return str;
  }

  contains(character) {
    return this.charSet.has(character.id);
  }

  toJSON(prettyPrint) {
    prettyPrint = prettyPrint ?? false;
    const obj = [
      {
        "id": "_meta",
        "author": this._author,
        "name": this._name,
      },
      ...this.townsfolk.map((c) => c.toJSON()),
      ...this.outsiders.map((c) => c.toJSON()),
      ...this.minions.map((c) => c.toJSON()),
      ...this.demons.map((c) => c.toJSON()),
      ...this.travelers.map((c) => c.toJSON()),
      ...this.fabled.map((c) => c.toJSON()),
    ];
    if (this.almanac) {
      obj[0]["almanac"] = this.almanac;
    }
    if (this.firstNightOrder) {
      obj[0]["firstNight"] = this.firstNightOrder;
    }
    if (this.otherNightOrder) {
      obj[0]["otherNight"] = this.otherNightOrder;
    }
    if (prettyPrint) {
      return JSON.stringify(obj, null, 2);
    } else {
      return JSON.stringify(obj);
    }
  }
}
