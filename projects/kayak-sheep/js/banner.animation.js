'use strict';

var DepartureBoard = DepartureBoard || '';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  this.leftOffset = 306;
  this.topOffset = 74;
  this.cellWidth = 69;
  this.cellHeight = 38;

  // Image array for preloading
  this.images = ['images/sky.jpg', 'images/bg.jpg', 'images/copy-a.png', 'images/copy-b.png', 'images/sheep-a.png', 'images/sheep-b.png', 'images/sheep-c.png', 'images/logo.png'];

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
  this.overlay = this.smartObject({
    backgroundColor: '#fff',
    height: this.bannerHeight,
    width: this.bannerWidth,
    parent: this.banner,
    zIndex: 999
  });

  this.bg = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    parent: this.banner
  });

  this.sky = this.smartObject({
    backgroundImage: 'images/sky.jpg',
    parent: this.banner,
    zIndex: 1
  });

  this.copyA = this.smartObject({
    backgroundImage: 'images/copy-a.png',
    parent: this.banner,
    zIndex: 2
  });

  this.copyB = this.smartObject({
    backgroundImage: 'images/copy-b.png',
    parent: this.banner,
    zIndex: 2
  });

  this.sheepA = this.smartObject({
    backgroundImage: 'images/sheep-a.png',
    parent: this.banner,
    zIndex: 3
  });

  this.sheepB = this.smartObject({
    backgroundImage: 'images/sheep-b.png',
    parent: this.banner,
    zIndex: 1
  });

  this.sheepC = this.smartObject({
    backgroundImage: 'images/sheep-c.png',
    parent: this.banner,
    zIndex: 3
  });

  this.departureBoard = this.smartObject({
    parent: this.banner
  });

  this.logoLetterTop1 = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '0 0',
    left: this.leftOffset,
    top: this.topOffset,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.banner
  });

  this.logoLetterTop2 = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth + 'px 0',
    left: this.logoLetterTop1.offsetLeft + this.cellWidth,
    top: this.logoLetterTop1.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.banner
  });

  this.logoLetterTop3 = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth * 2 + 'px 0',
    left: this.logoLetterTop2.offsetLeft + this.cellWidth,
    top: this.logoLetterTop2.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.banner
  });

  this.logoLetterTop4 = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth * 3 + 'px 0',
    left: this.logoLetterTop3.offsetLeft + this.cellWidth,
    top: this.logoLetterTop3.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.banner
  });

  this.logoLetterTop5 = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth * 4 + 'px 0',
    left: this.logoLetterTop4.offsetLeft + this.cellWidth,
    top: this.logoLetterTop4.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.banner
  });

  this.logoLetters = this.smartObject({
    parent: this.banner
  });

  this.logoLetterBottom1 = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '0 -' + this.cellHeight + 'px',
    left: this.leftOffset,
    top: this.logoLetterTop5.offsetTop + this.cellHeight,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.logoLetters
  });

  this.logoLetterBottom2 = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth + 'px -' + this.cellHeight + 'px',
    left: this.logoLetterBottom1.offsetLeft + this.cellWidth,
    top: this.logoLetterBottom1.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.logoLetters
  });

  this.logoLetterBottom3 = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth * 2 + 'px -' + this.cellHeight + 'px',
    left: this.logoLetterBottom2.offsetLeft + this.cellWidth,
    top: this.logoLetterBottom2.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.logoLetters
  });

  this.logoLetterBottom4 = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth * 3 + 'px -' + this.cellHeight + 'px',
    left: this.logoLetterBottom3.offsetLeft + this.cellWidth,
    top: this.logoLetterBottom3.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.logoLetters
  });

  this.logoLetterBottom5 = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth * 4 + 'px -' + this.cellHeight + 'px',
    left: this.logoLetterBottom4.offsetLeft + this.cellWidth,
    top: this.logoLetterBottom4.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.logoLetters
  });

  this.logoBackface1 = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    left: this.leftOffset,
    top: this.topOffset + this.cellHeight,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.logoLetters
  });

  this.logoBackface2 = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    left: this.logoBackface1.offsetLeft + this.cellWidth,
    top: this.logoBackface1.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.logoLetters
  });

  this.logoBackface3 = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    left: this.logoBackface2.offsetLeft + this.cellWidth,
    top: this.logoBackface2.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.logoLetters
  });

  this.logoBackface4 = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    left: this.logoBackface3.offsetLeft + this.cellWidth,
    top: this.logoBackface3.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.logoLetters
  });

  this.logoBackface5 = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    left: this.logoBackface4.offsetLeft + this.cellWidth,
    top: this.logoBackface4.offsetTop,
    width: this.cellWidth,
    height: this.cellHeight,
    parent: this.logoLetters
  });

  this.logoExtra = this.smartObject({
    parent: this.banner
  });

  this.logoRegisterTop = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth * 5 + 'px 0',
    left: this.logoLetterBottom5.offsetLeft + this.cellWidth,
    top: this.logoLetterTop1.offsetTop,
    width: (this.cellWidth - 5) / 2,
    height: this.cellHeight / 2,
    parent: this.logoExtra
  });

  this.logoRegisterBottom = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth * 5 + 'px -' + this.cellHeight / 2 + 'px',
    left: this.logoLetterBottom5.offsetLeft + this.cellWidth,
    top: this.logoLetterTop1.offsetTop + this.cellHeight / 2,
    width: (this.cellWidth - 5) / 2,
    height: this.cellHeight / 2,
    parent: this.logoExtra
  });

  this.logoRegisterBackface = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    left: this.logoLetterBottom5.offsetLeft + this.cellWidth,
    top: this.logoLetterTop1.offsetTop + this.cellWidth / 4,
    width: (this.cellWidth - 5) / 2,
    height: this.cellHeight / 2,
    parent: this.logoExtra
  });

  this.logoDomainTop = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth * 5 + 'px -' + this.cellHeight + 'px',
    left: this.logoLetterBottom5.offsetLeft + this.cellWidth,
    top: this.logoLetterBottom4.offsetTop,
    width: this.cellWidth + this.cellWidth / 2,
    height: this.cellHeight / 2,
    parent: this.logoExtra
  });

  this.logoDomainBottom = this.smartObject({
    backgroundImage: 'images/logo.png',
    backgroundPosition: '-' + this.cellWidth * 5 + 'px -' + (this.cellHeight + this.cellHeight / 2) + 'px',
    left: this.logoLetterBottom5.offsetLeft + this.cellWidth,
    top: this.logoLetterBottom4.offsetTop + this.cellHeight / 2,
    width: this.cellWidth + this.cellWidth / 2,
    height: this.cellHeight / 2,
    parent: this.logoExtra
  });

  this.logoDomainBackface = this.smartObject({
    backgroundImage: 'images/bg.jpg',
    left: this.logoLetterBottom5.offsetLeft + this.cellWidth,
    top: this.logoLetterBottom4.offsetTop + this.cellWidth / 4,
    width: this.cellWidth + this.cellWidth / 2,
    height: this.cellHeight / 2,
    parent: this.logoExtra
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.overlay.set({ autoAlpha: 0 });
  this.bg.set({ autoAlpha: 0 });
  this.sky.set({ autoAlpha: 0 });
  this.copyA.centerVertical();
  this.copyA.set({ autoAlpha: 0, left: 140 });
  this.copyB.centerVertical();
  this.copyB.set({ autoAlpha: 0, left: 140 });
  this.sheepA.center();
  this.sheepA.set({ x: -this.bannerWidth, y: 300 });
  this.sheepB.center();
  this.sheepB.set({ x: -this.bannerWidth, y: 300 });
  this.sheepC.center();
  this.sheepC.set({ x: -this.bannerWidth, y: 300 });
  this.logoBackface1.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 180 });
  this.logoBackface2.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 180 });
  this.logoBackface3.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 180 });
  this.logoBackface4.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 180 });
  this.logoBackface5.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 180 });
  this.logoLetterTop1.set({ autoAlpha: 0, transformOrigin: '0 0' });
  this.logoLetterTop2.set({ autoAlpha: 0, transformOrigin: '0 0' });
  this.logoLetterTop3.set({ autoAlpha: 0, transformOrigin: '0 0' });
  this.logoLetterTop4.set({ autoAlpha: 0, transformOrigin: '0 0' });
  this.logoLetterTop5.set({ autoAlpha: 0, transformOrigin: '0 0' });
  this.logoLetterBottom1.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 90 });
  this.logoLetterBottom2.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 90 });
  this.logoLetterBottom3.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 90 });
  this.logoLetterBottom4.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 90 });
  this.logoLetterBottom5.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 90 });
  this.logoDomainTop.set({ autoAlpha: 0, transformOrigin: '0 0' });
  this.logoRegisterTop.set({ autoAlpha: 0, transformOrigin: '0 0' });
  this.logoDomainBottom.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 90 });
  this.logoRegisterBottom.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 90 });
  this.logoDomainBackface.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 180 });
  this.logoRegisterBackface.set({ autoAlpha: 0, transformOrigin: '0 0', rotationX: 180 });

  this.logoLetterArrayTop = [this.logoLetterTop1, this.logoLetterTop2, this.logoLetterTop3, this.logoLetterTop4, this.logoLetterTop5];
  this.logoLetterArrayBottom = [this.logoLetterBottom1, this.logoLetterBottom2, this.logoLetterBottom3, this.logoLetterBottom4, this.logoLetterBottom5];
  this.logoBackfaceArray = [this.logoBackface1, this.logoBackface2, this.logoBackface3, this.logoBackface4, this.logoBackface5];

  this.logoExtraArrayTop = [this.logoRegisterTop, this.logoDomainTop];
  this.logoExtraArrayBottom = [this.logoRegisterBottom, this.logoDomainBottom];
  this.logoExtraArrayBackface = [this.logoRegisterBackface, this.logoDomainBackface];
};

