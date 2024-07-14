import { Character } from "./character.js";
import { jinxes } from "./data.js";

// Need a full list of characters that can be added.
export class Script {
  author;
  name;
  townsfolk;
  outsiders;
  minions;
  demons;
  charSet;
  jinxList;

  constructor() {
    this.townsfolk = [];
    this.outsiders = [];
    this.minions = [];
    this.demons = [];
    this.name = "";
    this.author = "";
    this.charSet = new Set();
    this.jinxList = [];
  }

  // I don’t know if it’s possible to just call the constructor on self again,
  // but at some point the constructor and clear function might diverge so
  // this is probably fine
  clear() {
    this.townsfolk = [];
    this.outsiders = [];
    this.minions = [];
    this.demons = [];
    this.name = "";
    this.author = "";
    this.charSet = new Set();
    this.jinxList = [];
  }

  loadFromJSON(obj) {
    // This function needs to be generalised to accomodate completely custom
    // characters. Just replacing icons is fine but really all parts of the
    // character object should be overwritable.
    if (!Array.isArray(obj)) {
      console.error(obj);
      throw Error("Invalid JSON – can’t parse script.");
    }

    this.clear();

    for (const item of obj) {
      if (typeof item === "object" && item["id"] === "_meta") {
        this.name = item["name"] ? item["name"] : "";
        this.author = item["author"] ? item["author"] : "";
      }

      if (typeof item === "object" && item["id"] !== "_meta") {
        try {
          const char = new Character(item["id"]);
          if (item["image"]) {
            char.iconSrc = item["image"];
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

    this.sort();
  }

  static asType(n) {
    switch (n) {
      case 0:
        return "Townsfolk";
      case 1:
        return "Outsider";
      case 2:
        return "Minion";
      case 3:
        return "Demon";
    }
  }

  remove(cid) {
    this.charSet.delete(cid);

    const char = new Character(cid);
    if (char.type === "Townsfolk") {
      const idx = this.townsfolk.findIndex((c) => c.id === char.id);
      this.townsfolk.splice(idx, 1);
    }
    if (char.type === "Outsider") {
      const idx = this.outsiders.findIndex((c) => c.id === char.id);
      this.outsiders.splice(idx, 1);
    }
    if (char.type === "Minion") {
      const idx = this.minions.findIndex((c) => c.id === char.id);
      this.minions.splice(idx, 1);
    }
    if (char.type === "Demon") {
      const idx = this.demons.findIndex((c) => c.id === char.id);
      this.demons.splice(idx, 1);
    }

    let idx;
    while (
      (idx = this.jinxList.findIndex((e) =>
        e.char1 === cid || e.char2 === cid
      )) !== -1
    ) {
      this.jinxList.splice(idx, 1);
    }
  }

  add(newChar) {
    this.charSet.add(newChar.id);

    switch (newChar.type) {
      case "Townsfolk":
        if (this.townsfolk.some((c0) => newChar.id === c0.id)) {
          break;
        }
        this.townsfolk.push(newChar);
        break;
      case "Outsider":
        if (this.outsiders.some((c0) => newChar.id === c0.id)) {
          break;
        }
        this.outsiders.push(newChar);
        break;
      case "Minion":
        if (this.minions.some((c0) => newChar.id === c0.id)) {
          break;
        }
        this.minions.push(newChar);
        break;
      case "Demon":
        if (this.demons.some((c0) => newChar.id === c0.id)) {
          break;
        }
        this.demons.push(newChar);
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
  }

  sort() {
    this.townsfolk.sort(Character.compare);
    this.outsiders.sort(Character.compare);
    this.minions.sort(Character.compare);
    this.demons.sort(Character.compare);

    this.jinxList.sort((o1, o2) =>
      Character.compare(new Character(o1.char1), new Character(o2.char1)) ||
      Character.compare(new Character(o1.char2), new Character(o2.char2))
    );
  }

  render() {
    let str = `<div class="script">`;
    for (
      const [i, a] of [
        this.townsfolk,
        this.outsiders,
        this.minions,
        this.demons,
      ]
        .entries()
    ) {
      const plural = Script.asType(i) === "Townsfolk"
        ? Script.asType(i)
        : Script.asType(i) + "s";
      str += `<h3><span>${plural?.toUpperCase()}</span></h3>`;
      str += `<div nitems="${a.length}" class="${
        Script.asType(i)?.toLowerCase()
      }">`;
      for (const c of a) {
        str += `<div id="${c.id}" class="item">`;
        if (c.iconSrc) {
          str +=
            `<img id="${c.id}-icon-script" class="icon imported-icon" src="${c.iconSrc}"/>`;
        } else {
          str +=
            `<img id="${c.id}-icon-script" class="icon" src="src/assets/unofficial-icons/Icon_${c.id}.webp"/>`;
        }
        str += `<div class="name-and-summary">`;
        str +=
          `<h4 class="character-name"><a href="${c.wikilink}" target="_blank">${c.name}</a></h4>`;
        str += `<div class="character-summary">${c.summary}</div>`;
        str += `</div>`;
        str += `</div>`;
      }
      str += `</div>`;
    }
    str += `</div>`;

    str += `<h3 class="jinxes-heading onlyprint"><span>JINXES</span></h3>`;
    str += `<div nitems="${this.jinxList.length}" class="jinxes">`;
    for (const jinx of this.jinxList) {
      const c1 = new Character(jinx.char1);
      const c2 = new Character(jinx.char2);
      str += `<div id="${c1.id}-${c2.id}-jinx" class="item">`;
      str += `<div class="icons">`;
      str +=
        `<img id="${c1.id}-icon-jinxes" class="icon" src="src/assets/unofficial-icons/Icon_${c1.id}.webp"/>`;
      str +=
        `<img id="${c2.id}-icon-jinxes" class="icon" src="src/assets/unofficial-icons/Icon_${c2.id}.webp"/>`;
      str += `</div>`;

      str += `<div class="jinx-text">`;
      str += jinx.jinx;
      str += `</div>`;

      str += `</div>`;
    }
    str += `</div>`;
    return str;
  }

  toJSON() {
    const obj = [
      {
        "id": "_meta",
        "author": this.author,
        "name": this.name,
      },
      ...this.townsfolk.map((c) => c.id),
      ...this.outsiders.map((c) => c.id),
      ...this.minions.map((c) => c.id),
      ...this.demons.map((c) => c.id),
    ];
    return JSON.stringify(obj);
  }
}
