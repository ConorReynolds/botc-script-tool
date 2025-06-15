import { chars, commonHomebrew, fabled, jinxes } from "./data.js";

export class Character {
  id;

  isCustom = false;
  isFabled = false;
  isHomebrew = false;

  customJinxes = {};

  // Stores any custom characters that are uploaded.
  static custom = {};
  static customFlat = [];

  static homebrew = {};
  static homebrewFlat = commonHomebrew;

  static flat = chars;
  static fabledFlat = fabled;

  static data = {};
  static fabled = {};
  static commonHomebrew = {};
  static {
    this.flat.forEach((obj) => {
      this.data[obj.id] = obj;
    });
    this.fabledFlat.forEach((obj) => {
      this.fabled[obj.id] = obj;
    });
    this.homebrewFlat.forEach((obj) => {
      this.commonHomebrew[obj.id] = obj;
    });
  }

  // Can be initialised with an identifier for an official character. For
  // custom characters, all information needs to be provided by the user – need
  // to figure out how to support that (or if we want to bother).
  constructor(obj) {
    function strip(id) {
      return id.replaceAll("_", "").replaceAll("-", "");
    }

    if (typeof obj === "string") {
      const id = obj;
      // Probably an identifier for a character
      // Identifiers might have underscores or hyphens in them – remove them.
      // I think some old versions of tools may have produced scripts with them
      // left in, but who knows. The official tool does not have them. Custom
      // or homebrew characters should not be tinkered with.
      if (Character.custom[id]) {
        this.isCustom = true;
        this.id = id;
      } else if (Character.data[strip(id)]) {
        this.id = strip(id);
      } else if (Character.fabled[strip(id)]) {
        this.isFabled = true;
        this.id = strip(id);
      } else if (Character.commonHomebrew[id]) {
        this.isHomebrew = true;
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
      (Character.fabled[this.id] && Character.fabled[this.id][i]) ||
      (Character.commonHomebrew[this.id] &&
        Character.commonHomebrew[this.id][i]);
  }

  get name() {
    return this.index("name");
  }

  get summaryText() {
    const node = document.createElement("div");
    node.innerHTML = this.index("ability");

    return node.innerText;
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

  get setup() {
    return this.index("setup");
  }

  get reminders() {
    return this.index("reminders");
  }

  get remindersGlobal() {
    return this.index("remindersGlobal");
  }

  get wikilink() {
    // the display name works, but I added some proper apostrophes which need
    // to be reverted to straight quotes first
    const cleaned = this.name.replace("’", "'");
    return `https://wiki.bloodontheclocktower.com/${cleaned}`;
  }

  get icon() {
    if (this.index("edition") === "homebrew" && this.index("modifies")) {
      const char = new Character(this.index("modifies"));
      return `src/assets/custom-icons/Icon_${char.id}.webp`;
    } else if (this.index("image")) {
      return this.index("image");
    } else {
      return `src/assets/custom-icons/Icon_${this.id}.webp`;
    }
  }

  get tinyIcon() {
    if (this.index("edition") === "homebrew" && this.index("modifies")) {
      const char = new Character(this.index("modifies"));
      return `src/assets/custom-icons/TinyIcon_${char.id}.webp`;
    } else if (this.index("image")) {
      // no tiny icons for customs
      return this.index("image");
    } else {
      return `src/assets/custom-icons/TinyIcon_${this.id}.webp`;
    }
  }

  // Only gets the jinx if the jinx is on self – always check both sides.
  jinx(other) {
    // Deal with custom jinxes first – could override built-in ones
    if (this.customJinxes[other.id]) {
      return this.customJinxes[other.id];
    }
    if (jinxes[this.id]) {
      return jinxes[this.id][other.id];
    }
  }

  get summaryLength() {
    return this.summaryText.length;
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
      key = (o) => new Character(o.id).summaryText;
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

  get team() {
    if (this.type === "townsfolk" || this.type === "outsider") {
      return "good";
    } else if (this.type === "minion" || this.type === "demon") {
      return "evil";
    } else {
      return this.type;
    }
  }

  static parseNightReminderText(text) {
    const reminderToken = /\*(.*?)\*/g;
    const reminderIcon = ":reminder:";
    const ul = /\n(\t[\s\S]*?)\n([^\t]|$)/g;
    const li = /\t(.*?)\n/g;

    text = text + "\n";
    text = text.replaceAll(reminderToken, (_, match) => `<b>${match}</b>`);
    text = text.replaceAll(ul, (_, block, c) => `<ul>${block}\n</ul>${c}`);
    text = text.replaceAll(li, (_, line) => `<li>${line}</li>`);
    text = text.replaceAll(
      reminderIcon,
      '<i class="fa-solid fa-circle" style="font-size: 0.76em; color: #666; position: relative; top: -1px"></i>',
    );
    return text;
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

  toJSON(opts = {}) {
    const customJinxes = Object.entries(this.customJinxes).map((x) => {
      return {
        "id": x[0],
        "reason": x[1],
      };
    });
    if (this.isCustom) {
      return {
        "id": this.id,
        "name": this.name,
        "image": this.icon,
        "team": this.type,
        "ability": this.summary,
        "firstNight": this.firstNightOrder,
        "otherNight": this.otherNightOrder,
        "firstNightReminder": this.firstNightReminder || undefined,
        "otherNightReminder": this.otherNightReminder || undefined,
        "setup": this.setup,
        "reminders": this.reminders,
        "remindersGlobal": this.remindersGlobal,
        "jinxes": customJinxes.length === 0 ? undefined : customJinxes,
      };
    } else if (this.isHomebrew && opts.exporting) {
      const iconId = this.index("modifies") ?? this.id;
      const icon = this.index("image") ??
        `https://creynolds.ie/botc-script-tool/src/assets/custom-icons/ExportIcon_${iconId}.webp`;
      return {
        "id": this.id,
        "name": this.name,
        "image": icon,
        "team": this.type,
        "ability": this.summary,
        "firstNight": this.firstNightOrder,
        "otherNight": this.otherNightOrder,
        "firstNightReminder": this.firstNightReminder || undefined,
        "otherNightReminder": this.otherNightReminder || undefined,
        "setup": this.setup,
        "reminders": this.reminders,
        "remindersGlobal": this.remindersGlobal,
        "jinxes": customJinxes.length === 0 ? undefined : customJinxes,
      };
    } else if (customJinxes.length !== 0) {
      // This will not work with the official app. You’ll need to flesh this
      // out into a homebrew character with a different identifier, custom
      // image, ability text, etc., same way you’d make any other.
      return {
        "id": this.id,
        "jinxes": customJinxes,
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

    // Steven Approved Order (NEW)
    const prefixes = [
      "You start knowing",
      "At night",
      "Each dusk*",
      "Each night",
      "Each night*",
      "Each day",
      "Once per day",
      "Once per game, at night",
      "Once per game, at night*",
      "Once per game, during the day",
      "Once per game",
      "On your 1st night",
      "On your 1st day",
      // I have to guess that this was the intended terminal for this group,
      // otherwise the Xaan is out of order compared to the official tool. This
      // unfortunately then puts Riot out of sort order compared to the
      // official tool, but I think that this is correct and the official tool
      // is wrong. My guess is that everything is pre-sorted in the official
      // tool’s roles.json, and when Riot’s ability text was updated, they did
      // not update its position in the roles.json.
      "On",

      "You think",
      "You are",
      "You have",
      "You do not know",
      "You might",
      "You",

      "When you die",
      "When you learn that you died",
      "When",

      "If you die",
      "If you died",
      "If you are “mad”",
      "If you",
      "If the Demon dies",
      "If the Demon kills",
      "If the Demon",
      "If both",
      "If there are 5 or more players alive",
      "If",

      "All players",
      "All",

      "The 1st time",
      "The",

      "Good",
      "Evil",
      "Players",
      "Minions",
    ];

    let c1MatchLength = 0;
    let c2MatchLength = 0;

    let c1MatchIdx = prefixes.length;
    let c2MatchIdx = prefixes.length;

    // Figure out which prefix matches first. Always take the longest match.
    for (const [idx, prefix] of prefixes.entries()) {
      if (c1.summaryText.startsWith(prefix)) {
        if (c1MatchLength < prefix.length) {
          c1MatchIdx = idx;
          c1MatchLength = prefix.length;
        }
      }

      if (c2.summaryText.startsWith(prefix)) {
        if (c2MatchLength < prefix.length) {
          c2MatchIdx = idx;
          c2MatchLength = prefix.length;
        }
      }
    }

    if (c1MatchIdx < c2MatchIdx) {
      return -1;
    }

    if (c2MatchIdx < c1MatchIdx) {
      return 1;
    }

    if (c1.summaryLength < c2.summaryLength) {
      return -1;
    }
    if (c1.summaryLength > c2.summaryLength) {
      return 1;
    }
    if (c1.name.length < c2.name.length) {
      return -1;
    }
    if (c1.name.length > c2.name.length) {
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
