'use strict';

/**
 * Run the animation functions.
 */

Banner.prototype.start = function () {
  var _this = this;

  this.banner = document.querySelector('.banner');

  this.bannerWidth = this.banner.offsetWidth;
  this.bannerHeight = this.banner.offsetHeight;

  // Image array for preloading
  this.images = ['images/copy1.png', 'images/copy2.png', 'images/copy3.png', 'images/cta.svg', 'images/cta2.png', 'images/legal.png', 'images/lines.svg', 'images/logo.svg', 'images/mask.png', 'images/play.svg', 'images/poster.jpg', 'images/replay.png', 'images/scrubber.svg', 'images/thumbnail1.png', 'images/thumbnail2.png', 'images/thumbnail3.png', 'images/thumbnail4.png', 'images/title1.png', 'images/title2.png', 'images/title3.png', 'images/title4.png', 'images/trapezoid.svg'];

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
  this.bg = this.smartObject({
    id: 'BG',
    background: 'radial-gradient(circle at center, #374955, #33434f 10%, #25323b)',
    width: this.bannerWidth,
    height: this.bannerHeight,
    parent: this.banner
  });

  this.createVideoCarousel();

  this.overlay = this.smartObject({
    id: 'OVERLAY',
    backgroundImage: 'images/trapezoid.svg',
    parent: this.banner
  });

  this.lines = this.smartObject({
    id: 'LINES',
    backgroundImage: 'images/lines.svg',
    parent: this.banner
  });

  this.logo = this.smartObject({
    id: 'LOGO',
    backgroundImage: 'images/logo.svg',
    left: 'none',
    right: 18,
    parent: this.banner
  });

  this.cta2 = this.smartObject({
    id: 'CTA2',
    backgroundImage: 'images/cta2.png',
    retina: true,
    left: 36,
    parent: this.banner
  });

  this.cta = this.smartObject({
    id: 'CTA',
    width: 120,
    height: 40,
    top: 162,
    left: 38,
    overflow: 'hidden',
    parent: this.banner
  });

  this.ctaOut = this.smartObject({
    backgroundImage: 'images/cta.svg',
    backgroundSize: '100% 200%',
    backgroundPosition: 'center top',
    width: 120,
    height: 40,
    parent: this.cta
  });

  this.ctaOver = this.smartObject({
    backgroundImage: 'images/cta.svg',
    backgroundSize: '100% 200%',
    backgroundPosition: 'center bottom',
    width: 120,
    height: 40,
    autoAlpha: 0,
    parent: this.cta
  });

  for (var i = 1; i <= 3; i += 1) {
    this['copy' + i] = this.smartObject({
      id: 'COPY' + i,
      backgroundImage: 'images/copy' + i + '.png',
      retina: true,
      left: 36,
      parent: this.banner
    });
  }

  this.legal = this.smartObject({
    id: 'LEGAL',
    backgroundImage: 'images/legal.png',
    top: 'none',
    bottom: 0,
    parent: this.banner
  });

  this.popup = this.smartObject({
    id: 'POPUP',
    height: 250,
    backgroundColor: '#fff',
    width: this.bannerWidth,
    parent: this.banner
  });

  this.close = this.smartObject({
    id: 'CLOSE',
    left: 'none',
    right: 21,
    top: 20,
    innerHTML: 'Close X',
    parent: this.popup
  });

  this.popupContent = this.smartObject({
    id: 'popupContent',
    position: 'relative',
    parent: this.popup
  });

  this.legalArea = this.smartObject({
    id: 'LEGAL-CLICK',
    width: this.bannerWidth,
    height: 23,
    top: 'none',
    bottom: 0,
    parent: this.banner,
    zIndex: 4
  });
};

/**
 * Setup initial element states.
 */
