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
	this.locationSubTitleText.lineHeight = 15;
	this.locationSubTitleText.lineWidth = 276;
	this.locationSubTitleText.parent = this;
	this.locationSubTitleText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.locationSubTitleText).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_region, new cjs.Rectangle(0,0,280,16), null);


(lib.txt_location = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location
	this.locationTitleText = new cjs.Text("Derwent Water", "22px 'FS Elliot'", "#FFFFFF");
	this.locationTitleText.name = "locationTitleText";
	this.locationTitleText.lineHeight = 25;
	this.locationTitleText.lineWidth = 276;
	this.locationTitleText.parent = this;
	this.locationTitleText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.locationTitleText).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_location, new cjs.Rectangle(0,0,280,26), null);


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
	this.Text3 = new cjs.Text("Get more out of every trip with Caravan and Motorhome Club membership", "24px 'FS Elliot'", "#006070");
	this.Text3.name = "Text3";
	this.Text3.lineHeight = 27;
	this.Text3.lineWidth = 482;
	this.Text3.parent = this;
	this.Text3.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.Text3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text3, new cjs.Rectangle(0,0,485.6,120.9), null);


(lib.Text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Text2 = new cjs.Text("Whether you own a Motorhome or a Caravan", "24px 'FS Elliot'", "#006070");
	this.Text2.name = "Text2";
	this.Text2.lineHeight = 27;
	this.Text2.lineWidth = 368;
	this.Text2.parent = this;
	this.Text2.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.Text2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text2, new cjs.Rectangle(0,0,372,145), null);


(lib.Textstart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.TextStart = new cjs.Text("Wherever your trip\ntakes you…", "20px 'FS Elliot'", "#FFFFFF");
	this.TextStart.name = "TextStart";
	this.TextStart.lineHeight = 23;
	this.TextStart.lineWidth = 200;
	this.TextStart.parent = this;
	this.TextStart.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.TextStart).wait(1));

}).prototype = getMCSymbolPrototype(lib.Textstart, new cjs.Rectangle(0,0,204,58), null);


(lib.Textend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.TextEnd = new cjs.Text("Exclusive deals and money-saving offers – all for just £51/year*", "16px 'FS Elliot'", "#FFFFFF");
	this.TextEnd.name = "TextEnd";
	this.TextEnd.lineHeight = 19;
	this.TextEnd.lineWidth = 286;
	this.TextEnd.parent = this;
	this.TextEnd.setTransform(6.7,-60);

	this.timeline.addTween(cjs.Tween.get(this.TextEnd).wait(1));

}).prototype = getMCSymbolPrototype(lib.Textend, new cjs.Rectangle(4.7,-62,290.5,70), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB+ChIgdjFIhYDFIgRAAIhVjFIghDFIg/AAIA8lBIArAAIBXDMIBbjMIAsAAIA2FBg");
	this.shape.setTransform(3043.2,432.7,7.327,7.327);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhsChIAAlBIBQAAQA2AAAYATQANALAIARQAIASAAAUQAAAYgIAPQgIAPgTALQBBANAABDQAAArgdAYQgdAYgzAAgAgtBvIAbAAQA+AAAAgsQAAgYgPgLQgQgLgiAAIgYAAgAgtgaIASAAQAwAAAAgqQAAgpgvAAIgTAAg");
	this.shape_1.setTransform(4240.5,432.7,7.327,7.327);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8CYQgcgLgRgWQgYghAAg2IAAjEIA/AAIAAC4QAAAZACALQACALAGAKQAJAOAPAJQAPAHARAAQASAAAPgHQAPgJAJgOQAGgKACgLQACgLAAgZIAAi4IA/AAIAADEQAAA2gYAhQgRAWgcALQgcANghAAQggAAgcgNg");
	this.shape_2.setTransform(4004.5,435.5,7.327,7.327);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQChIAAlBIA/AAIAAELIBiAAIAAA2g");
	this.shape_3.setTransform(3810.7,432.7,7.327,7.327);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhLB4QgwgxAAhHQAAhFAxgyQAygwBHAAQAngBAnAUIAABKQgUgTgTgJQgSgIgWAAQgsAAgeAgQgeAggBAuQAAAwAeAgQAeAfAvAAQApAAAkgkIAABKQgoAUgngBQhHAAgygwg");
	this.shape_4.setTransform(3598.8,432.9,7.327,7.327);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhYChIAAlBICxAAIAAA2IhyAAIAABIIBuAAIAAA2IhuAAIAABXIByAAIAAA2g");
	this.shape_5.setTransform(3303.7,432.7,7.327,7.327);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah5B4QgzgwAAhHQAAhHAzgxQAygwBHAAQBJAAAyAwQAyAxAABGQAABGgyAyQgyAxhJgBQhIAAgxgwgAhLhNQggAgAAAtQAAAuAgAgQAgAhArAAQAtAAAfghQAggggBguQAAgugegfQggghgtAAQgrAAggAhg");
	this.shape_6.setTransform(2739.3,432.9,7.327,7.327);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABEChIAAiPIiIAAIAACPIg+AAIAAlBIA+AAIAAB9ICIAAIAAh9IA/AAIAAFBg");
	this.shape_7.setTransform(2460.5,432.7,7.327,7.327);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAoChIhWiBIgIAAIAACBIg/AAIAAlBIBeAAQA1AAAeAZQAeAZAAAtQAAAlgTAYQgTAWgkAHIBmCIgAg2gMIATAAQA8AAAAgyQAAgvg8AAIgTAAg");
	this.shape_8.setTransform(2225.1,432.7,7.327,7.327);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ah6B4QgxgwAAhHQAAhHAygxQAygwBHAAQBJAAAyAwQAxAxAABGQAABGgyAyQgxAxhJgBQhIAAgygwgAhLhNQgfAfAAAuQAAAuAfAgQAgAhArAAQAtAAAfghQAgggAAguQAAgugggfQgfghgtAAQgrAAggAhg");
	this.shape_9.setTransform(1955.5,432.9,7.327,7.327);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgeChIAAkLIhJAAIAAg2IDPAAIAAA2IhJAAIAAELg");
	this.shape_10.setTransform(1728.3,432.7,7.327,7.327);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah6B4QgxgwAAhHQAAhHAygxQAygwBHAAQBJAAAyAwQAxAxAABGQAABGgyAyQgxAxhJgBQhIAAgygwgAhLhNQgfAfAAAuQAAAuAfAgQAgAhArAAQAtAAAfghQAgggAAguQAAgugggfQgfghgtAAQgrAAggAhg");
	this.shape_11.setTransform(1500.8,432.9,7.327,7.327);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AB/ChIgdjFIhZDFIgQAAIhWjFIggDFIhAAAIA8lBIArAAIBXDMIBbjMIAsAAIA2FBg");
	this.shape_12.setTransform(1195.8,432.7,7.327,7.327);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABsChIjDjZIAADZIg/AAIAAlBIArAAIDEDYIAAjYIA+AAIAAFBg");
	this.shape_13.setTransform(3212.1,140.7,7.327,7.327);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABeChIgchEIiDAAIgdBEIhCAAICLlBIAvAAICHFBgAgsArIBaAAIgth0g");
	this.shape_14.setTransform(2942.1,140.9,7.327,7.327);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABeChIgchEIiDAAIgdBEIhCAAICLlBIAvAAICHFBgAgsArIBbAAIgth0g");
	this.shape_15.setTransform(2313.8,140.9,7.327,7.327);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AiEChIAAlBIBdAAQBLAAAxAtQAwAtAABGQAAAkgQAhQgPAhgcAWQgsAlhGAAgAhFBrIARAAQAfAAAUgGQATgGAPgOQAQgOAKgWQAJgWAAgXQAAgWgJgWQgKgVgQgOQgPgOgTgGQgUgGgfAAIgRAAg");
	this.shape_16.setTransform(3483.9,140.7,7.327,7.327);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABsChIjEjZIAADZIg+AAIAAlBIArAAIDDDYIAAjYIA/AAIAAFBg");
	this.shape_17.setTransform(2584.1,140.7,7.327,7.327);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgRChIiJlBIBFAAIBVDWIBXjWIBEAAIiLFBg");
	this.shape_18.setTransform(2094.3,140.7,7.327,7.327);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAoChIhWiBIgIAAIAACBIg/AAIAAlBIBdAAQA2AAAeAZQAeAZAAAtQAAAlgTAYQgTAWgkAIIBmCHgAg2gMIASAAQAeAAAPgMQAQgNAAgYQAAgwg8AAIgTAAg");
	this.shape_19.setTransform(1638.6,140.7,7.327,7.327);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABeChIgchEIiCAAIgeBEIhCAAICMlBIAuAAICHFBgAgsArIBaAAIgth0g");
	this.shape_20.setTransform(1872.5,140.9,7.327,7.327);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ABeChIgchEIiDAAIgdBEIhCAAICLlBIAvAAICHFBgAgsArIBbAAIgth0g");
	this.shape_21.setTransform(1392.4,140.9,7.327,7.327);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhKB4QgxgxgBhHQAAhFAzgxQAygxBGAAQAoAAAmATIAABKQgUgTgSgJQgTgIgWAAQgsAAgeAgQgfAgAAAuQAAAwAfAgQAeAfAvAAQAWAAARgJQARgIAUgTIAABKQgoATgnAAQhHAAgxgwg");
	this.shape_22.setTransform(1147.8,141.1,7.327,7.327);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AguA0IA4heIg5AAIAAgVIBfAAIhKB/g");
	this.shape_23.setTransform(1776.1,666.1,7.327,7.327);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiAvQgNgSAAgdQAAgcANgSQANgSAVAAQAVAAANASQAOASAAAcQAAAdgOASQgNASgVAAQgVAAgNgSgAgQgfQgHANAAASQAAATAHANQAGAMAKAAQALAAAGgMQAHgNAAgTQAAgSgHgNQgGgMgLAAQgKAAgGAMg");
	this.shape_24.setTransform(1690,664.6,7.327,7.327);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgWA1IAcglQgIADgGAAQgPAAgMgMQgLgLAAgRQAAgTAOgNQANgMATAAQAVAAANAMQANAMAAASQAAAUgPATIglAygAgPgnQgHAHAAAJQAAAKAHAGQAGAHAJAAQAKAAAGgGQAHgHAAgKQAAgJgHgHQgGgHgKAAQgJAAgGAHg");
	this.shape_25.setTransform(1604.3,665.4,7.327,7.327);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgCA+IAAhmIgSAAIAAgVIApAAIAAB7g");
	this.shape_26.setTransform(1525.9,664.8,7.327,7.327);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghA+IAAh7IBDAAIAAAVIgrAAIAAAcIAqAAIAAATIgqAAIAAAiIArAAIAAAVg");
	this.shape_27.setTransform(1419.8,664.8,7.327,7.327);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcAuQgTgSAAgcQAAgaATgTQAUgTAaAAQAPAAAPAIIAAAcQgOgOgRAAQgRAAgKANQgMAMAAARQAAATAMAMQAKAMATAAQAPAAAOgOIAAAdQgQAHgPAAQgaAAgTgTg");
	this.shape_28.setTransform(1333.9,664.6,7.327,7.327);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAqA+IhLhTIAABTIgYAAIAAh7IARAAIBKBTIAAhTIAYAAIAAB7g");
	this.shape_29.setTransform(1232.3,664.8,7.327,7.327);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgLA+IAAh7IAXAAIAAB7g");
	this.shape_30.setTransform(1152.2,664.8,7.327,7.327);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgqApIAQgPQAIAQASAAQAIAAAEgFQAGgEAAgIQAAgIgIgFQgGgEgJgDQgRgFgHgIQgGgHgBgNQAAgPALgKQAMgLAPAAQAUAAAQAOIgMARQgJgKgKAAQgHAAgGAEQgEAEAAAFQAAAGADADQAEADAKAEQAUAIAIAHQAIAIAAAPQAAASgMALQgMAMgTAAQgaAAgQgYg");
	this.shape_31.setTransform(1088.5,665,7.327,7.327);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAAHUQhTAfhbAAQjQAAiUiTQiUiUAAjQQAAizBziLQBviJCsglQAngHAZARQAYAPAKAWQALAZgDAwQiaABhsBtQhtBtAACZQAACZBtBtQBtBtCZAAIAJAAQhNhHgqheQgthiAAhsQAAhaAghWQATgzAdgsIAEgFIAHgGIADgCIAEgBIAEAAIAFAAIAEABIAiARIA/ArQBKA8AvBUQAwhUBKg8QAngeArgYIACgBIAJgEIAEgBIAJgCIAIACIADABIAFAEIAEAFIAUAhIAeBBQAfBVAABbQAABrgsBjQgrBehMBHIAJAAQCZAABthtQBthtAAiZQAAiZhthtQhshtiZgBQgDgwALgZQAJgWAZgPQAZgRAlAHQCsAlBwCJQBzCLAACzQgBDQiUCUQiUCTjPAAQhbAAhUgfgAjFgEQAABOAgBHQAfBFA2A0QAlAjArAXQAsgXAkgjQA3g0AfhFQAghHgBhOQAAg0gOgyQgzAwgeA9QggBAgFBGIiDAAQgFhHgfg/Qgeg9gygwQgPAzAAAzg");
	this.shape_32.setTransform(497.2,365.8,7.327,7.327);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,4320.2,731.5), null);


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


