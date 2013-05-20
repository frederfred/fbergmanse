(function(win) {

  'use strict';

  function Logo(el) {
    this.el = el;
    this.wrapHashes();
    this.whiteSpace = this.el.getElementsByTagName('i');
    this.rainbowAt = this.getRandomInt(0, 360);
    this.isLooping = false;
    this.interval = null;

    this.rainbow();
    this.eventListeners();

  }

  Logo.prototype.wrapHashes = function() {
    var originalHTML = this.el.innerHTML;
    var wrappedHTML = originalHTML.replace(/#/g, '<i> </i>');

    this.el.innerHTML = '<a href="/">' + wrappedHTML + '</a>';
  };

  Logo.prototype.eventListeners = function() {

    var self = this;

    this.addEvent('mousemove', this.el, function() {
      if (!self.isLooping) {
        self.loop();
      }
    });

    this.addEvent('mouseout', this.el, function() {
      self.stopLoop();
    });

  };

  Logo.prototype.loop = function() {

    var self = this;

    this.isLooping = true;

    this.rainbow();

    this.interval = win.requestAnimationFrame(function() {
      self.loop();
    });

  };

  Logo.prototype.stopLoop = function() {

    cancelAnimationFrame(this.interval);
    this.isLooping = false;
    this.interval = null;

  };

  Logo.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  Logo.prototype.rainbow = function() {

    var rainbowAt = this.rainbowAt;
    var i;

    for (i = this.whiteSpace.length - 1; i >= 0; i--) {

      var el = this.whiteSpace[i];
      var hue = (rainbowAt + i) % 360;

      el.style.backgroundColor = this.getHexFromHue(hue);

    }

    this.rainbowAt++;

  };

  Logo.prototype.rgbToHex = function(red, green, blue) {

    var h = ((red << 16) | (green << 8) | (blue)).toString(16);

    while (h.length < 6) {
      h = '0' + h;
    }
    return '#' + h;
  };

  Logo.prototype.getHexFromHue = function(hue) {
    var h = hue/60;
    var c = 255;
    var x = (1 - Math.abs(h % 2 - 1)) * 255;
    var color;
    var i = Math.floor(h);

    if (i === 0) color = this.rgbToHex(c, x, 0);
    else if (i === 1) color = this.rgbToHex(x, c, 0);
    else if (i === 2) color = this.rgbToHex(0, c, x);
    else if (i === 3) color = this.rgbToHex(0, x, c);
    else if (i === 4) color = this.rgbToHex(x, 0, c);
    else color = this.rgbToHex(c, 0, x);

    return color;
  };

  Logo.prototype.addEvent = function(event, el, func) {
    if (el.addEventListener) {
      el.addEventListener(event, func, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + event, func);
    }
  };


  window.Logo = Logo;

})(window);
