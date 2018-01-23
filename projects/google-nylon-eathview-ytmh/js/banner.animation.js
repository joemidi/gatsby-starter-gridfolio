"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/scribble.png","images/logo.svg","images/copy1.svg","images/copy2.svg","images/grad.png","images/cta.svg","images/replay.svg"];var e=this;this.preloadImages(this.images,function(){e.createElements(),e.setup(),e.hidePreloader(),e.animate(),e.bindEvents()})},Banner.prototype.createElements=function(){this.cta=this.smartObject({backgroundImage:"images/cta.svg",top:162,width:132,height:42,backgroundColor:"#4285F4",parent:this.banner}),this.copy1=this.smartObject({backgroundImage:"images/copy1.svg",width:816,height:44,top:96,parent:this.banner}),this.scribble=this.smartObject({backgroundImage:"images/scribble.png",width:425,height:42,top:98,left:30,parent:this.banner}),this.copy2=this.smartObject({backgroundImage:"images/copy2.svg",width:324,height:26,top:82,parent:this.banner}),this.grad1=this.smartObject({backgroundImage:"images/grad.png",parent:this.banner}),this.logo=this.smartObject({backgroundImage:"images/logo.svg",top:125,width:148,height:48,parent:this.banner}),this.grad2=this.smartObject({backgroundImage:"images/grad.png",parent:this.banner}),this.earthviewWrapper=document.querySelector(".main-wrapper"),this.replayBtn=this.smartObject({backgroundImage:"images/replay.svg",width:25,height:25,top:0,left:0,backgroundSize:"100% 100%",zIndex:999,parent:this.banner})},Banner.prototype.setup=function(){function e(e){var t="mouseover"==e.type?{rotation:360,ease:Sine.easeIn}:{rotation:0,ease:Sine.easeOut};TweenLite.to(e.target,.3,t)}function t(e){var t="mouseover"==e.type?{backgroundColor:"#3578e7",ease:Sine.easeIn}:{backgroundColor:"#4285F4",ease:Sine.easeOut};TweenLite.to(e.target,.3,t)}this.slideShowEnabled=!1,this.copy1.centerHorizontal(),this.copy2.centerHorizontal(),this.cta.centerHorizontal(),this.logo.centerHorizontal(),this.scribble.set({autoAlpha:0}),this.copy2.set({autoAlpha:0}),this.grad2.set({autoAlpha:0}),this.logo.set({autoAlpha:0}),this.cta.set({autoAlpha:0}),this.replayBtn.set({autoAlpha:0}),this.replayBtn.addEventListener("mouseover",e,!1),this.replayBtn.addEventListener("mouseout",e,!1),this.replayBtn.addEventListener("click",function(e){Banner.timeline.seek("start").play(),earthview.config.IMAGE_IDS.current=0,earthview.app.photo.show(earthview.config.IMAGE_IDS[0]),Enabler.counter("REPLAY_BANNER",!0)},!1),this.cta.addEventListener("click",function(e){Enabler.exit("CTA_EXIT","https://www.google.com/maps/about/")},!1),this.cta.addEventListener("mouseover",t,!1),this.cta.addEventListener("mouseout",t,!1)},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){Banner.timeline=new TimelineLite({delay:1,force3D:!0}).addLabel("start",0).add([TweenLite.set(this.grad1,{y:20}),TweenLite.set(this.copy1,{y:20})]).add([TweenLite.to(this.grad1,1.5,{y:150,ease:Power3.easeOut}),TweenLite.to(this.copy1,1.5,{y:0,ease:Power3.easeOut})]).add([TweenLite.set(this.scribble,{autoAlpha:.9,delay:.1}),TweenLite.to(this.scribble,.52,{backgroundPosition:"-5100px, 0",ease:SteppedEase.config(12)})],"+=1.2").set(this.grad1,{y:-148},"+=0.75").add([TweenLite.to(this.grad1,1.6,{y:-15,ease:Power3.easeIn}),TweenLite.to([this.copy1,this.scribble],1.6,{y:-20,ease:Power3.easeIn})]).to(this.earthviewWrapper,1.6,{autoAlpha:1,ease:Power3.easeOut},"earthview").set([this.copy1,this.scribble],{autoAlpha:0}).set(this.grad1,{y:22}).set(this.grad2,{autoAlpha:1,y:70}).set([this.logo,this.copy2],{autoAlpha:1,y:20}).add([TweenLite.fromTo("#image-"+earthview.config.IMAGE_IDS[0],6.5,{x:-40,y:-50},{x:-70,y:-20}),TweenLite.to("#image-"+earthview.config.IMAGE_IDS[0],1.5,{autoAlpha:0,delay:2.8}),TweenLite.to("#image-"+earthview.config.IMAGE_IDS[1],1.5,{autoAlpha:1,delay:2.8}),TweenLite.delayedCall(2.8,earthview.app.nextImage)],"earthview","normal").add([TweenLite.fromTo("#image-"+earthview.config.IMAGE_IDS[1],6,{x:-80,y:-80},{x:-50,y:-60}),TweenLite.to("#image-"+earthview.config.IMAGE_IDS[1],1.5,{autoAlpha:0,delay:2.8}),TweenLite.to("#image-"+earthview.config.IMAGE_IDS[2],1.5,{autoAlpha:1,delay:2.8}),TweenLite.delayedCall(2.8,earthview.app.nextImage)],"earthview+=2.956","normal").add([TweenLite.fromTo("#image-"+earthview.config.IMAGE_IDS[2],6.5,{x:-26,y:-38},{x:-64,y:-56}),TweenLite.to("#image-"+earthview.config.IMAGE_IDS[2],1.5,{autoAlpha:0,delay:2.8}),TweenLite.to("#image-"+earthview.config.IMAGE_IDS[3],1.5,{autoAlpha:1,delay:2.8}),TweenLite.delayedCall(2.8,earthview.app.nextImage)],"earthview+=5.912","normal").add([TweenLite.fromTo("#image-"+earthview.config.IMAGE_IDS[3],6.5,{x:-40,y:-38},{x:0,y:-58}),TweenLite.to("#image-"+earthview.config.IMAGE_IDS[3],1.5,{autoAlpha:0,delay:2.8}),TweenLite.to("#image-"+earthview.config.IMAGE_IDS[4],1.5,{autoAlpha:1,delay:2.8}),TweenLite.delayedCall(2.8,earthview.app.nextImage)],"earthview+=8.868","normal").add([TweenLite.fromTo("#image-"+earthview.config.IMAGE_IDS[4],6.5,{x:-40,y:-50},{x:-100,y:-50}),TweenLite.to("#image-"+earthview.config.IMAGE_IDS[4],1.5,{autoAlpha:0,delay:2.8}),TweenLite.to("#image-"+earthview.config.IMAGE_IDS[5],1.5,{autoAlpha:1,delay:2.8}),TweenLite.delayedCall(2.8,earthview.app.nextImage)],"earthview+=11.824","normal").add([TweenLite.fromTo("#image-"+earthview.config.IMAGE_IDS[5],6.5,{x:-70,y:-40},{x:-30,y:-10}),TweenLite.to(this.earthviewWrapper,1.5,{autoAlpha:0,delay:2.8})],"earthview+=14.78","normal").addLabel("slideShowEnd").add([TweenLite.to(this.grad1,1.7,{y:104,ease:Power3.easeOut}),TweenLite.to(this.grad2,1.7,{y:170,ease:Power3.easeOut}),TweenLite.to(this.logo,1.7,{y:0,ease:Power3.easeOut}),TweenLite.to(this.copy2,1.7,{y:0,ease:Power3.easeOut})],"-=2.5").set([this.grad1,this.grad2],{autoAlpha:0},"endframehold").to([this.copy2,this.logo],1,{y:"-=35",ease:Power3.EaseIn},"endframe+=1.5").to(this.cta,.5,{autoAlpha:1,zIndex:999,ease:Power3.easeOut},"endframe+=2.0").to(this.replayBtn,.4,{autoAlpha:1},"+=0.25").addLabel("end")};