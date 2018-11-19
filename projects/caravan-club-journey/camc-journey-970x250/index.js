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
	this.locationSubTitleText = new cjs.Text("Lake District", "20px 'FS Elliot'", "#FFFFFF");
	this.locationSubTitleText.name = "locationSubTitleText";
	this.locationSubTitleText.lineHeight = 23;
	this.locationSubTitleText.lineWidth = 314;
	this.locationSubTitleText.parent = this;
	this.locationSubTitleText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.locationSubTitleText).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_region, new cjs.Rectangle(0,0,318,46.3), null);


(lib.txt_location = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location
	this.locationTitleText = new cjs.Text("Derwent Water", "36px 'FS Elliot'", "#FFFFFF");
	this.locationTitleText.name = "locationTitleText";
	this.locationTitleText.lineHeight = 39;
	this.locationTitleText.lineWidth = 600;
	this.locationTitleText.parent = this;
	this.locationTitleText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.locationTitleText).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_location, new cjs.Rectangle(0,0,257.9,40.1), null);


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
	this.Text3 = new cjs.Text("Get more out of every trip with Caravan and Motorhome Club membership", "32px 'FS Elliot'", "#006070");
	this.Text3.name = "Text3";
	this.Text3.lineHeight = 35;
	this.Text3.lineWidth = 496;
	this.Text3.parent = this;
	this.Text3.setTransform(18.6,43.2);

	this.timeline.addTween(cjs.Tween.get(this.Text3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text3, new cjs.Rectangle(16.6,41.2,500.3,141), null);


(lib.Text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Text2 = new cjs.Text("Whether you own a Motorhome or a Caravan", "32px 'FS Elliot'", "#006070");
	this.Text2.name = "Text2";
	this.Text2.lineHeight = 35;
	this.Text2.lineWidth = 458;
	this.Text2.parent = this;
	this.Text2.setTransform(7.2,47.9);

	this.timeline.addTween(cjs.Tween.get(this.Text2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text2, new cjs.Rectangle(5.2,45.9,462.3,145), null);


(lib.Textstart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.TextStart = new cjs.Text("Wherever your trip\ntakes you…", "24px 'FS Elliot'", "#FFFFFF");
	this.TextStart.name = "TextStart";
	this.TextStart.lineHeight = 27;
	this.TextStart.lineWidth = 221;
	this.TextStart.parent = this;
	this.TextStart.setTransform(7.2,2);

	this.timeline.addTween(cjs.Tween.get(this.TextStart).wait(1));

}).prototype = getMCSymbolPrototype(lib.Textstart, new cjs.Rectangle(5.2,0,225.5,130.2), null);


(lib.Textend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.TextEnd = new cjs.Text("Exclusive deals and money-saving offers – all for just £51/year*", "18px 'FS Elliot'", "#FFFFFF");
	this.TextEnd.name = "TextEnd";
	this.TextEnd.lineHeight = 21;
	this.TextEnd.lineWidth = 284;
	this.TextEnd.parent = this;
	this.TextEnd.setTransform(-255.4,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.TextEnd).wait(1));

}).prototype = getMCSymbolPrototype(lib.Textend, new cjs.Rectangle(-257.4,-11.5,288.2,82), null);


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


