export default (hue) => {
  const h = hue / 60;
  const c = 255;
  const x = Math.round((1 - Math.abs((h % 2) - 1)) * 255);
  const i = Math.floor(h);

  let color;

  if (i === 0) {
    color = `rgb(${c}, ${x}, ${0})`;
  } else if (i === 1) {
    color = `rgb(${x}, ${c}, ${0})`;
  } else if (i === 2) {
    color = `rgb(${0}, ${c}, ${x})`;
  } else if (i === 3) {
    color = `rgb(${0}, ${x}, ${c})`;
  } else if (i === 4) {
    color = `rgb(${x}, ${0}, ${c})`;
  } else {
    color = `rgb(${c}, ${0}, ${x})`;
  }

  return color;
};
