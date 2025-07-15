import { AppState } from "./state.js";
import { Character } from "./character.js";
import { Script } from "./script.js";
import { compressScript, decompressScript } from "./encoding.js";
import { compareOn, moveElem } from "./utils.js";

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
        const localScript = new Script();
        localScript.loadFromJSON(JSON.parse(content));
        localScript.timeline.forget();
        appState.addScript(localScript);
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

let undoButtonElem;
let redoButtonElem;
let lockButtonElem;

function undo() {
  appState.currentScript.loadPrevious();
  renderScript();
}

function redo() {
  appState.currentScript.loadNext();
  renderScript();
}

// Essentially toggles between view and edit mode.
function toggleLock(width) {
  const sidebar = document.querySelector("#sidebar");
  const fileSelector = document.querySelector("#file-selector");
  const inputContainer = document.querySelector(".input-container");
  const undoButton = document.querySelector("#undo-button");
  const redoButton = document.querySelector("#redo-button");
  const clearForm = document.querySelector("#clear-form");

  sidebar.classList.toggle("hidden");
  fileSelector.classList.toggle("hidden");
  inputContainer.classList.toggle("hidden");
  undoButton.classList.toggle("hidden");
  redoButton.classList.toggle("hidden");
  clearForm.classList.toggle("hidden");

  document.querySelectorAll("img.icon, .handle").forEach(
    function (elem) {
      elem.classList.toggle("uninteractable");
    },
  );

  document.querySelectorAll("form").forEach(function (elem) {
    elem.classList.toggle("uninteractable");
  });

  document.querySelector("#add-bootlegger-rule").classList.toggle("hidden");
  document.querySelector(".bootlegger-rules").classList.toggle(
    "uninteractable",
  );

  const metadata = document.querySelector("#metadata");
  metadata.style.width = width;
}

function firstNightUpdate(script, event) {
  if (script.firstNightOrder === undefined) {
    return;
  }

  moveElem(script.firstNightOrder, event.oldIndex, event.newIndex);

  if (script.isRecording) {
    script.timeline.addInstant(script.toJSON());
  }
}

function otherNightUpdate(script, event) {
  if (script.otherNightOrder === undefined) {
    return;
  }

  moveElem(script.otherNightOrder, event.oldIndex, event.newIndex);

  if (script.isRecording) {
    script.timeline.addInstant(script.toJSON());
  }
}

const channel = new BroadcastChannel("state_updates");

