import { Character } from "./character.js";
import { Script } from "./script.js";

let h1;
let characterInputEl;
let scriptNameInput;
let scriptAuthorInput;

const appName = "Unofficial BotC Script Tool";
const appVersion = "0.0.1";

function readFileDialog() {
  const input = document.createElement("input");
  input.type = "file";

  let file;
  input.addEventListener("change", function (event) {
    file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file, "UTF-8");
    reader.onload = function (readerEvent) {
      const content = readerEvent.target.result;
      if (typeof content === "string") {
        script.loadFromJSON(JSON.parse(content));
        renderScript();
        scriptNameInput.value = script.name;
        scriptAuthorInput.value = script.author;
      }
    };
  });
  input.click();
}

function writeDialogJSON(filename, contents) {
  const anchor = document.createElement("a");
  anchor.setAttribute(
    "href",
    "data:application/json;charset=utf-8," + encodeURIComponent(contents),
  );
  anchor.setAttribute("download", `${filename}.json`);
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}

// https://stackoverflow.com/a/8265310
function preloadImages(srcs) {
  function loadImage(src) {
    return new Promise(function (resolve, reject) {
      const img = new Image();
      img.onload = function () {
        resolve(img);
      };
      img.onerror = img.onabort = function () {
        reject(src);
      };
      img.src = src;
    });
  }

  const promises = [];
  for (let i = 0; i < srcs.length; i++) {
    promises.push(loadImage(srcs[i]));
  }

  return Promise.all(promises);
}

const thumbnails = [];
for (const charObj of Character.flat) {
  thumbnails.push(
    `src/assets/unofficial-icons/TinyIcon_${charObj.id}.webp`,
  );
}

preloadImages(thumbnails).then((_) => {
  console.log(`preloaded ${thumbnails.length} thumbnails`);
});

let script;

function renderScript() {
  h1.innerHTML = `${script.name}<span>by ${script.author}</span>`;
  document.querySelector("#script").innerHTML = script.render();
  // Add listeners to all icons
  document.querySelectorAll(".script img.icon").forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      script.remove(element.parentElement.id);
      renderScript();
    }, { once: true });
  });
}

function initStorage() {
  localStorage.clear();

  // set defaults
  localStorage.setItem("app-name", appName);
  localStorage.setItem("app-version", appVersion);
}

// Minor/Major version changes involve the first two version numbers.
// They generally add features and we should show the changelog.
function _atLeastMinorVersionChange() {
  const oldAppVersion = localStorage.getItem("app-version")
    .split(".")
    .map(parseInt);
  const currentVersion = appVersion.split(".").map(parseInt);

  const majorChange = currentVersion[0] > oldAppVersion[0];
  const minorChange = currentVersion[1] > oldAppVersion[1];

  return majorChange || minorChange;
}

globalThis.addEventListener("DOMContentLoaded", () => {
  if (localStorage.length === 0) {
    initStorage();
  }

  h1 = document.querySelector("h1");
  characterInputEl = document.querySelector("#character-input");
  scriptNameInput = document.querySelector("#script-name-input");
  scriptAuthorInput = document.querySelector("#script-author-input");

  script = new Script();

  if (localStorage.getItem("script")) {
    script.loadFromJSON(JSON.parse(localStorage.getItem("script")));
    scriptNameInput.value = script.name;
    scriptAuthorInput.value = script.author;
  }

  renderScript();

  if (localStorage.getItem("compact-night-sheet")) {
    const b = localStorage.getItem("compact-night-sheet");
    const checkbox = document.querySelector("#compact-night-sheet-checkbox");

    if (b === "true") {
      checkbox.checked = true;
      document.querySelector(".night-sheet").classList.add("compact");
    }
    if (b === "false") {
      checkbox.checked = false;
    }
  }

  document.getElementById("script-name-form").addEventListener(
    "input",
    function (event) {
      event.preventDefault();
      script.name = scriptNameInput.value;
      localStorage.setItem("script", script.toJSON());
    },
  );

  document.getElementById("script-author-form").addEventListener(
    "input",
    function (event) {
      event.preventDefault();
      script.author = scriptAuthorInput.value;
      localStorage.setItem("script", script.toJSON());
    },
  );

  document.getElementById("script-name-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
    },
  );

  document.getElementById("script-author-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
    },
  );

  document.querySelector("#character-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      const input = characterInputEl.value.toLowerCase();
      const result = Character.fuzzyMatch(input);
      const match = result.match;

      try {
        script.add(match);
        script.sort();
        renderScript();

        document.querySelector("#current-matches").innerHTML = "";
        localStorage.setItem("script", script.toJSON());
        characterInputEl.value = "";
      } catch (e) {
        console.error(e);
      }
    },
  );

  document.querySelector("#character-form").addEventListener(
    "input",
    function (_event) {
      const input = characterInputEl.value.toLowerCase();
      const result = Character.fuzzyMatch(input);
      const res = result.result;
      let html = "";
      for (let i = 0; i < res.length; i++) {
        html +=
          `<div class="match"><img class="thumbnail" src="src/assets/unofficial-icons/TinyIcon_${
            res[i][0]
          }.webp"/>` +
          res[i][1] + `</div>`;
      }
      document.querySelector("#current-matches").innerHTML = html;

      // Register click event for matches to add the character
      document.querySelectorAll("#current-matches .match").forEach(
        function (element, i) {
          element.addEventListener("click", function (event) {
            event.preventDefault();
            script.add(new Character(res[i][0]));
            script.sort();
            renderScript();

            document.querySelector("#current-matches").innerHTML = "";
            localStorage.setItem("script", script.toJSON());
            characterInputEl.value = "";
          });
        },
      );
    },
  );

  document.querySelector("#import-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      readFileDialog();
    },
  );

  document.querySelector("#export-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      writeDialogJSON(script.name, script.toJSON());
    },
  );

  document.querySelector("#clear-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      script.clear();
      scriptNameInput.value = "";
      scriptAuthorInput.value = "";
      renderScript();
    },
  );

  document.querySelector("#print-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      document.title = script.name;
      h1.innerHTML = `${script.name}<span>by ${script.author}</span>`;
      globalThis.print();
    },
  );

  document.querySelector("#compact-night-sheet-form").addEventListener(
    "change",
    function (event) {
      event.preventDefault();
      if (event.target.checked === true) {
        document.querySelector(".night-sheet").classList.add("compact");
        localStorage.setItem("compact-night-sheet", "true");
      } else {
        document.querySelector(".night-sheet").classList.remove("compact");
        localStorage.setItem("compact-night-sheet", "false");
      }
    },
  );

  globalThis.addEventListener("afterprint", function (_event) {
    document.title = appName;
  });

  globalThis.addEventListener("unload", function (_event) {
    localStorage.setItem("script", script.toJSON());
  });
});