/**
 * Hide the preloader.
 */
Banner.prototype.hidePreloader = function () {
  TweenLite.to('.preloader', 1, { autoAlpha: 0 });
};

/**
 * Animate the letters.
 */
Banner.prototype.animateLetters = function () {
  this.board = new DepartureBoard(this.departureBoard, { rowCount: 2, letterCount: 20 });
  this.board.setValue(['Stop searching.', 'Start finding.']);
};

/**
 * Animate the logo.
 */
Banner.prototype.animateLogo = function () {
  var _this = this;

  TweenLite.set(this.logoLetters, { perspective: 500 });
  TweenLite.set(this.logoExtra, { perspective: 500 });

  for (var i = 0; i < _this.logoLetterArrayTop.length; i++) {
    (function (i) {
      setTimeout(function () {
        new TimelineLite().set(_this.logoLetterArrayTop[i], { autoAlpha: 1 }).set(_this.logoBackfaceArray[i], { autoAlpha: 1, rotationX: -180 }).to(_this.logoBackfaceArray[i], 0.2, { rotationX: -90, ease: Linear.easeOut });
        new TimelineLite().set(_this.logoLetterArrayBottom[i], { autoAlpha: 1, rotationX: -90, delay: 0.2 }).set(_this.logoBackfaceArray[i], { autoAlpha: 0 }).to(_this.logoLetterArrayBottom[i], 0.4, { rotationX: 0, ease: Bounce.easeOut });
      }, i * 120);
    })(i);
  }

  for (var j = 0; j < _this.logoExtraArrayTop.length; j++) {
    (function (j) {
      setTimeout(function () {
        new TimelineLite().set(_this.logoExtraArrayTop[j], { autoAlpha: 1 }).set(_this.logoExtraArrayBackface[j], { autoAlpha: 1, rotationX: -180 }).to(_this.logoExtraArrayBackface[j], 0.2, { rotationX: -90, ease: Linear.easeOut });
        new TimelineLite().set(_this.logoExtraArrayBottom[j], { autoAlpha: 1, rotationX: -90, delay: 0.2 }).set(_this.logoExtraArrayBackface[j], { autoAlpha: 0 }).to(_this.logoExtraArrayBottom[j], 0.4, { rotationX: 0, ease: Bounce.easeOut });
      }, 500 + j * 220);
    })(j);
  }
};