function renderScript(postEvent = true) {
  const scriptElem = document.querySelector("#script");

  scriptNameInput.value = appState.currentScript.name;
  scriptAuthorInput.value = appState.currentScript.author;

  h1.innerHTML =
    `${appState.currentScript.name}<span>by ${appState.currentScript.author}</span>`;
  scriptElem.innerHTML = appState.currentScript.render();

  document.querySelector("#fabled-icon-container").innerHTML = appState
    .currentScript
    .renderFabledSmall();

  if (localStorage.getItem("compact-night-sheet") === "true") {
    document.querySelector(".night-sheet").classList.add("compact");
  }

  // Add listeners to all icons
  scriptElem.querySelectorAll(
    ".script img.icon, .travelers-and-fabled-container img.icon",
  ).forEach(function (element) {
    element.addEventListener("click", function (event) {
      event.preventDefault();
      appState.currentScript.remove(element.parentElement.id);
      renderScript();
    }, { once: true });
  });

  if (postEvent) {
    setTimeout(function () {
      globalThis.dispatchEvent(new Event("scriptrendered"));
    }, 0);
  }

  // Enable drag and drop ordering of script items within their respective categories

  for (const category of ["townsfolk", "outsider", "minion", "demon"]) {
    const list = document.querySelector(`.script > .${category}`);
    list.querySelectorAll("img.icon").forEach((elem) =>
      elem.classList.add("handle")
    );

    new Sortable(list, {
      handle: ".handle",
      animation: 250,
    });
  }

  const firstNightList = document.querySelector(".first-night");
  const otherNightList = document.querySelector(".other-night");
  new Sortable(firstNightList, {
    handle: ".handle",
    animation: 250,
    onUpdate: function (event) {
      firstNightUpdate(appState.currentScript, event);
      setTimeout(function () {
        globalThis.dispatchEvent(new Event("scriptrendered"));
      }, 0);
    },
  });
  new Sortable(otherNightList, {
    handle: ".handle",
    animation: 250,
    onUpdate: function (event) {
      otherNightUpdate(appState.currentScript, event);
      setTimeout(function () {
        globalThis.dispatchEvent(new Event("scriptrendered"));
      }, 0);
    },
  });

  // Register bootlegger button functionality
  const bootleggerRuleButton = document.querySelector("#add-bootlegger-rule");
  const bootleggerRules = document.querySelector(".bootlegger-rules");

  bootleggerRules.querySelectorAll(".item").forEach(function (item) {
    item.querySelector("img").addEventListener("click", function (_event) {
      const idx = parseInt(item.getAttribute("data-idx"));
      appState.currentScript.removeBootleggerRule(idx);
      // item.remove();
      renderScript();
    });

    item.querySelector(".rule").addEventListener(
      "keydown",
      function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          this.blur();
        }
      },
    );

    item.querySelector(".rule").addEventListener("blur", function (event) {
      // Update the state – need to keep track of index
      const idx = parseInt(item.getAttribute("data-idx"));
      const newRule = item.querySelector(".rule").textContent;
      if (appState.currentScript.bootlegger[idx] !== newRule) {
        appState.currentScript.setBootleggerRule(
          idx,
          item.querySelector(".rule").textContent,
        );
        renderScript();
      }
    });
  });

  bootleggerRuleButton.addEventListener(
    "click",
    function (_event) {
      // currentRules = appState.currentScript.bootlegger ?? [];
      // currentRules.push("");

      appState.currentScript.addBootleggerRule("");

      const item = document.createElement("div");

      item.classList.add("item");
      item.setAttribute(
        "data-idx",
        appState.currentScript.bootlegger.length - 1,
      );

      item.innerHTML =
        `<img class="icon" src="src/assets/custom-icons/Icon_bootlegger.webp"><div class="rule" contenteditable="plaintext-only" placeholder="New bootlegger rule …"></div>`;

      bootleggerRules.append(item);
      renderScript();
    },
  );
}