(lib.button_end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.cta_text = new cjs.Text("JOIN TODAY", "bold 13px 'FS Elliot'", "#FFFFFF");
	this.cta_text.name = "cta_text";
	this.cta_text.textAlign = "center";
	this.cta_text.lineHeight = 16;
	this.cta_text.lineWidth = 103;
	this.cta_text.parent = this;
	this.cta_text.setTransform(53.5,10.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18C36").s().p("An2DIQggAAAAgqIAAk9QAAgHACgFQAEgcAaAAIPuAAQAfABAAApIAAE7QAAANgDAJQgHAUgWAAg");
	this.shape.setTransform(53.5,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.cta_text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.button_end, new cjs.Rectangle(0,0,107,40), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(329).to({_off:false},0).wait(1).to({regX:329.2,regY:329.3,x:391.5,y:206.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:391.2,y:206.3},0).wait(123).to({regX:329.2,regY:329.3,x:391.5,y:206.9,alpha:0.5},0).wait(1).to({alpha:0},0).wait(2));

	// Logo left back copy 2
	this.instance_1 = new lib.Symbol5back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(135,206.3,1,1,0,0,180,328.9,328.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(329).to({_off:false},0).wait(1).to({regX:329.2,regY:329.3,x:134.7,y:206.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:135,y:206.3},0).wait(122).to({regX:329.2,regY:329.3,x:134.7,y:206.9,alpha:0},0).wait(4));

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
	this.instance.setTransform(515.7,325.6,1,1,0,0,0,328.9,328.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(182).to({regX:329.2,regY:329.3,x:516,y:326.2,alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(333));

	// Logo left back
	this.instance_1 = new lib.Symbol5back();
	this.instance_1.parent = this;
	this.instance_1.setTransform(239.3,383,1,1,0,0,180,328.9,328.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(178).to({regX:329.2,regY:329.3,x:239,y:383.6,alpha:0},0).wait(8).to({_off:true},1).wait(333));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.3,-3.1,935.7,716);


(lib.Morphinglogo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EjW/BDgIAAkAMGt/AAAIAAEAgEjW/A/gMAAAiC/MGt/AAAMAAACC/g");
	var mask_graphics_68 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_69 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_70 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_71 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_72 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_73 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_74 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_75 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_76 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_77 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_78 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_79 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_80 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_81 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_82 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_83 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_84 = new cjs.Graphics().p("Ek+RBDgIAAkAMJ8jAAAIAAEAgEk+RA/gMAAAiC/MJ8jAAAMAAACC/g");
	var mask_graphics_85 = new cjs.Graphics().p("EkbNBDgIAAkAMI2bAAAIAAEAgEkbNA/gMAAAiC/MI2bAAAMAAACC/g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:12.8,y:1270.4}).wait(54).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_68,x:2564.7,y:461.2}).wait(1).to({graphics:mask_graphics_69,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_70,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_71,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_72,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_73,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_74,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_75,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_76,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_77,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_78,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_79,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_80,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_81,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_82,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_83,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_84,x:2564.7,y:461.3}).wait(1).to({graphics:mask_graphics_85,x:2332.2,y:432}).wait(138));

	// Layer 1
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(1659.2,422.2,1,1,0,0,0,2160.1,365.8);
	this.instance.alpha = 0;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({alpha:0.063},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.188},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.313},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.438},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.563},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.688},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.813},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.938},0).wait(1).to({alpha:1},0).wait(139));

	// Line logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18C36").s().p("ABeMOQgugNgwgVQgvAVguANQhwAfhwAAQikAAiXhAQiTg+hwhwQhxhxg9iSQhAiXAAilQgBh0AhhvQAghwBAhiQBxiwC1hkQC1hjDRAAQALAAAIAHQAHAHAAALQAAAKgHAIQgIAHgLAAQjEAAiqBdQirBehpClQg8BdgeBoQgeBpgBBsQAACbA9COQA5CJBqBpQBqBqCJA6QCNA8CbAAQBrAABngdQAZgHAVgIIgMgHQjDhrhxi/QhxjAgBjeQAAjCBYitQAFgKALgDQAKgDAJAFQCCBIBhBxQBgBxAxCKQAyiKBhhxQBhhxCBhIQAJgFALADQAKADAEAKQBYCtAADCQAADehwDAQhyC/jCBrIgNAHQAVAIAZAHQBnAdBqAAQCbAACPg8QCIg6BqhqQBphpA7iJQA7iOAAibQABhsgfhpQgfhog6hdQhriliqheQirhdjEAAQgJAAgIgHQgIgIABgKQgBgLAIgHQAIgHAJAAQDRAAC2BjQC2BkBxCwQA+BjAhBvQAgBvABB0QAAClhACXQg/CShwBxQhxBwiRA+QiYBAilAAQhvAAhwgfgAm8AAQgBDQBrC0QBqC0C3BlQAYANAZAMIAzgZQC2hlBqi0QBri0AAjQQgBiohGiZQiDBOhbB6QhcB5gkCTQgCAPgPAGIgCABIgBAAIgCAAIgFAAIgBAAIgCAAIgCgBIgBAAQgOgGgCgPQgkiThch5Qhbh6iChOQhICZABCog");
	this.shape.setTransform(-1.3,423.6,4.049,4.049);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},59).wait(164));

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

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("EAAAA1aQphDmqZAAQ3yAAw1w2Qw6w5AA3xQAB0fNAv4QMyvoTokPQEWg2C6B8QCzB1BCCdQBQC6gVFfQxiADsZMcQsbMcAARiQAARjMbMcQMgMdRhAAIBDgEQozoDk6qyQlFrMAAsXQAAqZDpptQCMl4DTk+IAdgoIAzgsQAXgLADAAIAagLIAdgDIBFALIAoAOIBjAzIFXDRIDcCoQIjG2FaJiQFbpiIkm2QEojuEuidIALgHIBGghIA6gSIAhAAIA7ALIAVALIAlAdIAPASIAHAEIAHAHIDjGOICLFFQDlJmAAKgQAAMTlFLQQk1KyozIDIBCAEQRhAAMcsdQMcscAAxjQAAxisZscQsYsYxhgHQgSlfBQi6QBBidC0h1QC3h1ERAsQTpEOM1PsQNAP4ABUfQAAXxw5Q5Qw5Q23vAAQqVAApmjmgA2hggQgBI8DmIGQDfH4GSF8QELD5FACvQFBivELj5QGSl8Dfn4QDloGAAo8QAAmEhplpQlxFfjfHAQjpHXglIDIvDAAQgloHjinTQjbnElxlbQhnFxABF8g");
	this.shape_24.setTransform(-4.4,423.1);
	this.shape_24._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},59).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(82).to({_off:false},0).wait(139).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-459,94.4,915.4,658.6);


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
	this.instance.setTransform(377.2,232.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(450).to({_off:false},0).wait(3).to({x:324.2,y:172.8},0).wait(1).to({x:274.9,y:141.1},0).wait(1).to({x:250.2,y:129.5},0).wait(1).to({x:231.5,y:122.2},0).wait(1).to({x:216.2,y:117.1},0).wait(1).to({x:203.3,y:113.5},0).wait(1).to({x:192.2,y:110.9},0).wait(1).to({x:182.6,y:108.9},0).wait(1).to({x:174.1,y:107.5},0).wait(1).to({x:166.7,y:106.4},0).wait(1).to({x:160.1,y:105.6},0).wait(1).to({x:154.3,y:105},0).wait(1).to({x:149.2,y:104.6},0).wait(1).to({x:144.7,y:104.3},0).wait(1).to({x:140.8,y:104.1},0).wait(1).to({x:137.4,y:104},0).wait(1).to({x:134.4,y:103.9},0).wait(1).to({x:131.8},0).wait(1).to({x:129.6},0).wait(1).to({x:127.8},0).wait(1).to({x:126.3},0).wait(1).to({x:125.1},0).wait(1).to({x:124.2},0).wait(1).to({x:123.6},0).wait(1).to({x:123.2},0).wait(1).to({x:123.1},0).wait(1).to({y:104},0).wait(4).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).wait(2).to({_off:true},1).wait(8));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_450 = new cjs.Graphics().p("AOFNzIERv5IQREWIkRP6g");
	var mask_graphics_451 = new cjs.Graphics().p("AKeNHIEjxBIUsFgIkjRCg");
	var mask_graphics_452 = new cjs.Graphics().p("AHAMdIEzyFIY+GmIkzSHg");
	var mask_graphics_453 = new cjs.Graphics().p("ADqL2IFCzHIdGHoIlDTJg");
	var mask_graphics_454 = new cjs.Graphics().p("AAcLRIFQ0IMAhEAIpIlQUIg");
	var mask_graphics_455 = new cjs.Graphics().p("AiqKuIFd1FMAk5AJkIleVFg");
	var mask_graphics_456 = new cjs.Graphics().p("AlpKNIFq2BMAolAKeIlrWAg");
	var mask_graphics_457 = new cjs.Graphics().p("AogJtIF325MAsHALTIl4W5g");
	var mask_graphics_458 = new cjs.Graphics().p("ArPJQIGD3wMAvfAMGImDXwg");
	var mask_graphics_459 = new cjs.Graphics().p("At3I0IGO4kMAyvAM2ImPYkg");
	var mask_graphics_460 = new cjs.Graphics().p("AwXIaIGZ5WMA10ANjImZZWg");
	var mask_graphics_461 = new cjs.Graphics().p("AyvIBIGi6FMA4xAOOImiaFg");
	var mask_graphics_462 = new cjs.Graphics().p("A0/HqIGr6yMA7jAO2Imrayg");
	var mask_graphics_463 = new cjs.Graphics().p("A3IHVIG07cMA+NAPbIm0bcg");
	var mask_graphics_464 = new cjs.Graphics().p("A5IHBIG78EMBAtAP+Im8cEg");
	var mask_graphics_465 = new cjs.Graphics().p("A7BGuIHD8qMBDCAQfInDcqg");
	var mask_graphics_466 = new cjs.Graphics().p("A8yGdIHK9NMBFOAQ9InJdNg");
	var mask_graphics_467 = new cjs.Graphics().p("A+bGNIHQ9uMBHRARZInQdug");
	var mask_graphics_468 = new cjs.Graphics().p("A/9GOIHW+NMBJKARyInVeNg");
	var mask_graphics_469 = new cjs.Graphics().p("EghWAGQIHb+oMBK5ASJInbeog");
	var mask_graphics_470 = new cjs.Graphics().p("EgioAGSIHg/CMBMfASfIngfCg");
	var mask_graphics_471 = new cjs.Graphics().p("EgjPAGTIHi/OMBNQASpInifOg");
	var mask_graphics_472 = new cjs.Graphics().p("EgjPAGTIHi/OMBNQASpInifOg");
	var mask_graphics_473 = new cjs.Graphics().p("EgjPAGTIHi/OMBNQASpInifOg");
	var mask_graphics_474 = new cjs.Graphics().p("EgjPAGTIHi/OMBNQASpInifOg");
	var mask_graphics_475 = new cjs.Graphics().p("EgjPAGTIHi/OMBNQASpInifOg");
	var mask_graphics_476 = new cjs.Graphics().p("EgjPAGTIHi/OMBNQASpInifOg");
	var mask_graphics_477 = new cjs.Graphics().p("EgjPAGTIHi/OMBNQASpInifOg");
	var mask_graphics_478 = new cjs.Graphics().p("EgjPAGTIHi/OMBNQASpInifOg");
	var mask_graphics_479 = new cjs.Graphics().p("EgjPAGTIHi/OMBNQASpInifOg");
	var mask_graphics_480 = new cjs.Graphics().p("EgjPAGTIHi/OMBNQASpInifOg");
	var mask_graphics_481 = new cjs.Graphics().p("EgjwAGUIHh/MMBNNASlIngfMg");
	var mask_graphics_482 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_483 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_484 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_485 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_486 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_487 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_488 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_489 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_490 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_491 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_492 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_493 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_494 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_495 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_496 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");
	var mask_graphics_497 = new cjs.Graphics().p("EgjzAGTIHi/OMBNRASpInjfOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(450).to({graphics:mask_graphics_450,x:221.5,y:116.2}).wait(1).to({graphics:mask_graphics_451,x:228.5,y:119.2}).wait(1).to({graphics:mask_graphics_452,x:235.3,y:122.1}).wait(1).to({graphics:mask_graphics_453,x:241.8,y:124.8}).wait(1).to({graphics:mask_graphics_454,x:248,y:127.4}).wait(1).to({graphics:mask_graphics_455,x:254,y:129.8}).wait(1).to({graphics:mask_graphics_456,x:259.8,y:132.2}).wait(1).to({graphics:mask_graphics_457,x:265.4,y:134.4}).wait(1).to({graphics:mask_graphics_458,x:270.7,y:136.6}).wait(1).to({graphics:mask_graphics_459,x:275.8,y:138.6}).wait(1).to({graphics:mask_graphics_460,x:280.6,y:140.5}).wait(1).to({graphics:mask_graphics_461,x:285.2,y:142.3}).wait(1).to({graphics:mask_graphics_462,x:289.5,y:144}).wait(1).to({graphics:mask_graphics_463,x:293.7,y:145.6}).wait(1).to({graphics:mask_graphics_464,x:297.6,y:147.1}).wait(1).to({graphics:mask_graphics_465,x:301.2,y:148.5}).wait(1).to({graphics:mask_graphics_466,x:304.6,y:149.8}).wait(1).to({graphics:mask_graphics_467,x:307.8,y:151}).wait(1).to({graphics:mask_graphics_468,x:310.7,y:150.6}).wait(1).to({graphics:mask_graphics_469,x:313.4,y:150.1}).wait(1).to({graphics:mask_graphics_470,x:315.9,y:149.6}).wait(1).to({graphics:mask_graphics_471,x:317.1,y:149.3}).wait(1).to({graphics:mask_graphics_472,x:317.1,y:149.3}).wait(1).to({graphics:mask_graphics_473,x:317.1,y:149.3}).wait(1).to({graphics:mask_graphics_474,x:317.1,y:149.3}).wait(1).to({graphics:mask_graphics_475,x:317.1,y:149.3}).wait(1).to({graphics:mask_graphics_476,x:317.1,y:149.3}).wait(1).to({graphics:mask_graphics_477,x:317.1,y:149.3}).wait(1).to({graphics:mask_graphics_478,x:317.1,y:149.3}).wait(1).to({graphics:mask_graphics_479,x:317.1,y:149.3}).wait(1).to({graphics:mask_graphics_480,x:317.1,y:149.3}).wait(1).to({graphics:mask_graphics_481,x:313.4,y:149.6}).wait(1).to({graphics:mask_graphics_482,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_483,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_484,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_485,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_486,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_487,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_488,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_489,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_490,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_491,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_492,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_493,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_494,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_495,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_496,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_497,x:313.6,y:149.6}).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(329).to({_off:false},0).wait(1).to({x:265.4,y:277.4},0).wait(1).to({x:260.6,y:258.7},0).wait(1).to({x:255.2,y:241.1},0).wait(1).to({x:249.3,y:224.8},0).wait(1).to({x:243.1,y:209.6},0).wait(1).to({x:236.5,y:195.6},0).wait(1).to({x:229.7,y:182.8},0).wait(1).to({x:222.7,y:170.9},0).wait(1).to({x:215.6,y:160.1},0).wait(1).to({x:208.6,y:150.2},0).wait(1).to({x:201.6,y:141.2},0).wait(1).to({x:194.6,y:132.9},0).wait(1).to({x:187.8,y:125.4},0).wait(1).to({x:181.2,y:118.6},0).wait(1).to({x:174.8,y:112.4},0).wait(1).to({x:168.5,y:106.8},0).wait(1).to({x:162.5,y:101.6},0).wait(1).to({x:156.7,y:96.9},0).wait(1).to({x:151.1,y:92.6},0).wait(1).to({x:145.6,y:88.5},0).wait(1).to({x:140.4,y:84.8},0).wait(1).to({x:135.4,y:81.4},0).wait(1).to({x:130.4,y:78.1},0).wait(1).to({x:125.7,y:75.2},0).wait(1).to({x:120.9,y:72.2},0).wait(1).to({x:116.4,y:69.5},0).wait(1).to({x:111.6,y:66.8},0).wait(1).to({x:107.2,y:64.3},0).wait(93).to({x:100.6,y:77.1},0).wait(1).to({x:95,y:90.4},0).wait(1).to({x:90,y:103.9},0).wait(1).to({x:85.7,y:117.7},0).wait(1).to({x:82,y:131.7},0).wait(1).to({x:78.9,y:145.8},0).wait(1).to({x:76.5,y:160},0).wait(1).to({x:74.7,y:174.3},0).wait(1).to({x:73.5,y:188.7},0).wait(1).to({x:73,y:203.2},0).wait(1).to({x:73.1,y:217.6},0).wait(1).to({x:73.8,y:232},0).wait(1).to({x:75.1,y:246.4},0).wait(1).to({x:77.1,y:260.7},0).wait(1).to({x:79.7,y:275},0).wait(1).to({x:68.2,y:335.2},0).wait(5));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_329 = new cjs.Graphics().p("AIXRLIOSoMIIYOmIuSIMg");
	var mask_graphics_330 = new cjs.Graphics().p("AGQNoIOSoPILPTeIuRIQg");
	var mask_graphics_331 = new cjs.Graphics().p("AEQKLIORoPIN/YOIuSIPg");
	var mask_graphics_332 = new cjs.Graphics().p("ACTG1IORoOIQpczIuSIPg");
	var mask_graphics_333 = new cjs.Graphics().p("AAaDmIORoPMATOAhRIuSIPg");
	var mask_graphics_334 = new cjs.Graphics().p("AhaAcIOQoOMAVtAllIuRIPg");
	var mask_graphics_335 = new cjs.Graphics().p("AjMilIOQoPMAYIApwIuSIPg");
	var mask_graphics_336 = new cjs.Graphics().p("Ak5lhIOQoPMAacAtyIuRIPg");
	var mask_graphics_337 = new cjs.Graphics().p("AmjoWIOQoQMAcsAxsIuRIPg");
	var mask_graphics_338 = new cjs.Graphics().p("AoJrFIOQoPMAe3A1bIuRIPg");
	var mask_graphics_339 = new cjs.Graphics().p("AprttIOQoPMAg8A5CIuRIPg");
	var mask_graphics_340 = new cjs.Graphics().p("ArJwPIOQoPMAi8A8gIuRIQg");
	var mask_graphics_341 = new cjs.Graphics().p("AsjyqIOQoPMAk3A/1IuRIPg");
	var mask_graphics_342 = new cjs.Graphics().p("At60+IOQoPMAmtBDBIuRIPg");
	var mask_graphics_343 = new cjs.Graphics().p("AvM3MIORoPMAocBGEIuRIPg");
	var mask_graphics_344 = new cjs.Graphics().p("Awb5TIORoPMAqHBI9IuRIPg");
	var mask_graphics_345 = new cjs.Graphics().p("Axm7TIORoPMArtBLuIuQIOg");
	var mask_graphics_346 = new cjs.Graphics().p("Ayt9NIORoPMAtOBOVIuRIPg");
	var mask_graphics_347 = new cjs.Graphics().p("Azw/BIORoPMAupBQ0IuQIPg");
	var mask_graphics_348 = new cjs.Graphics().p("EgUvgguIOQoPMAwABTKIuRIPg");
	var mask_graphics_349 = new cjs.Graphics().p("EgVrgiUIORoPMAxRBVWIuRIPg");
	var mask_graphics_350 = new cjs.Graphics().p("EgWjgj0IORoOMAydBXZIuRIPg");
	var mask_graphics_351 = new cjs.Graphics().p("EgXXglMIORoPMAzjBZTIuQIPg");
	var mask_graphics_352 = new cjs.Graphics().p("EgYHgmfIORoPMA0lBbFIuRIPg");
	var mask_graphics_353 = new cjs.Graphics().p("EgYzgnrIORoOMA1hBcsIuRIPg");
	var mask_graphics_354 = new cjs.Graphics().p("EgZbgowIOQoPMA2YBeMIuQIPg");
	var mask_graphics_355 = new cjs.Graphics().p("EgaAgpvIORoOMA3JBfiIuQIPg");
	var mask_graphics_356 = new cjs.Graphics().p("EgaggqnIOQoOMA32BgvIuQIOg");
	var mask_graphics_357 = new cjs.Graphics().p("Ega9grYIOQoPMA4dBhzIuQIPg");
	var mask_graphics_358 = new cjs.Graphics().p("EgbWgsDIOQoPMA4/BiuIuQIPg");
	var mask_graphics_359 = new cjs.Graphics().p("EgbrgsnIOQoPMA5cBjgIuQIPg");
	var mask_graphics_360 = new cjs.Graphics().p("Egb8gtFIOQoPMA5zBkJIuQIPg");
	var mask_graphics_361 = new cjs.Graphics().p("EgcKgtcIOQoPMA6GBkpIuQIOg");
	var mask_graphics_362 = new cjs.Graphics().p("EgcTgtsIOQoPMA6TBk/IuRIOg");
	var mask_graphics_363 = new cjs.Graphics().p("EgcZgt2IOQoPMA6bBlMIuRIPg");
	var mask_graphics_364 = new cjs.Graphics().p("Egcbgt6IOQoOMA6dBlRIuQIOg");
	var mask_graphics_365 = new cjs.Graphics().p("EgdIguiIORoMMA6IBlRIuRIMg");
	var mask_graphics_449 = new cjs.Graphics().p("EgdMguiIORoMMA6IBlRIuRIMg");
	var mask_graphics_450 = new cjs.Graphics().p("EgfpgteIPdpSMA8NBkPIveJSg");
	var mask_graphics_451 = new cjs.Graphics().p("Egh0gsYIQpqZMA96BjKIwpKZg");
	var mask_graphics_452 = new cjs.Graphics().p("Egj9grRIRyriMA/nBiFIxyLig");
	var mask_graphics_453 = new cjs.Graphics().p("EgmDgqHIS5suMBBSBg9Iy4Mug");
	var mask_graphics_454 = new cjs.Graphics().p("EgoGgo7IT9t8MBC9BfzIz9N8g");
	var mask_graphics_455 = new cjs.Graphics().p("EgqGgnsIU/vOMBElBenI0/POg");
	var mask_graphics_456 = new cjs.Graphics().p("EgsEgmcIV/whMBGNBdaI1/Qhg");
	var mask_graphics_457 = new cjs.Graphics().p("Egt/glJIW8x3MBH0BcKI28R3g");
	var mask_graphics_458 = new cjs.Graphics().p("Egv2gj0IX2zQMBJYBa5I32TQg");
	var mask_graphics_459 = new cjs.Graphics().p("EgxrgidIYu0rMBK8BZmI4uUrg");
	var mask_graphics_460 = new cjs.Graphics().p("EgzAghFIZj2IMBMeBYTI5jWIg");
	var mask_graphics_461 = new cjs.Graphics().p("Eg0JgfqIaV3oMBN+BW9I6VXog");
	var mask_graphics_462 = new cjs.Graphics().p("Eg1RgeNIbG5KMBPdBVlI7GZKg");
	var mask_graphics_463 = new cjs.Graphics().p("Eg2WgcvIby6tMBQ7BUMI7yatg");
	var mask_graphics_464 = new cjs.Graphics().p("Eg3YgbPIcb8SMBSWBSxI8bcSg");
	var mask_graphics_465 = new cjs.Graphics().p("Eg3TgbLIcY8QMBSPBSnI8YcQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(329).to({graphics:mask_graphics_329,x:198.5,y:203.3}).wait(1).to({graphics:mask_graphics_330,x:203.3,y:211.9}).wait(1).to({graphics:mask_graphics_331,x:208,y:220.1}).wait(1).to({graphics:mask_graphics_332,x:212.5,y:228.1}).wait(1).to({graphics:mask_graphics_333,x:216.9,y:235.9}).wait(1).to({graphics:mask_graphics_334,x:221.1,y:243.4}).wait(1).to({graphics:mask_graphics_335,x:225.2,y:250.7}).wait(1).to({graphics:mask_graphics_336,x:229.1,y:257.7}).wait(1).to({graphics:mask_graphics_337,x:232.9,y:264.5}).wait(1).to({graphics:mask_graphics_338,x:236.6,y:271}).wait(1).to({graphics:mask_graphics_339,x:240.1,y:277.3}).wait(1).to({graphics:mask_graphics_340,x:243.5,y:283.4}).wait(1).to({graphics:mask_graphics_341,x:246.8,y:289.1}).wait(1).to({graphics:mask_graphics_342,x:249.9,y:294.7}).wait(1).to({graphics:mask_graphics_343,x:252.9,y:300}).wait(1).to({graphics:mask_graphics_344,x:255.7,y:305}).wait(1).to({graphics:mask_graphics_345,x:258.4,y:309.8}).wait(1).to({graphics:mask_graphics_346,x:261,y:314.4}).wait(1).to({graphics:mask_graphics_347,x:263.4,y:318.7}).wait(1).to({graphics:mask_graphics_348,x:265.7,y:322.8}).wait(1).to({graphics:mask_graphics_349,x:267.9,y:326.6}).wait(1).to({graphics:mask_graphics_350,x:269.9,y:330.2}).wait(1).to({graphics:mask_graphics_351,x:271.7,y:333.5}).wait(1).to({graphics:mask_graphics_352,x:273.5,y:336.6}).wait(1).to({graphics:mask_graphics_353,x:275.1,y:339.4}).wait(1).to({graphics:mask_graphics_354,x:276.5,y:342}).wait(1).to({graphics:mask_graphics_355,x:277.8,y:344.4}).wait(1).to({graphics:mask_graphics_356,x:279,y:346.4}).wait(1).to({graphics:mask_graphics_357,x:280,y:348.3}).wait(1).to({graphics:mask_graphics_358,x:280.9,y:349.9}).wait(1).to({graphics:mask_graphics_359,x:281.7,y:351.3}).wait(1).to({graphics:mask_graphics_360,x:282.3,y:352.4}).wait(1).to({graphics:mask_graphics_361,x:282.8,y:353.2}).wait(1).to({graphics:mask_graphics_362,x:283.2,y:353.8}).wait(1).to({graphics:mask_graphics_363,x:283.4,y:354.2}).wait(1).to({graphics:mask_graphics_364,x:283.4,y:354.3}).wait(1).to({graphics:mask_graphics_365,x:276.9,y:331.7}).wait(84).to({graphics:mask_graphics_449,x:276.5,y:329.1}).wait(1).to({graphics:mask_graphics_450,x:281.7,y:329.1}).wait(1).to({graphics:mask_graphics_451,x:286.3,y:329.1}).wait(1).to({graphics:mask_graphics_452,x:290.8,y:329.1}).wait(1).to({graphics:mask_graphics_453,x:295.2,y:329.1}).wait(1).to({graphics:mask_graphics_454,x:299.6,y:329.1}).wait(1).to({graphics:mask_graphics_455,x:303.8,y:329.1}).wait(1).to({graphics:mask_graphics_456,x:308,y:329.2}).wait(1).to({graphics:mask_graphics_457,x:312.1,y:329.2}).wait(1).to({graphics:mask_graphics_458,x:316,y:329.2}).wait(1).to({graphics:mask_graphics_459,x:319.9,y:329.2}).wait(1).to({graphics:mask_graphics_460,x:320.8,y:329.2}).wait(1).to({graphics:mask_graphics_461,x:320.8,y:329.2}).wait(1).to({graphics:mask_graphics_462,x:320.7,y:329.2}).wait(1).to({graphics:mask_graphics_463,x:320.7,y:329.2}).wait(1).to({graphics:mask_graphics_464,x:320.6,y:329.2}).wait(1).to({graphics:mask_graphics_465,x:321.9,y:329.6}).wait(5));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(329).to({_off:false},0).wait(1).to({regX:329.3,regY:329.3,x:391.6,y:206.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:391.2,y:206.3},0).wait(133).to({regX:329.3,regY:329.3,x:391.6,y:206.9,alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

	// Logo left copy 2
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(135,206.3,1,1,0,0,180,328.9,328.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(329).to({_off:false},0).wait(1).to({regX:329.3,regY:329.3,x:134.6,y:206.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:135,y:206.3},0).wait(133).to({regX:329.3,regY:329.3,x:134.6,y:206.9,alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Scene2_Top = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Dot
	this.instance = new lib.Dot();
	this.instance.parent = this;
	this.instance.setTransform(-31,167.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).wait(6).to({x:13.6,y:187.2},0).wait(1).to({x:52.5,y:198.3},0).wait(1).to({x:81.9,y:203.2},0).wait(1).to({x:105.8,y:205},0).wait(1).to({x:125.8,y:205.2},0).wait(1).to({x:142.9,y:204.3},0).wait(1).to({x:157.6,y:202.8},0).wait(1).to({x:170.4,y:200.9},0).wait(1).to({x:181.6,y:198.9},0).wait(1).to({x:191.4,y:196.8},0).wait(1).to({x:199.9,y:194.7},0).wait(1).to({x:207.7,y:192.6},0).wait(1).to({x:214.3,y:190.6},0).wait(1).to({x:220.3,y:188.7},0).wait(1).to({x:225.2,y:187},0).wait(1).to({x:230.2,y:185.3},0).wait(1).to({x:233.9,y:183.9},0).wait(1).to({x:237.1,y:182.7},0).wait(1).to({x:240.7,y:181.2},0).wait(1).to({x:243.2,y:180.2},0).wait(1).to({x:244.9,y:179.5},0).wait(1).to({x:246.2,y:179},0).wait(1).to({x:247,y:178.6},0).wait(1).to({x:247.5,y:178.4},0).wait(1).to({x:247.8,y:178.3},0).wait(1).to({x:247.9,y:178.2},0).wait(100).to({x:249.5,y:177.5},0).wait(1).to({x:255.9,y:174.6},0).wait(1).to({x:267.4,y:168.8},0).wait(1).to({x:283.1,y:160},0).wait(1).to({x:304.1,y:146.7},0).wait(1).to({x:328,y:128.8},0).to({_off:true},1).wait(2));

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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(167).to({graphics:mask_graphics_167,x:-198,y:-26.1}).wait(4).to({graphics:mask_graphics_171,x:-197.9,y:-26}).wait(1).to({graphics:mask_graphics_172,x:-190.1,y:-0.9}).wait(1).to({graphics:mask_graphics_173,x:-180.8,y:22.4}).wait(1).to({graphics:mask_graphics_174,x:-170.5,y:44}).wait(1).to({graphics:mask_graphics_175,x:-159.3,y:63.8}).wait(1).to({graphics:mask_graphics_176,x:-147.5,y:81.9}).wait(1).to({graphics:mask_graphics_177,x:-135.3,y:98.3}).wait(1).to({graphics:mask_graphics_178,x:-122.9,y:113.1}).wait(1).to({graphics:mask_graphics_179,x:-110.6,y:126.3}).wait(1).to({graphics:mask_graphics_180,x:-98.4,y:138.1}).wait(1).to({graphics:mask_graphics_181,x:-86.6,y:148.6}).wait(1).to({graphics:mask_graphics_182,x:-75.2,y:157.7}).wait(1).to({graphics:mask_graphics_183,x:-64.4,y:165.7}).wait(1).to({graphics:mask_graphics_184,x:-54.3,y:172.7}).wait(1).to({graphics:mask_graphics_185,x:-45,y:178.7}).wait(1).to({graphics:mask_graphics_186,x:-36.4,y:183.7}).wait(1).to({graphics:mask_graphics_187,x:-28.8,y:188}).wait(1).to({graphics:mask_graphics_188,x:-22.1,y:191.6}).wait(1).to({graphics:mask_graphics_189,x:-16.3,y:194.5}).wait(1).to({graphics:mask_graphics_190,x:-11.6,y:196.8}).wait(1).to({graphics:mask_graphics_191,x:-7.9,y:198.5}).wait(1).to({graphics:mask_graphics_192,x:-5.3,y:199.7}).wait(1).to({graphics:mask_graphics_193,x:-3.7,y:200.4}).wait(1).to({graphics:mask_graphics_194,x:-3.1,y:200.7}).wait(1).to({graphics:mask_graphics_195,x:2.3,y:207.5}).wait(104).to({graphics:mask_graphics_299,x:-10.9,y:199.7}).wait(1).to({graphics:mask_graphics_300,x:15.2,y:210.6}).wait(1).to({graphics:mask_graphics_301,x:42.1,y:219.4}).wait(1).to({graphics:mask_graphics_302,x:69.7,y:226}).wait(1).to({graphics:mask_graphics_303,x:97.6,y:230.4}).wait(1).to({graphics:mask_graphics_304,x:125.9,y:232.4}).wait(1).to({graphics:mask_graphics_305,x:125.9,y:232.4}).wait(1));

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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Dot
	this.instance = new lib.Dot();
	this.instance.parent = this;
	this.instance.setTransform(243.2,64.6,0.3,0.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.65,scaleY:0.65,alpha:0.5},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(44).to({x:235,y:64.3},0).wait(1).to({x:225.5,y:64.4},0).wait(1).to({x:214.5,y:65},0).wait(1).to({x:201.7,y:66.2},0).wait(1).to({x:187.4,y:68.1},0).wait(1).to({x:171.6,y:71.1},0).wait(1).to({x:155.1,y:75},0).wait(1).to({x:138.8,y:79.8},0).wait(1).to({x:123.7,y:85.2},0).wait(1).to({x:110.2,y:90.6},0).wait(1).to({x:98.6,y:96},0).wait(1).to({x:88.7,y:101},0).wait(1).to({x:80.3,y:105.5},0).wait(1).to({x:73.3,y:109.7},0).wait(1).to({x:67.3,y:113.3},0).wait(1).to({x:62.3,y:116.6},0).wait(1).to({x:58,y:119.5},0).wait(1).to({x:54.5,y:122},0).wait(1).to({x:51.4,y:124.2},0).wait(1).to({x:48.9,y:126},0).wait(1).to({x:46.7,y:127.7},0).wait(1).to({x:45,y:129},0).wait(1).to({x:43.6,y:130.1},0).wait(1).to({x:42.4,y:131},0).wait(1).to({x:41.5,y:131.7},0).wait(1).to({x:40.8,y:132.3},0).wait(1).to({x:40.3,y:132.6},0).wait(1).to({x:40,y:132.9},0).wait(1).to({x:39.9,y:133},0).wait(1).to({x:40},0).wait(99).to({x:27.6,y:143.5},0).wait(1).to({x:10.4,y:160.4},0).wait(1).to({x:-8.3,y:181.9},0).wait(1).to({x:-22.2,y:199.9},0).wait(1).to({x:-30.9,y:212.1},0).wait(1).to({x:-36.3,y:220},0).wait(1).to({x:-39.6,y:225.1},0).wait(1).to({x:-41.6,y:228.2},0).wait(1).to({x:-42.5,y:229.7},0).wait(1).to({x:-42.8,y:230.2},0).wait(1).to({x:-34,y:226.5},0).wait(1).to({y:240.7},0).wait(1).to({y:254.9},0).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_38 = new cjs.Graphics().p("AFKvtIPklZMAMvAk0IvkFZg");
	var mask_graphics_39 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_40 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_41 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_42 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_43 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_44 = new cjs.Graphics().p("AFFvsIPklbMAM1Ak0IvkFbg");
	var mask_graphics_45 = new cjs.Graphics().p("AC5vtIPklZMAMuAk0IvkFZg");
	var mask_graphics_46 = new cjs.Graphics().p("AAvvUIRwmLMAM1Ak0IxvGLg");
	var mask_graphics_47 = new cjs.Graphics().p("AhUu7IT6m8MAM1AkzIz7G8g");
	var mask_graphics_48 = new cjs.Graphics().p("AjYujIWFntMAM1Ak0I2GHtg");
	var mask_graphics_49 = new cjs.Graphics().p("AlcuLIYQodMAM0Ak0I4QIdg");
	var mask_graphics_50 = new cjs.Graphics().p("AngtyIaapOMAM1AkzI6cJOg");
	var mask_graphics_51 = new cjs.Graphics().p("ApltaIcmp+MAM1AkzI8nJ+g");
	var mask_graphics_52 = new cjs.Graphics().p("ArptCIexquMAM1AkzI+yKug");
	var mask_graphics_53 = new cjs.Graphics().p("AttspMAg8gLfMAM1AkyMgg9ALfg");
	var mask_graphics_54 = new cjs.Graphics().p("AvxsRMAjHgMPMAM1AkyMgjIAMPg");
	var mask_graphics_55 = new cjs.Graphics().p("Ax1r4MAlSgNAMAM0AkxMglSANAg");
	var mask_graphics_56 = new cjs.Graphics().p("Az6rgMAnegNwMAM0AkxMgndANwg");
	var mask_graphics_57 = new cjs.Graphics().p("A1+rIMAppgOgMAM0AkxMgppAOgg");
	var mask_graphics_58 = new cjs.Graphics().p("A4CqvMAr0gPRMAM0AkwMgr0APRg");
	var mask_graphics_59 = new cjs.Graphics().p("A6GqXMAt/gQCMAM0AkxMgt/AQCg");
	var mask_graphics_60 = new cjs.Graphics().p("A8Kp/MAwKgQyMAM0AkxMgwLAQyg");
	var mask_graphics_61 = new cjs.Graphics().p("A+PpmMAyWgRjMAMzAkwMgyVARjg");
	var mask_graphics_62 = new cjs.Graphics().p("A+VplMAycgRlMAMzAkwMgybARlg");
	var mask_graphics_63 = new cjs.Graphics().p("A+bpkMAyigRnMAMzAkwMgyiARng");
	var mask_graphics_64 = new cjs.Graphics().p("A+hpjMAyogRpMAMzAkwMgyoARpg");
	var mask_graphics_65 = new cjs.Graphics().p("A+ophMAyvgRsMAMzAkvMgyuARsg");
	var mask_graphics_66 = new cjs.Graphics().p("A+upgMAy1gRuMAMzAkvMgy0ARug");
	var mask_graphics_67 = new cjs.Graphics().p("A+0pfMAy7gRwMAMzAkvMgy7ARwg");
	var mask_graphics_68 = new cjs.Graphics().p("A+6peMAzBgRyMAMzAkvMgzBARyg");
	var mask_graphics_69 = new cjs.Graphics().p("A/BpdMAzIgR0MAMzAkvMgzHAR0g");
	var mask_graphics_70 = new cjs.Graphics().p("A/HpbMAzOgR3MAMzAkuMgzOAR3g");
	var mask_graphics_71 = new cjs.Graphics().p("A/NpaMAzUgR5MAMzAkuMgzUAR5g");
	var mask_graphics_72 = new cjs.Graphics().p("A/TpZMAzagR7MAMzAkuMgzaAR7g");
	var mask_graphics_73 = new cjs.Graphics().p("A/apYMAzhgR9MAMzAkuMgzhAR9g");
	var mask_graphics_74 = new cjs.Graphics().p("A/gpXMAzngR/MAMzAkuMgznAR/g");
	var mask_graphics_75 = new cjs.Graphics().p("A//pRMA0wgSPMAMuAkyMg0wASPg");
	var mask_graphics_174 = new cjs.Graphics().p("Egi6gIfMA5IgTwMAMtAkvMg5IATwg");
	var mask_graphics_175 = new cjs.Graphics().p("EgnHALLMAzOgyBIbBbsMgzOAyBg");
	var mask_graphics_176 = new cjs.Graphics().p("EgsSAR/MA1JhA9MAjcAdAMg1JBA9g");
	var mask_graphics_177 = new cjs.Graphics().p("EgwWAaDMA0ThQ1MAsaAcwMg0TBQ1g");
	var mask_graphics_178 = new cjs.Graphics().p("Egm9Aa0MAk9hKEMAo+AUdMgk9BKEg");
	var mask_graphics_179 = new cjs.Graphics().p("A+FZ3MAX1hBBMAkWANUMgX1BBBg");
	var mask_graphics_180 = new cjs.Graphics().p("EgmggHKMBAXgWQMAMqAklMhAXAWQg");
	var mask_graphics_181 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");
	var mask_graphics_182 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");
	var mask_graphics_183 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");
	var mask_graphics_184 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");
	var mask_graphics_185 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");
	var mask_graphics_186 = new cjs.Graphics().p("EgmjgHFMBAXgWbMAMwAkmMhAXAWbg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_graphics_38,x:214.1,y:45.5}).wait(1).to({graphics:mask_graphics_39,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_40,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_41,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_42,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_43,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_44,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_45,x:199.5,y:49.9}).wait(1).to({graphics:mask_graphics_46,x:200.4,y:52.1}).wait(1).to({graphics:mask_graphics_47,x:201.1,y:54.3}).wait(1).to({graphics:mask_graphics_48,x:201.8,y:56.6}).wait(1).to({graphics:mask_graphics_49,x:202.4,y:58.8}).wait(1).to({graphics:mask_graphics_50,x:203.1,y:61}).wait(1).to({graphics:mask_graphics_51,x:203.8,y:63.2}).wait(1).to({graphics:mask_graphics_52,x:204.5,y:65.4}).wait(1).to({graphics:mask_graphics_53,x:205.2,y:67.6}).wait(1).to({graphics:mask_graphics_54,x:205.9,y:69.8}).wait(1).to({graphics:mask_graphics_55,x:206.5,y:72}).wait(1).to({graphics:mask_graphics_56,x:207.2,y:74.2}).wait(1).to({graphics:mask_graphics_57,x:207.9,y:76.4}).wait(1).to({graphics:mask_graphics_58,x:208.6,y:78.6}).wait(1).to({graphics:mask_graphics_59,x:209.3,y:80.8}).wait(1).to({graphics:mask_graphics_60,x:210,y:83}).wait(1).to({graphics:mask_graphics_61,x:210.6,y:85.2}).wait(1).to({graphics:mask_graphics_62,x:210.6,y:85.4}).wait(1).to({graphics:mask_graphics_63,x:210.6,y:85.5}).wait(1).to({graphics:mask_graphics_64,x:210.6,y:85.6}).wait(1).to({graphics:mask_graphics_65,x:210.6,y:85.7}).wait(1).to({graphics:mask_graphics_66,x:210.6,y:85.8}).wait(1).to({graphics:mask_graphics_67,x:210.6,y:85.9}).wait(1).to({graphics:mask_graphics_68,x:210.6,y:86}).wait(1).to({graphics:mask_graphics_69,x:210.6,y:86.1}).wait(1).to({graphics:mask_graphics_70,x:210.6,y:86.2}).wait(1).to({graphics:mask_graphics_71,x:210.6,y:86.3}).wait(1).to({graphics:mask_graphics_72,x:210.6,y:86.4}).wait(1).to({graphics:mask_graphics_73,x:210.6,y:86.6}).wait(1).to({graphics:mask_graphics_74,x:210.6,y:86.7}).wait(1).to({graphics:mask_graphics_75,x:214.3,y:86.5}).wait(99).to({graphics:mask_graphics_174,x:219.4,y:87.5}).wait(1).to({graphics:mask_graphics_175,x:160.3,y:129}).wait(1).to({graphics:mask_graphics_176,x:99.8,y:161.3}).wait(1).to({graphics:mask_graphics_177,x:39.4,y:193.6}).wait(1).to({graphics:mask_graphics_178,x:62,y:180.9}).wait(1).to({graphics:mask_graphics_179,x:84.5,y:168.1}).wait(1).to({graphics:mask_graphics_180,x:127.5,y:135.8}).wait(1).to({graphics:mask_graphics_181,x:126.9,y:138}).wait(1).to({graphics:mask_graphics_182,x:126.3,y:140.3}).wait(1).to({graphics:mask_graphics_183,x:125.7,y:142.6}).wait(1).to({graphics:mask_graphics_184,x:125.1,y:144.9}).wait(1).to({graphics:mask_graphics_185,x:124.6,y:147.2}).wait(1).to({graphics:mask_graphics_186,x:124,y:149.5}).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({_off:false},0).wait(1).to({regX:329.3,regY:329.3,x:238.9,y:383.6,alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:239.3,y:383},0).wait(139).to({regX:329.3,regY:329.3,x:238.9,y:383.6,alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(228.9,50.4,28.5,28.5);


// stage content:
(lib.CAMC_Journey_Image_728x90 = function(mode,startPosition,loop) {
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
	this.frame_909 = function() {
		console.log(this.loopCount);
		console.log("loopCount");
		
		if (this.loopCount < 1) {
			this.loopCount++;
			this.gotoAndPlay(2);
		} else {
			this.stop();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(909).call(this.frame_909).wait(1));

	// Logo
	this.instance = new lib.Logo();
	this.instance.parent = this;
	this.instance.setTransform(38.4,41,1,1,0,0,0,20.4,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(497).to({regY:19.6,y:45.6,alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(408));

	// CTA
	this.cta_container = new lib.button_end();
	this.cta_container.parent = this;
	this.cta_container.setTransform(650.1,55,1,1,0,0,0,53.5,20);
	this.cta_container.alpha = 0;
	this.cta_container._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta_container).wait(566).to({_off:false},0).wait(1).to({y:53.5,alpha:0.167},0).wait(1).to({y:51.9,alpha:0.333},0).wait(1).to({y:50.4,alpha:0.5},0).wait(1).to({y:48.9,alpha:0.667},0).wait(1).to({y:47.3,alpha:0.833},0).wait(1).to({y:45.8,alpha:1},0).wait(338));

	// TextEnd
	this.TextEnd_Container = new lib.Textend();
	this.TextEnd_Container.parent = this;
	this.TextEnd_Container.setTransform(377,130,1,1,0,0,0,150,29);
	this.TextEnd_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.TextEnd_Container).wait(1).to({regX:149.9,regY:-27,x:376.9,y:74},0).wait(540).to({regX:150,regY:29,x:425,y:122},0).wait(1).to({regX:149.9,regY:-27,x:424.9,y:65.6,alpha:0.042},0).wait(1).to({y:65,alpha:0.083},0).wait(1).to({y:64.5,alpha:0.125},0).wait(1).to({y:63.8,alpha:0.167},0).wait(1).to({y:63.1,alpha:0.208},0).wait(1).to({y:62.4,alpha:0.25},0).wait(1).to({y:61.6,alpha:0.292},0).wait(1).to({y:60.8,alpha:0.333},0).wait(1).to({y:60.1,alpha:0.375},0).wait(1).to({y:59.5,alpha:0.417},0).wait(1).to({y:58.9,alpha:0.458},0).wait(1).to({y:58.4,alpha:0.5},0).wait(1).to({y:57.9,alpha:0.542},0).wait(1).to({y:57.5,alpha:0.583},0).wait(1).to({y:57.2,alpha:0.625},0).wait(1).to({y:56.9,alpha:0.667},0).wait(1).to({y:56.7,alpha:0.708},0).wait(1).to({y:56.5,alpha:0.75},0).wait(1).to({y:56.3,alpha:0.792},0).wait(1).to({y:56.2,alpha:0.833},0).wait(1).to({y:56.1,alpha:0.875},0).wait(1).to({y:56,alpha:0.917},0).wait(1).to({alpha:0.958},0).wait(1).to({alpha:1},0).wait(1).to({regX:150,regY:29,x:425,y:112},0).wait(344));

	// Logo_morph
	this.instance_1 = new lib.Morphinglogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.3,423.6,1,1,0,0,0,-1.3,423.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(463).to({_off:false},0).wait(42).to({x:118.8,y:347.6,alpha:1},0).to({scaleX:0.62,scaleY:0.62,x:87.1,y:227.3},4,cjs.Ease.get(1)).to({regX:0,regY:422.7,scaleX:0.04,scaleY:0.04,x:38.4,y:44.7},14).wait(387));

	// BG_End_Imge
	this.IMG_container2 = new lib.IMG();
	this.IMG_container2.parent = this;
	this.IMG_container2.setTransform(364,45,1,1,0,0,0,364,45);
	this.IMG_container2.alpha = 0;
	this.IMG_container2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.IMG_container2).wait(532).to({_off:false},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.014},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.157},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.186},0).wait(1).to({alpha:0.2},0).wait(364));

	// Scene4_Top
	this.instance_2 = new lib.Scene4_Top("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(377.6,288,1,1,0,0,0,257.6,364);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({_off:true},473).wait(405));

	// BG_grad
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],0,-125,0,125).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(364,45,2.427,0.36);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(480).to({_off:false},0).wait(430));

	// Scene4_Bottom
	this.instance_3 = new lib.Scene4_Bottom("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(247.2,347.7,1,1,0,0,0,127.2,423.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({_off:true},473).wait(405));

	// Image mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_360 = new cjs.Graphics().p("AavCqQg4g4AAhPQAAhOA4g4QA4g4BPAAQA0AAArAZQAVAMATATQA4A4AABOQAABPg4A4QgTATgVANQgrAYg0AAQhPAAg4g4g");
	var mask_graphics_361 = new cjs.Graphics().p("ARkHTQjCjBAAkSQAAkSDCjCQDCjAESAAQC2AACTBUQBKAsBABAQDCDCAAESQAAESjCDBQhABBhKAtQiTBUi2AAQkSAAjCjCg");
	var mask_graphics_362 = new cjs.Graphics().p("AIaMgQlMlMAAnUQAAnWFMlMQFMlJHUAAQE3AAD8CRQB/BLBuBtQFMFMAAHWQAAHUlMFMQhuBuh/BNQj8CRk3AAQnUAAlMlMg");
	var mask_graphics_363 = new cjs.Graphics().p("AgvRsQnWnVAAqXQAAqaHWnWQHUnRKXAAQG4AAFlDNQC0BpCbCbQHWHWAAKaQAAKXnWHVQibCci0BtQllDNm4AAQqXAAnUnWg");
	var mask_graphics_364 = new cjs.Graphics().p("Ap6W5QpfpgAAtZQAAteJfpfQJgpaNYAAQI6AAHNEJQDpCIDJDJQJgJfAANeQAANZpgJgQjJDJjpCNQnNEJo6AAQtYAApgpfg");
	var mask_graphics_365 = new cjs.Graphics().p("AzEcFQrqrpAAwcQAAwhLqrqQLprjQbAAQK7AAI2FGQEeCnD2D2QLqLqAAQhQAAQcrqLpQj2D3keCtQo2FGq7AAQwbAArprqg");
	var mask_graphics_366 = new cjs.Graphics().p("EgcOAhSQt0t0AAzeQAAzlN0t0QNztrTdAAQM9AAKeGCQFTDGEkEjQNzN0AATlQAATetzN0QkkEklTDNQqeGCs9AAQzdAAtztzg");
	var mask_graphics_367 = new cjs.Graphics().p("EglZAmeQv9v9AA2hQAA2pP9v9QP+v1WfAAQO+AAMHG/QGIDkFSFSQP9P9AAWpQAAWhv9P9QlSFSmIDtQsHG/u+AAQ2fAAv+v+g");
	var mask_graphics_368 = new cjs.Graphics().p("EgrqArrQyHyIAA5jQAA5tSHyHQSIx9ZiAAQQ/AANwH7QG9EDF/F/QSHSHAAZtQAAZjyHSIQl/F/m9ENQtwH7w/AAQ5iAAyIyHg");
	var mask_graphics_438 = new cjs.Graphics().p("EgrqArrQyHyIAA5jQAA5tSHyHQSIx9ZiAAQQ/AANwH7QG9EDF/F/QSHSHAAZtQAAZjyHSIQl/F/m9ENQtwH7w/AAQ5iAAyIyHg");
	var mask_graphics_439 = new cjs.Graphics().p("EgkKAlvQvpvqAA2FQAA2NPpvqQPqvgWEAAQOrAAL4G2QGBDfFLFLQPqPqAAWNQAAWFvqPqQlLFLmBDoQr4G2urAAQ2EAAvqvpg");
	var mask_graphics_440 = new cjs.Graphics().p("A5rfzQtMtMAAynQAAytNMtMQNMtFSmAAQMXAAKBFxQFEC9EXEXQNMNMAAStQAASntMNMQkXEXlEDEQqBFxsXAAQymAAtMtMg");
	var mask_graphics_441 = new cjs.Graphics().p("AvMZ3QquqvAAvIQAAvNKuqvQKvqoPHAAQKEAAIJEsQEHCZDjDjQKuKvAAPNQAAPIquKvQjjDjkHCfQoJEsqEAAQvHAAqvqug");
	var mask_graphics_442 = new cjs.Graphics().p("AktT7QoRoRAArqQAAruIRoRQIQoMLqAAQHwAAGRDoQDLB2CvCuQIRIRAALuQAALqoRIRQivCvjLB6QmRDonwAAQrqAAoQoRg");
	var mask_graphics_443 = new cjs.Graphics().p("AFxN/QlylzAAoMQAAoOFylzQFzlwIMAAQFcAAEaCiQCOBTB7B7QFzFzAAIOQAAIMlzFzQh7B7iOBWQkaCilcAAQoMAAlzlzg");
	var mask_graphics_444 = new cjs.Graphics().p("AQQIDQjWjWAAktQAAkuDWjWQDWjUEtAAQDIAACiBeQBSAwBHBGQDWDWAAEuQAAEtjWDWQhHBHhSAxQiiBejIAAQktAAjWjWg");
	var mask_graphics_445 = new cjs.Graphics().p("AavCqQg4g4AAhPQAAhOA4g4QA4g4BPAAQA0AAArAZQAVAMATATQA4A4AABOQAABPg4A4QgTATgVANQgrAYg0AAQhPAAg4g4g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(360).to({graphics:mask_graphics_360,x:203.7,y:22.6}).wait(1).to({graphics:mask_graphics_361,x:225.3,y:27.4}).wait(1).to({graphics:mask_graphics_362,x:247,y:28.6}).wait(1).to({graphics:mask_graphics_363,x:268.6,y:29.9}).wait(1).to({graphics:mask_graphics_364,x:290.3,y:31.1}).wait(1).to({graphics:mask_graphics_365,x:311.9,y:32.3}).wait(1).to({graphics:mask_graphics_366,x:333.5,y:33.6}).wait(1).to({graphics:mask_graphics_367,x:355.2,y:34.8}).wait(1).to({graphics:mask_graphics_368,x:357.3,y:36.1}).wait(70).to({graphics:mask_graphics_438,x:357.3,y:36.1}).wait(1).to({graphics:mask_graphics_439,x:351.7,y:34.6}).wait(1).to({graphics:mask_graphics_440,x:327,y:33.2}).wait(1).to({graphics:mask_graphics_441,x:302.3,y:31.8}).wait(1).to({graphics:mask_graphics_442,x:277.7,y:30.4}).wait(1).to({graphics:mask_graphics_443,x:253,y:29}).wait(1).to({graphics:mask_graphics_444,x:228.4,y:27.6}).wait(1).to({graphics:mask_graphics_445,x:203.7,y:22.6}).wait(465));

	// txt_region
	this.locationSubTitleContainer = new lib.txt_region();
	this.locationSubTitleContainer.parent = this;
	this.locationSubTitleContainer.setTransform(136,257.5,1,1,0,0,0,126,25.5);
	this.locationSubTitleContainer.alpha = 0;

	var maskedShapeInstanceList = [this.locationSubTitleContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.locationSubTitleContainer).wait(375).to({x:216,y:77.5},0).to({alpha:1},5).wait(58).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(464));

	// txt_location
	this.locationTitleContainer = new lib.txt_location();
	this.locationTitleContainer.parent = this;
	this.locationTitleContainer.setTransform(136,232.5,1,1,0,0,0,126,25.5);
	this.locationTitleContainer.alpha = 0;

	var maskedShapeInstanceList = [this.locationTitleContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.locationTitleContainer).wait(374).to({x:214,y:52.5},0).to({alpha:1},5).wait(59).to({alpha:0},7,cjs.Ease.get(1)).to({_off:true},1).wait(464));

	// grad_location
	this.instance_4 = new lib.Grad_mc();
	this.instance_4.parent = this;
	this.instance_4.setTransform(200,45,0.3,1.6,90,0,0,150,125);
	this.instance_4.alpha = 0.801;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(360).to({_off:false},0).to({_off:true},86).wait(464));

	// img
	this.IMG_container = new lib.IMG();
	this.IMG_container.parent = this;
	this.IMG_container.setTransform(150,125,1,1,0,0,0,150,125);
	this.IMG_container.alpha = 0;

	var maskedShapeInstanceList = [this.IMG_container];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.IMG_container).wait(360).to({alpha:1},8).wait(70).to({alpha:0},7).to({_off:true},1).wait(464));

	// Dot
	this.instance_5 = new lib.img_Mask();
	this.instance_5.parent = this;
	this.instance_5.setTransform(407.4,45.3,1,1,0,0,0,19.1,19.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(360).to({_off:false},0).to({regX:19.2,scaleX:20.7,scaleY:20.7,x:754.7,y:431.5},8).wait(70).to({regX:19.1,scaleX:20.7,x:752.7},0).to({regX:19.2,regY:19.2,scaleX:1,scaleY:1,x:407.5,y:45.4},7).to({_off:true},1).wait(464));

	// Scene3_Top
	this.instance_6 = new lib.Scene3_Top("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(321.5,330.2,1,1,0,0,0,321.4,330.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:240.6,regY:206.8,x:241.5,y:206.8,startPosition:1},0).wait(1).to({x:242.4,y:206.7,startPosition:2},0).wait(1).to({x:243.3,y:206.6,startPosition:3},0).wait(1).to({x:244.1,y:206.5,startPosition:4},0).wait(1).to({x:245,y:206.3,startPosition:5},0).wait(1).to({x:245.9,y:206.2,startPosition:6},0).wait(1).to({x:246.7,y:206.1,startPosition:7},0).wait(1).to({x:247.6,y:206,startPosition:8},0).wait(1).to({x:248.5,y:205.9,startPosition:9},0).wait(1).to({x:249.3,y:205.8,startPosition:10},0).wait(1).to({x:250.2,y:205.7,startPosition:11},0).wait(1).to({x:251.1,y:205.6,startPosition:12},0).wait(1).to({x:251.9,y:205.4,startPosition:13},0).wait(1).to({x:252.8,y:205.3,startPosition:14},0).wait(1).to({x:253.7,y:205.2,startPosition:15},0).wait(1).to({x:254.5,y:205.1,startPosition:16},0).wait(1).to({x:255.4,y:205,startPosition:17},0).wait(1).to({x:256.3,y:204.9,startPosition:18},0).wait(1).to({x:257.1,y:204.8,startPosition:19},0).wait(1).to({x:258,y:204.7,startPosition:20},0).wait(1).to({x:258.9,y:204.6,startPosition:21},0).wait(1).to({x:259.7,y:204.4,startPosition:22},0).wait(1).to({x:260.6,y:204.3,startPosition:23},0).wait(1).to({x:261.5,y:204.2,startPosition:24},0).wait(1).to({x:262.3,y:204.1,startPosition:25},0).wait(1).to({x:263.2,y:204,startPosition:26},0).wait(1).to({x:264.1,y:203.9,startPosition:27},0).wait(1).to({x:264.9,y:203.8,startPosition:28},0).wait(1).to({x:265.8,y:203.7,startPosition:29},0).wait(1).to({x:266.7,y:203.5,startPosition:30},0).wait(1).to({x:267.5,y:203.4,startPosition:31},0).wait(1).to({x:268.4,y:203.3,startPosition:32},0).wait(1).to({x:269.3,y:203.2,startPosition:33},0).wait(1).to({x:270.1,y:203.1,startPosition:34},0).wait(1).to({x:271,y:203,startPosition:35},0).wait(1).to({x:271.9,y:202.9,startPosition:36},0).wait(1).to({x:272.7,y:202.8,startPosition:37},0).wait(1).to({x:273.6,y:202.7,startPosition:38},0).wait(1).to({x:274.5,y:202.5,startPosition:39},0).wait(1).to({x:275.3,y:202.4,startPosition:40},0).wait(1).to({x:276.2,y:202.3,startPosition:41},0).wait(1).to({x:277.1,y:202.2,startPosition:42},0).wait(1).to({x:277.9,y:202.1,startPosition:43},0).wait(1).to({x:278.8,y:202,startPosition:44},0).wait(1).to({x:279.7,y:201.9,startPosition:45},0).wait(1).to({x:280.5,y:201.8,startPosition:46},0).wait(1).to({x:281.4,y:201.7,startPosition:47},0).wait(1).to({x:282.3,y:201.5,startPosition:48},0).wait(1).to({x:283.1,y:201.4,startPosition:49},0).wait(1).to({x:284,y:201.3,startPosition:50},0).wait(1).to({x:284.9,y:201.2,startPosition:51},0).wait(1).to({x:285.7,y:201.1,startPosition:52},0).wait(1).to({x:286.6,y:201,startPosition:53},0).wait(1).to({x:287.5,y:200.9,startPosition:54},0).wait(1).to({x:288.3,y:200.8,startPosition:55},0).wait(1).to({x:289.2,y:200.6,startPosition:56},0).wait(1).to({x:290.1,y:200.5,startPosition:57},0).wait(1).to({x:290.9,y:200.4,startPosition:58},0).wait(1).to({x:291.8,y:200.3,startPosition:59},0).wait(1).to({x:292.7,y:200.2,startPosition:60},0).wait(1).to({x:293.5,y:200.1,startPosition:61},0).wait(1).to({x:294.4,y:200,startPosition:62},0).wait(1).to({x:295.3,y:199.9,startPosition:63},0).wait(1).to({x:296.1,y:199.8,startPosition:64},0).wait(1).to({x:297,y:199.6,startPosition:65},0).wait(1).to({x:297.9,y:199.5,startPosition:66},0).wait(1).to({x:298.7,y:199.4,startPosition:67},0).wait(1).to({x:299.6,y:199.3,startPosition:68},0).wait(1).to({x:300.5,y:199.2,startPosition:69},0).wait(1).to({x:301.3,y:199.1,startPosition:70},0).wait(1).to({x:302.2,y:199,startPosition:71},0).wait(1).to({x:303.1,y:198.9,startPosition:72},0).wait(1).to({x:303.9,y:198.7,startPosition:73},0).wait(1).to({x:304.8,y:198.6,startPosition:74},0).wait(1).to({x:305.7,y:198.5,startPosition:75},0).wait(1).to({x:306.5,y:198.4,startPosition:76},0).wait(1).to({x:307.4,y:198.3,startPosition:77},0).wait(1).to({x:308.3,y:198.2,startPosition:78},0).wait(1).to({x:309.1,y:198.1,startPosition:79},0).wait(1).to({x:310,y:198,startPosition:80},0).wait(1).to({x:310.9,y:197.9,startPosition:81},0).wait(1).to({x:311.7,y:197.7,startPosition:82},0).wait(1).to({x:312.6,y:197.6,startPosition:83},0).wait(1).to({x:313.5,y:197.5,startPosition:84},0).wait(1).to({x:314.3,y:197.4,startPosition:85},0).wait(1).to({x:315.2,y:197.3,startPosition:86},0).wait(1).to({x:316.1,y:197.2,startPosition:87},0).wait(1).to({x:316.9,y:197.1,startPosition:88},0).wait(1).to({x:317.8,y:197,startPosition:89},0).wait(1).to({x:318.7,y:196.8,startPosition:90},0).wait(1).to({x:319.5,y:196.7,startPosition:91},0).wait(1).to({x:320.4,y:196.6,startPosition:92},0).wait(1).to({x:321.3,y:196.5,startPosition:93},0).wait(1).to({x:322.1,y:196.4,startPosition:94},0).wait(1).to({x:323,y:196.3,startPosition:95},0).wait(1).to({x:323.9,y:196.2,startPosition:96},0).wait(1).to({x:324.7,y:196.1,startPosition:97},0).wait(1).to({x:325.6,y:196,startPosition:98},0).wait(1).to({x:326.5,y:195.8,startPosition:99},0).wait(1).to({x:327.3,y:195.7,startPosition:100},0).wait(1).to({x:328.2,y:195.6,startPosition:101},0).wait(1).to({x:329.1,y:195.5,startPosition:102},0).wait(1).to({x:329.9,y:195.4,startPosition:103},0).wait(1).to({x:330.8,y:195.3,startPosition:104},0).wait(1).to({x:331.7,y:195.2,startPosition:105},0).wait(1).to({x:332.5,y:195.1,startPosition:106},0).wait(1).to({x:333.4,y:194.9,startPosition:107},0).wait(1).to({x:334.3,y:194.8,startPosition:108},0).wait(1).to({x:335.1,y:194.7,startPosition:109},0).wait(1).to({x:336,y:194.6,startPosition:110},0).wait(1).to({x:336.9,y:194.5,startPosition:111},0).wait(1).to({x:337.7,y:194.4,startPosition:112},0).wait(1).to({x:338.6,y:194.3,startPosition:113},0).wait(1).to({x:339.5,y:194.2,startPosition:114},0).wait(1).to({x:340.3,y:194.1,startPosition:115},0).wait(1).to({x:341.2,y:193.9,startPosition:116},0).wait(1).to({x:342.1,y:193.8,startPosition:117},0).wait(1).to({x:342.9,y:193.7,startPosition:118},0).wait(1).to({x:343.8,y:193.6,startPosition:119},0).wait(1).to({x:344.7,y:193.5,startPosition:120},0).wait(1).to({x:345.5,y:193.4,startPosition:121},0).wait(1).to({x:346.4,y:193.3,startPosition:122},0).wait(1).to({x:347.3,y:193.2,startPosition:123},0).wait(1).to({x:348.1,y:193,startPosition:124},0).wait(1).to({x:349,y:192.9,startPosition:125},0).wait(1).to({x:349.9,y:192.8,startPosition:126},0).wait(1).to({x:350.7,y:192.7,startPosition:127},0).wait(1).to({x:351.6,y:192.6,startPosition:128},0).wait(1).to({x:352.5,y:192.5,startPosition:129},0).wait(1).to({x:353.3,y:192.4,startPosition:130},0).wait(1).to({x:354.2,y:192.3,startPosition:131},0).wait(1).to({x:355.1,y:192.2,startPosition:132},0).wait(1).to({x:355.9,y:192,startPosition:133},0).wait(1).to({x:356.8,y:191.9,startPosition:134},0).wait(1).to({x:357.7,y:191.8,startPosition:135},0).wait(1).to({x:358.5,y:191.7,startPosition:136},0).wait(1).to({x:359.4,y:191.6,startPosition:137},0).wait(1).to({x:360.3,y:191.5,startPosition:138},0).wait(1).to({x:361.1,y:191.4,startPosition:139},0).wait(1).to({x:362,y:191.3,startPosition:140},0).wait(1).to({x:362.9,y:191.2,startPosition:141},0).wait(1).to({x:363.7,y:191,startPosition:142},0).wait(1).to({x:364.6,y:190.9,startPosition:143},0).wait(1).to({x:365.5,y:190.8,startPosition:144},0).wait(1).to({x:366.3,y:190.7,startPosition:145},0).wait(1).to({x:367.2,y:190.6,startPosition:146},0).wait(1).to({x:368.1,y:190.5,startPosition:147},0).wait(1).to({x:368.9,y:190.4,startPosition:148},0).wait(1).to({x:369.8,y:190.3,startPosition:149},0).wait(1).to({x:370.7,y:190.1,startPosition:150},0).wait(1).to({x:371.5,y:190,startPosition:151},0).wait(1).to({x:372.4,y:189.9,startPosition:152},0).wait(1).to({x:373.3,y:189.8,startPosition:153},0).wait(1).to({x:374.1,y:189.7,startPosition:154},0).wait(1).to({x:375,y:189.6,startPosition:155},0).wait(1).to({x:375.9,y:189.5,startPosition:156},0).wait(1).to({x:376.7,y:189.4,startPosition:157},0).wait(1).to({x:377.6,y:189.3,startPosition:158},0).wait(1).to({x:378.5,y:189.1,startPosition:159},0).wait(1).to({x:379.3,y:189,startPosition:160},0).wait(1).to({x:380.2,y:188.9,startPosition:161},0).wait(1).to({x:381.1,y:188.8,startPosition:162},0).wait(1).to({x:381.9,y:188.7,startPosition:163},0).wait(1).to({x:382.8,y:188.6,startPosition:164},0).wait(1).to({x:383.7,y:188.5,startPosition:165},0).wait(1).to({x:384.5,y:188.4,startPosition:166},0).wait(1).to({x:385.4,y:188.2,startPosition:167},0).wait(1).to({x:386.3,y:188.1,startPosition:168},0).wait(1).to({x:387.1,y:188,startPosition:169},0).wait(1).to({x:388,y:187.9,startPosition:170},0).wait(1).to({x:388.9,y:187.8,startPosition:171},0).wait(1).to({x:389.7,y:187.7,startPosition:172},0).wait(1).to({x:390.6,y:187.6,startPosition:173},0).wait(1).to({x:391.5,y:187.5,startPosition:174},0).wait(1).to({x:392.3,y:187.4,startPosition:175},0).wait(1).to({x:393.2,y:187.2,startPosition:176},0).wait(1).to({x:394.1,y:187.1,startPosition:177},0).wait(1).to({x:394.9,y:187,startPosition:178},0).wait(1).to({x:395.8,y:186.9,startPosition:179},0).wait(1).to({x:396.7,y:186.8,startPosition:180},0).wait(1).to({x:397.5,y:186.7,startPosition:181},0).wait(1).to({x:398.4,y:186.6,startPosition:182},0).wait(1).to({x:399.3,y:186.5,startPosition:183},0).wait(1).to({x:400.1,y:186.3,startPosition:184},0).wait(1).to({x:401,y:186.2,startPosition:185},0).wait(1).to({x:401.9,y:186.1,startPosition:186},0).wait(1).to({x:402.7,y:186,startPosition:187},0).wait(1).to({x:403.6,y:185.9,startPosition:188},0).wait(1).to({x:404.5,y:185.8,startPosition:189},0).wait(1).to({x:405.3,y:185.7,startPosition:190},0).wait(1).to({x:406.2,y:185.6,startPosition:191},0).wait(1).to({x:407.1,y:185.5,startPosition:192},0).wait(1).to({x:407.9,y:185.3,startPosition:193},0).wait(1).to({x:408.8,y:185.2,startPosition:194},0).wait(1).to({x:409.7,y:185.1,startPosition:195},0).wait(1).to({x:410.5,y:185,startPosition:196},0).wait(1).to({x:411.4,y:184.9,startPosition:197},0).wait(1).to({x:412.3,y:184.8,startPosition:198},0).wait(1).to({x:413.1,y:184.7,startPosition:199},0).wait(1).to({x:414,y:184.6,startPosition:200},0).wait(1).to({x:414.9,y:184.4,startPosition:201},0).wait(1).to({x:415.7,y:184.3,startPosition:202},0).wait(1).to({x:416.6,y:184.2,startPosition:203},0).wait(1).to({x:417.5,y:184.1,startPosition:204},0).wait(1).to({x:418.3,y:184,startPosition:205},0).wait(1).to({x:419.2,y:183.9,startPosition:206},0).wait(1).to({x:420.1,y:183.8,startPosition:207},0).wait(1).to({x:420.9,y:183.7,startPosition:208},0).wait(1).to({x:421.8,y:183.6,startPosition:209},0).wait(1).to({x:422.7,y:183.4,startPosition:210},0).wait(1).to({x:423.5,y:183.3,startPosition:211},0).wait(1).to({x:424.4,y:183.2,startPosition:212},0).wait(1).to({x:425.3,y:183.1,startPosition:213},0).wait(1).to({x:426.1,y:183,startPosition:214},0).wait(1).to({x:427,y:182.9,startPosition:215},0).wait(1).to({x:427.9,y:182.8,startPosition:216},0).wait(1).to({x:428.7,y:182.7,startPosition:217},0).wait(1).to({x:429.6,y:182.5,startPosition:218},0).wait(1).to({x:430.5,y:182.4,startPosition:219},0).wait(1).to({x:431.3,y:182.3,startPosition:220},0).wait(1).to({x:432.2,y:182.2,startPosition:221},0).wait(1).to({x:433.1,y:182.1,startPosition:222},0).wait(1).to({x:433.9,y:182,startPosition:223},0).wait(1).to({x:434.8,y:181.9,startPosition:224},0).wait(1).to({x:435.7,y:181.8,startPosition:225},0).wait(1).to({x:436.5,y:181.7,startPosition:226},0).wait(1).to({x:437.4,y:181.5,startPosition:227},0).wait(1).to({x:438.3,y:181.4,startPosition:228},0).wait(1).to({x:439.1,y:181.3,startPosition:229},0).wait(1).to({x:440,y:181.2,startPosition:230},0).wait(1).to({x:440.9,y:181.1,startPosition:231},0).wait(1).to({x:441.7,y:181,startPosition:232},0).wait(1).to({x:442.6,y:180.9,startPosition:233},0).wait(1).to({x:443.5,y:180.8,startPosition:234},0).wait(1).to({x:444.3,y:180.7,startPosition:235},0).wait(1).to({x:445.2,y:180.5,startPosition:236},0).wait(1).to({x:446.1,y:180.4,startPosition:237},0).wait(1).to({x:446.9,y:180.3,startPosition:238},0).wait(1).to({x:447.8,y:180.2,startPosition:239},0).wait(1).to({x:448.7,y:180.1,startPosition:240},0).wait(1).to({x:449.5,y:180,startPosition:241},0).wait(1).to({x:450.4,y:179.9,startPosition:242},0).wait(1).to({x:451.3,y:179.8,startPosition:243},0).wait(1).to({x:452.1,y:179.6,startPosition:244},0).wait(1).to({x:453,y:179.5,startPosition:245},0).wait(1).to({x:453.9,y:179.4,startPosition:246},0).wait(1).to({x:454.7,y:179.3,startPosition:247},0).wait(1).to({x:455.6,y:179.2,startPosition:248},0).wait(1).to({x:456.5,y:179.1,startPosition:249},0).wait(1).to({x:457.3,y:179,startPosition:250},0).wait(1).to({x:458.2,y:178.9,startPosition:251},0).wait(1).to({x:459.1,y:178.8,startPosition:252},0).wait(1).to({x:459.9,y:178.6,startPosition:253},0).wait(1).to({x:460.8,y:178.5,startPosition:254},0).wait(1).to({x:461.7,y:178.4,startPosition:255},0).wait(1).to({x:462.5,y:178.3,startPosition:256},0).wait(1).to({x:463.4,y:178.2,startPosition:257},0).wait(1).to({x:464.3,y:178.1,startPosition:258},0).wait(1).to({x:465.1,y:178,startPosition:259},0).wait(1).to({x:466,y:177.9,startPosition:260},0).wait(1).to({x:466.9,y:177.7,startPosition:261},0).wait(1).to({x:467.7,y:177.6,startPosition:262},0).wait(1).to({x:468.6,y:177.5,startPosition:263},0).wait(1).to({x:469.5,y:177.4,startPosition:264},0).wait(1).to({x:470.3,y:177.3,startPosition:265},0).wait(1).to({x:471.2,y:177.2,startPosition:266},0).wait(1).to({x:472.1,y:177.1,startPosition:267},0).wait(1).to({x:472.9,y:177,startPosition:268},0).wait(1).to({x:473.8,y:176.9,startPosition:269},0).wait(1).to({x:474.7,y:176.7,startPosition:270},0).wait(1).to({x:475.5,y:176.6,startPosition:271},0).wait(1).to({x:476.4,y:176.5,startPosition:272},0).wait(1).to({x:477.3,y:176.4,startPosition:273},0).wait(1).to({x:478.1,y:176.3,startPosition:274},0).wait(1).to({x:479,y:176.2,startPosition:275},0).wait(1).to({x:479.9,y:176.1,startPosition:276},0).wait(1).to({x:480.7,y:176,startPosition:277},0).wait(1).to({x:481.6,y:175.8,startPosition:278},0).wait(1).to({x:482.5,y:175.7,startPosition:279},0).wait(1).to({x:483.3,y:175.6,startPosition:280},0).wait(1).to({x:484.2,y:175.5,startPosition:281},0).wait(1).to({x:485.1,y:175.4,startPosition:282},0).wait(1).to({x:485.9,y:175.3,startPosition:283},0).wait(1).to({x:486.8,y:175.2,startPosition:284},0).wait(1).to({x:487.7,y:175.1,startPosition:285},0).wait(1).to({x:488.5,y:175,startPosition:286},0).wait(1).to({x:489.4,y:174.8,startPosition:287},0).wait(1).to({x:490.3,y:174.7,startPosition:288},0).wait(1).to({x:491.1,y:174.6,startPosition:289},0).wait(1).to({x:492,y:174.5,startPosition:290},0).wait(1).to({x:492.9,y:174.4,startPosition:291},0).wait(1).to({x:493.7,y:174.3,startPosition:292},0).wait(1).to({x:494.6,y:174.2,startPosition:293},0).wait(1).to({x:495.5,y:174.1,startPosition:294},0).wait(1).to({x:496.3,y:173.9,startPosition:295},0).wait(1).to({x:497.2,y:173.8,startPosition:296},0).wait(1).to({x:498.1,y:173.7,startPosition:297},0).wait(1).to({x:498.9,y:173.6,startPosition:298},0).wait(1).to({x:499.8,y:173.5,startPosition:299},0).wait(1).to({x:500.7,y:173.4,startPosition:300},0).wait(1).to({x:501.5,y:173.3,startPosition:301},0).wait(1).to({x:502.4,y:173.2,startPosition:302},0).wait(1).to({x:503.3,y:173.1,startPosition:303},0).wait(1).to({x:504.1,y:172.9,startPosition:304},0).wait(1).to({x:505,y:172.8,startPosition:305},0).wait(1).to({x:505.9,y:172.7,startPosition:306},0).wait(1).to({x:506.7,y:172.6,startPosition:307},0).wait(1).to({x:507.6,y:172.5,startPosition:308},0).wait(1).to({x:508.5,y:172.4,startPosition:309},0).wait(1).to({x:509.3,y:172.3,startPosition:310},0).wait(1).to({x:510.2,y:172.2,startPosition:311},0).wait(1).to({x:511.1,y:172,startPosition:312},0).wait(1).to({x:511.9,y:171.9,startPosition:313},0).wait(1).to({x:512.8,y:171.8,startPosition:314},0).wait(1).to({x:513.7,y:171.7,startPosition:315},0).wait(1).to({x:514.5,y:171.6,startPosition:316},0).wait(1).to({x:515.4,y:171.5,startPosition:317},0).wait(1).to({x:516.3,y:171.4,startPosition:318},0).wait(1).to({x:517.1,y:171.3,startPosition:319},0).wait(1).to({x:518,y:171.2,startPosition:320},0).wait(1).to({x:518.9,y:171,startPosition:321},0).wait(1).to({x:519.7,y:170.9,startPosition:322},0).wait(1).to({x:520.6,y:170.8,startPosition:323},0).wait(1).to({x:521.5,y:170.7,startPosition:324},0).wait(1).to({startPosition:325},0).wait(1).to({y:170.6,startPosition:326},0).wait(1).to({startPosition:327},0).wait(1).to({startPosition:328},0).wait(1).to({y:170.5,startPosition:329},0).wait(1).to({startPosition:330},0).wait(1).to({y:170.4,startPosition:331},0).wait(1).to({startPosition:332},0).wait(1).to({startPosition:333},0).wait(1).to({y:170.3,startPosition:334},0).wait(1).to({startPosition:335},0).wait(1).to({y:170.2,startPosition:336},0).wait(1).to({startPosition:337},0).wait(1).to({startPosition:338},0).wait(1).to({y:170.1,startPosition:339},0).wait(1).to({startPosition:340},0).wait(1).to({y:170,startPosition:341},0).wait(1).to({startPosition:342},0).wait(1).to({startPosition:343},0).wait(1).to({y:169.9,startPosition:344},0).wait(1).to({startPosition:345},0).wait(1).to({y:169.8,startPosition:346},0).wait(1).to({startPosition:347},0).wait(1).to({startPosition:348},0).wait(1).to({y:169.7,startPosition:349},0).wait(1).to({startPosition:350},0).wait(1).to({startPosition:351},0).wait(1).to({y:169.6,startPosition:352},0).wait(1).to({startPosition:353},0).wait(1).to({y:169.5,startPosition:354},0).wait(1).to({startPosition:355},0).wait(1).to({startPosition:356},0).wait(1).to({y:169.4,startPosition:357},0).wait(1).to({startPosition:358},0).wait(1).to({y:169.3,startPosition:359},0).wait(1).to({startPosition:360},0).wait(1).to({scaleX:2.86,scaleY:2.86,x:770.3,y:433.3,startPosition:361},0).wait(1).to({scaleX:4.72,scaleY:4.72,x:1019.2,y:697.4,startPosition:362},0).wait(1).to({scaleX:6.59,scaleY:6.59,x:1268,y:961.3,startPosition:363},0).wait(1).to({scaleX:8.45,scaleY:8.45,x:1516.9,y:1225.4,startPosition:364},0).wait(1).to({scaleX:10.31,scaleY:10.31,x:1765.7,y:1489.4,startPosition:365},0).wait(1).to({scaleX:12.18,scaleY:12.18,x:2014.5,y:1753.4,startPosition:366},0).wait(1).to({scaleX:14.04,scaleY:14.04,x:2263.4,y:2017.4,startPosition:367},0).wait(1).to({scaleX:15.9,scaleY:15.9,x:2512.2,y:2281.5,startPosition:368},0).wait(1).to({startPosition:369},0).wait(1).to({startPosition:370},0).wait(1).to({startPosition:371},0).wait(1).to({startPosition:372},0).wait(1).to({startPosition:373},0).wait(1).to({startPosition:374},0).wait(1).to({startPosition:375},0).wait(1).to({startPosition:376},0).wait(1).to({startPosition:377},0).wait(1).to({startPosition:378},0).wait(1).to({startPosition:379},0).wait(1).to({startPosition:380},0).wait(1).to({startPosition:381},0).wait(1).to({startPosition:382},0).wait(1).to({startPosition:383},0).wait(1).to({startPosition:384},0).wait(1).to({startPosition:385},0).wait(1).to({startPosition:386},0).wait(1).to({startPosition:387},0).wait(1).to({startPosition:388},0).wait(1).to({startPosition:389},0).wait(1).to({startPosition:390},0).wait(1).to({startPosition:391},0).wait(1).to({startPosition:392},0).wait(1).to({startPosition:393},0).wait(1).to({startPosition:394},0).wait(1).to({startPosition:395},0).wait(1).to({startPosition:396},0).wait(1).to({startPosition:397},0).wait(1).to({startPosition:398},0).wait(1).to({startPosition:399},0).wait(1).to({startPosition:400},0).wait(1).to({startPosition:401},0).wait(1).to({startPosition:402},0).wait(1).to({startPosition:403},0).wait(1).to({startPosition:404},0).wait(1).to({startPosition:405},0).wait(1).to({startPosition:406},0).wait(1).to({startPosition:407},0).wait(1).to({startPosition:408},0).wait(1).to({startPosition:409},0).wait(1).to({startPosition:410},0).wait(1).to({startPosition:411},0).wait(1).to({startPosition:412},0).wait(1).to({startPosition:413},0).wait(1).to({startPosition:414},0).wait(1).to({startPosition:415},0).wait(1).to({startPosition:416},0).wait(1).to({startPosition:417},0).wait(1).to({startPosition:418},0).wait(1).to({startPosition:419},0).wait(1).to({startPosition:420},0).wait(1).to({startPosition:421},0).wait(1).to({startPosition:422},0).wait(1).to({startPosition:423},0).wait(1).to({startPosition:424},0).wait(1).to({startPosition:425},0).wait(1).to({startPosition:426},0).wait(1).to({startPosition:427},0).wait(1).to({startPosition:428},0).wait(1).to({startPosition:429},0).wait(1).to({startPosition:430},0).wait(1).to({startPosition:431},0).wait(1).to({startPosition:432},0).wait(1).to({startPosition:433},0).wait(1).to({startPosition:434},0).wait(1).to({startPosition:435},0).wait(1).to({startPosition:436},0).wait(1).to({startPosition:437},0).wait(1).to({startPosition:438},0).wait(1).to({scaleX:13.77,scaleY:13.77,x:2227.9,y:1979.7,startPosition:439},0).wait(1).to({scaleX:11.64,scaleY:11.64,x:1943.4,y:1678,startPosition:440},0).wait(1).to({scaleX:9.52,scaleY:9.52,x:1659.5,y:1376.8,startPosition:441},0).wait(1).to({scaleX:7.39,scaleY:7.39,x:1374.7,y:1074.5,startPosition:442},0).wait(1).to({scaleX:5.26,scaleY:5.26,x:1090.3,y:772.8,startPosition:443},0).wait(1).to({scaleX:3.13,scaleY:3.13,x:806.3,y:471.6,startPosition:444},0).wait(1).to({scaleX:1,scaleY:1,x:521.5,y:169.3,startPosition:445},0).wait(1).to({startPosition:446},0).wait(1).to({startPosition:447},0).wait(1).to({startPosition:448},0).wait(1).to({startPosition:449},0).wait(1).to({startPosition:450},0).wait(1).to({startPosition:451},0).wait(1).to({startPosition:452},0).wait(1).to({startPosition:453},0).wait(1).to({startPosition:454},0).wait(1).to({startPosition:455},0).wait(1).to({startPosition:456},0).wait(1).to({startPosition:457},0).wait(1).to({startPosition:458},0).wait(1).to({startPosition:459},0).wait(1).to({startPosition:460},0).wait(1).to({startPosition:461},0).wait(1).to({startPosition:462},0).wait(1).to({startPosition:463},0).wait(1).to({startPosition:464},0).wait(1).to({startPosition:465},0).wait(1).to({startPosition:466},0).wait(1).to({startPosition:467},0).wait(1).to({startPosition:468},0).wait(1).to({startPosition:469},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).to({_off:true},1).wait(430));

	// BG_grad
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],0,-125,0,125).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(364,45,2.427,0.36);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(330).to({_off:false},0).to({_off:true},150).wait(430));

	// Scene3_bottom
	this.instance_7 = new lib.Scene3_Bottom("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(263.2,206.9,1,1,0,0,0,263.1,206.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regY:206.9,x:264,startPosition:1},0).wait(1).to({x:264.9,y:206.8,startPosition:2},0).wait(1).to({x:265.8,y:206.7,startPosition:3},0).wait(1).to({x:266.6,y:206.6,startPosition:4},0).wait(1).to({x:267.5,y:206.4,startPosition:5},0).wait(1).to({x:268.4,y:206.3,startPosition:6},0).wait(1).to({x:269.2,y:206.2,startPosition:7},0).wait(1).to({x:270.1,y:206.1,startPosition:8},0).wait(1).to({x:271,y:206,startPosition:9},0).wait(1).to({x:271.8,y:205.9,startPosition:10},0).wait(1).to({x:272.7,y:205.8,startPosition:11},0).wait(1).to({x:273.6,y:205.7,startPosition:12},0).wait(1).to({x:274.4,y:205.5,startPosition:13},0).wait(1).to({x:275.3,y:205.4,startPosition:14},0).wait(1).to({x:276.2,y:205.3,startPosition:15},0).wait(1).to({x:277,y:205.2,startPosition:16},0).wait(1).to({x:277.9,y:205.1,startPosition:17},0).wait(1).to({x:278.8,y:205,startPosition:18},0).wait(1).to({x:279.6,y:204.9,startPosition:19},0).wait(1).to({x:280.5,y:204.8,startPosition:20},0).wait(1).to({x:281.4,y:204.7,startPosition:21},0).wait(1).to({x:282.2,y:204.5,startPosition:22},0).wait(1).to({x:283.1,y:204.4,startPosition:23},0).wait(1).to({x:284,y:204.3,startPosition:24},0).wait(1).to({x:284.8,y:204.2,startPosition:25},0).wait(1).to({x:285.7,y:204.1,startPosition:26},0).wait(1).to({x:286.6,y:204,startPosition:27},0).wait(1).to({x:287.4,y:203.9,startPosition:28},0).wait(1).to({x:288.3,y:203.8,startPosition:29},0).wait(1).to({x:289.2,y:203.6,startPosition:30},0).wait(1).to({x:290,y:203.5,startPosition:31},0).wait(1).to({x:290.9,y:203.4,startPosition:32},0).wait(1).to({x:291.8,y:203.3,startPosition:33},0).wait(1).to({x:292.6,y:203.2,startPosition:34},0).wait(1).to({x:293.5,y:203.1,startPosition:35},0).wait(1).to({x:294.4,y:203,startPosition:36},0).wait(1).to({x:295.2,y:202.9,startPosition:37},0).wait(1).to({x:296.1,y:202.8,startPosition:38},0).wait(1).to({x:297,y:202.6,startPosition:39},0).wait(1).to({x:297.8,y:202.5,startPosition:40},0).wait(1).to({x:298.7,y:202.4,startPosition:41},0).wait(1).to({x:299.6,y:202.3,startPosition:42},0).wait(1).to({x:300.4,y:202.2,startPosition:43},0).wait(1).to({x:301.3,y:202.1,startPosition:44},0).wait(1).to({x:302.2,y:202,startPosition:45},0).wait(1).to({x:303,y:201.9,startPosition:46},0).wait(1).to({x:303.9,y:201.8,startPosition:47},0).wait(1).to({x:304.8,y:201.6,startPosition:48},0).wait(1).to({x:305.6,y:201.5,startPosition:49},0).wait(1).to({x:306.5,y:201.4,startPosition:50},0).wait(1).to({x:307.4,y:201.3,startPosition:51},0).wait(1).to({x:308.2,y:201.2,startPosition:52},0).wait(1).to({x:309.1,y:201.1,startPosition:53},0).wait(1).to({x:310,y:201,startPosition:54},0).wait(1).to({x:310.8,y:200.9,startPosition:55},0).wait(1).to({x:311.7,y:200.7,startPosition:56},0).wait(1).to({x:312.6,y:200.6,startPosition:57},0).wait(1).to({x:313.4,y:200.5,startPosition:58},0).wait(1).to({x:314.3,y:200.4,startPosition:59},0).wait(1).to({x:315.2,y:200.3,startPosition:60},0).wait(1).to({x:316,y:200.2,startPosition:61},0).wait(1).to({x:316.9,y:200.1,startPosition:62},0).wait(1).to({x:317.8,y:200,startPosition:63},0).wait(1).to({x:318.6,y:199.9,startPosition:64},0).wait(1).to({x:319.5,y:199.7,startPosition:65},0).wait(1).to({x:320.4,y:199.6,startPosition:66},0).wait(1).to({x:321.2,y:199.5,startPosition:67},0).wait(1).to({x:322.1,y:199.4,startPosition:68},0).wait(1).to({x:323,y:199.3,startPosition:69},0).wait(1).to({x:323.8,y:199.2,startPosition:70},0).wait(1).to({x:324.7,y:199.1,startPosition:71},0).wait(1).to({x:325.6,y:199,startPosition:72},0).wait(1).to({x:326.4,y:198.8,startPosition:73},0).wait(1).to({x:327.3,y:198.7,startPosition:74},0).wait(1).to({x:328.2,y:198.6,startPosition:75},0).wait(1).to({x:329,y:198.5,startPosition:76},0).wait(1).to({x:329.9,y:198.4,startPosition:77},0).wait(1).to({x:330.8,y:198.3,startPosition:78},0).wait(1).to({x:331.6,y:198.2,startPosition:79},0).wait(1).to({x:332.5,y:198.1,startPosition:80},0).wait(1).to({x:333.4,y:198,startPosition:81},0).wait(1).to({x:334.2,y:197.8,startPosition:82},0).wait(1).to({x:335.1,y:197.7,startPosition:83},0).wait(1).to({x:336,y:197.6,startPosition:84},0).wait(1).to({x:336.8,y:197.5,startPosition:85},0).wait(1).to({x:337.7,y:197.4,startPosition:86},0).wait(1).to({x:338.6,y:197.3,startPosition:87},0).wait(1).to({x:339.4,y:197.2,startPosition:88},0).wait(1).to({x:340.3,y:197.1,startPosition:89},0).wait(1).to({x:341.2,y:196.9,startPosition:90},0).wait(1).to({x:342,y:196.8,startPosition:91},0).wait(1).to({x:342.9,y:196.7,startPosition:92},0).wait(1).to({x:343.8,y:196.6,startPosition:93},0).wait(1).to({x:344.6,y:196.5,startPosition:94},0).wait(1).to({x:345.5,y:196.4,startPosition:95},0).wait(1).to({x:346.4,y:196.3,startPosition:96},0).wait(1).to({x:347.2,y:196.2,startPosition:97},0).wait(1).to({x:348.1,y:196.1,startPosition:98},0).wait(1).to({x:349,y:195.9,startPosition:99},0).wait(1).to({x:349.8,y:195.8,startPosition:100},0).wait(1).to({x:350.7,y:195.7,startPosition:101},0).wait(1).to({x:351.6,y:195.6,startPosition:102},0).wait(1).to({x:352.4,y:195.5,startPosition:103},0).wait(1).to({x:353.3,y:195.4,startPosition:104},0).wait(1).to({x:354.2,y:195.3,startPosition:105},0).wait(1).to({x:355,y:195.2,startPosition:106},0).wait(1).to({x:355.9,y:195,startPosition:107},0).wait(1).to({x:356.8,y:194.9,startPosition:108},0).wait(1).to({x:357.6,y:194.8,startPosition:109},0).wait(1).to({x:358.5,y:194.7,startPosition:110},0).wait(1).to({x:359.4,y:194.6,startPosition:111},0).wait(1).to({x:360.2,y:194.5,startPosition:112},0).wait(1).to({x:361.1,y:194.4,startPosition:113},0).wait(1).to({x:362,y:194.3,startPosition:114},0).wait(1).to({x:362.8,y:194.2,startPosition:115},0).wait(1).to({x:363.7,y:194,startPosition:116},0).wait(1).to({x:364.6,y:193.9,startPosition:117},0).wait(1).to({x:365.4,y:193.8,startPosition:118},0).wait(1).to({x:366.3,y:193.7,startPosition:119},0).wait(1).to({x:367.2,y:193.6,startPosition:120},0).wait(1).to({x:368,y:193.5,startPosition:121},0).wait(1).to({x:368.9,y:193.4,startPosition:122},0).wait(1).to({x:369.8,y:193.3,startPosition:123},0).wait(1).to({x:370.6,y:193.1,startPosition:124},0).wait(1).to({x:371.5,y:193,startPosition:125},0).wait(1).to({x:372.4,y:192.9,startPosition:126},0).wait(1).to({x:373.2,y:192.8,startPosition:127},0).wait(1).to({x:374.1,y:192.7,startPosition:128},0).wait(1).to({x:375,y:192.6,startPosition:129},0).wait(1).to({x:375.8,y:192.5,startPosition:130},0).wait(1).to({x:376.7,y:192.4,startPosition:131},0).wait(1).to({x:377.6,y:192.3,startPosition:132},0).wait(1).to({x:378.4,y:192.1,startPosition:133},0).wait(1).to({x:379.3,y:192,startPosition:134},0).wait(1).to({x:380.2,y:191.9,startPosition:135},0).wait(1).to({x:381,y:191.8,startPosition:136},0).wait(1).to({x:381.9,y:191.7,startPosition:137},0).wait(1).to({x:382.8,y:191.6,startPosition:138},0).wait(1).to({x:383.6,y:191.5,startPosition:139},0).wait(1).to({x:384.5,y:191.4,startPosition:140},0).wait(1).to({x:385.4,y:191.3,startPosition:141},0).wait(1).to({x:386.2,y:191.1,startPosition:142},0).wait(1).to({x:387.1,y:191,startPosition:143},0).wait(1).to({x:388,y:190.9,startPosition:144},0).wait(1).to({x:388.8,y:190.8,startPosition:145},0).wait(1).to({x:389.7,y:190.7,startPosition:146},0).wait(1).to({x:390.6,y:190.6,startPosition:147},0).wait(1).to({x:391.4,y:190.5,startPosition:148},0).wait(1).to({x:392.3,y:190.4,startPosition:149},0).wait(1).to({x:393.2,y:190.2,startPosition:150},0).wait(1).to({x:394,y:190.1,startPosition:151},0).wait(1).to({x:394.9,y:190,startPosition:152},0).wait(1).to({x:395.8,y:189.9,startPosition:153},0).wait(1).to({x:396.6,y:189.8,startPosition:154},0).wait(1).to({x:397.5,y:189.7,startPosition:155},0).wait(1).to({x:398.4,y:189.6,startPosition:156},0).wait(1).to({x:399.2,y:189.5,startPosition:157},0).wait(1).to({x:400.1,y:189.4,startPosition:158},0).wait(1).to({x:401,y:189.2,startPosition:159},0).wait(1).to({x:401.8,y:189.1,startPosition:160},0).wait(1).to({x:402.7,y:189,startPosition:161},0).wait(1).to({x:403.6,y:188.9,startPosition:162},0).wait(1).to({x:404.4,y:188.8,startPosition:163},0).wait(1).to({x:405.3,y:188.7,startPosition:164},0).wait(1).to({x:406.2,y:188.6,startPosition:165},0).wait(1).to({x:407,y:188.5,startPosition:166},0).wait(1).to({x:407.9,y:188.3,startPosition:167},0).wait(1).to({x:408.8,y:188.2,startPosition:168},0).wait(1).to({x:409.6,y:188.1,startPosition:169},0).wait(1).to({x:410.5,y:188,startPosition:170},0).wait(1).to({x:411.4,y:187.9,startPosition:171},0).wait(1).to({x:412.2,y:187.8,startPosition:172},0).wait(1).to({x:413.1,y:187.7,startPosition:173},0).wait(1).to({x:414,y:187.6,startPosition:174},0).wait(1).to({x:414.8,y:187.5,startPosition:175},0).wait(1).to({x:415.7,y:187.3,startPosition:176},0).wait(1).to({x:416.6,y:187.2,startPosition:177},0).wait(1).to({x:417.4,y:187.1,startPosition:178},0).wait(1).to({x:418.3,y:187,startPosition:179},0).wait(1).to({x:419.2,y:186.9,startPosition:180},0).wait(1).to({x:420,y:186.8,startPosition:181},0).wait(1).to({x:420.9,y:186.7,startPosition:182},0).wait(1).to({x:421.8,y:186.6,startPosition:183},0).wait(1).to({x:422.6,y:186.4,startPosition:184},0).wait(1).to({x:423.5,y:186.3,startPosition:185},0).wait(1).to({x:424.4,y:186.2,startPosition:186},0).wait(1).to({x:425.2,y:186.1,startPosition:187},0).wait(1).to({x:426.1,y:186,startPosition:188},0).wait(1).to({x:427,y:185.9,startPosition:189},0).wait(1).to({x:427.8,y:185.8,startPosition:190},0).wait(1).to({x:428.7,y:185.7,startPosition:191},0).wait(1).to({x:429.6,y:185.6,startPosition:192},0).wait(1).to({x:430.4,y:185.4,startPosition:193},0).wait(1).to({x:431.3,y:185.3,startPosition:194},0).wait(1).to({x:432.2,y:185.2,startPosition:195},0).wait(1).to({x:433,y:185.1,startPosition:196},0).wait(1).to({x:433.9,y:185,startPosition:197},0).wait(1).to({x:434.8,y:184.9,startPosition:198},0).wait(1).to({x:435.6,y:184.8,startPosition:199},0).wait(1).to({x:436.5,y:184.7,startPosition:200},0).wait(1).to({x:437.4,y:184.5,startPosition:201},0).wait(1).to({x:438.2,y:184.4,startPosition:202},0).wait(1).to({x:439.1,y:184.3,startPosition:203},0).wait(1).to({x:440,y:184.2,startPosition:204},0).wait(1).to({x:440.8,y:184.1,startPosition:205},0).wait(1).to({x:441.7,y:184,startPosition:206},0).wait(1).to({x:442.6,y:183.9,startPosition:207},0).wait(1).to({x:443.4,y:183.8,startPosition:208},0).wait(1).to({x:444.3,y:183.7,startPosition:209},0).wait(1).to({x:445.2,y:183.5,startPosition:210},0).wait(1).to({x:446,y:183.4,startPosition:211},0).wait(1).to({x:446.9,y:183.3,startPosition:212},0).wait(1).to({x:447.8,y:183.2,startPosition:213},0).wait(1).to({x:448.6,y:183.1,startPosition:214},0).wait(1).to({x:449.5,y:183,startPosition:215},0).wait(1).to({x:450.4,y:182.9,startPosition:216},0).wait(1).to({x:451.2,y:182.8,startPosition:217},0).wait(1).to({x:452.1,y:182.6,startPosition:218},0).wait(1).to({x:453,y:182.5,startPosition:219},0).wait(1).to({x:453.8,y:182.4,startPosition:220},0).wait(1).to({x:454.7,y:182.3,startPosition:221},0).wait(1).to({x:455.6,y:182.2,startPosition:222},0).wait(1).to({x:456.4,y:182.1,startPosition:223},0).wait(1).to({x:457.3,y:182,startPosition:224},0).wait(1).to({x:458.2,y:181.9,startPosition:225},0).wait(1).to({x:459,y:181.8,startPosition:226},0).wait(1).to({x:459.9,y:181.6,startPosition:227},0).wait(1).to({x:460.8,y:181.5,startPosition:228},0).wait(1).to({x:461.6,y:181.4,startPosition:229},0).wait(1).to({x:462.5,y:181.3,startPosition:230},0).wait(1).to({x:463.4,y:181.2,startPosition:231},0).wait(1).to({x:464.2,y:181.1,startPosition:232},0).wait(1).to({x:465.1,y:181,startPosition:233},0).wait(1).to({x:466,y:180.9,startPosition:234},0).wait(1).to({x:466.8,y:180.8,startPosition:235},0).wait(1).to({x:467.7,y:180.6,startPosition:236},0).wait(1).to({x:468.6,y:180.5,startPosition:237},0).wait(1).to({x:469.4,y:180.4,startPosition:238},0).wait(1).to({x:470.3,y:180.3,startPosition:239},0).wait(1).to({x:471.2,y:180.2,startPosition:240},0).wait(1).to({x:472,y:180.1,startPosition:241},0).wait(1).to({x:472.9,y:180,startPosition:242},0).wait(1).to({x:473.8,y:179.9,startPosition:243},0).wait(1).to({x:474.6,y:179.7,startPosition:244},0).wait(1).to({x:475.5,y:179.6,startPosition:245},0).wait(1).to({x:476.4,y:179.5,startPosition:246},0).wait(1).to({x:477.2,y:179.4,startPosition:247},0).wait(1).to({x:478.1,y:179.3,startPosition:248},0).wait(1).to({x:479,y:179.2,startPosition:249},0).wait(1).to({x:479.8,y:179.1,startPosition:250},0).wait(1).to({x:480.7,y:179,startPosition:251},0).wait(1).to({x:481.6,y:178.9,startPosition:252},0).wait(1).to({x:482.4,y:178.7,startPosition:253},0).wait(1).to({x:483.3,y:178.6,startPosition:254},0).wait(1).to({x:484.2,y:178.5,startPosition:255},0).wait(1).to({x:485,y:178.4,startPosition:256},0).wait(1).to({x:485.9,y:178.3,startPosition:257},0).wait(1).to({x:486.8,y:178.2,startPosition:258},0).wait(1).to({x:487.6,y:178.1,startPosition:259},0).wait(1).to({x:488.5,y:178,startPosition:260},0).wait(1).to({x:489.4,y:177.8,startPosition:261},0).wait(1).to({x:490.2,y:177.7,startPosition:262},0).wait(1).to({x:491.1,y:177.6,startPosition:263},0).wait(1).to({x:492,y:177.5,startPosition:264},0).wait(1).to({x:492.8,y:177.4,startPosition:265},0).wait(1).to({x:493.7,y:177.3,startPosition:266},0).wait(1).to({x:494.6,y:177.2,startPosition:267},0).wait(1).to({x:495.4,y:177.1,startPosition:268},0).wait(1).to({x:496.3,y:177,startPosition:269},0).wait(1).to({x:497.2,y:176.8,startPosition:270},0).wait(1).to({x:498,y:176.7,startPosition:271},0).wait(1).to({x:498.9,y:176.6,startPosition:272},0).wait(1).to({x:499.8,y:176.5,startPosition:273},0).wait(1).to({x:500.6,y:176.4,startPosition:274},0).wait(1).to({x:501.5,y:176.3,startPosition:275},0).wait(1).to({x:502.4,y:176.2,startPosition:276},0).wait(1).to({x:503.2,y:176.1,startPosition:277},0).wait(1).to({x:504.1,y:175.9,startPosition:278},0).wait(1).to({x:505,y:175.8,startPosition:279},0).wait(1).to({x:505.8,y:175.7,startPosition:280},0).wait(1).to({x:506.7,y:175.6,startPosition:281},0).wait(1).to({x:507.6,y:175.5,startPosition:282},0).wait(1).to({x:508.4,y:175.4,startPosition:283},0).wait(1).to({x:509.3,y:175.3,startPosition:284},0).wait(1).to({x:510.2,y:175.2,startPosition:285},0).wait(1).to({x:511,y:175.1,startPosition:286},0).wait(1).to({x:511.9,y:174.9,startPosition:287},0).wait(1).to({x:512.8,y:174.8,startPosition:288},0).wait(1).to({x:513.6,y:174.7,startPosition:289},0).wait(1).to({x:514.5,y:174.6,startPosition:290},0).wait(1).to({x:515.4,y:174.5,startPosition:291},0).wait(1).to({x:516.2,y:174.4,startPosition:292},0).wait(1).to({x:517.1,y:174.3,startPosition:293},0).wait(1).to({x:518,y:174.2,startPosition:294},0).wait(1).to({x:518.8,y:174,startPosition:295},0).wait(1).to({x:519.7,y:173.9,startPosition:296},0).wait(1).to({x:520.6,y:173.8,startPosition:297},0).wait(1).to({x:521.4,y:173.7,startPosition:298},0).wait(1).to({x:522.3,y:173.6,startPosition:299},0).wait(1).to({x:523.2,y:173.5,startPosition:300},0).wait(1).to({x:524,y:173.4,startPosition:301},0).wait(1).to({x:524.9,y:173.3,startPosition:302},0).wait(1).to({x:525.8,y:173.2,startPosition:303},0).wait(1).to({x:526.6,y:173,startPosition:304},0).wait(1).to({x:527.5,y:172.9,startPosition:305},0).wait(1).to({x:528.4,y:172.8,startPosition:306},0).wait(1).to({x:529.2,y:172.7,startPosition:307},0).wait(1).to({x:530.1,y:172.6,startPosition:308},0).wait(1).to({x:531,y:172.5,startPosition:309},0).wait(1).to({x:531.8,y:172.4,startPosition:310},0).wait(1).to({x:532.7,y:172.3,startPosition:311},0).wait(1).to({x:533.6,y:172.1,startPosition:312},0).wait(1).to({x:534.4,y:172,startPosition:313},0).wait(1).to({x:535.3,y:171.9,startPosition:314},0).wait(1).to({x:536.2,y:171.8,startPosition:315},0).wait(1).to({x:537,y:171.7,startPosition:316},0).wait(1).to({x:537.9,y:171.6,startPosition:317},0).wait(1).to({x:538.8,y:171.5,startPosition:318},0).wait(1).to({x:539.6,y:171.4,startPosition:319},0).wait(1).to({x:540.5,y:171.3,startPosition:320},0).wait(1).to({x:541.4,y:171.1,startPosition:321},0).wait(1).to({x:542.2,y:171,startPosition:322},0).wait(1).to({x:543.1,y:170.9,startPosition:323},0).wait(1).to({x:544,y:170.8,startPosition:324},0).wait(1).to({startPosition:325},0).wait(1).to({y:170.7,startPosition:326},0).wait(1).to({startPosition:327},0).wait(1).to({startPosition:328},0).wait(1).to({y:170.6,startPosition:329},0).wait(1).to({startPosition:330},0).wait(1).to({y:170.5,startPosition:331},0).wait(1).to({startPosition:332},0).wait(1).to({startPosition:333},0).wait(1).to({y:170.4,startPosition:334},0).wait(1).to({startPosition:335},0).wait(1).to({y:170.3,startPosition:336},0).wait(1).to({startPosition:337},0).wait(1).to({startPosition:338},0).wait(1).to({y:170.2,startPosition:339},0).wait(1).to({startPosition:340},0).wait(1).to({y:170.1,startPosition:341},0).wait(1).to({startPosition:342},0).wait(1).to({startPosition:343},0).wait(1).to({y:170,startPosition:344},0).wait(1).to({startPosition:345},0).wait(1).to({y:169.9,startPosition:346},0).wait(1).to({startPosition:347},0).wait(1).to({startPosition:348},0).wait(1).to({y:169.8,startPosition:349},0).wait(1).to({startPosition:350},0).wait(1).to({startPosition:351},0).wait(1).to({y:169.7,startPosition:352},0).wait(1).to({startPosition:353},0).wait(1).to({y:169.6,startPosition:354},0).wait(1).to({startPosition:355},0).wait(1).to({startPosition:356},0).wait(1).to({y:169.5,startPosition:357},0).wait(1).to({startPosition:358},0).wait(1).to({y:169.4,startPosition:359},0).wait(1).to({startPosition:360},0).wait(1).to({scaleX:2.86,scaleY:2.86,x:834.6,y:433.5,startPosition:361},0).wait(1).to({scaleX:4.72,scaleY:4.72,x:1125.4,y:697.6,startPosition:362},0).wait(1).to({scaleX:6.59,scaleY:6.59,x:1416.1,y:961.7,startPosition:363},0).wait(1).to({scaleX:8.45,scaleY:8.45,x:1706.8,y:1225.8,startPosition:364},0).wait(1).to({scaleX:10.31,scaleY:10.31,x:1997.4,y:1489.8,startPosition:365},0).wait(1).to({scaleX:12.18,scaleY:12.18,x:2288.1,y:1754,startPosition:366},0).wait(1).to({scaleX:14.04,scaleY:14.04,x:2578.8,y:2018,startPosition:367},0).wait(1).to({scaleX:15.9,scaleY:15.9,x:2869.6,y:2282.1,startPosition:368},0).wait(1).to({startPosition:369},0).wait(1).to({startPosition:370},0).wait(1).to({startPosition:371},0).wait(1).to({startPosition:372},0).wait(1).to({startPosition:373},0).wait(1).to({startPosition:374},0).wait(1).to({startPosition:375},0).wait(1).to({startPosition:376},0).wait(1).to({startPosition:377},0).wait(1).to({startPosition:378},0).wait(1).to({startPosition:379},0).wait(1).to({startPosition:380},0).wait(1).to({startPosition:381},0).wait(1).to({startPosition:382},0).wait(1).to({startPosition:383},0).wait(1).to({startPosition:384},0).wait(1).to({startPosition:385},0).wait(1).to({startPosition:386},0).wait(1).to({startPosition:387},0).wait(1).to({startPosition:388},0).wait(1).to({startPosition:389},0).wait(1).to({startPosition:390},0).wait(1).to({startPosition:391},0).wait(1).to({startPosition:392},0).wait(1).to({startPosition:393},0).wait(1).to({startPosition:394},0).wait(1).to({startPosition:395},0).wait(1).to({startPosition:396},0).wait(1).to({startPosition:397},0).wait(1).to({startPosition:398},0).wait(1).to({startPosition:399},0).wait(1).to({startPosition:400},0).wait(1).to({startPosition:401},0).wait(1).to({startPosition:402},0).wait(1).to({startPosition:403},0).wait(1).to({startPosition:404},0).wait(1).to({startPosition:405},0).wait(1).to({startPosition:406},0).wait(1).to({startPosition:407},0).wait(1).to({startPosition:408},0).wait(1).to({startPosition:409},0).wait(1).to({startPosition:410},0).wait(1).to({startPosition:411},0).wait(1).to({startPosition:412},0).wait(1).to({startPosition:413},0).wait(1).to({startPosition:414},0).wait(1).to({startPosition:415},0).wait(1).to({startPosition:416},0).wait(1).to({startPosition:417},0).wait(1).to({startPosition:418},0).wait(1).to({startPosition:419},0).wait(1).to({startPosition:420},0).wait(1).to({startPosition:421},0).wait(1).to({startPosition:422},0).wait(1).to({startPosition:423},0).wait(1).to({startPosition:424},0).wait(1).to({startPosition:425},0).wait(1).to({startPosition:426},0).wait(1).to({startPosition:427},0).wait(1).to({startPosition:428},0).wait(1).to({startPosition:429},0).wait(1).to({startPosition:430},0).wait(1).to({startPosition:431},0).wait(1).to({startPosition:432},0).wait(1).to({startPosition:433},0).wait(1).to({startPosition:434},0).wait(1).to({startPosition:435},0).wait(1).to({startPosition:436},0).wait(1).to({startPosition:437},0).wait(1).to({startPosition:438},0).wait(1).to({scaleX:13.77,scaleY:13.77,x:2537.3,y:1980.3,startPosition:439},0).wait(1).to({scaleX:11.64,scaleY:11.64,x:2205.1,y:1678.5,startPosition:440},0).wait(1).to({scaleX:9.52,scaleY:9.52,x:1873.2,y:1377,startPosition:441},0).wait(1).to({scaleX:7.39,scaleY:7.39,x:1540.7,y:1074.9,startPosition:442},0).wait(1).to({scaleX:5.26,scaleY:5.26,x:1208.4,y:773,startPosition:443},0).wait(1).to({scaleX:3.13,scaleY:3.13,x:876.5,y:471.5,startPosition:444},0).wait(1).to({scaleX:1,scaleY:1,x:544,y:169.4,startPosition:445},0).wait(1).to({startPosition:446},0).wait(1).to({startPosition:447},0).wait(1).to({startPosition:448},0).wait(1).to({startPosition:449},0).wait(1).to({startPosition:450},0).wait(1).to({startPosition:451},0).wait(1).to({startPosition:452},0).wait(1).to({startPosition:453},0).wait(1).to({startPosition:454},0).wait(1).to({startPosition:455},0).wait(1).to({startPosition:456},0).wait(1).to({startPosition:457},0).wait(1).to({startPosition:458},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).to({_off:true},1).wait(430));

	// Text3
	this.Text3_Container = new lib.Text3();
	this.Text3_Container.parent = this;
	this.Text3_Container.setTransform(226,160.3,1,1,0,0,0,150,72.5);
	this.Text3_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Text3_Container).wait(1).to({regX:242.8,regY:60.4,x:318.8,y:148.2},0).wait(228).to({regX:150,regY:72.5,x:322.4,y:90.6},0).wait(1).to({regX:242.8,regY:60.4,x:415.2,y:78.5,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:150,regY:72.5,x:322.4,y:90.6},0).wait(79).to({regX:242.8,regY:60.4,x:415.2,y:78.5,alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({regX:150,regY:72.5,x:226,y:160.3},0).to({_off:true},16).wait(580));

	// Scene2_Top
	this.instance_8 = new lib.Scene2_Top("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-22.3,122.7,1,1,0,0,0,-22.3,124.2);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).wait(1).to({regX:118.9,regY:-61.3,x:120.2,y:-63.6,startPosition:1},0).wait(1).to({x:121.5,y:-64.4,startPosition:2},0).wait(1).to({x:122.9,y:-65.2,startPosition:3},0).wait(1).to({x:124.2,y:-66,startPosition:4},0).wait(1).to({x:125.5,y:-66.9,startPosition:5},0).wait(1).to({x:126.8,y:-67.7,startPosition:6},0).wait(1).to({x:128.2,y:-68.5,startPosition:7},0).wait(1).to({x:129.5,y:-69.3,startPosition:8},0).wait(1).to({x:130.8,y:-70.2,startPosition:9},0).wait(1).to({x:132.1,y:-71,startPosition:10},0).wait(1).to({x:133.4,y:-71.8,startPosition:11},0).wait(1).to({x:134.8,y:-72.6,startPosition:12},0).wait(1).to({x:136.1,y:-73.5,startPosition:13},0).wait(1).to({x:137.4,y:-74.3,startPosition:14},0).wait(1).to({x:138.7,y:-75.1,startPosition:15},0).wait(1).to({x:140.1,y:-75.9,startPosition:16},0).wait(1).to({x:141.4,y:-76.8,startPosition:17},0).wait(1).to({x:142.7,y:-77.6,startPosition:18},0).wait(1).to({x:144,y:-78.4,startPosition:19},0).wait(1).to({x:145.3,y:-79.2,startPosition:20},0).wait(1).to({x:146.7,y:-80.1,startPosition:21},0).wait(1).to({x:148,y:-80.9,startPosition:22},0).wait(1).to({x:149.3,y:-81.7,startPosition:23},0).wait(1).to({x:150.6,y:-82.5,startPosition:24},0).wait(1).to({x:152,y:-83.3,startPosition:25},0).wait(1).to({x:153.3,y:-84.2,startPosition:26},0).wait(1).to({x:154.6,y:-85,startPosition:27},0).wait(1).to({x:155.9,y:-85.8,startPosition:28},0).wait(1).to({x:157.2,y:-86.6,startPosition:29},0).wait(1).to({x:158.6,y:-87.5,startPosition:30},0).wait(1).to({x:159.9,y:-88.3,startPosition:31},0).wait(1).to({x:161.2,y:-89.1,startPosition:32},0).wait(1).to({x:162.5,y:-89.9,startPosition:33},0).wait(1).to({x:163.9,y:-90.8,startPosition:34},0).wait(1).to({x:165.2,y:-91.6,startPosition:35},0).wait(1).to({x:166.5,y:-92.4,startPosition:36},0).wait(1).to({x:167.8,y:-93.2,startPosition:37},0).wait(1).to({x:169.1,y:-94.1,startPosition:38},0).wait(1).to({x:170.5,y:-94.9,startPosition:39},0).wait(1).to({x:171.8,y:-95.7,startPosition:40},0).wait(1).to({x:173.1,y:-96.5,startPosition:41},0).wait(1).to({x:174.4,y:-97.4,startPosition:42},0).wait(1).to({x:175.8,y:-98.2,startPosition:43},0).wait(1).to({x:177.1,y:-99,startPosition:44},0).wait(1).to({x:178.4,y:-99.8,startPosition:45},0).wait(1).to({x:179.7,y:-100.7,startPosition:46},0).wait(1).to({x:181,y:-101.5,startPosition:47},0).wait(1).to({x:182.4,y:-102.3,startPosition:48},0).wait(1).to({x:183.7,y:-103.1,startPosition:49},0).wait(1).to({x:185,y:-103.9,startPosition:50},0).wait(1).to({x:186.3,y:-104.8,startPosition:51},0).wait(1).to({x:187.7,y:-105.6,startPosition:52},0).wait(1).to({x:189,y:-106.4,startPosition:53},0).wait(1).to({x:190.3,y:-107.2,startPosition:54},0).wait(1).to({x:191.6,y:-108.1,startPosition:55},0).wait(1).to({x:192.9,y:-108.9,startPosition:56},0).wait(1).to({x:194.3,y:-109.7,startPosition:57},0).wait(1).to({x:195.6,y:-110.5,startPosition:58},0).wait(1).to({x:196.9,y:-111.4,startPosition:59},0).wait(1).to({x:198.2,y:-112.2,startPosition:60},0).wait(1).to({x:199.6,y:-113,startPosition:61},0).wait(1).to({x:200.9,y:-113.8,startPosition:62},0).wait(1).to({x:202.2,y:-114.7,startPosition:63},0).wait(1).to({x:203.5,y:-115.5,startPosition:64},0).wait(1).to({x:204.8,y:-116.3,startPosition:65},0).wait(1).to({x:206.2,y:-117.1,startPosition:66},0).wait(1).to({x:207.5,y:-118,startPosition:67},0).wait(1).to({x:208.8,y:-118.8,startPosition:68},0).wait(1).to({x:210.1,y:-119.6,startPosition:69},0).wait(1).to({x:211.4,y:-120.4,startPosition:70},0).wait(1).to({x:212.8,y:-121.3,startPosition:71},0).wait(1).to({x:214.1,y:-122.1,startPosition:72},0).wait(1).to({x:215.4,y:-122.9,startPosition:73},0).wait(1).to({x:216.7,y:-123.7,startPosition:74},0).wait(1).to({x:218.1,y:-124.5,startPosition:75},0).wait(1).to({x:219.4,y:-125.4,startPosition:76},0).wait(1).to({x:220.7,y:-126.2,startPosition:77},0).wait(1).to({x:222,y:-127,startPosition:78},0).wait(1).to({x:223.4,y:-127.8,startPosition:79},0).wait(1).to({x:224.7,y:-128.7,startPosition:80},0).wait(1).to({x:226,y:-129.5,startPosition:81},0).wait(1).to({x:227.3,y:-130.3,startPosition:82},0).wait(1).to({x:228.6,y:-131.1,startPosition:83},0).wait(1).to({x:230,y:-132,startPosition:84},0).wait(1).to({x:231.3,y:-132.8,startPosition:85},0).wait(1).to({x:232.6,y:-133.6,startPosition:86},0).wait(1).to({x:233.9,y:-134.4,startPosition:87},0).wait(1).to({x:235.2,y:-135.3,startPosition:88},0).wait(1).to({x:236.6,y:-136.1,startPosition:89},0).wait(1).to({x:237.9,y:-136.9,startPosition:90},0).wait(1).to({x:239.2,y:-137.7,startPosition:91},0).wait(1).to({x:240.5,y:-138.6,startPosition:92},0).wait(1).to({x:241.9,y:-139.4,startPosition:93},0).wait(1).to({x:243.2,y:-140.2,startPosition:94},0).wait(1).to({x:244.5,y:-141,startPosition:95},0).wait(1).to({x:245.8,y:-141.8,startPosition:96},0).wait(1).to({x:247.1,y:-142.7,startPosition:97},0).wait(1).to({x:248.5,y:-143.5,startPosition:98},0).wait(1).to({x:249.8,y:-144.3,startPosition:99},0).wait(1).to({x:251.1,y:-145.1,startPosition:100},0).wait(1).to({x:252.4,y:-146,startPosition:101},0).wait(1).to({x:253.8,y:-146.8,startPosition:102},0).wait(1).to({x:255.1,y:-147.6,startPosition:103},0).wait(1).to({x:256.4,y:-148.4,startPosition:104},0).wait(1).to({x:257.7,y:-149.3,startPosition:105},0).wait(1).to({x:259,y:-150.1,startPosition:106},0).wait(1).to({x:260.4,y:-150.9,startPosition:107},0).wait(1).to({x:261.7,y:-151.7,startPosition:108},0).wait(1).to({x:263,y:-152.6,startPosition:109},0).wait(1).to({x:264.3,y:-153.4,startPosition:110},0).wait(1).to({x:265.7,y:-154.2,startPosition:111},0).wait(1).to({x:267,y:-155,startPosition:112},0).wait(1).to({x:268.3,y:-155.9,startPosition:113},0).wait(1).to({x:269.6,y:-156.7,startPosition:114},0).wait(1).to({x:270.9,y:-157.5,startPosition:115},0).wait(1).to({x:272.3,y:-158.3,startPosition:116},0).wait(1).to({x:273.6,y:-159.2,startPosition:117},0).wait(1).to({x:274.9,y:-160,startPosition:118},0).wait(1).to({x:276.2,y:-160.8,startPosition:119},0).wait(1).to({x:277.6,y:-161.6,startPosition:120},0).wait(1).to({x:278.9,y:-162.4,startPosition:121},0).wait(1).to({x:280.2,y:-163.3,startPosition:122},0).wait(1).to({x:281.5,y:-164.1,startPosition:123},0).wait(1).to({x:282.8,y:-164.9,startPosition:124},0).wait(1).to({x:284.2,y:-165.7,startPosition:125},0).wait(1).to({x:285.5,y:-166.6,startPosition:126},0).wait(1).to({x:286.8,y:-167.4,startPosition:127},0).wait(1).to({x:288.1,y:-168.2,startPosition:128},0).wait(1).to({x:289.5,y:-169,startPosition:129},0).wait(1).to({x:290.8,y:-169.9,startPosition:130},0).wait(1).to({x:292.1,y:-170.7,startPosition:131},0).wait(1).to({x:293.4,y:-171.5,startPosition:132},0).wait(1).to({x:294.7,y:-172.3,startPosition:133},0).wait(1).to({x:296.1,y:-173.2,startPosition:134},0).wait(1).to({x:297.4,y:-174,startPosition:135},0).wait(1).to({x:298.7,y:-174.8,startPosition:136},0).wait(1).to({x:300,y:-175.6,startPosition:137},0).wait(1).to({x:301.4,y:-176.5,startPosition:138},0).wait(1).to({x:302.7,y:-177.3,startPosition:139},0).wait(1).to({x:304,y:-178.1,startPosition:140},0).wait(1).to({x:305.3,y:-178.9,startPosition:141},0).wait(1).to({x:306.6,y:-179.8,startPosition:142},0).wait(1).to({x:308,y:-180.6,startPosition:143},0).wait(1).to({x:309.3,y:-181.4,startPosition:144},0).wait(1).to({x:310.6,y:-182.2,startPosition:145},0).wait(1).to({x:311.9,y:-183,startPosition:146},0).wait(1).to({x:313.3,y:-183.9,startPosition:147},0).wait(1).to({x:314.6,y:-184.7,startPosition:148},0).wait(1).to({x:315.9,y:-185.5,startPosition:149},0).wait(1).to({x:317.2,y:-186.3,startPosition:150},0).wait(1).to({x:318.5,y:-187.2,startPosition:151},0).wait(1).to({x:319.9,y:-188,startPosition:152},0).wait(1).to({x:321.2,y:-188.8,startPosition:153},0).wait(1).to({x:322.5,y:-189.6,startPosition:154},0).wait(1).to({x:323.8,y:-190.5,startPosition:155},0).wait(1).to({x:325.2,y:-191.3,startPosition:156},0).wait(1).to({x:326.5,y:-192.1,startPosition:157},0).wait(1).to({x:327.8,y:-192.9,startPosition:158},0).wait(1).to({x:329.1,y:-193.8,startPosition:159},0).wait(1).to({x:330.4,y:-194.6,startPosition:160},0).wait(1).to({x:331.8,y:-195.4,startPosition:161},0).wait(1).to({x:333.1,y:-196.2,startPosition:162},0).wait(1).to({x:334.4,y:-197.1,startPosition:163},0).wait(1).to({x:335.7,y:-197.9,startPosition:164},0).wait(1).to({x:337.1,y:-198.7,startPosition:165},0).wait(1).to({x:338.4,y:-199.5,startPosition:166},0).wait(1).to({x:339.7,y:-200.4,startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({scaleX:3.6,scaleY:3.6,x:-1.8,y:-813.5,startPosition:200},0).wait(1).to({scaleX:6.21,scaleY:6.21,x:-343.4,y:-1426.7,startPosition:201},0).wait(1).to({scaleX:8.81,scaleY:8.81,x:-684.9,y:-2039.8,startPosition:202},0).wait(1).to({scaleX:11.41,scaleY:11.41,x:-1026.5,y:-2653,startPosition:203},0).wait(1).to({scaleX:14.01,scaleY:14.01,x:-1368.1,y:-3266.2,startPosition:204},0).wait(1).to({scaleX:16.62,scaleY:16.62,x:-1709.6,y:-3879.3,startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({scaleX:14.01,scaleY:14.01,x:-1368.1,y:-3266.2,startPosition:289},0).wait(1).to({scaleX:11.41,scaleY:11.41,x:-1026.5,y:-2653,startPosition:290},0).wait(1).to({scaleX:8.81,scaleY:8.81,x:-684.9,y:-2039.8,startPosition:291},0).wait(1).to({scaleX:6.21,scaleY:6.21,x:-343.4,y:-1426.7,startPosition:292},0).wait(1).to({scaleX:3.6,scaleY:3.6,x:-1.8,y:-813.5,startPosition:293},0).wait(1).to({scaleX:1,scaleY:1,x:339.7,y:-200.4,startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).to({_off:true},1).wait(580));

	// BG_grad
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.1,-45,-0.1,45).s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_2.setTransform(364,45);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(187).to({_off:false},0).to({_off:true},143).wait(580));

	// Scene2_Bottom
	this.instance_9 = new lib.Scene2_Bottom("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(247.4,-115.3,1,1,0,0,0,247.4,-113.9);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).wait(1).to({x:248.7,y:-116.1,startPosition:1},0).wait(1).to({x:250,y:-116.9,startPosition:2},0).wait(1).to({x:251.4,y:-117.8,startPosition:3},0).wait(1).to({x:252.7,y:-118.6,startPosition:4},0).wait(1).to({x:254,y:-119.4,startPosition:5},0).wait(1).to({x:255.3,y:-120.2,startPosition:6},0).wait(1).to({x:256.7,y:-121.1,startPosition:7},0).wait(1).to({x:258,y:-121.9,startPosition:8},0).wait(1).to({x:259.3,y:-122.7,startPosition:9},0).wait(1).to({x:260.6,y:-123.5,startPosition:10},0).wait(1).to({x:261.9,y:-124.4,startPosition:11},0).wait(1).to({x:263.3,y:-125.2,startPosition:12},0).wait(1).to({x:264.6,y:-126,startPosition:13},0).wait(1).to({x:265.9,y:-126.8,startPosition:14},0).wait(1).to({x:267.2,y:-127.7,startPosition:15},0).wait(1).to({x:268.6,y:-128.5,startPosition:16},0).wait(1).to({x:269.9,y:-129.3,startPosition:17},0).wait(1).to({x:271.2,y:-130.1,startPosition:18},0).wait(1).to({x:272.5,y:-131,startPosition:19},0).wait(1).to({x:273.8,y:-131.8,startPosition:20},0).wait(1).to({x:275.2,y:-132.6,startPosition:21},0).wait(1).to({x:276.5,y:-133.4,startPosition:22},0).wait(1).to({x:277.8,y:-134.3,startPosition:23},0).wait(1).to({x:279.1,y:-135.1,startPosition:24},0).wait(1).to({x:280.5,y:-135.9,startPosition:25},0).wait(1).to({x:281.8,y:-136.7,startPosition:26},0).wait(1).to({x:283.1,y:-137.5,startPosition:27},0).wait(1).to({x:284.4,y:-138.4,startPosition:28},0).wait(1).to({x:285.7,y:-139.2,startPosition:29},0).wait(1).to({x:287.1,y:-140,startPosition:30},0).wait(1).to({x:288.4,y:-140.8,startPosition:31},0).wait(1).to({x:289.7,y:-141.7,startPosition:32},0).wait(1).to({x:291,y:-142.5,startPosition:33},0).wait(1).to({x:292.4,y:-143.3,startPosition:34},0).wait(1).to({x:293.7,y:-144.1,startPosition:35},0).wait(1).to({x:295,y:-145,startPosition:36},0).wait(1).to({x:296.3,y:-145.8,startPosition:37},0).wait(1).to({x:297.6,y:-146.6,startPosition:38},0).wait(1).to({x:299,y:-147.4,startPosition:39},0).wait(1).to({x:300.3,y:-148.3,startPosition:40},0).wait(1).to({x:301.6,y:-149.1,startPosition:41},0).wait(1).to({x:302.9,y:-149.9,startPosition:42},0).wait(1).to({x:304.3,y:-150.7,startPosition:43},0).wait(1).to({x:305.6,y:-151.6,startPosition:44},0).wait(1).to({x:306.9,y:-152.4,startPosition:45},0).wait(1).to({x:308.2,y:-153.2,startPosition:46},0).wait(1).to({x:309.5,y:-154,startPosition:47},0).wait(1).to({x:310.9,y:-154.8,startPosition:48},0).wait(1).to({x:312.2,y:-155.7,startPosition:49},0).wait(1).to({x:313.5,y:-156.5,startPosition:50},0).wait(1).to({x:314.8,y:-157.3,startPosition:51},0).wait(1).to({x:316.2,y:-158.1,startPosition:52},0).wait(1).to({x:317.5,y:-159,startPosition:53},0).wait(1).to({x:318.8,y:-159.8,startPosition:54},0).wait(1).to({x:320.1,y:-160.6,startPosition:55},0).wait(1).to({x:321.4,y:-161.4,startPosition:56},0).wait(1).to({x:322.8,y:-162.3,startPosition:57},0).wait(1).to({x:324.1,y:-163.1,startPosition:58},0).wait(1).to({x:325.4,y:-163.9,startPosition:59},0).wait(1).to({x:326.7,y:-164.7,startPosition:60},0).wait(1).to({x:328.1,y:-165.6,startPosition:61},0).wait(1).to({x:329.4,y:-166.4,startPosition:62},0).wait(1).to({x:330.7,y:-167.2,startPosition:63},0).wait(1).to({x:332,y:-168,startPosition:64},0).wait(1).to({x:333.3,y:-168.9,startPosition:65},0).wait(1).to({x:334.7,y:-169.7,startPosition:66},0).wait(1).to({x:336,y:-170.5,startPosition:67},0).wait(1).to({x:337.3,y:-171.3,startPosition:68},0).wait(1).to({x:338.6,y:-172.2,startPosition:69},0).wait(1).to({x:339.9,y:-173,startPosition:70},0).wait(1).to({x:341.3,y:-173.8,startPosition:71},0).wait(1).to({x:342.6,y:-174.6,startPosition:72},0).wait(1).to({x:343.9,y:-175.4,startPosition:73},0).wait(1).to({x:345.2,y:-176.3,startPosition:74},0).wait(1).to({x:346.6,y:-177.1,startPosition:75},0).wait(1).to({x:347.9,y:-177.9,startPosition:76},0).wait(1).to({x:349.2,y:-178.7,startPosition:77},0).wait(1).to({x:350.5,y:-179.6,startPosition:78},0).wait(1).to({x:351.9,y:-180.4,startPosition:79},0).wait(1).to({x:353.2,y:-181.2,startPosition:80},0).wait(1).to({x:354.5,y:-182,startPosition:81},0).wait(1).to({x:355.8,y:-182.9,startPosition:82},0).wait(1).to({x:357.1,y:-183.7,startPosition:83},0).wait(1).to({x:358.5,y:-184.5,startPosition:84},0).wait(1).to({x:359.8,y:-185.3,startPosition:85},0).wait(1).to({x:361.1,y:-186.2,startPosition:86},0).wait(1).to({x:362.4,y:-187,startPosition:87},0).wait(1).to({x:363.7,y:-187.8,startPosition:88},0).wait(1).to({x:365.1,y:-188.6,startPosition:89},0).wait(1).to({x:366.4,y:-189.5,startPosition:90},0).wait(1).to({x:367.7,y:-190.3,startPosition:91},0).wait(1).to({x:369,y:-191.1,startPosition:92},0).wait(1).to({x:370.4,y:-191.9,startPosition:93},0).wait(1).to({x:371.7,y:-192.8,startPosition:94},0).wait(1).to({x:373,y:-193.6,startPosition:95},0).wait(1).to({x:374.3,y:-194.4,startPosition:96},0).wait(1).to({x:375.6,y:-195.2,startPosition:97},0).wait(1).to({x:377,y:-196,startPosition:98},0).wait(1).to({x:378.3,y:-196.9,startPosition:99},0).wait(1).to({x:379.6,y:-197.7,startPosition:100},0).wait(1).to({x:380.9,y:-198.5,startPosition:101},0).wait(1).to({x:382.3,y:-199.3,startPosition:102},0).wait(1).to({x:383.6,y:-200.2,startPosition:103},0).wait(1).to({x:384.9,y:-201,startPosition:104},0).wait(1).to({x:386.2,y:-201.8,startPosition:105},0).wait(1).to({x:387.5,y:-202.6,startPosition:106},0).wait(1).to({x:388.9,y:-203.5,startPosition:107},0).wait(1).to({x:390.2,y:-204.3,startPosition:108},0).wait(1).to({x:391.5,y:-205.1,startPosition:109},0).wait(1).to({x:392.8,y:-205.9,startPosition:110},0).wait(1).to({x:394.2,y:-206.8,startPosition:111},0).wait(1).to({x:395.5,y:-207.6,startPosition:112},0).wait(1).to({x:396.8,y:-208.4,startPosition:113},0).wait(1).to({x:398.1,y:-209.2,startPosition:114},0).wait(1).to({x:399.4,y:-210.1,startPosition:115},0).wait(1).to({x:400.8,y:-210.9,startPosition:116},0).wait(1).to({x:402.1,y:-211.7,startPosition:117},0).wait(1).to({x:403.4,y:-212.5,startPosition:118},0).wait(1).to({x:404.7,y:-213.3,startPosition:119},0).wait(1).to({x:406.1,y:-214.2,startPosition:120},0).wait(1).to({x:407.4,y:-215,startPosition:121},0).wait(1).to({x:408.7,y:-215.8,startPosition:122},0).wait(1).to({x:410,y:-216.6,startPosition:123},0).wait(1).to({x:411.3,y:-217.5,startPosition:124},0).wait(1).to({x:412.7,y:-218.3,startPosition:125},0).wait(1).to({x:414,y:-219.1,startPosition:126},0).wait(1).to({x:415.3,y:-219.9,startPosition:127},0).wait(1).to({x:416.6,y:-220.8,startPosition:128},0).wait(1).to({x:418,y:-221.6,startPosition:129},0).wait(1).to({x:419.3,y:-222.4,startPosition:130},0).wait(1).to({x:420.6,y:-223.2,startPosition:131},0).wait(1).to({x:421.9,y:-224.1,startPosition:132},0).wait(1).to({x:423.2,y:-224.9,startPosition:133},0).wait(1).to({x:424.6,y:-225.7,startPosition:134},0).wait(1).to({x:425.9,y:-226.5,startPosition:135},0).wait(1).to({x:427.2,y:-227.4,startPosition:136},0).wait(1).to({x:428.5,y:-228.2,startPosition:137},0).wait(1).to({x:429.9,y:-229,startPosition:138},0).wait(1).to({x:431.2,y:-229.8,startPosition:139},0).wait(1).to({x:432.5,y:-230.7,startPosition:140},0).wait(1).to({x:433.8,y:-231.5,startPosition:141},0).wait(1).to({x:435.1,y:-232.3,startPosition:142},0).wait(1).to({x:436.5,y:-233.1,startPosition:143},0).wait(1).to({x:437.8,y:-233.9,startPosition:144},0).wait(1).to({x:439.1,y:-234.8,startPosition:145},0).wait(1).to({x:440.4,y:-235.6,startPosition:146},0).wait(1).to({x:441.8,y:-236.4,startPosition:147},0).wait(1).to({x:443.1,y:-237.2,startPosition:148},0).wait(1).to({x:444.4,y:-238.1,startPosition:149},0).wait(1).to({x:445.7,y:-238.9,startPosition:150},0).wait(1).to({x:447,y:-239.7,startPosition:151},0).wait(1).to({x:448.4,y:-240.5,startPosition:152},0).wait(1).to({x:449.7,y:-241.4,startPosition:153},0).wait(1).to({x:451,y:-242.2,startPosition:154},0).wait(1).to({x:452.3,y:-243,startPosition:155},0).wait(1).to({x:453.7,y:-243.8,startPosition:156},0).wait(1).to({x:455,y:-244.7,startPosition:157},0).wait(1).to({x:456.3,y:-245.5,startPosition:158},0).wait(1).to({x:457.6,y:-246.3,startPosition:159},0).wait(1).to({x:458.9,y:-247.1,startPosition:160},0).wait(1).to({x:460.3,y:-248,startPosition:161},0).wait(1).to({x:461.6,y:-248.8,startPosition:162},0).wait(1).to({x:462.9,y:-249.6,startPosition:163},0).wait(1).to({x:464.2,y:-250.4,startPosition:164},0).wait(1).to({x:465.6,y:-251.3,startPosition:165},0).wait(1).to({x:466.9,y:-252.1,startPosition:166},0).wait(1).to({x:468.2,y:-252.9,startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({scaleX:3.6,scaleY:3.6,x:461.2,y:-1002.8,startPosition:200},0).wait(1).to({scaleX:6.21,scaleY:6.21,x:454.1,y:-1752.8,startPosition:201},0).wait(1).to({scaleX:8.81,scaleY:8.81,x:447.1,y:-2502.7,startPosition:202},0).wait(1).to({scaleX:11.41,scaleY:11.41,x:440,y:-3252.6,startPosition:203},0).wait(1).to({scaleX:14.01,scaleY:14.01,x:432.9,y:-4002.6,startPosition:204},0).wait(1).to({scaleX:16.62,scaleY:16.62,x:425.9,y:-4752.5,startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({scaleX:14.01,scaleY:14.01,x:432.9,y:-4002.6,startPosition:289},0).wait(1).to({scaleX:11.41,scaleY:11.41,x:440,y:-3252.6,startPosition:290},0).wait(1).to({scaleX:8.81,scaleY:8.81,x:447.1,y:-2502.7,startPosition:291},0).wait(1).to({scaleX:6.21,scaleY:6.21,x:454.1,y:-1752.8,startPosition:292},0).wait(1).to({scaleX:3.6,scaleY:3.6,x:461.2,y:-1002.8,startPosition:293},0).wait(1).to({scaleX:1,scaleY:1,x:468.2,y:-252.9,startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).to({_off:true},1).wait(580));

	// Text2
	this.Text2_Container = new lib.Text2();
	this.Text2_Container.parent = this;
	this.Text2_Container.setTransform(170,147,1,1,0,0,0,150,72.5);
	this.Text2_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Text2_Container).wait(1).to({regX:186,x:206},0).wait(84).to({regX:150,x:300,y:90.6},0).wait(1).to({regX:186,x:336,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({regX:150,x:300},0).wait(72).to({regX:186,x:336,alpha:0.5},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(746));

	// TextStart
	this.TextStart_Container = new lib.Textstart();
	this.TextStart_Container.parent = this;
	this.TextStart_Container.setTransform(275,51.4,1,1,0,0,0,150,29);
	this.TextStart_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.TextStart_Container).wait(1).to({regX:102,x:227,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({regX:150,x:275},0).to({_off:true},73).wait(824));

	// Scene1_Top
	this.instance_10 = new lib.Scene1_Top("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(553.6,232.2,0.999,0.999,15,0,0,200.3,274);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:176.2,regY:280.5,scaleX:1,scaleY:1,rotation:15.1,x:528.6,y:232.3,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({scaleX:3.45,scaleY:3.45,x:750.5,y:672.4,startPosition:80},0).wait(1).to({scaleX:5.9,scaleY:5.9,x:972.4,y:1112.4,startPosition:81},0).wait(1).to({scaleX:8.34,scaleY:8.34,x:1194.3,y:1552.4,startPosition:82},0).wait(1).to({scaleX:10.79,scaleY:10.79,x:1416.1,y:1992.5,startPosition:83},0).wait(1).to({scaleX:13.24,scaleY:13.24,x:1638,y:2432.6,startPosition:84},0).wait(1).to({scaleX:15.69,scaleY:15.69,x:1859.9,y:2872.7,startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({scaleX:13.24,scaleY:13.24,x:1638,y:2432.6,startPosition:164},0).wait(1).to({scaleX:10.79,scaleY:10.79,x:1416.1,y:1992.5,startPosition:165},0).wait(1).to({scaleX:8.34,scaleY:8.34,x:1194.3,y:1552.4,startPosition:166},0).wait(1).to({scaleX:5.9,scaleY:5.9,x:972.4,y:1112.4,startPosition:167},0).wait(1).to({scaleX:3.45,scaleY:3.45,x:750.5,y:672.4,startPosition:168},0).wait(1).to({scaleX:1,scaleY:1,x:528.6,y:232.3,startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).to({_off:true},1).wait(723));

	// BG_grad
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.1,-45,-0.1,45).s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape_3.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},187).wait(723));

	// Scene1_Bottom
	this.instance_11 = new lib.Scene1_Bottom("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(705.5,350.9,0.999,0.999,15,0,0,377.9,349.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:377.5,regY:354.9,scaleX:1,scaleY:1,rotation:15.1,x:703.6,y:356.4,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({scaleX:3.45,scaleY:3.45,x:1350.6,y:1101.1,startPosition:80},0).wait(1).to({scaleX:5.9,scaleY:5.9,x:1997.7,y:1845.9,startPosition:81},0).wait(1).to({scaleX:8.34,scaleY:8.34,x:2644.8,y:2590.6,startPosition:82},0).wait(1).to({scaleX:10.79,scaleY:10.79,x:3291.8,y:3335.3,startPosition:83},0).wait(1).to({scaleX:13.24,scaleY:13.24,x:3938.8,y:4080,startPosition:84},0).wait(1).to({scaleX:15.69,scaleY:15.69,x:4585.9,y:4824.8,startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({scaleX:13.24,scaleY:13.24,x:3938.8,y:4080,startPosition:164},0).wait(1).to({scaleX:10.79,scaleY:10.79,x:3291.8,y:3335.3,startPosition:165},0).wait(1).to({scaleX:8.34,scaleY:8.34,x:2644.8,y:2590.6,startPosition:166},0).wait(1).to({scaleX:5.9,scaleY:5.9,x:1997.7,y:1845.9,startPosition:167},0).wait(1).to({scaleX:3.45,scaleY:3.45,x:1350.6,y:1101.1,startPosition:168},0).wait(1).to({scaleX:1,scaleY:1,x:703.6,y:356.4,startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).to({_off:true},1).wait(723));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,1173.8,693.6);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 30,
	color: "#2C94A7",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;