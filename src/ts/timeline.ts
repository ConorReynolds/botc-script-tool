export class Timeline<St> {
  past: St[];
  future: St[];
  capacity: number;
  size: number;

  constructor(s: St) {
    this.capacity = 10;
    this.size = 1;
    this.past = [s];
    this.future = [];
  }

  now() {
    return this.past[this.past.length - 1];
  }

  addInstant(s: St) {
    if (this.size === this.capacity) {
      this.past.shift();
    }

    this.past.push(s);
    this.future.splice(0, this.future.length);

    this.size = this.past.length + this.future.length;
  }

  back() {
    if (this.past.length > 1) {
      const s = this.past.pop()!;
      this.future.push(s);
    }
  }

  forward() {
    if (this.future.length > 0) {
      const s = this.future.pop()!;
      this.past.push(s);
    }
  }

  reset(init: St) {
    this.past = [init];
    this.future = [];
    this.size = 1;
  }

  forget() {
    this.past = [this.past[0]!];
    this.future = [];
    this.size = 1;
  }

  serialize(): string {
    return JSON.stringify(this);
  }

  static deserialize(s: string): Timeline<any> {
    const obj = JSON.parse(s);
    const timeline = new Timeline(obj.past[0]);
    timeline.past = obj.past;
    timeline.future = obj.future;
    timeline.capacity = obj.capacity;
    timeline.size = obj.size;
    return timeline;
  }

  invariant(): boolean {
    return this.size <= this.capacity &&
      this.past.length + this.future.length === this.size;
  }
}