Banner.prototype.setup = function () {
  var _this2 = this;

  this.cta.addEventListener('mouseover', function () {
    TweenLite.set(_this2.ctaOver, { autoAlpha: 1 });
  });

  this.cta.addEventListener('mouseout', function () {
    TweenLite.set(_this2.ctaOver, { autoAlpha: 0 });
  });

  this.setupPopup();
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
Banner.prototype.animate = function () {};

Banner.prototype.createVideoCarousel = function () {
  var _this3 = this;

  var videoTl = void 0;
  var currentVideo = null;
  var videoData = [{
    title: 'images/title1.png',
    thumbnail: 'images/thumbnail1.png',
    videoUrl: Enabler.getUrl('https://gcdn.2mdn.net/videoplayback/id/ecf1b07e438a6ac0/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3660718419/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/B87B6C29A52841FC34D5364A81A8FC724B0CA436.55EE2A3733979E244EDDF1477142055D83D757BB/key/ck2/file/file.mp4')
  }, {
    title: 'images/title2.png',
    thumbnail: 'images/thumbnail2.png',
    videoUrl: Enabler.getUrl('https://gcdn.2mdn.net/videoplayback/id/42c1297847bc94dc/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3660718443/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/949922E072AE9E40480DE65B474CE8EC53ADE534.286A7B1BC5E595ABFEC7BE0DE994FC680F996496/key/ck2/file/file.mp4')
  }, {
    title: 'images/title3.png',
    thumbnail: 'images/thumbnail3.png',
    videoUrl: Enabler.getUrl('https://gcdn.2mdn.net/videoplayback/id/6e356b0913d808dd/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3660718454/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/326CA9369CECE148223671E58C6DF0FAD6D4C7A6.95D2F2CC3250728E5CF1C6A59280C39F8753CEB7/key/ck2/file/file.mp4')
  }, {
    title: 'images/title4.png',
    thumbnail: 'images/thumbnail4.png',
    videoUrl: Enabler.getUrl('https://gcdn.2mdn.net/videoplayback/id/c9c19d83492380d4/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fmp4/acao/yes/ip/0.0.0.0/ipbits/0/expire/3660718468/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/441A128CEDCAC397297F8FAF1D745D907F2F12C2.9D569C382ADA3E436DE52FB0251E0C547C1B0ED9/key/ck2/file/file.mp4')
  }];

  this.videoCarouselContainer = this.smartObject({
    width: 622,
    height: this.bannerHeight,
    left: 348,
    parent: this.banner
  });

  this.videoCarousel = this.smartObject({
    width: 200 * videoData.length,
    height: 228,
    parent: this.videoCarouselContainer
  });

  videoData.forEach(function (video, j) {
    _this3['video' + j] = _this3.smartObject({
      id: 'VIDEO' + j,
      width: 200,
      height: 188,
      left: 200 * j,
      y: 20,
      overflow: 'hidden',
      boxShadow: 'none',
      parent: _this3.videoCarousel
    });

    _this3['videoThumbnail' + j] = _this3.smartObject({
      id: 'VIDEO-THUMBNAIL' + j,
      backgroundImage: video.thumbnail,
      backgroundSize: 'cover',
      parent: _this3['video' + j]
    });

    _this3['videoTint' + j] = _this3.smartObject({
      id: 'VIDEO-TINT' + j,
      backgroundColor: '#000',
      width: 200,
      height: '100%',
      opacity: 0.5,
      parent: _this3['video' + j]
    });

    _this3['videoTitle' + j] = _this3.smartObject({
      id: 'VIDEO-TITLE' + j,
      backgroundImage: video.title,
      y: 45,
      left: '50%',
      x: '-50%',
      parent: _this3['video' + j]
    });

    _this3['videoPlay' + j] = _this3.smartObject({
      id: 'VIDEO-PLAY' + j,
      backgroundImage: 'images/play.svg',
      y: 95,
      left: '50%',
      x: '-50%',
      opacity: 0,
      parent: _this3['video' + j]
    });

    _this3['video' + j].addEventListener('mouseover', function () {
      TweenLite.to(_this3['video' + j], 0.8, { height: 228, y: 0, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)' });
      TweenLite.to(_this3['videoTint' + j], 0.8, { opacity: 0 });
      TweenLite.to(_this3['videoPlay' + j], 0.2, { opacity: 1 });
    });

    _this3['video' + j].addEventListener('mouseout', function () {
      TweenLite.to(_this3['video' + j], 0.8, { height: 188, y: 20, boxShadow: 'none' });
      TweenLite.to(_this3['videoTint' + j], 0.8, { opacity: 0.5 });
      TweenLite.to(_this3['videoPlay' + j], 0.2, { opacity: 0 });
    });

    _this3['video' + j].addEventListener('click', function () {
      console.log(j);
      Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
        studio.video.Reporter.attach('VIDEO_' + j, _this3.video);
      });
      currentVideo = videoData[j].videoUrl;
      videoTl.play('start');
    });
  });

  this.scrubberTrack = this.smartObject({
    id: 'SCRUBBER-TRACK',
    backgroundColor: '#fff',
    width: '100%',
    height: 2,
    top: 'none',
    bottom: 40,
    parent: this.videoCarouselContainer
  });

  this.scrubber = this.smartObject({
    id: 'SCRUBBER',
    backgroundImage: 'images/scrubber.svg',
    y: -14.5,
    parent: this.scrubberTrack
  });

  var carouselTl = new TimelineMax({ paused: true }).to(this.videoCarousel, 1, { x: this.videoCarouselContainer.offsetWidth - this.videoCarousel.offsetWidth });

  var _positionScrubber = function _positionScrubber(e) {
    var leftOffset = _this3.videoCarouselContainer.getBoundingClientRect().left;
    var pos = (e.clientX - leftOffset) / _this3.scrubberTrack.offsetWidth * 100;
    var scrubberPos = e.clientX - leftOffset;

    if (pos <= 100 && pos >= 0) {
      carouselTl.totalProgress(pos / 100);
    }

    if (scrubberPos <= 593 && scrubberPos >= 0) {
      TweenMax.set(_this3.scrubber, { x: scrubberPos });
    }
  };

  var _onMouseMove = function _onMouseMove(e) {
    e.preventDefault();

    _positionScrubber(e);
  };

  var _onMouseUp = function _onMouseUp() {
    // if (this.playControl.classList.contains('paused')) {
    //   this.timeline.pause();
    // } else {
    //   this.timeline.play();
    // }

    // this.timeline.seek(this.timeline.totalTime());
    document.removeEventListener('mousemove', _onMouseMove);
  };
  var _onMouseDown = function _onMouseDown(e) {
    carouselTl.pause();
    _positionScrubber(e);

    document.addEventListener('mouseup', _onMouseUp);
    document.addEventListener('mousemove', _onMouseMove);
  };

  this.scrubber.addEventListener('mousedown', _onMouseDown);

  this.videoContainer = this.smartObject({
    id: 'VIDEO-CONTAINER',
    backgroundColor: '#000',
    width: this.bannerWidth,
    height: this.bannerHeight,
    autoAlpha: 0,
    parent: this.banner
  });

  this.video = this.smartObject({
    id: 'VIDEO',
    type: 'video',
    width: this.bannerWidth,
    height: this.bannerHeight,
    poster: 'images/poster.jpg',
    muted: true,
    playsinline: true,
    src: videoData[0].videoUrl,
    parent: this.videoContainer
  });

  videoTl = new TimelineMax({ paused: true }).addLabel('start').to(this.videoContainer, 1.2, { autoAlpha: 1, zIndex: 110, ease: Power3.easeInOut }).call(function () {
    _this3.video.src = currentVideo;
    _this3.video.play();
  }).addPause('fadeout').to(this.videoContainer, 0.8, { autoAlpha: 0, zIndex: 0, delay: 1.5, ease: Power3.easeInOut }).call(function () {
    var k = videoData.findIndex(function (video) {
      return video.videoUrl === currentVideo;
    });

    studio.video.Reporter.detach('VIDEO_' + k);
  });

  this.video.addEventListener('ended', function () {
    videoTl.play('fadeout');
  });
};

