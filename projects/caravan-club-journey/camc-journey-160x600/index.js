(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_region = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// region
	this.locationSubTitleText = new cjs.Text("Lake District", "12px 'FS Elliot'", "#FFFFFF");
	this.locationSubTitleText.name = "locationSubTitleText";
	this.locationSubTitleText.textAlign = "center";
	this.locationSubTitleText.lineHeight = 15;
	this.locationSubTitleText.lineWidth = 156;
	this.locationSubTitleText.parent = this;
	this.locationSubTitleText.setTransform(69.6,2);

	this.timeline.addTween(cjs.Tween.get(this.locationSubTitleText).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_region, new cjs.Rectangle(-10.4,0,160,16), null);


(lib.txt_location = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location
	this.locationTitleText = new cjs.Text("Derwent Water", "16px 'FS Elliot'", "#FFFFFF");
	this.locationTitleText.name = "locationTitleText";
	this.locationTitleText.textAlign = "center";
	this.locationTitleText.lineHeight = 19;
	this.locationTitleText.lineWidth = 156;
	this.locationTitleText.parent = this;
	this.locationTitleText.setTransform(69.6,2);

	this.timeline.addTween(cjs.Tween.get(this.locationTitleText).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_location, new cjs.Rectangle(-10.4,0,160,51), null);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGCHQg4g4AAhPQAAhPA4g4QA4g3BOAAQA1AAAqAZQAVAMATASQA4A4AABPQAABPg4A4QgTASgVAOQgqAYg1AAQhOAAg4g4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-19.1,38.2,38.2);


(lib.Text3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Text3 = new cjs.Text("Get more out of every\ntrip with Caravan\nand Motorhome Club\nmembership", "20px 'FS Elliot'", "#006070");
	this.Text3.name = "Text3";
	this.Text3.lineHeight = 23;
	this.Text3.lineWidth = 134;
	this.Text3.parent = this;
	this.Text3.setTransform(-58,201.3);

	this.timeline.addTween(cjs.Tween.get(this.Text3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text3, new cjs.Rectangle(-60,199.3,138,185), null);


(lib.Text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Text2 = new cjs.Text("Whether you own a\nMotorhome or a Caravan", "20px 'FS Elliot'", "#006070");
	this.Text2.name = "Text2";
	this.Text2.lineHeight = 23;
	this.Text2.lineWidth = 115;
	this.Text2.parent = this;
	this.Text2.setTransform(3.3,191.1);

	this.timeline.addTween(cjs.Tween.get(this.Text2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text2, new cjs.Rectangle(1.3,189.1,118.8,190), null);


(lib.Textstart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.TextStart = new cjs.Text("Wherever your trip\ntakes you…", "16px 'FS Elliot'", "#FFFFFF");
	this.TextStart.name = "TextStart";
	this.TextStart.textAlign = "center";
	this.TextStart.lineHeight = 19;
	this.TextStart.lineWidth = 156;
	this.TextStart.parent = this;
	this.TextStart.setTransform(80,307.1);

	this.timeline.addTween(cjs.Tween.get(this.TextStart).wait(1));

}).prototype = getMCSymbolPrototype(lib.Textstart, new cjs.Rectangle(0,305.1,160.1,70), null);


(lib.Textend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.TextEnd = new cjs.Text("Exclusive deals and money-saving offers – all for just £51/year", "16px 'FS Elliot'", "#FFFFFF");
	this.TextEnd.name = "TextEnd";
	this.TextEnd.textAlign = "center";
	this.TextEnd.lineHeight = 19;
	this.TextEnd.lineWidth = 139;
	this.TextEnd.parent = this;
	this.TextEnd.setTransform(81.3,246.2);

	this.timeline.addTween(cjs.Tween.get(this.TextEnd).wait(1));

}).prototype = getMCSymbolPrototype(lib.Textend, new cjs.Rectangle(10,244.2,142.6,77), null);


(lib.Symbol5back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006070").s().p("EgOIAxdQjdg+jJhaQh1gwiNhQQsXmwnJsLQnMsHAAuDQAAsXFlq9QARgmArgMQAngNAoAVQJcFMGlIlQGlIkCkKaQALAogXAlQgWAkgoAIQgnALglgXQgkgUgKgpQiUpXlynyQlxnyoVk+QkfJqgBKuQAANMGwLZQGuLXLkGXQB4BDB+A3QCyBRDZA9QGjB4GsAAQJ0AAI/jzQIpjsGumtQGqmrDrorQDzo+AApzQAAm7h7mnQh7mnjwl1Qmrqeq0l7Qqxl6scgBQgnAAgfgeQgegeAAgpQAAgrAegcQAfgeAnAAQNPAALhGTQLfGTHJLLQD+GMCDHFQCEHDAAHXQAAKckDJkQj7JPnIHIQnIHIpPD6QpkEEqcAAQnMAAm8iAg");
	this.shape.setTransform(329.3,329.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5back, new cjs.Rectangle(0,0,658.6,658.6), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18C36").s().p("AjfMNQg2gPgxgWQgegMgjgTQjChrhyjBQhxi/AAjeQAAjDBYitQAEgJALgDQAJgDAKAFQCWBSBnCHQBpCIAoCkQACAKgFAJQgGAJgKABQgJADgJgFQgJgGgDgKQgkiUhbh6Qhch6iDhPQhHCYAACpQAADQBqC1QBrCzC2BlQAeAQAfANQAsAUA2AQQBnAdBpAAQCbAACOg8QCIg6BqhqQBqhqA6iJQA8iNAAibQAAhsgfhpQgehpg7hbQhqimiqheQirhdjEAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgIAJAAQDRAAC2BjQC1BkBxCxQA/BhAhBwQAgBvAAB0QAAClhACXQg+CShwBwQhxBxiSA+QiXBAilAAQhxAAhuggg");
	this.shape.setTransform(329.3,329.3,4.05,4.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,658.6,658.6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AlPFPQiLiLAAjEQAAjECLiNQCMiJDDAAQDEAACLCJQCMCNAADEQAADEiMCLQiLCMjEAAQjDAAiMiMg");
	this.shape.setTransform(47.5,47.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,95,95), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.2)").s().p("AjeDeQhchcAAiCQAAiCBchdQBdhbCBAAQCCAABcBbQBdBdAACCQAACChdBcQhcBdiCAAQiBAAhdhdg");
	this.shape.setTransform(31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,63,63), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBKIBPiFIhQAAIAAgeICFAAIhpCzg");
	this.shape.setTransform(1547.4,864.7,4.056,4.056);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBCQgSgZgBgpQABgnASgaQATgaAdAAQAdAAAUAaQASAZAAAoQAAApgSAZQgUAagdAAQgdAAgTgagAgXgrQgJARAAAaQAAAbAJARQAKASANAAQAOAAAKgSQAJgRAAgbQAAgagJgRQgKgRgOAAQgNAAgKARg");
	this.shape_1.setTransform(1480.4,863.7,4.056,4.056);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBLIAog1QgKAEgJAAQgXAAgPgRQgQgPAAgZQAAgaASgSQATgRAcAAQAdAAATARQASARAAAaQAAAagWAcIg0BHgAgWg4QgJAKAAANQAAAOAJAJQAKAKAMAAQANAAAKgKQAJgJAAgOQAAgNgJgKQgJgJgOAAQgMAAgKAJg");
	this.shape_2.setTransform(1413.8,864.3,4.056,4.056);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBXIAAiPIgZAAIAAgeIA5AAIAACtg");
	this.shape_3.setTransform(1352.8,863.7,4.056,4.056);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvBXIAAitIBfAAIAAAeIg9AAIAAAmIA7AAIAAAdIg7AAIAAAvIA9AAIAAAdg");
	this.shape_4.setTransform(1270.2,863.7,4.056,4.056);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoBAQgagaAAgmQAAglAbgaQAbgbAmAAQAVAAAVAKIAAApQgUgUgXAAQgYAAgQARQgQASAAAYQAAAaAQARQAQARAZAAQAWAAAUgTIAAAnQgWALgVAAQgmAAgbgbg");
	this.shape_5.setTransform(1203.5,863.8,4.056,4.056);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6BXIhph1IAAB1IgiAAIAAitIAYAAIBpB0IAAh0IAiAAIAACtg");
	this.shape_6.setTransform(1124.5,863.7,4.056,4.056);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBXIAAitIAhAAIAACtg");
	this.shape_7.setTransform(1062.2,863.7,4.056,4.056);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7A5IAVgUQANAWAZAAQAKABAHgIQAIgGAAgLQAAgMgKgGIgXgKQgYgHgJgLQgKgLAAgSQAAgVAQgOQAQgOAWAAQAdgBAWAUIgSAXQgMgOgPAAQgKAAgHAFQgHAGAAAIQAAAHAFAFQAGAEAOAGQAdALALAKQAKAMAAAUQAAAagRAQQgRAQgaAAQglgBgWghg");
	this.shape_8.setTransform(1012.6,864,4.056,4.056);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ACzDlIgpkZIh9EZIgYAAIh5kZIguEZIhaAAIBVnJIA9AAIB8EiICBkiIA+AAIBMHJg");
	this.shape_9.setTransform(1559.8,1316.2,4.056,4.056);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiZDlIAAnJIBxAAQBMAAAjAcQATAPALAZQALAZAAAcQAAAigMAVQgLAWgbAQQBcASAABfQAAA9gpAiQgpAjhIAAgAhACdIAmAAQBYAAAAg+QAAgigWgQQgWgPgwAAIgiAAgAhAglIAZAAQBFAAAAg8QAAg7hDAAIgbAAg");
	this.shape_10.setTransform(2500,1316.2,4.056,4.056);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhWDYQgogRgXgfQgigtAAhNIAAkXIBZAAIAAEFQAAAiADARQADAQAJAOQALAVAWALQAVALAZAAQAaAAAVgLQAWgLALgVQAJgOADgQQADgRAAgiIAAkFIBZAAIAAEXQAABOgiAsQgXAfgoARQgoASgvAAQguAAgogSg");
	this.shape_11.setTransform(2314.7,1318.3,4.056,4.056);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhyDlIAAnJIBZAAIAAF7ICMAAIAABOg");
	this.shape_12.setTransform(2162.6,1316.2,4.056,4.056);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhqCqQhFhFAAhlQgBhiBIhGQBGhGBlAAQA3AAA3AcIAABpQgcgcgagMQgagMghAAQg+AAgqAuQgsAuAABBQAABFArAsQAqAsBEAAQAeAAAZgLQAagMAbgbIAABpQg4Abg5AAQhkAAhGhFg");
	this.shape_13.setTransform(1996.1,1316.3,4.056,4.056);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah+DlIAAnJID8AAIAABOIijAAIAABlICeAAIAABNIieAAIAAB7ICjAAIAABOg");
	this.shape_14.setTransform(1764.3,1316.2,4.056,4.056);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AitCqQhGhEAAhlQAAhkBHhFQBHhGBlAAQBnAABHBFQBGBFAABkQAABlhHBEQhGBGhnAAQhnAAhGhFgAhrhvQgtAvAABAQAABBAtAuQAtAuA+AAQA/AAAtguQAtguAAhBQAAhAgtgvQgsgthAgBQg+ABgtAtg");
	this.shape_15.setTransform(1321.3,1316.3,4.056,4.056);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABhDlIAAjLIjBAAIAADLIhZAAIAAnJIBZAAIAACxIDBAAIAAixIBZAAIAAHJg");
	this.shape_16.setTransform(1102.2,1316.2,4.056,4.056);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AA5DlIh6i4IgMAAIAAC4IhZAAIAAnJICEAAQBMAAArAkQAqAjAABBQAAA0gbAhQgbAhgyAKICQDBgAhNgRIAaAAQArAAAVgSQAWgSAAgjQAAghgWgRQgVgSgpAAIgcAAg");
	this.shape_17.setTransform(917.5,1316.2,4.056,4.056);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AitCqQhGhEAAhlQgBhkBIhFQBHhGBlAAQBnAABHBFQBGBFAABkQAABlhHBEQhGBGhnAAQhmAAhHhFgAhqhvQgtAvAABAQAABBAtAuQAsAuA+AAQA/AAAtguQAtguAAhBQAAhAgtgvQgsgthAgBQg+ABgsAtg");
	this.shape_18.setTransform(705.8,1316.3,4.056,4.056);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgsDlIAAl7IhmAAIAAhOIElAAIAABOIhnAAIAAF7g");
	this.shape_19.setTransform(527.5,1316.2,4.056,4.056);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AitCqQhGhEAAhlQAAhkBHhFQBGhGBmAAQBnAABHBFQBGBFAABkQABBlhIBEQhHBGhmAAQhnAAhGhFgAhrhvQgsAvgBBAQABBBAsAuQAtAuA+AAQA/AAAtguQAtguAAhBQAAhAgtgvQgtgtg/gBQg+ABgtAtg");
	this.shape_20.setTransform(348.8,1316.3,4.056,4.056);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACzDlIgpkZIh9EZIgYAAIh5kZIguEZIhaAAIBVnJIA9AAIB8EiICBkiIA+AAIBMHJg");
	this.shape_21.setTransform(109.2,1316.2,4.056,4.056);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AjVDlIAAnJIA9AAIEWEzIAAkzIBYAAIAAHIIg9AAIkVk0IAAE1g");
	this.shape_22.setTransform(1982.8,1087,4.056,4.056);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACFDkIgnhgIi6AAIgpBgIhfAAIDGnIIBDAAIDAHIgAg/A8ICBAAIhAikg");
	this.shape_23.setTransform(1770.5,1087.1,4.056,4.056);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("ACFDkIgnhgIi6AAIgpBgIhfAAIDGnIIBDAAIDAHIgAg/A8ICBAAIhAikg");
	this.shape_24.setTransform(1277.3,1087.1,4.056,4.056);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ai7DlIAAnJICDAAQBrAABFBAQBEBAAABkQAAAzgWAuQgWAvgnAgQggAbgnANQgmANg1AAgAhiCXIAYAAQArAAAdgIQAcgJAVgTQAXgVAOgfQANgeAAghQAAgggNgeQgNgfgYgUQgWgUgbgJQgdgIgrAAIgYAAg");
	this.shape_25.setTransform(2196,1087,4.056,4.056);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AjVDlIAAnJIA9AAIEVEzIAAkzIBZAAIAAHIIg9AAIkVk0IAAE1g");
	this.shape_26.setTransform(1489.5,1087,4.056,4.056);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgZDlIjCnJIBiAAIB5EwIB7kwIBhAAIjGHJg");
	this.shape_27.setTransform(1104.9,1087,4.056,4.056);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AA5DlIh6i4IgMAAIAAC4IhZAAIAAnJICFAAQBLAAAqAkQArAjAABAQAAA1gbAhQgbAhgyAKICQDBgAhNgRIAaAAQArAAAVgSQAWgSABgjQAAghgXgRQgVgSgqAAIgbAAg");
	this.shape_28.setTransform(747,1087,4.056,4.056);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("ACGDkIgohgIi6AAIgpBgIheAAIDGnIIBBAAIDAHIgAg/A8ICBAAIhAikg");
	this.shape_29.setTransform(930.7,1087.1,4.056,4.056);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ACGDkIgohgIi6AAIgpBgIhfAAIDHnIIBCAAIDAHIgAg/A8ICBAAIg/ikg");
	this.shape_30.setTransform(553.6,1087.1,4.056,4.056);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhpCqQhGhFgBhlQABhiBHhGQBGhGBlAAQA3AAA2AcIAABpQgbgcgagLQgagMgggBQg/AAgqAuQgsAtAABCQABBFAqAsQAqAsBEAAQAfAAAYgLQAagMAagbIAABpQg5Abg2AAQhlAAhFhFg");
	this.shape_31.setTransform(361.8,1087.1,4.056,4.056);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAANJQiVA4ijAAQi4AAiohHQijhFh9h+Qh+h9hEijQhIioAAi3QAAlCDNj6QDJj2E1hDQBFgMAtAeQAsAcAQAnQAUAugFBWQkUABjDDEQjDDEAAETQAAEUDEDEQDDDEEVAAIAQgBQiLh+hNirQhPiwAAjCQAAikA5iYQAhhZA1hSIAKgNIAKgHIAGgDIAGgCIAHgBIAJABIAJACIAJADIAzAcIBwBNQCGBsBVCWQBWiWCGhsQBFg4BPgpIACgBIARgJIAGgCIAJgCIAIAAIAHAAIAHACIAKAHIAIAHIACACIABACIA+BvIAcBCQA5CYAACkQAADChPCwQhNCriLB+IAQABQEVAADDjEQDEjEAAkUQAAkTjDjEQjDjEkTgBQgFhWAUguQAQgnAsgcQAZgRAlgDQAcgCAWAEQE1BDDKD2QDND6AAFCQAAC3hICoQhECjh+B9Qh9B+ijBFQioBHi4AAQijAAiWg4gAligIQAACMA4CBQA3B7BjBeQBDA+BNApQBPgpBBg+QBjheA3h7QA5iBAAiMQAAhbgahcQhbBVg2BuQg6B0gJB+IjtAAQgJh/g3hzQg2huhahVQgaBcAABbg");
	this.shape_32.setTransform(1280.1,363.9,4.056,4.056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,2562.6,1413.3), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBKIBPiFIhQAAIAAgeICFAAIhpCzg");
	this.shape.setTransform(38.1,36.6,0.269,0.269);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgwBCQgTgZAAgpQAAgnATgaQATgaAdAAQAeAAASAaQAUAZgBAoQABApgUAZQgSAageAAQgdAAgTgagAgXgrQgKARAAAaQAAAbAKARQAJASAOAAQAOAAAKgSQAKgRAAgbQAAgagKgRQgKgRgOAAQgOAAgJARg");
	this.shape_1.setTransform(33.7,36.6,0.269,0.269);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggBLIAog1QgKAEgJAAQgXAAgPgRQgQgPAAgZQAAgaASgSQATgRAcAAQAdAAATARQASARAAAaQAAAagWAcIg0BHgAgWg4QgJAKAAANQAAAOAJAJQAKAKAMAAQANAAAKgKQAJgJAAgOQAAgNgJgKQgJgJgOAAQgMAAgKAJg");
	this.shape_2.setTransform(29.2,36.6,0.269,0.269);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDBXIAAiPIgaAAIAAgeIA7AAIAACtg");
	this.shape_3.setTransform(25.2,36.6,0.269,0.269);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvBXIAAitIBfAAIAAAeIg9AAIAAAmIA7AAIAAAdIg7AAIAAAvIA9AAIAAAdg");
	this.shape_4.setTransform(19.7,36.6,0.269,0.269);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgoBBQgbgbAAgmQAAglAbgaQAcgbAlAAQAVAAAVALIAAAnQgTgTgYAAQgXAAgPARQgRARAAAZQAAAaARARQAPARAZAAQAXAAASgTIAAAoQgVAKgWAAQglAAgbgag");
	this.shape_5.setTransform(15.3,36.6,0.269,0.269);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA6BXIhph1IAAB1IgiAAIAAitIAYAAIBpB0IAAh0IAiAAIAACtg");
	this.shape_6.setTransform(10,36.6,0.269,0.269);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgQBXIAAitIAhAAIAACtg");
	this.shape_7.setTransform(5.9,36.6,0.269,0.269);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7A6IAVgWQANAYAZAAQAKAAAHgIQAIgHAAgKQAAgMgKgGIgXgKQgYgIgJgKQgKgLAAgRQAAgWAQgOQAQgPAWAAQAdABAWASIgSAYQgMgOgPAAQgKAAgHAFQgHAGAAAIQAAAHAFAFQAGAFAOAFQAdAKALALQAKAMAAAUQAAAZgRARQgRAPgaAAQglAAgWggg");
	this.shape_8.setTransform(2.6,36.6,0.269,0.269);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAHUQhTAfhaAAQjRAAiTiTQiUiUAAjQQAAizBxiLQBxiJCsglQAlgIAaARQAYAQAKAWQAKAZgDAwQiZABhtBtQhtBtAACZQAACZBtBtQBuBtCaAAIAJAAQhOhHgrheQgshiAAhsQAAhbAghVQATgzAdgsIAEgFIAHgGIAEgCIADgBIAEgBIAKACIAFACIA9AjIAdAXQBMA8AuBUQAwhUBLg8QAoggAqgWIABgBIAKgEIAIgDIAEAAIAIACIADABIAFAEIACADIABAAIABABIAfA3IATAsQAgBUAABcQgBBrgsBjQgqBehOBHIAJAAQCaAABthtQBthtAAiZQAAiZhshtQhthtiagBQgCgwALgZQAJgWAYgQQAagQAlAGQCsAlBxCKQBxCLAACzQAADQiTCUQiUCTjRAAQhaAAhUgfgAjEgEQAABOAfBHQAeBFA3A0QAlAiArAYQAsgYAlgiQA3g0AehFQAfhHABhOQAAg1gPgxQgzAwgeA8QggBBgFBGIAAAAIiDAAQgFhHgfhAQgeg9gygvQgOAyAAA0g");
	this.shape_9.setTransform(20.4,15,0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,40.8,39.1), null);


(lib.IMG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.IMG, null, null);


(lib.Grad_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#006070","rgba(44,148,167,0)"],[0,1],0,125,0,-124.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Grad_mc, new cjs.Rectangle(0,0,300,250), null);


(lib.EndFrame_Grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#006070","rgba(44,148,167,0)"],[0.384,1],0,125,0,-124.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125,1,2.448);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.EndFrame_Grad, new cjs.Rectangle(0,-180.9,300,611.9), null);


(lib.button_end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.cta_text = new cjs.Text("JOIN TODAY", "bold 13px 'FS Elliot'", "#FFFFFF");
	this.cta_text.name = "cta_text";
	this.cta_text.textAlign = "center";
	this.cta_text.lineHeight = 16;
	this.cta_text.lineWidth = 103;
	this.cta_text.parent = this;
	this.cta_text.setTransform(-15.1,355.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18C36").s().p("An1DIQghAAAAgqIAAk9QAAgHABgFQAFgcAbAAIPtAAQAfABAAApIAAE7QAAANgDAJQgHAUgWAAg");
	this.shape.setTransform(-15.1,364.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.cta_text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.button_end, new cjs.Rectangle(-68.6,344.3,107,40), null);


(lib.Scene4_Bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo right back copy 3
	this.instance = new lib.Symbol5back();
	this.instance.parent = this;
	this.instance.setTransform(126.9,423.1,1,1,0,0,0,328.9,328.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450).to({_off:false},0).wait(1).to({regX:329.2,regY:329.3,x:127.2,y:423.7,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:126.9,y:423.1},0).wait(26).to({regX:329.2,regY:329.3,x:127.2,y:423.7,alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Scene3_Bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo right back copy 2
	this.instance = new lib.Symbol5back();
	this.instance.parent = this;
	this.instance.setTransform(391.2,206.3,1,1,0,0,0,328.9,328.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(306).to({_off:false},0).wait(1).to({regX:329.2,regY:329.3,x:391.5,y:206.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:391.2,y:206.3},0).wait(134).to({regX:329.2,regY:329.3,x:391.5,y:206.9,alpha:0.5},0).wait(1).to({alpha:0},0).wait(2));

	// Logo left back copy 2
	this.instance_1 = new lib.Symbol5back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135,206.3,1,1,0,0,180,328.9,328.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(306).to({_off:false},0).wait(1).to({regX:329.2,regY:329.3,x:134.7,y:206.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:135,y:206.3},0).wait(133).to({regX:329.2,regY:329.3,x:134.7,y:206.9,alpha:0},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Scene2_Bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo right back copy
	this.instance = new lib.Symbol5back();
	this.instance.parent = this;
	this.instance.setTransform(375.6,-114.4,1,1,0,0,0,328.9,328.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).wait(1).to({regX:329.2,regY:329.3,x:375.9,y:-113.8,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:375.6,y:-114.4},0).wait(132).to({regX:329.2,regY:329.3,x:375.9,y:-113.8,alpha:0.5},0).wait(1).to({alpha:0},0).wait(1));

	// Logo left back copy
	this.instance_1 = new lib.Symbol5back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.3,-114.4,1,1,0,0,180,328.9,328.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({_off:false},0).wait(1).to({regX:329.2,regY:329.3,x:119,y:-113.8,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:119.3,y:-114.4},0).wait(131).to({regX:329.2,regY:329.3,x:119,y:-113.8,alpha:0},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Scene1_Bottom = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Symbol5back();
	this.instance.parent = this;
	this.instance.setTransform(493.3,383.2,1,1,0,0,0,328.9,328.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(162).to({regX:329.2,regY:329.3,x:493.6,y:383.8,alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(353));

	// Logo left back
	this.instance_1 = new lib.Symbol5back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(239.3,383,1,1,0,0,180,328.9,328.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(158).to({regX:329.2,regY:329.3,x:239,y:383.6,alpha:0},0).wait(8).to({_off:true},1).wait(353));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.3,54.3,913.3,658.8);


(lib.Morphinglogo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_63 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_64 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_65 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_66 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_67 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_68 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_69 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_70 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_71 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_72 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_73 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_74 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_75 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_76 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_77 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_78 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_79 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_80 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:12.8,y:1270.4}).wait(54).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_63,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_64,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_65,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_66,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_67,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_68,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_69,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_70,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_71,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_72,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_73,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_74,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_75,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_76,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_77,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_78,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_79,x:12.8,y:1270.4}).wait(1).to({graphics:mask_graphics_80,x:12.8,y:1270.4}).wait(143));

	// Logo full
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(-3.1,765,1,1,0,0,0,1281.3,706.6);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},54).wait(9).to({_off:false},0).wait(1).to({alpha:0.063},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(144));

	// Line logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18C36").s().p("ABeMOQgugNgwgVQgvAVguANQhwAfhwAAQikAAiXhAQiTg+hwhwQhxhxg9iSQhAiXAAilQgBh0AhhvQAghwBAhiQBxiwC1hkQC1hjDRAAQALAAAIAHQAHAHAAALQAAAKgHAIQgIAHgLAAQjEAAiqBdQirBehpClQg8BdgeBoQgeBpgBBsQAACbA9COQA5CJBqBpQBqBqCJA6QCNA8CbAAQBrAABngdQAZgHAVgIIgMgHQjDhrhxi/QhxjAgBjeQAAjCBYitQAFgKALgDQAKgDAJAFQCCBIBhBxQBgBxAxCKQAyiKBhhxQBhhxCBhIQAJgFALADQAKADAEAKQBYCtAADCQAADehwDAQhyC/jCBrIgNAHQAVAIAZAHQBnAdBqAAQCbAACPg8QCIg6BqhqQBphpA7iJQA7iOAAibQABhsgfhpQgfhog6hdQhriliqheQirhdjEAAQgJAAgIgHQgIgIABgKQgBgLAIgHQAIgHAJAAQDRAAC2BjQC2BkBxCwQA+BjAhBvQAgBvABB0QAAClhACXQg/CShwBxQhxBwiRA+QiYBAilAAQhvAAhwgfgAm8AAQgBDQBrC0QBqC0C3BlQAYANAZAMIAzgZQC2hlBqi0QBri0AAjQQgBiohGiZQiDBOhbB6QhcB5gkCTQgCAPgPAGIgCABIgBAAIgCAAIgFAAIgBAAIgCAAIgCgBIgBAAQgOgGgCgPQgkiThch5Qhbh6iChOQhICZABCog");
	this.shape.setTransform(-1.3,423.6,4.049,4.049);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},54).wait(169));

	// Morph
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E18C36").s().p("ABeMOQgugNgwgVQgvAVguANQhwAfhwAAQikAAiXhAQiTg+hwhwQhxhxg9iSQhAiXAAilQgBh0AhhvQAghwBAhiQBxiwC1hkQC1hjDRAAQALAAAIAHQAHAHAAALQAAAKgHAIQgIAHgLAAQjEAAiqBdQirBehpClQg8BdgeBoQgeBpgBBsQAACbA9COQA5CJBqBpQBqBqCJA6QCNA8CbAAQBrAABngdQAZgHAVgIIgMgHQjDhrhxi/QhxjAgBjeQAAjCBYitQAFgKALgDQAKgDAJAFQCCBIBhBxQBgBxAxCKQAyiKBhhxQBhhxCBhIQAJgFALADQAKADAEAKQBYCtAADCQAADehwDAQhyC/jCBrIgNAHQAVAIAZAHQBnAdBqAAQCbAACPg8QCIg6BqhqQBphpA7iJQA7iOAAibQABhsgfhpQgfhog6hdQhriliqheQirhdjEAAQgJAAgIgHQgIgIABgKQgBgLAIgHQAIgHAJAAQDRAAC2BjQC2BkBxCwQA+BjAhBvQAgBvABB0QAAClhACXQg/CShwBxQhxBwiRA+QiYBAilAAQhvAAhwgfgAm8AAQgBDQBrC0QBqC0C3BlQAYANAZAMIAzgZQC2hlBqi0QBri0AAjQQgBiohGiZQiDBOhbB6QhcB5gkCTQgCAPgPAGIgCABIgBAAIgCAAIgFAAIgBAAIgCAAIgCgBIgBAAQgOgGgCgPQgkiThch5Qhbh6iChOQhICZABCog");
	this.shape_1.setTransform(-1.3,423.6,4.049,4.049);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E2913F").s().p("EARzAzfQl6gRl7hqQi2gxjBhTIgHgDQjFBVi6AzQlvBmlvATQhYAFhYgBQqhgBplkGQn4jYmXltQhHhAhEhFQnMnMj4pTQjaoHggoxQgGhoAAhoQABnbCGnFQCGnFECmPQAshEAvhCQG7puKdlrQFAiuFWhjQDRg8DUgYQClgTCjgBQBTAABUAFQApACAdAfQAbAdAAArQAAArgbAeQgWAXgdAHIgTABQsTAAqsF2QnpELlnGhQiOClh5C7QjvFzh8GiQh8GjgCG1QgBDsAiDnQA3F0CSFhQDlImGlGqQD/EEEuC9QDEB7DWBeQI1D2JtAGQGqAEGehyQA4gPA0gQIBNgaIgwgcQqHlsmlpUQhYh9hNiGQlDoqhZpqQglj4ACkBQADmeBkmEQBaliCrlMQALgXATgOQANgJARgGIAQgDQAhgGAdAPIABAAIAYAMIAaANIAaAOIA8AjIAjAWQAvAdAuAfQCnBxCYCEQBoBaBhBjQBHBJBDBNQGHHFDOIwQDQowGHnFQBFhPBIhKQEAkFEujFIAJgGIBCgpIA1gfIAcgQIA2gdIAMgGIAGgEQAWgJAWACQANABANAEIADAAIACABIAIADQAiAOAQAiQBZCuBDCyQA+CnAsCqQBjGDACGbQACEDgkD6QhaJolAIpQhPCIhZB+QmkJSqFFrIgzAcIBPAaQAzARA3AOQGgByGpgEQJsgGI3j3QDShbDAh4QEyi/EDkHQGkmqDkonQCPlYA3lrQAljvgBj1QgCm2h8miQh8mijulzQhyixiFicQltmun0kRQqmlzsLgDIgOgBQgngCgdgdQgcgfAAgqQAAgrAdgdQAdgfAngCQBPgEBPAAQCgAAChARQDOAYDMA3QFmBkFOC1QKPFmG3JcQA4BNA1BRQEAGRCFHDQCGHFABHbQAABagEBaQgdJAjgIUQj6JTnKHMQg7A8g+A4QmeF5oDDcQpmEGqgABIgTABQhDAAhEgEgA7plSQgSCnABCrQACJBDNILQBbDpCEDdQDuGTFQExQEGDuFBCyQBeA0BpAwQBiguBog2QFDizEHjxQFNkwDumQQCEjfBbjrQDKoJACo/QABirgSioQg0ntjRnIQm6EMlGGNQg+BKg5BOQkAFfiRGNIgBADQhECegxCnQgIA3g8AYIgKAEIgHAAIgGABIgVAAIgYgFQg5gWgMg5Qgvieg/iXQiSmZkGlmQg2hLg7hHQlImRm+kOQjRHIg0Hug");
	this.shape_2.setTransform(-1.4,424.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E49648").s().p("EAR6AzpQl9gQl8hpQi4gyjChTIgHgCQjGBUi8AzQlwBmlzASQhYAFhYgBQqlgDpokJQn5jamZlyQhIhAhEhFQnNnRj4pVQjZoLgfo2QgGhoABhoQADneCInHQCHnHEGmQQAthFAvhCQHApwKhlrQFCitFZhiQDVg8DTgSQClgMCfAHQBQADBRAKQAnAEAcAhQAaAdAAArQAAArgaAfQgVAYgcAIQgJABgKAAQsMABqlFwQnkEIlmGdQiNCjh4C5QjuFuh8GeQh9GdgEGyQgCDqAgDkQA0FyCOFeQDfIiGeGpQD6ECEpC/QDBB8DUBeQItD5JlAMQGlAJGchsQA3gOA0gQIBNgZIgwgcQqClzmfpXQhXh9hMiHQk9oshVpqQgjj5ADkBQAFmdBmmEQBdlhCrlLQAMgXATgOQANgKAQgGIAQgDQAggHAdANIABAAQANAFAMAGIAZAMIAaANIA9AiIAjAVIBeA8QCnBxCZCCQBoBaBiBjQBHBIBEBNQGJHCDSIuQDVouGJnCQBFhPBJhJQEBkEEujDIAJgGIBDgpIA1gfIAcgPIA2gbIANgGIAGgCQAVgIAXACQAMABANAEIACABIADABIAIADQAhAPAQAhQBZCuBFCyQA+CmAtCrQBlGCAFGaQADEDgiD6QhWJok7IrQhNCJhYB/QmeJVqAFyIgyAcQAmANAoANQAzAPA3AOQGdBsGjgJQJlgMIwj5QDOhdC9h4QEujBD+kFQGdmpDeojQCLlVA1lpQAjjtgDjzQgEmxh8meQh9mdjulvQhxiuiFibQlrmpnvkOQqfltsEgEIgOgBQglgEgcgeQgbgfAAgrQAAgrAcgdQAcggAlgEQBMgJBNgDQCbgICjALQDNARDPA3QFoBjFQC1QKUFmG8JeQA4BOA1BRQEEGSCHHFQCHHHADHeQAABbgEBaQgcJEjeIXQj6JWnMHQQg8A9g+A4QmgF9oEDfQpnEIqmADIgTAAQhDAAhEgDgA7ZlLQgRCmABCpQAEI6DLIFQBbDmCDDbQDrGOFMEuQEEDsE8CwQBdA0BoAwQBhguBmg2QE/iyEFjuQFJktDrmLQCDjdBbjoQDJoDADo5QACiogRimQgynojMnEQm2EQlCGPQg8BLg4BPQj8FgiMGPIgBADQhICXg4CeQgKA1g8AWIgKAEIgHAAIgGACIgVAAIgYgGQg5gUgOg3Qg0iXhEiPQiMmakCloQg1hLg5hHQlDmUm7kSQjMHFgxHng");
	this.shape_3.setTransform(-1.6,425.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E59C51").s().p("EASAAz2Ql/gQl+hpQi6gyjChSIgHgCQjHBUi9AzQlzBml1ARQhZAEhZgBQqpgFppkLQn7jcmbl2QhIhBhEhGQnQnVj2pZQjZoNgdo6QgGhpABhpQAFnhCJnJQCKnIEJmSQAthFAwhCQHGpzKklqQFEitFchhQDYg8DSgKQCmgGCaAOQBPAIBNAPQAlAGAbAhQAZAeAAArQAAArgYAgQgVAYgbAKIgSABQsGABqdFrQngEFlkGYQiMCih4C2QjtFqh9GZQh9GZgGGtQgEDoAfDjQAxFvCLFaQDYIfGXGoQD1EBElC/QC+B9DQBfQImD8JeASQGgANGYhmQA3gNA0gPIBMgYIgvgdQp9l5mZpbQhVh+hMiHQk3othRpsQghj5AEkAQAImcBomEQBeliCtlJQAMgWATgPQAMgKAQgGIAPgEQAhgIAdAMIABAAQANAEALAFIAZALIAbANIA9AgIAjAVQAwAdAuAfQCnBwCbCBQBoBaBiBhQBIBIBEBNQGMG/DWIsQDZosGMm/QBFhOBJhJQEDkDEujBIAKgGIBCgpIA1geIAegOIA2gZIAMgFIAGgDQAVgHAXADQAMACANAEIACABIADABIAIADQAgAQAQAhQBZCuBHCxQA+CmAuCqQBoGCAHGaQAFECghD7QhRJpk2IsQhMCJhXCAQmYJZp7F4IgxAdIBNAYQAzAPA2ANQGaBmGegMQJfgTInj9QDMhdC6h5QEpjBD5kFQGVmnDZogQCHlSAylnQAhjrgDjvQgHmuh9mZQh9mZjtlqQhxitiEiZQlpmknqkKQqYlpr/gDIgNgCQgjgGgbgeQgaghAAgqQABgrAageQAbghAkgGQBJgNBKgHQCXgPCjAFQDMAKDTA2QFrBjFSC0QKYFlHBJiQA5BOA1BRQEGGUCKHHQCJHIAEHhQABBcgEBbQgbJIjdIZQj5JZnOHVQg9A9g+A5QmiGBoGDhQppELqqAEIgWAAQhDAAhDgCgA7KlAQgQCkACCmQAFI0DLH/QBaDkCBDYQDpGJFJErQEADpE5CvQBcA0BmAvQBgguBlg1QE6iwECjsQFGkqDpmGQCBjaBajmQDIn9AGoyQABimgQilQgvnjjHm/QmzEUk9GSQg7BLg3BPQj4FjiGGPIAAADQhOCPg+CXQgMAyg8AVIgKAEIgGAAIgHABIgUAAIgZgFQg4gTgQg0Qg6iPhJiIQiHmcj9lpQg0hMg4hHQk+mWm2kWQjIHAgvHjg");
	this.shape_4.setTransform(-1.7,425.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6A15B").s().p("EASHA0EQmCgOmAhpQi7gyjDhSIgIgCQjHBUi/AzQl1Bll3ARQhaADhZgBQqugGprkOQn8jfmel6QhHhChFhGQnRnZj2pcQjYoQgbo/QgGhpABhqQAGnkCMnKQCMnKEMmTQAuhGAwhDQHLp1KplpQFGisFfhhQDbg7DQgEQCnABCVAWQBNALBKAUQAkAIAZAhQAYAgAAArQAAAqgXAhQgUAZgZALQgJACgJAAQsAAAqWFnQnbEBliGVQiMCfh3C0QjsFmh+GUQh9GUgJGqQgEDlAdDhQAuFsCHFXQDSIcGQGmQDwEAEhDBQC7B8DNBgQIdEAJXAYQGbARGWhgIBqgaIBMgYIgvgcQp3mBmUpdQhUh/hKiIQkyovhNpsQgfj5AGkAQAKmbBqmEQBgliCulHQAMgXASgPQANgKAQgGIAOgFQAggIAdAJIABAAQAOAEAKAFIAaAKIAaALIA+AgIAkAVQAvAcAvAeQCnBwCbCAQBpBZBjBhQBIBIBEBMQGPG9DaIpQDdopGOm9QBGhNBJhJQEGkCEui/IAJgGIBDgpIA1gdIAegOIA2gXIANgEIAGgCQAVgGAWADQAMACAMAFIADABIADABIAHAEQAgAQAQAiQBaCsBHCyQA/ClAwCqQBpGBAKGaQAGEBgfD8QhNJpkwIuQhLCKhWCBQmSJbp2F/IgxAdQAmANAnALQAyAOA2AMQGXBgGagQQJXgZIgkAQDIheC3h6QEljCD1kDQGNmnDTobQCDlQAvlkQAgjpgFjtQgImqh+mUQh+mUjslmQhwiriEiXQlomgnlkGQqRlkr5gDIgMgEQgigHgZgfQgYghAAgqQAAgrAZgfQAagiAjgIQBGgRBIgKQCSgXCkgCQDLADDWA3QFuBiFUC0QKbFkHGJlQA6BOA2BSQEJGVCMHIQCLHKAFHlQABBbgEBdQgZJMjdIbQj4JdnQHZQg9A+g/A6QmkGEoGDjQpsEOqvAGIgWAAQhDAAhDgDgA66k0QgPCiACClQAHIsDKH6QBZDhCADWQDnGDFEEoQD+DoE0CtQBbAzBlAvQBfgtBjg1QE3ivD/jpQFCknDmmCQCAjXBajjQDGn4AIoqQACilgPiiQgtnejCm7QmwEYk3GUQg7BMg2BPQjzFliAGQIgBAEQhTCHhDCOQgPAwg7AUIgKAEIgHAAIgGABIgVAAIgZgFQg4gSgSgyQg/iHhOiBQiBmcj4lrQgzhMg4hIQk5mZmykZQjDG8gsHdg");
	this.shape_5.setTransform(-1.9,425.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E8A664").s().p("EASNA0TQmFgNmChpQi8gyjEhSIgHgCQjJBUjBAzQl2Bll6AQQhaADhagBQqzgIpskRQn9jhmgl+QhIhChFhHQnTndj1pgQjXoSgapEQgFhqABhqQAHnnCOnMQCOnLEPmWQAvhFAxhEQHQp4KtlnQFHisFjhhQDeg7DPAEQCoAHCQAdQBKAPBHAZQAiAKAZAjQAWAgAAArQAAArgWAhQgSAagYANIgSABQr5ABqQFiQnVD9lhGRQiLCdh3CyQjrFih+GPQh+GPgLGmQgFDiAbDgQAsFpCDFUQDMIYGIGlQDrD/EdDCQC5B9DJBhQIVECJQAfQGWAVGThaQA2gMA0gNIBLgWIgvgeQpymGmNphQhUiAhIiIQktowhJpuQgdj5AHj/QANmbBtmEQBhlhCwlGQALgXATgPQAMgKAPgHIAPgFQAfgJAdAIIABgBQAOADAKAFIAaAJIAaAKIA+AfIAkAUIBfA6QCnBwCcB+QBpBZBkBhQBJBHBEBMQGRG5DfIoQDhonGQm6QBGhNBKhJQEHkAEvi+IAJgGIBDgoIA2gcIAdgNIA3gVIANgEIAGgCQAVgFAVAEQAMADAMAFIADAAIADABIAIAEQAeASAQAhQBbCtBJCwQA/CmAwCpQBsGBAMGZQAIEBgeD8QhIJqkrIvQhKCLhVCBQmMJfpwGGIgxAeIBNAWQAyANA0AMQGVBaGUgVQJRgfIYkDQDFhfC0h6QEhjEDvkBQGHmmDMoYQB/lNAtlhQAejngGjrQgLmlh+mQQh+mPjsliQhwioiDiWQlmmbngkDQqLlfrygDIgMgEQgggKgXgfQgYgiABgqQAAgrAYggQAZgiAhgKQBDgWBFgOQCOgeClgIQDKgDDZA1QFxBiFWCzQKfFkHMJoQA6BOA3BSQEMGXCNHKQCNHMAGHoQACBcgEBdQgXJQjcIeQj4JgnTHdQg8A/hAA6QmmGIoIDlQptERq0AHIgnABQg7AAg7gDgA6rknQgOChACCiQAKImDIHzQBZDfB+DTQDkF+FBElQD7DlEwCsQBaAzBkAvQBdguBig0QEzitD8jnQE+kkDkl9QB+jUBajgQDFnyAJokQADijgOigQgqnZi+m3QmsEckzGXQg5BMg1BQQjvFnh7GRIAAADQhYCAhKCHQgRAtg7ATIgKADIgGAAIgHABIgUAAIgZgEQg4gSgUguQhFiAhSh6Qh8mej0lsQgyhMg2hJQk0mbmvkdQi9G4gqHYg");
	this.shape_6.setTransform(-2,425.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E9AB6D").s().p("EASTA0kQmHgOmDhoQi/gyjFhSIgHgBQjJBUjDAzQl3Bkl+APQhaADhagBQq3gKpvkUQn+jjmimCQhJhDhFhHQnVnij0pjQjWoVgZpIQgFhrAChqQAJnrCQnNQCQnNESmXQAvhGAyhDQHVp7KxlnQFKirFlhgQDig7DOALQCoAOCMAkQBHATBEAeQAhAMAXAjQAVAhAAArQAAArgVAiQgRAagXAPIgSABQryABqJFeQnQD6lgGMQiKCbh2CvQjqFeh/GKQh/GLgMGiQgHDgAaDeQAqFmB+FRQDGIUGBGkQDnD+EYDDQC1B9DGBiQIOEFJIAlQGSAZGQhTQA2gMAzgMIBLgVIgvgeQpsmNmJpkQhSiBhHiIQkooyhEpuQgcj6AKj/QAPmaBumEQBklhCwlEQAMgXASgQQAMgKAPgHIAPgGQAfgJAcAGIABAAQAPABAKAFIAZAIIAbAKIA+AdIAlAUIBeA6QCoBvCdB9QBpBYBkBgQBKBHBFBLQGTG3DjInQDlonGTm3QBGhMBLhIQEJj/Eui8IAKgGIBDgoIA2gcIAdgMIA3gTIANgDIAGgCQAVgDAWAEQALADAMAFIADABIACABIAIAEQAeATARAhQBaCsBKCwQBACmAyCoQBtGBAPGYQAJEAgcD9QhEJrkmIxQhICLhTCCQmHJiprGNIgwAeIBMAVQAxANA1ALQGRBUGQgZQJJglIQkGQDChgCyh8QEcjEDqkBQGAmkDGoUQB7lKAqlfQAcjlgHjoQgNmih+mKQh/mLjrleQhvimiDiUQllmXnaj/QqFlZrsgEIgLgFQgegLgWggQgWgiAAgrQAAgrAXggQAYgkAfgLQBAgbBEgRQCJglCmgPQDJgKDcA1QF0BhFXCzQKkFjHQJrQA7BPA3BSQEQGZCPHLQCPHOAIHrQABBcgDBeQgXJVjbIfQj3JknVHiQg9A+g/A8QmpGMoIDnQpwETq5AJIgsABQg5AAg5gCgA6bkZQgOCfAECgQALIfDGHtQBZDdB9DQQDhF5E9EiQD5DjEsCqQBZAzBiAuQBcgtBhg0QEuirD5jlQE7khDhl3QB9jSBZjeQDEnsALodQAEiggOigQgnnTi5myQmoEgkuGZQg5BNg0BQQjqFnh2GUIAAADQhdB4hQB/QgTAqg6ASIgKADIgHAAIgHACIgUAAIgZgFQg4gQgWgsQhKh4hYhzQh2mfjultQgxhNg2hJQkumdmskhQi4G0gnHSg");
	this.shape_7.setTransform(-2.1,425.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBB176").s().p("EASaA00QmLgMmEhoQjAgyjGhSIgHgBQjLBTjEAzQl5BlmAANQhbADhagBQq8gLpwkXQoAjlmlmHQhIhEhFhHQnXnmj0pmQjVoYgXpNQgFhrAChrQAKntCTnPQCSnPEVmZQAvhGAzhEQHap9K1lmQFMirFohfQDlg6DNARQCpAUCHAsQBFAXBBAjQAfAOAWAkQAUAhAAAsQAAArgUAjQgQAbgWAQIgRABQrrABqDFZQnLD2leGIQiKCah1CsQjqFah/GFQh/GGgOGeQgIDeAYDcQAnFkB6FOQDAIPF6GjQDiD9EUDEQCyB+DDBjQIGEIJBArQGMAeGOhOIBogWIBKgUIgugeQpnmUmDpoQhQiBhHiJQkiozhApwQgaj6ALj+QASmaBwmDQBmlhCxlDQAMgWASgQQAMgLAPgHIAOgHQAegKAcAFIABgBQAQABAJAFIAZAGIAcAJIA+AcIAlAUQAwAcAvAdQCoBvCeB8QBpBYBlBfQBKBGBFBLQGVG0DoIlQDpokGVm0QBHhNBLhHQELj+Eui6IAKgGIBDgoIA3gbIAegLIA3gSIANgCIAGgBQAUgCAWAEIAXAJIACABIADABIAIAFQAdATARAhQBaCsBMCvQBACmAzCoQBvGAARGYQALEAgaD8QhAJskgIzQhHCLhSCEQmBJlpmGTIgvAfIBLAUQAxAMA0AKQGOBOGLgdQJDgrIIkKQC+hhCwh8QEXjFDmj/QF3mkDBoPQB3lIAnldQAbjjgIjlQgPmeh/mFQiAmGjqlaQhvikiCiTQlkmSnVj7Qp+lVrmgDIgKgGQgcgNgVghQgVgjAAgqQABgsAWggQAWgkAegOQA9gfBBgVQCFgsCmgWQDIgQDgA0QF3BhFZCzQKoFiHVJuQA8BPA3BSQETGbCRHNQCRHPAJHuQABBegDBdQgVJZjaIjQj2JmnYHnQg9A/hAA8QmqGQoKDpQpyEWq9AKIg1ABIhqgCgA6MkLQgMCeAECeQANIYDFHnQBYDaB7DNQDfF0E6EgQD1DgEoCpQBYAyBhAvQBbgtBgg0QEpiqD3jiQE3kfDflyQB7jPBYjbQDEnmANoXQADiegMidQglnPi0mtQmlEkkpGbQg4BNgzBRQjlFphwGVIgBADQhiBxhVB3QgWAog6AQIgKADIgHAAIgGABIgVAAIgYgEQg4gPgZgpQhQhxhchsQhxmfjplwQgwhNg1hJQkpmgmokkQiyGvgmHNg");
	this.shape_8.setTransform(-2.3,425.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECB67F").s().p("EASgA1FQmNgMmGhnQjCgzjGhRIgHgBQjMBTjGAzQl7BkmCANQhcADhagCQrBgNpykZQoBjomnmLQhJhEhFhHQnZnrjzppQjUobgWpSQgEhrADhsQALnwCUnRQCVnQEYmbQAwhGAzhEQHgqAK5llQFNiqFshfQDog6DLAYQCqAbCDA0QBCAaA+AoQAdAQAVAlQASAiABAsQAAArgTAjQgPAcgUARIgRABQrlACp8FUQnGDzldGDQiJCYh0CqQjpFWh/GAQiAGBgRGbQgJDbAXDaQAkFhB2FLQC7IMFxGiQDeD7EPDFQCwB/C/BkQH+ELI6AxQGIAiGKhIQA1gKAzgLIBKgTIgugeQpimbl9pqQhPiChFiKQkdo1g8pwQgYj6AMj+QAUmZBzmDQBolhCylCQAMgWASgQQALgLAPgIIAOgGQAegLAcACIABAAQAPAAAJAEIAaAFIAbAJIA/AbIAlATIBfA5QCpBuCeB7QBqBYBlBeQBLBGBGBKQGXGyDsIjQDtojGYmxQBHhMBMhHQEMj9Evi4IAKgGIBDgnIA3gbIAegLIA3gPIANgCIAGgBQAVgBAVAGIAWAJIADABIADABIAIAFQAcAUARAhQBbCrBNCwQBAClA0CoQBxF/AUGXQAMEAgYD9Qg8JskaI1QhGCMhRCEQl8JopfGaIgwAfIBLAUQAxALAzAJQGLBIGGghQI8gxIAkNQC8hiCsh8QETjHDhj+QFwmiC6oMQB0lFAllaQAYjigJjiQgRmaiAmBQiAmBjplVQhviiiBiRQlimOnQj3Qp4lQrfgEIgKgGQgbgPgTghQgUgkABgqQAAgsAVghQAVglAcgQQA6gjA/gYQCBg1CngbQDHgXDjAzQF6BhFaCyQKsFhHbJyQA8BPA4BTQEWGcCSHPQCTHRALHxQABBegCBeQgUJdjZIlQj2JqnaHrQg9A/hAA9QmtGUoLDrQpzEZrDAMIg1AAIhrgBgA58j9QgMCcAFCdQAPIQDDHiQBYDXB6DLQDcFvE2EcQDzDeEkCoQBXAyBfAuQBagtBegzQEmipDzjfQE0kcDcltQB6jMBYjZQDCnhAPoPQAEicgMicQginKivmoQmiEnkkGeQg3BOgyBSQjgFrhrGVIgBADQhnBqhbBuQgYAmg6APIgKADIgGAAIgHABIgUAAIgZgEQg4gOgagnQhWhphhhkQhrmhjllxQgvhNgzhKQkkmimlkoQitGrgjHHg");
	this.shape_9.setTransform(-2.4,425.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EDBB88").s().p("EASnA1WQmQgLmIhnQjDgzjHhRIgIgBQjMBUjHAzQl9BjmGAMQhcADhbgCQrFgPp0kcQoCjqmpmPQhJhFhFhIQnbnvjypsQjUodgUpXQgEhrADhtQANn0CWnSQCXnSEbmcQAwhHA0hEQHlqDK9ljQFQiqFuhfQDrg5DLAfQCqAhB+A8QBBAeA6AtQAbASAUAmQARAiABAsQAAArgRAkQgPAdgTATIgRABQreACp0FOQnCDwlbF/QiICXh0CnQjoFRiAF8QiAF8gTGWQgKDZAVDZQAhFeByFIQC1IIFqGhQDZD6ELDGQCtCAC8BkQH2EOIzA4QGCAmGIhDQA0gIAzgKIBJgSIgtgfQpcmil4puQhOiChEiKQkXo3g4pxQgWj6AOj9QAWmZB1mDQBqlhCzlAQAMgWARgQQAMgLAOgJIANgHQAegMAcABIABAAQAQgBAJAEIAZAEIAcAIIA/AZIAlATIBgA5QCoBuCgB5QBqBYBmBdQBLBGBGBKQGaGvDwIhQDyohGamvQBHhLBMhHQEPj8Eui1IAKgHIBDgmIA3gaIAfgKIA3gOIAOgBIAGgBQAUABAVAGQALAEALAGIADABIADABIAHAFQAcAVARAgQBbCsBOCuQBBClA1CoQBzF/AXGWQAOD/gXD+Qg3JtkWI2QhECMhQCGQl2JspaGgIgvAgIBKASIBjATQGJBCGBglQI1g4H4kQQC4hjCqh9QEOjHDcj9QFpmhC0oIQBwlDAilXQAXjggLjfQgTmWiAl8QiBl9jolRQhuigiBiPQlhmJnLjzQpwlMragDIgJgHQgZgSgSghQgSglAAgqQABgsATgiQAUglAbgSQA3goA9gbQB8g8CogiQDFgeDnAzQF9BgFcCyQKwFgHgJ1QA9BPA4BTQEYGeCVHRQCVHSAMH0QACBggDBeQgSJijZInQj1JtnbHvQg+BAhBA9QmvGYoMDtQp1EcrHANIhFABIhcgBgA5sjuQgLCaAFCbQAQIJDDHcQBXDVB5DIQDZFqEyEZQDwDcEgCmQBWAyBeAtQBZgsBdgzQEhinDxjdQEwkZDaloQB4jJBXjWQDBnbARoJQAFiagLiaQggnFiqmkQmeEskfGgQg2BPgxBRQjdFthlGXIgBADQhsBihhBnQgaAig5APIgKACIgHAAIgHABIgUAAIgZgDQg4gOgcgjQhbhihmhdQhmmijflyQguhOgzhLQkfmkmgksQipGnggHCg");
	this.shape_10.setTransform(-2.6,425.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFC091").s().p("EAStA1nQmSgKmKhnQjFgyjIhRIgHgBQjNBTjJA0Ql/BjmIALQhcAChcgCQrKgQp1kfQoEjsmrmUQhKhFhFhIQndn0jxpwQjTofgTpbQgDhtADhtQAOn2CZnUQCYnUEfmeQAxhHA0hEQHqqGLCliQFRiqFyheQDug5DJAnQCrAnB6BDQA+AiA2AyQAbAUASAnQAQAjAAAsQABArgQAlQgOAdgRAUIgRABQrYADptFJQm9DslaF8QiHCUhzClQjnFNiBF3QiBF4gVGSQgLDWAUDYQAfFbBuFEQCuIEFjGgQDUD5EHDIQCqCAC4BlQHuERIsA+QF+AqGFg8QA0gIAygKIBJgRIgtgfQpXmolypxQhNiDhCiLQkTo4gzpyQgVj6AQj9QAZmYB3mDQBrlhC1k+QAMgWARgRQALgLAOgJIANgIQAegMAbgBIABAAQARgCAIAEIAaADIAbAGIBAAZIAmASIBfA5QCpBtChB4QBqBXBmBdQBMBFBHBKQGcGsD0IfQD2ofGcmsQBIhKBNhHQEQj6Evi0IAKgHIBDgmIA3gZIAfgKIA4gLIANAAIAGgBQAUABAVAHIAVALIAEABIACABIAIAFQAbAWARAgQBbCrBQCvQBBCkA3CnQB1F/AZGWQAPEAgVD9QgzJukQI3QhDCNhPCGQlwJvpVGnIgvAgIBKASIBiARQGGA8F8gpQIug+HwkTQC1hkCnh+QEKjIDXj8QFimgCuoEQBrlAAglVQAVjdgLjdQgWmSiAl3QiBl4jplNQhtieiBiOQlfmEnFjwQpqlGrUgEIgJgHQgXgUgQgiQgRglABgqQAAgsASgjQATgmAZgUQA0gsA7gfQB3hDCpgpQDFgkDpAyQGBBgFeCxQKzFgHlJ4QA+BPA5BUQEbGfCXHSQCXHVANH3QACBggCBfQgRJmjYIpQj0JwneH0Qg+BBhBA9QmxGcoNDvQp4EfrMAPIhFAAIhdgBgA5djeQgKCYAGCZQASICDBHWQBXDSB3DFQDXFlEvEXQDtDZEcClQBVAxBcAtQBYgsBbgyQEeimDtjaQEtkXDXljQB3jGBXjTQC/nWAToBQAFiYgKiZQgdm/ilmgQmbEwkaGjQg1BPgwBSQjYFvhgGXIAAADQhyBbhnBeQgcAgg5AOIgKACIgHAAIgHABIgUAAIgZgDQg3gNgfghQhghahrhWQhgmijbl0QgthPgyhLQkamnmckvQikGjgeG9g");
	this.shape_11.setTransform(-2.7,425.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F0C69B").s().p("EASzA14QmVgJmLhmQjGgzjJhRIgIAAQjOBTjLAzQmABjmLAKQhdAChcgCQrOgSp3kiQoGjumtmYQhJhFhGhJQnen5jxpyQjSojgRpfQgEhtAEhuQAPn6CbnVQCbnVEhmgQAyhHA1hFQHvqILGliQFTipF1hdQDxg5DIAuQCsAuB1BKQA7AmA0A2QAYAWARAoQAQAkAAAsQAAArgPAmQgMAegQAWIgRABQrRACpnFFQm3DolYF4QiHCShyCjQjnFIiBFzQiBFzgXGOQgNDVASDVQAdFYBqFBQCoIBFbGeQDPD4EDDJQCnCAC1BmQHnEVIkBDQF5AvGCg3QA0gHAygIIBIgQIgtggQpRmvlsp0QhMiEhBiLQkNo6gvpzQgTj6ARj9QAbmXB5mCQBulhC1k9QAMgWARgRQAMgMANgJIANgIQAdgNAbgDIABAAQARgCAIADIAaACIAbAFIBBAYIAlASIBgA4QCpBtCiB2QBqBYBnBcQBMBEBIBKQGeGpD5IdQD6odGempQBJhKBNhGQESj6EviyIAKgGIBDgmIA4gZIAfgIIA4gKIANABIAGgBQAUADAVAHIAVAMIADABIADABIAHAFQAaAXARAgQBcCrBRCtQBCClA3CnQB4F+AbGVQARD/gTD+QgvJvkLI5QhCCNhOCHQlpJypQGuIguAhIBIAQIBiAQQGDA2F3guQInhDHokXQCyhkCkh/QEGjJDSj7QFbmfCnoAQBok9AdlSQATjbgMjbQgYmOiBlzQiClzjnlJQhtibiAiNQlel/nAjsQpklCrNgDIgIgJQgVgVgQgjQgPgmABgqQAAgsARgjQASgnAYgWQAxgxA4giQBzhLCqgvQDDgrDtAyQGDBfFgCxQK4FfHqJ7QA+BQA5BTQEfGhCZHVQCYHWAOH6QADBggCBgQgQJqjXIsQjzJznhH5Qg+BBhBA+QmzGgoPDxQp5EhrRAQIhRABIhSgBgA5NjPQgKCWAGCXQAVH7DAHQQBWDQB2DDQDUFfErEUQDqDXEYCjQBUAxBbAtQBXgsBZgyQEaikDrjYQEpkTDUlfQB2jDBWjRQC+nPAVn7QAGiWgKiXQgbm6igmcQmXE0kVGmQg0BPgvBTQjUFxhaGYIAAADQh3BThtBXQgeAdg5AMIgKACIgHAAIgHABIgUAAIgZgDQg3gLghgeQhmhThvhPQhbmjjWl2QgshOgxhMQkVmqmZkzQieGfgbG4g");
	this.shape_12.setTransform(-2.8,425.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F1CBA4").s().p("EAS6A2KQmYgImNhmQjIgzjKhRIgHABQjPBSjNAzQmCBjmNAJQheAChcgDQrTgTp5klQoHjwmvmcQhKhGhFhKQnhn8jwp2QjRomgQpkQgDhtAEhuQARn9CdnXQCdnXEkmhQAyhIA2hFQH1qLLJlgQFVipF4hdQD1g5DGA1QCtA1BwBSQA5ApAxA8QAWAYAQAoQAOAlABAtQAAAqgOAnQgLAegPAYIgQABQrLACpgFAQmyDllXFzQiGCRhyCgQjmFFiBFtQiCFugZGLQgNDSAQDTQAaFWBmE+QCiH9FUGdQDKD3D/DJQCkCBCyBnQHeEYIeBKQFzAyF/gwIBmgOIBHgPIgsghQpMm1lmp3QhLiFhAiLQkIo8grp0QgRj6ATj9QAemWB7mCQBvlhC3k8QAMgVARgSQALgLANgKIANgIQAdgOAbgFIABAAQARgDAHADIAaAAIAcAFIBAAXIAmASIBgA3QCqBsCiB2QBrBXBoBbQBMBEBIBJQGhGnD9IbQD+obGhmmQBJhKBNhFQEUj5EviwIAKgHIBEglIA4gYIAfgIIA4gIIAOABIAGAAQAUAEAUAIIAUAMIAEABIACABIAIAGQAZAXARAhQBdCqBSCtQBCCkA4CnQB6F9AdGVQATD/gRD+QgrJvkFI7QhBCOhNCHQlkJ2pKG0IguAiIBIAPQAwAIAxAGQGAAxFygyQIghKHhkaQCvhlChh/QEBjLDNj5QFTmeCin9QBkk5AalQQARjagNjYQgamKiCluQiClujmlFQhtiZh/iLQlcl7m7joQpek9rHgDIgHgKQgUgXgOgjQgOgnABgqQABgsAQgkQAQgoAWgXQAug1A2gmQBvhTCqg1QDCgyDxAyQGGBfFhCwQK8FeHwJ+QA+BRA6BTQEiGjCaHWQCbHXAPH+QADBggCBhQgOJujWIuQjzJ3njH9Qg+BChBA/Qm2GjoQDzQp7ElrVARIheABIhGgBgA4+jAQgICVAGCVQAXH0C+HLQBWDNB0DAQDSFaEnERQDnDVEUChQBTAxBaAtQBWgsBYgyQEViiDojWQEmkQDRlaQB1jABVjPQC9nJAXn0QAGiUgIiVQgZm2ibmWQmUE3kQGoQgzBQguBTQjPFzhVGZIAAAEQh8BLhzBPQggAbg5ALIgKACIgHAAIgHAAIgUAAIgYgCQg4gKgjgcQhshLhzhIQhWmkjRl4QgrhOgwhMQkPmtmWk2QiZGagZGyg");
	this.shape_13.setTransform(-3,425.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3D0AD").s().p("EATAA2cQmagImPhmQjJgyjLhRIgIABQjPBSjPAzQmDBimRAIQhdAChdgCQrYgWp7knQoIjzmxmgQhKhGhGhKQnioCjwp5QjQoogOpoQgDhvAEhuQASoACfnZQCfnYEomjQAzhIA2hFQH6qOLNlfQFXipF7hcQD5g5DFA9QCtA7BrBZQA3AtAtBBQAWAaAOApQANAlAAAtQABArgNAoQgKAegOAaIgQAAQrEADpZE7QmtDilVFvQiGCPhxCdQjlFAiCFpQiCFqgbGGQgPDQAPDSQAXFSBiE8QCcH4FMGdQDGD1D7DLQChCBCuBoQHXEbIWBQQFvA2F8gqIBlgNIBHgNIgsgiQpGm7lhp7QhKiFg/iMQkCo9gnp1QgPj7AUj8QAhmWB9mBQBxlhC4k6QAMgWAQgSQAMgLAMgKIANgJQAcgPAbgGIABAAQASgEAHACIAZAAIAcAEIBBAVIAnASIBgA3QCqBsCjB0QBrBWBoBbQBNBEBIBIQGkGkEBIZQECoZGjmjQBKhKBNhEQEXj4EuiuIAKgHIBFglIA4gXIAfgHIA4gGIAOACIAGAAQAUAEAUAJIAUANIAEACIACABIAIAFQAYAYARAhQBdCqBTCsQBDCkA6CmQB7F+AgGUQAUD+gPD+QgnJxkAI8Qg/COhMCIQleJ6pEG7IguAiIBHAOQAvAHAxAFQF9ArFtg2QIZhQHZkdQCshmCeiAQD9jMDIj4QFMmcCbn6QBgk2AYlOQAQjXgPjWQgcmGiClpQiClqjnlAQhsiXh/iJQlal3m2jkQpXk4rBgEIgHgKQgRgZgNgkQgNgnABgqQABgtAPgkQAPgpAVgZQArg6AzgpQBqhaCsg7QDBg5DzAxQGKBeFjCwQLAFeH0KBQA/BRA7BTQElGlCcHXQCdHaAQIAQADBhgCBhQgMJzjWIwQjyJ6nlICQg+BChCBAQm4GnoQD1Qp+EnraATIhdACIhIgBgA4uiwQgICTAHCTQAZHtC9HEQBVDLBzC9QDPFVEjEPQDlDSEQCgQBSAwBYAtQBVgsBWgxQERihDmjTQEikODPlUQBzi+BVjMQC7nDAZnuQAHiRgIiUQgWmwiWmSQmQE7kMGrQgyBQgtBUQjKF1hQGaIAAADQiBBEh5BHQgiAYg5AKIgKABIgGAAIgIABIgTAAIgZgCQg4gJgkgZQhyhEh4hAQhQmljMl6QgrhPgvhMQkKmvmSk6QiUGWgWGtg");
	this.shape_14.setTransform(-3.1,425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F4D5B6").s().p("EATHA2uQmdgHmRhmQjLgyjLhRIgIABQjQBSjQA0QmGBhmTAIQheABhegDQrcgXp8kqQoKj1m0mkQhKhHhFhLQnloFjup9QjQoqgNptQgChvAEhvQAUoDChnbQChnZErmlQAzhIA3hGQH/qQLSlfQFZioF+hbQD7g5DEBEQCuBBBnBhQA1AxApBGQAUAcANAqQAMAmAAAtQABAqgLApQgKAfgMAbIgQABQq+ADpRE2QmpDelUFrQiECNhxCbQjkE8iDFkQiCFlgeGCQgPDNANDRQAUFPBeE4QCWH1FFGcQDBD0D3DMQCeCCCrBoQHOEeIQBWQFpA7F6gkIBkgLIBGgNIgrgiQpBnClbp+QhJiGg9iMQj9o/gjp2QgNj7AVj7QAkmVB/mCQBzlhC5k4QAMgWAQgSQALgMANgKIALgKQAdgPAagIIABAAQATgFAGACIAagBIAcADIBBAUIAnARIBgA3QCqBrClBzQBrBWBpBaQBNBEBJBIQGmGhEFIXQEGoXGmmhQBKhIBOhFQEYj2EvitIAKgHIBEgkIA4gXIAggGIA5gEIAOADIAGAAQATAGAUAJIATAOIAEABIADABIAHAGQAYAZARAgQBdCqBVCsQBDCkA7ClQB9F9AjGUQAWD+gOD/QgiJxj7I9Qg+CPhLCJQlYJ9o/HBIguAjIBHANIBfALQF6AlFpg6QIShXHRkgQCohnCciBQD4jMDEj3QFEmbCVn2QBck0AVlLQAOjVgPjTQgemCiDlkQiDlmjmk8QhriVh/iHQlZlymwjhQpQkzq8gDIgGgLQgQgcgLgkQgLgoABgqQABgsANgmQAOgpATgbQAog+AygtQBlhhCshCQDAhAD3AxQGNBeFlCvQLDFdH6KEQBABRA7BUQEnGmCfHZQCfHbARIEQAEBigCBiQgLJ3jVIyQjxJ9nnIGQg/BDhCBAQm6GroSD3QqAErreAUQg0ABg0AAIg+AAgA4figQgGCRAHCRQAaHmC8G/QBVDIBxC6QDNFQEgEMQDhDQEMCeQBRAwBXAsQBUgrBVgxQENifDijRQEfkLDMlPQByi7BUjJQC7m+AanmQAHiQgGiSQgUmriRmOQmNFAkGGtQgyBRgsBTQjGF3hJGbIgBAEQiGA8h+A/QglAVg4AJIgKACIgHAAIgHAAIgUAAIgZgCQg3gIgngWQh3g8h9g5QhLmmjHl7QgphQgvhNQkFmxmNk+QiQGSgUGog");
	this.shape_15.setTransform(-3.3,424.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F5DABF").s().p("EATNA3AQmfgGmThlQjMgzjNhQIgHABQjRBSjSAzQmHBhmXAHQheABhegDQrhgZp+ktQoLj3m2moQhKhIhGhLQnmoKjup/QjPougLpyQgChvAEhwQAWoGCjncQCjnbEumnQA0hIA3hGQIFqTLVldQFbioGBhbQD/g4DDBKQCuBIBiBpQAzA0AmBLQASAeAMArQALAnAAAtQABArgKApQgJAggLAcIgQABQq3ADpKExQmkDblSFnQiECLhwCZQjjE3iDFfQiEFggfF/QgRDLAMDOQASFNBaE1QCPHxE+GbQC8DzDyDNQCcCCCnBqQHHEgIIBdQFlA/F2gfQAzgEAxgFIBGgMIgrgiQo8nJlVqBQhIiHg8iMQj4pBgep2QgMj8AXj7QAmmUCCmCQB0lgC7k3QAMgWAQgSIAXgXIALgKQAcgQAbgKIABAAQASgGAHACIAZgCIAcACIBCATIAnARIBhA2QCqBrClBxQBsBWBpBaQBOBDBJBHQGpGfEJIVQEKoVGpmeQBKhIBOhEQEaj2EviqIAKgHIBFgkIA4gWIAggGIA5gCIAOADIAGABQAUAHATAKIATAOIAEACIACABIAIAGQAXAaARAgQBeCpBWCsQBDCjA8CmQCAF8AlGTQAXD9gMEAQgeJxj2JAQg8CPhKCKQlSKAo6HIIgtAjIBGAMIBeAKQF3AfFkg/QILhcHJkjQCmhpCYiBQD0jOC/j1QE9maCPnyQBYkxATlJQAMjTgRjRQggl+iElfQiDlhjlk4QhriSh+iGQlXltmsjdQpJkuq1gEIgGgMQgOgdgKglQgKgoABgrQABgsAMgmQANgqASgdQAlhDAvgwQBhhpCthIQC/hGD6AvQGPBeFnCvQLIFcH/KHQBABSA8BUQEqGnChHbQCgHdATIHQAEBigCBjQgJJ7jUI1QjxKAnpILQg/BDhDBBQm8GvoTD5QqBEtrkAWQg0ABg0AAIg/AAgA4PiRQgGCQAICPQAcHfC7G5QBUDGBwC3QDKFLEcEJQDfDNEICdQBQAwBVAsQBTgrBTgxQEJidDgjPQEbkIDKlKQBwi4BUjHQC5m4AcnfQAIiOgGiQQgRmmiMmKQmJFEkCGvQgxBSgrBUQjBF5hEGcIAAADQiLA1iFA3QgnATg4AIIgKABIgHAAIgGABIgVAAIgZgCQg3gHgpgUQh8g0iCgyQhFmnjDl9QgohQgthNQkAm0mKlCQiLGPgRGhg");
	this.shape_16.setTransform(-3.4,424.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7E0C8").s().p("EATUA3SQmjgFmUhlQjOgzjNhQIgIABQjSBSjTAzQmJBhmZAGQhfABhegDQrmgbqAkwQoMj5m4msQhLhJhFhLQnpoOjtqDQjOowgKp3QgBhwAEhwQAXoJCmneQClncExmpQA0hIA4hHQIKqVLZldQFdinGEhaQECg4DCBRQCvBOBeBwQAwA5AjBQQAQAgALAsQAKAnAAAtQAAArgIAqQgHAhgLAeIgPAAQqwAEpEEsQmfDXlRFiQiDCKhvCWQjjE0iDFaQiEFbghF7QgSDIAJDNQAQFKBWEyQCJHtE3GaQC3DyDuDNQCZCECkBqQG/EkIBBiQFfBEF0gZIBjgIIBFgKIgrgjQo1nPlQqFQhHiIg7iMQjypCgap4QgKj8AZj6QAomUCEmBQB2lhC8k2QAMgVAPgSQALgNAMgLIALgKQAcgRAagLIABgBQATgGAGABIAZgEIAdACIBCASIAnAQIBhA2QCrBrCmBwQBsBWBqBYQBOBDBKBHQGqGbEOIUQEPoTGqmbQBLhIBPhEQEcj0EuipIALgHIBEgjIA5gWIAggEIA5gBIAPAEIAGABQATAIATALIATAPIAEABIACABIAIAHQAWAaARAgQBeCqBXCqQBECkA9ClQCCF8AnGSQAZD9gKEAQgaJyjwJBQg8CQhICLQlMKDo1HPIgsAkIBFAKIBdAIQF1AaFehDQIFhjHBkmQCihqCWiBQDwjPC5j0QE2mZCJnuQBUkvAQlGQAKjSgSjNQgil6iElbQiElcjkk0QhriQh9iEQlWlpmmjZQpDkpqvgEIgFgMQgMgggJglQgJgpABgrQACgsALgnQALgqAQgfQAihIAtg0QBdhwCuhOQC9hND+AvQGSBdFpCvQLMFbIEKKQBBBSA8BUQEtGqCjHdQCiHeAUIKQAEBjgBBjQgIJ/jUI4QjwKDnrIPQg/BEhDBBQm/GzoUD7QqDEwroAXQg8ACg8AAIgwAAgA3/iBQgFCOAICNQAeHZC5GyQBUDDBvC1QDHFGEYEGQDcDLEECcQBPAvBUAsQBSgrBSgwQEEidDdjMQEYkFDHlFQBvi1BTjEQC4myAenZQAJiNgFiNQgPmiiImEQmFFHj9GyQgvBSgqBVQi9F7g/GdIAAADQiQAtiLAwQgpAQg4AGIgKABIgHAAIgGABIgVAAIgYgCQg4gGgrgQQiCguiGgqQhAmoi9l/QgohQgshOQj7m2mGlFQiFGKgPGcg");
	this.shape_17.setTransform(-3.6,424.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8E5D1").s().p("EATaA3kQmlgEmVhlQjQgzjOhQIgIACQjTBRjVA0QmLBgmbAFQhgABhegEQrqgbqCkzQoOj8m6mwQhLhKhGhLQnqoTjtqGQjNozgIp7QgChxAFhwQAZoMCnnfQConfE0mqQA0hJA5hHQIPqYLelbQFfinGHhaQEFg3DABYQCwBVBZB3QAuA9AgBUQAPAiAJAtQAJAoAAAtQAAArgHArQgGAhgJAgIgPAAQqqAEo9EoQmaDTlPFeQiDCIhuCUQjiEviEFVQiEFXgkF3QgTDGAIDLQANFHBSEvQCDHpEwGYQCzDyDpDOQCVCEChBrQG3EnH6BpQFbBHFxgSQAxgDAxgEIBFgJIgrgjQownWlLqIQhFiJg5iNQjtpDgWp5QgIj8Aaj6QArmTCFmBQB5lhC8k0QANgVAPgTIAWgYIALgLQAbgRAagNIABgBQAUgHAFACIAagGIAdABIBCARIAoAQIBhA1QCrBrCnBuQBsBWBqBXQBPBDBKBGQGtGZESISQEToRGtmZQBLhHBPhDQEejzEvinIAKgHIBFgjIA5gVIAggEIA6ABIAOAFIAGACQATAJAUALIARAPIAEACIADABIAHAHQAWAbASAgQBdCpBZCqQBECkA/CkQCDF7AqGSQAaD9gIEAQgWJzjqJDQg7CQhGCMQlHKGowHVIgsAlIBFAJQAuAEAvADQFxATFahHQH9hoG5kqQCfhqCUiDQDrjPC0jzQEvmZCDnpQBQksANlEQAJjQgTjKQgll3iElVQiFlXjjkwQhqiOh9iDQlVlkmhjWQo8kkqpgEIgEgNQgLghgHgmQgHgqABgqQABgtAKgnQAKgsAPghQAfhLArg4QBYh3CuhWQC9hTEBAvQGVBcFqCvQLQFbIJKNQBCBSA8BUQExGrClHfQCkHgAWINQADBjgBBkQgHKEjSI5QjvKHnuIUQhABEhDBCQnAG3oVD9QqGEyrtAZQhGAChGAAIgdAAgA3whxQgECMAKCLQAfHSC4GsQBTDBBtCyQDFFBEVEDQDZDJEACaQBOAvBSArQBRgqBRgwQEAibDajJQEUkDDFlAQBtizBSjBQC4msAfnSQAJiLgEiLQgMmdiDmAQmCFMj3G0QgvBTgpBUQi4F9g6GeIAAAEQiVAliRAoQgrANg3AGIgKABIgHAAIgHAAIgUAAIgZgBQg3gFgtgOQiIgmiMgkQg6moi4mBQgmhQgshOQj1m5mDlJQiAGGgNGXg");
	this.shape_18.setTransform(-3.7,424.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FAEADA").s().p("EAThA32QmogDmXhlQjSgzjPhQIgHACQjUBRjXA0QmMBgmfAEQhgABhfgEQrugdqEk2QoPj+m8m1QhMhJhGhMQnsoYjrqJQjNo1gHqAQgBhyAGhwQAZoPCqnhQCpnhE4msQA1hJA5hHQIUqaLilbQFhimGKhZQEJg4C/BgQCwBbBVB/QArBAAdBaQANAkAIAuQAHAoABAuQAAArgGArQgFAigIAhIgPAAQqjAFo2EiQmVDQlOFaQiBCGhuCRQjhEriFFRQiFFSglFzQgUDDAGDKQALFEBNEsQB+HlEnGXQCvDwDlDQQCSCFCeBsQGvEpHyBvQFWBMFvgNQAxgBAwgEIBFgIIgrgkQornclFqLQhEiJg4iOQjopFgRp6QgHj8Acj5QAumTCHmBQB7lgC9kzQANgVAPgTIAVgZIALgLQAbgSAZgPIABgBQAVgIAFACIAZgHIAdAAIBDAQIAoAPIBhA1QCrBqCoBuQBtBVBrBXQBPBCBLBGQGvGWEWIQQEXoPGvmWQBMhHBQhDQEfjyEvikIALgIIBFgiIA5gVIAggDIA6AEIAPAFIAGACQATAKATAMIARAQIAEACIACABIAIAGQAVAdASAfQBeCpBaCqQBECjBACkQCFF7AtGRQAcD9gHEAQgRJ0jmJEQg5CRhFCMQlCKKopHcIgsAlIBEAJIBcAFQFuANFVhLQH2hvGyktQCbhrCRiDQDnjRCvjxQEomYB8nmQBNkpAKlBQAHjOgUjIQgnlyiElRQiGlSjjksQhpiMh9iBQlTlgmbjRQo2kgqjgEIgDgNQgJgkgGgmQgGgrABgqQABgtAJgoQAJgsANgjQAchQApg7QBTh/CwhcQC8hZEEAtQGYBdFsCtQLUFbIOKQQBCBSA9BVQE0GtCmHgQCnHiAXIQQAEBkgBBlQgGKHjRI8QjvKKnwIYQhABFhDBCQnDG7oWD/QqIE2ryAaQhIAChJAAIgYAAgA3ghhQgDCKAKCKQAhHKC2GnQBTC+BsCvQDCE8EREAQDXDGD7CZQBNAvBRArQBQgrBPgvQD8iZDXjHQERkADCk7QBsiwBSi+QC2mnAhnLQAKiJgDiJQgKmYh+l7Ql+FPjzG3QguBTgoBVQi0F/g0GfIAAADQiaAfiXAfQgtALg3AEIgKABIgHAAIgHAAIgUAAIgZgBQg3gEgvgLQiNgeiRgdQg0mpi0mDQglhQgrhPQjwm7l/lMQh7GBgKGSg");
	this.shape_19.setTransform(-3.9,424);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FBEFE4").s().p("EATnA4JQmqgDmZhkQjTgzjQhQIgIACQjUBRjZA0QmOBgmhACQhhABhfgEQrzgfqGk4QoQkAm/m5QhLhLhGhMQnuocjrqMQjMo4gFqEQgBhzAGhxQAboSCsnjQCrniE7mtQA1hKA6hHQIaqdLmlaQFiilGOhZQELg3C+BmQCxBiBQCGQApBEAaBfQALAmAHAuQAGApABAuQAAArgFAsQgEAjgGAjIgPAAQqdAEovEeQmQDNlMFWQiBCEhtCOQjgEniFFMQiGFNgoFvQgVDBAFDIQAIFCBJEpQB4HhEgGWQCqDvDgDRQCQCECaBtQGnEtHsB1QFRBQFrgHIBhgDIBEgHIgqgkQolnjlAqPQhDiKg2iOQjjpGgNp7QgFj8Aej5QAvmTCKmAQB9lgC+kxQANgVAOgUIAWgZIAKgMQAagTAagQIABgBQAUgJAFABIAagHIAdgBIBDAOIAoAQIBiA0QCrBqCpBsQBtBUBrBXQBQBBBLBGQGyGTEaIOQEboNGymTQBMhHBQhCQEijxEviiIAKgIIBFgiIA6gUIAggCIA6AFIAPAGIAGACIAmAYIAQARIAFACIACABIAIAHQAUAdASAgQBeCoBbCpQBFCjBBCkQCHF6AwGRQAdD8gFEAQgNJ1jgJGQg4CRhECOQk8KNokHiIgsAmIBEAHQAtADAuABQFrAHFQhPQHwh1GpkwQCZhsCOiEQDijSCrjwQEgmWB2niQBJknAIk+QAFjMgWjGQgoluiGlMQiGlOjiknQhpiKh8iAQlRlbmXjNQovkbqcgEIgDgPQgIglgEgnQgFgrACgqQABguAHgoQAIgtAMglQAZhUAmg/QBPiGCxhiQC6hhEIAuQGbBbFtCuQLYFZIUKUQBDBSA9BVQE3GvCoHhQCoHkAZITQAEBkgBBmQgEKMjRI+QjuKOnyIcQhABFhEBEQnFG+oXEBQqJE4r3AcQhJADhJAAIgZAAgA3QhRQgDCJALCHQAjHEC1GgQBSC8BrCtQDAE2EMD9QDUDFD4CXQBMAuBPArQBPgqBOgvQD4iYDUjEQENj9C/k2QBritBRi8QC1mhAjnFQALiGgDiIQgHmSh5l3Ql7FTjuG5QgtBTgnBWQivGBguGgIgBAEIk7AuQgwAIg3ADIgKABIgHAAIgGAAIgVAAIgZgBQg3gDgxgIIkogsQgvmqiumFQglhRgphPQjrm9l8lQQh2F9gHGMg");
	this.shape_20.setTransform(-4,423.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FCF5ED").s().p("EAGlA21QjUgzjRhQIgIADQjVBRjaAzQmQBgmkACQhhAAhggEQr4ghqHk7QoRkCnBm9QhMhLhGhNQnwogjqqQQjMo7gDqIQAAh0AFhxQAdoWCunkQCunjE9mwQA2hJA7hIQIfqgLplYQFlilGQhZQEPg3C9BuQCyBoBLCOQAnBIAWBkQAKAoAFAvQAGAqAAAuQAAArgDAsQgDAkgGAkIgOAAQqWAFooEZQmLDJlLFRQiACDhsCMQjgEjiGFHQiGFIgpFrQgXC/ADDGQAGE/BFElQBxHeEZGVQClDuDdDRQCNCGCWBuQGgEwHkB7QFMBUFogBQAxAAAwgCIBDgGIgqglQofnpk6qSQhCiLg2iOQjdpIgIp8QgEj8Afj5QAzmRCMmAQB+lhDAkwQAMgUAOgUIAVgaIAKgMIA0gmIABgBQAVgJAEAAIAZgJIAegBIBEANIAoAPIBiA0QCrBpCqBrIDZCqQBQBBBMBGQG1GQEeIMQEfoLG0mQQBMhGBRhCQEkjwEuihIALgHIBFgiIA6gTIAhgCIA6AHIAPAHIAGACIAlAaIARARIAEACIACABIAIAIQATAdASAgQBgCoBbCpQBFCjBDCjQCJF6AyGQQAfD7gEECQgIJ1jbJHQg3CShDCOQk1KRofHpIgrAmIBCAGIBaACQFpACFLhTQHph8GhkzQCWhtCLiEQDejTCljvQEZmVBwnfQBFkjAFk8QAEjLgXjCQgrlqiGlIQiGlJjhkjQhpiIh7h+QlQlWmSjKQookWqXgEIgCgPQgFgngEgoQgDgsABgqQACgtAGgpQAIguAJgnQAWhZAkhCQBLiOCxhoQC5hnELAsQGeBcFwCtQLcFYIYKXQBEBTA+BVQE5GwCrHkQCqHlAZIWQAFBlgBBnQgCKPjRJBQjtKRn0IgQhABGhFBEQnHHCoYEEQqME7r7AdQhVADhXAAQmtgCmbhkgA3BhBQgCCHALCFQAlG9C0GbQBRC5BqCqQC9ExEJD6QDRDCD0CWQBLAuBOArQBOgqBMgvQDziWDSjCQEJj6C9kxQBqiqBQi6QC0mbAlm9QALiFgCiGQgFmOh0lyQl3FXjpG8QgsBTgmBXQirGDgpGhIAAADIlHAfQgxAGg3ACIgKAAIgHAAIgHAAIgUAAIgZAAQg3gCgzgGIkygdQgqmripmHQgkhRgphPQjmnAl3lUQhxF5gFGHg");
	this.shape_21.setTransform(-4.1,423.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FEFAF6").s().p("EAGoA3JQjWg0jRhPIgIADQjXBQjcA0QmRBfmnABQhhAAhggEQr9giqJk+QoTkFnDnBQhMhMhGhNQnyoljqqSQjKo+gCqNQAAh0AGhyQAeoYCwnmQCwnlFBmxQA2hKA7hIQIkqjLulXQFnilGThYQETg2C7B0QCyBvBHCVQAkBMATBpQAJAqAEAwQAEAqAAAuQABArgDAuQgCAkgEAmIgOAAQqPAFoiEUQmFDFlKFOQiACBhrCJQjfEeiGFDQiGFDgsFnQgYC9ACDFQACE7BCEjQBrHaESGTQCgDtDYDTQCKCGCTBuQGYEzHdCCQFHBYFmAFIBgAAIBCgFIgpglQobnwk0qWQhAiLg1iPQjXpJgFp8QgBj+Agj4QA1mRCOmAQCAlgDBkuIAbgpIAUgaIAKgNIAygoIABgBQAWgLAEABIAZgKIAegDIBEAMIApAPIBiA0IFWDSIDaCpQBRBBBMBFQG2GNEjIKQEkoJG2mNQBNhGBRhBQEljvEvifIALgHIBGgiIA6gSIAhgBIA6AJIAPAHIAGADIAlAbIAQASIAEADIADABIAHAHIAlA+IC9FQICJFGQCLF5A0GQQAgD7gBECQgFJ1jVJJQg1CShCCQQkwKUoaHvIgqAnIBCAFIBZABQFmgFFGhXQHhiCGak2QCShuCJiFQDZjUChjuQERmUBrnaQBAkhADk5QACjJgYjAQgtlmiGlDQiHlEjhkfQhoiGh7h8QlPlSmMjGQoikRqQgEIgCgQIgFhRQgCgtABgqQACguAFgpQAGgvAIgpQAThdAihGQBGiVCyhvQC4huEOAtQGhBaFyCtQLgFYIdKaQBEBTA/BVQE9GyCsHlQCsHnAbIZQAEBmAABnQgBKUjPJDQjtKUn3IlQhABHhFBEQnJHGoZEGQqOE9sAAfQhWADhXAAQmwgBmchjgA2xgxQgBCGAMCDQAnG2CyGUQBRC3BoCoQC7EsEFD3QDODADwCUQBKAuBMAqQBNgqBLguQDviVDPi/QEGj3C6ktQBoinBQi3QCzmVAnm3QALiCgBiFQgCmIhvluQl0FbjkG+QgrBUglBXQimGFgkGiIAAAEIlSAPQg0ADg2ABIgKAAIgHAAIgHAAIgUAAIgZAAQg3gBg1gDIk9gPQgkmsilmIQgihSgohPQjhnDl0lXQhrF1gDGBg");
	this.shape_22.setTransform(-4.3,423.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAAHUQhTAfhaAAQjRAAiTiTQiUiUAAjQQAAizBxiLQBxiJCsglQAlgIAaARQAYAQAKAWQAKAZgDAwQiZABhtBtQhtBtAACZQAACZBtBtQBuBtCaAAIAJAAQhOhHgrheQgshiAAhsQAAhbAghVQATgzAdgsIAEgFIAHgGIAEgCIADgBIAEgBIAKACIAFACIAOAHIAvAcIAdAXQBMA8AuBUQAwhUBLg8QAoggAqgWIABgBIAKgEIAIgDIAEAAIAIACIADABIAFAEIACADIABAAIABABIAfA3IATAsQAgBUAABcQgBBrgsBjQgqBehOBHIAJAAQCaAABthtQBthtAAiZQAAiZhshtQhthtiagBQgCgwALgZQAJgWAYgQQAagQAlAGQCsAlBxCKQBxCLAACzQAADQiTCUQiUCTjRAAQhaAAhUgfgAjEgEQAABOAfBHQAeBFA3A0QAlAiArAYQAsgYAlgiQA3g0AehFQAfhHABhOQAAg1gPgxQgzAwgeA8QggBBgFBGIAAAAIiDAAQgFhHgfhAQgeg9gygvQgOAyAAA0g");
	this.shape_23.setTransform(-4.4,423.1,7.304,7.304);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},54).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(76).to({_off:false},0).wait(147));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1284.4,94.4,2562.6,1377.3);


(lib.img_Mask = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.img_Mask, new cjs.Rectangle(-19.1,-19.1,38.2,38.2), null);


(lib.Dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiGCGQg3g3AAhPQAAhOA3g4QA5g3BNAAQBOAAA4A3QA4A4AABOQAABPg4A3Qg4A4hOAAQhNAAg5g4g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(47));

	// Layer 1 copy 3
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1,1,0,0,0,31.5,31.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(11).to({alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(22));

	// Layer 1 copy 2
	this.instance_1 = new lib.Symbol3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1,1,0,0,0,47.5,47.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(4).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.5,-47.5,95,95);


(lib.Scene4_Top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dot
	this.instance = new lib.Dot();
	this.instance.parent = this;
	this.instance.setTransform(369,192);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450).to({_off:false},0).wait(3).to({x:324.2,y:172.8},0).wait(1).to({x:274.9,y:141.1},0).wait(1).to({x:250.2,y:129.5},0).wait(1).to({x:231.5,y:122.2},0).wait(1).to({x:216.2,y:117.1},0).wait(1).to({x:203.3,y:113.5},0).wait(1).to({x:192.2,y:110.9},0).wait(1).to({x:182.6,y:108.9},0).wait(1).to({x:174.1,y:107.5},0).wait(1).to({x:166.7,y:106.4},0).wait(1).to({x:160.1,y:105.6},0).wait(1).to({x:154.3,y:105},0).wait(1).to({x:149.2,y:104.6},0).wait(1).to({x:144.7,y:104.3},0).wait(1).to({x:140.8,y:104.1},0).wait(1).to({x:137.4,y:104},0).wait(1).to({x:134.4,y:103.9},0).wait(1).to({x:131.8},0).wait(1).to({x:129.6},0).wait(1).to({x:127.8},0).wait(1).to({x:126.3},0).wait(1).to({x:125.1},0).wait(1).to({x:124.2},0).wait(1).to({x:123.6},0).wait(1).to({x:123.2},0).wait(1).to({x:123.1},0).wait(1).to({y:104},0).wait(4).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(2).to({_off:true},1).wait(8));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_450 = new cjs.Graphics().p("AOFNyIESv5IQQEXIkRP6g");
	var mask_graphics_451 = new cjs.Graphics().p("AKiNGIEixAIUsFgIkiRCg");
	var mask_graphics_452 = new cjs.Graphics().p("AHGMdIEzyGIY+GnIkzSGg");
	var mask_graphics_453 = new cjs.Graphics().p("ADzL2IFCzIIdFHoIlCTJg");
	var mask_graphics_454 = new cjs.Graphics().p("AAnLQIFR0HMAhEAIoIlRUIg");
	var mask_graphics_455 = new cjs.Graphics().p("AicKtIFd1FMAk5AJkIleVGg");
	var mask_graphics_456 = new cjs.Graphics().p("AlZKMIFr2BMAolAKeIlsWAg");
	var mask_graphics_457 = new cjs.Graphics().p("AoNJsIF325MAsGALTIl3W6g");
	var mask_graphics_458 = new cjs.Graphics().p("Aq7JPIGE3wMAvfAMGImDXwg");
	var mask_graphics_459 = new cjs.Graphics().p("AtgIzIGO4kMAyvAM2ImPYkg");
	var mask_graphics_460 = new cjs.Graphics().p("Av+IZIGZ5WMA10ANkImYZVg");
	var mask_graphics_461 = new cjs.Graphics().p("AyUIAIGi6FMA4xAOOImiaFg");
	var mask_graphics_462 = new cjs.Graphics().p("A0iHpIGr6yMA7jAO2Imrayg");
	var mask_graphics_463 = new cjs.Graphics().p("A2pHUIG07cMA+MAPbImzbcg");
	var mask_graphics_464 = new cjs.Graphics().p("A4oHAIG88EMBAsAP+Im8cEg");
	var mask_graphics_465 = new cjs.Graphics().p("A6fGtIHD8qMBDCAQfInDcqg");
	var mask_graphics_466 = new cjs.Graphics().p("A8PGcIHK9NMBFOAQ9InJdNg");
	var mask_graphics_467 = new cjs.Graphics().p("A93GMIHQ9uMBHRARZInQdug");
	var mask_graphics_468 = new cjs.Graphics().p("A/XGOIHW+NMBJKARyInWeNg");
	var mask_graphics_469 = new cjs.Graphics().p("EggwAGQIHb+oMBK6ASJInbeog");
	var mask_graphics_470 = new cjs.Graphics().p("EgiAAGSIHf/CMBMgASfIngfCg");
	var mask_graphics_471 = new cjs.Graphics().p("EginAGTIHi/OMBNQASpInifOg");
	var mask_graphics_472 = new cjs.Graphics().p("EginAGTIHi/OMBNQASpInifOg");
	var mask_graphics_473 = new cjs.Graphics().p("EginAGTIHi/OMBNQASpInifOg");
	var mask_graphics_474 = new cjs.Graphics().p("EginAGTIHi/OMBNQASpInifOg");
	var mask_graphics_475 = new cjs.Graphics().p("EginAGTIHi/OMBNQASpInifOg");
	var mask_graphics_476 = new cjs.Graphics().p("EginAGTIHi/OMBNQASpInifOg");
	var mask_graphics_477 = new cjs.Graphics().p("EginAGTIHi/OMBNQASpInifOg");
	var mask_graphics_478 = new cjs.Graphics().p("EginAGTIHi/OMBNQASpInifOg");
	var mask_graphics_479 = new cjs.Graphics().p("EginAGTIHi/OMBNQASpInifOg");
	var mask_graphics_480 = new cjs.Graphics().p("EginAGTIHi/OMBNQASpInifOg");
	var mask_graphics_481 = new cjs.Graphics().p("EgjvAGUIHg/MMBNOASlInhfMg");
	var mask_graphics_482 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_483 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_484 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_485 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_486 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_487 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_488 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_489 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_490 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_491 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_492 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_493 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_494 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_495 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_496 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");
	var mask_graphics_497 = new cjs.Graphics().p("EgjyAGTIHi/OMBNQASpInifOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(450).to({graphics:mask_graphics_450,x:221.5,y:116.2}).wait(1).to({graphics:mask_graphics_451,x:228.8,y:119.2}).wait(1).to({graphics:mask_graphics_452,x:235.9,y:122}).wait(1).to({graphics:mask_graphics_453,x:242.6,y:124.7}).wait(1).to({graphics:mask_graphics_454,x:249.2,y:127.3}).wait(1).to({graphics:mask_graphics_455,x:255.4,y:129.8}).wait(1).to({graphics:mask_graphics_456,x:261.5,y:132.1}).wait(1).to({graphics:mask_graphics_457,x:267.2,y:134.4}).wait(1).to({graphics:mask_graphics_458,x:272.8,y:136.5}).wait(1).to({graphics:mask_graphics_459,x:278.1,y:138.5}).wait(1).to({graphics:mask_graphics_460,x:283.1,y:140.4}).wait(1).to({graphics:mask_graphics_461,x:287.9,y:142.2}).wait(1).to({graphics:mask_graphics_462,x:292.4,y:143.9}).wait(1).to({graphics:mask_graphics_463,x:296.7,y:145.5}).wait(1).to({graphics:mask_graphics_464,x:300.8,y:147}).wait(1).to({graphics:mask_graphics_465,x:304.6,y:148.4}).wait(1).to({graphics:mask_graphics_466,x:308.1,y:149.7}).wait(1).to({graphics:mask_graphics_467,x:311.4,y:150.9}).wait(1).to({graphics:mask_graphics_468,x:314.5,y:150.4}).wait(1).to({graphics:mask_graphics_469,x:317.3,y:149.8}).wait(1).to({graphics:mask_graphics_470,x:319.9,y:149.3}).wait(1).to({graphics:mask_graphics_471,x:321.1,y:149.1}).wait(1).to({graphics:mask_graphics_472,x:321.1,y:149.1}).wait(1).to({graphics:mask_graphics_473,x:321.1,y:149.1}).wait(1).to({graphics:mask_graphics_474,x:321.1,y:149.1}).wait(1).to({graphics:mask_graphics_475,x:321.1,y:149.1}).wait(1).to({graphics:mask_graphics_476,x:321.1,y:149.1}).wait(1).to({graphics:mask_graphics_477,x:321.1,y:149.1}).wait(1).to({graphics:mask_graphics_478,x:321.1,y:149.1}).wait(1).to({graphics:mask_graphics_479,x:321.1,y:149.1}).wait(1).to({graphics:mask_graphics_480,x:321.1,y:149.1}).wait(1).to({graphics:mask_graphics_481,x:313.5,y:149.4}).wait(1).to({graphics:mask_graphics_482,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_483,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_484,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_485,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_486,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_487,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_488,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_489,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_490,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_491,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_492,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_493,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_494,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_495,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_496,x:313.6,y:149.4}).wait(1).to({graphics:mask_graphics_497,x:313.6,y:149.4}).wait(1));

	// Logo right copy 3
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.9,423.1,1,1,0,0,0,328.9,328.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(450).to({_off:false},0).wait(1).to({regX:329.3,regY:329.3,x:127.3,y:423.7,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:126.9,y:423.1},0).wait(44));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Scene3_Top = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Dot
	this.instance = new lib.Dot();
	this.instance.parent = this;
	this.instance.setTransform(269.7,297.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(306).to({_off:false},0).wait(1).to({x:265.4,y:277.4},0).wait(1).to({x:260.6,y:258.7},0).wait(1).to({x:255.2,y:241.1},0).wait(1).to({x:249.3,y:224.8},0).wait(1).to({x:243.1,y:209.6},0).wait(1).to({x:236.5,y:195.6},0).wait(1).to({x:229.7,y:182.8},0).wait(1).to({x:222.7,y:170.9},0).wait(1).to({x:215.6,y:160.1},0).wait(1).to({x:208.6,y:150.2},0).wait(1).to({x:201.6,y:141.2},0).wait(1).to({x:194.6,y:132.9},0).wait(1).to({x:187.8,y:125.4},0).wait(1).to({x:181.2,y:118.6},0).wait(1).to({x:174.8,y:112.4},0).wait(1).to({x:168.5,y:106.8},0).wait(1).to({x:162.5,y:101.6},0).wait(1).to({x:156.7,y:96.9},0).wait(1).to({x:151.1,y:92.6},0).wait(1).to({x:145.6,y:88.5},0).wait(1).to({x:140.4,y:84.8},0).wait(1).to({x:135.4,y:81.4},0).wait(1).to({x:130.4,y:78.1},0).wait(1).to({x:125.7,y:75.2},0).wait(1).to({x:120.9,y:72.2},0).wait(1).to({x:116.4,y:69.5},0).wait(1).to({x:111.6,y:66.8},0).wait(1).to({x:107.2,y:64.3},0).wait(102).to({x:97.5,y:84.8},0).wait(1).to({x:89.5,y:106.1},0).wait(1).to({x:82.9,y:127.9},0).wait(1).to({x:77.8,y:150},0).wait(1).to({x:74.2,y:172.5},0).wait(1).to({x:72.1,y:195.1},0).wait(1).to({x:71.6,y:217.9},0).wait(1).to({x:72.8,y:240.6},0).wait(1).to({x:75.6,y:263.2},0).wait(1).to({x:80.2,y:285.4},0).wait(1).to({x:86.4,y:307.3},0).wait(1).to({x:94.3,y:328.6},0).wait(1).to({x:103.7,y:349.3},0).wait(1).to({x:114.6,y:369.3},0).wait(1).to({x:126.9,y:388.6},0).wait(1).to({regX:34.4,regY:78.4,x:149.8,y:490.4},0).wait(5));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_306 = new cjs.Graphics().p("AIXRLIOSoMIIYOmIuSIMg");
	var mask_graphics_307 = new cjs.Graphics().p("AGONiIORoPILQTeIuSIQg");
	var mask_graphics_308 = new cjs.Graphics().p("AEKJ/IOSoPIN/YOIuSIPg");
	var mask_graphics_309 = new cjs.Graphics().p("ACLGkIORoPIQpczIuRIQg");
	var mask_graphics_310 = new cjs.Graphics().p("AAPDOIOSoOMATNAhQIuRIQg");
	var mask_graphics_311 = new cjs.Graphics().p("AhnAAIOQoPMAVtAllIuRIQg");
	var mask_graphics_312 = new cjs.Graphics().p("AjbjHIOQoPMAYIApwIuSIPg");
	var mask_graphics_313 = new cjs.Graphics().p("AlLmIIORoPMAacAtyIuRIPg");
	var mask_graphics_314 = new cjs.Graphics().p("Am2pCIOQoPMAcsAxrIuRIPg");
	var mask_graphics_315 = new cjs.Graphics().p("Aoer1IOQoQMAe3A1cIuSIPg");
	var mask_graphics_316 = new cjs.Graphics().p("AqCuiIOQoPMAg8A5CIuRIPg");
	var mask_graphics_317 = new cjs.Graphics().p("ArixIIOQoPMAi8A8gIuRIPg");
	var mask_graphics_318 = new cjs.Graphics().p("As+znIOQoPMAk3A/1IuRIPg");
	var mask_graphics_319 = new cjs.Graphics().p("AuX1/IORoPMAmsBDBIuRIPg");
	var mask_graphics_320 = new cjs.Graphics().p("Avr4RIORoPMAocBGEIuRIPg");
	var mask_graphics_321 = new cjs.Graphics().p("Aw76cIORoPMAqHBI+IuRIPg");
	var mask_graphics_322 = new cjs.Graphics().p("AyI8gIORoPMArtBLuIuQIPg");
	var mask_graphics_323 = new cjs.Graphics().p("AzQ+dIORoPMAtOBOWIuRIPg");
	var mask_graphics_324 = new cjs.Graphics().p("EgUVggTIORoPMAupBQ0IuQIPg");
	var mask_graphics_325 = new cjs.Graphics().p("EgVVgiDIOQoPMAwABTKIuRIOg");
	var mask_graphics_326 = new cjs.Graphics().p("EgWSgjsIOQoPMAxRBVWIuQIPg");
	var mask_graphics_327 = new cjs.Graphics().p("EgXLglOIORoPMAycBXZIuQIPg");
	var mask_graphics_328 = new cjs.Graphics().p("EgYAgmqIORoOMAzjBZTIuRIPg");
	var mask_graphics_329 = new cjs.Graphics().p("EgYxgn+IORoPMA0kBbFIuQIPg");
	var mask_graphics_330 = new cjs.Graphics().p("EgZegpMIOQoPMA1hBctIuQIPg");
	var mask_graphics_331 = new cjs.Graphics().p("EgaHgqTIOQoPMA2YBeMIuQIPg");
	var mask_graphics_332 = new cjs.Graphics().p("EgasgrTIOQoPMA3JBfiIuQIPg");
	var mask_graphics_333 = new cjs.Graphics().p("EgbOgsNIORoPMA32BgvIuRIPg");
	var mask_graphics_334 = new cjs.Graphics().p("EgbrgsyIOQoOMA4dBhzIuQIOg");
	var mask_graphics_335 = new cjs.Graphics().p("EgcFgtPIORoPMA4/BiuIuRIPg");
	var mask_graphics_336 = new cjs.Graphics().p("EgcagtoIOQoPMA5cBjgIuQIPg");
	var mask_graphics_337 = new cjs.Graphics().p("Egcsgt8IORoPMA5zBkIIuQIPg");
	var mask_graphics_338 = new cjs.Graphics().p("Egc6guMIORoPMA6GBkoIuRIPg");
	var mask_graphics_339 = new cjs.Graphics().p("EgdDguYIOQoOMA6TBk/IuRIOg");
	var mask_graphics_340 = new cjs.Graphics().p("EgdJgueIOQoPMA6bBlMIuRIPg");
	var mask_graphics_341 = new cjs.Graphics().p("EgdLguhIOQoOMA6dBlRIuQIOg");
	var mask_graphics_342 = new cjs.Graphics().p("EgdIguiIORoMMA6IBlRIuRIMg");
	var mask_graphics_435 = new cjs.Graphics().p("EgdKguiIOQoMMA6IBlRIuQIMg");
	var mask_graphics_436 = new cjs.Graphics().p("Eggygs2IPlpqMA9lBjXIvmJqg");
	var mask_graphics_437 = new cjs.Graphics().p("EgkEgrGIQ1rLMBApBhYIw2LLg");
	var mask_graphics_438 = new cjs.Graphics().p("EgnPgpQISAsyMBDoBfTIyAMyg");
	var mask_graphics_439 = new cjs.Graphics().p("EgqTgnUITGueMBGkBdHIzGOeg");
	var mask_graphics_440 = new cjs.Graphics().p("EgtPglTIUGwPMBJaBa2I0FQPg");
	var mask_graphics_441 = new cjs.Graphics().p("EgwDgjNIVAyFMBMMBYgI0/SFg");
	var mask_graphics_442 = new cjs.Graphics().p("EgyWghCIVzz/MBO6BWEI1zT/g");
	var mask_graphics_443 = new cjs.Graphics().p("Eg0BgeyIWh1+MBRiBTjI2hV+g");
	var mask_graphics_444 = new cjs.Graphics().p("Eg1mgcWIXH4BMBUGBQ8I3HYBg");
	var mask_graphics_445 = new cjs.Graphics().p("Eg3FgZwIXn6HMBWkBORI3naGg");
	var mask_graphics_446 = new cjs.Graphics().p("Eg4dgXFIX/8QMBY8BLgI3/cQg");
	var mask_graphics_447 = new cjs.Graphics().p("Eg5vgUWIYR+dMBbOBIrI4Redg");
	var mask_graphics_448 = new cjs.Graphics().p("Eg67gRjMAYbggtMBdcBFyMgYbAgtg");
	var mask_graphics_449 = new cjs.Graphics().p("Eg8AgOsMAYegi/MBfjBC0MgYeAi/g");
	var mask_graphics_450 = new cjs.Graphics().p("Eg8+gLxMAYZglTMBhkA/yMgYZAlTg");
	var mask_graphics_451 = new cjs.Graphics().p("Eg85gLlMAYTglRMBhgA/kMgYTAlRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(306).to({graphics:mask_graphics_306,x:198.5,y:203.3}).wait(1).to({graphics:mask_graphics_307,x:203.1,y:211.3}).wait(1).to({graphics:mask_graphics_308,x:207.5,y:218.9}).wait(1).to({graphics:mask_graphics_309,x:211.7,y:226.4}).wait(1).to({graphics:mask_graphics_310,x:215.8,y:233.6}).wait(1).to({graphics:mask_graphics_311,x:219.8,y:240.6}).wait(1).to({graphics:mask_graphics_312,x:223.7,y:247.3}).wait(1).to({graphics:mask_graphics_313,x:227.4,y:253.8}).wait(1).to({graphics:mask_graphics_314,x:231,y:260.1}).wait(1).to({graphics:mask_graphics_315,x:234.5,y:266.2}).wait(1).to({graphics:mask_graphics_316,x:237.8,y:272}).wait(1).to({graphics:mask_graphics_317,x:241,y:277.6}).wait(1).to({graphics:mask_graphics_318,x:244.1,y:283}).wait(1).to({graphics:mask_graphics_319,x:247,y:288.2}).wait(1).to({graphics:mask_graphics_320,x:249.8,y:293.1}).wait(1).to({graphics:mask_graphics_321,x:252.5,y:297.8}).wait(1).to({graphics:mask_graphics_322,x:255,y:302.2}).wait(1).to({graphics:mask_graphics_323,x:257.5,y:306.5}).wait(1).to({graphics:mask_graphics_324,x:259.7,y:310.5}).wait(1).to({graphics:mask_graphics_325,x:261.9,y:314.2}).wait(1).to({graphics:mask_graphics_326,x:263.9,y:317.8}).wait(1).to({graphics:mask_graphics_327,x:265.8,y:321.1}).wait(1).to({graphics:mask_graphics_328,x:267.6,y:324.2}).wait(1).to({graphics:mask_graphics_329,x:269.2,y:327.1}).wait(1).to({graphics:mask_graphics_330,x:270.7,y:329.7}).wait(1).to({graphics:mask_graphics_331,x:272.1,y:332.1}).wait(1).to({graphics:mask_graphics_332,x:273.3,y:334.3}).wait(1).to({graphics:mask_graphics_333,x:274.5,y:336.2}).wait(1).to({graphics:mask_graphics_334,x:275.4,y:336.5}).wait(1).to({graphics:mask_graphics_335,x:276.3,y:336.5}).wait(1).to({graphics:mask_graphics_336,x:277,y:336.6}).wait(1).to({graphics:mask_graphics_337,x:277.6,y:336.6}).wait(1).to({graphics:mask_graphics_338,x:278.1,y:336.6}).wait(1).to({graphics:mask_graphics_339,x:278.4,y:336.6}).wait(1).to({graphics:mask_graphics_340,x:278.6,y:336.6}).wait(1).to({graphics:mask_graphics_341,x:278.6,y:336.6}).wait(1).to({graphics:mask_graphics_342,x:276.9,y:331.7}).wait(93).to({graphics:mask_graphics_435,x:276.6,y:329.8}).wait(1).to({graphics:mask_graphics_436,x:284,y:330.6}).wait(1).to({graphics:mask_graphics_437,x:290.6,y:331.4}).wait(1).to({graphics:mask_graphics_438,x:296.9,y:332.3}).wait(1).to({graphics:mask_graphics_439,x:303.1,y:333.1}).wait(1).to({graphics:mask_graphics_440,x:308.9,y:333.9}).wait(1).to({graphics:mask_graphics_441,x:314.5,y:334.8}).wait(1).to({graphics:mask_graphics_442,x:317.4,y:335.6}).wait(1).to({graphics:mask_graphics_443,x:316.8,y:336.4}).wait(1).to({graphics:mask_graphics_444,x:316.2,y:336.6}).wait(1).to({graphics:mask_graphics_445,x:315.6,y:336}).wait(1).to({graphics:mask_graphics_446,x:315,y:335.5}).wait(1).to({graphics:mask_graphics_447,x:314.4,y:334.9}).wait(1).to({graphics:mask_graphics_448,x:313.8,y:334.3}).wait(1).to({graphics:mask_graphics_449,x:313.2,y:333.6}).wait(1).to({graphics:mask_graphics_450,x:312.6,y:332.9}).wait(1).to({graphics:mask_graphics_451,x:313.8,y:332.7}).wait(5));

	// Logo right copy 2
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(391.2,206.3,1,1,0,0,0,328.9,328.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(306).to({_off:false},0).wait(1).to({regX:329.3,regY:329.3,x:391.6,y:206.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:391.2,y:206.3},0).wait(142).to({regX:329.3,regY:329.3,x:391.6,y:206.9,alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

	// Logo left copy 2
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(135,206.3,1,1,0,0,180,328.9,328.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(306).to({_off:false},0).wait(1).to({regX:329.3,regY:329.3,x:134.6,y:206.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:135,y:206.3},0).wait(142).to({regX:329.3,regY:329.3,x:134.6,y:206.9,alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Scene2_Top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dot
	this.instance = new lib.Dot();
	this.instance.parent = this;
	this.instance.setTransform(-83.8,133.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).wait(5).to({x:-31,y:167.5},0).wait(1).to({x:13.6,y:187.2},0).wait(1).to({x:52.5,y:198.3},0).wait(1).to({x:81.9,y:203.2},0).wait(1).to({x:105.8,y:205},0).wait(1).to({x:125.8,y:205.2},0).wait(1).to({x:142.9,y:204.3},0).wait(1).to({x:157.6,y:202.8},0).wait(1).to({x:170.4,y:200.9},0).wait(1).to({x:181.6,y:198.9},0).wait(1).to({x:191.4,y:196.8},0).wait(1).to({x:199.9,y:194.7},0).wait(1).to({x:207.7,y:192.6},0).wait(1).to({x:214.3,y:190.6},0).wait(1).to({x:220.3,y:188.7},0).wait(1).to({x:225.2,y:187},0).wait(1).to({x:230.2,y:185.3},0).wait(1).to({x:233.9,y:183.9},0).wait(1).to({x:237.1,y:182.7},0).wait(1).to({x:240.7,y:181.2},0).wait(1).to({x:243.2,y:180.2},0).wait(1).to({x:244.9,y:179.5},0).wait(1).to({x:246.2,y:179},0).wait(1).to({x:247,y:178.6},0).wait(1).to({x:247.5,y:178.4},0).wait(1).to({x:247.8,y:178.3},0).wait(1).to({x:247.9,y:178.2},0).wait(100).to({x:249.5,y:177.5},0).wait(1).to({x:255.9,y:174.6},0).wait(1).to({x:267.4,y:168.8},0).wait(1).to({x:283.1,y:160},0).wait(1).to({x:304.1,y:146.7},0).wait(1).to({x:328,y:128.8},0).to({_off:true},1).wait(2));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_167 = new cjs.Graphics().p("Eg2iANnMAo9hEKMBEIAo9Mgo9BEKg");
	var mask_graphics_171 = new cjs.Graphics().p("Eg2iANnMAo9hEKMBEIAo9Mgo9BEKg");
	var mask_graphics_172 = new cjs.Graphics().p("Eg1XARsMAjshHDMBHDAjsMgjsBHDg");
	var mask_graphics_173 = new cjs.Graphics().p("Egz8AVgMAedhJcMBJcAedMgedBJcg");
	var mask_graphics_174 = new cjs.Graphics().p("EgyVAZCMAZUhLXMBLXAZUMgZUBLXg");
	var mask_graphics_175 = new cjs.Graphics().p("EgwlAcSMAUUhM3MBM3AUUMgUUBM3g");
	var mask_graphics_176 = new cjs.Graphics().p("EguuAfQMAPfhN/MBN+APgMgPfBN/g");
	var mask_graphics_177 = new cjs.Graphics().p("Egs0Ah9MAK5hOxMBOwAK4MgK5BOxg");
	var mask_graphics_178 = new cjs.Graphics().p("Egq3AkYMAGghPPMBPPAGgMgGgBPPg");
	var mask_graphics_179 = new cjs.Graphics().p("Ego5AmkMACWhPeMBPdACXMgCWBPeg");
	var mask_graphics_180 = new cjs.Graphics().p("Egoggm+MBPfgBiMABiBPfMhPfABig");
	var mask_graphics_181 = new cjs.Graphics().p("EgqPglGMBPWgFJMAFJBPWMhPWAFJg");
	var mask_graphics_182 = new cjs.Graphics().p("EgrwgjSMBPDgIeMAIeBPDMhPDAIeg");
	var mask_graphics_183 = new cjs.Graphics().p("EgtFghkMBOqgLiMALhBOrMhOqALig");
	var mask_graphics_184 = new cjs.Graphics().p("EguPgf9MBOMgOTMAOTBOOMhOMAOTg");
	var mask_graphics_185 = new cjs.Graphics().p("EgvPgedMBNtgQyMAQyBNtMhNtAQyg");
	var mask_graphics_186 = new cjs.Graphics().p("EgwGgdGMBNMgTAMATBBNNMhNMATAg");
	var mask_graphics_187 = new cjs.Graphics().p("Egw0gb3MBMsgU9MAU9BMsMhMsAU9g");
	var mask_graphics_188 = new cjs.Graphics().p("EgxagazMBMNgWnMAWoBMOMhMNAWng");
	var mask_graphics_189 = new cjs.Graphics().p("Egx5gZ4MBLxgYCMAYCBLzMhLxAYCg");
	var mask_graphics_190 = new cjs.Graphics().p("EgySgZHMBLagZLMAZLBLaMhLaAZLg");
	var mask_graphics_191 = new cjs.Graphics().p("EgylgYhMBLHgaEMAaEBLHMhLHAaEg");
	var mask_graphics_192 = new cjs.Graphics().p("EgyygYGMBK5gasMAasBK5MhK5Aasg");
	var mask_graphics_193 = new cjs.Graphics().p("Egy6gX1MBKwgbFMAbFBKwMhKwAbFg");
	var mask_graphics_194 = new cjs.Graphics().p("Egy8gXwMBKtgbMMAbMBKtMhKtAbMg");
	var mask_graphics_195 = new cjs.Graphics().p("EgyzgX6MBKtga6MAa6BKvMhKtAa6g");
	var mask_graphics_299 = new cjs.Graphics().p("EgyhgYpMBLKgZ4MAZ5BLLMhLKAZ4g");
	var mask_graphics_300 = new cjs.Graphics().p("Eg0WgUeMBI0gf4MAf5BI1MhI0Af4g");
	var mask_graphics_301 = new cjs.Graphics().p("Eg11gQKMBGAglsMAlrBGBMhGAAlsg");
	var mask_graphics_302 = new cjs.Graphics().p("Eg2+gLvMBCugrPMArPBCuMhCuArPg");
	var mask_graphics_303 = new cjs.Graphics().p("Eg3vgHQMA/AgwfMAwfA/AMg/AAwfg");
	var mask_graphics_304 = new cjs.Graphics().p("Eg4JgCuMA63g1bMA1cA64Mg63A1bg");
	var mask_graphics_305 = new cjs.Graphics().p("Eg4JgCuMA63g1bMA1cA64Mg63A1bg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(167).to({graphics:mask_graphics_167,x:-198,y:-26.1}).wait(4).to({graphics:mask_graphics_171,x:-197.8,y:-25.9}).wait(1).to({graphics:mask_graphics_172,x:-190,y:-0.8}).wait(1).to({graphics:mask_graphics_173,x:-180.7,y:22.5}).wait(1).to({graphics:mask_graphics_174,x:-170.4,y:44.1}).wait(1).to({graphics:mask_graphics_175,x:-159.1,y:63.9}).wait(1).to({graphics:mask_graphics_176,x:-147.3,y:82}).wait(1).to({graphics:mask_graphics_177,x:-135.1,y:98.4}).wait(1).to({graphics:mask_graphics_178,x:-122.8,y:113.2}).wait(1).to({graphics:mask_graphics_179,x:-110.4,y:126.4}).wait(1).to({graphics:mask_graphics_180,x:-98.3,y:138.2}).wait(1).to({graphics:mask_graphics_181,x:-86.4,y:148.6}).wait(1).to({graphics:mask_graphics_182,x:-75.1,y:157.8}).wait(1).to({graphics:mask_graphics_183,x:-64.3,y:165.8}).wait(1).to({graphics:mask_graphics_184,x:-54.2,y:172.7}).wait(1).to({graphics:mask_graphics_185,x:-44.8,y:178.7}).wait(1).to({graphics:mask_graphics_186,x:-36.3,y:183.8}).wait(1).to({graphics:mask_graphics_187,x:-28.7,y:188.1}).wait(1).to({graphics:mask_graphics_188,x:-21.9,y:191.6}).wait(1).to({graphics:mask_graphics_189,x:-16.2,y:194.5}).wait(1).to({graphics:mask_graphics_190,x:-11.5,y:196.8}).wait(1).to({graphics:mask_graphics_191,x:-7.8,y:198.5}).wait(1).to({graphics:mask_graphics_192,x:-5.1,y:199.7}).wait(1).to({graphics:mask_graphics_193,x:-3.5,y:200.4}).wait(1).to({graphics:mask_graphics_194,x:-3,y:200.7}).wait(1).to({graphics:mask_graphics_195,x:2.3,y:207.5}).wait(104).to({graphics:mask_graphics_299,x:-10.7,y:199.8}).wait(1).to({graphics:mask_graphics_300,x:15.4,y:210.8}).wait(1).to({graphics:mask_graphics_301,x:42.3,y:219.6}).wait(1).to({graphics:mask_graphics_302,x:69.9,y:226.1}).wait(1).to({graphics:mask_graphics_303,x:97.9,y:230.5}).wait(1).to({graphics:mask_graphics_304,x:126.1,y:232.5}).wait(1).to({graphics:mask_graphics_305,x:126.1,y:232.5}).wait(1));

	// Logo left copy
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119.3,-114.4,1,1,0,0,180,328.9,328.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(167).to({_off:false},0).wait(1).to({regX:329.3,regY:329.3,x:118.9,y:-113.8,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:119.3,y:-114.4},0).wait(132).to({regX:329.3,regY:329.3,x:118.9,y:-113.8,alpha:0.5},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Scene1_Top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dot
	this.instance = new lib.Dot();
	this.instance.parent = this;
	this.instance.setTransform(243.2,64.6,0.3,0.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.65,scaleY:0.65,alpha:0.5},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(24).to({x:235,y:64.3},0).wait(1).to({x:225.5,y:64.4},0).wait(1).to({x:214.5,y:65},0).wait(1).to({x:201.7,y:66.2},0).wait(1).to({x:187.4,y:68.1},0).wait(1).to({x:171.6,y:71.1},0).wait(1).to({x:155.1,y:75},0).wait(1).to({x:138.8,y:79.8},0).wait(1).to({x:123.7,y:85.2},0).wait(1).to({x:110.2,y:90.6},0).wait(1).to({x:98.6,y:96},0).wait(1).to({x:88.7,y:101},0).wait(1).to({x:80.3,y:105.5},0).wait(1).to({x:73.3,y:109.7},0).wait(1).to({x:67.3,y:113.3},0).wait(1).to({x:62.3,y:116.6},0).wait(1).to({x:58,y:119.5},0).wait(1).to({x:54.5,y:122},0).wait(1).to({x:51.4,y:124.2},0).wait(1).to({x:48.9,y:126},0).wait(1).to({x:46.7,y:127.7},0).wait(1).to({x:45,y:129},0).wait(1).to({x:43.6,y:130.1},0).wait(1).to({x:42.4,y:131},0).wait(1).to({x:41.5,y:131.7},0).wait(1).to({x:40.8,y:132.3},0).wait(1).to({x:40.3,y:132.6},0).wait(1).to({x:40,y:132.9},0).wait(1).to({x:39.9,y:133},0).wait(1).to({x:40},0).wait(99).to({x:32.6,y:140.8},0).wait(1).to({x:21.6,y:152.4},0).wait(1).to({x:8.6,y:166.2},0).wait(1).to({x:-1.8,y:177.1},0).wait(1).to({x:-8.7,y:184.4},0).wait(1).to({x:-13.1,y:189},0).wait(1).to({x:-15.8,y:191.9},0).wait(1).to({x:-17.5,y:193.6},0).wait(1).to({x:-18.3,y:194.6},0).wait(1).to({x:-18.6,y:194.8},0).wait(1).to({x:-21.8,y:202.5},0).wait(1).to({x:-137.7,y:216.5},0).wait(2));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("AFKvtIPklZMAMvAk0IvkFZg");
	var mask_graphics_19 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_20 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_21 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_22 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_23 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_24 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_25 = new cjs.Graphics().p("AC5vtIPklZMAMuAk0IvkFZg");
	var mask_graphics_26 = new cjs.Graphics().p("AAvvUIRwmLMAM1Ak0IxvGLg");
	var mask_graphics_27 = new cjs.Graphics().p("AhUu7IT6m8MAM1AkzIz7G8g");
	var mask_graphics_28 = new cjs.Graphics().p("AjYujIWFntMAM1Ak0I2GHtg");
	var mask_graphics_29 = new cjs.Graphics().p("AlcuLIYQodMAM0Ak0I4QIdg");
	var mask_graphics_30 = new cjs.Graphics().p("AngtyIaapOMAM1AkzI6cJOg");
	var mask_graphics_31 = new cjs.Graphics().p("ApltaIcmp+MAM1AkzI8nJ+g");
	var mask_graphics_32 = new cjs.Graphics().p("ArptCIexquMAM1AkzI+yKug");
	var mask_graphics_33 = new cjs.Graphics().p("AttspMAg8gLfMAM1AkyMgg9ALfg");
	var mask_graphics_34 = new cjs.Graphics().p("AvxsRMAjHgMPMAM1AkyMgjIAMPg");
	var mask_graphics_35 = new cjs.Graphics().p("Ax1r4MAlSgNAMAM0AkxMglSANAg");
	var mask_graphics_36 = new cjs.Graphics().p("Az6rgMAnegNwMAM0AkxMgndANwg");
	var mask_graphics_37 = new cjs.Graphics().p("A1+rIMAppgOgMAM0AkxMgppAOgg");
	var mask_graphics_38 = new cjs.Graphics().p("A4CqvMAr0gPRMAM0AkwMgr0APRg");
	var mask_graphics_39 = new cjs.Graphics().p("A6GqXMAt/gQCMAM0AkxMgt/AQCg");
	var mask_graphics_40 = new cjs.Graphics().p("A8Kp/MAwKgQyMAM0AkxMgwLAQyg");
	var mask_graphics_41 = new cjs.Graphics().p("A+PpmMAyWgRjMAMzAkwMgyVARjg");
	var mask_graphics_42 = new cjs.Graphics().p("A+VplMAycgRlMAMzAkwMgybARlg");
	var mask_graphics_43 = new cjs.Graphics().p("A+bpkMAyigRnMAMzAkwMgyiARng");
	var mask_graphics_44 = new cjs.Graphics().p("A+hpjMAyogRpMAMzAkwMgyoARpg");
	var mask_graphics_45 = new cjs.Graphics().p("A+ophMAyvgRsMAMzAkvMgyuARsg");
	var mask_graphics_46 = new cjs.Graphics().p("A+upgMAy1gRuMAMzAkvMgy0ARug");
	var mask_graphics_47 = new cjs.Graphics().p("A+0pfMAy7gRwMAMzAkvMgy7ARwg");
	var mask_graphics_48 = new cjs.Graphics().p("A+6peMAzBgRyMAMzAkvMgzBARyg");
	var mask_graphics_49 = new cjs.Graphics().p("A/BpdMAzIgR0MAMzAkvMgzHAR0g");
	var mask_graphics_50 = new cjs.Graphics().p("A/HpbMAzOgR3MAMzAkuMgzOAR3g");
	var mask_graphics_51 = new cjs.Graphics().p("A/NpaMAzUgR5MAMzAkuMgzUAR5g");
	var mask_graphics_52 = new cjs.Graphics().p("A/TpZMAzagR7MAMzAkuMgzaAR7g");
	var mask_graphics_53 = new cjs.Graphics().p("A/apYMAzhgR9MAMzAkuMgzhAR9g");
	var mask_graphics_54 = new cjs.Graphics().p("A/gpXMAzngR/MAMzAkuMgznAR/g");
	var mask_graphics_55 = new cjs.Graphics().p("A//pRMA0wgSPMAMuAkyMg0wASPg");
	var mask_graphics_154 = new cjs.Graphics().p("EggAgJRMA0xgSPMAMuAkyMg0xASPg");
	var mask_graphics_155 = new cjs.Graphics().p("EgiCgIuMA3SgTSMAMzAkvMg3SATSg");
	var mask_graphics_156 = new cjs.Graphics().p("EgjTgIRMA50gUJMAMzAksMg50AUJg");
	var mask_graphics_157 = new cjs.Graphics().p("EgkjgHzMA8WgVCMAMxAkpMg8WAVCg");
	var mask_graphics_158 = new cjs.Graphics().p("EglzgHWMA+3gV6MAMwAknMg+3AV6g");
	var mask_graphics_159 = new cjs.Graphics().p("EgnEgG4MBBZgWyMAMwAkjMhBZAWyg");
	var mask_graphics_160 = new cjs.Graphics().p("EgmggHKMBAXgWQMAMqAklMhAXAWQg");
	var mask_graphics_161 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");
	var mask_graphics_162 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");
	var mask_graphics_163 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");
	var mask_graphics_164 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");
	var mask_graphics_165 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");
	var mask_graphics_166 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:214.1,y:45.5}).wait(1).to({graphics:mask_graphics_19,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_20,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_21,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_22,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_23,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_24,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_25,x:199.5,y:49.9}).wait(1).to({graphics:mask_graphics_26,x:200.4,y:52.1}).wait(1).to({graphics:mask_graphics_27,x:201.1,y:54.3}).wait(1).to({graphics:mask_graphics_28,x:201.8,y:56.6}).wait(1).to({graphics:mask_graphics_29,x:202.4,y:58.8}).wait(1).to({graphics:mask_graphics_30,x:203.1,y:61}).wait(1).to({graphics:mask_graphics_31,x:203.8,y:63.2}).wait(1).to({graphics:mask_graphics_32,x:204.5,y:65.4}).wait(1).to({graphics:mask_graphics_33,x:205.2,y:67.6}).wait(1).to({graphics:mask_graphics_34,x:205.9,y:69.8}).wait(1).to({graphics:mask_graphics_35,x:206.5,y:72}).wait(1).to({graphics:mask_graphics_36,x:207.2,y:74.2}).wait(1).to({graphics:mask_graphics_37,x:207.9,y:76.4}).wait(1).to({graphics:mask_graphics_38,x:208.6,y:78.6}).wait(1).to({graphics:mask_graphics_39,x:209.3,y:80.8}).wait(1).to({graphics:mask_graphics_40,x:210,y:83}).wait(1).to({graphics:mask_graphics_41,x:210.6,y:85.2}).wait(1).to({graphics:mask_graphics_42,x:210.6,y:85.4}).wait(1).to({graphics:mask_graphics_43,x:210.6,y:85.5}).wait(1).to({graphics:mask_graphics_44,x:210.6,y:85.6}).wait(1).to({graphics:mask_graphics_45,x:210.6,y:85.7}).wait(1).to({graphics:mask_graphics_46,x:210.6,y:85.8}).wait(1).to({graphics:mask_graphics_47,x:210.6,y:85.9}).wait(1).to({graphics:mask_graphics_48,x:210.6,y:86}).wait(1).to({graphics:mask_graphics_49,x:210.6,y:86.1}).wait(1).to({graphics:mask_graphics_50,x:210.6,y:86.2}).wait(1).to({graphics:mask_graphics_51,x:210.6,y:86.3}).wait(1).to({graphics:mask_graphics_52,x:210.6,y:86.4}).wait(1).to({graphics:mask_graphics_53,x:210.6,y:86.6}).wait(1).to({graphics:mask_graphics_54,x:210.6,y:86.7}).wait(1).to({graphics:mask_graphics_55,x:214.3,y:86.5}).wait(99).to({graphics:mask_graphics_154,x:214.3,y:86.6}).wait(1).to({graphics:mask_graphics_155,x:210.9,y:89.5}).wait(1).to({graphics:mask_graphics_156,x:202.9,y:92.4}).wait(1).to({graphics:mask_graphics_157,x:194.9,y:95.3}).wait(1).to({graphics:mask_graphics_158,x:186.8,y:98.2}).wait(1).to({graphics:mask_graphics_159,x:178.8,y:101.1}).wait(1).to({graphics:mask_graphics_160,x:184.7,y:99}).wait(1).to({graphics:mask_graphics_161,x:184.7,y:99}).wait(1).to({graphics:mask_graphics_162,x:184.7,y:99}).wait(1).to({graphics:mask_graphics_163,x:184.7,y:99}).wait(1).to({graphics:mask_graphics_164,x:184.7,y:99}).wait(1).to({graphics:mask_graphics_165,x:184.7,y:99}).wait(1).to({graphics:mask_graphics_166,x:184.7,y:99}).wait(1));

	// Logo left
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(239.3,383,1,1,0,0,180,328.9,328.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(1).to({regX:329.3,regY:329.3,x:238.9,y:383.6,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:239.3,y:383},0).wait(139).to({regX:329.3,regY:329.3,x:238.9,y:383.6,alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(228.9,50.4,28.5,28.5);


// stage content:
(lib.CAMC_Journey_Image_160x600 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopCount = 1;
		
		var root = this, //set scope activation object
			screenPixelRatio = window.devicePixelRatio, //detects devicePixelRatio, use returned value for any code referencing mouse position
		    stageWidth = stage.canvas.width/screenPixelRatio, //returns expected value for width of stage
		    stageHeight = stage.canvas.height/screenPixelRatio; //returns expected value for height of stage
		
		var locationImage = new createjs.Bitmap(data.locationImage);
		var locationImage2 = new createjs.Bitmap(data.locationImage);
		
		root.TextStart_Container.TextStart.text = data.text1;
		root.Text2_Container.Text2.text = data.text2;
		root.Text3_Container.Text3.text = data.text3;
		
		root.locationTitleContainer.locationTitleText.text = data.locationTitle;
		root.locationSubTitleContainer.locationSubTitleText.text = data.locationSubTitle;
		root.IMG_container.addChild(locationImage);
		root.IMG_container2.addChild(locationImage2);
		
		root.TextEnd_Container.TextEnd.text = data.text4;
		root.cta_container.cta_text.text = data.text5;
		root.cta_container.cta_text.font = "13px 'FS Elliot Bold'";
	}
	this.frame_899 = function() {
		console.log(this.loopCount);
		
		if (this.loopCount < 1) {
			this.loopCount++;
			this.gotoAndPlay(2);
		} else {
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(899).call(this.frame_899).wait(1));

	// Logo
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(78,45.8,1.35,1.348,0,0,0,20.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(472).to({regX:20.5,regY:15,scaleY:1.35,y:44.5},0).wait(1).to({regX:20.4,regY:19.6,x:77.9,y:50.6,alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(422));

	// CTA
	this.cta_container = new lib.button_end();
	this.cta_container.parent = this;
	this.cta_container.setTransform(150,225,1,1,0,0,0,53.5,20);
	this.cta_container.alpha = 0;
	this.cta_container._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta_container).wait(541).to({_off:false},0).to({y:216.5,alpha:0.859},6).to({y:215,alpha:1},1).wait(352));

	// TextEnd
	this.TextEnd_Container = new lib.Textend();
	this.TextEnd_Container.parent = this;
	this.TextEnd_Container.setTransform(151,236,1,1,0,0,0,150,29);
	this.TextEnd_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.TextEnd_Container).wait(1).to({regX:81.3,regY:282.7,x:82.3,y:489.7},0).wait(529).to({regX:150,regY:29,x:151,y:236},0).wait(1).to({regX:81.3,regY:282.7,x:82.3,y:488.4,alpha:0.111},0).wait(1).to({y:486.6,alpha:0.222},0).wait(1).to({y:484.5,alpha:0.333},0).wait(1).to({y:482.8,alpha:0.444},0).wait(1).to({y:481.5,alpha:0.556},0).wait(1).to({y:480.6,alpha:0.667},0).wait(1).to({y:480.1,alpha:0.778},0).wait(1).to({y:479.8,alpha:0.889},0).wait(1).to({y:479.7,alpha:1},0).wait(1).to({regX:150,regY:29,x:151,y:226},0).wait(360));

	// Logo_morph
	this.instance_1 = new lib.Morphinglogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.3,423.6,1,1,0,0,0,-1.3,423.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(431).to({_off:false},0).wait(25).to({x:14.7,y:471.6},0).wait(13).to({x:-85.3,y:603.6},0).to({alpha:1},4).to({regX:0,regY:422.4,scaleX:0.05,scaleY:0.05,x:81.3,y:361.4},17).wait(410));

	// EndFrame_Grad
	this.instance_2 = new lib.EndFrame_Grad();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.5,384.5,0.643,0.704,0,0,0,150,125);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(512).to({_off:false},0).to({regX:150.2,scaleX:0.65,x:81.1,alpha:0.801},15,cjs.Ease.get(1)).wait(373));

	// BG_end
	this.IMG_container2 = new lib.IMG();
	this.IMG_container2.parent = this;
	this.IMG_container2.setTransform(150,125,1,1,0,0,0,150,125);
	this.IMG_container2.alpha = 0;
	this.IMG_container2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.IMG_container2).wait(512).to({_off:false},0).to({alpha:1},15).wait(373));

	// Scene4_Top
	this.instance_3 = new lib.Scene4_Top("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(173.6,544,1,1,0,0,0,257.6,364);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},473).wait(427));

	// BG_grad
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.1,-300.1,-0.1,299.8).s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(465).to({_off:false},0).to({_off:true},93).wait(342));

	// Scene4_Bottom
	this.instance_4 = new lib.Scene4_Bottom("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(43.2,603.7,1,1,0,0,0,127.2,423.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},473).wait(427));

	// Img mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_339 = new cjs.Graphics().p("ABQdFQg4g4AAhPQAAhQA4g4QA4g3BPAAQA0AAArAZQAWAMASASQA4A4AABQQAABPg4A4QgSASgWAOQgrAYg0AAQhPAAg4g4g");
	var mask_graphics_340 = new cjs.Graphics().p("AobejQjgjgAAk8QAAk+DgjgQDgjeE7AAQDSAACqBiQBWAyBKBKQDgDgAAE+QAAE8jgDgQhKBKhWA0QiqBijSAAQk7AAjgjgg");
	var mask_graphics_341 = new cjs.Graphics().p("EgOwAgAQmImIAAopQAAosGImIQGImEIoAAQFvAAEqCsQCWBWCCCCQGIGIAAIsQAAIpmIGIQiCCCiWBbQkqCrlvAAQooAAmImIg");
	var mask_graphics_342 = new cjs.Graphics().p("EgVFAheQowowAAsWQAAsaIwowQIworMVAAQINAAGpD1QDXB9C5C5QIwIwAAMaQAAMWowIwQi5C5jXCCQmpD1oNAAQsVAAowowg");
	var mask_graphics_343 = new cjs.Graphics().p("EgbaAi8QrYrYAAwDQAAwJLYrYQLYrRQCAAQKqAAIpE+QEXCjDxDwQLYLYAAQJQAAQDrYLYQjxDwkXCpQopE/qqAAQwCAArYrYg");
	var mask_graphics_344 = new cjs.Graphics().p("EghvAkZQuAuAAAzwQAAz3OAt/QOAt4TvAAQNIAAKoGIQFYDIEoEoQOAN/AAT3QAATwuAOAQkoEolYDQQqoGItIAAQzvAAuAuAg");
	var mask_graphics_345 = new cjs.Graphics().p("EgoEAoFQwowoAA3dQAA3lQowoQQowfXcAAQPlAAMoHSQGYDtFgFgQQoQoAAXlQAAXdwoQoQlgFfmYD3QsoHSvlAAQ3cAAwowog");
	var mask_graphics_346 = new cjs.Graphics().p("EguZAuaQzQzQAA7KQAA7UTQzQQTQzFbJAAQSDAAOnIbQHZETGXGXQTQTQAAbUQAAbKzQTQQmXGXnZEeQunIbyDAAQ7JAAzQzQg");
	var mask_graphics_347 = new cjs.Graphics().p("Eg0uA0vQ1414AA+3QAA/CV414QV41se2AAQUgAAQnJlQIZE4HPHPQV4V4AAfCQAAe314V4QnPHOoZFFQwnJl0gAAQ+2AA1414g");
	var mask_graphics_424 = new cjs.Graphics().p("Eg0uA0vQ1414AA+3QAA/DV414QV41re2AAQUhAAQmJkQIaE5HOHOQV4V4AAfDQAAe314V4QnOHPoaFFQwmJk0hAAQ+2AA1414g");
	var mask_graphics_425 = new cjs.Graphics().p("EgtfAtgQy4y4AA6oQAA6yS4y4QS4ytanAAQRtAAOUIQQHQEOGPGPQS4S4AAayQAAaoy4S4QmPGPnQEZQuUIQxtAAQ6nAAy4y4g");
	var mask_graphics_426 = new cjs.Graphics().p("EgmQAmRQv4v4AA2ZQAA2hP4v4QP4vvWYAAQO5AAMDG8QGGDjFPFQQP4P4AAWhQAAWZv4P4QlPFQmGDsQsDG8u5AAQ2YAAv4v4g");
	var mask_graphics_427 = new cjs.Graphics().p("EgfBAjuQs4s4AAyLQAAyQM4s4QM4sxSJAAQMEAAJyFoQE8C4EQERQM4M4AASQQAASLs4M4QkQEQk8C/QpyFpsEAAQyJAAs4s4g");
	var mask_graphics_428 = new cjs.Graphics().p("EgXzAiEQp4p4AAt8QAAuAJ4p4QJ4pyN7AAQJRAAHfEUQDzCNDRDRQJ4J4AAOAQAAN8p4J4QjRDQjzCTQnfEVpRAAQt7AAp4p4g");
	var mask_graphics_429 = new cjs.Graphics().p("EgQkAgaQm4m4AAptQAApxG4m3QG4m0JsAAQGcAAFODBQCpBiCSCRQG4G3AAJxQAAJtm4G4QiSCRipBmQlODBmcAAQpsAAm4m4g");
	var mask_graphics_430 = new cjs.Graphics().p("ApVevQj4j4AAldQAAlhD4j4QD4j1FdAAQDoAAC9BsQBfA4BSBRQD4D4AAFhQAAFdj4D4QhSBShfA6Qi9BsjoAAQldAAj4j4g");
	var mask_graphics_431 = new cjs.Graphics().p("ABQdFQg4g4AAhPQAAhPA4g4QA4g4BPAAQA1AAAqAZQAWAMASATQA4A4AABPQAABPg4A4QgSASgWANQgqAZg1AAQhPAAg4g4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(339).to({graphics:mask_graphics_339,x:40.6,y:191.7}).wait(1).to({graphics:mask_graphics_340,x:43.6,y:217.9}).wait(1).to({graphics:mask_graphics_341,x:25,y:244}).wait(1).to({graphics:mask_graphics_342,x:6.5,y:270.2}).wait(1).to({graphics:mask_graphics_343,x:-12.1,y:296.4}).wait(1).to({graphics:mask_graphics_344,x:-30.6,y:322.5}).wait(1).to({graphics:mask_graphics_345,x:-49.2,y:334.5}).wait(1).to({graphics:mask_graphics_346,x:-67.7,y:329.6}).wait(1).to({graphics:mask_graphics_347,x:-86.3,y:323.4}).wait(77).to({graphics:mask_graphics_424,x:-86.3,y:323.4}).wait(1).to({graphics:mask_graphics_425,x:-65.1,y:329.2}).wait(1).to({graphics:mask_graphics_426,x:-43.9,y:335.1}).wait(1).to({graphics:mask_graphics_427,x:-22.7,y:311}).wait(1).to({graphics:mask_graphics_428,x:-1.5,y:281.2}).wait(1).to({graphics:mask_graphics_429,x:19.7,y:251.4}).wait(1).to({graphics:mask_graphics_430,x:40.9,y:221.5}).wait(1).to({graphics:mask_graphics_431,x:40.6,y:191.7}).wait(469));

	// txt_region
	this.locationSubTitleContainer = new lib.txt_region();
	this.locationSubTitleContainer.parent = this;
	this.locationSubTitleContainer.setTransform(137,607.6,1,1,0,0,0,126,25.5);
	this.locationSubTitleContainer.alpha = 0;

	var maskedShapeInstanceList = [this.locationSubTitleContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.locationSubTitleContainer).wait(354).to({y:587.6,alpha:1},5).wait(65).to({y:567.6,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(468));

	// txt_location
	this.locationTitleContainer = new lib.txt_location();
	this.locationTitleContainer.parent = this;
	this.locationTitleContainer.setTransform(137,582.6,1,1,0,0,0,126,25.5);
	this.locationTitleContainer.alpha = 0;

	var maskedShapeInstanceList = [this.locationTitleContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.locationTitleContainer).wait(353).to({y:562.6,alpha:1},5).wait(66).to({y:542.6,alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(468));

	// grad_location
	this.instance_5 = new lib.Grad_mc();
	this.instance_5.parent = this;
	this.instance_5.setTransform(151,475,1,1,0,0,0,150,125);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(348).to({_off:false},0).to({regX:150.1,scaleX:0.53,x:81,alpha:0.699},5,cjs.Ease.get(1)).wait(71).to({regX:150,scaleX:1,x:151},0).wait(1).to({alpha:0},6,cjs.Ease.get(1)).to({_off:true},1).wait(468));

	// img
	this.IMG_container = new lib.IMG();
	this.IMG_container.parent = this;
	this.IMG_container.setTransform(150,125,1,1,0,0,0,150,125);
	this.IMG_container.alpha = 0;

	var maskedShapeInstanceList = [this.IMG_container];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.IMG_container).wait(339).to({alpha:1},8).wait(77).to({alpha:0},7).to({_off:true},1).wait(468));

	// Dot
	this.instance_6 = new lib.img_Mask();
	this.instance_6.parent = this;
	this.instance_6.setTransform(81.2,383.4,1,1,0,0,0,19.1,19.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(339).to({_off:false},0).to({regY:19.2,scaleX:25,scaleY:25,x:391.2,y:803.4},8).wait(77).to({regY:19.1,y:800.9},0).to({regX:19.2,regY:19.2,scaleX:1,scaleY:1,x:81.3,y:383.5},7).to({_off:true},1).wait(468));

	// Scene3_Top
	this.instance_7 = new lib.Scene3_Top("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(276.4,630.2,1,1,0,0,0,321.4,330.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:254.4,regY:206.8,x:209.4,y:506.9,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({startPosition:204},0).wait(1).to({startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({startPosition:289},0).wait(1).to({startPosition:290},0).wait(1).to({startPosition:291},0).wait(1).to({startPosition:292},0).wait(1).to({startPosition:293},0).wait(1).to({startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:306},0).wait(1).to({startPosition:307},0).wait(1).to({startPosition:308},0).wait(1).to({startPosition:309},0).wait(1).to({startPosition:310},0).wait(1).to({startPosition:311},0).wait(1).to({startPosition:312},0).wait(1).to({startPosition:313},0).wait(1).to({startPosition:314},0).wait(1).to({startPosition:315},0).wait(1).to({startPosition:316},0).wait(1).to({startPosition:317},0).wait(1).to({startPosition:318},0).wait(1).to({startPosition:319},0).wait(1).to({startPosition:320},0).wait(1).to({startPosition:321},0).wait(1).to({startPosition:322},0).wait(1).to({startPosition:323},0).wait(1).to({startPosition:324},0).wait(1).to({startPosition:325},0).wait(1).to({startPosition:326},0).wait(1).to({startPosition:327},0).wait(1).to({startPosition:328},0).wait(1).to({startPosition:329},0).wait(1).to({startPosition:330},0).wait(1).to({startPosition:331},0).wait(1).to({startPosition:332},0).wait(1).to({startPosition:333},0).wait(1).to({startPosition:334},0).wait(1).to({startPosition:335},0).wait(1).to({startPosition:336},0).wait(1).to({startPosition:337},0).wait(1).to({startPosition:338},0).wait(1).to({startPosition:339},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:451.4,y:752.3,startPosition:340},0).wait(1).to({scaleX:4.45,scaleY:4.45,x:693.4,y:997.7,startPosition:341},0).wait(1).to({scaleX:6.18,scaleY:6.18,x:935.4,y:1243.2,startPosition:342},0).wait(1).to({scaleX:7.9,scaleY:7.9,x:1177.4,y:1488.6,startPosition:343},0).wait(1).to({scaleX:9.63,scaleY:9.63,x:1419.4,y:1734.1,startPosition:344},0).wait(1).to({scaleX:11.35,scaleY:11.35,x:1661.3,y:1979.6,startPosition:345},0).wait(1).to({startPosition:346},0).wait(1).to({startPosition:347},0).wait(1).to({startPosition:348},0).wait(1).to({startPosition:349},0).wait(1).to({startPosition:350},0).wait(1).to({startPosition:351},0).wait(1).to({startPosition:352},0).wait(1).to({startPosition:353},0).wait(1).to({startPosition:354},0).wait(1).to({startPosition:355},0).wait(1).to({startPosition:356},0).wait(1).to({startPosition:357},0).wait(1).to({startPosition:358},0).wait(1).to({startPosition:359},0).wait(1).to({startPosition:360},0).wait(1).to({startPosition:361},0).wait(1).to({startPosition:362},0).wait(1).to({startPosition:363},0).wait(1).to({startPosition:364},0).wait(1).to({startPosition:365},0).wait(1).to({startPosition:366},0).wait(1).to({startPosition:367},0).wait(1).to({startPosition:368},0).wait(1).to({startPosition:369},0).wait(1).to({startPosition:370},0).wait(1).to({startPosition:371},0).wait(1).to({startPosition:372},0).wait(1).to({startPosition:373},0).wait(1).to({startPosition:374},0).wait(1).to({startPosition:375},0).wait(1).to({startPosition:376},0).wait(1).to({startPosition:377},0).wait(1).to({startPosition:378},0).wait(1).to({startPosition:379},0).wait(1).to({startPosition:380},0).wait(1).to({startPosition:381},0).wait(1).to({startPosition:382},0).wait(1).to({startPosition:383},0).wait(1).to({startPosition:384},0).wait(1).to({startPosition:385},0).wait(1).to({startPosition:386},0).wait(1).to({startPosition:387},0).wait(1).to({startPosition:388},0).wait(1).to({startPosition:389},0).wait(1).to({startPosition:390},0).wait(1).to({startPosition:391},0).wait(1).to({startPosition:392},0).wait(1).to({startPosition:393},0).wait(1).to({startPosition:394},0).wait(1).to({startPosition:395},0).wait(1).to({startPosition:396},0).wait(1).to({startPosition:397},0).wait(1).to({startPosition:398},0).wait(1).to({startPosition:399},0).wait(1).to({startPosition:400},0).wait(1).to({startPosition:401},0).wait(1).to({startPosition:402},0).wait(1).to({startPosition:403},0).wait(1).to({startPosition:404},0).wait(1).to({startPosition:405},0).wait(1).to({startPosition:406},0).wait(1).to({startPosition:407},0).wait(1).to({startPosition:408},0).wait(1).to({startPosition:409},0).wait(1).to({startPosition:410},0).wait(1).to({startPosition:411},0).wait(1).to({startPosition:412},0).wait(1).to({startPosition:413},0).wait(1).to({startPosition:414},0).wait(1).to({startPosition:415},0).wait(1).to({startPosition:416},0).wait(1).to({startPosition:417},0).wait(1).to({startPosition:418},0).wait(1).to({startPosition:419},0).wait(1).to({startPosition:420},0).wait(1).to({startPosition:421},0).wait(1).to({startPosition:422},0).wait(1).to({startPosition:423},0).wait(1).to({startPosition:424},0).wait(1).to({scaleX:9.63,scaleY:9.63,x:1419.4,y:1734.1,startPosition:425},0).wait(1).to({scaleX:7.9,scaleY:7.9,x:1177.4,y:1488.6,startPosition:426},0).wait(1).to({scaleX:6.18,scaleY:6.18,x:935.4,y:1243.2,startPosition:427},0).wait(1).to({scaleX:4.45,scaleY:4.45,x:693.4,y:997.7,startPosition:428},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:451.4,y:752.3,startPosition:429},0).wait(1).to({scaleX:1,scaleY:1,x:209.4,y:506.9,startPosition:430},0).wait(1).to({startPosition:431},0).wait(1).to({startPosition:432},0).wait(1).to({startPosition:433},0).wait(1).to({startPosition:434},0).wait(1).to({startPosition:435},0).wait(1).to({startPosition:436},0).wait(1).to({startPosition:437},0).wait(1).to({startPosition:438},0).wait(1).to({startPosition:439},0).wait(1).to({startPosition:440},0).wait(1).to({startPosition:441},0).wait(1).to({startPosition:442},0).wait(1).to({startPosition:443},0).wait(1).to({startPosition:444},0).wait(1).to({startPosition:445},0).wait(1).to({startPosition:446},0).wait(1).to({startPosition:447},0).wait(1).to({startPosition:448},0).wait(1).to({startPosition:449},0).wait(1).to({startPosition:450},0).wait(1).to({startPosition:451},0).wait(1).to({startPosition:452},0).wait(1).to({startPosition:453},0).wait(1).to({startPosition:454},0).wait(1).to({startPosition:455},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).to({_off:true},1).wait(435));

	// BG_grad
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.1,-300.1,-0.1,299.8).s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_1.setTransform(80,300);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(315).to({_off:false},0).to({_off:true},150).wait(435));

	// Scene3_bottom
	this.instance_8 = new lib.Scene3_Bottom("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(218.2,506.8,1,1,0,0,0,263.1,206.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:206.9,y:506.9,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({startPosition:204},0).wait(1).to({startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({startPosition:289},0).wait(1).to({startPosition:290},0).wait(1).to({startPosition:291},0).wait(1).to({startPosition:292},0).wait(1).to({startPosition:293},0).wait(1).to({startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:306},0).wait(1).to({startPosition:307},0).wait(1).to({startPosition:308},0).wait(1).to({startPosition:309},0).wait(1).to({startPosition:310},0).wait(1).to({startPosition:311},0).wait(1).to({startPosition:312},0).wait(1).to({startPosition:313},0).wait(1).to({startPosition:314},0).wait(1).to({startPosition:315},0).wait(1).to({startPosition:316},0).wait(1).to({startPosition:317},0).wait(1).to({startPosition:318},0).wait(1).to({startPosition:319},0).wait(1).to({startPosition:320},0).wait(1).to({startPosition:321},0).wait(1).to({startPosition:322},0).wait(1).to({startPosition:323},0).wait(1).to({startPosition:324},0).wait(1).to({startPosition:325},0).wait(1).to({startPosition:326},0).wait(1).to({startPosition:327},0).wait(1).to({startPosition:328},0).wait(1).to({startPosition:329},0).wait(1).to({startPosition:330},0).wait(1).to({startPosition:331},0).wait(1).to({startPosition:332},0).wait(1).to({startPosition:333},0).wait(1).to({startPosition:334},0).wait(1).to({startPosition:335},0).wait(1).to({startPosition:336},0).wait(1).to({startPosition:337},0).wait(1).to({startPosition:338},0).wait(1).to({startPosition:339},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:477.3,y:754.1,startPosition:340},0).wait(1).to({scaleX:4.45,scaleY:4.45,x:736.5,y:1001.4,startPosition:341},0).wait(1).to({scaleX:6.18,scaleY:6.18,x:995.7,y:1248.6,startPosition:342},0).wait(1).to({scaleX:7.9,scaleY:7.9,x:1254.8,y:1495.9,startPosition:343},0).wait(1).to({scaleX:9.63,scaleY:9.63,x:1513.9,y:1743.1,startPosition:344},0).wait(1).to({scaleX:11.35,scaleY:11.35,x:1773.1,y:1990.3,startPosition:345},0).wait(1).to({startPosition:346},0).wait(1).to({startPosition:347},0).wait(1).to({startPosition:348},0).wait(1).to({startPosition:349},0).wait(1).to({startPosition:350},0).wait(1).to({startPosition:351},0).wait(1).to({startPosition:352},0).wait(1).to({startPosition:353},0).wait(1).to({startPosition:354},0).wait(1).to({startPosition:355},0).wait(1).to({startPosition:356},0).wait(1).to({startPosition:357},0).wait(1).to({startPosition:358},0).wait(1).to({startPosition:359},0).wait(1).to({startPosition:360},0).wait(1).to({startPosition:361},0).wait(1).to({startPosition:362},0).wait(1).to({startPosition:363},0).wait(1).to({startPosition:364},0).wait(1).to({startPosition:365},0).wait(1).to({startPosition:366},0).wait(1).to({startPosition:367},0).wait(1).to({startPosition:368},0).wait(1).to({startPosition:369},0).wait(1).to({startPosition:370},0).wait(1).to({startPosition:371},0).wait(1).to({startPosition:372},0).wait(1).to({startPosition:373},0).wait(1).to({startPosition:374},0).wait(1).to({startPosition:375},0).wait(1).to({startPosition:376},0).wait(1).to({startPosition:377},0).wait(1).to({startPosition:378},0).wait(1).to({startPosition:379},0).wait(1).to({startPosition:380},0).wait(1).to({startPosition:381},0).wait(1).to({startPosition:382},0).wait(1).to({startPosition:383},0).wait(1).to({startPosition:384},0).wait(1).to({startPosition:385},0).wait(1).to({startPosition:386},0).wait(1).to({startPosition:387},0).wait(1).to({startPosition:388},0).wait(1).to({startPosition:389},0).wait(1).to({startPosition:390},0).wait(1).to({startPosition:391},0).wait(1).to({startPosition:392},0).wait(1).to({startPosition:393},0).wait(1).to({startPosition:394},0).wait(1).to({startPosition:395},0).wait(1).to({startPosition:396},0).wait(1).to({startPosition:397},0).wait(1).to({startPosition:398},0).wait(1).to({startPosition:399},0).wait(1).to({startPosition:400},0).wait(1).to({startPosition:401},0).wait(1).to({startPosition:402},0).wait(1).to({startPosition:403},0).wait(1).to({startPosition:404},0).wait(1).to({startPosition:405},0).wait(1).to({startPosition:406},0).wait(1).to({startPosition:407},0).wait(1).to({startPosition:408},0).wait(1).to({startPosition:409},0).wait(1).to({startPosition:410},0).wait(1).to({startPosition:411},0).wait(1).to({startPosition:412},0).wait(1).to({startPosition:413},0).wait(1).to({startPosition:414},0).wait(1).to({startPosition:415},0).wait(1).to({startPosition:416},0).wait(1).to({startPosition:417},0).wait(1).to({startPosition:418},0).wait(1).to({startPosition:419},0).wait(1).to({startPosition:420},0).wait(1).to({startPosition:421},0).wait(1).to({startPosition:422},0).wait(1).to({startPosition:423},0).wait(1).to({startPosition:424},0).wait(1).to({scaleX:9.63,scaleY:9.63,x:1513.9,y:1743.1,startPosition:425},0).wait(1).to({scaleX:7.9,scaleY:7.9,x:1254.8,y:1495.9,startPosition:426},0).wait(1).to({scaleX:6.18,scaleY:6.18,x:995.7,y:1248.6,startPosition:427},0).wait(1).to({scaleX:4.45,scaleY:4.45,x:736.5,y:1001.4,startPosition:428},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:477.3,y:754.1,startPosition:429},0).wait(1).to({scaleX:1,scaleY:1,x:218.2,y:506.9,startPosition:430},0).wait(1).to({startPosition:431},0).wait(1).to({startPosition:432},0).wait(1).to({startPosition:433},0).wait(1).to({startPosition:434},0).wait(1).to({startPosition:435},0).wait(1).to({startPosition:436},0).wait(1).to({startPosition:437},0).wait(1).to({startPosition:438},0).wait(1).to({startPosition:439},0).wait(1).to({startPosition:440},0).wait(1).to({startPosition:441},0).wait(1).to({startPosition:442},0).wait(1).to({startPosition:443},0).wait(1).to({startPosition:444},0).wait(1).to({startPosition:445},0).wait(1).to({startPosition:446},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).to({_off:true},1).wait(435));

	// Text3
	this.Text3_Container = new lib.Text3();
	this.Text3_Container.parent = this;
	this.Text3_Container.setTransform(226,160.3,1,1,0,0,0,150,72.5);
	this.Text3_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Text3_Container).wait(1).to({regX:9,regY:291.8,x:85,y:379.6},0).wait(206).to({regX:150,regY:72.5,x:226,y:160.3},0).wait(1).to({regX:9,regY:291.8,x:85,y:379.6,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:150,regY:72.5,x:226,y:160.3},0).wait(82).to({regX:9,regY:291.8,x:85,y:379.6,alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({regX:150,regY:72.5,x:226,y:160.3},0).to({_off:true},1).wait(604));

	// Scene2_Top
	this.instance_9 = new lib.Scene2_Top("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-152.3,362.7,1,1,0,0,0,-22.3,124.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:118.9,regY:-61.3,x:-11.1,y:177.7,startPosition:1},0).wait(1).to({y:178.3,startPosition:2},0).wait(1).to({y:178.8,startPosition:3},0).wait(1).to({y:179.3,startPosition:4},0).wait(1).to({y:179.9,startPosition:5},0).wait(1).to({y:180.4,startPosition:6},0).wait(1).to({y:180.9,startPosition:7},0).wait(1).to({y:181.4,startPosition:8},0).wait(1).to({y:182,startPosition:9},0).wait(1).to({y:182.5,startPosition:10},0).wait(1).to({y:183,startPosition:11},0).wait(1).to({y:183.6,startPosition:12},0).wait(1).to({y:184.1,startPosition:13},0).wait(1).to({y:184.6,startPosition:14},0).wait(1).to({y:185.2,startPosition:15},0).wait(1).to({y:185.7,startPosition:16},0).wait(1).to({y:186.2,startPosition:17},0).wait(1).to({y:186.7,startPosition:18},0).wait(1).to({y:187.3,startPosition:19},0).wait(1).to({y:187.8,startPosition:20},0).wait(1).to({y:188.3,startPosition:21},0).wait(1).to({y:188.9,startPosition:22},0).wait(1).to({y:189.4,startPosition:23},0).wait(1).to({y:189.9,startPosition:24},0).wait(1).to({y:190.5,startPosition:25},0).wait(1).to({y:191,startPosition:26},0).wait(1).to({y:191.5,startPosition:27},0).wait(1).to({y:192,startPosition:28},0).wait(1).to({y:192.6,startPosition:29},0).wait(1).to({y:193.1,startPosition:30},0).wait(1).to({y:193.6,startPosition:31},0).wait(1).to({y:194.2,startPosition:32},0).wait(1).to({y:194.7,startPosition:33},0).wait(1).to({y:195.2,startPosition:34},0).wait(1).to({y:195.8,startPosition:35},0).wait(1).to({y:196.3,startPosition:36},0).wait(1).to({y:196.8,startPosition:37},0).wait(1).to({y:197.3,startPosition:38},0).wait(1).to({y:197.9,startPosition:39},0).wait(1).to({y:198.4,startPosition:40},0).wait(1).to({y:198.9,startPosition:41},0).wait(1).to({y:199.5,startPosition:42},0).wait(1).to({y:200,startPosition:43},0).wait(1).to({y:200.5,startPosition:44},0).wait(1).to({y:201.1,startPosition:45},0).wait(1).to({y:201.6,startPosition:46},0).wait(1).to({y:202.1,startPosition:47},0).wait(1).to({y:202.6,startPosition:48},0).wait(1).to({y:203.2,startPosition:49},0).wait(1).to({y:203.7,startPosition:50},0).wait(1).to({y:204.2,startPosition:51},0).wait(1).to({y:204.8,startPosition:52},0).wait(1).to({y:205.3,startPosition:53},0).wait(1).to({y:205.8,startPosition:54},0).wait(1).to({y:206.4,startPosition:55},0).wait(1).to({y:206.9,startPosition:56},0).wait(1).to({y:207.4,startPosition:57},0).wait(1).to({y:207.9,startPosition:58},0).wait(1).to({y:208.5,startPosition:59},0).wait(1).to({y:209,startPosition:60},0).wait(1).to({y:209.5,startPosition:61},0).wait(1).to({y:210.1,startPosition:62},0).wait(1).to({y:210.6,startPosition:63},0).wait(1).to({y:211.1,startPosition:64},0).wait(1).to({y:211.7,startPosition:65},0).wait(1).to({y:212.2,startPosition:66},0).wait(1).to({y:212.7,startPosition:67},0).wait(1).to({y:213.2,startPosition:68},0).wait(1).to({y:213.8,startPosition:69},0).wait(1).to({y:214.3,startPosition:70},0).wait(1).to({y:214.8,startPosition:71},0).wait(1).to({y:215.4,startPosition:72},0).wait(1).to({y:215.9,startPosition:73},0).wait(1).to({y:216.4,startPosition:74},0).wait(1).to({y:217,startPosition:75},0).wait(1).to({y:217.5,startPosition:76},0).wait(1).to({y:218,startPosition:77},0).wait(1).to({y:218.5,startPosition:78},0).wait(1).to({y:219.1,startPosition:79},0).wait(1).to({y:219.6,startPosition:80},0).wait(1).to({y:220.1,startPosition:81},0).wait(1).to({y:220.7,startPosition:82},0).wait(1).to({y:221.2,startPosition:83},0).wait(1).to({y:221.7,startPosition:84},0).wait(1).to({y:222.3,startPosition:85},0).wait(1).to({y:222.8,startPosition:86},0).wait(1).to({y:223.3,startPosition:87},0).wait(1).to({y:223.9,startPosition:88},0).wait(1).to({y:224.4,startPosition:89},0).wait(1).to({y:224.9,startPosition:90},0).wait(1).to({y:225.4,startPosition:91},0).wait(1).to({y:226,startPosition:92},0).wait(1).to({y:226.5,startPosition:93},0).wait(1).to({y:227,startPosition:94},0).wait(1).to({y:227.6,startPosition:95},0).wait(1).to({y:228.1,startPosition:96},0).wait(1).to({y:228.6,startPosition:97},0).wait(1).to({y:229.2,startPosition:98},0).wait(1).to({y:229.7,startPosition:99},0).wait(1).to({y:230.2,startPosition:100},0).wait(1).to({y:230.7,startPosition:101},0).wait(1).to({y:231.3,startPosition:102},0).wait(1).to({y:231.8,startPosition:103},0).wait(1).to({y:232.3,startPosition:104},0).wait(1).to({y:232.9,startPosition:105},0).wait(1).to({y:233.4,startPosition:106},0).wait(1).to({y:233.9,startPosition:107},0).wait(1).to({y:234.5,startPosition:108},0).wait(1).to({y:235,startPosition:109},0).wait(1).to({y:235.5,startPosition:110},0).wait(1).to({y:236,startPosition:111},0).wait(1).to({y:236.6,startPosition:112},0).wait(1).to({y:237.1,startPosition:113},0).wait(1).to({y:237.6,startPosition:114},0).wait(1).to({y:238.2,startPosition:115},0).wait(1).to({y:238.7,startPosition:116},0).wait(1).to({y:239.2,startPosition:117},0).wait(1).to({y:239.8,startPosition:118},0).wait(1).to({y:240.3,startPosition:119},0).wait(1).to({y:240.8,startPosition:120},0).wait(1).to({y:241.3,startPosition:121},0).wait(1).to({y:241.9,startPosition:122},0).wait(1).to({y:242.4,startPosition:123},0).wait(1).to({y:242.9,startPosition:124},0).wait(1).to({y:243.5,startPosition:125},0).wait(1).to({y:244,startPosition:126},0).wait(1).to({y:244.5,startPosition:127},0).wait(1).to({y:245.1,startPosition:128},0).wait(1).to({y:245.6,startPosition:129},0).wait(1).to({y:246.1,startPosition:130},0).wait(1).to({y:246.6,startPosition:131},0).wait(1).to({y:247.2,startPosition:132},0).wait(1).to({y:247.7,startPosition:133},0).wait(1).to({y:248.2,startPosition:134},0).wait(1).to({y:248.8,startPosition:135},0).wait(1).to({y:249.3,startPosition:136},0).wait(1).to({y:249.8,startPosition:137},0).wait(1).to({y:250.4,startPosition:138},0).wait(1).to({y:250.9,startPosition:139},0).wait(1).to({y:251.4,startPosition:140},0).wait(1).to({y:251.9,startPosition:141},0).wait(1).to({y:252.5,startPosition:142},0).wait(1).to({y:253,startPosition:143},0).wait(1).to({y:253.5,startPosition:144},0).wait(1).to({y:254.1,startPosition:145},0).wait(1).to({y:254.6,startPosition:146},0).wait(1).to({y:255.1,startPosition:147},0).wait(1).to({y:255.7,startPosition:148},0).wait(1).to({y:256.2,startPosition:149},0).wait(1).to({y:256.7,startPosition:150},0).wait(1).to({y:257.2,startPosition:151},0).wait(1).to({y:257.8,startPosition:152},0).wait(1).to({y:258.3,startPosition:153},0).wait(1).to({y:258.8,startPosition:154},0).wait(1).to({y:259.4,startPosition:155},0).wait(1).to({y:259.9,startPosition:156},0).wait(1).to({y:260.4,startPosition:157},0).wait(1).to({y:261,startPosition:158},0).wait(1).to({y:261.5,startPosition:159},0).wait(1).to({y:262,startPosition:160},0).wait(1).to({y:262.5,startPosition:161},0).wait(1).to({y:263.1,startPosition:162},0).wait(1).to({y:263.6,startPosition:163},0).wait(1).to({y:264.1,startPosition:164},0).wait(1).to({y:264.7,startPosition:165},0).wait(1).to({y:265.2,startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({scaleX:3.78,scaleY:3.78,x:-367.5,y:-438,startPosition:204},0).wait(1).to({scaleX:6.57,scaleY:6.57,x:-723.9,y:-1141.3,startPosition:205},0).wait(1).to({scaleX:9.35,scaleY:9.35,x:-1080.4,y:-1844.6,startPosition:206},0).wait(1).to({scaleX:12.13,scaleY:12.13,x:-1436.8,y:-2547.9,startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({startPosition:289},0).wait(1).to({startPosition:290},0).wait(1).to({startPosition:291},0).wait(1).to({startPosition:292},0).wait(1).to({startPosition:293},0).wait(1).to({scaleX:9.35,scaleY:9.35,x:-1080.4,y:-1844.6,startPosition:294},0).wait(1).to({scaleX:6.57,scaleY:6.57,x:-723.9,y:-1141.3,startPosition:295},0).wait(1).to({scaleX:3.78,scaleY:3.78,x:-367.5,y:-438,startPosition:296},0).wait(1).to({scaleX:1,scaleY:1,x:-11.1,y:265.2,startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).to({_off:true},1).wait(585));

	// BG_grad
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.1,-300.1,-0.1,299.8).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_2.setTransform(80,300,0.533,1);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(167).to({_off:false},0).to({_off:true},148).wait(585));

	// Scene2_Bottom
	this.instance_10 = new lib.Scene2_Bottom("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(117,64.7,1,1,0,0,0,247.4,-113.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({y:65.5,startPosition:1},0).wait(1).to({y:66.4,startPosition:2},0).wait(1).to({y:67.3,startPosition:3},0).wait(1).to({y:68.2,startPosition:4},0).wait(1).to({y:69.1,startPosition:5},0).wait(1).to({y:70,startPosition:6},0).wait(1).to({y:70.9,startPosition:7},0).wait(1).to({y:71.8,startPosition:8},0).wait(1).to({y:72.7,startPosition:9},0).wait(1).to({y:73.6,startPosition:10},0).wait(1).to({y:74.5,startPosition:11},0).wait(1).to({y:75.3,startPosition:12},0).wait(1).to({y:76.2,startPosition:13},0).wait(1).to({y:77.1,startPosition:14},0).wait(1).to({y:78,startPosition:15},0).wait(1).to({y:78.9,startPosition:16},0).wait(1).to({y:79.8,startPosition:17},0).wait(1).to({y:80.7,startPosition:18},0).wait(1).to({y:81.6,startPosition:19},0).wait(1).to({y:82.5,startPosition:20},0).wait(1).to({y:83.4,startPosition:21},0).wait(1).to({y:84.3,startPosition:22},0).wait(1).to({y:85.2,startPosition:23},0).wait(1).to({y:86,startPosition:24},0).wait(1).to({y:86.9,startPosition:25},0).wait(1).to({y:87.8,startPosition:26},0).wait(1).to({y:88.7,startPosition:27},0).wait(1).to({y:89.6,startPosition:28},0).wait(1).to({y:90.5,startPosition:29},0).wait(1).to({y:91.4,startPosition:30},0).wait(1).to({y:92.3,startPosition:31},0).wait(1).to({y:93.2,startPosition:32},0).wait(1).to({y:94.1,startPosition:33},0).wait(1).to({y:95,startPosition:34},0).wait(1).to({y:95.9,startPosition:35},0).wait(1).to({y:96.7,startPosition:36},0).wait(1).to({y:97.6,startPosition:37},0).wait(1).to({y:98.5,startPosition:38},0).wait(1).to({y:99.4,startPosition:39},0).wait(1).to({y:100.3,startPosition:40},0).wait(1).to({y:101.2,startPosition:41},0).wait(1).to({y:102.1,startPosition:42},0).wait(1).to({y:103,startPosition:43},0).wait(1).to({y:103.9,startPosition:44},0).wait(1).to({y:104.8,startPosition:45},0).wait(1).to({y:105.7,startPosition:46},0).wait(1).to({y:106.6,startPosition:47},0).wait(1).to({y:107.4,startPosition:48},0).wait(1).to({y:108.3,startPosition:49},0).wait(1).to({y:109.2,startPosition:50},0).wait(1).to({y:110.1,startPosition:51},0).wait(1).to({y:111,startPosition:52},0).wait(1).to({y:111.9,startPosition:53},0).wait(1).to({y:112.8,startPosition:54},0).wait(1).to({y:113.7,startPosition:55},0).wait(1).to({y:114.6,startPosition:56},0).wait(1).to({y:115.5,startPosition:57},0).wait(1).to({y:116.4,startPosition:58},0).wait(1).to({y:117.3,startPosition:59},0).wait(1).to({y:118.1,startPosition:60},0).wait(1).to({y:119,startPosition:61},0).wait(1).to({y:119.9,startPosition:62},0).wait(1).to({y:120.8,startPosition:63},0).wait(1).to({y:121.7,startPosition:64},0).wait(1).to({y:122.6,startPosition:65},0).wait(1).to({y:123.5,startPosition:66},0).wait(1).to({y:124.4,startPosition:67},0).wait(1).to({y:125.3,startPosition:68},0).wait(1).to({y:126.2,startPosition:69},0).wait(1).to({y:127.1,startPosition:70},0).wait(1).to({y:128,startPosition:71},0).wait(1).to({y:128.8,startPosition:72},0).wait(1).to({y:129.7,startPosition:73},0).wait(1).to({y:130.6,startPosition:74},0).wait(1).to({y:131.5,startPosition:75},0).wait(1).to({y:132.4,startPosition:76},0).wait(1).to({y:133.3,startPosition:77},0).wait(1).to({y:134.2,startPosition:78},0).wait(1).to({y:135.1,startPosition:79},0).wait(1).to({y:136,startPosition:80},0).wait(1).to({y:136.9,startPosition:81},0).wait(1).to({y:137.8,startPosition:82},0).wait(1).to({y:138.7,startPosition:83},0).wait(1).to({y:139.5,startPosition:84},0).wait(1).to({y:140.4,startPosition:85},0).wait(1).to({y:141.3,startPosition:86},0).wait(1).to({y:142.2,startPosition:87},0).wait(1).to({y:143.1,startPosition:88},0).wait(1).to({y:144,startPosition:89},0).wait(1).to({y:144.9,startPosition:90},0).wait(1).to({y:145.8,startPosition:91},0).wait(1).to({y:146.7,startPosition:92},0).wait(1).to({y:147.6,startPosition:93},0).wait(1).to({y:148.5,startPosition:94},0).wait(1).to({y:149.3,startPosition:95},0).wait(1).to({y:150.2,startPosition:96},0).wait(1).to({y:151.1,startPosition:97},0).wait(1).to({y:152,startPosition:98},0).wait(1).to({y:152.9,startPosition:99},0).wait(1).to({y:153.8,startPosition:100},0).wait(1).to({y:154.7,startPosition:101},0).wait(1).to({y:155.6,startPosition:102},0).wait(1).to({y:156.5,startPosition:103},0).wait(1).to({y:157.4,startPosition:104},0).wait(1).to({y:158.3,startPosition:105},0).wait(1).to({y:159.2,startPosition:106},0).wait(1).to({y:160,startPosition:107},0).wait(1).to({y:160.9,startPosition:108},0).wait(1).to({y:161.8,startPosition:109},0).wait(1).to({y:162.7,startPosition:110},0).wait(1).to({y:163.6,startPosition:111},0).wait(1).to({y:164.5,startPosition:112},0).wait(1).to({y:165.4,startPosition:113},0).wait(1).to({y:166.3,startPosition:114},0).wait(1).to({y:167.2,startPosition:115},0).wait(1).to({y:168.1,startPosition:116},0).wait(1).to({y:169,startPosition:117},0).wait(1).to({y:169.9,startPosition:118},0).wait(1).to({y:170.7,startPosition:119},0).wait(1).to({y:171.6,startPosition:120},0).wait(1).to({y:172.5,startPosition:121},0).wait(1).to({y:173.4,startPosition:122},0).wait(1).to({y:174.3,startPosition:123},0).wait(1).to({y:175.2,startPosition:124},0).wait(1).to({y:176.1,startPosition:125},0).wait(1).to({y:177,startPosition:126},0).wait(1).to({y:177.9,startPosition:127},0).wait(1).to({y:178.8,startPosition:128},0).wait(1).to({y:179.7,startPosition:129},0).wait(1).to({y:180.6,startPosition:130},0).wait(1).to({y:181.4,startPosition:131},0).wait(1).to({y:182.3,startPosition:132},0).wait(1).to({y:183.2,startPosition:133},0).wait(1).to({y:184.1,startPosition:134},0).wait(1).to({y:185,startPosition:135},0).wait(1).to({y:185.9,startPosition:136},0).wait(1).to({y:186.8,startPosition:137},0).wait(1).to({y:187.7,startPosition:138},0).wait(1).to({y:188.6,startPosition:139},0).wait(1).to({y:189.5,startPosition:140},0).wait(1).to({y:190.4,startPosition:141},0).wait(1).to({y:191.3,startPosition:142},0).wait(1).to({y:192.1,startPosition:143},0).wait(1).to({y:193,startPosition:144},0).wait(1).to({y:193.9,startPosition:145},0).wait(1).to({y:194.8,startPosition:146},0).wait(1).to({y:195.7,startPosition:147},0).wait(1).to({y:196.6,startPosition:148},0).wait(1).to({y:197.5,startPosition:149},0).wait(1).to({y:198.4,startPosition:150},0).wait(1).to({y:199.3,startPosition:151},0).wait(1).to({y:200.2,startPosition:152},0).wait(1).to({y:201.1,startPosition:153},0).wait(1).to({y:202,startPosition:154},0).wait(1).to({y:202.8,startPosition:155},0).wait(1).to({y:203.7,startPosition:156},0).wait(1).to({y:204.6,startPosition:157},0).wait(1).to({y:205.5,startPosition:158},0).wait(1).to({y:206.4,startPosition:159},0).wait(1).to({y:207.3,startPosition:160},0).wait(1).to({y:208.2,startPosition:161},0).wait(1).to({y:209.1,startPosition:162},0).wait(1).to({y:210,startPosition:163},0).wait(1).to({y:210.9,startPosition:164},0).wait(1).to({y:211.8,startPosition:165},0).wait(1).to({y:212.7,startPosition:166},0).wait(1).to({startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({startPosition:200},0).wait(1).to({startPosition:201},0).wait(1).to({startPosition:202},0).wait(1).to({startPosition:203},0).wait(1).to({scaleX:3.78,scaleY:3.78,y:-636.5,startPosition:204},0).wait(1).to({scaleX:6.57,scaleY:6.57,y:-1485.7,startPosition:205},0).wait(1).to({scaleX:9.35,scaleY:9.35,y:-2334.9,startPosition:206},0).wait(1).to({scaleX:12.13,scaleY:12.13,x:117.1,y:-3184.1,startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({startPosition:289},0).wait(1).to({startPosition:290},0).wait(1).to({startPosition:291},0).wait(1).to({startPosition:292},0).wait(1).to({startPosition:293},0).wait(1).to({scaleX:9.35,scaleY:9.35,x:117,y:-2334.9,startPosition:294},0).wait(1).to({scaleX:6.57,scaleY:6.57,y:-1485.7,startPosition:295},0).wait(1).to({scaleX:3.78,scaleY:3.78,y:-636.5,startPosition:296},0).wait(1).to({scaleX:1,scaleY:1,y:212.7,startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).to({_off:true},1).wait(585));

	// Text2
	this.Text2_Container = new lib.Text2();
	this.Text2_Container.parent = this;
	this.Text2_Container.setTransform(170,147,1,1,0,0,0,150,72.5);
	this.Text2_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Text2_Container).wait(1).to({regX:60.7,regY:284.1,x:80.7,y:358.6},0).wait(65).to({regX:150,regY:72.5,x:170,y:147},0).wait(1).to({regX:60.7,regY:284.1,x:80.7,y:358.6,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({regX:150,regY:72.5,x:170,y:147},0).wait(76).to({regX:60.7,regY:284.1,x:80.7,y:358.6,alpha:0.5},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(751));

	// Scene1_Top
	this.instance_11 = new lib.Scene1_Top("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(202.4,483.3,1,1,0,0,0,202.4,283.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:123.1,regY:153.9,x:123.1,y:354,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({scaleX:3.17,scaleY:3.17,x:306,y:398.7,startPosition:60},0).wait(1).to({scaleX:5.34,scaleY:5.34,x:488.8,y:443.4,startPosition:61},0).wait(1).to({scaleX:7.51,scaleY:7.51,x:671.3,y:487.8,startPosition:62},0).wait(1).to({scaleX:9.68,scaleY:9.68,x:854.4,y:532.9,startPosition:63},0).wait(1).to({scaleX:11.85,scaleY:11.85,x:1037.2,y:577.6,startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({scaleX:9.68,scaleY:9.68,x:854.4,y:532.9,startPosition:149},0).wait(1).to({scaleX:7.51,scaleY:7.51,x:671.6,y:488.2,startPosition:150},0).wait(1).to({scaleX:5.34,scaleY:5.34,x:489.2,y:443.8,startPosition:151},0).wait(1).to({scaleX:3.17,scaleY:3.17,x:306,y:398.7,startPosition:152},0).wait(1).to({scaleX:1,scaleY:1,x:123.1,y:354,startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).to({_off:true},1).wait(733));

	// TextStart
	this.TextStart_Container = new lib.Textstart();
	this.TextStart_Container.parent = this;
	this.TextStart_Container.setTransform(151,238,1,1,0,0,0,150,29);
	this.TextStart_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.TextStart_Container).wait(1).to({regX:80,regY:340.1,x:81,y:542.6,alpha:0.083},0).wait(1).to({y:539.9,alpha:0.167},0).wait(1).to({y:538.1,alpha:0.25},0).wait(1).to({y:536.7,alpha:0.333},0).wait(1).to({y:535.7,alpha:0.417},0).wait(1).to({y:534.9,alpha:0.5},0).wait(1).to({y:534.3,alpha:0.583},0).wait(1).to({y:533.8,alpha:0.667},0).wait(1).to({y:533.5,alpha:0.75},0).wait(1).to({y:533.3,alpha:0.833},0).wait(1).to({y:533.1,alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({regX:150,regY:29,x:151,y:222},0).to({_off:true},58).wait(829));

	// BG_grad
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.1,-300.1,-0.1,299.8).s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_3.setTransform(80,300,0.533,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},167).wait(733));

	// Scene1_Bottom
	this.instance_12 = new lib.Scene1_Bottom("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(377.5,554.9,1,1,0,0,0,377.5,354.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:366.3,regY:383.7,x:366.3,y:583.7,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({scaleX:3.17,scaleY:3.17,x:1076.7,y:1127.8,startPosition:60},0).wait(1).to({scaleX:5.34,scaleY:5.34,x:1787.1,y:1672,startPosition:61},0).wait(1).to({scaleX:7.51,scaleY:7.51,x:2496.8,y:2215.5,startPosition:62},0).wait(1).to({scaleX:9.68,scaleY:9.68,x:3207.9,y:2760.1,startPosition:63},0).wait(1).to({scaleX:11.85,scaleY:11.85,x:3918.3,y:3304.2,startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({startPosition:80},0).wait(1).to({startPosition:81},0).wait(1).to({startPosition:82},0).wait(1).to({startPosition:83},0).wait(1).to({startPosition:84},0).wait(1).to({startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({scaleX:9.68,scaleY:9.68,x:3207.9,y:2760.1,startPosition:149},0).wait(1).to({scaleX:7.51,scaleY:7.51,x:2497.5,y:2216,startPosition:150},0).wait(1).to({scaleX:5.34,scaleY:5.34,x:1787.9,y:1672.4,startPosition:151},0).wait(1).to({scaleX:3.17,scaleY:3.17,x:1076.7,y:1127.8,startPosition:152},0).wait(1).to({scaleX:1,scaleY:1,x:366.3,y:583.7,startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({startPosition:164},0).wait(1).to({startPosition:165},0).wait(1).to({startPosition:166},0).to({_off:true},1).wait(733));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,300,913.3,913.1);
// library properties:
lib.properties = {
	width: 160,
	height: 600,
	fps: 30,
	color: "#2C94A7",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;