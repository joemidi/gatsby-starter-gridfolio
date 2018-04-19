'use strict';

/**
 * Run the animation functions.
 */
Banner.prototype.start = function () {
  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = [
    'images/bg.jpg',
    'images/copy1.png',
    'images/copy2.png',
    'images/copy3.png',
    'images/copy4.png',
    'images/cta.png',
    'images/cup1.png',
    'images/cup2.png',
    'images/cup3.png',
    'images/cup4.png',
    'images/cup5.png',
    'images/cup6.png'
  ];

  var _this = this;
  this.preloadImages(this.images, function () {
    _this.createElements();
    _this.setup();
    _this.hidePreloader();
    _this.animate();
    // _this.bindEvents();
  });
};

/**
 * Create dom elements.
 */
Banner.prototype.createElements = function () {
  this.bg = this.smartObject({
    id:'BG',
    backgroundImage: 'images/bg.jpg',
    parent: this.banner
  });

  for (var i = 4; i > 0; i--) {
    this[`copy${i}`] = this.smartObject({
      id: [`COPY${i}`],
      top: 'none',
      backgroundImage: [`images/copy${i}.png`],
      parent: this.banner
    });
  }

  this.cup1Mid = this.smartObject({
    id:'CUP1-MID',
    backgroundImage: 'images/cup1.png',
    parent: this.banner
  });

  this.cup1Top = this.smartObject({
    id:'CUP1-TOP',
    backgroundImage: 'images/cup2.png',
    parent: this.banner
  });

  this.cup2Mid = this.smartObject({
    id:'CUP2-MID',
    backgroundImage: 'images/cup3.png',
    parent: this.banner
  });

  this.cup2Top = this.smartObject({
    id:'CUP2-TOP',
    backgroundImage: 'images/cup4.png',
    parent: this.banner
  });

  this.cup3Mid = this.smartObject({
    id:'CUP3-MID',
    backgroundImage: 'images/cup5.png',
    parent: this.banner
  });

  this.cup3Top = this.smartObject({
    id:'CUP3-TOP',
    backgroundImage: 'images/cup6.png',
    parent: this.banner
  });

  this.cta = this.smartObject({
    id:'CTA',
    backgroundImage: 'images/cta.png',
    top: 'none',
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {

  for (var i = 1; i <= 3; i++) {
    this[`cup${i}Mid`].center();
    this[`copy${i}`].center();
    this[`copy${i}`].set({ autoAlpha: 0});
    this[`cup${i}Mid`].set({ autoAlpha: 0});
    this[`cup${i}Top`].set({ autoAlpha: 0});
    this[`cup${i}Top`].centerHorizontal();
  }

  //f1
  this.cup1Mid.set({ autoAlpha: 1, y: 78 });
  this.copy1.set({ autoAlpha: 1, x: 8, y: -107 });
  this.cup1Top.set({ autoAlpha: 1, x:24 });

  //f2
  this.cup2Mid.set({ autoAlpha: 1, y: 60 });
  this.copy2.set({ autoAlpha: 0, x: 1, y: -110 });
  this.cup2Top.set({ autoAlpha: 1, x:32 });

  //f3
  this.cup3Mid.set({ autoAlpha: 1, y: 51 });
  this.copy3.set({ autoAlpha: 0, x: 1, y: -110 });
  this.cup3Top.set({ autoAlpha: 1, x:12 });

  //f4
  this.cta.centerHorizontal();
  this.cta.set({ autoAlpha: 0, bottom: 85 });
  this.copy4.center();
  this.copy4.set({ autoAlpha: 0, x: 8, y: -107 });
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
  var _this = this;

  this.timeline = new TimelineLite({})
    .addLabel('start', 0)
    .to(this.cup1Mid, 1, {x: '-=220'}, '+=2')
    .from(this.cup2Mid, 1, {x: '-=220'})
    .to(this.cup1Top, 1, {y: '-=133'}, 'copy1Out')
    .to(this.copy1, 1, {autoAlpha: 0}, 'copy1Out')
    .from(this.cup2Top, 1, {y: '-=133'}, 'copy2In')
    .to(this.copy2, 1, {autoAlpha: 1}, 'copy2In')
    .to(this.cup2Mid, 1, {x: '+=220'})
    .from(this.cup3Mid, 1, {x: '+=220'})
    .to(this.cup2Top, 1, {y: '-=133'}, 'copy2Out')
    .to(this.copy2, 1, {autoAlpha: 0}, 'copy2Out')
    .from(this.cup3Top, 1, {y: '-=133'}, 'copy3In')
    .to(this.copy3, 1, {autoAlpha: 1}, 'copy3In')
    .to(this.cup3Mid, 1, {x: '-=220'}, 'copy3Out')
    .to(this.copy3, 1, {autoAlpha: 0}, 'copy3Out')
    .to(this.cup1Mid, 1, {x: 0 }, 'copy4In')
    .to(this.copy4, 1, {autoAlpha: 1}, 'copy4In')
    .to(this.cta, 1, {autoAlpha: 1})

};