(lib.grad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#006070","rgba(44,148,167,0)"],[0,1],0,125,0,-124.9).s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.grad, new cjs.Rectangle(0,0,300,250), null);


(lib.button_end = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.cta_text = new cjs.Text("JOIN TODAY", "bold 13px 'FS Elliot'", "#FFFFFF");
	this.cta_text.name = "cta_text";
	this.cta_text.textAlign = "center";
	this.cta_text.lineHeight = 16;
	this.cta_text.lineWidth = 103;
	this.cta_text.parent = this;
	this.cta_text.setTransform(-522.8,74.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E18C36").s().p("An1DIQghAAAAgqIAAk9QAAgHABgFQAFgcAbAAIPtAAQAfAAAAAqIAAE7QAAANgDAJQgHAUgXAAg");
	this.shape.setTransform(-522.8,82);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.cta_text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.button_end, new cjs.Rectangle(-576.3,62,107,40), null);


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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:12.8,y:1270.4}).wait(54).to({graphics:null,x:0,y:0}).wait(14).to({graphics:mask_graphics_68,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_69,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_70,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_71,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_72,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_73,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_74,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_75,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_76,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_77,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_78,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_79,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_80,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_81,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_82,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_83,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_84,x:2564.8,y:461.2}).wait(1).to({graphics:mask_graphics_85,x:2332.2,y:432}).wait(138));

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
	var mask_graphics_450 = new cjs.Graphics().p("AOFNyIESv5IQQEXIkRP6g");
	var mask_graphics_451 = new cjs.Graphics().p("AKfNGIEixAIUsFgIkiRCg");
	var mask_graphics_452 = new cjs.Graphics().p("AHBMdIEyyGIY+GnIkzSGg");
	var mask_graphics_453 = new cjs.Graphics().p("ADqL2IFDzIIdFHoIlCTJg");
	var mask_graphics_454 = new cjs.Graphics().p("AAcLQIFQ0HMAhEAIoIlQUIg");
	var mask_graphics_455 = new cjs.Graphics().p("AiqKtIFe1FMAk5AJkIlfVGg");
	var mask_graphics_456 = new cjs.Graphics().p("AlpKMIFr2BMAolAKeIlsWAg");
	var mask_graphics_457 = new cjs.Graphics().p("AogJsIF425MAsGALTIl4W6g");
	var mask_graphics_458 = new cjs.Graphics().p("ArPJPIGD3wMAvfAMGImDXwg");
	var mask_graphics_459 = new cjs.Graphics().p("At3IzIGO4kMAyvAM2ImOYkg");
	var mask_graphics_460 = new cjs.Graphics().p("AwXIZIGZ5WMA10ANkImYZVg");
	var mask_graphics_461 = new cjs.Graphics().p("AyvIAIGj6FMA4wAOOImiaFg");
	var mask_graphics_462 = new cjs.Graphics().p("A0/HpIGr6yMA7kAO2Imrayg");
	var mask_graphics_463 = new cjs.Graphics().p("A3HHUIGz7cMA+NAPbIm0bcg");
	var mask_graphics_464 = new cjs.Graphics().p("A5IHAIG88EMBAsAP+Im8cEg");
	var mask_graphics_465 = new cjs.Graphics().p("A7BGtIHD8qMBDCAQfInCcqg");
	var mask_graphics_466 = new cjs.Graphics().p("A8yGcIHK9NMBFPAQ9InKdNg");
	var mask_graphics_467 = new cjs.Graphics().p("A+bGMIHQ9uMBHRARZInQdug");
	var mask_graphics_468 = new cjs.Graphics().p("A/8GOIHV+NMBJLARyInWeNg");
	var mask_graphics_469 = new cjs.Graphics().p("EghWAGQIHb+oMBK6ASJInbeog");
	var mask_graphics_470 = new cjs.Graphics().p("EgioAGSIHg/CMBMgASfIngfCg");
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
	var mask_graphics_481 = new cjs.Graphics().p("EgjvAGUIHg/MMBNNASlIngfMg");
	var mask_graphics_482 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_483 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_484 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_485 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_486 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_487 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_488 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_489 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_490 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_491 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_492 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_493 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_494 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_495 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_496 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");
	var mask_graphics_497 = new cjs.Graphics().p("EgjzAGTIHj/OMBNQASpInifOg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(450).to({graphics:mask_graphics_450,x:221.5,y:116.2}).wait(1).to({graphics:mask_graphics_451,x:228.5,y:119.2}).wait(1).to({graphics:mask_graphics_452,x:235.3,y:122}).wait(1).to({graphics:mask_graphics_453,x:241.8,y:124.7}).wait(1).to({graphics:mask_graphics_454,x:248,y:127.3}).wait(1).to({graphics:mask_graphics_455,x:254.1,y:129.8}).wait(1).to({graphics:mask_graphics_456,x:259.9,y:132.1}).wait(1).to({graphics:mask_graphics_457,x:265.4,y:134.4}).wait(1).to({graphics:mask_graphics_458,x:270.7,y:136.5}).wait(1).to({graphics:mask_graphics_459,x:275.8,y:138.5}).wait(1).to({graphics:mask_graphics_460,x:280.6,y:140.4}).wait(1).to({graphics:mask_graphics_461,x:285.2,y:142.2}).wait(1).to({graphics:mask_graphics_462,x:289.6,y:143.9}).wait(1).to({graphics:mask_graphics_463,x:293.7,y:145.5}).wait(1).to({graphics:mask_graphics_464,x:297.6,y:147}).wait(1).to({graphics:mask_graphics_465,x:301.2,y:148.4}).wait(1).to({graphics:mask_graphics_466,x:304.7,y:149.7}).wait(1).to({graphics:mask_graphics_467,x:307.8,y:150.9}).wait(1).to({graphics:mask_graphics_468,x:310.8,y:150.4}).wait(1).to({graphics:mask_graphics_469,x:313.5,y:149.8}).wait(1).to({graphics:mask_graphics_470,x:316,y:149.3}).wait(1).to({graphics:mask_graphics_471,x:317.1,y:149.1}).wait(1).to({graphics:mask_graphics_472,x:317.1,y:149.1}).wait(1).to({graphics:mask_graphics_473,x:317.1,y:149.1}).wait(1).to({graphics:mask_graphics_474,x:317.1,y:149.1}).wait(1).to({graphics:mask_graphics_475,x:317.1,y:149.1}).wait(1).to({graphics:mask_graphics_476,x:317.1,y:149.1}).wait(1).to({graphics:mask_graphics_477,x:317.1,y:149.1}).wait(1).to({graphics:mask_graphics_478,x:317.1,y:149.1}).wait(1).to({graphics:mask_graphics_479,x:317.1,y:149.1}).wait(1).to({graphics:mask_graphics_480,x:317.1,y:149.1}).wait(1).to({graphics:mask_graphics_481,x:313.4,y:149.6}).wait(1).to({graphics:mask_graphics_482,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_483,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_484,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_485,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_486,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_487,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_488,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_489,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_490,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_491,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_492,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_493,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_494,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_495,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_496,x:313.6,y:149.6}).wait(1).to({graphics:mask_graphics_497,x:313.6,y:149.6}).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(306).to({_off:false},0).wait(1).to({x:265.4,y:277.4},0).wait(1).to({x:260.6,y:258.7},0).wait(1).to({x:255.2,y:241.1},0).wait(1).to({x:249.3,y:224.8},0).wait(1).to({x:243.1,y:209.6},0).wait(1).to({x:236.5,y:195.6},0).wait(1).to({x:229.7,y:182.8},0).wait(1).to({x:222.7,y:170.9},0).wait(1).to({x:215.6,y:160.1},0).wait(1).to({x:208.6,y:150.2},0).wait(1).to({x:201.6,y:141.2},0).wait(1).to({x:194.6,y:132.9},0).wait(1).to({x:187.8,y:125.4},0).wait(1).to({x:181.2,y:118.6},0).wait(1).to({x:174.8,y:112.4},0).wait(1).to({x:168.5,y:106.8},0).wait(1).to({x:162.5,y:101.6},0).wait(1).to({x:156.7,y:96.9},0).wait(1).to({x:151.1,y:92.6},0).wait(1).to({x:145.6,y:88.5},0).wait(1).to({x:140.4,y:84.8},0).wait(1).to({x:135.4,y:81.4},0).wait(1).to({x:130.4,y:78.1},0).wait(1).to({x:125.7,y:75.2},0).wait(1).to({x:120.9,y:72.2},0).wait(1).to({x:116.4,y:69.5},0).wait(1).to({x:111.6,y:66.8},0).wait(1).to({x:107.2,y:64.3},0).wait(97).to({x:100.6,y:77.1},0).wait(1).to({x:95,y:90.4},0).wait(1).to({x:90,y:103.9},0).wait(1).to({x:85.7,y:117.7},0).wait(1).to({x:82,y:131.7},0).wait(1).to({x:78.9,y:145.8},0).wait(1).to({x:76.5,y:160},0).wait(1).to({x:74.7,y:174.3},0).wait(1).to({x:73.5,y:188.7},0).wait(1).to({x:73,y:203.2},0).wait(1).to({x:73.1,y:217.6},0).wait(1).to({x:73.8,y:232},0).wait(1).to({x:75.1,y:246.4},0).wait(1).to({x:77.1,y:260.7},0).wait(1).to({x:79.7,y:275},0).wait(1).to({x:68.2,y:335.2},0).wait(5));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_306 = new cjs.Graphics().p("AIXRLIOSoMIIYOmIuSIMg");
	var mask_graphics_307 = new cjs.Graphics().p("AGQNoIOSoPILPTeIuRIQg");
	var mask_graphics_308 = new cjs.Graphics().p("AEQKLIORoPIN/YOIuSIPg");
	var mask_graphics_309 = new cjs.Graphics().p("ACTG1IORoOIQpczIuSIPg");
	var mask_graphics_310 = new cjs.Graphics().p("AAaDmIORoPMATOAhRIuSIPg");
	var mask_graphics_311 = new cjs.Graphics().p("AhaAcIOQoOMAVtAllIuRIPg");
	var mask_graphics_312 = new cjs.Graphics().p("AjMilIOQoPMAYIApwIuSIPg");
	var mask_graphics_313 = new cjs.Graphics().p("Ak5lhIOQoPMAacAtyIuRIPg");
	var mask_graphics_314 = new cjs.Graphics().p("AmjoWIOQoQMAcsAxsIuRIPg");
	var mask_graphics_315 = new cjs.Graphics().p("AoJrFIOQoPMAe3A1bIuRIPg");
	var mask_graphics_316 = new cjs.Graphics().p("AprttIOQoPMAg8A5CIuRIPg");
	var mask_graphics_317 = new cjs.Graphics().p("ArJwPIOQoPMAi8A8gIuRIQg");
	var mask_graphics_318 = new cjs.Graphics().p("AsjyqIOQoPMAk3A/1IuRIPg");
	var mask_graphics_319 = new cjs.Graphics().p("At60+IOQoPMAmtBDBIuRIPg");
	var mask_graphics_320 = new cjs.Graphics().p("AvM3MIORoPMAocBGEIuRIPg");
	var mask_graphics_321 = new cjs.Graphics().p("Awb5TIORoPMAqHBI9IuRIPg");
	var mask_graphics_322 = new cjs.Graphics().p("Axm7TIORoPMArtBLuIuQIOg");
	var mask_graphics_323 = new cjs.Graphics().p("Ayt9NIORoPMAtOBOVIuRIPg");
	var mask_graphics_324 = new cjs.Graphics().p("Azw/BIORoPMAupBQ0IuQIPg");
	var mask_graphics_325 = new cjs.Graphics().p("EgUvgguIOQoPMAwABTKIuRIPg");
	var mask_graphics_326 = new cjs.Graphics().p("EgVrgiUIORoPMAxRBVWIuRIPg");
	var mask_graphics_327 = new cjs.Graphics().p("EgWjgj0IORoOMAydBXZIuRIPg");
	var mask_graphics_328 = new cjs.Graphics().p("EgXXglMIORoPMAzjBZTIuQIPg");
	var mask_graphics_329 = new cjs.Graphics().p("EgYHgmfIORoPMA0lBbFIuRIPg");
	var mask_graphics_330 = new cjs.Graphics().p("EgYzgnrIORoOMA1hBcsIuRIPg");
	var mask_graphics_331 = new cjs.Graphics().p("EgZbgowIOQoPMA2YBeMIuQIPg");
	var mask_graphics_332 = new cjs.Graphics().p("EgaAgpvIORoOMA3JBfiIuQIPg");
	var mask_graphics_333 = new cjs.Graphics().p("EgaggqnIOQoOMA32BgvIuQIOg");
	var mask_graphics_334 = new cjs.Graphics().p("Ega9grYIOQoPMA4dBhzIuQIPg");
	var mask_graphics_335 = new cjs.Graphics().p("EgbWgsDIOQoPMA4/BiuIuQIPg");
	var mask_graphics_336 = new cjs.Graphics().p("EgbrgsnIOQoPMA5cBjgIuQIPg");
	var mask_graphics_337 = new cjs.Graphics().p("Egb8gtFIOQoPMA5zBkJIuQIPg");
	var mask_graphics_338 = new cjs.Graphics().p("EgcKgtcIOQoPMA6GBkpIuQIOg");
	var mask_graphics_339 = new cjs.Graphics().p("EgcTgtsIOQoPMA6TBk/IuRIOg");
	var mask_graphics_340 = new cjs.Graphics().p("EgcZgt2IOQoPMA6bBlMIuRIPg");
	var mask_graphics_341 = new cjs.Graphics().p("Egcbgt6IOQoOMA6dBlRIuQIOg");
	var mask_graphics_342 = new cjs.Graphics().p("EgdIguiIORoMMA6IBlRIuRIMg");
	var mask_graphics_430 = new cjs.Graphics().p("EgdMguiIORoMMA6IBlRIuRIMg");
	var mask_graphics_431 = new cjs.Graphics().p("EgfpgteIPdpSMA8NBkPIveJSg");
	var mask_graphics_432 = new cjs.Graphics().p("Egh0gsYIQpqZMA96BjKIwpKZg");
	var mask_graphics_433 = new cjs.Graphics().p("Egj9grRIRyriMA/nBiFIxyLig");
	var mask_graphics_434 = new cjs.Graphics().p("EgmDgqHIS5suMBBSBg9Iy4Mug");
	var mask_graphics_435 = new cjs.Graphics().p("EgoGgo7IT9t8MBC9BfzIz9N8g");
	var mask_graphics_436 = new cjs.Graphics().p("EgqGgnsIU/vOMBElBenI0/POg");
	var mask_graphics_437 = new cjs.Graphics().p("EgsEgmcIV/whMBGNBdaI1/Qhg");
	var mask_graphics_438 = new cjs.Graphics().p("Egt/glJIW8x3MBH0BcKI28R3g");
	var mask_graphics_439 = new cjs.Graphics().p("Egv2gj0IX2zQMBJYBa5I32TQg");
	var mask_graphics_440 = new cjs.Graphics().p("EgxrgidIYu0rMBK8BZmI4uUrg");
	var mask_graphics_441 = new cjs.Graphics().p("EgzAghFIZj2IMBMeBYTI5jWIg");
	var mask_graphics_442 = new cjs.Graphics().p("Eg0JgfqIaV3oMBN+BW9I6VXog");
	var mask_graphics_443 = new cjs.Graphics().p("Eg1RgeNIbG5KMBPdBVlI7GZKg");
	var mask_graphics_444 = new cjs.Graphics().p("Eg2WgcvIby6tMBQ7BUMI7yatg");
	var mask_graphics_445 = new cjs.Graphics().p("Eg3YgbPIcb8SMBSWBSxI8bcSg");
	var mask_graphics_446 = new cjs.Graphics().p("Eg3TgbLIcY8QMBSPBSnI8YcQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(306).to({graphics:mask_graphics_306,x:198.5,y:203.3}).wait(1).to({graphics:mask_graphics_307,x:203.3,y:211.9}).wait(1).to({graphics:mask_graphics_308,x:208,y:220.1}).wait(1).to({graphics:mask_graphics_309,x:212.5,y:228.1}).wait(1).to({graphics:mask_graphics_310,x:216.9,y:235.9}).wait(1).to({graphics:mask_graphics_311,x:221.1,y:243.4}).wait(1).to({graphics:mask_graphics_312,x:225.2,y:250.7}).wait(1).to({graphics:mask_graphics_313,x:229.1,y:257.7}).wait(1).to({graphics:mask_graphics_314,x:232.9,y:264.5}).wait(1).to({graphics:mask_graphics_315,x:236.6,y:271}).wait(1).to({graphics:mask_graphics_316,x:240.1,y:277.3}).wait(1).to({graphics:mask_graphics_317,x:243.5,y:283.4}).wait(1).to({graphics:mask_graphics_318,x:246.8,y:289.1}).wait(1).to({graphics:mask_graphics_319,x:249.9,y:294.7}).wait(1).to({graphics:mask_graphics_320,x:252.9,y:300}).wait(1).to({graphics:mask_graphics_321,x:255.7,y:305}).wait(1).to({graphics:mask_graphics_322,x:258.4,y:309.8}).wait(1).to({graphics:mask_graphics_323,x:261,y:314.4}).wait(1).to({graphics:mask_graphics_324,x:263.4,y:318.7}).wait(1).to({graphics:mask_graphics_325,x:265.7,y:322.8}).wait(1).to({graphics:mask_graphics_326,x:267.9,y:326.6}).wait(1).to({graphics:mask_graphics_327,x:269.9,y:330.2}).wait(1).to({graphics:mask_graphics_328,x:271.7,y:333.5}).wait(1).to({graphics:mask_graphics_329,x:273.5,y:336.6}).wait(1).to({graphics:mask_graphics_330,x:275.1,y:339.4}).wait(1).to({graphics:mask_graphics_331,x:276.5,y:342}).wait(1).to({graphics:mask_graphics_332,x:277.8,y:344.4}).wait(1).to({graphics:mask_graphics_333,x:279,y:346.4}).wait(1).to({graphics:mask_graphics_334,x:280,y:348.3}).wait(1).to({graphics:mask_graphics_335,x:280.9,y:349.9}).wait(1).to({graphics:mask_graphics_336,x:281.7,y:351.3}).wait(1).to({graphics:mask_graphics_337,x:282.3,y:352.4}).wait(1).to({graphics:mask_graphics_338,x:282.8,y:353.2}).wait(1).to({graphics:mask_graphics_339,x:283.2,y:353.8}).wait(1).to({graphics:mask_graphics_340,x:283.4,y:354.2}).wait(1).to({graphics:mask_graphics_341,x:283.4,y:354.3}).wait(1).to({graphics:mask_graphics_342,x:276.9,y:331.7}).wait(88).to({graphics:mask_graphics_430,x:276.5,y:329.1}).wait(1).to({graphics:mask_graphics_431,x:281.7,y:329.1}).wait(1).to({graphics:mask_graphics_432,x:286.3,y:329.1}).wait(1).to({graphics:mask_graphics_433,x:290.8,y:329.1}).wait(1).to({graphics:mask_graphics_434,x:295.2,y:329.1}).wait(1).to({graphics:mask_graphics_435,x:299.6,y:329.1}).wait(1).to({graphics:mask_graphics_436,x:303.8,y:329.1}).wait(1).to({graphics:mask_graphics_437,x:308,y:329.2}).wait(1).to({graphics:mask_graphics_438,x:312.1,y:329.2}).wait(1).to({graphics:mask_graphics_439,x:316,y:329.2}).wait(1).to({graphics:mask_graphics_440,x:319.9,y:329.2}).wait(1).to({graphics:mask_graphics_441,x:320.8,y:329.2}).wait(1).to({graphics:mask_graphics_442,x:320.8,y:329.2}).wait(1).to({graphics:mask_graphics_443,x:320.7,y:329.2}).wait(1).to({graphics:mask_graphics_444,x:320.7,y:329.2}).wait(1).to({graphics:mask_graphics_445,x:320.6,y:329.2}).wait(1).to({graphics:mask_graphics_446,x:321.9,y:329.6}).wait(5));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(306).to({_off:false},0).wait(1).to({regX:329.3,regY:329.3,x:391.6,y:206.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:391.2,y:206.3},0).wait(137).to({regX:329.3,regY:329.3,x:391.6,y:206.9,alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

	// Logo left copy 2
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(135,206.3,1,1,0,0,180,328.9,328.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(306).to({_off:false},0).wait(1).to({regX:329.3,regY:329.3,x:134.6,y:206.9,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:328.9,regY:328.7,x:135,y:206.3},0).wait(137).to({regX:329.3,regY:329.3,x:134.6,y:206.9,alpha:0.75},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Scene2_Top = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Dot
	this.instance = new lib.Dot();
	this.instance.parent = this;
	this.instance.setTransform(-31,167.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(167).to({_off:false},0).wait(6).to({x:13.6,y:187.2},0).wait(1).to({x:52.5,y:198.3},0).wait(1).to({x:81.9,y:203.2},0).wait(1).to({x:105.8,y:205},0).wait(1).to({x:125.8,y:205.2},0).wait(1).to({x:142.9,y:204.3},0).wait(1).to({x:157.6,y:202.8},0).wait(1).to({x:170.4,y:200.9},0).wait(1).to({x:181.6,y:198.9},0).wait(1).to({x:191.4,y:196.8},0).wait(1).to({x:199.9,y:194.7},0).wait(1).to({x:207.7,y:192.6},0).wait(1).to({x:214.3,y:190.6},0).wait(1).to({x:220.3,y:188.7},0).wait(1).to({x:225.2,y:187},0).wait(1).to({x:230.2,y:185.3},0).wait(1).to({x:233.9,y:183.9},0).wait(1).to({x:237.1,y:182.7},0).wait(1).to({x:240.7,y:181.2},0).wait(1).to({x:243.2,y:180.2},0).wait(1).to({x:244.9,y:179.5},0).wait(1).to({x:246.2,y:179},0).wait(1).to({x:247,y:178.6},0).wait(1).to({x:247.5,y:178.4},0).wait(1).to({x:247.8,y:178.3},0).wait(1).to({x:247.9,y:178.2},0).wait(100).to({x:252,y:176.2},0).wait(1).to({x:264.7,y:169.6},0).wait(1).to({x:285.3,y:158.1},0).wait(1).to({x:312.8,y:139.9},0).wait(1).to({x:345.7,y:110.8},0).wait(1).to({x:381.7,y:67.5},0).to({_off:true},1).wait(2));

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
	var mask_graphics_300 = new cjs.Graphics().p("Eg1QgVLMBJ0ggVMAgtBKsMhJ0AgVg");
	var mask_graphics_301 = new cjs.Graphics().p("Eg3wgRbMBH6gmuMAnnBJlMhH6Amug");
	var mask_graphics_302 = new cjs.Graphics().p("Eg5/gNaMBFdgtAMAuiBH1MhFdAtAg");
	var mask_graphics_303 = new cjs.Graphics().p("Eg78gJJMBCdgzJMA1cBFcMhCdAzJg");
	var mask_graphics_304 = new cjs.Graphics().p("Eg9kgEpMA+5g5FMA8QBCYMg+5A5Fg");
	var mask_graphics_305 = new cjs.Graphics().p("Eg9kgEpMA+5g5FMA8QBCYMg+5A5Fg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(167).to({graphics:mask_graphics_167,x:-198,y:-26.1}).wait(4).to({graphics:mask_graphics_171,x:-197.8,y:-25.9}).wait(1).to({graphics:mask_graphics_172,x:-190,y:-0.9}).wait(1).to({graphics:mask_graphics_173,x:-180.8,y:22.5}).wait(1).to({graphics:mask_graphics_174,x:-170.4,y:44.1}).wait(1).to({graphics:mask_graphics_175,x:-159.2,y:63.9}).wait(1).to({graphics:mask_graphics_176,x:-147.4,y:82}).wait(1).to({graphics:mask_graphics_177,x:-135.2,y:98.4}).wait(1).to({graphics:mask_graphics_178,x:-122.8,y:113.1}).wait(1).to({graphics:mask_graphics_179,x:-110.5,y:126.4}).wait(1).to({graphics:mask_graphics_180,x:-98.3,y:138.2}).wait(1).to({graphics:mask_graphics_181,x:-86.5,y:148.6}).wait(1).to({graphics:mask_graphics_182,x:-75.1,y:157.8}).wait(1).to({graphics:mask_graphics_183,x:-64.3,y:165.8}).wait(1).to({graphics:mask_graphics_184,x:-54.2,y:172.7}).wait(1).to({graphics:mask_graphics_185,x:-44.9,y:178.7}).wait(1).to({graphics:mask_graphics_186,x:-36.3,y:183.8}).wait(1).to({graphics:mask_graphics_187,x:-28.7,y:188}).wait(1).to({graphics:mask_graphics_188,x:-22,y:191.6}).wait(1).to({graphics:mask_graphics_189,x:-16.3,y:194.5}).wait(1).to({graphics:mask_graphics_190,x:-11.5,y:196.8}).wait(1).to({graphics:mask_graphics_191,x:-7.8,y:198.5}).wait(1).to({graphics:mask_graphics_192,x:-5.2,y:199.7}).wait(1).to({graphics:mask_graphics_193,x:-3.6,y:200.4}).wait(1).to({graphics:mask_graphics_194,x:-3,y:200.7}).wait(1).to({graphics:mask_graphics_195,x:2.3,y:207.5}).wait(104).to({graphics:mask_graphics_299,x:-10.7,y:199.9}).wait(1).to({graphics:mask_graphics_300,x:11.4,y:203.5}).wait(1).to({graphics:mask_graphics_301,x:35.5,y:204.9}).wait(1).to({graphics:mask_graphics_302,x:61.3,y:203.9}).wait(1).to({graphics:mask_graphics_303,x:88.7,y:200.5}).wait(1).to({graphics:mask_graphics_304,x:117.5,y:194.4}).wait(1).to({graphics:mask_graphics_305,x:117.5,y:194.4}).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.65,scaleY:0.65,alpha:0.5},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(44).to({x:235,y:64.3},0).wait(1).to({x:225.5,y:64.4},0).wait(1).to({x:214.5,y:65},0).wait(1).to({x:201.7,y:66.2},0).wait(1).to({x:187.4,y:68.1},0).wait(1).to({x:171.6,y:71.1},0).wait(1).to({x:155.1,y:75},0).wait(1).to({x:138.8,y:79.8},0).wait(1).to({x:123.7,y:85.2},0).wait(1).to({x:110.2,y:90.6},0).wait(1).to({x:98.6,y:96},0).wait(1).to({x:88.7,y:101},0).wait(1).to({x:80.3,y:105.5},0).wait(1).to({x:73.3,y:109.7},0).wait(1).to({x:67.3,y:113.3},0).wait(1).to({x:62.3,y:116.6},0).wait(1).to({x:58,y:119.5},0).wait(1).to({x:54.5,y:122},0).wait(1).to({x:51.4,y:124.2},0).wait(1).to({x:48.9,y:126},0).wait(1).to({x:46.7,y:127.7},0).wait(1).to({x:45,y:129},0).wait(1).to({x:43.6,y:130.1},0).wait(1).to({x:42.4,y:131},0).wait(1).to({x:41.5,y:131.7},0).wait(1).to({x:40.8,y:132.3},0).wait(1).to({x:40.3,y:132.6},0).wait(1).to({x:40,y:132.9},0).wait(1).to({x:39.9,y:133},0).wait(1).to({x:40},0).wait(99).to({x:23.7,y:147.5},0).wait(1).to({x:1.1,y:170.5},0).wait(1).to({x:-22.7,y:200.3},0).wait(1).to({x:-38.7,y:226.1},0).wait(1).to({x:-47.4,y:244.3},0).wait(1).to({x:-51.9,y:256.2},0).wait(1).to({x:-54.3,y:264.2},0).wait(1).to({x:-55.3,y:268.8},0).wait(1).to({x:-55.8,y:271.1},0).wait(1).to({x:-55.9,y:271.8},0).wait(1).to({x:-56.5,y:285.6},0).wait(1).to({x:-56.4,y:287.9},0).wait(1).to({x:-56.2,y:290.2},0).wait(1));

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
	var mask_graphics_45 = new cjs.Graphics().p("AC4vtIPklZMAMvAk0IvkFZg");
	var mask_graphics_46 = new cjs.Graphics().p("AAvvUIRvmLMAM2Ak0IxwGLg");
	var mask_graphics_47 = new cjs.Graphics().p("AhUu7IT5m8MAM1AkzIz6G8g");
	var mask_graphics_48 = new cjs.Graphics().p("AjYujIWEntMAM1Ak0I2FHtg");
	var mask_graphics_49 = new cjs.Graphics().p("AlduLIYQodMAM1Ak0I4RIdg");
	var mask_graphics_50 = new cjs.Graphics().p("AnhtyIabpOMAM1AkzI6cJOg");
	var mask_graphics_51 = new cjs.Graphics().p("ApltaIcmp+MAM1AkzI8nJ+g");
	var mask_graphics_52 = new cjs.Graphics().p("ArptCIexquMAM0AkzI+yKug");
	var mask_graphics_53 = new cjs.Graphics().p("AtuspMAg9gLfMAM0AkyMgg8ALfg");
	var mask_graphics_54 = new cjs.Graphics().p("AvysRMAjIgMPMAM0AkyMgjHAMPg");
	var mask_graphics_55 = new cjs.Graphics().p("Ax2r4MAlSgNAMAM1AkxMglTANAg");
	var mask_graphics_56 = new cjs.Graphics().p("Az6rgMAndgNwMAM1AkxMgneANwg");
	var mask_graphics_57 = new cjs.Graphics().p("A1+rIMApogOgMAM0AkxMgpoAOgg");
	var mask_graphics_58 = new cjs.Graphics().p("A4DqvMAr0gPRMAM0AkwMgr0APRg");
	var mask_graphics_59 = new cjs.Graphics().p("A6HqXMAt/gQCMAM0AkxMgt/AQCg");
	var mask_graphics_60 = new cjs.Graphics().p("A8Lp/MAwKgQyMAM0AkxMgwKAQyg");
	var mask_graphics_61 = new cjs.Graphics().p("A+PpmMAyVgRjMAM0AkwMgyWARjg");
	var mask_graphics_62 = new cjs.Graphics().p("A+WplMAycgRlMAM0AkwMgycARlg");
	var mask_graphics_63 = new cjs.Graphics().p("A+cpkMAyigRnMAM0AkwMgyiARng");
	var mask_graphics_64 = new cjs.Graphics().p("A+ipjMAyogRpMAM0AkwMgypARpg");
	var mask_graphics_65 = new cjs.Graphics().p("A+ophMAyugRsMAM0AkvMgyvARsg");
	var mask_graphics_66 = new cjs.Graphics().p("A+vpgMAy1gRuMAM0AkvMgy1ARug");
	var mask_graphics_67 = new cjs.Graphics().p("A+1pfMAy7gRwMAM0AkvMgy8ARwg");
	var mask_graphics_68 = new cjs.Graphics().p("A+7peMAzBgRyMAM0AkvMgzCARyg");
	var mask_graphics_69 = new cjs.Graphics().p("A/BpdMAzHgR0MAM0AkvMgzIAR0g");
	var mask_graphics_70 = new cjs.Graphics().p("A/IpbMAzOgR3MAM0AkuMgzPAR3g");
	var mask_graphics_71 = new cjs.Graphics().p("A/OpaMAzUgR5MAM0AkuMgzVAR5g");
	var mask_graphics_72 = new cjs.Graphics().p("A/UpZMAzbgR7MAMzAkuMgzbAR7g");
	var mask_graphics_73 = new cjs.Graphics().p("A/apYMAzhgR9MAMzAkuMgzhAR9g");
	var mask_graphics_74 = new cjs.Graphics().p("A/hpXMAzogR/MAMzAkuMgzoAR/g");
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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(38).to({graphics:mask_graphics_38,x:214.1,y:45.5}).wait(1).to({graphics:mask_graphics_39,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_40,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_41,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_42,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_43,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_44,x:214.2,y:45.5}).wait(1).to({graphics:mask_graphics_45,x:199.5,y:49.9}).wait(1).to({graphics:mask_graphics_46,x:200.4,y:52.1}).wait(1).to({graphics:mask_graphics_47,x:201,y:54.3}).wait(1).to({graphics:mask_graphics_48,x:201.7,y:56.5}).wait(1).to({graphics:mask_graphics_49,x:202.4,y:58.7}).wait(1).to({graphics:mask_graphics_50,x:203.1,y:60.9}).wait(1).to({graphics:mask_graphics_51,x:203.8,y:63.1}).wait(1).to({graphics:mask_graphics_52,x:204.4,y:65.3}).wait(1).to({graphics:mask_graphics_53,x:205.1,y:67.6}).wait(1).to({graphics:mask_graphics_54,x:205.8,y:69.8}).wait(1).to({graphics:mask_graphics_55,x:206.5,y:72}).wait(1).to({graphics:mask_graphics_56,x:207.2,y:74.2}).wait(1).to({graphics:mask_graphics_57,x:207.8,y:76.4}).wait(1).to({graphics:mask_graphics_58,x:208.5,y:78.6}).wait(1).to({graphics:mask_graphics_59,x:209.2,y:80.8}).wait(1).to({graphics:mask_graphics_60,x:209.9,y:83}).wait(1).to({graphics:mask_graphics_61,x:210.6,y:85.2}).wait(1).to({graphics:mask_graphics_62,x:210.6,y:85.3}).wait(1).to({graphics:mask_graphics_63,x:210.6,y:85.5}).wait(1).to({graphics:mask_graphics_64,x:210.6,y:85.6}).wait(1).to({graphics:mask_graphics_65,x:210.6,y:85.7}).wait(1).to({graphics:mask_graphics_66,x:210.6,y:85.8}).wait(1).to({graphics:mask_graphics_67,x:210.6,y:85.9}).wait(1).to({graphics:mask_graphics_68,x:210.6,y:86}).wait(1).to({graphics:mask_graphics_69,x:210.6,y:86.1}).wait(1).to({graphics:mask_graphics_70,x:210.6,y:86.2}).wait(1).to({graphics:mask_graphics_71,x:210.6,y:86.3}).wait(1).to({graphics:mask_graphics_72,x:210.6,y:86.4}).wait(1).to({graphics:mask_graphics_73,x:210.6,y:86.5}).wait(1).to({graphics:mask_graphics_74,x:210.6,y:86.7}).wait(1).to({graphics:mask_graphics_75,x:214.3,y:86.5}).wait(99).to({graphics:mask_graphics_174,x:219.7,y:87.5}).wait(1).to({graphics:mask_graphics_175,x:160.6,y:128.9}).wait(1).to({graphics:mask_graphics_176,x:100.1,y:161.2}).wait(1).to({graphics:mask_graphics_177,x:39.7,y:193.4}).wait(1).to({graphics:mask_graphics_178,x:62.3,y:180.7}).wait(1).to({graphics:mask_graphics_179,x:84.7,y:167.9}).wait(1).to({graphics:mask_graphics_180,x:127.7,y:135.6}).wait(1).to({graphics:mask_graphics_181,x:127.1,y:137.9}).wait(1).to({graphics:mask_graphics_182,x:126.5,y:140.2}).wait(1).to({graphics:mask_graphics_183,x:125.9,y:142.5}).wait(1).to({graphics:mask_graphics_184,x:125.3,y:144.8}).wait(1).to({graphics:mask_graphics_185,x:124.8,y:147.1}).wait(1).to({graphics:mask_graphics_186,x:124.2,y:149.4}).wait(1));

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
(lib.CAMC_Journey_Image_970x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.loopCount = 1;var root = this, //set scope activation object
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
		console.log("loopCount");
		
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
	this.instance.setTransform(48.6,52.1,1.267,1.267,0,0,0,20.4,15.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(496).to({x:48.7},0).wait(1).to({regY:19.6,y:57.7,alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(398));

	// CTA
	this.cta_container = new lib.button_end();
	this.cta_container.parent = this;
	this.cta_container.setTransform(823.6,133.6,1.267,1.267,0,0,0,53.6,20);
	this.cta_container.alpha = 0;
	this.cta_container._off = true;

	this.timeline.addTween(cjs.Tween.get(this.cta_container).wait(582).to({_off:false},0).to({y:123.5,alpha:1},7).wait(311));

	// TextEnd
	this.TextEnd_Container = new lib.Textend();
	this.TextEnd_Container.parent = this;
	this.TextEnd_Container.setTransform(377,130,1,1,0,0,0,150,29);
	this.TextEnd_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.TextEnd_Container).wait(1).to({regX:-113.4,regY:29.5,scaleX:1,scaleY:1,x:113.7,y:130.6},0).wait(1).to({y:130.7},0).wait(1).to({scaleX:1,scaleY:1,x:113.8},0).wait(1).to({x:113.9,y:130.8},0).wait(1).to({scaleX:1,scaleY:1,x:114,y:130.9},0).wait(1).to({scaleX:1,scaleY:1,y:131},0).wait(1).to({x:114.1},0).wait(1).to({scaleX:1,scaleY:1,x:114.2,y:131.2},0).wait(1).to({x:114.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:131.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:114.4,y:131.4},0).wait(1).to({x:114.5,y:131.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:114.6,y:131.6},0).wait(1).to({x:114.7,y:131.7},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:114.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:114.9,y:131.8},0).wait(1).to({x:115,y:131.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,y:132},0).wait(1).to({x:115.2,y:132.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:115.3,y:132.2},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({x:115.5,y:132.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:115.6},0).wait(1).to({x:115.7,y:132.6},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:115.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:115.9,y:132.7},0).wait(1).to({x:116,y:132.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:116.1,y:132.9},0).wait(1).to({x:116.2,y:133},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:116.3,y:133.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:116.4,y:133.2},0).wait(1).to({x:116.5,y:133.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:116.7,y:133.4},0).wait(1).to({x:116.8,y:133.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:116.9},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:117,y:133.7},0).wait(1).to({x:117.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:117.3,y:133.8},0).wait(1).to({x:117.4,y:134},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:117.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:117.7,y:134.2},0).wait(1).to({x:117.8,y:134.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:117.9},0).wait(1).to({x:118.1,y:134.5},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:118.2,y:134.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:118.3},0).wait(1).to({x:118.5,y:134.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:118.6,y:134.9},0).wait(1).to({x:118.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:118.9,y:135.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:119,y:135.2},0).wait(1).to({x:119.2,y:135.3},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:119.4,y:135.4},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:119.5,y:135.5},0).wait(1).to({x:119.6,y:135.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:119.8,y:135.7},0).wait(1).to({x:119.9,y:135.8},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:120.1,y:135.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:120.2,y:136},0).wait(1).to({x:120.4,y:136.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:120.6,y:136.3},0).wait(1).to({x:120.7,y:136.4},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:120.9,y:136.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:121.1,y:136.6},0).wait(1).to({x:121.2,y:136.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:121.4,y:136.8},0).wait(1).to({x:121.6,y:136.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:121.7,y:137},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:121.9,y:137.1},0).wait(1).to({x:122.1,y:137.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:122.3,y:137.4},0).wait(1).to({x:122.5,y:137.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:122.6,y:137.6},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:122.8,y:137.7},0).wait(1).to({x:123,y:137.9},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:123.2,y:138},0).wait(1).to({x:123.4,y:138.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:123.6,y:138.2},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:123.7,y:138.3},0).wait(1).to({x:123.9,y:138.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:124.1,y:138.6},0).wait(1).to({x:124.3,y:138.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:124.5,y:138.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:124.7,y:139},0).wait(1).to({x:124.9,y:139.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:125.1,y:139.2},0).wait(1).to({x:125.3,y:139.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:125.5,y:139.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:125.7,y:139.6},0).wait(1).to({x:125.9,y:139.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:126.1,y:139.8},0).wait(1).to({x:126.3,y:140},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:126.5,y:140.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:126.8,y:140.2},0).wait(1).to({x:126.9,y:140.3},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:127.2,y:140.4},0).wait(1).to({x:127.4,y:140.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:127.6,y:140.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:127.8,y:140.8},0).wait(1).to({x:128,y:141},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:128.2,y:141.1},0).wait(1).to({x:128.5,y:141.2},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:128.7,y:141.4},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:128.9,y:141.5},0).wait(1).to({x:129.1,y:141.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:129.3,y:141.8},0).wait(1).to({x:129.6,y:141.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:129.8,y:142},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:130,y:142.2},0).wait(1).to({x:130.3,y:142.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:130.5,y:142.4},0).wait(1).to({x:130.7,y:142.6},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:131,y:142.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:131.2,y:142.8},0).wait(1).to({x:131.4,y:143},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:131.7,y:143.1},0).wait(1).to({x:131.9,y:143.3},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:132.1,y:143.4},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:132.4,y:143.5},0).wait(1).to({x:132.6,y:143.7},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:132.8,y:143.8},0).wait(1).to({x:133.1,y:143.9},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:133.3,y:144.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:133.6,y:144.2},0).wait(1).to({x:133.8,y:144.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:134,y:144.5},0).wait(1).to({x:134.3,y:144.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:134.5,y:144.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:134.8,y:144.9},0).wait(1).to({x:135,y:145},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:135.3,y:145.2},0).wait(1).to({x:135.5,y:145.3},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:135.7,y:145.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:136,y:145.6},0).wait(1).to({x:136.3,y:145.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:136.5,y:145.9},0).wait(1).to({x:136.8,y:146},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:137,y:146.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:137.3,y:146.3},0).wait(1).to({x:137.5,y:146.5},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:137.8,y:146.6},0).wait(1).to({x:138,y:146.7},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:138.3,y:146.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:138.5,y:147},0).wait(1).to({x:138.8,y:147.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:139.1,y:147.3},0).wait(1).to({x:139.3,y:147.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:139.6,y:147.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:139.8,y:147.7},0).wait(1).to({x:140,y:147.9},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:140.3,y:148},0).wait(1).to({x:140.5,y:148.2},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:140.8,y:148.3},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:141.1,y:148.5},0).wait(1).to({x:141.3,y:148.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:141.6,y:148.7},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:141.9,y:148.9},0).wait(1).to({x:142.1,y:149},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:142.4,y:149.1},0).wait(1).to({x:142.6,y:149.3},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:142.9,y:149.4},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:143.1,y:149.6},0).wait(1).to({x:143.4,y:149.7},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:143.6,y:149.9},0).wait(1).to({x:143.9,y:150},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:144.1,y:150.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:144.4,y:150.3},0).wait(1).to({x:144.7,y:150.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:144.9,y:150.6},0).wait(1).to({x:145.2,y:150.7},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:145.4,y:150.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:145.6,y:151},0).wait(1).to({x:145.9,y:151.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:146.1,y:151.3},0).wait(1).to({x:146.4,y:151.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:146.7,y:151.5},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:146.9,y:151.7},0).wait(1).to({x:147.2,y:151.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:147.4,y:152},0).wait(1).to({x:147.6,y:152.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:147.9,y:152.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:148.2,y:152.4},0).wait(1).to({x:148.4,y:152.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:148.7,y:152.7},0).wait(1).to({x:148.9,y:152.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:149.1,y:153},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:149.4,y:153.1},0).wait(1).to({x:149.6,y:153.3},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:149.9,y:153.4},0).wait(1).to({x:150.1,y:153.5},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:150.3,y:153.7},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:150.6,y:153.8},0).wait(1).to({x:150.8,y:154},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:151,y:154.1},0).wait(1).to({x:151.3,y:154.2},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:151.5,y:154.4},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:151.8,y:154.5},0).wait(1).to({x:152,y:154.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:152.2,y:154.8},0).wait(1).to({x:152.5,y:154.9},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:152.7,y:155},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:152.9,y:155.2},0).wait(1).to({x:153.2,y:155.3},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:153.4,y:155.4},0).wait(1).to({x:153.6,y:155.6},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:153.8,y:155.7},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:154,y:155.9},0).wait(1).to({x:154.3,y:156},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:154.5,y:156.1},0).wait(1).to({x:154.7,y:156.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:154.9,y:156.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:155.2,y:156.5},0).wait(1).to({x:155.4,y:156.6},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:155.6,y:156.7},0).wait(1).to({x:155.8,y:156.8},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:156,y:157},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:156.2,y:157.1},0).wait(1).to({x:156.4,y:157.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:156.6,y:157.4},0).wait(1).to({x:156.9,y:157.5},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:157,y:157.6},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:157.3,y:157.8},0).wait(1).to({x:157.5,y:157.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:157.7,y:158},0).wait(1).to({x:157.9,y:158.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:158,y:158.2},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:158.3,y:158.4},0).wait(1).to({x:158.5,y:158.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:158.6,y:158.6},0).wait(1).to({x:158.8,y:158.8},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:159.1,y:158.9},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:159.2,y:159},0).wait(1).to({x:159.4,y:159.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:159.6,y:159.2},0).wait(1).to({x:159.8,y:159.3},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:160,y:159.5},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:160.1,y:159.6},0).wait(1).to({x:160.3,y:159.7},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:160.5,y:159.8},0).wait(1).to({x:160.7,y:159.9},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:160.9,y:160.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:161.1,y:160.2},0).wait(1).to({x:161.2,y:160.3},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:161.4,y:160.4},0).wait(1).to({x:161.6,y:160.5},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:161.7,y:160.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:161.9,y:160.7},0).wait(1).to({x:162.1,y:160.8},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:162.2,y:160.9},0).wait(1).to({x:162.4,y:161.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:162.6,y:161.2},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:162.7,y:161.3},0).wait(1).to({x:162.9,y:161.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:163,y:161.5},0).wait(1).to({x:163.2,y:161.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:163.4,y:161.7},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:163.5,y:161.8},0).wait(1).to({x:163.7,y:162},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:163.8,y:162.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:164},0).wait(1).to({x:164.1,y:162.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:164.2,y:162.4},0).wait(1).to({x:164.4,y:162.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:164.6,y:162.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:164.7,y:162.7},0).wait(1).to({x:164.8,y:162.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:165,y:162.9},0).wait(1).to({x:165.1,y:163},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:165.2,y:163.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:165.3,y:163.2},0).wait(1).to({x:165.5,y:163.3},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:165.6,y:163.4},0).wait(1).to({x:165.7,y:163.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:165.9,y:163.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:166,y:163.7},0).wait(1).to({x:166.1,y:163.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:166.3,y:163.9},0).wait(1).to({x:166.4,y:164},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:166.5,y:164.1},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:166.6},0).wait(1).to({x:166.7,y:164.3},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:166.8},0).wait(1).to({x:167,y:164.5},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:167.2,y:164.6},0).wait(1).to({x:167.3,y:164.7},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:167.4,y:164.8},0).wait(1).to({x:167.5,y:164.9},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:167.6,y:165},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:167.7,y:165.1},0).wait(1).to({x:167.8,y:165.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,y:165.3},0).wait(1).to({x:167.6,y:165.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:167.5},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:167.3,y:165.3},0).wait(1).to({x:167.2,y:165.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:167},0).wait(1).to({x:166.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:166.7},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:166.5,y:165.3},0).wait(1).to({x:166.4,y:165.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:166.2},0).wait(1).to({x:166,y:165.3},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:165.9,y:165.2},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:165.8},0).wait(1).to({x:165.6,y:165.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:165.4,y:165.2},0).wait(1).to({x:165.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:165.1,y:165.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:165,y:165.2},0).wait(1).to({x:164.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:164.6,y:165.3},0).wait(1).to({x:164.5,y:165.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:164.3,y:165.3},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:164.2},0).wait(1).to({x:164,y:165.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:163.8,y:165.3},0).wait(1).to({x:163.7,y:165.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:163.5},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:163.4,y:165.3},0).wait(1).to({x:163.2,y:165.2},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:163},0).wait(1).to({x:162.9,y:165.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:162.7,y:165.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:162.6},0).wait(1).to({x:162.4,y:165.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:162.3,y:165.2},0).wait(1).to({x:162.1},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:161.9,y:165.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:161.8,y:165.2},0).wait(1).to({x:161.6,y:165.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:161.5},0).wait(1).to({x:161.3,y:165.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:161.1,y:165.3},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:161},0).wait(1).to({x:160.8,y:165.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:160.7,y:165.3},0).wait(1).to({x:160.5,y:165.2},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:160.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:160.2,y:165.3},0).wait(1).to({x:160,y:165.2},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:159.9},0).wait(1).to({x:159.7,y:165.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:159.5,y:165.2},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:159.4,y:165.3},0).wait(1).to({x:159.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:159.1,y:165.2},0).wait(1).to({x:158.9,y:165.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:158.8},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:158.6,y:165.2},0).wait(1).to({x:158.5,y:165.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:158.3},0).wait(1).to({x:158.1,y:165.2},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:158,y:165.3},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:157.8},0).wait(1).to({x:157.7,y:165.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:157.5,y:165.3},0).wait(1).to({x:157.3},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:157.2,y:165.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:157,y:165.3},0).wait(1).to({x:156.9,y:165.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:156.7,y:165.3},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:156.5},0).wait(1).to({x:156.4,y:165.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:156.2,y:165.3},0).wait(1).to({x:156.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:155.9,y:165.2},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:155.8,y:165.3},0).wait(1).to({x:155.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:155.4,y:165.2},0).wait(1).to({x:155.3,y:165.3},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:155.1},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:155,y:165.2},0).wait(1).to({x:154.8,y:165.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:154.6},0).wait(1).to({x:154.5},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:154.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:154.2},0).wait(1).to({x:154},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:153.8},0).wait(1).to({x:153.7,y:165.2},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:153.6,y:165.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:153.4},0).wait(1).to({x:153.2,y:165.2},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:153,y:165.3},0).wait(1).to({x:152.9},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:152.8,y:165.2},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:152.6,y:165.3},0).wait(1).to({x:152.4},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:152.3},0).wait(1).to({x:152.1},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:152},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:151.8},0).wait(1).to({x:151.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:151.5},0).wait(1).to({x:151.3},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:151.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:151},0).wait(1).to({x:150.8},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:150.7},0).wait(1).to({x:150.5},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:150.4},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:150.2},0).wait(1).to({x:150,y:165.2},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:149.9,y:165.3},0).wait(1).to({x:149.7},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:149.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:149.4},0).wait(1).to({x:149.3},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:149.1},0).wait(1).to({x:148.9},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:148.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:148.6},0).wait(1).to({x:148.5},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:148.3},0).wait(1).to({x:148.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:148},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:147.8},0).wait(1).to({x:147.7},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:147.5},0).wait(1).to({x:147.3},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:147.2},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:147.1},0).wait(1).to({x:146.9},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:146.7},0).wait(1).to({x:146.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:146.4},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:146.3},0).wait(1).to({x:146.1},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:145.9},0).wait(1).to({x:145.8},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:145.6},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:145.5},0).wait(1).to({x:145.3},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:145.1},0).wait(1).to({x:145},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:144.8},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:144.7},0).wait(1).to({x:144.5},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:144.3},0).wait(1).to({x:144.2},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:144},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:143.9},0).wait(128).to({regX:150.1,regY:29,x:538.4,y:164.7},0).wait(1).to({regX:-113.4,regY:29.5,x:204.6,y:163.5,alpha:0.111},0).wait(1).to({y:161.3,alpha:0.222},0).wait(1).to({y:158.7,alpha:0.333},0).wait(1).to({y:156.5,alpha:0.444},0).wait(1).to({y:154.8,alpha:0.556},0).wait(1).to({y:153.7,alpha:0.667},0).wait(1).to({y:153.1,alpha:0.778},0).wait(1).to({y:152.7,alpha:0.889},0).wait(1).to({y:152.6,alpha:1},0).wait(1).to({regX:150.1,regY:29,x:538.5,y:152},0).wait(319));

	// Logo_morph
	this.instance_1 = new lib.Morphinglogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1.6,536.6,1.267,1.267,0,0,0,-1.3,423.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(473).to({_off:false},0).wait(42).to({regX:-1.2,x:150.6,y:504.3,alpha:1},0).to({regX:1,regY:422.4,scaleX:0.05,scaleY:0.05,x:48.7,y:56.6},18,cjs.Ease.get(1)).wait(367));

	// grad_location
	this.instance_2 = new lib.grad();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-3544.4,761.2,0.833,2.8,90,0,0,913.5,1515.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(554).to({_off:false},0).to({alpha:0.891},10).wait(336));

	// BG_End
	this.IMG_container2 = new lib.IMG();
	this.IMG_container2.parent = this;
	this.IMG_container2.setTransform(362.3,44.9,1.001,1,0,0,0,361.8,44.9);
	this.IMG_container2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.IMG_container2).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(554).to({alpha:0.077},0).wait(1).to({alpha:0.154},0).wait(1).to({alpha:0.231},0).wait(1).to({alpha:0.308},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.462},0).wait(1).to({alpha:0.538},0).wait(1).to({alpha:0.615},0).wait(1).to({alpha:0.692},0).wait(1).to({alpha:0.769},0).wait(1).to({alpha:0.846},0).wait(1).to({alpha:0.923},0).wait(1).to({x:-0.1,alpha:1},0).wait(333));

	// Scene4_Top
	this.instance_3 = new lib.Scene4_Top("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(478.4,428.8,1.267,1.267,0,0,0,257.7,364);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({_off:true},483).wait(385));

	// BG_grad
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.2,-125.2,-0.2,124.7).s().p("EhH3ATiMAAAgnDMCPvAAAMAAAAnDg");
	this.shape.setTransform(485,125,1.054,1);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(480).to({_off:false},0).to({_off:true},105).wait(315));

	// Scene4_Bottom
	this.instance_4 = new lib.Scene4_Bottom("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(313.2,504.5,1.267,1.267,0,0,0,127.3,423.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).to({_off:true},483).wait(385));

	// Img mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_367 = new cjs.Graphics().p("EAgeAIfQhJhJAAhmQAAhoBJhJQBJhIBmAAQBFAAA3AgQAcAQAYAYQBJBJAABoQAABmhJBJQgYAYgcARQg3AghFAAQhmAAhJhJg");
	var mask_graphics_368 = new cjs.Graphics().p("ATxKGQkMkMAAl6QAAl7EMkMQELkKF6AAQD8AADLB1QBnA8BYBZQEMEMAAF7QAAF6kMEMQhYBYhnA/QjLB1j8AAQl6AAkLkMg");
	var mask_graphics_369 = new cjs.Graphics().p("AHDRcQnOnPAAqNQAAqQHOnPQHPnLKNAAQGzAAFfDKQCyBoCZCZQHPHPAAKQQAAKNnPHPQiZCZiyBsQlfDKmzAAQqNAAnPnPg");
	var mask_graphics_370 = new cjs.Graphics().p("AlpYzQqSqTAAugQAAulKSqSQKRqNOhAAQJpAAHzEgQD9CTDZDaQKSKSAAOlQAAOgqSKTQjZDZj9CZQnzEgppAAQuhAAqRqSg");
	var mask_graphics_371 = new cjs.Graphics().p("EgSWAgJQtWtVAAy0QAAy6NWtWQNVtNSzAAQMgAAKHF1QFIC/EaEZQNVNWAAS6QAAS0tVNVQkaEalIDGQqHF1sgAAQyzAAtVtVg");
	var mask_graphics_372 = new cjs.Graphics().p("EgfEAnfQwYwYAA3HQAA3PQYwZQQZwPXGAAQPXAAMbHLQGTDqFaFaQQYQZAAXPQAAXHwYQYQlaFbmTDzQsbHLvXAAQ3GAAwZwZg");
	var mask_graphics_373 = new cjs.Graphics().p("EgrxAu2QzbzcAA7aQAA7kTbzcQTczQbZAAQSOAAOvIgQHeEVGaGbQTcTcAAbkQAAbazcTcQmaGaneEhQuvIgyOAAQ7ZAAzczbg");
	var mask_graphics_374 = new cjs.Graphics().p("Eg2LA2MQ2f2fAA/tQAA/5Wf2fQWf2SfsAAQVFAARDJ2QIpFBHbHbQWfWfAAf5QAAft2fWfQnbHbopFOQxDJ21FAAQ/sAA2f2fg");
	var mask_graphics_375 = new cjs.Graphics().p("Eg9hA9iUgZigZhAAAgkBUAAAgkOAZigZiUAZhgZTAkAAAAQX8AATXLLQJ0FsIbIcUAZiAZiAAAAkOUAAAAkBgZiAZhQobIcp0F7QzXLL38AAUgkAAAAgZhgZig");
	var mask_graphics_446 = new cjs.Graphics().p("Eg9hA9iUgZigZhAAAgkBUAAAgkOAZigZiUAZhgZTAkAAAAQX8AATXLLQJ0FsIbIcUAZiAZiAAAAkOUAAAAkBgZiAZhQobIcp0F7QzXLL38AAUgkAAAAgZhgZig");
	var mask_graphics_447 = new cjs.Graphics().p("Eg1IA1JQ2D2DAA/GQAA/SWD2CQWD13fFAAQUrAAQuJqQIeE7HSHSQWDWCAAfSQAAfG2DWDQnSHSoeFHQwuJq0rAAQ/FAA2D2Dg");
	var mask_graphics_448 = new cjs.Graphics().p("EgoEAsvQyjyjAA6MQAA6VSjykQSkyZaLAAQRZAAOFIIQHIEJGJGIQSkSkAAaVQAAaMykSjQmJGJnIETQuFIIxZAAQ6LAAykykg");
	var mask_graphics_449 = new cjs.Graphics().p("EgZjAkWQvFvFAA1RQAA1ZPFvEQPFu9VQAAQOIAALcGnQFzDXE+E/QPFPEAAVZQAAVRvFPFQk+E+lzDgQrcGnuIAAQ1QAAvFvFg");
	var mask_graphics_450 = new cjs.Graphics().p("ArDb8QrlrmAAwWQAAwcLlrmQLlrfQXAAQK3AAIzFFQEdClD1D1QLmLmAAQcQAAQWrmLmQj1D1kdCsQozFFq3AAQwXAArlrmg");
	var mask_graphics_451 = new cjs.Graphics().p("ADdTjQoGoHAArcQAArgIGoGQIHoCLcAAQHmAAGKDiQDHB0CrCsQIHIGAALgQAALcoHIHQirCrjHB5QmKDinmAAQrcAAoHoGg");
	var mask_graphics_452 = new cjs.Graphics().p("AR9LJQknkoAAmhQAAmjEnkoQEoklGiAAQEVAADgCBQByBCBiBiQEoEoAAGjQAAGhkoEoQhiBihyBFQjgCBkVAAQmiAAkokog");
	var mask_graphics_453 = new cjs.Graphics().p("EAgeAIfQhJhJAAhmQAAhoBJhJQBIhIBnAAQBFAAA3AgQAcAQAYAYQBJBJAABoQAABmhJBJQgYAYgcARQg3AghFAAQhnAAhIhJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(367).to({graphics:mask_graphics_367,x:250.2,y:61.6}).wait(1).to({graphics:mask_graphics_368,x:282.4,y:90}).wait(1).to({graphics:mask_graphics_369,x:314.7,y:81.7}).wait(1).to({graphics:mask_graphics_370,x:346.9,y:73.3}).wait(1).to({graphics:mask_graphics_371,x:379.2,y:65}).wait(1).to({graphics:mask_graphics_372,x:411.4,y:56.6}).wait(1).to({graphics:mask_graphics_373,x:443.7,y:48.3}).wait(1).to({graphics:mask_graphics_374,x:461.2,y:39.9}).wait(1).to({graphics:mask_graphics_375,x:460.7,y:33.1}).wait(71).to({graphics:mask_graphics_446,x:460.5,y:33.1}).wait(1).to({graphics:mask_graphics_447,x:462.7,y:42.4}).wait(1).to({graphics:mask_graphics_448,x:435,y:51.7}).wait(1).to({graphics:mask_graphics_449,x:398,y:61.1}).wait(1).to({graphics:mask_graphics_450,x:361.1,y:70.4}).wait(1).to({graphics:mask_graphics_451,x:324.1,y:79.8}).wait(1).to({graphics:mask_graphics_452,x:287.2,y:89.1}).wait(1).to({graphics:mask_graphics_453,x:250.2,y:61.6}).wait(447));

	// txt_region
	this.locationSubTitleContainer = new lib.txt_region();
	this.locationSubTitleContainer.parent = this;
	this.locationSubTitleContainer.setTransform(196,199.5,1,1,0,0,0,126,25.5);
	this.locationSubTitleContainer.alpha = 0;
	this.locationSubTitleContainer._off = true;

	var maskedShapeInstanceList = [this.locationSubTitleContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.locationSubTitleContainer).wait(378).to({_off:false},0).to({y:179.5,alpha:1},5,cjs.Ease.get(1)).wait(54).to({y:159.5,alpha:0},5).to({_off:true},1).wait(457));

	// txt_location
	this.locationTitleContainer = new lib.txt_location();
	this.locationTitleContainer.parent = this;
	this.locationTitleContainer.setTransform(196,157.5,1,1,0,0,0,126,25.5);
	this.locationTitleContainer.alpha = 0;
	this.locationTitleContainer._off = true;

	var maskedShapeInstanceList = [this.locationTitleContainer];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.locationTitleContainer).wait(377).to({_off:false},0).to({y:137.5,alpha:1},5,cjs.Ease.get(1)).wait(54).to({y:117.5,alpha:0},5).to({_off:true},2).wait(457));

	// grad_location
	this.instance_5 = new lib.grad();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-3544.4,761.2,0.833,2.8,90,0,0,913.5,1515.9);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(367).to({_off:false},0).to({_off:true},87).wait(446));

	// img
	this.IMG_container = new lib.IMG();
	this.IMG_container.parent = this;
	this.IMG_container.setTransform(150,125,1,1,0,0,0,150,125);
	this.IMG_container.alpha = 0;

	var maskedShapeInstanceList = [this.IMG_container];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.IMG_container).wait(367).to({alpha:1},8).wait(71).to({alpha:0},7).to({_off:true},1).wait(446));

	// Dot
	this.instance_6 = new lib.img_Mask();
	this.instance_6.parent = this;
	this.instance_6.setTransform(500.4,123.2,1.3,1.3,0,0,0,19.1,19.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(367).to({_off:false},0).to({scaleX:29.17,scaleY:29.17,x:1017.9,y:590.3},8).wait(71).to({x:1017.7},0).to({regX:19.2,regY:19.2,scaleX:1.3,scaleY:1.3,x:500.5,y:123.4},7).to({_off:true},1).wait(446));

	// Scene3_Top
	this.instance_7 = new lib.Scene3_Top("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(407.1,418.2,1.267,1.267,0,0,0,321.4,330.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).wait(1).to({regX:240.6,regY:206.8,x:305.9,y:262.1,startPosition:1},0).wait(1).to({x:307.1,startPosition:2},0).wait(1).to({x:308.3,y:262.2,startPosition:3},0).wait(1).to({x:309.5,startPosition:4},0).wait(1).to({x:310.7,y:262.3,startPosition:5},0).wait(1).to({x:311.9,startPosition:6},0).wait(1).to({x:313.1,y:262.4,startPosition:7},0).wait(1).to({x:314.2,y:262.5,startPosition:8},0).wait(1).to({x:315.4,startPosition:9},0).wait(1).to({x:316.6,y:262.6,startPosition:10},0).wait(1).to({x:317.8,startPosition:11},0).wait(1).to({x:319,y:262.7,startPosition:12},0).wait(1).to({x:320.2,startPosition:13},0).wait(1).to({x:321.4,y:262.8,startPosition:14},0).wait(1).to({x:322.6,y:262.9,startPosition:15},0).wait(1).to({x:323.8,startPosition:16},0).wait(1).to({x:324.9,y:263,startPosition:17},0).wait(1).to({x:326.1,startPosition:18},0).wait(1).to({x:327.3,y:263.1,startPosition:19},0).wait(1).to({x:328.5,startPosition:20},0).wait(1).to({x:329.7,y:263.2,startPosition:21},0).wait(1).to({x:330.9,y:263.3,startPosition:22},0).wait(1).to({x:332.1,startPosition:23},0).wait(1).to({x:333.3,y:263.4,startPosition:24},0).wait(1).to({x:334.4,startPosition:25},0).wait(1).to({x:335.6,y:263.5,startPosition:26},0).wait(1).to({x:336.8,startPosition:27},0).wait(1).to({x:338,y:263.6,startPosition:28},0).wait(1).to({x:339.2,y:263.7,startPosition:29},0).wait(1).to({x:340.4,startPosition:30},0).wait(1).to({x:341.6,y:263.8,startPosition:31},0).wait(1).to({x:342.8,startPosition:32},0).wait(1).to({x:343.9,y:263.9,startPosition:33},0).wait(1).to({x:345.1,startPosition:34},0).wait(1).to({x:346.3,y:264,startPosition:35},0).wait(1).to({x:347.5,y:264.1,startPosition:36},0).wait(1).to({x:348.7,startPosition:37},0).wait(1).to({x:349.9,y:264.2,startPosition:38},0).wait(1).to({x:351.1,startPosition:39},0).wait(1).to({x:352.3,y:264.3,startPosition:40},0).wait(1).to({x:353.4,startPosition:41},0).wait(1).to({x:354.6,y:264.4,startPosition:42},0).wait(1).to({x:355.8,y:264.5,startPosition:43},0).wait(1).to({x:357,startPosition:44},0).wait(1).to({x:358.2,y:264.6,startPosition:45},0).wait(1).to({x:359.4,startPosition:46},0).wait(1).to({x:360.6,y:264.7,startPosition:47},0).wait(1).to({x:361.8,startPosition:48},0).wait(1).to({x:362.9,y:264.8,startPosition:49},0).wait(1).to({x:364.1,y:264.9,startPosition:50},0).wait(1).to({x:365.3,startPosition:51},0).wait(1).to({x:366.5,y:265,startPosition:52},0).wait(1).to({x:367.7,startPosition:53},0).wait(1).to({x:368.9,y:265.1,startPosition:54},0).wait(1).to({x:370.1,startPosition:55},0).wait(1).to({x:371.3,y:265.2,startPosition:56},0).wait(1).to({x:372.4,y:265.3,startPosition:57},0).wait(1).to({x:373.6,startPosition:58},0).wait(1).to({x:374.8,y:265.4,startPosition:59},0).wait(1).to({x:376,startPosition:60},0).wait(1).to({x:377.2,y:265.5,startPosition:61},0).wait(1).to({x:378.4,startPosition:62},0).wait(1).to({x:379.6,y:265.6,startPosition:63},0).wait(1).to({x:380.8,y:265.7,startPosition:64},0).wait(1).to({x:381.9,startPosition:65},0).wait(1).to({x:383.1,y:265.8,startPosition:66},0).wait(1).to({x:384.3,startPosition:67},0).wait(1).to({x:385.5,y:265.9,startPosition:68},0).wait(1).to({x:386.7,startPosition:69},0).wait(1).to({x:387.9,y:266,startPosition:70},0).wait(1).to({x:389.1,y:266.1,startPosition:71},0).wait(1).to({x:390.3,startPosition:72},0).wait(1).to({x:391.5,y:266.2,startPosition:73},0).wait(1).to({x:392.6,startPosition:74},0).wait(1).to({x:393.8,y:266.3,startPosition:75},0).wait(1).to({x:395,startPosition:76},0).wait(1).to({x:396.2,y:266.4,startPosition:77},0).wait(1).to({x:397.4,y:266.5,startPosition:78},0).wait(1).to({x:398.6,startPosition:79},0).wait(1).to({x:399.8,y:266.6,startPosition:80},0).wait(1).to({x:401,startPosition:81},0).wait(1).to({x:402.1,y:266.7,startPosition:82},0).wait(1).to({x:403.3,startPosition:83},0).wait(1).to({x:404.5,y:266.8,startPosition:84},0).wait(1).to({x:405.7,y:266.9,startPosition:85},0).wait(1).to({x:406.9,startPosition:86},0).wait(1).to({x:408.1,y:267,startPosition:87},0).wait(1).to({x:409.3,startPosition:88},0).wait(1).to({x:410.5,y:267.1,startPosition:89},0).wait(1).to({x:411.6,startPosition:90},0).wait(1).to({x:412.8,y:267.2,startPosition:91},0).wait(1).to({x:414,y:267.3,startPosition:92},0).wait(1).to({x:415.2,startPosition:93},0).wait(1).to({x:416.4,y:267.4,startPosition:94},0).wait(1).to({x:417.6,startPosition:95},0).wait(1).to({x:418.8,y:267.5,startPosition:96},0).wait(1).to({x:420,startPosition:97},0).wait(1).to({x:421.1,y:267.6,startPosition:98},0).wait(1).to({x:422.3,y:267.7,startPosition:99},0).wait(1).to({x:423.5,startPosition:100},0).wait(1).to({x:424.7,y:267.8,startPosition:101},0).wait(1).to({x:425.9,startPosition:102},0).wait(1).to({x:427.1,y:267.9,startPosition:103},0).wait(1).to({x:428.3,startPosition:104},0).wait(1).to({x:429.5,y:268,startPosition:105},0).wait(1).to({x:430.6,y:268.1,startPosition:106},0).wait(1).to({x:431.8,startPosition:107},0).wait(1).to({x:433,y:268.2,startPosition:108},0).wait(1).to({x:434.2,startPosition:109},0).wait(1).to({x:435.4,y:268.3,startPosition:110},0).wait(1).to({x:436.6,startPosition:111},0).wait(1).to({x:437.8,y:268.4,startPosition:112},0).wait(1).to({x:439,y:268.5,startPosition:113},0).wait(1).to({x:440.2,startPosition:114},0).wait(1).to({x:441.3,y:268.6,startPosition:115},0).wait(1).to({x:442.5,startPosition:116},0).wait(1).to({x:443.7,y:268.7,startPosition:117},0).wait(1).to({x:444.9,startPosition:118},0).wait(1).to({x:446.1,y:268.8,startPosition:119},0).wait(1).to({x:447.3,y:268.9,startPosition:120},0).wait(1).to({x:448.5,startPosition:121},0).wait(1).to({x:449.7,y:269,startPosition:122},0).wait(1).to({x:450.8,startPosition:123},0).wait(1).to({x:452,y:269.1,startPosition:124},0).wait(1).to({x:453.2,startPosition:125},0).wait(1).to({x:454.4,y:269.2,startPosition:126},0).wait(1).to({x:455.6,y:269.3,startPosition:127},0).wait(1).to({x:456.8,startPosition:128},0).wait(1).to({x:458,y:269.4,startPosition:129},0).wait(1).to({x:459.2,startPosition:130},0).wait(1).to({x:460.3,y:269.5,startPosition:131},0).wait(1).to({x:461.5,startPosition:132},0).wait(1).to({x:462.7,y:269.6,startPosition:133},0).wait(1).to({x:463.9,y:269.7,startPosition:134},0).wait(1).to({x:465.1,startPosition:135},0).wait(1).to({x:466.3,y:269.8,startPosition:136},0).wait(1).to({x:467.5,startPosition:137},0).wait(1).to({x:468.7,y:269.9,startPosition:138},0).wait(1).to({x:469.8,startPosition:139},0).wait(1).to({x:471,y:270,startPosition:140},0).wait(1).to({x:472.2,y:270.1,startPosition:141},0).wait(1).to({x:473.4,startPosition:142},0).wait(1).to({x:474.6,y:270.2,startPosition:143},0).wait(1).to({x:475.8,startPosition:144},0).wait(1).to({x:477,y:270.3,startPosition:145},0).wait(1).to({x:478.2,startPosition:146},0).wait(1).to({x:479.3,y:270.4,startPosition:147},0).wait(1).to({x:480.5,y:270.5,startPosition:148},0).wait(1).to({x:481.7,startPosition:149},0).wait(1).to({x:482.9,y:270.6,startPosition:150},0).wait(1).to({x:484.1,startPosition:151},0).wait(1).to({x:485.3,y:270.7,startPosition:152},0).wait(1).to({x:486.5,startPosition:153},0).wait(1).to({x:487.7,y:270.8,startPosition:154},0).wait(1).to({x:488.8,y:270.9,startPosition:155},0).wait(1).to({x:490,startPosition:156},0).wait(1).to({x:491.2,y:271,startPosition:157},0).wait(1).to({x:492.4,startPosition:158},0).wait(1).to({x:493.6,y:271.1,startPosition:159},0).wait(1).to({x:494.8,startPosition:160},0).wait(1).to({x:496,y:271.2,startPosition:161},0).wait(1).to({x:497.2,y:271.3,startPosition:162},0).wait(1).to({x:498.3,startPosition:163},0).wait(1).to({x:499.5,y:271.4,startPosition:164},0).wait(1).to({x:500.7,startPosition:165},0).wait(1).to({x:501.9,y:271.5,startPosition:166},0).wait(1).to({x:503.1,startPosition:167},0).wait(1).to({x:504.3,y:271.6,startPosition:168},0).wait(1).to({x:505.5,y:271.7,startPosition:169},0).wait(1).to({x:506.7,startPosition:170},0).wait(1).to({x:507.9,y:271.8,startPosition:171},0).wait(1).to({x:509,startPosition:172},0).wait(1).to({x:510.2,y:271.9,startPosition:173},0).wait(1).to({x:511.4,startPosition:174},0).wait(1).to({x:512.6,y:272,startPosition:175},0).wait(1).to({x:513.8,y:272.1,startPosition:176},0).wait(1).to({x:515,startPosition:177},0).wait(1).to({x:516.2,y:272.2,startPosition:178},0).wait(1).to({x:517.4,startPosition:179},0).wait(1).to({x:518.5,y:272.3,startPosition:180},0).wait(1).to({x:519.7,startPosition:181},0).wait(1).to({x:520.9,y:272.4,startPosition:182},0).wait(1).to({x:522.1,y:272.5,startPosition:183},0).wait(1).to({x:523.3,startPosition:184},0).wait(1).to({x:524.5,y:272.6,startPosition:185},0).wait(1).to({x:525.7,startPosition:186},0).wait(1).to({x:526.9,y:272.7,startPosition:187},0).wait(1).to({x:528,startPosition:188},0).wait(1).to({x:529.2,y:272.8,startPosition:189},0).wait(1).to({x:530.4,y:272.9,startPosition:190},0).wait(1).to({x:531.6,startPosition:191},0).wait(1).to({x:532.8,y:273,startPosition:192},0).wait(1).to({x:534,startPosition:193},0).wait(1).to({x:535.2,y:273.1,startPosition:194},0).wait(1).to({x:536.4,startPosition:195},0).wait(1).to({x:537.5,y:273.2,startPosition:196},0).wait(1).to({x:538.7,y:273.3,startPosition:197},0).wait(1).to({x:539.9,startPosition:198},0).wait(1).to({x:541.1,y:273.4,startPosition:199},0).wait(1).to({x:542.3,startPosition:200},0).wait(1).to({x:543.5,y:273.5,startPosition:201},0).wait(1).to({x:544.7,startPosition:202},0).wait(1).to({x:545.9,y:273.6,startPosition:203},0).wait(1).to({x:547,y:273.7,startPosition:204},0).wait(1).to({x:548.2,startPosition:205},0).wait(1).to({x:549.4,y:273.8,startPosition:206},0).wait(1).to({x:550.6,startPosition:207},0).wait(1).to({x:551.8,y:273.9,startPosition:208},0).wait(1).to({x:553,startPosition:209},0).wait(1).to({x:554.2,y:274,startPosition:210},0).wait(1).to({x:555.4,y:274.1,startPosition:211},0).wait(1).to({x:556.6,startPosition:212},0).wait(1).to({x:557.7,y:274.2,startPosition:213},0).wait(1).to({x:558.9,startPosition:214},0).wait(1).to({x:560.1,y:274.3,startPosition:215},0).wait(1).to({x:561.3,startPosition:216},0).wait(1).to({x:562.5,y:274.4,startPosition:217},0).wait(1).to({x:563.7,y:274.5,startPosition:218},0).wait(1).to({x:564.9,startPosition:219},0).wait(1).to({x:566.1,y:274.6,startPosition:220},0).wait(1).to({x:567.2,startPosition:221},0).wait(1).to({x:568.4,y:274.7,startPosition:222},0).wait(1).to({x:569.6,startPosition:223},0).wait(1).to({x:570.8,y:274.8,startPosition:224},0).wait(1).to({x:572,y:274.9,startPosition:225},0).wait(1).to({x:573.2,startPosition:226},0).wait(1).to({x:574.4,y:275,startPosition:227},0).wait(1).to({x:575.6,startPosition:228},0).wait(1).to({x:576.7,y:275.1,startPosition:229},0).wait(1).to({x:577.9,startPosition:230},0).wait(1).to({x:579.1,y:275.2,startPosition:231},0).wait(1).to({x:580.3,y:275.3,startPosition:232},0).wait(1).to({x:581.5,startPosition:233},0).wait(1).to({x:582.7,y:275.4,startPosition:234},0).wait(1).to({x:583.9,startPosition:235},0).wait(1).to({x:585.1,y:275.5,startPosition:236},0).wait(1).to({x:586.2,startPosition:237},0).wait(1).to({x:587.4,y:275.6,startPosition:238},0).wait(1).to({x:588.6,y:275.7,startPosition:239},0).wait(1).to({x:589.8,startPosition:240},0).wait(1).to({x:591,y:275.8,startPosition:241},0).wait(1).to({x:592.2,startPosition:242},0).wait(1).to({x:593.4,y:275.9,startPosition:243},0).wait(1).to({x:594.6,startPosition:244},0).wait(1).to({x:595.7,y:276,startPosition:245},0).wait(1).to({x:596.9,y:276.1,startPosition:246},0).wait(1).to({x:598.1,startPosition:247},0).wait(1).to({x:599.3,y:276.2,startPosition:248},0).wait(1).to({x:600.5,startPosition:249},0).wait(1).to({x:601.7,y:276.3,startPosition:250},0).wait(1).to({x:602.9,startPosition:251},0).wait(1).to({x:604.1,y:276.4,startPosition:252},0).wait(1).to({x:605.2,y:276.5,startPosition:253},0).wait(1).to({x:606.4,startPosition:254},0).wait(1).to({x:607.6,y:276.6,startPosition:255},0).wait(1).to({x:608.8,startPosition:256},0).wait(1).to({x:610,y:276.7,startPosition:257},0).wait(1).to({x:611.2,startPosition:258},0).wait(1).to({x:612.4,y:276.8,startPosition:259},0).wait(1).to({x:613.6,y:276.9,startPosition:260},0).wait(1).to({x:614.8,startPosition:261},0).wait(1).to({x:615.9,y:277,startPosition:262},0).wait(1).to({x:617.1,startPosition:263},0).wait(1).to({x:618.3,y:277.1,startPosition:264},0).wait(1).to({x:619.5,startPosition:265},0).wait(1).to({x:620.7,y:277.2,startPosition:266},0).wait(1).to({x:621.9,y:277.3,startPosition:267},0).wait(1).to({x:623.1,startPosition:268},0).wait(1).to({x:624.3,y:277.4,startPosition:269},0).wait(1).to({x:625.4,startPosition:270},0).wait(1).to({x:626.6,y:277.5,startPosition:271},0).wait(1).to({x:627.8,startPosition:272},0).wait(1).to({x:629,y:277.6,startPosition:273},0).wait(1).to({x:630.2,y:277.7,startPosition:274},0).wait(1).to({x:631.4,startPosition:275},0).wait(1).to({x:632.6,y:277.8,startPosition:276},0).wait(1).to({x:633.8,startPosition:277},0).wait(1).to({x:634.9,y:277.9,startPosition:278},0).wait(1).to({x:636.1,startPosition:279},0).wait(1).to({x:637.3,y:278,startPosition:280},0).wait(1).to({x:638.5,y:278.1,startPosition:281},0).wait(1).to({x:639.7,startPosition:282},0).wait(1).to({x:640.9,y:278.2,startPosition:283},0).wait(1).to({x:642.1,startPosition:284},0).wait(1).to({x:643.3,y:278.3,startPosition:285},0).wait(1).to({x:644.4,startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({startPosition:289},0).wait(1).to({startPosition:290},0).wait(1).to({startPosition:291},0).wait(1).to({startPosition:292},0).wait(1).to({startPosition:293},0).wait(1).to({startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:306},0).wait(1).to({startPosition:307},0).wait(1).to({startPosition:308},0).wait(1).to({startPosition:309},0).wait(1).to({startPosition:310},0).wait(1).to({startPosition:311},0).wait(1).to({startPosition:312},0).wait(1).to({startPosition:313},0).wait(1).to({startPosition:314},0).wait(1).to({startPosition:315},0).wait(1).to({startPosition:316},0).wait(1).to({startPosition:317},0).wait(1).to({startPosition:318},0).wait(1).to({startPosition:319},0).wait(1).to({startPosition:320},0).wait(1).to({startPosition:321},0).wait(1).to({startPosition:322},0).wait(1).to({startPosition:323},0).wait(1).to({startPosition:324},0).wait(1).to({startPosition:325},0).wait(1).to({startPosition:326},0).wait(1).to({startPosition:327},0).wait(1).to({startPosition:328},0).wait(1).to({startPosition:329},0).wait(1).to({startPosition:330},0).wait(1).to({startPosition:331},0).wait(1).to({startPosition:332},0).wait(1).to({startPosition:333},0).wait(1).to({startPosition:334},0).wait(1).to({startPosition:335},0).wait(1).to({startPosition:336},0).wait(1).to({startPosition:337},0).wait(1).to({startPosition:338},0).wait(1).to({startPosition:339},0).wait(1).to({scaleX:3.63,scaleY:3.63,x:967.5,y:604.8,startPosition:340},0).wait(1).to({scaleX:5.99,scaleY:5.99,x:1290.7,y:931.2,startPosition:341},0).wait(1).to({scaleX:8.35,scaleY:8.35,x:1613.7,y:1257.7,startPosition:342},0).wait(1).to({scaleX:10.7,scaleY:10.7,x:1936.8,y:1584.1,startPosition:343},0).wait(1).to({scaleX:13.06,scaleY:13.06,x:2259.9,y:1910.5,startPosition:344},0).wait(1).to({scaleX:15.42,scaleY:15.42,x:2583,y:2236.9,startPosition:345},0).wait(1).to({scaleX:17.78,scaleY:17.78,x:2906.1,y:2563.4,startPosition:346},0).wait(1).to({scaleX:20.14,scaleY:20.14,x:3229.2,y:2889.8,startPosition:347},0).wait(1).to({startPosition:348},0).wait(1).to({startPosition:349},0).wait(1).to({startPosition:350},0).wait(1).to({startPosition:351},0).wait(1).to({startPosition:352},0).wait(1).to({startPosition:353},0).wait(1).to({startPosition:354},0).wait(1).to({startPosition:355},0).wait(1).to({startPosition:356},0).wait(1).to({startPosition:357},0).wait(1).to({startPosition:358},0).wait(1).to({startPosition:359},0).wait(1).to({startPosition:360},0).wait(1).to({startPosition:361},0).wait(1).to({startPosition:362},0).wait(1).to({startPosition:363},0).wait(1).to({startPosition:364},0).wait(1).to({startPosition:365},0).wait(1).to({startPosition:366},0).wait(1).to({startPosition:367},0).wait(1).to({startPosition:368},0).wait(1).to({startPosition:369},0).wait(1).to({startPosition:370},0).wait(1).to({startPosition:371},0).wait(1).to({startPosition:372},0).wait(1).to({startPosition:373},0).wait(1).to({startPosition:374},0).wait(1).to({startPosition:375},0).wait(1).to({startPosition:376},0).wait(1).to({startPosition:377},0).wait(1).to({startPosition:378},0).wait(1).to({startPosition:379},0).wait(1).to({startPosition:380},0).wait(1).to({startPosition:381},0).wait(1).to({startPosition:382},0).wait(1).to({startPosition:383},0).wait(1).to({startPosition:384},0).wait(1).to({startPosition:385},0).wait(1).to({startPosition:386},0).wait(1).to({startPosition:387},0).wait(1).to({startPosition:388},0).wait(1).to({startPosition:389},0).wait(1).to({startPosition:390},0).wait(1).to({startPosition:391},0).wait(1).to({startPosition:392},0).wait(1).to({startPosition:393},0).wait(1).to({startPosition:394},0).wait(1).to({startPosition:395},0).wait(1).to({startPosition:396},0).wait(1).to({startPosition:397},0).wait(1).to({startPosition:398},0).wait(1).to({startPosition:399},0).wait(1).to({startPosition:400},0).wait(1).to({startPosition:401},0).wait(1).to({startPosition:402},0).wait(1).to({startPosition:403},0).wait(1).to({startPosition:404},0).wait(1).to({startPosition:405},0).wait(1).to({startPosition:406},0).wait(1).to({startPosition:407},0).wait(1).to({startPosition:408},0).wait(1).to({startPosition:409},0).wait(1).to({startPosition:410},0).wait(1).to({startPosition:411},0).wait(1).to({startPosition:412},0).wait(1).to({startPosition:413},0).wait(1).to({startPosition:414},0).wait(1).to({startPosition:415},0).wait(1).to({startPosition:416},0).wait(1).to({startPosition:417},0).wait(1).to({startPosition:418},0).wait(1).to({scaleX:17.45,scaleY:17.45,x:2859.9,y:2516.7,startPosition:419},0).wait(1).to({scaleX:14.75,scaleY:14.75,x:2490.7,y:2143.7,startPosition:420},0).wait(1).to({scaleX:12.05,scaleY:12.05,x:2122,y:1771.3,startPosition:421},0).wait(1).to({scaleX:9.36,scaleY:9.36,x:1752.2,y:1397.6,startPosition:422},0).wait(1).to({scaleX:6.66,scaleY:6.66,x:1383,y:1024.5,startPosition:423},0).wait(1).to({scaleX:3.96,scaleY:3.96,x:1014.3,y:652.2,startPosition:424},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:644.4,y:278.3,startPosition:425},0).wait(1).to({startPosition:426},0).wait(1).to({startPosition:427},0).wait(1).to({startPosition:428},0).wait(1).to({startPosition:429},0).wait(1).to({startPosition:430},0).wait(1).to({startPosition:431},0).wait(1).to({startPosition:432},0).wait(1).to({startPosition:433},0).wait(1).to({startPosition:434},0).wait(1).to({startPosition:435},0).wait(1).to({startPosition:436},0).wait(1).to({startPosition:437},0).wait(1).to({startPosition:438},0).wait(1).to({startPosition:439},0).wait(1).to({startPosition:440},0).wait(1).to({startPosition:441},0).wait(1).to({startPosition:442},0).wait(1).to({startPosition:443},0).wait(1).to({startPosition:444},0).wait(1).to({startPosition:445},0).wait(1).to({startPosition:446},0).wait(1).to({startPosition:447},0).wait(1).to({startPosition:448},0).wait(1).to({startPosition:449},0).wait(1).to({startPosition:450},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(420));

	// BG_grad
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.2,-125.2,-0.2,124.7).s().p("EhH3ATiMAAAgnDMCPvAAAMAAAAnDg");
	this.shape_1.setTransform(485,125,1.054,1);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(330).to({_off:false},0).to({_off:true},150).wait(420));

	// Scene3_bottom
	this.instance_8 = new lib.Scene3_Bottom("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(333.3,262.1,1.267,1.267,0,0,0,263.1,206.9);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(28).to({_off:false},0).wait(1).to({x:334.4,startPosition:1},0).wait(1).to({x:335.6,y:262.2,startPosition:2},0).wait(1).to({x:336.8,startPosition:3},0).wait(1).to({x:338,y:262.3,startPosition:4},0).wait(1).to({x:339.2,startPosition:5},0).wait(1).to({x:340.4,y:262.4,startPosition:6},0).wait(1).to({x:341.6,startPosition:7},0).wait(1).to({x:342.7,y:262.5,startPosition:8},0).wait(1).to({x:343.9,y:262.6,startPosition:9},0).wait(1).to({x:345.1,startPosition:10},0).wait(1).to({x:346.3,y:262.7,startPosition:11},0).wait(1).to({x:347.5,startPosition:12},0).wait(1).to({x:348.7,y:262.8,startPosition:13},0).wait(1).to({x:349.9,startPosition:14},0).wait(1).to({x:351.1,y:262.9,startPosition:15},0).wait(1).to({x:352.3,y:263,startPosition:16},0).wait(1).to({x:353.4,startPosition:17},0).wait(1).to({x:354.6,y:263.1,startPosition:18},0).wait(1).to({x:355.8,startPosition:19},0).wait(1).to({x:357,y:263.2,startPosition:20},0).wait(1).to({x:358.2,startPosition:21},0).wait(1).to({x:359.4,y:263.3,startPosition:22},0).wait(1).to({x:360.6,y:263.4,startPosition:23},0).wait(1).to({x:361.8,startPosition:24},0).wait(1).to({x:362.9,y:263.5,startPosition:25},0).wait(1).to({x:364.1,startPosition:26},0).wait(1).to({x:365.3,y:263.6,startPosition:27},0).wait(1).to({x:366.5,startPosition:28},0).wait(1).to({x:367.7,y:263.7,startPosition:29},0).wait(1).to({x:368.9,y:263.8,startPosition:30},0).wait(1).to({x:370.1,startPosition:31},0).wait(1).to({x:371.3,y:263.9,startPosition:32},0).wait(1).to({x:372.4,startPosition:33},0).wait(1).to({x:373.6,y:264,startPosition:34},0).wait(1).to({x:374.8,startPosition:35},0).wait(1).to({x:376,y:264.1,startPosition:36},0).wait(1).to({x:377.2,y:264.2,startPosition:37},0).wait(1).to({x:378.4,startPosition:38},0).wait(1).to({x:379.6,y:264.3,startPosition:39},0).wait(1).to({x:380.8,startPosition:40},0).wait(1).to({x:381.9,y:264.4,startPosition:41},0).wait(1).to({x:383.1,startPosition:42},0).wait(1).to({x:384.3,y:264.5,startPosition:43},0).wait(1).to({x:385.5,y:264.6,startPosition:44},0).wait(1).to({x:386.7,startPosition:45},0).wait(1).to({x:387.9,y:264.7,startPosition:46},0).wait(1).to({x:389.1,startPosition:47},0).wait(1).to({x:390.3,y:264.8,startPosition:48},0).wait(1).to({x:391.4,startPosition:49},0).wait(1).to({x:392.6,y:264.9,startPosition:50},0).wait(1).to({x:393.8,y:265,startPosition:51},0).wait(1).to({x:395,startPosition:52},0).wait(1).to({x:396.2,y:265.1,startPosition:53},0).wait(1).to({x:397.4,startPosition:54},0).wait(1).to({x:398.6,y:265.2,startPosition:55},0).wait(1).to({x:399.8,startPosition:56},0).wait(1).to({x:400.9,y:265.3,startPosition:57},0).wait(1).to({x:402.1,y:265.4,startPosition:58},0).wait(1).to({x:403.3,startPosition:59},0).wait(1).to({x:404.5,y:265.5,startPosition:60},0).wait(1).to({x:405.7,startPosition:61},0).wait(1).to({x:406.9,y:265.6,startPosition:62},0).wait(1).to({x:408.1,startPosition:63},0).wait(1).to({x:409.3,y:265.7,startPosition:64},0).wait(1).to({x:410.5,y:265.8,startPosition:65},0).wait(1).to({x:411.6,startPosition:66},0).wait(1).to({x:412.8,y:265.9,startPosition:67},0).wait(1).to({x:414,startPosition:68},0).wait(1).to({x:415.2,y:266,startPosition:69},0).wait(1).to({x:416.4,startPosition:70},0).wait(1).to({x:417.6,y:266.1,startPosition:71},0).wait(1).to({x:418.8,y:266.2,startPosition:72},0).wait(1).to({x:420,startPosition:73},0).wait(1).to({x:421.1,y:266.3,startPosition:74},0).wait(1).to({x:422.3,startPosition:75},0).wait(1).to({x:423.5,y:266.4,startPosition:76},0).wait(1).to({x:424.7,startPosition:77},0).wait(1).to({x:425.9,y:266.5,startPosition:78},0).wait(1).to({x:427.1,y:266.6,startPosition:79},0).wait(1).to({x:428.3,startPosition:80},0).wait(1).to({x:429.5,y:266.7,startPosition:81},0).wait(1).to({x:430.6,startPosition:82},0).wait(1).to({x:431.8,y:266.8,startPosition:83},0).wait(1).to({x:433,startPosition:84},0).wait(1).to({x:434.2,y:266.9,startPosition:85},0).wait(1).to({x:435.4,y:267,startPosition:86},0).wait(1).to({x:436.6,startPosition:87},0).wait(1).to({x:437.8,y:267.1,startPosition:88},0).wait(1).to({x:439,startPosition:89},0).wait(1).to({x:440.1,y:267.2,startPosition:90},0).wait(1).to({x:441.3,startPosition:91},0).wait(1).to({x:442.5,y:267.3,startPosition:92},0).wait(1).to({x:443.7,y:267.4,startPosition:93},0).wait(1).to({x:444.9,startPosition:94},0).wait(1).to({x:446.1,y:267.5,startPosition:95},0).wait(1).to({x:447.3,startPosition:96},0).wait(1).to({x:448.5,y:267.6,startPosition:97},0).wait(1).to({x:449.6,startPosition:98},0).wait(1).to({x:450.8,y:267.7,startPosition:99},0).wait(1).to({x:452,y:267.8,startPosition:100},0).wait(1).to({x:453.2,startPosition:101},0).wait(1).to({x:454.4,y:267.9,startPosition:102},0).wait(1).to({x:455.6,startPosition:103},0).wait(1).to({x:456.8,y:268,startPosition:104},0).wait(1).to({x:458,y:268.1,startPosition:105},0).wait(1).to({x:459.1,startPosition:106},0).wait(1).to({x:460.3,y:268.2,startPosition:107},0).wait(1).to({x:461.5,startPosition:108},0).wait(1).to({x:462.7,y:268.3,startPosition:109},0).wait(1).to({x:463.9,startPosition:110},0).wait(1).to({x:465.1,y:268.4,startPosition:111},0).wait(1).to({x:466.3,y:268.5,startPosition:112},0).wait(1).to({x:467.5,startPosition:113},0).wait(1).to({x:468.7,y:268.6,startPosition:114},0).wait(1).to({x:469.8,startPosition:115},0).wait(1).to({x:471,y:268.7,startPosition:116},0).wait(1).to({x:472.2,startPosition:117},0).wait(1).to({x:473.4,y:268.8,startPosition:118},0).wait(1).to({x:474.6,y:268.9,startPosition:119},0).wait(1).to({x:475.8,startPosition:120},0).wait(1).to({x:477,y:269,startPosition:121},0).wait(1).to({x:478.2,startPosition:122},0).wait(1).to({x:479.3,y:269.1,startPosition:123},0).wait(1).to({x:480.5,startPosition:124},0).wait(1).to({x:481.7,y:269.2,startPosition:125},0).wait(1).to({x:482.9,y:269.3,startPosition:126},0).wait(1).to({x:484.1,startPosition:127},0).wait(1).to({x:485.3,y:269.4,startPosition:128},0).wait(1).to({x:486.5,startPosition:129},0).wait(1).to({x:487.7,y:269.5,startPosition:130},0).wait(1).to({x:488.8,startPosition:131},0).wait(1).to({x:490,y:269.6,startPosition:132},0).wait(1).to({x:491.2,y:269.7,startPosition:133},0).wait(1).to({x:492.4,startPosition:134},0).wait(1).to({x:493.6,y:269.8,startPosition:135},0).wait(1).to({x:494.8,startPosition:136},0).wait(1).to({x:496,y:269.9,startPosition:137},0).wait(1).to({x:497.2,startPosition:138},0).wait(1).to({x:498.3,y:270,startPosition:139},0).wait(1).to({x:499.5,y:270.1,startPosition:140},0).wait(1).to({x:500.7,startPosition:141},0).wait(1).to({x:501.9,y:270.2,startPosition:142},0).wait(1).to({x:503.1,startPosition:143},0).wait(1).to({x:504.3,y:270.3,startPosition:144},0).wait(1).to({x:505.5,startPosition:145},0).wait(1).to({x:506.7,y:270.4,startPosition:146},0).wait(1).to({x:507.8,y:270.5,startPosition:147},0).wait(1).to({x:509,startPosition:148},0).wait(1).to({x:510.2,y:270.6,startPosition:149},0).wait(1).to({x:511.4,startPosition:150},0).wait(1).to({x:512.6,y:270.7,startPosition:151},0).wait(1).to({x:513.8,startPosition:152},0).wait(1).to({x:515,y:270.8,startPosition:153},0).wait(1).to({x:516.2,y:270.9,startPosition:154},0).wait(1).to({x:517.3,startPosition:155},0).wait(1).to({x:518.5,y:271,startPosition:156},0).wait(1).to({x:519.7,startPosition:157},0).wait(1).to({x:520.9,y:271.1,startPosition:158},0).wait(1).to({x:522.1,startPosition:159},0).wait(1).to({x:523.3,y:271.2,startPosition:160},0).wait(1).to({x:524.5,y:271.3,startPosition:161},0).wait(1).to({x:525.7,startPosition:162},0).wait(1).to({x:526.9,y:271.4,startPosition:163},0).wait(1).to({x:528,startPosition:164},0).wait(1).to({x:529.2,y:271.5,startPosition:165},0).wait(1).to({x:530.4,startPosition:166},0).wait(1).to({x:531.6,y:271.6,startPosition:167},0).wait(1).to({x:532.8,y:271.7,startPosition:168},0).wait(1).to({x:534,startPosition:169},0).wait(1).to({x:535.2,y:271.8,startPosition:170},0).wait(1).to({x:536.4,startPosition:171},0).wait(1).to({x:537.5,y:271.9,startPosition:172},0).wait(1).to({x:538.7,startPosition:173},0).wait(1).to({x:539.9,y:272,startPosition:174},0).wait(1).to({x:541.1,y:272.1,startPosition:175},0).wait(1).to({x:542.3,startPosition:176},0).wait(1).to({x:543.5,y:272.2,startPosition:177},0).wait(1).to({x:544.7,startPosition:178},0).wait(1).to({x:545.9,y:272.3,startPosition:179},0).wait(1).to({x:547,startPosition:180},0).wait(1).to({x:548.2,y:272.4,startPosition:181},0).wait(1).to({x:549.4,y:272.5,startPosition:182},0).wait(1).to({x:550.6,startPosition:183},0).wait(1).to({x:551.8,y:272.6,startPosition:184},0).wait(1).to({x:553,startPosition:185},0).wait(1).to({x:554.2,y:272.7,startPosition:186},0).wait(1).to({x:555.4,startPosition:187},0).wait(1).to({x:556.5,y:272.8,startPosition:188},0).wait(1).to({x:557.7,y:272.9,startPosition:189},0).wait(1).to({x:558.9,startPosition:190},0).wait(1).to({x:560.1,y:273,startPosition:191},0).wait(1).to({x:561.3,startPosition:192},0).wait(1).to({x:562.5,y:273.1,startPosition:193},0).wait(1).to({x:563.7,startPosition:194},0).wait(1).to({x:564.9,y:273.2,startPosition:195},0).wait(1).to({x:566,y:273.3,startPosition:196},0).wait(1).to({x:567.2,startPosition:197},0).wait(1).to({x:568.4,y:273.4,startPosition:198},0).wait(1).to({x:569.6,startPosition:199},0).wait(1).to({x:570.8,y:273.5,startPosition:200},0).wait(1).to({x:572,startPosition:201},0).wait(1).to({x:573.2,y:273.6,startPosition:202},0).wait(1).to({x:574.4,y:273.7,startPosition:203},0).wait(1).to({x:575.6,startPosition:204},0).wait(1).to({x:576.7,y:273.8,startPosition:205},0).wait(1).to({x:577.9,startPosition:206},0).wait(1).to({x:579.1,y:273.9,startPosition:207},0).wait(1).to({x:580.3,startPosition:208},0).wait(1).to({x:581.5,y:274,startPosition:209},0).wait(1).to({x:582.7,y:274.1,startPosition:210},0).wait(1).to({x:583.9,startPosition:211},0).wait(1).to({x:585.1,y:274.2,startPosition:212},0).wait(1).to({x:586.2,startPosition:213},0).wait(1).to({x:587.4,y:274.3,startPosition:214},0).wait(1).to({x:588.6,startPosition:215},0).wait(1).to({x:589.8,y:274.4,startPosition:216},0).wait(1).to({x:591,y:274.5,startPosition:217},0).wait(1).to({x:592.2,startPosition:218},0).wait(1).to({x:593.4,y:274.6,startPosition:219},0).wait(1).to({x:594.6,startPosition:220},0).wait(1).to({x:595.7,y:274.7,startPosition:221},0).wait(1).to({x:596.9,startPosition:222},0).wait(1).to({x:598.1,y:274.8,startPosition:223},0).wait(1).to({x:599.3,y:274.9,startPosition:224},0).wait(1).to({x:600.5,startPosition:225},0).wait(1).to({x:601.7,y:275,startPosition:226},0).wait(1).to({x:602.9,startPosition:227},0).wait(1).to({x:604.1,y:275.1,startPosition:228},0).wait(1).to({x:605.2,startPosition:229},0).wait(1).to({x:606.4,y:275.2,startPosition:230},0).wait(1).to({x:607.6,y:275.3,startPosition:231},0).wait(1).to({x:608.8,startPosition:232},0).wait(1).to({x:610,y:275.4,startPosition:233},0).wait(1).to({x:611.2,startPosition:234},0).wait(1).to({x:612.4,y:275.5,startPosition:235},0).wait(1).to({x:613.6,startPosition:236},0).wait(1).to({x:614.7,y:275.6,startPosition:237},0).wait(1).to({x:615.9,y:275.7,startPosition:238},0).wait(1).to({x:617.1,startPosition:239},0).wait(1).to({x:618.3,y:275.8,startPosition:240},0).wait(1).to({x:619.5,startPosition:241},0).wait(1).to({x:620.7,y:275.9,startPosition:242},0).wait(1).to({x:621.9,startPosition:243},0).wait(1).to({x:623.1,y:276,startPosition:244},0).wait(1).to({x:624.2,y:276.1,startPosition:245},0).wait(1).to({x:625.4,startPosition:246},0).wait(1).to({x:626.6,y:276.2,startPosition:247},0).wait(1).to({x:627.8,startPosition:248},0).wait(1).to({x:629,y:276.3,startPosition:249},0).wait(1).to({x:630.2,startPosition:250},0).wait(1).to({x:631.4,y:276.4,startPosition:251},0).wait(1).to({x:632.6,y:276.5,startPosition:252},0).wait(1).to({x:633.8,startPosition:253},0).wait(1).to({x:634.9,y:276.6,startPosition:254},0).wait(1).to({x:636.1,startPosition:255},0).wait(1).to({x:637.3,y:276.7,startPosition:256},0).wait(1).to({x:638.5,startPosition:257},0).wait(1).to({x:639.7,y:276.8,startPosition:258},0).wait(1).to({x:640.9,y:276.9,startPosition:259},0).wait(1).to({x:642.1,startPosition:260},0).wait(1).to({x:643.3,y:277,startPosition:261},0).wait(1).to({x:644.4,startPosition:262},0).wait(1).to({x:645.6,y:277.1,startPosition:263},0).wait(1).to({x:646.8,startPosition:264},0).wait(1).to({x:648,y:277.2,startPosition:265},0).wait(1).to({x:649.2,y:277.3,startPosition:266},0).wait(1).to({x:650.4,startPosition:267},0).wait(1).to({x:651.6,y:277.4,startPosition:268},0).wait(1).to({x:652.8,startPosition:269},0).wait(1).to({x:653.9,y:277.5,startPosition:270},0).wait(1).to({x:655.1,startPosition:271},0).wait(1).to({x:656.3,y:277.6,startPosition:272},0).wait(1).to({x:657.5,y:277.7,startPosition:273},0).wait(1).to({x:658.7,startPosition:274},0).wait(1).to({x:659.9,y:277.8,startPosition:275},0).wait(1).to({x:661.1,startPosition:276},0).wait(1).to({x:662.3,y:277.9,startPosition:277},0).wait(1).to({x:663.4,startPosition:278},0).wait(1).to({x:664.6,y:278,startPosition:279},0).wait(1).to({x:665.8,y:278.1,startPosition:280},0).wait(1).to({x:667,startPosition:281},0).wait(1).to({x:668.2,y:278.2,startPosition:282},0).wait(1).to({x:669.4,startPosition:283},0).wait(1).to({x:670.6,y:278.3,startPosition:284},0).wait(1).to({x:671.8,startPosition:285},0).wait(1).to({x:672.9,y:278.4,startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({startPosition:289},0).wait(1).to({startPosition:290},0).wait(1).to({startPosition:291},0).wait(1).to({startPosition:292},0).wait(1).to({startPosition:293},0).wait(1).to({startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:306},0).wait(1).to({startPosition:307},0).wait(1).to({startPosition:308},0).wait(1).to({startPosition:309},0).wait(1).to({startPosition:310},0).wait(1).to({startPosition:311},0).wait(1).to({startPosition:312},0).wait(1).to({startPosition:313},0).wait(1).to({startPosition:314},0).wait(1).to({startPosition:315},0).wait(1).to({startPosition:316},0).wait(1).to({startPosition:317},0).wait(1).to({startPosition:318},0).wait(1).to({startPosition:319},0).wait(1).to({startPosition:320},0).wait(1).to({startPosition:321},0).wait(1).to({startPosition:322},0).wait(1).to({startPosition:323},0).wait(1).to({startPosition:324},0).wait(1).to({startPosition:325},0).wait(1).to({startPosition:326},0).wait(1).to({startPosition:327},0).wait(1).to({startPosition:328},0).wait(1).to({startPosition:329},0).wait(1).to({startPosition:330},0).wait(1).to({startPosition:331},0).wait(1).to({startPosition:332},0).wait(1).to({startPosition:333},0).wait(1).to({startPosition:334},0).wait(1).to({startPosition:335},0).wait(1).to({startPosition:336},0).wait(1).to({startPosition:337},0).wait(1).to({startPosition:338},0).wait(1).to({startPosition:339},0).wait(1).to({scaleX:3.63,scaleY:3.63,x:1049.1,y:604.9,startPosition:340},0).wait(1).to({scaleX:5.99,scaleY:5.99,x:1425.2,y:931.3,startPosition:341},0).wait(1).to({scaleX:8.35,scaleY:8.35,x:1801.3,y:1257.7,startPosition:342},0).wait(1).to({scaleX:10.7,scaleY:10.7,x:2177.4,y:1584.1,startPosition:343},0).wait(1).to({scaleX:13.06,scaleY:13.06,x:2553.4,y:1910.4,startPosition:344},0).wait(1).to({scaleX:15.42,scaleY:15.42,x:2929.6,y:2236.9,startPosition:345},0).wait(1).to({scaleX:17.78,scaleY:17.78,x:3305.7,y:2563.3,startPosition:346},0).wait(1).to({scaleX:20.14,scaleY:20.14,x:3681.7,y:2889.7,startPosition:347},0).wait(1).to({startPosition:348},0).wait(1).to({startPosition:349},0).wait(1).to({startPosition:350},0).wait(1).to({startPosition:351},0).wait(1).to({startPosition:352},0).wait(1).to({startPosition:353},0).wait(1).to({startPosition:354},0).wait(1).to({startPosition:355},0).wait(1).to({startPosition:356},0).wait(1).to({startPosition:357},0).wait(1).to({startPosition:358},0).wait(1).to({startPosition:359},0).wait(1).to({startPosition:360},0).wait(1).to({startPosition:361},0).wait(1).to({startPosition:362},0).wait(1).to({startPosition:363},0).wait(1).to({startPosition:364},0).wait(1).to({startPosition:365},0).wait(1).to({startPosition:366},0).wait(1).to({startPosition:367},0).wait(1).to({startPosition:368},0).wait(1).to({startPosition:369},0).wait(1).to({startPosition:370},0).wait(1).to({startPosition:371},0).wait(1).to({startPosition:372},0).wait(1).to({startPosition:373},0).wait(1).to({startPosition:374},0).wait(1).to({startPosition:375},0).wait(1).to({startPosition:376},0).wait(1).to({startPosition:377},0).wait(1).to({startPosition:378},0).wait(1).to({startPosition:379},0).wait(1).to({startPosition:380},0).wait(1).to({startPosition:381},0).wait(1).to({startPosition:382},0).wait(1).to({startPosition:383},0).wait(1).to({startPosition:384},0).wait(1).to({startPosition:385},0).wait(1).to({startPosition:386},0).wait(1).to({startPosition:387},0).wait(1).to({startPosition:388},0).wait(1).to({startPosition:389},0).wait(1).to({startPosition:390},0).wait(1).to({startPosition:391},0).wait(1).to({startPosition:392},0).wait(1).to({startPosition:393},0).wait(1).to({startPosition:394},0).wait(1).to({startPosition:395},0).wait(1).to({startPosition:396},0).wait(1).to({startPosition:397},0).wait(1).to({startPosition:398},0).wait(1).to({startPosition:399},0).wait(1).to({startPosition:400},0).wait(1).to({startPosition:401},0).wait(1).to({startPosition:402},0).wait(1).to({startPosition:403},0).wait(1).to({startPosition:404},0).wait(1).to({startPosition:405},0).wait(1).to({startPosition:406},0).wait(1).to({startPosition:407},0).wait(1).to({startPosition:408},0).wait(1).to({startPosition:409},0).wait(1).to({startPosition:410},0).wait(1).to({startPosition:411},0).wait(1).to({startPosition:412},0).wait(1).to({startPosition:413},0).wait(1).to({startPosition:414},0).wait(1).to({startPosition:415},0).wait(1).to({startPosition:416},0).wait(1).to({startPosition:417},0).wait(1).to({startPosition:418},0).wait(1).to({scaleX:17.45,scaleY:17.45,x:3251.9,y:2516.6,startPosition:419},0).wait(1).to({scaleX:14.75,scaleY:14.75,x:2822.1,y:2143.6,startPosition:420},0).wait(1).to({scaleX:12.05,scaleY:12.05,x:2392.7,y:1770.9,startPosition:421},0).wait(1).to({scaleX:9.36,scaleY:9.36,x:1962.5,y:1397.6,startPosition:422},0).wait(1).to({scaleX:6.66,scaleY:6.66,x:1532.6,y:1024.5,startPosition:423},0).wait(1).to({scaleX:3.96,scaleY:3.96,x:1103.2,y:651.9,startPosition:424},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:672.9,y:278.4,startPosition:425},0).wait(1).to({startPosition:426},0).wait(1).to({startPosition:427},0).wait(1).to({startPosition:428},0).wait(1).to({startPosition:429},0).wait(1).to({startPosition:430},0).wait(1).to({startPosition:431},0).wait(1).to({startPosition:432},0).wait(1).to({startPosition:433},0).wait(1).to({startPosition:434},0).wait(1).to({startPosition:435},0).wait(1).to({startPosition:436},0).wait(1).to({startPosition:437},0).wait(1).to({startPosition:438},0).wait(1).to({startPosition:439},0).wait(1).to({startPosition:440},0).wait(1).to({startPosition:441},0).wait(1).to({startPosition:442},0).wait(1).to({startPosition:443},0).wait(1).to({startPosition:444},0).wait(1).to({startPosition:445},0).wait(1).to({startPosition:446},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).to({_off:true},1).wait(420));

	// Text3
	this.Text3_Container = new lib.Text3();
	this.Text3_Container.parent = this;
	this.Text3_Container.setTransform(286.3,203.1,1.267,1.267,0,0,0,150.1,72.5);
	this.Text3_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Text3_Container).wait(1).to({regX:266.7,regY:111.7,x:433.9,y:252.7},0).wait(229).to({regX:150.1,regY:72.5,x:408.4,y:114.7},0).wait(1).to({regX:266.7,regY:111.7,x:556.1,y:164.3,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:150,regY:72.5,x:408.4,y:114.7},0).wait(74).to({regX:150.1},0).wait(1).to({regX:266.7,regY:111.7,x:556.1,y:164.3,alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({regX:150,regY:72.5,x:286.3,y:203},0).to({_off:true},1).wait(588));

	// Scene2_Top
	this.instance_9 = new lib.Scene2_Top("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(10.6,222.2,1.267,1.267,0,0,0,-21.6,123.7);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).wait(1).to({regX:118.9,regY:-61.3,x:190.2,y:-13.3,startPosition:1},0).wait(1).to({x:191.9,y:-14.4,startPosition:2},0).wait(1).to({x:193.6,y:-15.5,startPosition:3},0).wait(1).to({x:195.3,y:-16.7,startPosition:4},0).wait(1).to({x:197,y:-17.8,startPosition:5},0).wait(1).to({x:198.7,y:-18.9,startPosition:6},0).wait(1).to({x:200.4,y:-20,startPosition:7},0).wait(1).to({x:202.1,y:-21.2,startPosition:8},0).wait(1).to({x:203.8,y:-22.3,startPosition:9},0).wait(1).to({x:205.5,y:-23.4,startPosition:10},0).wait(1).to({x:207.2,y:-24.5,startPosition:11},0).wait(1).to({x:208.9,y:-25.7,startPosition:12},0).wait(1).to({x:210.6,y:-26.8,startPosition:13},0).wait(1).to({x:212.3,y:-27.9,startPosition:14},0).wait(1).to({x:214,y:-29,startPosition:15},0).wait(1).to({x:215.7,y:-30.2,startPosition:16},0).wait(1).to({x:217.4,y:-31.3,startPosition:17},0).wait(1).to({x:219.1,y:-32.4,startPosition:18},0).wait(1).to({x:220.8,y:-33.5,startPosition:19},0).wait(1).to({x:222.5,y:-34.7,startPosition:20},0).wait(1).to({x:224.2,y:-35.8,startPosition:21},0).wait(1).to({x:225.9,y:-36.9,startPosition:22},0).wait(1).to({x:227.6,y:-38,startPosition:23},0).wait(1).to({x:229.3,y:-39.2,startPosition:24},0).wait(1).to({x:231,y:-40.3,startPosition:25},0).wait(1).to({x:232.7,y:-41.4,startPosition:26},0).wait(1).to({x:234.4,y:-42.5,startPosition:27},0).wait(1).to({x:236.1,y:-43.7,startPosition:28},0).wait(1).to({x:237.8,y:-44.8,startPosition:29},0).wait(1).to({x:239.5,y:-45.9,startPosition:30},0).wait(1).to({x:241.2,y:-47,startPosition:31},0).wait(1).to({x:242.9,y:-48.2,startPosition:32},0).wait(1).to({x:244.6,y:-49.3,startPosition:33},0).wait(1).to({x:246.3,y:-50.4,startPosition:34},0).wait(1).to({x:248,y:-51.6,startPosition:35},0).wait(1).to({x:249.7,y:-52.7,startPosition:36},0).wait(1).to({x:251.4,y:-53.8,startPosition:37},0).wait(1).to({x:253.1,y:-54.9,startPosition:38},0).wait(1).to({x:254.8,y:-56.1,startPosition:39},0).wait(1).to({x:256.5,y:-57.2,startPosition:40},0).wait(1).to({x:258.2,y:-58.3,startPosition:41},0).wait(1).to({x:259.9,y:-59.4,startPosition:42},0).wait(1).to({x:261.6,y:-60.6,startPosition:43},0).wait(1).to({x:263.3,y:-61.7,startPosition:44},0).wait(1).to({x:265,y:-62.8,startPosition:45},0).wait(1).to({x:266.7,y:-63.9,startPosition:46},0).wait(1).to({x:268.4,y:-65.1,startPosition:47},0).wait(1).to({x:270,y:-66.2,startPosition:48},0).wait(1).to({x:271.7,y:-67.3,startPosition:49},0).wait(1).to({x:273.4,y:-68.4,startPosition:50},0).wait(1).to({x:275.1,y:-69.6,startPosition:51},0).wait(1).to({x:276.8,y:-70.7,startPosition:52},0).wait(1).to({x:278.5,y:-71.8,startPosition:53},0).wait(1).to({x:280.2,y:-72.9,startPosition:54},0).wait(1).to({x:281.9,y:-74.1,startPosition:55},0).wait(1).to({x:283.6,y:-75.2,startPosition:56},0).wait(1).to({x:285.3,y:-76.3,startPosition:57},0).wait(1).to({x:287,y:-77.4,startPosition:58},0).wait(1).to({x:288.7,y:-78.5,startPosition:59},0).wait(1).to({x:290.4,y:-79.6,startPosition:60},0).wait(1).to({x:292.1,y:-80.8,startPosition:61},0).wait(1).to({x:293.8,y:-81.9,startPosition:62},0).wait(1).to({x:295.5,y:-83,startPosition:63},0).wait(1).to({x:297.2,y:-84.1,startPosition:64},0).wait(1).to({x:298.9,y:-85.3,startPosition:65},0).wait(1).to({x:300.6,y:-86.4,startPosition:66},0).wait(1).to({x:302.3,y:-87.5,startPosition:67},0).wait(1).to({x:304,y:-88.7,startPosition:68},0).wait(1).to({x:305.7,y:-89.8,startPosition:69},0).wait(1).to({x:307.4,y:-90.9,startPosition:70},0).wait(1).to({x:309.1,y:-92,startPosition:71},0).wait(1).to({x:310.8,y:-93.2,startPosition:72},0).wait(1).to({x:312.5,y:-94.3,startPosition:73},0).wait(1).to({x:314.2,y:-95.4,startPosition:74},0).wait(1).to({x:315.9,y:-96.5,startPosition:75},0).wait(1).to({x:317.6,y:-97.7,startPosition:76},0).wait(1).to({x:319.3,y:-98.8,startPosition:77},0).wait(1).to({x:321,y:-99.9,startPosition:78},0).wait(1).to({x:322.7,y:-101,startPosition:79},0).wait(1).to({x:324.4,y:-102.2,startPosition:80},0).wait(1).to({x:326.1,y:-103.3,startPosition:81},0).wait(1).to({x:327.8,y:-104.4,startPosition:82},0).wait(1).to({x:329.5,y:-105.5,startPosition:83},0).wait(1).to({x:331.2,y:-106.7,startPosition:84},0).wait(1).to({x:332.9,y:-107.8,startPosition:85},0).wait(1).to({x:334.6,y:-108.9,startPosition:86},0).wait(1).to({x:336.3,y:-110,startPosition:87},0).wait(1).to({x:338,y:-111.2,startPosition:88},0).wait(1).to({x:339.7,y:-112.3,startPosition:89},0).wait(1).to({x:341.4,y:-113.4,startPosition:90},0).wait(1).to({x:343.1,y:-114.5,startPosition:91},0).wait(1).to({x:344.8,y:-115.7,startPosition:92},0).wait(1).to({x:346.5,y:-116.8,startPosition:93},0).wait(1).to({x:348.2,y:-117.9,startPosition:94},0).wait(1).to({x:349.9,y:-119,startPosition:95},0).wait(1).to({x:351.5,y:-120.2,startPosition:96},0).wait(1).to({x:353.2,y:-121.3,startPosition:97},0).wait(1).to({x:354.9,y:-122.4,startPosition:98},0).wait(1).to({x:356.6,y:-123.6,startPosition:99},0).wait(1).to({x:358.3,y:-124.7,startPosition:100},0).wait(1).to({x:360,y:-125.8,startPosition:101},0).wait(1).to({x:361.7,y:-126.9,startPosition:102},0).wait(1).to({x:363.4,y:-128.1,startPosition:103},0).wait(1).to({x:365.1,y:-129.2,startPosition:104},0).wait(1).to({x:366.8,y:-130.3,startPosition:105},0).wait(1).to({x:368.5,y:-131.4,startPosition:106},0).wait(1).to({x:370.2,y:-132.6,startPosition:107},0).wait(1).to({x:371.9,y:-133.7,startPosition:108},0).wait(1).to({x:373.6,y:-134.8,startPosition:109},0).wait(1).to({x:375.3,y:-135.9,startPosition:110},0).wait(1).to({x:377,y:-137.1,startPosition:111},0).wait(1).to({x:378.7,y:-138.2,startPosition:112},0).wait(1).to({x:380.4,y:-139.3,startPosition:113},0).wait(1).to({x:382.1,y:-140.4,startPosition:114},0).wait(1).to({x:383.8,y:-141.6,startPosition:115},0).wait(1).to({x:385.5,y:-142.7,startPosition:116},0).wait(1).to({x:387.2,y:-143.8,startPosition:117},0).wait(1).to({x:388.9,y:-144.9,startPosition:118},0).wait(1).to({x:390.6,y:-146.1,startPosition:119},0).wait(1).to({x:392.3,y:-147.2,startPosition:120},0).wait(1).to({x:394,y:-148.3,startPosition:121},0).wait(1).to({x:395.7,y:-149.4,startPosition:122},0).wait(1).to({x:397.4,y:-150.6,startPosition:123},0).wait(1).to({x:399.1,y:-151.7,startPosition:124},0).wait(1).to({x:400.8,y:-152.8,startPosition:125},0).wait(1).to({x:402.5,y:-153.9,startPosition:126},0).wait(1).to({x:404.2,y:-155.1,startPosition:127},0).wait(1).to({x:405.9,y:-156.2,startPosition:128},0).wait(1).to({x:407.6,y:-157.3,startPosition:129},0).wait(1).to({x:409.3,y:-158.4,startPosition:130},0).wait(1).to({x:411,y:-159.6,startPosition:131},0).wait(1).to({x:412.7,y:-160.7,startPosition:132},0).wait(1).to({x:414.4,y:-161.8,startPosition:133},0).wait(1).to({x:416.1,y:-163,startPosition:134},0).wait(1).to({x:417.8,y:-164.1,startPosition:135},0).wait(1).to({x:419.5,y:-165.2,startPosition:136},0).wait(1).to({x:421.2,y:-166.3,startPosition:137},0).wait(1).to({x:422.9,y:-167.5,startPosition:138},0).wait(1).to({x:424.6,y:-168.6,startPosition:139},0).wait(1).to({x:426.3,y:-169.7,startPosition:140},0).wait(1).to({x:428,y:-170.8,startPosition:141},0).wait(1).to({x:429.7,y:-172,startPosition:142},0).wait(1).to({x:431.4,y:-173.1,startPosition:143},0).wait(1).to({x:433,y:-174.2,startPosition:144},0).wait(1).to({x:434.7,y:-175.3,startPosition:145},0).wait(1).to({x:436.4,y:-176.5,startPosition:146},0).wait(1).to({x:438.1,y:-177.6,startPosition:147},0).wait(1).to({x:439.8,y:-178.7,startPosition:148},0).wait(1).to({x:441.5,y:-179.8,startPosition:149},0).wait(1).to({x:443.2,y:-181,startPosition:150},0).wait(1).to({x:444.9,y:-182.1,startPosition:151},0).wait(1).to({x:446.6,y:-183.2,startPosition:152},0).wait(1).to({x:448.3,y:-184.3,startPosition:153},0).wait(1).to({x:450,y:-185.5,startPosition:154},0).wait(1).to({x:451.7,y:-186.6,startPosition:155},0).wait(1).to({x:453.4,y:-187.7,startPosition:156},0).wait(1).to({x:455.1,y:-188.8,startPosition:157},0).wait(1).to({x:456.8,y:-190,startPosition:158},0).wait(1).to({x:458.5,y:-191.1,startPosition:159},0).wait(1).to({x:460.2,y:-192.2,startPosition:160},0).wait(1).to({x:461.9,y:-193.3,startPosition:161},0).wait(1).to({x:463.6,y:-194.5,startPosition:162},0).wait(1).to({x:465.3,y:-195.6,startPosition:163},0).wait(1).to({x:467,y:-196.7,startPosition:164},0).wait(1).to({x:468.7,y:-197.9,startPosition:165},0).wait(1).to({x:470.4,y:-199,startPosition:166},0).wait(1).to({x:472.1,y:-200.1,startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({y:-200,startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({y:-199.9,startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({y:-199.8,startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({y:-199.7,startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({y:-199.6,startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({y:-199.5,startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({y:-199.4,startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({y:-199.3,startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({scaleX:3.78,scaleY:3.78,x:142.6,y:-797.2,startPosition:200},0).wait(1).to({scaleX:6.28,scaleY:6.28,x:-187,y:-1395.2,startPosition:201},0).wait(1).to({scaleX:8.79,scaleY:8.79,x:-516.5,y:-1993.2,startPosition:202},0).wait(1).to({scaleX:11.3,scaleY:11.3,x:-846.1,y:-2591.1,startPosition:203},0).wait(1).to({scaleX:13.81,scaleY:13.81,x:-1175.7,y:-3189.1,startPosition:204},0).wait(1).to({scaleX:16.32,scaleY:16.32,x:-1505.2,y:-3787,startPosition:205},0).wait(1).to({scaleX:18.83,scaleY:18.83,x:-1834.8,y:-4385,startPosition:206},0).wait(1).to({scaleX:21.34,scaleY:21.34,x:-2164.3,y:-4982.9,startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({scaleX:18.83,scaleY:18.83,x:-1834.8,y:-4385,startPosition:287},0).wait(1).to({scaleX:16.32,scaleY:16.32,x:-1505.2,y:-3787,startPosition:288},0).wait(1).to({scaleX:13.81,scaleY:13.81,x:-1175.7,y:-3189.1,startPosition:289},0).wait(1).to({scaleX:11.3,scaleY:11.3,x:-846.1,y:-2591.1,startPosition:290},0).wait(1).to({scaleX:8.79,scaleY:8.79,x:-516.5,y:-1993.2,startPosition:291},0).wait(1).to({scaleX:6.28,scaleY:6.28,x:-187,y:-1395.2,startPosition:292},0).wait(1).to({scaleX:3.78,scaleY:3.78,x:142.6,y:-797.2,startPosition:293},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:472.1,y:-199.3,startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).to({_off:true},1).wait(570));

	// BG_grad
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.3,-125.2,-0.3,124.7).s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");
	this.shape_2.setTransform(485,125);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(187).to({_off:false},0).to({_off:true},143).wait(570));

	// Scene2_Bottom
	this.instance_10 = new lib.Scene2_Bottom("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(313.4,-66,1.267,1.267,0,0,0,247.4,-96);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24).to({_off:false},0).wait(1).to({regY:-113.9,x:315.3,y:-89.8,startPosition:1},0).wait(1).to({x:317.2,y:-90.8,startPosition:2},0).wait(1).to({x:319.1,y:-91.9,startPosition:3},0).wait(1).to({x:321,y:-93,startPosition:4},0).wait(1).to({x:323,y:-94,startPosition:5},0).wait(1).to({x:324.9,y:-95.1,startPosition:6},0).wait(1).to({x:326.8,y:-96.2,startPosition:7},0).wait(1).to({x:328.7,y:-97.2,startPosition:8},0).wait(1).to({x:330.7,y:-98.3,startPosition:9},0).wait(1).to({x:332.6,y:-99.4,startPosition:10},0).wait(1).to({x:334.5,y:-100.4,startPosition:11},0).wait(1).to({x:336.4,y:-101.5,startPosition:12},0).wait(1).to({x:338.4,y:-102.6,startPosition:13},0).wait(1).to({x:340.3,y:-103.6,startPosition:14},0).wait(1).to({x:342.2,y:-104.7,startPosition:15},0).wait(1).to({x:344.1,y:-105.8,startPosition:16},0).wait(1).to({x:346.1,y:-106.8,startPosition:17},0).wait(1).to({x:348,y:-107.9,startPosition:18},0).wait(1).to({x:349.9,y:-109,startPosition:19},0).wait(1).to({x:351.8,y:-110.1,startPosition:20},0).wait(1).to({x:353.7,y:-111.1,startPosition:21},0).wait(1).to({x:355.7,y:-112.2,startPosition:22},0).wait(1).to({x:357.6,y:-113.3,startPosition:23},0).wait(1).to({x:359.5,y:-114.3,startPosition:24},0).wait(1).to({x:361.4,y:-115.4,startPosition:25},0).wait(1).to({x:363.4,y:-116.5,startPosition:26},0).wait(1).to({x:365.3,y:-117.5,startPosition:27},0).wait(1).to({x:367.2,y:-118.6,startPosition:28},0).wait(1).to({x:369.1,y:-119.7,startPosition:29},0).wait(1).to({x:371.1,y:-120.7,startPosition:30},0).wait(1).to({x:373,y:-121.8,startPosition:31},0).wait(1).to({x:374.9,y:-122.9,startPosition:32},0).wait(1).to({x:376.8,y:-123.9,startPosition:33},0).wait(1).to({x:378.8,y:-125,startPosition:34},0).wait(1).to({x:380.7,y:-126.1,startPosition:35},0).wait(1).to({x:382.6,y:-127.1,startPosition:36},0).wait(1).to({x:384.5,y:-128.2,startPosition:37},0).wait(1).to({x:386.5,y:-129.3,startPosition:38},0).wait(1).to({x:388.4,y:-130.3,startPosition:39},0).wait(1).to({x:390.3,y:-131.4,startPosition:40},0).wait(1).to({x:392.2,y:-132.5,startPosition:41},0).wait(1).to({x:394.2,y:-133.5,startPosition:42},0).wait(1).to({x:396.1,y:-134.6,startPosition:43},0).wait(1).to({x:398,y:-135.7,startPosition:44},0).wait(1).to({x:399.9,y:-136.7,startPosition:45},0).wait(1).to({x:401.8,y:-137.8,startPosition:46},0).wait(1).to({x:403.8,y:-138.9,startPosition:47},0).wait(1).to({x:405.7,y:-139.9,startPosition:48},0).wait(1).to({x:407.6,y:-141,startPosition:49},0).wait(1).to({x:409.5,y:-142.1,startPosition:50},0).wait(1).to({x:411.5,y:-143.1,startPosition:51},0).wait(1).to({x:413.4,y:-144.2,startPosition:52},0).wait(1).to({x:415.3,y:-145.2,startPosition:53},0).wait(1).to({x:417.2,y:-146.3,startPosition:54},0).wait(1).to({x:419.2,y:-147.4,startPosition:55},0).wait(1).to({x:421.1,y:-148.4,startPosition:56},0).wait(1).to({x:423,y:-149.5,startPosition:57},0).wait(1).to({x:424.9,y:-150.6,startPosition:58},0).wait(1).to({x:426.9,y:-151.6,startPosition:59},0).wait(1).to({x:428.8,y:-152.7,startPosition:60},0).wait(1).to({x:430.7,y:-153.8,startPosition:61},0).wait(1).to({x:432.6,y:-154.8,startPosition:62},0).wait(1).to({x:434.6,y:-155.9,startPosition:63},0).wait(1).to({x:436.5,y:-157,startPosition:64},0).wait(1).to({x:438.4,y:-158,startPosition:65},0).wait(1).to({x:440.3,y:-159.1,startPosition:66},0).wait(1).to({x:442.3,y:-160.2,startPosition:67},0).wait(1).to({x:444.2,y:-161.2,startPosition:68},0).wait(1).to({x:446.1,y:-162.3,startPosition:69},0).wait(1).to({x:448,y:-163.4,startPosition:70},0).wait(1).to({x:449.9,y:-164.5,startPosition:71},0).wait(1).to({x:451.9,y:-165.5,startPosition:72},0).wait(1).to({x:453.8,y:-166.6,startPosition:73},0).wait(1).to({x:455.7,y:-167.7,startPosition:74},0).wait(1).to({x:457.6,y:-168.7,startPosition:75},0).wait(1).to({x:459.6,y:-169.8,startPosition:76},0).wait(1).to({x:461.5,y:-170.9,startPosition:77},0).wait(1).to({x:463.4,y:-171.9,startPosition:78},0).wait(1).to({x:465.3,y:-173,startPosition:79},0).wait(1).to({x:467.3,y:-174.1,startPosition:80},0).wait(1).to({x:469.2,y:-175.1,startPosition:81},0).wait(1).to({x:471.1,y:-176.2,startPosition:82},0).wait(1).to({x:473,y:-177.3,startPosition:83},0).wait(1).to({x:475,y:-178.3,startPosition:84},0).wait(1).to({x:476.9,y:-179.4,startPosition:85},0).wait(1).to({x:478.8,y:-180.5,startPosition:86},0).wait(1).to({x:480.7,y:-181.5,startPosition:87},0).wait(1).to({x:482.7,y:-182.6,startPosition:88},0).wait(1).to({x:484.6,y:-183.7,startPosition:89},0).wait(1).to({x:486.5,y:-184.7,startPosition:90},0).wait(1).to({x:488.4,y:-185.8,startPosition:91},0).wait(1).to({x:490.4,y:-186.9,startPosition:92},0).wait(1).to({x:492.3,y:-187.9,startPosition:93},0).wait(1).to({x:494.2,y:-189,startPosition:94},0).wait(1).to({x:496.1,y:-190.1,startPosition:95},0).wait(1).to({x:498,y:-191.1,startPosition:96},0).wait(1).to({x:500,y:-192.2,startPosition:97},0).wait(1).to({x:501.9,y:-193.3,startPosition:98},0).wait(1).to({x:503.8,y:-194.3,startPosition:99},0).wait(1).to({x:505.7,y:-195.4,startPosition:100},0).wait(1).to({x:507.7,y:-196.5,startPosition:101},0).wait(1).to({x:509.6,y:-197.6,startPosition:102},0).wait(1).to({x:511.5,y:-198.6,startPosition:103},0).wait(1).to({x:513.4,y:-199.7,startPosition:104},0).wait(1).to({x:515.4,y:-200.8,startPosition:105},0).wait(1).to({x:517.3,y:-201.8,startPosition:106},0).wait(1).to({x:519.2,y:-202.9,startPosition:107},0).wait(1).to({x:521.1,y:-204,startPosition:108},0).wait(1).to({x:523.1,y:-205,startPosition:109},0).wait(1).to({x:525,y:-206.1,startPosition:110},0).wait(1).to({x:526.9,y:-207.2,startPosition:111},0).wait(1).to({x:528.8,y:-208.2,startPosition:112},0).wait(1).to({x:530.8,y:-209.3,startPosition:113},0).wait(1).to({x:532.7,y:-210.4,startPosition:114},0).wait(1).to({x:534.6,y:-211.4,startPosition:115},0).wait(1).to({x:536.5,y:-212.5,startPosition:116},0).wait(1).to({x:538.4,y:-213.6,startPosition:117},0).wait(1).to({x:540.4,y:-214.6,startPosition:118},0).wait(1).to({x:542.3,y:-215.7,startPosition:119},0).wait(1).to({x:544.2,y:-216.8,startPosition:120},0).wait(1).to({x:546.1,y:-217.8,startPosition:121},0).wait(1).to({x:548.1,y:-218.9,startPosition:122},0).wait(1).to({x:550,y:-220,startPosition:123},0).wait(1).to({x:551.9,y:-221,startPosition:124},0).wait(1).to({x:553.8,y:-222.1,startPosition:125},0).wait(1).to({x:555.8,y:-223.2,startPosition:126},0).wait(1).to({x:557.7,y:-224.2,startPosition:127},0).wait(1).to({x:559.6,y:-225.3,startPosition:128},0).wait(1).to({x:561.5,y:-226.4,startPosition:129},0).wait(1).to({x:563.5,y:-227.4,startPosition:130},0).wait(1).to({x:565.4,y:-228.5,startPosition:131},0).wait(1).to({x:567.3,y:-229.6,startPosition:132},0).wait(1).to({x:569.2,y:-230.6,startPosition:133},0).wait(1).to({x:571.2,y:-231.7,startPosition:134},0).wait(1).to({x:573.1,y:-232.8,startPosition:135},0).wait(1).to({x:575,y:-233.9,startPosition:136},0).wait(1).to({x:576.9,y:-234.9,startPosition:137},0).wait(1).to({x:578.9,y:-236,startPosition:138},0).wait(1).to({x:580.8,y:-237.1,startPosition:139},0).wait(1).to({x:582.7,y:-238.1,startPosition:140},0).wait(1).to({x:584.6,y:-239.2,startPosition:141},0).wait(1).to({x:586.5,y:-240.3,startPosition:142},0).wait(1).to({x:588.5,y:-241.3,startPosition:143},0).wait(1).to({x:590.4,y:-242.4,startPosition:144},0).wait(1).to({x:592.3,y:-243.5,startPosition:145},0).wait(1).to({x:594.2,y:-244.5,startPosition:146},0).wait(1).to({x:596.2,y:-245.6,startPosition:147},0).wait(1).to({x:598.1,y:-246.7,startPosition:148},0).wait(1).to({x:600,y:-247.7,startPosition:149},0).wait(1).to({x:601.9,y:-248.8,startPosition:150},0).wait(1).to({x:603.9,y:-249.9,startPosition:151},0).wait(1).to({x:605.8,y:-250.9,startPosition:152},0).wait(1).to({x:607.7,y:-252,startPosition:153},0).wait(1).to({x:609.6,y:-253.1,startPosition:154},0).wait(1).to({x:611.6,y:-254.1,startPosition:155},0).wait(1).to({x:613.5,y:-255.2,startPosition:156},0).wait(1).to({x:615.4,y:-256.3,startPosition:157},0).wait(1).to({x:617.3,y:-257.3,startPosition:158},0).wait(1).to({x:619.3,y:-258.4,startPosition:159},0).wait(1).to({x:621.2,y:-259.5,startPosition:160},0).wait(1).to({x:623.1,y:-260.5,startPosition:161},0).wait(1).to({x:625,y:-261.6,startPosition:162},0).wait(1).to({x:627,y:-262.7,startPosition:163},0).wait(1).to({x:628.9,y:-263.7,startPosition:164},0).wait(1).to({x:630.8,y:-264.8,startPosition:165},0).wait(1).to({x:632.7,y:-265.9,startPosition:166},0).wait(1).to({x:634.6,y:-266.9,startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({scaleX:3.78,scaleY:3.78,x:622.4,y:-997.3,startPosition:200},0).wait(1).to({scaleX:6.28,scaleY:6.28,x:610.1,y:-1727.6,startPosition:201},0).wait(1).to({scaleX:8.79,scaleY:8.79,x:597.8,y:-2457.8,startPosition:202},0).wait(1).to({scaleX:11.3,scaleY:11.3,x:585.4,y:-3188.1,startPosition:203},0).wait(1).to({scaleX:13.81,scaleY:13.81,x:573.2,y:-3918.4,startPosition:204},0).wait(1).to({scaleX:16.32,scaleY:16.32,x:560.8,y:-4648.7,startPosition:205},0).wait(1).to({scaleX:18.83,scaleY:18.83,x:548.5,y:-5379,startPosition:206},0).wait(1).to({scaleX:21.34,scaleY:21.34,x:536.2,y:-6109.3,startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({scaleX:18.83,scaleY:18.83,x:548.5,y:-5379,startPosition:287},0).wait(1).to({scaleX:16.32,scaleY:16.32,x:560.8,y:-4648.7,startPosition:288},0).wait(1).to({scaleX:13.81,scaleY:13.81,x:573.2,y:-3918.4,startPosition:289},0).wait(1).to({scaleX:11.3,scaleY:11.3,x:585.4,y:-3188.1,startPosition:290},0).wait(1).to({scaleX:8.79,scaleY:8.79,x:597.8,y:-2457.8,startPosition:291},0).wait(1).to({scaleX:6.28,scaleY:6.28,x:610.1,y:-1727.6,startPosition:292},0).wait(1).to({scaleX:3.78,scaleY:3.78,x:622.4,y:-997.3,startPosition:293},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:634.6,y:-266.9,startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).to({_off:true},1).wait(570));

	// Text2
	this.Text2_Container = new lib.Text2();
	this.Text2_Container.parent = this;
	this.Text2_Container.setTransform(215.4,186.2,1.267,1.267,0,0,0,150.1,72.5);
	this.Text2_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Text2_Container).wait(1).to({regX:236.3,regY:118.3,x:324.6,y:244.1},0).wait(84).to({regX:150.1,regY:72.5,x:380.1,y:114.7},0).wait(1).to({regX:236.3,regY:118.3,x:489.2,y:172.7,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({regX:150.1,regY:72.5,x:380.1,y:114.7},0).wait(72).to({regX:236.3,regY:118.3,x:489.2,y:172.7,alpha:0.5},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(736));

	// TextStart
	this.TextStart_Container = new lib.Textstart();
	this.TextStart_Container.parent = this;
	this.TextStart_Container.setTransform(348.4,65.1,1.267,1.267,0,0,0,150.1,29);
	this.TextStart_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.TextStart_Container).wait(1).to({regX:117.9,regY:65.1,x:307.6,y:110.8,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({regX:150.1,regY:29,x:348.5,y:65.1},0).to({_off:true},73).wait(814));

	// Scene1_Top
	this.instance_11 = new lib.Scene1_Top("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(701.1,376.6,1.265,1.265,15,0,0,199.8,273.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:169.5,regY:280.4,scaleX:1.27,scaleY:1.27,rotation:15.1,x:661.8,y:375.1,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({scaleX:4.36,scaleY:4.36,x:924.1,y:929.5,startPosition:80},0).wait(1).to({scaleX:7.46,scaleY:7.46,x:1186.6,y:1484,startPosition:81},0).wait(1).to({scaleX:10.56,scaleY:10.56,x:1449,y:2038.4,startPosition:82},0).wait(1).to({scaleX:13.66,scaleY:13.66,x:1711.3,y:2592.9,startPosition:83},0).wait(1).to({scaleX:16.76,scaleY:16.76,x:1973.7,y:3147.3,startPosition:84},0).wait(1).to({scaleX:19.86,scaleY:19.86,x:2236.1,y:3701.8,startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({scaleX:16.76,scaleY:16.76,x:1973.7,y:3147.3,startPosition:164},0).wait(1).to({scaleX:13.66,scaleY:13.66,x:1711.3,y:2592.9,startPosition:165},0).wait(1).to({scaleX:10.56,scaleY:10.56,x:1449,y:2038.4,startPosition:166},0).wait(1).to({scaleX:7.46,scaleY:7.46,x:1186.6,y:1484,startPosition:167},0).wait(1).to({scaleX:4.36,scaleY:4.36,x:924.1,y:929.5,startPosition:168},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:661.8,y:375.1,startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).to({_off:true},1).wait(713));

	// BG_grad
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.2,-125.2,-0.2,124.7).s().p("EhH3ATiMAAAgnDMCPvAAAMAAAAnDg");
	this.shape_3.setTransform(485,125,1.054,1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},187).wait(713));

	// Scene1_Bottom
	this.instance_12 = new lib.Scene1_Bottom("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(891.4,520.4,1.265,1.265,15,0,0,374.9,342.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:377.5,regY:354.9,scaleX:1.27,scaleY:1.27,rotation:15.1,x:890.6,y:535.9,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({scaleX:4.36,scaleY:4.36,x:1714.8,y:1484.8,startPosition:80},0).wait(1).to({scaleX:7.46,scaleY:7.46,x:2539,y:2433.6,startPosition:81},0).wait(1).to({scaleX:10.56,scaleY:10.56,x:3363.1,y:3382.4,startPosition:82},0).wait(1).to({scaleX:13.66,scaleY:13.66,x:4187.3,y:4331.2,startPosition:83},0).wait(1).to({scaleX:16.76,scaleY:16.76,x:5011.5,y:5280.1,startPosition:84},0).wait(1).to({scaleX:19.86,scaleY:19.86,x:5835.6,y:6228.9,startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({scaleX:16.76,scaleY:16.76,x:5011.5,y:5280.1,startPosition:164},0).wait(1).to({scaleX:13.66,scaleY:13.66,x:4187.3,y:4331.2,startPosition:165},0).wait(1).to({scaleX:10.56,scaleY:10.56,x:3363.1,y:3382.4,startPosition:166},0).wait(1).to({scaleX:7.46,scaleY:7.46,x:2539,y:2433.6,startPosition:167},0).wait(1).to({scaleX:4.36,scaleY:4.36,x:1714.8,y:1484.8,startPosition:168},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:890.6,y:535.9,startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).to({_off:true},1).wait(713));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(454.6,125,1516.3,962.6);
// library properties:
lib.properties = {
	width: 970,
	height: 250,
	fps: 30,
	color: "#2C94A7",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;