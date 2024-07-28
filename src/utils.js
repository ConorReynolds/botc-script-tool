// https://stackoverflow.com/a/21015393
export function getTextWidth(text, font = "IBMPlexSansCondensed") {
  console.log(`text length: ${text.length}`);
  const canvas = getTextWidth.canvas ||
    (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  console.log(`text width: ${metrics.width}`);
  return metrics.width;
}
