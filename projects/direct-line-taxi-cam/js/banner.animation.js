"use strict";Banner.prototype.start=function(){this.banner=document.querySelector(".banner"),this.bannerWidth=this.banner.offsetWidth,this.bannerHeight=this.banner.offsetHeight,this.images=["images/end-frame.png","images/grad.png","images/icons.png","images/live.png","images/cta.png","images/tag-line.png","images/map-legals.png"]},Banner.prototype.createElements=function(){this.background=this.smartObject({backgroundColor:"#333",width:this.bannerWidth,height:this.bannerHeight,parent:this.banner}),this.map=this.smartObject({backgroundImage:this.mapUrl,parent:this.banner}),this.mapLegals=this.smartObject({backgroundImage:"images/map-legals.png",parent:this.banner}),this.video=this.smartObject({type:"video",top:-130,width:970,height:512,playsinline:!0,muted:!0,sources:[{type:"video/mp4",url:this.videoUrl}],parent:this.banner}),this.grad=this.smartObject({backgroundImage:"images/grad.png",parent:this.banner}),this.icons=this.smartObject({backgroundImage:"images/icons.png",parent:this.banner}),this.time=this.smartObject({color:"#fff",fontFamily:"MuseoSans, sans-serif",fontSize:"17px",height:20,textTransform:"uppercase",width:50,parent:this.banner}),this.city=this.smartObject({color:"#fff",fontFamily:"MuseoSans, sans-serif",fontSize:"17px",whiteSpace:"nowrap",height:20,textTransform:"uppercase",textOverflow:"ellipsis",overflow:"hidden",width:240,parent:this.banner}),this.endFrameWrap=this.smartObject({left:"none",parent:this.banner}),this.live=this.smartObject({backgroundImage:"images/live.png",left:"none",top:9,parent:this.endFrameWrap}),this.endFrame=this.smartObject({backgroundImage:"images/end-frame.png",parent:this.endFrameWrap}),this.ctaWrap=this.smartObject({top:0,left:0,height:this.bannerHeight,width:this.bannerWidth/2,parent:this.endFrameWrap,overflow:"hidden"}),this.cta=this.smartObject({backgroundImage:"images/cta.png",parent:this.ctaWrap}),this.tagLine=this.smartObject({backgroundImage:"images/tag-line.png",parent:this.endFrameWrap}),this.shutterT=this.smartObject({backgroundColor:"#000",width:this.bannerWidth,height:this.bannerHeight/2,parent:this.banner}),this.shutterB=this.smartObject({backgroundColor:"#000",width:this.bannerWidth,height:this.bannerHeight/2,top:"none",parent:this.banner})},Banner.prototype.getTime=function(){var e=new Date,t=e.getMinutes(),a=e.getHours(),i=("0"+t).slice(-2);return("0"+a).slice(-2)+":"+i},Banner.prototype.setup=function(){var e=this,t=!1;this.map.center(),this.endFrameWrap.set({right:0,x:this.endFrame.offsetWidth-210}),this.endFrame.set({left:-448,x:22}),this.city.set({top:12,left:135}),this.shutterT.set({top:"-50%"}),this.shutterB.set({bottom:"-50%"}),this.live.set({right:285}),this.cta.set({top:165,x:-95}),this.ctaWrap.set({top:0,left:-314}),this.tagLine.set({top:115,left:-314,opacity:0}),this.city.innerHTML=this.locationName,this.time.set({top:12,left:30}),this.time.innerHTML=this.getTime(),this.video.set({autoAlpha:0}),this.video.addEventListener("ended",function(){t||(e.timeline.play(0),t=!t)}),Enabler.loadModule(studio.module.ModuleId.VIDEO,function(){studio.video.Reporter.attach("video_970x250",e.video)}),enableInlineVideo(this.video,{iPad:!0})},Banner.prototype.hidePreloader=function(){TweenLite.to(".preloader",1,{autoAlpha:0})},Banner.prototype.animate=function(){var e=this;this.timeline=new TimelineMax({}).addLabel("map").to(this.map,2.5,{scale:1.2,force3D:!1,rotationZ:"0.01deg",ease:Power0.easeNone}).to(this.shutterT,.2,{top:"0%",ease:Power1.easeOut}).to(this.shutterB,.2,{bottom:"0%",ease:Power1.easeOut},"-=0.2").to(this.shutterT,.2,{top:"-50%",ease:Power1.easeIn,delay:.1}).to(this.shutterB,.2,{bottom:"-50%",ease:Power1.easeIn},"-=0.2").set(this.video,{autoAlpha:1,onComplete:function(){e.video.play()}},"-=0.2").addLabel("endframe").to(this.endFrame,.2,{x:0,delay:1,ease:Power0.easeNone}).to(this.endFrameWrap,1.5,{x:"-="+(this.endFrame.offsetWidth-102),zIndex:998,ease:Power2.easeInOut},"-=0.2").to(this.video,1.5,{x:-120,scale:.76,ease:Power2.easeInOut},"-=1.5").to(this.tagLine,.5,{autoAlpha:1,ease:Power1.easeOut}).to(this.cta,.5,{x:0,ease:Power1.easeOut},"-=0.5")};