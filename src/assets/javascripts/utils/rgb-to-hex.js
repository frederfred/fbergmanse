export default function (red, green, blue) {
  let hex = ((red << 16) | (green << 8) | (blue)).toString(16);

  while (hex.length < 6) {
    hex = `0${hex}`;
  }

  return `#${hex}`;
}
