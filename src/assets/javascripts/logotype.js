import on from './utils/on';
import randomNumber from './utils/random-number';
import getHexFromHue from './utils/get-hex-from-hue';
import getForegroundFromBackground from './utils/get-foreground-from-background';

const elSelector = '.js-logotype';
const characterElSelector = 'span';
const el = document.querySelector(elSelector);
const characterEls = el.querySelectorAll(characterElSelector);

function rainbow() {
  let rainbowAt = randomNumber(0, 360);

  [].slice.call(characterEls).forEach((charEl, i) => {
    const hue = (rainbowAt + i) % 360;
    const charElCopy = charEl;
    const bgColor = getHexFromHue(hue);

    charElCopy.style.backgroundColor = bgColor;
    charElCopy.style.color = getForegroundFromBackground(bgColor);

    rainbowAt++;
  });
}

function onMouseOver() {
  rainbow();
}

function setupEventListeners() {
  on(elSelector, 'mouseover', characterElSelector, onMouseOver);
}

function init() {
  rainbow();
  setupEventListeners();
}

init();
