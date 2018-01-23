var enableInlineVideo=function(){"use strict";function e(e,i,t,n){function r(i){Boolean(e[t])===Boolean(n)&&i.stopImmediatePropagation(),delete e[t]}return e.addEventListener(i,r,!1),r}function i(e,i,t,n){function r(e){t[i]=e}n&&r(e[i]),Object.defineProperty(e,i,{get:function(){return t[i]},set:r})}function t(e,i,t){t.addEventListener(i,function(){return e.dispatchEvent(new Event(i))})}function n(e,i){Promise.resolve().then(function(){e.dispatchEvent(new Event(i))})}function r(e,i,t){(u||0)+200<Date.now()&&(e[p]=!0,u=Date.now()),t||(e.currentTime=i),f[++m%3]=100*i|0}function d(e){return e.driver.currentTime>=e.video.duration}function a(){var e=this[v];this.webkitDisplayingFullscreen?this[l]():("data:"!==e.driver.src&&e.driver.src!==this.src&&(r(this,0,!0),e.driver.src=this.src),this.paused&&(e.paused=!1,0===this.buffered.length&&this.load(),e.driver.play(),e.updater.start(),e.hasAudio||(n(this,"play"),e.video.readyState>=e.video.HAVE_ENOUGH_DATA&&n(this,"playing"))))}function s(e){var i=this[v];i.driver.pause(),i.updater.stop(),this.webkitDisplayingFullscreen&&this[h](),i.paused&&!e||(i.paused=!0,i.hasAudio||n(this,"pause"),this.ended&&(this[p]=!0,n(this,"ended")))}function o(e,i){var a=e[v]={};a.paused=!0,a.hasAudio=i,a.video=e,a.updater=function(e){return function(e,i,t,n){function r(t){d=i(r,n),e(t-(a||t)),a=t}var d,a;return{start:function(){d||r(0)},stop:function(){t(d),d=null,a=0}}}(e,requestAnimationFrame,cancelAnimationFrame)}(function(e){this.video.readyState>=this.video.HAVE_FUTURE_DATA?(this.hasAudio||(this.driver.currentTime=this.video.currentTime+e*this.video.playbackRate/1e3,this.video.loop&&d(this)&&(this.driver.currentTime=0)),r(this.video,this.driver.currentTime)):this.video.networkState===this.video.NETWORK_IDLE&&0===this.video.buffered.length&&this.video.load(),this.video.ended&&(delete this.video[p],this.video.pause(!0))}.bind(a)),i?a.driver=function(e){var i=new Audio;return t(e,"play",i),t(e,"playing",i),t(e,"pause",i),i.crossOrigin=e.crossOrigin,i.src=e.src||e.currentSrc||"data:",i}(e):(e.addEventListener("canplay",function(){e.paused||n(e,"playing")}),a.driver={src:e.src||e.currentSrc||"data:",muted:!0,paused:!0,pause:function(){a.driver.paused=!0},play:function(){a.driver.paused=!1,d(a)&&r(e,0)},get ended(){return d(a)}}),e.addEventListener("emptied",function(){var i=!a.driver.src||"data:"===a.driver.src;a.driver.src&&a.driver.src!==e.src&&(r(e,0,!0),a.driver.src=e.src,i?a.driver.play():a.updater.stop())},!1),e.addEventListener("webkitbeginfullscreen",function(){e.paused?i&&0===a.driver.buffered.length&&a.driver.load():(e.pause(),e[l]())}),i&&(e.addEventListener("webkitendfullscreen",function(){a.driver.currentTime=e.currentTime}),e.addEventListener("seeking",function(){f.indexOf(100*e.currentTime|0)<0&&(a.driver.currentTime=e.currentTime)}))}var u,c="object"==typeof document&&"object-fit"in document.head.style&&!matchMedia("(-webkit-video-playable-inline)").matches,v="bfred-it:iphone-inline-video",p="bfred-it:iphone-inline-video:event",l="bfred-it:iphone-inline-video:nativeplay",h="bfred-it:iphone-inline-video:nativepause",f=[],m=0;return function(t,n){if(void 0===n&&(n={}),!t[v]){if(!n.everywhere){if(!c)return;if(!(n.iPad||n.ipad?/iPhone|iPod|iPad/:/iPhone|iPod/).test(navigator.userAgent))return}!t.paused&&t.webkitDisplayingFullscreen&&t.pause(),o(t,!t.muted),function(t){var n=t[v];t[l]=t.play,t[h]=t.pause,t.play=a,t.pause=s,i(t,"paused",n.driver),i(t,"muted",n.driver,!0),i(t,"playbackRate",n.driver,!0),i(t,"ended",n.driver),i(t,"loop",n.driver,!0),e(t,"seeking"),e(t,"seeked"),e(t,"timeupdate",p,!1),e(t,"ended",p,!1)}(t),t.classList.add("IIV"),t.muted&&t.autoplay&&t.play(),/iPhone|iPod|iPad/.test(navigator.platform)||console.warn("iphone-inline-video is not guaranteed to work in emulated environments")}}}();