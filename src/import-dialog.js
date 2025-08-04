import { Script } from "./script.js";

export class ImportDialog extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();

    const root = this;
    const dialog = root.querySelector("dialog");
    const button = root.querySelector("button");

    dialog.showModal();

    dialog.addEventListener("click", this.clickHandler.bind(root));
    dialog.addEventListener("close", this.closeHandler.bind(root));
    dialog.addEventListener("drop", this.dropHandler.bind(root));
    dialog.addEventListener("dragover", this.dragenterHandler.bind(root));
    dialog.addEventListener("dragenter", this.dragenterHandler.bind(root));
    dialog.addEventListener("dragleave", this.dragleaveHandler.bind(root));
    dialog.addEventListener("dragend", this.dragleaveHandler.bind(root));

    button.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      dialog.close();
    });
  }

  disconnectedCallback() {
  }

  closeHandler(_event) {
    this.remove();
  }

  clickHandler(_event) {
    const root = this;

    const input = document.createElement("input");
    input.type = "file";

    input.addEventListener("change", function (event) {
      const file = event.target.files[0];
      root.importFile(file);
      root.querySelector("dialog").close();
    });

    input.click();
  }

  dragenterHandler(event) {
    event.preventDefault();
    this.querySelector("dialog").classList.add("dragover");
  }

  dragleaveHandler(event) {
    event.preventDefault();
    this.querySelector("dialog").classList.remove("dragover");
  }

  dropHandler(event) {
    event.preventDefault();

    if (event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item, _idx) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          if (file.type === "application/json") {
            this.importFile(file);
          }
        }
      });
    } else {
      [...event.dataTransfer.files].forEach((file, _idx) => {
        if (file.type === "application/json") {
          this.importFile(file);
        }
      });
    }

    this.querySelector("dialog").close();
  }

  importFile(file) {
    const root = this;

    file.text().then(function (contents) {
      const localScript = new Script();
      localScript.loadFromJSON(JSON.parse(contents));
      localScript.timeline.forget();
      root.appState.addScript(localScript);
      globalThis.dispatchEvent(new Event("shouldrender"));
    });
  }

  render() {
    this.innerHTML = `
      <dialog id="import-form" closedby="any">
      <p>
      Click or drag & drop to import the script JSON, or paste JSON / URL (Ctrl+V / ⌘V)
      </p>
      <button class="x-button" title="Close" autofocus><i class="fa-solid fa-xmark"></i></button>
      </dialog>
      `;
  }
}

customElements.define("import-dialog", ImportDialog);
