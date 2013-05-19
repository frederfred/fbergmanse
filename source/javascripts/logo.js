(function(win, doc) {

  'use strict';

  function Logo() {
    this.el = doc.getElementsByTagName('pre')[0];
    this.wrapHashes();
    this.whiteSpace = this.el.getElementsByTagName('i');
    this.rainbowAt = this.getRandomInt(0, 360);
    this.isLooping = false;
    this.interval = null;

    this.rainbow();

    if (this.el.addEventListener) {
      this.eventListeners();
    }

  }

  Logo.prototype.wrapHashes = function() {

    var originalHTML = this.el.innerHTML;
    var wrappedHTML = originalHTML.replace(/#/g, '<i> </i>');

    this.el.outerHTML = '<pre>' + wrappedHTML + '</pre>';
    this.el = doc.getElementsByTagName('pre')[0];
  };

  Logo.prototype.eventListeners = function() {

    var self = this;

    this.el.addEventListener('mousemove', function(e) {
      if (!self.isLooping) {
        self.loop();
      }
    }, false);

    this.el.addEventListener('mouseout', function(e) {
      self.stopLoop();
    }, false);

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
      var hsl = 'hsl(' + hue + ',100%, 50%)';

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

  window.Logo = Logo;

})(window, document);
