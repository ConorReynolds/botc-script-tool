import { Character } from "./character.js";
import { nightorder } from "./nightorder.js";

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

  static nightorder = nightorder;

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
      const [i, chars] of [
        this.townsfolk,
        this.outsiders,
        this.minions,
        this.demons,
      ]
        .entries()
    ) {
      const plural = Script.asType(i) === "townsfolk"
        ? Script.asType(i)
        : Script.asType(i) + "s";
      str += `<h3><span>${plural?.toUpperCase()}</span></h3>`;
      str += `<div nitems="${chars.length}" class="${
        Script.asType(i)?.toLowerCase()
      }">`;
      for (const c of chars) {
        str += `<div id="${c.id}" class="item">`;
        if (c.iconSrc) {
          str +=
            `<img id="${c.id}-icon-script" title="Remove the ${c.name}" class="icon imported-icon" src="${c.iconSrc}"/>`;
        } else {
          str +=
            `<img id="${c.id}-icon-script" title="Remove the ${c.name}" class="icon" src="src/assets/unofficial-icons/Icon_${c.id}.webp"/>`;
        }
        str += `<div class="name-and-summary">`;
        str += `<h4 class="character-name">`;
        str +=
          `<a title="Read more about the ${c.name}" href="${c.wikilink}" target="_blank">${c.name}</a>`;
        for (const otherID of this.charSet) {
          const other = new Character(otherID);
          const jinx = c.jinx(other);
          if (jinx) {
            str +=
              `<img title="${jinx}" class="jinx-icon" onclick="location.assign('#${c.id}-${other.id}-jinx')" src="src/assets/unofficial-icons/TinyIcon_${other.id}.webp"/>`;
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
    str += `</div>`;

    str += `<div class="night-sheet">`;

    str += `<div class="first-night-container">`;
    str += `<h3><span>FIRST NIGHT</span></h3>`;
    str += `<div class="first-night">`;
    for (const name of Script.nightorder.firstNight) {
      if (this.charSet.has(Character.nameToID(name))) {
        const char = new Character(Character.nameToID(name));
        if (char.firstNightReminder) {
          str += `<div class="item">`;
          str +=
            `<img src="src/assets/unofficial-icons/Icon_${char.id}.webp"/>`;
          str += `<div>`;
          str += `<div class="night-sheet-char-name">${char.name}</div>`;
          str +=
            `<div class="night-sheet-reminder">${char.firstNightReminder}</div>`;
          str += `</div>`;
          str += `</div>`;
        }
      }
      if (name === "MINION") {
        str += `<div class="item">`;
        str += `<div class="night-order-text">MINION</div>`;
        str += `<div>Minion info</div>`;
        str += `</div>`;
      }
      if (name === "DEMON") {
        str += `<div class="item">`;
        str += `<div class="night-order-text">DEMON</div>`;
        str += `<div>Demon info</div>`;
        str += `</div>`;
      }
      if (name === "DUSK") {
        str += `<div class="item">`;
        str += `<div class="night-order-text">DUSK</div>`;
        str +=
          `<div>Check that all eyes are closed. Some travellers act.</div>`;
        str += `</div>`;
      }
      if (name === "DAWN") {
        str += `<div class="item">`;
        str += `<div class="night-order-text">DAWN</div>`;
        str +=
          `<div>Wait approximately 10 seconds. Call for eyes open, then immediately announce which players (if any) died.</div>`;
        str += `</div>`;
      }
    }
    str += `</div>`;
    str += `</div>`;

    str += `<div class="other-night-container">`;
    str += `<h3><span>OTHER NIGHTS</span></h3>`;
    str += `<div class="other-night">`;
    for (const name of Script.nightorder.otherNight) {
      if (this.charSet.has(Character.nameToID(name))) {
        const char = new Character(Character.nameToID(name));
        if (char.otherNightReminder) {
          str += `<div class="item">`;
          str +=
            `<img src="src/assets/unofficial-icons/Icon_${char.id}.webp"/>`;
          str += `<div>`;
          str += `<div class="night-sheet-char-name">${char.name}</div>`;
          str +=
            `<div class="night-sheet-reminder">${char.otherNightReminder}</div>`;
          str += `</div>`;
          str += `</div>`;
        }
      }
      if (name === "DUSK") {
        str += `<div class="item">`;
        str += `<div class="night-order-text">DUSK</div>`;
        str +=
          `<div>Check that all eyes are closed. Some travellers act.</div>`;
        str += `</div>`;
      }
      if (name === "DAWN") {
        str += `<div class="item">`;
        str += `<div class="night-order-text">DAWN</div>`;
        str +=
          `<div>Wait approximately 10 seconds. Call for eyes open, then immediately announce which players (if any) died.</div>`;
        str += `</div>`;
      }
    }
    str += `</div>`;
    str += `</div>`; // end first-night-container

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
