import getRGBComponents from './get-rgb-components';

export default function (background) {
  const nThreshold = 255 / 2;
  const components = getRGBComponents(background);
  const bgDelta = (components.R * 0.299) + (components.G * 0.587) + (components.B * 0.114);

  return ((255 - bgDelta) < nThreshold) ? '#000' : '#fff';
}
