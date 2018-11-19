'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/background-1.jpg', 'images/background-2.jpg', 'images/background-3.jpg', 'images/copy-1.png', 'images/copy-2.png', 'images/copy-3.png', 'images/copy-4.png', 'images/copy-5.png', 'images/cta.png', 'images/logo-small.png', 'images/logo-symbol.png', 'images/logo-text.png', 'images/tagline.png'];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  this.background3a = this.smartObject({
    backgroundImage: 'images/background-3.jpg',
    backgroundSize: '808px 100px',
    backgroundPosition: 'left top',
    width: 404,
    height: 100,
    left: -20,
    top: -5,
    parent: this.banner
  });

  this.background3b = this.smartObject({
    backgroundImage: 'images/background-3.jpg',
    backgroundSize: '728px 90px',
    backgroundPosition: 'right top',
    width: 182,
    height: 90,
    left: 'none',
    right: 0,
    parent: this.banner
  });

  this.block5 = this.smartObject({
    backgroundColor: '#fff',
    width: 182,
    height: 90,
    left: 'none',
    right: 180,
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    parent: this.banner
  });

  this.logoSmall = this.smartObject({
    backgroundImage: 'images/logo-small.png',
    retina: true,
    parent: this.banner
  });

  this.copy5 = this.smartObject({
    backgroundImage: 'images/copy-5.png',
    retina: true,
    parent: this.banner
  });

  this.cta = this.smartObject({
    backgroundImage: 'images/cta.png',
    retina: true,
    parent: this.banner
  });

  this.tagline = this.smartObject({
    backgroundImage: 'images/tagline.png',
    retina: true,
    parent: this.banner
  });

  this.copy4 = this.smartObject({
    backgroundImage: 'images/copy-4.png',
    retina: true,
    parent: this.banner
  });

  this.background2a = this.smartObject({
    backgroundImage: 'images/background-2.jpg',
    backgroundSize: '728px 90px',
    backgroundPosition: '-182px top',
    width: 182,
    height: 90,
    left: 182,
    parent: this.banner
  });

  this.background2bContainer = this.smartObject({
    width: 364,
    height: 90,
    left: 364,
    overflow: 'hidden',
    parent: this.banner
  });

  this.background2b = this.smartObject({
    backgroundImage: 'images/background-2.jpg',
    backgroundSize: '728px 90px',
    backgroundPosition: '-364px top',
    width: 364,
    height: 90,
    parent: this.background2bContainer
  });

  this.background2c = this.smartObject({
    backgroundImage: 'images/background-2.jpg',
    backgroundSize: '728px 90px',
    backgroundPosition: 'left top',
    width: 182,
    height: 90,
    parent: this.banner
  });

  this.block3 = this.smartObject({
    backgroundColor: '#fff',
    width: 182,
    height: 90,
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    parent: this.banner
  });

  this.copy2 = this.smartObject({
    backgroundImage: 'images/copy-2.png',
    retina: true,
    parent: this.banner
  });

  this.block4 = this.smartObject({
    backgroundColor: '#fff',
    width: 182,
    height: 90,
    left: 182,
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    parent: this.banner
  });

  this.copy3 = this.smartObject({
    backgroundImage: 'images/copy-3.png',
    retina: true,
    parent: this.banner
  });

  this.background1c = this.smartObject({
    backgroundImage: 'images/background-1.jpg',
    backgroundSize: '728px 90px',
    backgroundPosition: 'left top',
    width: 182,
    height: 90,
    parent: this.banner
  });

  this.background1bContainer = this.smartObject({
    width: 364,
    height: 90,
    left: 364,
    overflow: 'hidden',
    parent: this.banner
  });

  this.background1b = this.smartObject({
    backgroundImage: 'images/background-1.jpg',
    backgroundSize: '728px 90px',
    backgroundPosition: '-364px top',
    width: 364,
    height: 90,
    parent: this.background1bContainer
  });

  this.background1a = this.smartObject({
    backgroundImage: 'images/background-1.jpg',
    backgroundSize: '728px 90px',
    backgroundPosition: '-182px top',
    width: 182,
    height: 150,
    left: 182,
    parent: this.banner
  });

  this.block1 = this.smartObject({
    backgroundColor: '#fff',
    width: 182,
    height: 90,
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    parent: this.banner
  });

  this.block2 = this.smartObject({
    backgroundColor: '#fff',
    width: 182,
    height: 90,
    left: 182,
    boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.25)',
    parent: this.banner
  });

  this.logoSymbol = this.smartObject({
    backgroundImage: 'images/logo-symbol.png',
    retina: true,
    parent: this.banner
  });

  this.logoText = this.smartObject({
    backgroundImage: 'images/logo-text.png',
    retina: true,
    parent: this.banner
  });

  this.copy1 = this.smartObject({
    backgroundImage: 'images/copy-1.png',
    retina: true,
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.background3a.set({ scale: 0.9 });
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var bg1Tween = new TweenMax.to(this.background1b, 7, { scale: 1.1, ease: Power0.easeNone }).pause();
  var bg2Tween = new TweenMax.to(this.background2b, 5, { scale: 1.1, y: -5, ease: Power0.easeNone }).pause();
  var bg3Tween = new TweenMax.to(this.background3a, 7, { scale: 1, ease: Power0.easeNone }).pause();

  this.timeline = new TimelineLite({ delay: 0.5 }).from(this.logoSymbol, 0.8, { autoAlpha: 0, y: '-=1', ease: Power3.easeInOut }, 'frame1').from(this.logoText, 0.8, { autoAlpha: 0, y: '+=10', ease: Power3.easeInOut }, 'frame1+=0.2').from(this.background1a, 0.8, { autoAlpha: 0, ease: Power3.easeInOut }, 'frame1+=0.2').from(this.background1b, 0.8, { autoAlpha: 0, ease: Power3.easeInOut, onStart: function onStart() {
      bg1Tween.play();
    } }, 'frame1+=0.4').to([this.block1, this.logoSymbol, this.logoText], 0.8, { autoAlpha: 0, ease: Power2.easeOut }, 'frame1+=3').addLabel('frame2', 'frame1+=3').from([this.block2, this.background1c], 0.8, { autoAlpha: 0, ease: Power2.easeOut }, 'frame2').from(this.copy1, 1.2, { autoAlpha: 0, x: '+=10', ease: Power3.easeInOut }, 'frame2+=0.4').set(this.background1a, { autoAlpha: 0 }, 'frame2+=0.8').to([this.block2, this.copy1, this.background1a, this.background1b, this.background1c], 0.7, { autoAlpha: 0, ease: Power2.easeOut }, 'frame2+=3.5').addLabel('frame3', 'frame2+=3.66').from(this.block3, 0.8, { autoAlpha: 0, ease: Power2.easeOut }, 'frame3').from(this.copy2, 0.8, { autoAlpha: 0, y: '+=10', ease: Power3.easeInOut }, 'frame3').from(this.background2a, 0.8, { autoAlpha: 0, ease: Power3.easeInOut }, 'frame3+=0.2').from(this.background2b, 0.8, { autoAlpha: 0, ease: Power3.easeInOut, onStart: function onStart() {
      bg2Tween.play();
    } }, 'frame3+=0.4').to([this.block3, this.copy2, this.background2a], 0.8, { autoAlpha: 0, ease: Power2.easeOut }, 'frame3+=3.5').addLabel('frame4', 'frame3+=3.66').from([this.block4, this.background2c], 0.8, { autoAlpha: 0, ease: Power2.easeOut }, 'frame4').from(this.copy3, 1.2, { autoAlpha: 0, y: '-=10', ease: Power3.easeInOut }, 'frame4+=0.4').to([this.block4, this.copy3, this.background2a, this.background2b, this.background2c], 0.7, { autoAlpha: 0, ease: Power3.easeOut }, 'frame4+=3.5').addLabel('frame5', 'frame4+=3.66').from(this.block5, 0.8, { autoAlpha: 0, ease: Power2.easeOut }, 'frame5').from(this.copy4, 0.8, { autoAlpha: 0, x: '-=10', ease: Power3.easeInOut }, 'frame5').from(this.background3b, 0.8, { autoAlpha: 0, ease: Power3.easeInOut }, 'frame5+=0.2').from(this.background3a, 0.8, { autoAlpha: 0, ease: Power3.easeInOut, onStart: function onStart() {
      bg3Tween.play();
    } }, 'frame5+=0.4').to(this.copy4, 0.8, { autoAlpha: 0, ease: Power2.easeOut }, 'frame5+=4.5').addLabel('frame6', 'frame5+=4.5').to(this.block5, 0.8, { width: 455, ease: Power2.easeOut }, 'frame6').staggerFrom([this.logoSmall, this.copy5, this.tagline, this.cta], 1.2, { autoAlpha: 0, y: '+=5', ease: Power3.easeInOut }, 0.2, 'frame6');
};