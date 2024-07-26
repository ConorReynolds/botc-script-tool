import { AppState } from "./state.js";
import { Character } from "./character.js";
import { Script } from "./script.js";
import { Timeline } from "./timeline.js";

let h1;
let characterInputEl;
let scriptNameInput;
let scriptAuthorInput;

const appName = "Unofficial BotC Script Tool";
const appVersion = "0.1.0";

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
        appState.currentScript.loadFromJSON(JSON.parse(content));
        renderScript();
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
for (const charObj of Character.flat.filter((c) => c["team"] !== "traveler")) {
  thumbnails.push(
    `src/assets/custom-icons/TinyIcon_${charObj.id}.webp`,
  );
}

preloadImages(thumbnails).then((_) => {
  console.log(`preloaded ${thumbnails.length} thumbnails`);
});

let appState;

function undo() {
  appState.currentScript.loadPrevious();
  renderScript();
}

function redo() {
  appState.currentScript.loadNext();
  renderScript();
}

function compressScript() {
  // Only works for non-custom scripts
  const name = appState.currentScript.name;
  const author = appState.currentScript.author;
  const chars = Array.from(appState.currentScript.charSet);
  const allChars = Character.flat.concat(Character.fabledFlat).map((o) => o.id);

  chars.sort();
  allChars.sort();

  const charsMap = {};
  for (const [i, c] of allChars.entries()) {
    charsMap[c] = i;
  }

  const indices = chars.map((c) => charsMap[c]);
  return JSON.stringify([name, author, ...indices]);
}

function decompressScript(str) {
  const array = JSON.parse(str);

  const allChars = Character.flat.concat(Character.fabledFlat).map((o) => o.id);
  allChars.sort();

  const localScript = new Script();
  localScript.name = array[0];
  localScript.author = array[1];

  for (let i = 2; i < array.length; i++) {
    const char = new Character(allChars[array[i]]);
    localScript.add(char);
  }

  return localScript;
}

function renderScript(store) {
  const shouldStore = store ?? true;

  scriptNameInput.value = appState.currentScript.name;
  scriptAuthorInput.value = appState.currentScript.author;

  h1.innerHTML =
    `${appState.currentScript.name}<span>by ${appState.currentScript.author}</span>`;
  document.querySelector("#script").innerHTML = appState.currentScript.render();
  document.querySelector("#fabled-icon-container").innerHTML = appState
    .currentScript
    .renderFabledSmall();
  if (localStorage.getItem("compact-night-sheet") === "true") {
    document.querySelector(".night-sheet").classList.add("compact");
  }
  // Add listeners to all icons
  document.querySelectorAll(
    ".script img.icon, .travelers-and-fabled-container img.icon",
  ).forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      appState.currentScript.remove(element.parentElement.id);
      renderScript();
    }, { once: true });
  });

  if (shouldStore) {
    localStorage.setItem(
      "script-history",
      appState.currentScript.timeline.serialize(),
    );
  }

  globalThis.dispatchEvent(new Event("scriptrendered"));
}

function initStorage() {
  localStorage.clear();

  // set defaults
  localStorage.setItem("app-name", appName);
  localStorage.setItem("app-version", appVersion);
}

// Minor/Major version changes involve the first two version numbers.
// They generally add features and we should show the changelog.
function atLeastMinorVersionChange() {
  if (!localStorage.getItem("app-version")) {
    initStorage();
    return;
  }

  const oldAppVersion = localStorage.getItem("app-version")
    .split(".")
    .map((n) => parseInt(n));
  const currentVersion = appVersion.split(".").map((c) => parseInt(c));

  const majorChange = currentVersion[0] > oldAppVersion[0];
  const minorChange = currentVersion[1] > oldAppVersion[1];

  return majorChange || minorChange;
}

