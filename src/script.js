import { Character } from "./character.js";
import { jinxes } from "./data.js";
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

  bootlegger;

  // undo/redo history for script
  timeline;
  isRecording;

  settings;

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
    this.settings = { autosort: true };
    this.isRecording = true;

    this.timeline = new Timeline(this.toJSON());
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
    this.settings = { autosort: true };

    this.recordState();
  }

  isEmpty() {
    const nchars = this.charSet.size;
    const noName = this._name === "";
    const noAuthor = this._author === "";
    return noName && noAuthor && nchars === 0;
  }

  recordState() {
    if (this.isRecording) {
      this.timeline.addInstant(this.toJSON());
    }
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
        this.bootlegger = item["bootlegger"];
        this.settings.autosort = item["autosort"];
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

          // Add custom jinxes for this character, if there are any
          const customJinxes = item["jinxes"] ?? [];
          for (const jinx of customJinxes) {
            const other = jinx["id"];
            const reason = jinx["reason"];

            char.customJinxes[other] = reason;
          }

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

    if (
      this.bootlegger && this.bootlegger.length > 0 &&
      !this.charSet.has("bootlegger")
    ) {
      this.add(new Character("bootlegger"));
    }

    if (this.settings.autosort === undefined) {
      this.settings.autosort = this.isSorted();
    }

    // If the script is a bloodstar import and has no explicit night order,
    // create one
    if (
      this.isBloodstar() && (!this.firstNightOrder && !this.otherNightOrder)
    ) {
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
    this.recordState();
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

    this.recordState();
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

    this.recordState();
  }

  get allCharacters() {
    return [].concat(
      this.townsfolk,
      this.outsiders,
      this.minions,
      this.demons,
      this.travelers,
      this.fabled,
    ).map((c) => c.id);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    this.recordState();
  }

  get author() {
    return this._author;
  }

  set author(newAuthor) {
    this._author = newAuthor;
    this.recordState();
  }

  addBootleggerRule(rule) {
    if (!this.bootlegger) {
      this.bootlegger = [];
    }

    this.bootlegger.push(rule);
    this.recordState();
  }

  removeBootleggerRule(idx) {
    this.bootlegger.splice(idx, 1);
    this.recordState();
  }

  setBootleggerRule(idx, rule) {
    this.bootlegger[idx] = rule;
    this.recordState();
  }

  isBloodstar() {
    return this.almanac && typeof this.almanac === "string" &&
      this.almanac.startsWith("https://www.bloodstar.xyz/");
  }

  loadTimeline(str) {
    const obj = JSON.parse(str);
    this.timeline = obj;
  }

  loadPrevious() {
    if (this.timeline.past.length === 1) {
      return false;
    }

    this.timeline.back();
    this.isRecording = false;
    this.loadFromJSON(JSON.parse(this.timeline.now()));
    this.isRecording = true;
    return true;
  }

  loadNext() {
    if (this.timeline.future.length === 0) {
      return false;
    }

    this.timeline.forward();
    this.isRecording = false;
    this.loadFromJSON(JSON.parse(this.timeline.now()));
    this.isRecording = true;
    return true;
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

  isSorted() {
    const result = [this.townsfolk, this.outsiders, this.minions, this.demons]
      .every(
        (ls) =>
          ls.every((c, idx, cs) =>
            idx === 0 || Character.compare(cs[idx - 1], c) <= 0
          ),
      );
    return result;
  }

  render() {
    const iconCls = (c) => {
      let str = "";
      if (c.index("image")) {
        str += "imported-icon ";
      }
      if (this.isBloodstar()) {
        str += "bloodstar";
      }
      return str.trim();
    };
    const wikilink = (c) => {
      if (!c.isCustom && !c.isHomebrew) {
        return c.wikilink;
      } else if (this.isBloodstar()) {
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
        const wiki = wikilink(c);
        if (wiki !== "#") {
          str +=
            `<a title="Read more about the ${c.name}" href="${wiki}" target="_blank">${c.name}</a>`;
        } else {
          str += `<span>${c.name}</span>`;
        }
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
      const wiki = wikilink(c);
      if (wiki !== "#") {
        str +=
          `<a title="Read more about the ${c.name}" href="${wiki}" target="_blank">${c.name}</a>`;
      } else {
        str += `<span>${c.name}</span>`;
      }
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
      const wiki = wikilink(c);
      if (wiki !== "#") {
        str +=
          `<a title="Read more about the ${c.name}" href="${wiki}" target="_blank">${c.name}</a>`;
      } else {
        str += `<span>${c.name}</span>`;
      }
      str += `</h4>`;
      str += `<div class="character-summary">${c.summary}</div>`;
      str += `</div>`;
      str += `</div>`;
    }
    str += `</div>`; // end travelers-and-fabled
    str += `</div>`; // end travelers-and-fabled-container

    // if (
    //   (this.bootlegger && this.bootlegger.length > 0) ||
    //   this.charSet.has("bootlegger")
    // ) {
    const hasRules = (this.bootlegger && this.bootlegger.length > 0) ||
      this.charSet.has("bootlegger");

    str += `<div class="bootlegger-rules-container ${
      !hasRules ? "hidden" : ""
    }">`;
    str +=
      `<h3 class="bootlegger-rules-heading"><span>BOOTLEGGER RULES<button id="add-bootlegger-rule" class="noprint" title="Add bootlegger rule"><i class="fa-solid fa-plus"></i></button></span></h3>`;
    str += `<div class="bootlegger-rules">`;

    for (const [idx, rule] of (this.bootlegger ?? []).entries()) {
      str += `<div class="item" data-idx="${idx}">`;
      str +=
        `<img class="icon" src="src/assets/custom-icons/Icon_bootlegger.webp"/>`;
      str +=
        `<div class="rule" contenteditable="plaintext-only" placeholder="New bootlegger rule …" spellcheck="false">${rule}</div>`;
      str += `</div>`;
    }
    str += `</div>`;

    str += `</div>`;
    // }

    str += `<div class="night-sheet">`;

    str += `<div class="first-night-container">`;
    str += `<h3><span>FIRST NIGHT</span></h3>`;
    str += `<div class="first-night">`;

    const firstNightOrder = this.firstNightOrder ||
      Script.nightorder.firstNight;

    for (const [position, id] of firstNightOrder.entries()) {
      if (this.charSet.has(id)) {
        const char = new Character(id);
        if (char.firstNightReminder) {
          str += `<div class="item">`;
          str += `<img class="${iconCls(char)} handle" src="${char.icon}"/>`;
          str += `<div>`;
          str += `<div class="night-sheet-char-name">`;
          const wiki = wikilink(char);
          if (wiki !== "#") {
            str +=
              `<a title="Read more about the ${char.name}" href="${wiki}" target="_blank">${char.name}</a>`;
          } else {
            str += `<span>${char.name}</span>`;
          }
          str += `</div>`; // end night-sheet-char-name
          str += `<div class="night-sheet-reminder">${
            Character.parseNightReminderText(char.firstNightReminder)
          }</div>`;
          str += `</div>`;
          str += `</div>`;
        }
      }
      if (id === "MINION" || id === "minioninfo" || id === "minion") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">MINION</div>`;
        str +=
          `<div>If there are 7 or more players, wake the Minions. Show the <b>THIS IS THE DEMON</b> token & point to the Demon.</div>`;
        str += `</div>`;
      }
      if (id === "DEMON" || id === "demoninfo" || id === "demon") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">DEMON</div>`;
        str +=
          `<div>If there are 7 or more players, wake the Demon. Show the <b>THESE ARE YOUR MINIONS</b> token & point to all Minions. Show the <b>THESE CHARACTERS ARE NOT IN PLAY</b> token & show 3 not-in-play good character tokens.</div>`;
        str += `</div>`;
      }
      if (id === "DUSK" || id === "dusk") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">DUSK</div>`;
        str += `<div>Start the Night Phase.</div>`;
        str += `</div>`;
      }
      if (id === "DAWN" || id === "dawn") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">DAWN</div>`;
        str += `<div>Wait for a few seconds. End the Night Phase.</div>`;
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
          str += `<div class="night-sheet-char-name">`;
          const wiki = wikilink(char);
          if (wiki !== "#") {
            str +=
              `<a title="Read more about the ${char.name}" href="${wiki}" target="_blank">${char.name}</a>`;
          } else {
            str += `<span>${char.name}</span>`;
          }
          str += `</div>`; // end night-sheet-char-name
          str += `<div class="night-sheet-reminder">${
            Character.parseNightReminderText(char.firstNightReminder)
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
          str += `<div class="night-sheet-char-name">`;
          const wiki = wikilink(char);
          if (wiki !== "#") {
            str +=
              `<a title="Read more about the ${char.name}" href="${wiki}" target="_blank">${char.name}</a>`;
          } else {
            str += `<span>${char.name}</span>`;
          }
          str += `</div>`; // end night-sheet-char-name
          str += `<div class="night-sheet-reminder">${
            Character.parseNightReminderText(char.otherNightReminder)
          }</div>`;
          str += `</div>`;
          str += `</div>`;
        }
      }
      if (id === "DUSK" || id === "dusk") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">DUSK</div>`;
        str += `<div>Start the Night Phase.</div>`;
        str += `</div>`;
      }
      if (id === "DAWN" || id === "dawn") {
        str += `<div class="item">`;
        str += `<div class="night-order-text handle">DAWN</div>`;
        str += `<div>Wait for a few seconds. End the Night Phase.</div>`;
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
          str += `<div class="night-sheet-char-name">`;
          const wiki = wikilink(char);
          if (wiki !== "#") {
            str +=
              `<a title="Read more about the ${char.name}" href="${wiki}" target="_blank">${char.name}</a>`;
          } else {
            str += `<span>${char.name}</span>`;
          }
          str += `</div>`; // end night-sheet-char-name
          str += `<div class="night-sheet-reminder">${
            Character.parseNightReminderText(char.otherNightReminder)
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
      if (this.isBloodstar()) {
        str += "bloodstar";
      }
      return str.trim();
    };
    const hasBootleggerRules = this.bootlegger && this.bootlegger.length > 0;
    const fabled = hasBootleggerRules && !this.charSet.has("bootlegger")
      ? this.fabled.concat(new Character("bootlegger"))
      : this.fabled;

    let str = `<div class="tiny-fabled">`;
    for (const c of fabled) {
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

  toJSON(opts = {}) {
    const obj = [
      {
        "id": "_meta",
        "author": this._author,
        "name": this._name,
      },
      ...this.townsfolk.map((c) => c.toJSON({ exporting: opts.exporting })),
      ...this.outsiders.map((c) => c.toJSON({ exporting: opts.exporting })),
      ...this.minions.map((c) => c.toJSON({ exporting: opts.exporting })),
      ...this.demons.map((c) => c.toJSON({ exporting: opts.exporting })),
      ...this.travelers.map((c) => c.toJSON({ exporting: opts.exporting })),
      ...this.fabled.map((c) => c.toJSON({ exporting: opts.exporting })),
    ];
    if (opts.exporting === undefined || opts.exporting === false) {
      obj[0]["autosort"] = this.settings.autosort;
    }
    if (this.almanac) {
      obj[0]["almanac"] = this.almanac;
    }
    if (this.firstNightOrder) {
      obj[0]["firstNight"] = this.firstNightOrder;
    }
    if (this.otherNightOrder) {
      obj[0]["otherNight"] = this.otherNightOrder;
    }
    if (this.bootlegger) {
      obj[0]["bootlegger"] = this.bootlegger;
    }
    if (opts.prettyPrint) {
      return JSON.stringify(obj, null, 2);
    } else {
      return JSON.stringify(obj);
    }
  }
}
