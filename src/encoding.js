import { Character } from "./character.js";
import { Script } from "./script.js";

export function decompressScript(str) {
  const array = str.split("~");

  const chars = Character.flat.map((o) => o.id);
  const fabled = Character.fabledFlat.map((o) => o.id);
  const homebrew = Character.homebrewFlat.map((o) => o.id);

  const localScript = new Script();
  localScript.isRecording = false;
  localScript.name = array[0];
  localScript.author = array[1];

  for (let i = 2; i < array.length; i++) {
    const key = array[i];
    const idx = parseInt(key);
    if (key.includes("f")) {
      const char = new Character(fabled[idx]);
      localScript.add(char);
    } else if (key.includes("h")) {
      const char = new Character(homebrew[idx]);
      localScript.add(char);
    } else {
      const char = new Character(chars[idx]);
      localScript.add(char);
    }
  }

  localScript.timeline.addInstant(localScript.toJSON());
  localScript.timeline.forget();
  localScript.isRecording = true;

  return localScript;
}

export function compressScript(script) {
  // Only works for non-custom scripts
  const name = script.name;
  const author = script.author;
  const chars = script.allCharacters;

  const charsMap = {};
  for (const [i, c] of Character.flat.map((o) => o.id).entries()) {
    charsMap[c] = `${i}`;
  }
  for (const [i, c] of Character.fabledFlat.map((o) => o.id).entries()) {
    charsMap[c] = `${i}f`;
  }
  for (const [i, c] of Character.homebrewFlat.map((o) => o.id).entries()) {
    charsMap[c] = `${i}h`;
  }

  const indices = chars.map((c) => charsMap[c]);
  let str = JSON.stringify(indices);
  str = str.replaceAll('"', "");
  str = str.replaceAll(",", "~");
  str = str.replaceAll(/\[|\]/g, "");
  str = `${name}~${author}~${str}`;
  return str;
}
