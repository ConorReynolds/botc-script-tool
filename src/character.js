import { getTextWidth } from "./utils.js";
import { chars, fabled, jinxes, sao } from "./data.js";

export class Character {
  id;

  isCustom = false;
  isFabled = false;

  // Stores any custom characters that are uploaded.
  static custom = {};
  static customFlat = [];

  static flat = chars;
  static fabledFlat = fabled;
  // temporary dataset before I merge everything
  static sao = sao;
  static data = {};
  static fabled = {};
  static {
    this.flat.forEach((obj) => {
      this.data[obj.id] = obj;
    });
    this.fabledFlat.forEach((obj) => {
      this.fabled[obj.id] = obj;
    });
  }

  // Can be initialised with an identifier for an official character. For
  // custom characters, all information needs to be provided by the user – need
  // to figure out how to support that (or if we want to bother).
  constructor(obj) {
    if (typeof obj === "string") {
      // Probably an identifier for a character
      const id = obj;
      if (Character.custom[id]) {
        this.isCustom = true;
        this.id = id;
      } else if (Character.data[id]) {
        this.id = id;
      } else if (Character.fabled[id]) {
        this.isFabled = true;
        this.id = id;
      } else {
        throw new Error(`can’t find character with id ‘${id}’`);
      }
    }
  }

  static clearCustoms() {
    Character.custom = {};
    Character.customFlat = [];
  }

  index(i) {
    return (Character.custom[this.id] && Character.custom[this.id][i]) ||
      (Character.data[this.id] && Character.data[this.id][i]) ||
      (Character.fabled[this.id] && Character.fabled[this.id][i]);
  }

  get name() {
    return this.index("name");
  }

  get summary() {
    return this.index("ability");
  }

  get type() {
    return this.index("team");
  }

  get homeScript() {
    return this.index("edition");
  }

  get firstNightReminder() {
    return this.index("firstNightReminder");
  }

  get otherNightReminder() {
    return this.index("otherNightReminder");
  }

  get wikilink() {
    // the display name works, but I added some proper apostrophes which need
    // to be reverted to straight quotes first
    const cleaned = this.name.replace("’", "'");
    return `https://wiki.bloodontheclocktower.com/${cleaned}`;
  }

  get icon() {
    if (this.index("image")) {
      return this.index("image");
    } else {
      return `src/assets/custom-icons/Icon_${this.id}.webp`;
    }
  }

  get tinyIcon() {
    if (this.index("image")) {
      // no tiny icons for customs
      return this.index("image");
    } else {
      return `src/assets/custom-icons/TinyIcon_${this.id}.webp`;
    }
  }

  // Only gets the jinx if the jinx is on self – always check both sides.
  jinx(other) {
    // Object is indexed by display name. Should change it to ID eventually.
    const thisName = this.name;
    const otherName = other.name;

    if (jinxes[thisName]) {
      return jinxes[thisName][otherName];
    }
  }

  get summaryLength() {
    return getTextWidth(this.summary);
  }

  static nameToID(name) {
    let id = name;
    id = id.replaceAll("’", "");
    id = id.replaceAll(" ", "_");
    id = id.toLowerCase();
    return id;
  }

  static fuzzyMatch(str) {
    const re = /has:(?<hasQuery>.*)/;
    const command = str.match(re);
    const hasQuery = command?.groups.hasQuery;
    const characters = Character.customFlat
      .concat(Character.flat)
      .concat(Character.fabledFlat);

    let results, key;
    if (hasQuery) {
      key = "ability";
      results = fuzzysort.go(
        hasQuery,
        characters,
        { key: key, threshold: 0.4 },
      );
    } else {
      key = "name";
      results = fuzzysort.go(
        str,
        characters,
        { key: key, limit: 8 },
      );
    }

    if (results.length === 0) {
      return {
        key: key,
        result: [],
        match: null,
      };
    }
    // This isn’t a very convenient way to present the results.
    return {
      key: key,
      result: results.map((r) => [r.obj, r.highlight("<b>", "</b>")]),
      match: new Character(results[0].obj.id),
    };
  }

