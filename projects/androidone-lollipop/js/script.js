'use strict';

//Caching the element IDs since we are waiting for other things to load anyway.
var Banner = Banner || {},
    addListeners,
    exitHandler,
    overHandler,
		outHandler,
    mainPhone = document.getElementById('main-phone'),
    copy1 = document.getElementById('copy1'),
    copy2 = document.getElementById('copy2'),
    price = document.getElementById('price'),
    mainClick = document.getElementById('main-click'),
    replay = document.getElementById('replay'),
    screenObj = document.getElementById('screen'),
    screen1 = document.getElementById('screen1'),
    screen2 = document.getElementById('screen2'),
    screen3 = document.getElementById('screen3'),
    screen4 = document.getElementById('screen4'),
    screen5 = document.getElementById('screen5');

Banner.init = function () {
	//Just an extra check to make sure all library files have loaded as well.
	if (document.readyState === "complete") {
		if (!TweenLiteJS || !CSSPluginJS || !EasePackJS) {
			setTimeout(Banner.init, 500);
		} else {
			Banner.animate();
			addListeners();
		}
	}
};

Banner.animate = function () {
	TweenLite.to(copy1, 1, { alpha: 1, delay: 1 });
	TweenLite.to(screen1, 1, { x: -96, ease: Power4.easeOut, delay: 1.75 });

	TweenLite.from(screen3, 0.5, { scale: 0.95, ease: Power4.easeInOut, delay: 2 });
	TweenLite.to(screen3, 1, { x: 96, ease: Power4.easeOut, delay: 3.75 });

	TweenLite.from(screen4, 0.5, { scale: 0.95, ease: Power4.easeInOut, delay: 4 });
	TweenLite.to(screen4, 1, { x: -96, ease: Power4.easeOut, delay: 5.75 });

	TweenLite.from(screen5, 0.5, { scale: 0.95, ease: Power4.easeInOut, delay: 6 });
	TweenLite.to(screen5, 1, { x: 96, ease: Power4.easeOut, delay: 7.75 });

	TweenLite.to(copy1, 0.5, { alpha: 0, delay: 7.75 });
	TweenLite.to(copy2, 1, { alpha: 1, delay: 8.25 });
	TweenLite.to(copy2, 0.5, { alpha: 0, delay: 12.25 });

	TweenLite.to(price, 1, { alpha: 1, delay: 13.75 });
	TweenLite.to(replay, 1, { autoAlpha: 1, ease: Sine.easeIn, delay: 14.75, onComplete: function onComplete() {
			replay.addEventListener('click', Banner.restart, false);
		} });
};

Banner.restart = function () {
	//Fade out the entire banner because I'm lazy
	Enabler.counter("REPLAY_BANNER");
	replay.removeEventListener('click', Banner.restart);
	TweenLite.to('#banner', 1, { alpha: 0, onComplete: function onComplete() {
			//find all elements that have been styled via GSAP and remove those styles.
			var target = document.getElementById('banner').querySelectorAll('*[style]');
			Array.prototype.forEach.call(target, function (a) {
				TweenLite.to(a, 0.01, { clearProps: "all" }), a.removeAttribute('style'), TweenLite.to('#banner', 1, { alpha: 1, onComplete: Banner.animate });
			});
		}
	});
};

//Add Event Listeners
addListeners = function addListeners() {
	mainClick.addEventListener('click', exitHandler, false);
	cta.addEventListener('click', exitHandler, false);

	replay.addEventListener('mouseover', overHandler, false);
	replay.addEventListener('mouseout', outHandler, false);
};

overHandler = function overHandler(e) {
	TweenLite.to(e.target, .3, { rotation: 360, ease: Sine.easeIn });
};

outHandler = function outHandler(e) {
	TweenLite.to(e.target, .3, { rotation: 0, ease: Sine.easeIn });
};

exitHandler = function exitHandler(e) {
	var exit = e.target.id;
	switch (exit) {
		case 'main-click':
			Enabler.exit('1-DEFAULT_EXIT');
			break;
		case 'backup':
			Enabler.exit('3-BACKUP_EXIT');
			break;
		case 'cta':
			Enabler.exit('2-CTA_EXIT');
			break;
		default:
			Enabler.exit('DEFAULT_EXIT');
			break;
	}
};