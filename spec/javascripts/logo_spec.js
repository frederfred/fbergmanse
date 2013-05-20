describe('Logo', function() {
  var logo;

  beforeEach(function() {
    var el = document.createElement('pre');
    el.innerHTML = '# ## # ## #';
    logo = new Logo(el);
  });

  describe('wrapHashes', function() {

    it('should wrap hashes in i tags', function() {
      expect(logo.el.getElementsByTagName('i').length).toBe(7);
    });

  });

  describe('eventListeners', function() {

    it('should setup event listeners', function() {
      spyOn(logo, 'addEvent');
      logo.eventListeners();
      expect(logo.addEvent).toHaveBeenCalled();
    });

  });

  describe('loop', function() {

    it('should update looping state', function() {
      logo.isLooping = false;
      logo.loop();
      expect(logo.isLooping).toBeTruthy();
    });


    it('should setup interval', function() {
      logo.interval = null;
      logo.loop();
      expect(logo.interval).not.toBe(null);
    });

    it('should call requestAnimationFrame', function() {
      spyOn(window, 'requestAnimationFrame');
      logo.loop();
      expect(window.requestAnimationFrame).toHaveBeenCalled();
    });

  });

  describe('stopLoop', function() {

    it('should update looping state', function() {
      logo.isLooping = true;
      logo.stopLoop();
      expect(logo.isLooping).toBeFalsy();
    });

    it('should clear interval', function() {
      logo.interval = 1;
      logo.stopLoop();
      expect(logo.interval).toBe(null);
    });

    it('should call cancelAnimationFrame', function() {
      spyOn(window, 'cancelAnimationFrame');
      logo.stopLoop();
      expect(window.cancelAnimationFrame).toHaveBeenCalled();
    });

  });

  describe('getRandomInt', function() {

    it('should return a random integer', function() {
      spyOn(Math, 'random').andReturn(0);
      expect(logo.getRandomInt(0, 0)).toBe(0);
    });

  });

  describe('rainbow', function() {

    it('should set backgroundColor on elements in a rainbow style', function() {
      logo.rainbowAt = 0;
      logo.rainbow();

      expect(logo.whiteSpace[1].style.backgroundColor).toBe('rgb(255, 4, 0)');
    });

  });

  describe('getHexFromHue', function() {

    it('should return hex color from hue value', function() {
      expect(logo.getHexFromHue(0)).toBe('#ff0000');
    });

  });

  describe('addEvent', function() {

    it('should call add eventListener if its supported', function() {
      var noop = function() {};
      spyOn(logo.el, 'addEventListener').andReturn(noop);
      logo.addEvent('click', logo.el, noop);
      expect(logo.el.addEventListener).toHaveBeenCalledWith('click', noop, false);
    });

    it('should call add attachEvent if addEventListener isnt supported', function() {
      var noop = function() {};
      logo.el.attachEvent = noop;
      logo.el.addEventListener = false;
      spyOn(logo.el, 'attachEvent').andReturn(noop);
      logo.addEvent('click', logo.el, noop, true);
      expect(logo.el.attachEvent).toHaveBeenCalledWith('onclick', noop);
    });

  });

});
