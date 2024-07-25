// Verification of some invariants for the timeline class. Mostly for fun but I
// wrote it wrong a bunch of times – this helped a lot.

function reverse<T>(xs: seq<T>): (ys: seq<T>)
  ensures |xs| == |ys|
  ensures forall i :: 0 <= i < |xs| ==> ys[i] == xs[|xs| - i - 1]
{
  if xs == []
  then []
  else [xs[|xs| - 1]] + reverse(xs[0 .. |xs| - 1])
}

class Timeline<St(0)> {
  var past: seq<St>
  var future: seq<St>
  var size: nat
  var capacity: nat

  ghost predicate Valid()
    reads this
  {
    |this.past| >= 1 &&
    1 <= this.size <= this.capacity &&
    this.size == |past| + |future|
  }

  constructor(init: St)
    ensures Valid()
  {
    this.size := 1;
    this.capacity := 10;

    new;
    this.past := [init];
    this.future := [];
  }

  method now() returns (r: St)
    requires Valid()
    ensures Valid()
  {
    r := this.past[|this.past| - 1];
  }

  method addInstant(s: St)
    modifies this
    requires Valid()
    ensures Valid()
  {
    if (this.size == this.capacity) {
      this.past := this.past[1..];
    }

    this.past := [s] + this.past;
    this.future := [];

    this.size := |this.past| + |this.future|;
  }

  method back()
    modifies this
    requires Valid()
    ensures Valid()
    ensures reverse(this.past) + this.future ==
            old(reverse(this.past) + this.future)
  {
    if (|this.past| > 1) {
      var s := this.past[0];
      this.past := this.past[1..];
      this.future := [s] + this.future;
    }
  }

  method forward()
    modifies this
    requires Valid()
    ensures Valid()
    ensures reverse(this.past) + this.future ==
            old(reverse(this.past) + this.future)
  {
    if (|this.future| > 0) {
      var s := this.future[0];
      this.future := this.future[1..];
      this.past := [s] + this.past;
    }
  }

  method reset(init: St)
    modifies this
    ensures Valid()
    requires Valid()
  {
    this.past := [init];
    this.future := [];
    this.size := 1;
  }

  method forget()
    modifies this
    requires Valid()
    ensures Valid()
  {
    this.past := [this.past[0]];
    this.future := [];
    this.size := 1;
  }
}