/**
 * Reset logo.
 */
Banner.prototype.reset = function () {
  // Reset departure board letters
  var _this = this;
  for (var r = 0, rl = this.board._letters.length; r < rl; r++) {
    for (var i = 0, l = this.board._letters[r].length; i < l; i++) {
      (function (r, i) {
        setTimeout(function () {
          TweenLite.set(_this.board._letters[r][i]._element, { autoAlpha: 1 });
        }, 4500 + 25 * i + Math.random() * 500);
      })(r, i);
    }
  }

  var row = this.departureBoard.querySelectorAll('.row');

  for (var d = 0; d < row.length; d++) {
    this.departureBoard.removeChild(row[d]);
  }

  // Reset logo
  for (var t = 0; t < this.logoLetterArrayTop.length; t++) {
    TweenLite.set(this.logoLetterArrayTop[t], { autoAlpha: 0 });
    TweenLite.set(this.logoLetterArrayBottom[t], { autoAlpha: 0 });
    TweenLite.set(this.logoBackfaceArray[t], { autoAlpha: 0 });
  }

  for (var e = 0; e < this.logoExtraArrayTop.length; e++) {
    TweenLite.set(this.logoExtraArrayTop[e], { autoAlpha: 0 });
    TweenLite.set(this.logoExtraArrayBottom[e], { autoAlpha: 0 });
    TweenLite.set(this.logoExtraArrayBackface[e], { autoAlpha: 0 });
  }
};