/**
 * Set up the popup.
 */
Banner.prototype.setupPopup = function () {
  var _this4 = this;

  this.popup.set({ y: this.bannerHeight });

  this.close.set({
    fontSize: 14,
    paddingRight: 15
  });

  this.popupContent.set({
    color: '#444444',
    overflow: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 59,
    paddingBottom: 10,
    marginBottom: 10,
    fontSize: 14,
    fontFamily: 'Arial, sans-serif'
  });

  this.popupContent.innerHTML = 'For professional clients and advisers only. Not to be distributed to or relied on by retail clients. <span style=\'font-weight: bold;\'>The value of an investment and any income from it can go down as well as up and outcomes are not guaranteed. Investors may receive less than the original amount invested. </span> The Aviva Investors Multi-asset Fund range comprises the Aviva Investors Multi-asset Fund I (\u201CMAF I\u201D), the Aviva Investors Multi-asset Fund II (\u201CMAF II\u201D), the Aviva Investors Multi-asset Fund III (\u201CMAF III\u201D), the Aviva Investors Multi-asset Fund IV (\u201CMAF IV\u201D) and the Aviva Investors Multi-asset Fund V (\u201CMAF V\u201D) (together the \u201CFunds\u201D). The Funds are sub-funds of the Aviva Investors Portfolio Funds ICVC. For further information please read the latest Key Investor Information Document and Supplementary Information Document. Copies of these documents and the Prospectus are available in English free of charge on request or on our website. Issued by Aviva Investors UK Fund Services Limited, the Authorised Fund Manager. Registered in England 1973412. Authorised and regulated by the Financial Conduct Authority. Firm Reference 119310. Registered address: St Helen\u2019s, 1 Undershaft, London EC3P3DQ. An Aviva company. www.avivainvestors.com<br><br>RA18/0015/01062018';

  this.legalArea.addEventListener('click', function () {
    TweenLite.to(_this4.popup, 0.5, { y: 0, ease: Power1.easeInOut });
  });

  this.popup.addEventListener('click', function () {
    TweenLite.to(_this4.popup, 0.5, { y: _this4.bannerHeight, ease: Power1.easeInOut });
  });
};

// https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    }
  });
}