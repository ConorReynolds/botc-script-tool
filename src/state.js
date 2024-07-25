export class AppState {
    constructor(scripts) {
        if (scripts.length === 0) {
            throw Error(`Must have at least one script!`);
        }
        this.scripts = scripts;
        this.currentScriptIdx = 0;
        this.capacity = 10;
    }
    get currentScript() {
        return this.scripts[this.currentScriptIdx];
    }
    nextScript() {
        this.currentScriptIdx = Math.min(this.currentScriptIdx + 1, this.scripts.length - 1);
    }
    prevScript() {
        this.currentScriptIdx = Math.max(this.currentScriptIdx - 1, 0);
    }
    focusScript(idx) {
        idx = idx !== null && idx !== void 0 ? idx : this.scripts.length - 1;
        if (0 <= idx && idx < this.scripts.length) {
            this.currentScriptIdx = idx;
            return true;
        }
        else {
            return false;
        }
    }
    addScript(script, idx) {
        idx = idx !== null && idx !== void 0 ? idx : this.scripts.length - 1;
        if (this.scripts.length <= this.capacity) {
            this.scripts.splice(idx, 0, script);
            return true;
        }
        else {
            return false;
        }
    }
    addScriptAndFocus(script, idx) {
        idx = idx !== null && idx !== void 0 ? idx : this.scripts.length - 1;
        if (this.addScript(script, idx)) {
            return this.focusScript(idx);
        }
        else {
            return false;
        }
    }
    removeScript(idx) {
        if (0 <= idx && idx < this.scripts.length) {
            this.scripts.splice(idx, 1);
            return true;
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=state.js.map