function updateScriptLink() {
  const url = new URL(globalThis.location.href);
  if (url.searchParams.has("script")) {
    const encodedScript = compressScript(appState.currentScript);
    globalThis.history.replaceState(
      null,
      "",
      // Doing it this way specifically ensures that tildes are not encoded
      // but characters requiring encoding in the script name/author fields
      // *are* encoded.
      new URL(
        globalThis.location.href.split("?")[0] + `?script=${encodedScript}`,
      ),
    );
  }
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
    return true;
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

  if (localStorage.getItem("app-state")) {
    appState = AppState.deserialize(localStorage.getItem("app-state"));
  } else {
    appState = new AppState([new Script()]);
    localStorage.setItem("app-state", appState.serialize());
  }

  const urlParams = new URLSearchParams(globalThis.location.search);
  if (urlParams.get("script")) {
    const script = decompressScript(urlParams.get("script"));
    appState.addScript(script);

    // Normally don’t have to sort when loading from local storage since it is
    // always stored sorted, but URL param scripts are not sorted.
    appState.currentScript.sort();
    globalThis.history.replaceState(null, "", globalThis.location.pathname);
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

  for (const sidebar of ["file-select", "character-select"]) {
    if (localStorage.getItem(sidebar)) {
      const state = localStorage.getItem(sidebar);
      const elem = document.querySelector(
        sidebar === "file-select" ? "#file-selector" : "#sidebar",
      );
      if (state === "open") {
        elem.classList.add("disable-animations");
        elem.classList.add("expanded");
        setTimeout(
          () => elem.classList.remove("disable-animations"),
          0.2,
        );
      }
    }
  }

  const fileSelectElem = document.querySelector("#file-selector");
  const scriptListElem = document.querySelector("#script-list");
  const openFileSelectButton = document.querySelector(
    "#open-file-selector-button",
  );

  openFileSelectButton.addEventListener("click", (event) => {
    event.preventDefault();
    fileSelectElem.classList.toggle("expanded");
    localStorage.setItem(
      "file-select",
      fileSelectElem.classList.contains("expanded") ? "open" : "closed",
    );

    // If on mobile, close the other sidebar.
    if (globalThis.matchMedia("(max-width: 615px)").matches) {
      document.querySelector("#sidebar").classList.remove("expanded");
      localStorage.setItem("character-select", "closed");
    }
  });

  function renderFileSelector() {
    const heading = document.querySelector("#recent-scripts-heading");
    heading.innerHTML =
      `Recent Scripts <span>(${appState.scripts.length} / ${appState.capacity})</span>`;
    heading.setAttribute("data-n", appState.scripts.length);

    scriptListElem.innerHTML = appState.renderFileSelector();

    new Sortable(scriptListElem.querySelector(".file-selector-container"), {
      animation: 250,
      handle: ".script-name",
      onUpdate: function (event) {
        const from = appState.size - event.oldIndex - 1;
        const to = appState.size - event.newIndex - 1;
        moveElem(appState.scripts, from, to);

        const idx = appState.currentScriptIdx;
        if (from === idx) {
          appState.currentScriptIdx = to;
        } else if (from <= idx && idx <= to) {
          appState.currentScriptIdx = idx - 1;
        } else if (to <= idx && idx <= from) {
          appState.currentScriptIdx = idx + 1;
        }

        localStorage.setItem("app-state", appState.serialize());
        renderFileSelector();
      },
    });

    scriptListElem.querySelectorAll(".item").forEach(
      function (item, idx, elems) {
        item.addEventListener(
          "click",
          function (event) {
            event.stopPropagation();
            appState.focusScript(appState.size - idx - 1);
            renderScript();
          },
        );

        item.querySelector("button").addEventListener(
          "click",
          function (event) {
            event.stopPropagation();
            if (elems.length === 1) {
              if (!appState.currentScript.isEmpty()) {
                appState.setCurrentScript(new Script());
                renderScript();
              }
              return;
            }

            appState.removeScript(appState.size - idx - 1);
            renderScript();
          },
        );
      },
    );
  }

  renderFileSelector();

  document.querySelector("#new-script-button").addEventListener(
    "click",
    function (event) {
      appState.addScript(new Script());
      renderScript();
    },
  );

  let onFocusScriptName;
  let onFocusScriptAuthor;

  scriptNameInput.addEventListener("focus", function (_) {
    onFocusScriptName = scriptNameInput.value;
  });

  scriptNameInput.addEventListener("blur", function (_) {
    if (scriptNameInput.value !== onFocusScriptName) {
      appState.currentScript.name = scriptNameInput.value;
      localStorage.setItem("app-state", appState.serialize());
      renderFileSelector();
      updateScriptLink();
      h1.innerHTML =
        `${appState.currentScript.name}<span>by ${appState.currentScript.author}</span>`;
    }
  });

  scriptNameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && scriptNameInput.value !== onFocusScriptName) {
      appState.currentScript.name = scriptNameInput.value;
      localStorage.setItem("app-state", appState.serialize());
      renderFileSelector();
      updateScriptLink();
      h1.innerHTML =
        `${appState.currentScript.name}<span>by ${appState.currentScript.author}</span>`;
      scriptNameInput.blur();
    }
  });

  scriptAuthorInput.addEventListener("focus", function (_) {
    onFocusScriptAuthor = scriptAuthorInput.value;
  });

  scriptAuthorInput.addEventListener("blur", function (_) {
    if (scriptAuthorInput.value !== onFocusScriptAuthor) {
      appState.currentScript.author = scriptAuthorInput.value;
      localStorage.setItem("app-state", appState.serialize());
      renderFileSelector();
      updateScriptLink();
      h1.innerHTML =
        `${appState.currentScript.name}<span>by ${appState.currentScript.author}</span>`;
    }
  });

  scriptAuthorInput.addEventListener("keydown", function (event) {
    console.log(`key pressed: ${event.key}`);
    if (
      event.key === "Enter" && scriptAuthorInput.value !== onFocusScriptAuthor
    ) {
      appState.currentScript.author = scriptAuthorInput.value;
      localStorage.setItem("app-state", appState.serialize());
      renderFileSelector();
      updateScriptLink();
      h1.innerHTML =
        `${appState.currentScript.name}<span>by ${appState.currentScript.author}</span>`;
      scriptAuthorInput.blur();
    }
  });

  document.getElementById("script-name-form").addEventListener(
    "input",
    function (event) {
      event.preventDefault();
    },
  );

  document.getElementById("script-author-form").addEventListener(
    "input",
    function (event) {
      event.preventDefault();
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
      if (input === "") {
        return;
      }

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
    const metaCtrl = (onMac && event.metaKey) || (!onMac && event.ctrlKey);
    const shift = event.shiftKey;
    const undoRedoKeyPressed = event.key === "z";
    const nextScriptKey = event.key === "ArrowUp";
    const prevScriptKey = event.key === "ArrowDown";

    isMetaOrCtrlPressed = metaCtrl;

    // Returns true for iPhones also but that doesn’t matter
    if (metaCtrl && !shift && undoRedoKeyPressed) {
      undo();
    }
    if (metaCtrl && shift && undoRedoKeyPressed) {
      redo();
    }

    // I think binding these keys to these actions is probably ill-advised. The
    // UI is completely sufficient.

    // if (metaCtrl && shift && nextScriptKey) {
    //   const _success = appState.nextScript();
    //   console.log(`next script: ${appState.currentScript.name}`);
    //   renderScript();
    // }
    // if (metaCtrl && shift && prevScriptKey) {
    //   const _success = appState.prevScript();
    //   console.log(`prev script: ${appState.currentScript.name}`);
    //   renderScript();
    // }
  });

  undoButtonElem = document.querySelector("#undo-button");
  redoButtonElem = document.querySelector("#redo-button");
  lockButtonElem = document.querySelector("#lock-button");

  undoButtonElem.addEventListener("click", function (event) {
    undo();
  });

  redoButtonElem.addEventListener("click", function (event) {
    redo();
  });

  const metadataWidth = document.querySelector("#metadata").style.width;

  lockButtonElem.addEventListener("click", function (event) {
    const lockIcon = '<i class="fa-solid fa-lock"></i>';
    const unlockIcon = '<i class="fa-solid fa-lock-open"></i>';
    const locked = lockButtonElem.innerHTML === lockIcon;
    let width;
    if (locked) {
      lockButtonElem.innerHTML = unlockIcon;
      width = metadataWidth;
    } else {
      lockButtonElem.innerHTML = lockIcon;
      width = "100%";
    }
    toggleLock(width);
  });

  globalThis.addEventListener("keyup", function (event) {
    const metaCtrl = (onMac && event.metaKey) || (!onMac && event.ctrlKey);
    isMetaOrCtrlPressed = metaCtrl;
  });

  document.querySelector("#link-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      const url = new URL(globalThis.location.href);
      if (url.searchParams.has("script")) {
        globalThis.history.replaceState(null, "", globalThis.location.pathname);
      } else {
        const encodedScript = compressScript(appState.currentScript);
        globalThis.history.replaceState(
          null,
          "",
          // Doing it this way specifically ensures that tildes are not encoded
          // but characters requiring encoding in the script name/author fields
          // *are* encoded.
          new URL(
            globalThis.location.href.split("?")[0] + `?script=${encodedScript}`,
          ),
        );
      }
    },
  );

  document.querySelector("#export-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      writeDialogJSON(
        appState.currentScript.name,
        appState.currentScript.toJSON({ prettyPrint: true, exporting: true }),
      );
    },
  );

  document.querySelector("#clear-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      appState.currentScript.clear();
      globalThis.history.replaceState(null, "", globalThis.location.pathname);
      renderScript();
    },
  );

  document.querySelector("#print-form").addEventListener(
    "submit",
    function (event) {
      event.preventDefault();
      globalThis.print();
    },
  );

  // document.addEventListener("visibilitychange", function () {
  //   if (document.hidden) {
  //     setTimeout(function () {
  //       globalThis.dispatchEvent(new Event("scriptrendered"));
  //     }, 0);
  //   }
  // });

  globalThis.addEventListener("beforeunload", function (_event) {
    localStorage.setItem("app-state", appState.serialize());
  });

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

  const sidebar = document.querySelector("#sidebar");
  const sidebarToggleButton = document.querySelector("#open-sidebar-button");

  sidebarToggleButton.addEventListener("click", (event) => {
    event.preventDefault();
    sidebar.classList.toggle("expanded");
    localStorage.setItem(
      "character-select",
      sidebar.classList.contains("expanded") ? "open" : "closed",
    );

    // If on mobile, close the other sidebar.
    if (globalThis.matchMedia("(max-width: 615px)").matches) {
      document.querySelector("#file-selector").classList.remove("expanded");
      localStorage.setItem("file-select", "closed");
    }
  });
  const allchars = document.querySelector("#all-characters");
  const filterInputForm = document.querySelector("#filter-input-form");
  const filterInputElem = document.querySelector("#filter-input");

  function renderSidebarChars(predicate) {
    // const lastFocus = document.activeElement;
    // const lastCharID = lastFocus.getAttribute("data-id");
    predicate = predicate ?? ((c) => c);

    if (renderSidebarChars.wasExpanded === undefined) {
      renderSidebarChars.wasExpanded = new Set();
    }

    allchars.innerHTML = "";
    const charlist = Character.flat
      .concat(Character.customFlat)
      .concat(Character.fabledFlat)
      .concat(Character.homebrewFlat)
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
        key: hasQuery ? ((o) => new Character(o.id).summaryText) : "name",
        all: true,
        threshold: hasQuery ? 0.3 : 0,
      },
    );

    if (strFilter) {
      allchars.classList.add("filtered");
    } else {
      allchars.classList.remove("filtered");
    }

    for (const result of filteredChars) {
      const character = new Character(result.obj.id);
      const selected = appState.currentScript.contains(character)
        ? "selected"
        : "";
      const imported = character.isCustom ? "imported-icon" : "";
      const wasExpanded = renderSidebarChars.wasExpanded.has(character.id);
      let html =
        `<div class="item ${selected}" data-id="${character.id}" data-team="${character.team}" data-type="${character.type}" tabindex=0>`;
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
  const base3Form = document.querySelector("#base-three-form");
  const kickstarterForm = document.querySelector("#kickstarter-form");
  const experimentalForm = document.querySelector("#experimental-form");
  const homebrewForm = document.querySelector("#homebrew-form");
  const customForm = document.querySelector("#custom-form");
  const toggleAllForm = document.querySelector("#toggle-all-form");

  const townsfolkCheckbox = document.querySelector("#townsfolk-checkbox");
  const outsiderCheckbox = document.querySelector("#outsider-checkbox");
  const minionCheckbox = document.querySelector("#minion-checkbox");
  const demonCheckbox = document.querySelector("#demon-checkbox");
  const travelerCheckbox = document.querySelector("#traveler-checkbox");
  const fabledCheckbox = document.querySelector("#fabled-checkbox");
  const base3Checkbox = document.querySelector("#base-three-checkbox");
  const kickstarterCheckbox = document.querySelector("#kickstarter-checkbox");
  const experimentalCheckbox = document.querySelector("#experimental-checkbox");
  const homebrewCheckbox = document.querySelector("#homebrew-checkbox");
  const customCheckbox = document.querySelector("#custom-checkbox");
  const toggleAllCheckbox = document.querySelector("#toggle-all-checkbox");

  const allFilterForms = [
    townsfolkForm,
    outsiderForm,
    minionForm,
    demonForm,
    travelerForm,
    fabledForm,
    base3Form,
    kickstarterForm,
    experimentalForm,
    homebrewForm,
    customForm,
    toggleAllForm,
  ];

  // Doesn’t include the toggle-all checkbox
  const allFilterCheckboxes = [
    townsfolkCheckbox,
    outsiderCheckbox,
    minionCheckbox,
    demonCheckbox,
    travelerCheckbox,
    fabledCheckbox,
    base3Checkbox,
    kickstarterCheckbox,
    experimentalCheckbox,
    homebrewCheckbox,
    customCheckbox,
  ];

  function updateSidebar() {
    function predicate(character) {
      const isBase3 = (x) => x === "tb" || x === "snv" || x === "bmr";
      const isKickstarter = (x) => x === "kickstarter";
      const isExperimental = (x) => x === "";
      const isHomebrew = (x) => x === "homebrew";
      const isCustom = (obj) => new Character(obj.id).isCustom;
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
      if (isBase3(character.edition) && !base3Checkbox.checked) {
        return false;
      }
      if (isKickstarter(character.edition) && !kickstarterCheckbox.checked) {
        return false;
      }
      if (isExperimental(character.edition) && !experimentalCheckbox.checked) {
        return false;
      }
      if (isHomebrew(character.edition) && !homebrewCheckbox.checked) {
        return false;
      }
      if (isCustom(character) && !customCheckbox.checked) {
        return false;
      }

      return true;
    }

    renderSidebarChars(predicate);
  }

  function onScriptRenderEvent() {
    updateSidebar();
    renderFileSelector();
    updateScriptLink();

    localStorage.setItem("app-state", appState.serialize());
    undoButtonElem.setAttribute(
      "data-canundo",
      appState.currentScript.timeline.past.length === 1 ? "false" : "true",
    );
    redoButtonElem.setAttribute(
      "data-canredo",
      appState.currentScript.timeline.future.length === 0 ? "false" : "true",
    );
  }

  globalThis.addEventListener("scriptrendered", (_) => {
    onScriptRenderEvent();
    channel.postMessage({ name: "scriptrendered", data: appState.serialize() });
  });

  channel.onmessage = function (event) {
    if (event.data.name !== "scriptrendered") {
      return;
    }
    appState = AppState.deserialize(event.data.data);
    renderScript(false);
    onScriptRenderEvent();
  };

  allFilterForms.forEach((x) => {
    if (x.id !== "toggle-all-form") {
      x.addEventListener("change", (_) => {
        updateSidebar();

        if (allFilterCheckboxes.every((c) => c.checked === true)) {
          toggleAllCheckbox.checked = true;
        } else {
          toggleAllCheckbox.checked = false;
        }
      });
    }
  });

  toggleAllForm.addEventListener("change", (_) => {
    if (toggleAllCheckbox.checked) {
      allFilterCheckboxes.forEach((c) => {
        c.checked = true;
        updateSidebar();
      });
    } else {
      allFilterCheckboxes.forEach((c) => {
        c.checked = false;
        updateSidebar();
      });
    }
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

  const helpDialog = document.querySelector("#help-dialog");
  const showHelpDialogButton = document.querySelector(
    "#help-dialog + button",
  );
  const closeHelpDialogButton = document.querySelector("#help-dialog button");

  showHelpDialogButton.addEventListener("click", function (_event) {
    helpDialog.showModal();
  });

  closeHelpDialogButton.addEventListener("click", function (_event) {
    helpDialog.close();
  });
});