  get firstNightOrder() {
    if (this.isCustom) {
      return this.index("firstNight") ?? -1;
    } else {
      return null;
    }
  }

  get otherNightOrder() {
    if (this.isCustom) {
      return this.index("otherNight") ?? -1;
    } else {
      return null;
    }
  }

  get firstNight() {
    return Character.sao[this.id]["first night"];
  }

  get eachNight() {
    return Character.sao[this.id]["each night"];
  }

  get eachNightStar() {
    return Character.sao[this.id]["each night*"];
  }

  get day() {
    return Character.sao[this.id]["day"];
  }

  get oncePerGame() {
    return Character.sao[this.id]["once per game"];
  }

  get actsOnTrigger() {
    return Character.sao[this.id]["on trigger"];
  }

  get isPassive() {
    return Character.sao[this.id]["passive"];
  }

  get team() {
    if (this.type === "townsfolk" || this.type === "outsider") {
      return "good";
    } else if (this.type === "minion" || this.type === "demon") {
      return "evil";
    } else {
      return this.type;
    }
  }

  static typeRank(t) {
    switch (t) {
      case "townsfolk":
        return 1;
      case "outsider":
        return 2;
      case "minion":
        return 3;
      case "demon":
        return 4;
      case "traveler":
        return 5;
      case "fabled":
        return 6;
      default:
        throw Error(`not a valid character type: ${t}`);
    }
  }

  toJSON() {
    if (this.isCustom) {
      return {
        "id": this.id,
        "name": this.name,
        "image": this.icon,
        "team": this.type,
        "ability": this.summary,
        "firstNight": this.firstNightOrder,
        "otherNight": this.otherNightOrder,
        "firstNightReminder": this.firstNightReminder,
        "otherNightReminder": this.otherNightReminder,
      };
    } else {
      return { "id": this.id };
    }
  }

  static compare(c1, c2) {
    // Ignore custom characters entirely
    if (c1.isCustom || c2.isCustom) {
      return 0;
    }

    // Sort teams and types.
    const type1 = Character.typeRank(c1.type);
    const type2 = Character.typeRank(c2.type);

    if (type1 < type2) {
      return -1;
    }
    if (type1 > type2) {
      return 1;
    }

    // Standard Amy Order
    // - first night
    // - every night
    // - every night*
    // - day
    // - once per game
    // - on trigger or passive
    // - length of ability text
    // The official scripts do not always follow this order precisely. For
    // example, in TB, the order is: Washerwoman, Librarian, Investigator,
    // because the abilities can detect (in order) Townsfolk, Outsiders, and
    // Minions.

    // Create a binary string out of the conditions and compare the strings
    // lexicographically.
    const c1CompareString = [
      c1.firstNight,
      c1.eachNight,
      c1.eachNightStar,
      c1.day,
      c1.oncePerGame,
      c1.actsOnTrigger || c1.isPassive,
    ]
      .map((b) => (b ? 0 : 1))
      .join("");
    const c2CompareString = [
      c2.firstNight,
      c2.eachNight,
      c2.eachNightStar,
      c2.day,
      c2.oncePerGame,
      c2.actsOnTrigger || c2.isPassive,
    ]
      .map((b) => (b ? 0 : 1))
      .join("");

    if (c1CompareString < c2CompareString) {
      return -1;
    }
    if (c1CompareString > c2CompareString) {
      return 1;
    }
    if (c1.summaryLength < c2.summaryLength) {
      return -1;
    }
    if (c1.summaryLength > c2.summaryLength) {
      return 1;
    }
    if (c1.name < c2.name) {
      return -1;
    }
    if (c1.name > c2.name) {
      return 1;
    }

    return 0;
  }
}