globalThis.addEventListener("DOMContentLoaded", () => {
  if (localStorage.length === 0) {
    initStorage();
  }
  if (atLeastMinorVersionChange()) {
    initStorage();
    // Ideally we could warn beforehand
    console.log(`New version: ${appVersion}`);
    console.log("Clearing local storage");
  }

  h1 = document.querySelector("h1");
  characterInputEl = document.querySelector("#character-input");
  scriptNameInput = document.querySelector("#script-name-input");
  scriptAuthorInput = document.querySelector("#script-author-input");

  if (localStorage.getItem("script")) {
    const script = new Script();
    script.loadFromJSON(
      JSON.parse(localStorage.getItem("script")),
    );
    appState = new AppState([script]);
    if (localStorage.getItem("script-history")) {
      appState.currentScript.timeline = Timeline.deserialize(
        localStorage.getItem("script-history"),
      );
    }
  }

  if (!appState) {
    appState = new AppState([new Script()]);
  }

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("script")) {
    const script = decompressScript(urlParams.get("script"));
    appState.addScriptAndFocus(script);

    // Normally don’t have to sort when loading from local storage since it is
    // always stored sorted, but URL param scripts are not sorted.
    appState.currentScript.sort();
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

  globalThis.addEventListener("keydown", function (event) {
    if (event.shiftKey) {
      return;
    }
    // Returns true for iPhones also but that doesn’t matter
    if (onMac && event.metaKey && event.key === "z") {
      undo();
    } else if (!onMac && event.ctrlKey && event.key === "z") {
      undo();
    }
  });

  globalThis.addEventListener("keydown", function (event) {
    if (onMac && event.metaKey && event.shiftKey && event.key === "z") {
      redo();
    } else if (!onMac && event.ctrlKey && event.shiftKey && event.key === "z") {
      redo();
    }
  });

  globalThis.addEventListener("keydown", function (event) {
    if (event.metaKey && event.shiftKey && event.key === "ArrowDown") {
      const _success = appState.nextScript();
      console.log(`next script: ${appState.currentScript.name}`);
      renderScript();
    }
  });

  globalThis.addEventListener("keydown", function (event) {
    if (event.metaKey && event.shiftKey && event.key === "ArrowUp") {
      const _success = appState.prevScript();
      console.log(`prev script: ${appState.currentScript.name}`);
      renderScript();
    }
  });

  document.getElementById("script-name-form").addEventListener(
    "input",
    function (event) {
      event.preventDefault();
      appState.currentScript.name = scriptNameInput.value;
      h1.innerHTML =
        `${appState.currentScript.name}<span>by ${appState.currentScript.author}</span>`;
      localStorage.setItem("script", appState.currentScript.toJSON());
    },
  );

  document.getElementById("script-author-form").addEventListener(
    "input",
    function (event) {
      event.preventDefault();
      appState.currentScript.author = scriptAuthorInput.value;
      h1.innerHTML =
        `${appState.currentScript.name}<span>by ${appState.currentScript.author}</span>`;
      localStorage.setItem("script", appState.currentScript.toJSON());
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
        appState.currentScript.add(match);
        appState.currentScript.sort();
        renderScript();

        document.querySelector("#current-matches").innerHTML = "";
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
        const char = new Character(res[i][0].id);
        html +=
          `<div class="match"><img class="thumbnail" src="${char.tinyIcon}"/>` +
          (result.key === "name" ? res[i][1] : char.name) + `</div>`;
      }
      document.querySelector("#current-matches").innerHTML = html;

      function addToScript(i) {
        appState.currentScript.add(new Character(res[i][0].id));
        appState.currentScript.sort();
        renderScript();

        document.querySelector("#current-matches").innerHTML = "";
        characterInputEl.value = "";
      }

      // Register click/Enter keypress event for matches to add the character
      document.querySelectorAll("#current-matches .match").forEach(
        function (element, i) {
          element.tabIndex = 0;
          element.addEventListener("click", function (event) {
            event.preventDefault();
            addToScript(i);
          });

          element.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
              addToScript(i);
            }
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

  let isMetaOrCtrlPressed = false;
  const onMac = navigator.userAgent.includes("Mac");

  globalThis.addEventListener("keydown", function (event) {
    if (event.key === "Meta" && onMac) {
      isMetaOrCtrlPressed = true;
    } else if (!onMac && event.key === "Control") {
      isMetaOrCtrlPressed = true;
    }
  });

  globalThis.addEventListener("keyup", function (event) {
    if (event.key === "Meta" && onMac) {
      isMetaOrCtrlPressed = false;
    } else if (!onMac && event.key === "Control") {
      isMetaOrCtrlPressed = false;
    }
  });

  document.querySelector("#export-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      if (isMetaOrCtrlPressed) {
        const url = new URL(globalThis.location.href);
        const encodedScript = compressScript();
        url.searchParams.append("script", encodedScript);
        globalThis.history.replaceState(null, "", url);
      } else {
        writeDialogJSON(
          appState.currentScript.name,
          appState.currentScript.toJSON(),
        );
      }
    },
  );

  document.querySelector("#clear-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      if (isMetaOrCtrlPressed) {
        globalThis.history.replaceState(null, "", globalThis.location.pathname);
      } else {
        appState.currentScript.clear();
        Character.clearCustoms();
        globalThis.history.replaceState(null, "", globalThis.location.pathname);
        renderScript();
      }
    },
  );

  document.querySelector("#print-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      globalThis.print();
    },
  );

  globalThis.addEventListener("beforeprint", function (_event) {
    document.title = appState.currentScript.name;
  });

  globalThis.addEventListener("afterprint", function (_event) {
    document.title = appName;
  });

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

  globalThis.addEventListener("unload", function (_event) {
    localStorage.setItem("script", appState.currentScript.toJSON());
  });

  const sidebar = document.querySelector("#sidebar");
  const sidebarToggleButton = document.querySelector("#open-sidebar-button");

  sidebarToggleButton.addEventListener("click", (event) => {
    event.preventDefault();
    sidebar.classList.toggle("expanded");
  });

  const allchars = document.querySelector("#all-characters");
  const filterInputForm = document.querySelector("#filter-input-form");
  const filterInputElem = document.querySelector("#filter-input");

  function renderSidebarChars(predicate) {
    // const lastFocus = document.activeElement;
    // const lastCharID = lastFocus.getAttribute("data-id");
    predicate = predicate ?? ((c) => c);
    function compareOn(f) {
      return function (x, y) {
        if (f(x) < f(y)) {
          return -1;
        } else if (f(x) > f(y)) {
          return 1;
        } else {
          return 0;
        }
      };
    }

    if (renderSidebarChars.wasExpanded === undefined) {
      renderSidebarChars.wasExpanded = new Set();
    }

    allchars.innerHTML = "";
    const charlist = Character.flat
      .concat(Character.customFlat)
      .concat(Character.fabledFlat)
      .filter(predicate)
      .toSorted(compareOn((o) => o.name))
      .toSorted(compareOn((o) => Character.typeRank(o.team)));

    const strFilter = filterInputElem.value;
    const re = /has:(?<hasQuery>.*)/;
    const command = strFilter.match(re);
    const hasQuery = command?.groups.hasQuery;

    const filteredChars = fuzzysort.go(
      hasQuery ? hasQuery : strFilter,
      charlist,
      {
        key: hasQuery ? "ability" : "name",
        all: true,
        threshold: hasQuery ? 0.3 : 0,
      },
    );

    for (const result of filteredChars) {
      const character = new Character(result.obj.id);
      const selected = appState.currentScript.contains(character)
        ? "selected"
        : "";
      const imported = character.isCustom ? "imported-icon" : "";
      const wasExpanded = renderSidebarChars.wasExpanded.has(character.id);
      let html =
        `<div class="item ${selected}" data-id="${character.id}" data-team="${character.team}" tabindex=0>`;
      // html += `<div class=>`
      html += `<img class="icon ${imported}" src="${character.tinyIcon}"/>`;
      html += `<div class="character-name">${
        hasQuery ? character.name : result.highlight("<b>", "</b>")
      }</div>`;
      html += `<div class="button">`;
      html += `<button type="button" class="${
        wasExpanded ? "expanded" : ""
      }" title="Toggle character ability">❯</button></div>`;
      html += `<div class="ability-text ${wasExpanded ? "" : "nodisplay"}">${
        hasQuery ? result.highlight("<b>", "</b>") : character.summary
      }</div>`;
      html += `</div>`;

      const elem = document.createElement("div");
      elem.innerHTML = html;

      elem.firstChild.addEventListener("click", (event) => {
        event.preventDefault();
        if (appState.currentScript.contains(character)) {
          appState.currentScript.remove(character.id);
        } else {
          appState.currentScript.add(character);
          appState.currentScript.sort();
        }
        renderScript();
      });

      elem.firstChild.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === "Space") {
          event.preventDefault();
          if (appState.currentScript.contains(character)) {
            appState.currentScript.remove(character.id);
          } else {
            appState.currentScript.add(character);
            appState.currentScript.sort();
          }
          renderScript();
        }
      });

      elem.querySelector("button").addEventListener("click", function (event) {
        event.stopPropagation();
        event.target.classList.toggle("expanded");
        const node = event.target.parentNode.nextSibling;
        node.classList.toggle("nodisplay");

        if (!node.classList.contains("nodisplay")) {
          renderSidebarChars.wasExpanded.add(
            node.parentNode.getAttribute("data-id"),
          );
        } else {
          renderSidebarChars.wasExpanded.delete(
            node.parentNode.getAttribute("data-id"),
          );
        }
      });

      // if (lastCharID) {
      //   elem.firstChild.focus({ focusVisible: true });
      // }
      allchars.appendChild(elem.firstChild);
    }
  }

  renderSidebarChars();

  const townsfolkForm = document.querySelector("#townsfolk-form");
  const outsiderForm = document.querySelector("#outsider-form");
  const minionForm = document.querySelector("#minion-form");
  const demonForm = document.querySelector("#demon-form");
  const travelerForm = document.querySelector("#traveler-form");
  const fabledForm = document.querySelector("#fabled-form");

  const townsfolkCheckbox = document.querySelector("#townsfolk-checkbox");
  const outsiderCheckbox = document.querySelector("#outsider-checkbox");
  const minionCheckbox = document.querySelector("#minion-checkbox");
  const demonCheckbox = document.querySelector("#demon-checkbox");
  const travelerCheckbox = document.querySelector("#traveler-checkbox");
  const fabledCheckbox = document.querySelector("#fabled-checkbox");

  const allFilterCheckboxes = [
    townsfolkCheckbox,
    outsiderCheckbox,
    minionCheckbox,
    demonCheckbox,
    travelerCheckbox,
    fabledCheckbox,
  ];

  function updateSidebar() {
    function predicate(character) {
      if (character.team === "townsfolk" && !townsfolkCheckbox.checked) {
        return false;
      }
      if (character.team === "outsider" && !outsiderCheckbox.checked) {
        return false;
      }
      if (character.team === "minion" && !minionCheckbox.checked) {
        return false;
      }
      if (character.team === "demon" && !demonCheckbox.checked) {
        return false;
      }
      if (character.team === "traveler" && !travelerCheckbox.checked) {
        return false;
      }
      if (character.team === "fabled" && !fabledCheckbox.checked) {
        return false;
      }

      return true;
    }

    renderSidebarChars(predicate);
  }

  globalThis.addEventListener("scriptrendered", (_) => {
    updateSidebar();
  });

  [townsfolkForm, outsiderForm, minionForm, demonForm, travelerForm, fabledForm]
    .forEach((x) => {
      x.addEventListener("change", (_) => {
        updateSidebar();
      });
    });

  filterInputForm.addEventListener("input", function (event) {
    event.preventDefault();
    updateSidebar();
  });

  filterInputForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (allchars.firstChild) {
      const charid = allchars.firstChild.getAttribute("data-id");
      const character = new Character(charid);

      if (appState.currentScript.contains(character)) {
        appState.currentScript.remove(character.id);
      } else {
        appState.currentScript.add(character);
        appState.currentScript.sort();
      }
      renderScript();
    }
  });
});
