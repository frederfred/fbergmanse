const elSelector = '.js-glitch';
const triggerElSelector = '.js-glitch-trigger';
const el = document.querySelector(elSelector);
const elTrigger = document.querySelector(triggerElSelector);

const activeState = 'is-active';

function addSvg() {
  /* eslint-disable max-len */
  el.insertAdjacentHTML(
    'afterend',
    `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" class="u-svgFilter">
      <defs>
        <filter id="filter-glitch">
          <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="1" />
          <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="15" in="SourceGraphic" />
        </filter>
      </defs>
    </svg>`,
  );
  /* eslint-enable max-len */
}

function onClick() {
  el.classList.toggle(activeState);
}

function setupEventListeners() {
  elTrigger.addEventListener('click', onClick, false);
}

function init() {
  addSvg();
  setupEventListeners();
}

init();
