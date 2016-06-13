import rgbToHex from './rgb-to-hex';

export default function (hue) {
  const h = hue / 60;
  const c = 255;
  const x = (1 - Math.abs(h % 2 - 1)) * 255;
  const i = Math.floor(h);

  let color;

  if (i === 0) {
    color = rgbToHex(c, x, 0);
  } else if (i === 1) {
    color = rgbToHex(x, c, 0);
  } else if (i === 2) {
    color = rgbToHex(0, c, x);
  } else if (i === 3) {
    color = rgbToHex(0, x, c);
  } else if (i === 4) {
    color = rgbToHex(x, 0, c);
  } else {
    color = rgbToHex(c, 0, x);
  }

  return color;
}
