export default (background) => {
  const nThreshold = 255 / 2;
  const components = background.match(/\d+/g);
  const bgDelta = (components[0] * 0.299) + (components[1] * 0.587) + (components[2] * 0.114);

  return ((255 - bgDelta) < nThreshold) ? '#000' : '#fff';
};
