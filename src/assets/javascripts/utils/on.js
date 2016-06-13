import 'element-closest';

module.exports = (parentSelector, eventName, selector, fn) => {
  const parentEl = document.querySelector(parentSelector);

  parentEl.addEventListener(eventName, event => {
    const target = event.target;

    let el;

    if (target.matches(selector)) {
      el = target;
    } else if (target.closest(selector)) {
      el = target.closest(selector);
    }

    if (el) {
      fn(event, el);
    }
  });
};
