"use strict";function _possibleConstructorReturn(t,i){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!i||"object"!=typeof i&&"function"!=typeof i?t:i}function _inherits(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function, not "+typeof i);t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),i&&(Object.setPrototypeOf?Object.setPrototypeOf(t,i):t.__proto__=i)}function _classCallCheck(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(i,e,n){return e&&t(i.prototype,e),n&&t(i,n),i}}(),requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;window.easing={easeInSine:function(t,i,e,n){return-e*Math.cos(t/n*(Math.PI/2))+e+i},easeOutSine:function(t,i,e,n){return e*Math.sin(t/n*(Math.PI/2))+i},easeInOutSine:function(t,i,e,n){return-e/2*(Math.cos(Math.PI*t/n)-1)+i},easeInQuad:function(t,i,e,n){return t/=n,e*t*t+i},easeOutQuad:function(t,i,e,n){return t/=n,-e*t*(t-2)+i},easeInOutQuad:function(t,i,e,n){return(t/=n/2)<1?e/2*t*t+i:(t--,-e/2*(t*(t-2)-1)+i)},easeInOutQuart:function(t,i,e,n){return(t/=n/2)<1?e/2*t*t*t*t+i:(t-=2,-e/2*(t*t*t*t-2)+i)},easeInQuart:function(t,i,e,n){return t/=n,e*t*t*t*t+i},easeOutQuart:function(t,i,e,n){return t/=n,t--,-e*(t*t*t*t-1)+i},easeOutQuint:function(t,i,e,n){return t/=n,t--,e*(t*t*t*t*t+1)+i},easeInOutQuint:function(t,i,e,n){return(t/=n/2)<1?e/2*t*t*t*t*t+i:(t-=2,e/2*(t*t*t*t*t+2)+i)}};var Animatable=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"animateTo",value:function(t,i,e,n){this.animation={target:t,duration:i,delay:e,easing:n}}},{key:"_getAnimatedPropery",value:function(t,i){if(this.animation&&void 0!==this.animation.target[t]){var e=this.animation.target[t]-this[t],n=this.animation.duration+this.animation.delay,a=Math.max(0,n*i-this.animation.delay);return this.animation.easing(a,this[t],e,this.animation.duration)}return this[t]}}]),t}(),GridLine=function(t){function i(t,e,n,a){_classCallCheck(this,i);var s=_possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return s.ctx=t,s.canvas=e,s.x=n,s.y=a,s}return _inherits(i,Animatable),_createClass(i,[{key:"draw",value:function(t){this.ctx.beginPath(),this.ctx.moveTo(this.x,this.y);var i=this._getAnimatedPropery("x",t),e=this._getAnimatedPropery("y",t);this.ctx.lineTo(i,e),this.ctx.stroke()}}]),i}(),GridDot=function(t){function i(t,e,n,a,s){_classCallCheck(this,i);var r=_possibleConstructorReturn(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));return r.ctx=t,r.canvas=e,r.x=n,r.y=a,r.size=s,r}return _inherits(i,Animatable),_createClass(i,[{key:"draw",value:function(t){this.ctx.beginPath(),this.ctx.moveTo(this.x,this.y);var i=this._getAnimatedPropery("size",t);this.ctx.arc(this.x,this.y,i,0,2*Math.PI),this.ctx.fill()}}]),i}(),GridAnimation=function(){function t(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2500,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;_classCallCheck(this,t),this.canvas=i,this.ratio=1,this.size=n,this.duration=e,this.dotSize=1,this.lineColor="#44525c",this.dotColor="#44525c",this.lineEasing=easing.easeInOutQuint,this.dotEasing=easing.easeInOutQuad,this.lines=[],this.dots=[],this.numberOfHorizontalLines=void 0,this.numberOfVerticalLines=void 0,this.global_width=void 0,this.global_height=void 0,console.log("el: "+i),this.ctx=this.canvas.getContext("2d"),this._update=this._update.bind(this),this._rescale=this._rescale.bind(this),this._init()}return _createClass(t,[{key:"play",value:function(){this.canvas.classList.add("js-animate"),this.ctx&&(console.log("GridAnimation.play()"),this.startTime=new Date,this._draw(),this._update())}},{key:"reset",value:function(){this._clearCanvas(),this.canvas.classList.remove("js-animate")}},{key:"skipToEnd",value:function(){this.canvas.classList.add("js-animate"),this.ctx&&this._draw(1)}},{key:"_init",value:function(){this.ctx&&(window.addEventListener("resize",this._rescale),this._rescale())}},{key:"_clearCanvas",value:function(){this.ctx&&this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"_animationProgress",value:function(){var t=new Date-this.startTime;return Math.min(1,Math.max(0,t/this.duration))}},{key:"_getRandomInt",value:function(t,i){return Math.floor(Math.random()*(i-t+1))+t}},{key:"_buildAnimation",value:function(){this._buildLines()}},{key:"_buildLines",value:function(){for(var t=this.duration/this.numberOfHorizontalLines/2,i=0;i<this.numberOfHorizontalLines;i++){var e=t*i,n=new GridLine(this.ctx,this.canvas,0,this.size*i);i%2?n.animateTo({x:this.global_width},this.duration-e,e,this.lineEasing):(n.x=this.global_width,n.animateTo({x:0},this.duration-e,e,this.lineEasing)),this.lines.push(n)}for(var a=this.duration/this.numberOfVerticalLines/2,s=0;s<this.numberOfVerticalLines;s++){var r=a*s,o=new GridLine(this.ctx,this.canvas,this.size*s,0);s%2?o.animateTo({y:this.global_height},this.duration-r,r,this.lineEasing):(o.y=this.global_height,o.animateTo({y:0},this.duration-r,r,this.lineEasing)),this.lines.push(o)}}},{key:"_buildDots",value:function(){for(var t=this.numberOfHorizontalLines*this.numberOfVerticalLines,i=.3*this.duration,e=.2*this.duration,n=.6*this.duration,a=0;a<t;a++){var s=this._getRandomInt(e,n),r=this.size*(a%this.numberOfVerticalLines),o=this.size*Math.floor(a/this.numberOfVerticalLines),h=new GridDot(this.ctx,this.canvas,r,o,0);h.animateTo({size:this.dotSize},i,s,this.dotEasing),this.dots.push(h)}}},{key:"_rescale",value:function(){this.global_width=Math.min(window.innerWidth,window.screen.width),this.global_height=Math.min(window.innerHeight,window.screen.height),this.ctx.webkitBackingStorePixelRatio<2&&(this.ratio=window.devicePixelRatio||1),this.canvas.setAttribute("width",this.global_width*this.ratio),this.canvas.setAttribute("height",this.global_height*this.ratio),this.lines=[],this.dots=[],this.numberOfHorizontalLines=Math.ceil(this.global_height/this.size),this.numberOfVerticalLines=Math.ceil(this.global_width/this.size),this._buildAnimation(),this._draw()}},{key:"_draw",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._animationProgress();this.ctx.save(),this._clearCanvas(),this.ctx.scale(this.ratio,this.ratio),this.ctx.translate(.5,.5),this.ctx.lineWidth=1,this.ctx.strokeStyle=this.lineColor;var i=!0,e=!1,n=void 0;try{for(var a,s=this.lines[Symbol.iterator]();!(i=(a=s.next()).done);i=!0)a.value.draw(t)}catch(t){e=!0,n=t}finally{try{!i&&s.return&&s.return()}finally{if(e)throw n}}this.ctx.fillStyle=this.dotColor;var r=!0,o=!1,h=void 0;try{for(var u,l=this.dots[Symbol.iterator]();!(r=(u=l.next()).done);r=!0)u.value.draw(t)}catch(t){o=!0,h=t}finally{try{!r&&l.return&&l.return()}finally{if(o)throw h}}this.ctx.restore()}},{key:"_update",value:function(){this._animationProgress()<1&&requestAnimationFrame(this._update),this._draw()}}]),t}();