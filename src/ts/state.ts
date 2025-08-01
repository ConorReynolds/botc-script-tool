import { Script } from "./script.js";
import { Timeline } from "./timeline.js";

export class AppState {
  scripts: Script[];
  timelines: Timeline<string>[];
  currentScriptIdx: number;
  capacity: number;

  constructor(scripts: Script[]) {
    if (scripts.length === 0) {
      throw Error(`Must have at least one script!`);
    }
    this.scripts = scripts;
    this.timelines = scripts.map((s) => s.timeline);
    this.currentScriptIdx = scripts.length - 1;
    this.capacity = 25;
  }

  get currentScript(): Script {
    return this.scripts[this.currentScriptIdx];
  }

  get size(): number {
    return this.scripts.length;
  }

  setCurrentScript(script: Script) {
    this.scripts[this.currentScriptIdx] = script;
  }

  nextScript() {
    this.currentScriptIdx = Math.min(
      this.currentScriptIdx + 1,
      this.scripts.length - 1,
    );
  }

  prevScript() {
    this.currentScriptIdx = Math.max(this.currentScriptIdx - 1, 0);
  }

  focusScript(idx?: number) {
    idx = idx ?? this.scripts.length - 1;
    if (0 <= idx && idx < this.scripts.length) {
      this.currentScriptIdx = idx;
      return true;
    } else {
      return false;
    }
  }

  addScript(script: Script, opts?: { force: boolean }): boolean {
    this.scripts.push(script);
    this.timelines.push(script.timeline);

    if (!opts?.force && this.scripts[0].isEmpty() && this.scripts.length == 2) {
      this.scripts.shift();
      this.timelines.shift();
    }

    this.currentScriptIdx = this.scripts.length - 1;
    if (this.scripts.length <= this.capacity) {
      return true;
    }

    // We have exceeded capacity, drop the bottom script (idx 0)
    this.scripts.shift();
    this.timelines.shift();
    this.currentScriptIdx = this.scripts.length - 1;
    return false;
  }

  removeScript(idx: number): boolean {
    if (0 <= idx && idx < this.scripts.length) {
      this.scripts.splice(idx, 1);
      this.timelines.splice(idx, 1);

      // Make sure currentScriptIdx points to the same thing as before
      if (this.currentScriptIdx >= idx) {
        this.currentScriptIdx = Math.max(this.currentScriptIdx - 1, 0);
        this.focusScript(this.currentScriptIdx);
      }

      return true;
    } else {
      return false;
    }
  }

  serialize(): string {
    const scripts = this.scripts.map((s) => s.toJSON());
    const timelines = this.scripts.map((s) => s.timeline);
    return JSON.stringify({
      scripts: scripts,
      timelines: timelines,
      currentScriptIdx: this.currentScriptIdx,
      capacity: this.capacity,
    });
  }

  static deserialize(str: string): AppState {
    // const objs = JSON.parse(str);
    // const scripts = objs.map((s: Script) => new Script().loadFromJSON(s));
    // return new AppState(scripts);
    const obj = JSON.parse(str);
    const scriptStrs = obj.scripts as string[];
    const timelines = obj.timelines as Timeline<Script>[];
    const currentScriptIdx = obj.currentScriptIdx;

    const scripts = [];
    for (const [i, s] of scriptStrs.entries()) {
      const localScript = new Script();
      const localTimeline = Timeline.deserialize(JSON.stringify(timelines[i]));
      localScript.isRecording = false;
      localScript.loadFromJSON(JSON.parse(s));
      localScript.timeline = localTimeline;
      localScript.isRecording = true;
      scripts.push(localScript);
    }

    const appState = new AppState(scripts);
    appState.focusScript(currentScriptIdx);
    return appState;
  }

  renderFileSelector(): string {
    let html = `<div class="file-selector-container">`;
    const scripts = this.scripts.toReversed();

    for (const [idx, script] of scripts.entries()) {
      html += `<div class="item">`;
      html +=
        `<button type="button"><i class="fa-solid fa-xmark"></i></button>`;
      html += `<div class="script-name ${
        this.currentScriptIdx === this.size - idx - 1 ? "selected" : ""
      }">${script.name !== "" ? script.name : "New Script"}</div>`;
      html += `</div>`; // end item
    }

    html += `</div>`; // end file-selector-container

    return html;
  }
}
