export function compareOn<U, V>(f: (u: U) => V) {
  return function (x: U, y: U) {
    if (f(x) < f(y)) {
      return -1;
    } else if (f(x) > f(y)) {
      return 1;
    } else {
      return 0;
    }
  };
}

// https://stackoverflow.com/a/21015393
export function getTextWidth(
  text: string,
  font: string = "IBMPlexSansCondensed",
) {
  const canvas = getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

// Simple algorithm for splitting a list of similarly μ-sized elements into two
// lists such that the total sizes of the lists are close and the left is
// smaller within a margin of error ε pixels.
export function splitEqual<T>(a: T[], μ: (c: T) => number, ε: number = 25) {
  if (a.length < 2) {
    return { left: a, right: [] };
  }

  let left = 0;
  let right = a.length - 1;

  const ls = [a[left]];
  const rs = [a[right]];

  let lsum = μ(a[left]!);
  let rsum = μ(a[right]!);

  left++;
  right--;

  while (left <= right) {
    if (lsum <= rsum + μ(a[left]!) - ε) {
      ls.push(a[left]);
      lsum += μ(a[left]!);
      left++;
    } else {
      rs.push(a[right]);
      rsum += μ(a[right]!);
      right--;
    }
  }

  return {
    left: ls,
    right: rs.toReversed(),
  };
}

// Restructures a flat div with children into two columns, minimising the
// height difference between the two columns.
export function columnify(container: HTMLElement) {
  const oldWidth = container.style.width;
  const oldChildren = Array.from(container.children);

  container.style.width = "calc(var(--width) - 1rem)";

  const { left, right } = splitEqual(oldChildren, function (elem: HTMLElement) {
    const b = elem.getBoundingClientRect();
    const height = b.bottom - b.top;
    return height;
  });

  container.textContent = "";
  const col1 = document.createElement("div");
  col1.classList.add("col1");
  const col2 = document.createElement("div");
  col2.classList.add("col2");

  for (const child of left) {
    col1.appendChild(child!);
  }

  for (const child of right) {
    col2.appendChild(child!);
  }

  container.appendChild(col1);
  container.appendChild(col2);
  container.style.width = oldWidth;
  container.style["flex-direction"] = "row";
}
