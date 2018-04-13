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
    'images/cta.png',
    'images/legal_black.png',
    'images/legal_white.png',
    'images/logo.png',
    'images/phone.png',
    'images/screen1.png',
    'images/screen2.png'
  ];

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

  this.greenH = 250;
  this.screenW = 204,
  this.screenH = 227;

  this.mask = this.smartObject({
    id: 'MASK',
    width: 730,
    height: this.greenH,
    // backgroundColor: 'red',
    overflow: 'hidden',
    parent: this.banner
  });  

    this.bg = this.smartObject({
      id: 'BG',
      backgroundImage: 'images/bg.jpg',
      parent: this.mask
    });

      for(var i = 1; i <=2; i++){
        this[`copy${i}`] = this.smartObject({
          id:`COPY${i}`,
          backgroundImage: `images/copy${i}.png`,
          parent: this.bg
        });
      }   
  

      this.phone = this.smartObject({
        id: 'PHONE',
        backgroundImage: 'images/phone.png',
        parent: this.bg
      });  

      this.screenMask = this.smartObject({
        id: 'SCREEN-MASK',
        width: this.bannerWidth,
        height: 50,

        // backgroundColor: 'red',
        overflow: 'hidden',
        parent: this.phone
      });  

      for(var j = 1; j <=2; j++){
        this[`screen${j}`] = this.smartObject({
          id:`SCREEN${j}`,
          backgroundImage: `images/screen${j}.png`,
          parent: this.screenMask
        });
      }; 

  this.green = this.smartObject({
    id: 'GREEN',
    backgroundColor: '#2eb052',
    width: this.bannerWidth/2,
    height: this.greenH,
    parent: this.banner
  });

  this.efCover = this.smartObject({
    id: 'EF-COVER',
    backgroundColor: '#2eb052',
    width: 730,
    height: this.greenH,
    parent: this.banner
  });


  this.legal1 = this.smartObject({
    id: 'LEGAL1',
    backgroundImage: 'images/legal_black.png',
    parent: this.bg
  }); 

  this.legal2 = this.smartObject({
    id: 'LEGAL2',
    backgroundImage: 'images/legal_white.png',
    parent: this.banner
  }); 

  this.copy3 = this.smartObject({
    id:'COPY3',
    backgroundImage: 'images/copy3.png',
    parent: this.banner
  });

  this.cta = this.smartObject({
    id:'COPY3',
    backgroundImage: 'images/cta.png',
    parent: this.banner
  });


  this.logo = this.smartObject({
    id: 'LOGO',
    backgroundImage: 'images/logo.png',
    parent: this.banner
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  this.screenMask.set({top: 24, left: 430, width: this.screenW, height: this.screenH})
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
  this.intro = new TimelineMax({ paused: true })
    .fromTo(this.green, 1.3, {x:-970/2, overwrite: 'false'}, {x: 40})
    .to(this.green, 0.5, {width: '+=25', overwrite: 'false'}, '-=0.7')
    .to(this.green, 2, {width: 6, x: 730-6, overwrite: 'false'}, '-=0.2');

  this.introEased = new TimelineMax({ paused: true})
      .to(this.intro, 0.6, {progress:1, ease:Power1.easeIn});

  this.timeline = new TimelineMax({ delay: 1, paused: false , repeat: 1, repeatDelay: 2})
  
    .add(this.introEased.play(), 'intro')
    .from(this.mask, 0.5, {x: -this.bannerWidth, ease:Power1.easeIn}, 'intro')
    .from(this.bg, 0.5, {x: +this.bannerWidth, ease:Power1.easeIn}, 'intro')
    .from(this.logo, 0.5, {autoAlpha: 0}, 'intro')

    .add('copy')
    .from(this.copy1, 0.5, {autoAlpha: 0, y: 10}, '+=0.5')
    .to(this.copy1, 0.5, {autoAlpha: 0}, '+=3')
    .from(this.copy2, 0.5, {autoAlpha: 0, y: 10}, 'f2')
    .to(this.screen1, 0.5, {x: this.screenW}, 'f2')
    .from(this.screen2, 0.5, {x: -this.screenW}, 'f2')

    .add('ef')
    .from(this.efCover, 0.6, {width: 0}, '+=3')

    .from(this.legal2, 0.5, {autoAlpha: 0})
    .from(this.copy3, 0.5, {autoAlpha: 0, y: 10})
    .from(this.cta, 0.5, {autoAlpha: 0});
};