/**
 * Animation timeline.
 */
Banner.prototype.animate = function () {
  var _this = this;

  function loop() {
    _this.timeline.gotoAndPlay('start');
  }

  function animateLetters() {
    _this.animateLetters();
  }

  function animateLogo() {
    _this.animateLogo();
  }

  function reset() {
    _this.reset();
  }

  var inCurve = [{ x: -300, y: 0 }, { x: 0, y: 0 }];
  var outCurve = [{ x: 300, y: 0 }, { x: this.bannerWidth, y: 300 }];

  var sheepAnimation = new TimelineLite({ paused: true }).add([TweenLite.to(this.sheepA, 2, { bezier: inCurve, ease: Power1.easeInOut }), TweenLite.to(this.sheepA, 1, { y: 20, ease: Power1.easeInOut, delay: 2 }), TweenLite.to(this.sheepA, 1, { y: 0, ease: Power1.easeInOut, delay: 3 }), TweenLite.to(this.sheepA, 2, { bezier: outCurve, ease: Power1.easeInOut, delay: 4 }), TweenLite.to(this.sheepB, 2, { bezier: inCurve, ease: Power1.easeInOut, delay: 4 }), TweenLite.to(this.sheepB, 1, { y: 20, ease: Power1.easeInOut, delay: 6 }), TweenLite.to(this.sheepB, 1, { y: 0, ease: Power1.easeInOut, delay: 7 }), TweenLite.to(this.sheepB, 2, { bezier: outCurve, ease: Power1.easeInOut, delay: 8 }), TweenLite.to(this.sheepC, 2, { bezier: inCurve, ease: Power1.easeInOut, delay: 8 }), TweenLite.to(this.sheepC, 1, { y: 20, ease: Power1.easeInOut, delay: 10 }), TweenLite.to(this.sheepC, 1, { y: 0, ease: Power1.easeInOut, delay: 11 }), TweenLite.to(this.sheepC, 2, { bezier: outCurve, ease: Power1.easeInOut, delay: 12 })]);

  this.timeline = new TimelineLite({ onComplete: loop }).addLabel('start').to([this.sky, this.copyA], 1, { autoAlpha: 1, delay: 0.5 }).add(sheepAnimation.play()).add([TweenLite.to(this.copyA, 0.5, { autoAlpha: 0 }), TweenLite.to(this.copyB, 0.5, { autoAlpha: 1, delay: 0.5 })]).set({}, {}, '+=4').add([TweenLite.to([this.sky, this.copyB], 0.5, { autoAlpha: 0 }), TweenLite.to(this.bg, 0.5, { autoAlpha: 1, delay: 0.5 })]).call(animateLetters).set({}, {}, '+=8').call(animateLogo).set({}, {}, '+=6').to(this.overlay, 1, { autoAlpha: 1 }).call(reset);
};