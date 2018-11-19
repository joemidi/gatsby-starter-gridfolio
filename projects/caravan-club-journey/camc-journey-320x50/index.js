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
	this.locationSubTitleText = new cjs.Text("Lake District", "8px 'FS Elliot'", "#FFFFFF");
	this.locationSubTitleText.name = "locationSubTitleText";
	this.locationSubTitleText.lineHeight = 11;
	this.locationSubTitleText.lineWidth = 106;
	this.locationSubTitleText.parent = this;
	this.locationSubTitleText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.locationSubTitleText).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_region, new cjs.Rectangle(0,0,110,12), null);


(lib.txt_location = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// location
	this.locationTitleText = new cjs.Text("Derwent Water", "12px 'FS Elliot'", "#FFFFFF");
	this.locationTitleText.name = "locationTitleText";
	this.locationTitleText.lineHeight = 15;
	this.locationTitleText.lineWidth = 137;
	this.locationTitleText.parent = this;
	this.locationTitleText.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.locationTitleText).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_location, new cjs.Rectangle(0,0,141.1,16), null);


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
	this.Text3 = new cjs.Text("Get more out of every trip with Caravan and Motorhome Club membership", "30px 'FS Elliot'", "#006070");
	this.Text3.name = "Text3";
	this.Text3.lineHeight = 33;
	this.Text3.lineWidth = 556;
	this.Text3.parent = this;
	this.Text3.setTransform(-22.7,8.2);

	this.timeline.addTween(cjs.Tween.get(this.Text3).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text3, new cjs.Rectangle(-24.7,6.2,560.4,141), null);


(lib.Text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.Text2 = new cjs.Text("Whether you own va\nMotorhome or a Caravan", "30px 'FS Elliot'", "#006070");
	this.Text2.name = "Text2";
	this.Text2.lineHeight = 33;
	this.Text2.lineWidth = 466;
	this.Text2.parent = this;
	this.Text2.setTransform(18.3,8.2);

	this.timeline.addTween(cjs.Tween.get(this.Text2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Text2, new cjs.Rectangle(16.3,6.2,470.4,145), null);


(lib.Textstart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.TextStart = new cjs.Text("Wherever your trip\ntakes you…", "28px 'FS Elliot'", "#FFFFFF");
	this.TextStart.name = "TextStart";
	this.TextStart.lineHeight = 31;
	this.TextStart.lineWidth = 296;
	this.TextStart.parent = this;
	this.TextStart.setTransform(10.2,6.1);

	this.timeline.addTween(cjs.Tween.get(this.TextStart).wait(1));

}).prototype = getMCSymbolPrototype(lib.Textstart, new cjs.Rectangle(8.2,4.1,300,63), null);


(lib.Textend = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.TextEnd = new cjs.Text("Exclusive deals and money-saving offers – all for just £51/year", "24px 'FS Elliot'", "#FFFFFF");
	this.TextEnd.name = "TextEnd";
	this.TextEnd.lineHeight = 27;
	this.TextEnd.lineWidth = 382;
	this.TextEnd.parent = this;
	this.TextEnd.setTransform(45.8,-58.9);

	this.timeline.addTween(cjs.Tween.get(this.TextEnd).wait(1));

}).prototype = getMCSymbolPrototype(lib.Textend, new cjs.Rectangle(43.8,-60.9,386.2,70), null);


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

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(167).to({graphics:mask_graphics_167,x:-198,y:-26.1}).wait(4).to({graphics:mask_graphics_171,x:-197.8,y:-25.9}).wait(1).to({graphics:mask_graphics_172,x:-190,y:-0.9}).wait(1).to({graphics:mask_graphics_173,x:-180.8,y:22.5}).wait(1).to({graphics:mask_graphics_174,x:-170.4,y:44.1}).wait(1).to({graphics:mask_graphics_175,x:-159.2,y:63.9}).wait(1).to({graphics:mask_graphics_176,x:-147.4,y:82}).wait(1).to({graphics:mask_graphics_177,x:-135.2,y:98.4}).wait(1).to({graphics:mask_graphics_178,x:-122.8,y:113.1}).wait(1).to({graphics:mask_graphics_179,x:-110.5,y:126.4}).wait(1).to({graphics:mask_graphics_180,x:-98.3,y:138.2}).wait(1).to({graphics:mask_graphics_181,x:-86.5,y:148.6}).wait(1).to({graphics:mask_graphics_182,x:-75.1,y:157.8}).wait(1).to({graphics:mask_graphics_183,x:-64.3,y:165.8}).wait(1).to({graphics:mask_graphics_184,x:-54.2,y:172.7}).wait(1).to({graphics:mask_graphics_185,x:-44.9,y:178.7}).wait(1).to({graphics:mask_graphics_186,x:-36.3,y:183.8}).wait(1).to({graphics:mask_graphics_187,x:-28.7,y:188}).wait(1).to({graphics:mask_graphics_188,x:-22,y:191.6}).wait(1).to({graphics:mask_graphics_189,x:-16.3,y:194.5}).wait(1).to({graphics:mask_graphics_190,x:-11.5,y:196.8}).wait(1).to({graphics:mask_graphics_191,x:-7.8,y:198.5}).wait(1).to({graphics:mask_graphics_192,x:-5.2,y:199.7}).wait(1).to({graphics:mask_graphics_193,x:-3.6,y:200.4}).wait(1).to({graphics:mask_graphics_194,x:-3,y:200.7}).wait(1).to({graphics:mask_graphics_195,x:2.3,y:207.5}).wait(104).to({graphics:mask_graphics_299,x:-10.8,y:199.8}).wait(1).to({graphics:mask_graphics_300,x:15.3,y:210.7}).wait(1).to({graphics:mask_graphics_301,x:42.2,y:219.5}).wait(1).to({graphics:mask_graphics_302,x:69.8,y:226.1}).wait(1).to({graphics:mask_graphics_303,x:97.8,y:230.4}).wait(1).to({graphics:mask_graphics_304,x:126,y:232.5}).wait(1).to({graphics:mask_graphics_305,x:126,y:232.5}).wait(1));

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
(lib.CAMC_Journey_Image_320x50 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

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
		//root.cta_container.cta_text.text = data.text5;
		//root.cta_container.cta_text.font = "13px 'FS Elliot Bold'";
	}
	this.frame_899 = function() {
		console.log("loopCount");
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
	this.instance.setTransform(20.5,22.8,0.614,0.61,0,0,0,20.6,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(496).to({regY:15.1,y:22.7},0).wait(1).to({regX:20.4,regY:19.6,x:20.3,y:25.4,alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(398));

	// TextEnd
	this.TextEnd_Container = new lib.Textend();
	this.TextEnd_Container.parent = this;
	this.TextEnd_Container.setTransform(377,130,1,1,0,0,0,150,29);
	this.TextEnd_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.TextEnd_Container).wait(1).to({regX:236.9,regY:-26,scaleX:1,scaleY:1,x:463.2,y:74.9},0).wait(1).to({scaleX:1,scaleY:1,x:462.6,y:74.8},0).wait(1).to({scaleX:1,scaleY:1,x:462,y:74.7},0).wait(1).to({scaleX:1,scaleY:1,x:461.3,y:74.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:460.7,y:74.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:460,y:74.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:459.4,y:74.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:458.7,y:74.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:458.1,y:74},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:457.4,y:73.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:456.7,y:73.8},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:456.1,y:73.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:455.4,y:73.6},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:454.7,y:73.5},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:454,y:73.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:453.4,y:73.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:452.7,y:73.1},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:452,y:73},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:451.3,y:72.8},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:450.6,y:72.7},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:449.9,y:72.6},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:449.2,y:72.5},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:448.5,y:72.3},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:447.8,y:72.2},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:447.1,y:72.1},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:446.4,y:71.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:445.6,y:71.8},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:444.9,y:71.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:444.1,y:71.5},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:443.4,y:71.4},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:442.7,y:71.3},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:441.9,y:71.1},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:441.2,y:71},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:440.4,y:70.8},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:439.7,y:70.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:438.9,y:70.5},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:438.2,y:70.4},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:437.4,y:70.3},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:436.6,y:70.1},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:435.9,y:69.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:435.1,y:69.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:434.3,y:69.7},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:433.5,y:69.5},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:432.8,y:69.3},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:431.9,y:69.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:431.2,y:69},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:430.4,y:68.8},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:429.5,y:68.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:428.8,y:68.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:427.9,y:68.4},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:427.2,y:68.2},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:426.3,y:68.1},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:425.5,y:67.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:424.7,y:67.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:423.9,y:67.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:423,y:67.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:422.2,y:67.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:421.4,y:67},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:420.5,y:66.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:419.7,y:66.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:418.8,y:66.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:418,y:66.3},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:417.1,y:66.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:416.2,y:65.9},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:415.4,y:65.8},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:414.5,y:65.6},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:413.7,y:65.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:412.8,y:65.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:411.9,y:65},0).wait(1).to({scaleX:0.91,scaleY:0.91,x:411,y:64.8},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:410.1,y:64.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:409.3,y:64.5},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:408.3,y:64.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:407.5,y:64.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:406.5,y:63.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:405.7,y:63.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:404.7,y:63.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:403.8,y:63.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:402.9,y:63.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:402,y:62.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:401.1,y:62.7},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:400.1,y:62.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:399.2,y:62.3},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:398.3,y:62.1},0).wait(1).to({scaleX:0.89,scaleY:0.89,x:397.4,y:61.9},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:396.5,y:61.7},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:395.5,y:61.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:394.6,y:61.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:393.6,y:61},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:392.7,y:60.8},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:391.7,y:60.6},0).wait(1).to({scaleX:0.88,scaleY:0.88,x:390.8,y:60.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:389.8,y:60.2},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:388.8,y:59.9},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:387.9,y:59.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:386.9,y:59.5},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:386,y:59.3},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:385,y:59.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:384,y:58.9},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:383,y:58.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:382,y:58.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:381.1,y:58.2},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:380.1,y:58},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:379.1,y:57.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:378.1,y:57.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:377.1,y:57.3},0).wait(1).to({scaleX:0.86,scaleY:0.86,x:376.1,y:57.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:375.1,y:56.8},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:374.1,y:56.6},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:373.1,y:56.4},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:372.1,y:56.1},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:371.1,y:55.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:370.1,y:55.7},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:369,y:55.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:368,y:55.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:367,y:55},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:366,y:54.8},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:365,y:54.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:364,y:54.3},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:363,y:54},0).wait(1).to({scaleX:0.84,scaleY:0.84,x:361.9,y:53.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:360.9,y:53.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:359.8,y:53.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:358.8,y:53.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:357.8,y:52.8},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:356.8,y:52.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:355.7,y:52.4},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:354.7,y:52.1},0).wait(1).to({scaleX:0.83,scaleY:0.83,x:353.7,y:51.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:352.6,y:51.6},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:351.6,y:51.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:350.5,y:51.1},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:349.5,y:50.9},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:348.5,y:50.7},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:347.4,y:50.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,x:346.4,y:50.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:345.3,y:49.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:344.3,y:49.6},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:343.2,y:49.4},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:342.2,y:49.2},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:341.1,y:48.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:340,y:48.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,x:339,y:48.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:337.9,y:48.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:336.9,y:47.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:335.8,y:47.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:334.8,y:47.4},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:333.7,y:47.2},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:332.7,y:46.9},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:331.7,y:46.7},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:330.6,y:46.5},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:329.5,y:46.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:328.5,y:46},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:327.4,y:45.7},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:326.4,y:45.4},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:325.3,y:45.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:324.3,y:45},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:323.2,y:44.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:322.2,y:44.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:321.1,y:44.2},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:320.1,y:44},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:319,y:43.7},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:318,y:43.5},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:316.9,y:43.3},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:315.9,y:43},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:314.9,y:42.7},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:313.8,y:42.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:312.8,y:42.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:311.7,y:42},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:310.7,y:41.8},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:309.6,y:41.5},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:308.6,y:41.3},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:307.6,y:41},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:306.5,y:40.8},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:305.5,y:40.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:304.5,y:40.3},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:303.4,y:40.1},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:302.4,y:39.9},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:301.4,y:39.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:300.4,y:39.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:299.3,y:39.1},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:298.3,y:38.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:297.3,y:38.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:296.3,y:38.4},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:295.3,y:38.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:294.3,y:37.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:293.2,y:37.7},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:292.2,y:37.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:291.3,y:37.2},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:290.2,y:37},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:289.2,y:36.8},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:288.2,y:36.6},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:287.3,y:36.3},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:286.2,y:36.1},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:285.3,y:35.9},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:284.3,y:35.7},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:283.3,y:35.4},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:282.3,y:35.2},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:281.3,y:35},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:280.4,y:34.8},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:279.4,y:34.6},0).wait(1).to({scaleX:0.73,scaleY:0.73,x:278.4,y:34.4},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:277.5,y:34.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:276.5,y:33.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:275.5,y:33.7},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:274.5,y:33.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:273.6,y:33.3},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:272.6,y:33.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:271.7,y:32.9},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:270.7,y:32.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:269.8,y:32.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:268.9,y:32.2},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:267.9,y:32},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:267,y:31.8},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:266,y:31.6},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:265.1,y:31.4},0).wait(1).to({scaleX:0.71,scaleY:0.71,x:264.2,y:31.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:263.3,y:31},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:262.4,y:30.8},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:261.4,y:30.6},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:260.5,y:30.4},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:259.6,y:30.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:258.7,y:30},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:257.8,y:29.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:256.9,y:29.6},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:256,y:29.4},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:255.1,y:29.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:254.3,y:29},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:253.4,y:28.8},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:252.5,y:28.6},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:251.6,y:28.4},0).wait(1).to({scaleX:0.69,scaleY:0.69,x:250.7,y:28.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:249.8,y:28.1},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:249,y:27.9},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:248.2,y:27.7},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:247.3,y:27.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:246.4,y:27.3},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:245.6,y:27.2},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:244.7,y:27},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:243.9,y:26.8},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:243,y:26.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:242.2,y:26.5},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:241.4,y:26.3},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:240.6,y:26.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:239.7,y:26},0).wait(1).to({scaleX:0.67,scaleY:0.67,x:238.9,y:25.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:238.1,y:25.6},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:237.3,y:25.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:236.4,y:25.3},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:235.6,y:25.2},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:234.9,y:25},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:234,y:24.8},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:233.3,y:24.7},0).wait(1).to({scaleX:0.66,scaleY:0.66,x:232.4,y:24.5},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:231.7,y:24.3},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:230.9,y:24.2},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:230.1,y:24.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:229.3,y:23.9},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:228.5,y:23.7},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:227.8,y:23.6},0).wait(1).to({scaleX:0.65,scaleY:0.65,x:227,y:23.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:226.3,y:23.3},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:225.5,y:23.1},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:224.7,y:23},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:224,y:22.8},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:223.2,y:22.7},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:222.9},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:222.8,y:22.8},0).wait(1).to({scaleX:0.64,scaleY:0.64,x:222.7},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:222.5,y:22.9},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:222.4,y:23},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:222.3,y:23.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:222.2,y:23.2},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:222.1},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:221.9,y:23.3},0).wait(1).to({scaleX:0.63,scaleY:0.63,x:221.8,y:23.4},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:221.7,y:23.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:221.6},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:221.4,y:23.6},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:221.3,y:23.7},0).wait(1).to({scaleX:0.62,scaleY:0.62},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:221.1,y:23.8},0).wait(1).to({scaleX:0.62,scaleY:0.62,x:221,y:23.9},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:220.9,y:24},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:220.8},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:220.6,y:24.1},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:220.5,y:24.2},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:220.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:220.3,y:24.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:220.2,y:24.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,x:220,y:24.5},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:219.9,y:24.6},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:219.8},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:219.7,y:24.7},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:219.6,y:24.8},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:219.5,y:24.9},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:219.4},0).wait(1).to({scaleX:0.6,scaleY:0.6,x:219.2,y:25},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:219.1,y:25.1},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:219,y:25.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:218.9,y:25.3},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:218.7},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:218.6,y:25.4},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:218.5,y:25.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,x:218.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:218.3,y:25.6},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:218.2,y:25.7},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:218.1,y:25.8},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:217.9},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:217.8,y:25.9},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:217.7,y:26},0).wait(1).to({scaleX:0.58,scaleY:0.58,x:217.6},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:217.5,y:26.1},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:217.3,y:26.2},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:217.2,y:26.3},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:217.1},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:217,y:26.4},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:216.8,y:26.5},0).wait(1).to({scaleX:0.57,scaleY:0.57,x:216.7,y:26.6},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:216.6,y:26.7},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:216.5},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:216.4,y:26.8},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:216.3,y:26.9},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:216.2,y:27},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:216,y:27.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:215.9},0).wait(1).to({scaleX:0.56,scaleY:0.56,x:215.8,y:27.2},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:215.7,y:27.3},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:215.6},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:215.4,y:27.4},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:215.3,y:27.5},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:215.2,y:27.6},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:215.1},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:215,y:27.7},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:214.9,y:27.8},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:214.8},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:214.6,y:27.9},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:214.5,y:28},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:214.4,y:28.1},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:214.3},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:214.1,y:28.2},0).wait(1).to({scaleX:0.54,scaleY:0.54,x:214,y:28.3},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:213.9,y:28.4},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:213.8,y:28.5},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:213.7},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:213.5,y:28.6},0).wait(1).to({scaleX:0.53,scaleY:0.53,y:28.7},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:213.3,y:28.8},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:213.2},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:213.1,y:28.9},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:213,y:29},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:212.9,y:29.1},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:212.7},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:212.6,y:29.2},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:212.5,y:29.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:212.4},0).wait(1).to({scaleX:0.52,scaleY:0.52,x:212.2,y:29.4},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:212.1,y:29.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:212,y:29.6},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:211.9},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:211.8,y:29.7},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:211.7,y:29.8},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:211.6},0).wait(1).to({scaleX:0.51,scaleY:0.51,x:211.4,y:29.9},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:211.3,y:30},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:211.2,y:30.1},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:211.1,y:30.2},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:211},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:210.8,y:30.3},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:210.7,y:30.4},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:210.6,y:30.5},0).wait(1).to({scaleX:0.5,scaleY:0.5,x:210.5,y:30.6},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:210.3},0).wait(1).to({scaleX:0.49,scaleY:0.49,y:30.7},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:210.2,y:30.8},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:210,y:30.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:209.9},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:209.8,y:31},0).wait(1).to({scaleX:0.49,scaleY:0.49,x:209.7,y:31.1},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:209.5},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:209.4,y:31.2},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:209.3,y:31.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:209.2,y:31.4},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:209.1},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:208.9,y:31.5},0).wait(1).to({scaleX:0.48,scaleY:0.48,x:208.8,y:31.6},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:208.7},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:208.6,y:31.7},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:208.5,y:31.8},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:208.4,y:31.9},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:208.3,y:32},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:208.1},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:208,y:32.1},0).wait(1).to({scaleX:0.47,scaleY:0.47,x:207.9,y:32.2},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:207.8,y:32.3},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:207.6},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:207.5,y:32.4},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:207.4,y:32.5},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:207.3,y:32.6},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:207.2,y:32.7},0).wait(1).to({scaleX:0.46,scaleY:0.46,x:207.1},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:207,y:32.8},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:206.8,y:32.9},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:206.7},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:206.6,y:33},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:206.5,y:33.1},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:206.4},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:206.2,y:33.2},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:206.1,y:33.3},0).wait(138).to({regX:150.1,regY:29.2,x:188.9,y:57.9},0).wait(1).to({regX:236.9,regY:-26,x:227.5,y:32.9,alpha:0.1},0).wait(1).to({y:32.4,alpha:0.2},0).wait(1).to({y:31.9,alpha:0.3},0).wait(1).to({y:31.5,alpha:0.4},0).wait(1).to({y:31,alpha:0.5},0).wait(1).to({y:30.5,alpha:0.6},0).wait(1).to({y:30.1,alpha:0.7},0).wait(1).to({y:29.6,alpha:0.8},0).wait(1).to({y:29.1,alpha:0.9},0).wait(1).to({y:28.8,alpha:1},0).wait(343));

	// Logo_morph
	this.instance_1 = new lib.Morphinglogo();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-0.6,188.3,0.444,0.444,0,0,0,-1.4,423.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(463).to({_off:false},0).wait(42).to({regX:-1.2,x:52.8,y:164.5,alpha:1},0).to({regX:20.2,regY:441.9,scaleX:0.03,scaleY:0.03,x:20.3,y:25.8},18).wait(377));

	// BG_End_Image
	this.IMG_container2 = new lib.IMG();
	this.IMG_container2.parent = this;
	this.IMG_container2.setTransform(362.3,44.5,1,1,0,0,0,362.3,44.5);
	this.IMG_container2.alpha = 0;
	this.IMG_container2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.IMG_container2).wait(523).to({_off:false},0).wait(1).to({regX:0,regY:0,x:0,y:0,alpha:0.014},0).wait(1).to({alpha:0.029},0).wait(1).to({alpha:0.043},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.071},0).wait(1).to({alpha:0.086},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0.114},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.157},0).wait(1).to({alpha:0.171},0).wait(1).to({alpha:0.186},0).wait(1).to({alpha:0.2},0).wait(363));

	// Scene4_Top
	this.instance_2 = new lib.Scene4_Top("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.9,138,0.444,0.444,0,0,0,257.8,363.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({_off:false},0).to({_off:true},473).wait(395));

	// BG_grad
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.1,-25,-0.1,24.9).s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,25);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(480).to({_off:false},0).wait(420));

	// Scene4_Bottom
	this.instance_3 = new lib.Scene4_Bottom("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(109.9,164.5,0.444,0.444,0,0,0,127.4,423.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(32).to({_off:false},0).to({_off:true},473).wait(395));

	// txt_region
	this.locationSubTitleContainer = new lib.txt_region();
	this.locationSubTitleContainer.parent = this;
	this.locationSubTitleContainer.setTransform(181,62.5,1,1,0,0,0,126,25.5);
	this.locationSubTitleContainer.alpha = 0;
	this.locationSubTitleContainer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.locationSubTitleContainer).wait(370).to({_off:false},0).to({y:52.5,alpha:1},5,cjs.Ease.get(1)).wait(71).to({y:42.5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},3).wait(446));

	// txt_location
	this.locationTitleContainer = new lib.txt_location();
	this.locationTitleContainer.parent = this;
	this.locationTitleContainer.setTransform(181,47.5,1,1,0,0,0,126,25.5);
	this.locationTitleContainer.alpha = 0;
	this.locationTitleContainer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.locationTitleContainer).wait(370).to({_off:false},0).to({y:37.5,alpha:1},5,cjs.Ease.get(1)).wait(71).to({y:27.5,alpha:0},5,cjs.Ease.get(1)).to({_off:true},3).wait(446));

	// Img mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_367 = new cjs.Graphics().p("AMMB+QgagaAAgkQAAglAagZQAagZAkAAQAZAAATALQAKAGAJAIQAZAZABAlQgBAkgZAaQgJAJgKAGQgTALgZAAQgkAAgagag");
	var mask_graphics_368 = new cjs.Graphics().p("AHuDoQhghgAAiIQAAiIBghgQBghfCIAAQBaAABKAqQAlAVAfAgQBhBgAACIQAACIhhBgQgfAgglAWQhKAqhaAAQiIAAhghgg");
	var mask_graphics_369 = new cjs.Graphics().p("ADQGSQininAAjrQAAjsCninQCnilDrAAQCcAAB/BJQBAAlA3A3QCnCnAADsQAADrinCnQg3A3hAAnQh/BJicAAQjrAAining");
	var mask_graphics_370 = new cjs.Graphics().p("AhNI8QjujtAAlPQAAlQDujtQDsjrFPAAQDeAAC0BnQBbA1BPBPQDtDtAAFQQAAFPjtDtQhPBOhbA4Qi0BnjeAAQlPAAjsjtg");
	var mask_graphics_371 = new cjs.Graphics().p("AlsLmQkzk0AAmyQAAm0Ezk0QE0kxGxAAQEhAADpCHQB3BFBlBlQE0E0AAG0QAAGyk0E0QhlBmh3BHQjpCHkhAAQmxAAk0k0g");
	var mask_graphics_372 = new cjs.Graphics().p("AqKOQQl6l6AAoWQAAoYF6l6QF6l3IVAAQFjAAEfClQCRBVB9B9QF6F6AAIYQAAIWl6F6Qh9B9iRBYQkfClljAAQoVAAl6l6g");
	var mask_graphics_373 = new cjs.Graphics().p("AuoQ6QnBnBAAp5QAAp8HBnBQHBm9J4AAQGlAAFUDFQCsBkCVCUQHAHBAAJ8QAAJ5nAHBQiVCUisBoQlUDFmlAAQp4AAnBnBg");
	var mask_graphics_374 = new cjs.Graphics().p("AzGTkQoIoHAArdQAArgIIoHQIHoDLcAAQHmAAGKDjQDIB0CrCsQIIIHAALgQAALdoIIHQirCrjIB5QmKDjnmAAQrcAAoHoHg");
	var mask_graphics_375 = new cjs.Graphics().p("A2NWOQpOpOAAtAQAAtEJOpOQJOpJM/AAQIpAAG/EDQDjCDDDDDQJOJOAANEQAANApOJOQjDDDjjCIQm/EDopAAQs/AApOpOg");
	var mask_graphics_446 = new cjs.Graphics().p("A2NWOQpOpOAAtAQAAtEJOpOQJOpJM/AAQIpAAG/EDQDjCDDDDDQJOJOAANEQAANApOJOQjDDDjjCIQm/EDopAAQs/AApOpOg");
	var mask_graphics_447 = new cjs.Graphics().p("AyZTMQn9n+AArOQAArSH9n9QH9n5LOAAQHdAAGCDfQDEByCoCoQH9H9AALSQAALOn9H+QioCojEB2QmCDfndAAQrOAAn9n9g");
	var mask_graphics_448 = new cjs.Graphics().p("AtTQJQmsmsAApdQAApfGsmtQGtmpJcAAQGSAAFFC8QCkBfCOCOQGtGtAAJfQAAJdmtGsQiOCOikBjQlFC8mSAAQpcAAmtmtg");
	var mask_graphics_449 = new cjs.Graphics().p("AoMNHQlclcAAnrQAAntFclcQFclZHqAAQFGAAEICYQCGBOBzBzQFcFcAAHtQAAHrlcFcQhzBziGBRQkICYlGAAQnqAAlclcg");
	var mask_graphics_450 = new cjs.Graphics().p("AjGKFQkLkMAAl5QAAl7ELkLQELkJF5AAQD7AADLB1QBnA7BYBZQELELAAF7QAAF5kLEMQhYBYhnA+QjLB1j7AAQl5AAkLkLg");
	var mask_graphics_451 = new cjs.Graphics().p("ACAHDQi6i7AAkIQAAkIC6i7QC7i6EHAAQCvAACOBSQBIAqA+A+QC7C7AAEIQAAEIi7C7Qg+A9hIAsQiOBSivAAQkHAAi7i7g");
	var mask_graphics_452 = new cjs.Graphics().p("AHGEAQhqhqAAiWQAAiWBqhqQBqhqCWAAQBkAABRAvQApAXAjAkQBqBqAACWQAACWhqBqQgjAkgpAYQhRAvhkAAQiWAAhqhrg");
	var mask_graphics_453 = new cjs.Graphics().p("AMMB+QgZgaAAgkQAAglAZgZQAagZAlAAQAYAAATALQAKAGAJAIQAZAZAAAlQAAAkgZAaQgJAJgKAGQgTALgYAAQglAAgagag");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(367).to({graphics:mask_graphics_367,x:93.1,y:15.2}).wait(1).to({graphics:mask_graphics_368,x:105.5,y:22}).wait(1).to({graphics:mask_graphics_369,x:117.9,y:22.4}).wait(1).to({graphics:mask_graphics_370,x:130.3,y:22.8}).wait(1).to({graphics:mask_graphics_371,x:142.7,y:23.2}).wait(1).to({graphics:mask_graphics_372,x:155.1,y:23.5}).wait(1).to({graphics:mask_graphics_373,x:167.5,y:23.9}).wait(1).to({graphics:mask_graphics_374,x:180,y:24.3}).wait(1).to({graphics:mask_graphics_375,x:184.7,y:24.7}).wait(71).to({graphics:mask_graphics_446,x:184.7,y:24.7}).wait(1).to({graphics:mask_graphics_447,x:178.6,y:24.3}).wait(1).to({graphics:mask_graphics_448,x:164.4,y:23.8}).wait(1).to({graphics:mask_graphics_449,x:150.1,y:23.4}).wait(1).to({graphics:mask_graphics_450,x:135.8,y:23}).wait(1).to({graphics:mask_graphics_451,x:121.6,y:22.5}).wait(1).to({graphics:mask_graphics_452,x:107.3,y:22.1}).wait(1).to({graphics:mask_graphics_453,x:93,y:15.2}).wait(447));

	// grad_location
	this.instance_4 = new lib.grad();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-0.1,25.1,0.167,1.28,90,0,0,150.3,250.1);
	this.instance_4.alpha = 0.719;
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(367).to({_off:false},0).to({_off:true},87).wait(446));

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
	this.instance_5 = new lib.img_Mask();
	this.instance_5.parent = this;
	this.instance_5.setTransform(186.2,30.5,0.46,0.46,0,0,0,19.2,19.2);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(367).to({_off:false},0).to({scaleX:10.53,scaleY:10.53,x:386.9,y:226.9},8).wait(71).to({regX:19.1,regY:19.1,scaleX:10.53,scaleY:10.53,x:385.8,y:225.9},0).to({regX:19.2,regY:19.2,scaleX:0.46,scaleY:0.46,x:186.2,y:30.5},7).to({_off:true},1).wait(446));

	// Scene3_Top
	this.instance_6 = new lib.Scene3_Top("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(147.9,156.8,0.444,0.444,0,0,0,321.1,330.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).wait(1).to({regX:240.6,regY:206.8,x:112.5,y:101.8,startPosition:1},0).wait(1).to({x:113,startPosition:2},0).wait(1).to({x:113.4,y:101.7,startPosition:3},0).wait(1).to({x:113.8,startPosition:4},0).wait(1).to({x:114.3,y:101.6,startPosition:5},0).wait(1).to({x:114.7,y:101.5,startPosition:6},0).wait(1).to({x:115.2,startPosition:7},0).wait(1).to({x:115.6,y:101.4,startPosition:8},0).wait(1).to({x:116,startPosition:9},0).wait(1).to({x:116.5,y:101.3,startPosition:10},0).wait(1).to({x:116.9,startPosition:11},0).wait(1).to({x:117.3,y:101.2,startPosition:12},0).wait(1).to({x:117.8,y:101.1,startPosition:13},0).wait(1).to({x:118.2,startPosition:14},0).wait(1).to({x:118.6,y:101,startPosition:15},0).wait(1).to({x:119.1,startPosition:16},0).wait(1).to({x:119.5,y:100.9,startPosition:17},0).wait(1).to({x:120,y:100.8,startPosition:18},0).wait(1).to({x:120.4,startPosition:19},0).wait(1).to({x:120.8,y:100.7,startPosition:20},0).wait(1).to({x:121.3,startPosition:21},0).wait(1).to({x:121.7,y:100.6,startPosition:22},0).wait(1).to({x:122.1,startPosition:23},0).wait(1).to({x:122.6,y:100.5,startPosition:24},0).wait(1).to({x:123,y:100.4,startPosition:25},0).wait(1).to({x:123.4,startPosition:26},0).wait(1).to({x:123.9,y:100.3,startPosition:27},0).wait(1).to({x:124.3,startPosition:28},0).wait(1).to({x:124.8,y:100.2,startPosition:29},0).wait(1).to({x:125.2,y:100.1,startPosition:30},0).wait(1).to({x:125.6,startPosition:31},0).wait(1).to({x:126.1,y:100,startPosition:32},0).wait(1).to({x:126.5,startPosition:33},0).wait(1).to({x:126.9,y:99.9,startPosition:34},0).wait(1).to({x:127.4,startPosition:35},0).wait(1).to({x:127.8,y:99.8,startPosition:36},0).wait(1).to({x:128.2,y:99.7,startPosition:37},0).wait(1).to({x:128.7,startPosition:38},0).wait(1).to({x:129.1,y:99.6,startPosition:39},0).wait(1).to({x:129.6,startPosition:40},0).wait(1).to({x:130,y:99.5,startPosition:41},0).wait(1).to({x:130.4,y:99.4,startPosition:42},0).wait(1).to({x:130.9,startPosition:43},0).wait(1).to({x:131.3,y:99.3,startPosition:44},0).wait(1).to({x:131.7,startPosition:45},0).wait(1).to({x:132.2,y:99.2,startPosition:46},0).wait(1).to({x:132.6,startPosition:47},0).wait(1).to({x:133,y:99.1,startPosition:48},0).wait(1).to({x:133.5,y:99,startPosition:49},0).wait(1).to({x:133.9,startPosition:50},0).wait(1).to({x:134.4,y:98.9,startPosition:51},0).wait(1).to({x:134.8,startPosition:52},0).wait(1).to({x:135.2,y:98.8,startPosition:53},0).wait(1).to({x:135.7,y:98.7,startPosition:54},0).wait(1).to({x:136.1,startPosition:55},0).wait(1).to({x:136.5,y:98.6,startPosition:56},0).wait(1).to({x:137,startPosition:57},0).wait(1).to({x:137.4,y:98.5,startPosition:58},0).wait(1).to({x:137.8,startPosition:59},0).wait(1).to({x:138.3,y:98.4,startPosition:60},0).wait(1).to({x:138.7,y:98.3,startPosition:61},0).wait(1).to({x:139.2,startPosition:62},0).wait(1).to({x:139.6,y:98.2,startPosition:63},0).wait(1).to({x:140,startPosition:64},0).wait(1).to({x:140.5,y:98.1,startPosition:65},0).wait(1).to({x:140.9,y:98,startPosition:66},0).wait(1).to({x:141.3,startPosition:67},0).wait(1).to({x:141.8,y:97.9,startPosition:68},0).wait(1).to({x:142.2,startPosition:69},0).wait(1).to({x:142.6,y:97.8,startPosition:70},0).wait(1).to({x:143.1,startPosition:71},0).wait(1).to({x:143.5,y:97.7,startPosition:72},0).wait(1).to({x:144,y:97.6,startPosition:73},0).wait(1).to({x:144.4,startPosition:74},0).wait(1).to({x:144.8,y:97.5,startPosition:75},0).wait(1).to({x:145.3,startPosition:76},0).wait(1).to({x:145.7,y:97.4,startPosition:77},0).wait(1).to({x:146.1,y:97.3,startPosition:78},0).wait(1).to({x:146.6,startPosition:79},0).wait(1).to({x:147,y:97.2,startPosition:80},0).wait(1).to({x:147.4,startPosition:81},0).wait(1).to({x:147.9,y:97.1,startPosition:82},0).wait(1).to({x:148.3,startPosition:83},0).wait(1).to({x:148.8,y:97,startPosition:84},0).wait(1).to({x:149.2,y:96.9,startPosition:85},0).wait(1).to({x:149.6,startPosition:86},0).wait(1).to({x:150.1,y:96.8,startPosition:87},0).wait(1).to({x:150.5,startPosition:88},0).wait(1).to({x:150.9,y:96.7,startPosition:89},0).wait(1).to({x:151.4,y:96.6,startPosition:90},0).wait(1).to({x:151.8,startPosition:91},0).wait(1).to({x:152.2,y:96.5,startPosition:92},0).wait(1).to({x:152.7,startPosition:93},0).wait(1).to({x:153.1,y:96.4,startPosition:94},0).wait(1).to({x:153.6,startPosition:95},0).wait(1).to({x:154,y:96.3,startPosition:96},0).wait(1).to({x:154.4,y:96.2,startPosition:97},0).wait(1).to({x:154.9,startPosition:98},0).wait(1).to({x:155.3,y:96.1,startPosition:99},0).wait(1).to({x:155.7,startPosition:100},0).wait(1).to({x:156.2,y:96,startPosition:101},0).wait(1).to({x:156.6,y:95.9,startPosition:102},0).wait(1).to({x:157,startPosition:103},0).wait(1).to({x:157.5,y:95.8,startPosition:104},0).wait(1).to({x:157.9,startPosition:105},0).wait(1).to({x:158.4,y:95.7,startPosition:106},0).wait(1).to({x:158.8,startPosition:107},0).wait(1).to({x:159.2,y:95.6,startPosition:108},0).wait(1).to({x:159.7,y:95.5,startPosition:109},0).wait(1).to({x:160.1,startPosition:110},0).wait(1).to({x:160.5,y:95.4,startPosition:111},0).wait(1).to({x:161,startPosition:112},0).wait(1).to({x:161.4,y:95.3,startPosition:113},0).wait(1).to({x:161.8,y:95.2,startPosition:114},0).wait(1).to({x:162.3,startPosition:115},0).wait(1).to({x:162.7,y:95.1,startPosition:116},0).wait(1).to({x:163.2,startPosition:117},0).wait(1).to({x:163.6,y:95,startPosition:118},0).wait(1).to({x:164,startPosition:119},0).wait(1).to({x:164.5,y:94.9,startPosition:120},0).wait(1).to({x:164.9,y:94.8,startPosition:121},0).wait(1).to({x:165.3,startPosition:122},0).wait(1).to({x:165.8,y:94.7,startPosition:123},0).wait(1).to({x:166.2,startPosition:124},0).wait(1).to({x:166.6,y:94.6,startPosition:125},0).wait(1).to({x:167.1,y:94.5,startPosition:126},0).wait(1).to({x:167.5,startPosition:127},0).wait(1).to({x:168,y:94.4,startPosition:128},0).wait(1).to({x:168.4,startPosition:129},0).wait(1).to({x:168.8,y:94.3,startPosition:130},0).wait(1).to({x:169.3,startPosition:131},0).wait(1).to({x:169.7,y:94.2,startPosition:132},0).wait(1).to({x:170.1,y:94.1,startPosition:133},0).wait(1).to({x:170.6,startPosition:134},0).wait(1).to({x:171,y:94,startPosition:135},0).wait(1).to({x:171.4,startPosition:136},0).wait(1).to({x:171.9,y:93.9,startPosition:137},0).wait(1).to({x:172.3,y:93.8,startPosition:138},0).wait(1).to({x:172.8,startPosition:139},0).wait(1).to({x:173.2,y:93.7,startPosition:140},0).wait(1).to({x:173.6,startPosition:141},0).wait(1).to({x:174.1,y:93.6,startPosition:142},0).wait(1).to({x:174.5,y:93.5,startPosition:143},0).wait(1).to({x:174.9,startPosition:144},0).wait(1).to({x:175.4,y:93.4,startPosition:145},0).wait(1).to({x:175.8,startPosition:146},0).wait(1).to({x:176.2,y:93.3,startPosition:147},0).wait(1).to({x:176.7,startPosition:148},0).wait(1).to({x:177.1,y:93.2,startPosition:149},0).wait(1).to({x:177.6,y:93.1,startPosition:150},0).wait(1).to({x:178,startPosition:151},0).wait(1).to({x:178.4,y:93,startPosition:152},0).wait(1).to({x:178.9,startPosition:153},0).wait(1).to({x:179.3,y:92.9,startPosition:154},0).wait(1).to({x:179.7,y:92.8,startPosition:155},0).wait(1).to({x:180.2,startPosition:156},0).wait(1).to({x:180.6,y:92.7,startPosition:157},0).wait(1).to({x:181,startPosition:158},0).wait(1).to({x:181.5,y:92.6,startPosition:159},0).wait(1).to({x:181.9,startPosition:160},0).wait(1).to({x:182.4,y:92.5,startPosition:161},0).wait(1).to({x:182.8,y:92.4,startPosition:162},0).wait(1).to({x:183.2,startPosition:163},0).wait(1).to({x:183.7,y:92.3,startPosition:164},0).wait(1).to({x:184.1,startPosition:165},0).wait(1).to({x:184.5,y:92.2,startPosition:166},0).wait(1).to({x:185,y:92.1,startPosition:167},0).wait(1).to({x:185.4,startPosition:168},0).wait(1).to({x:185.8,y:92,startPosition:169},0).wait(1).to({x:186.3,startPosition:170},0).wait(1).to({x:186.7,y:91.9,startPosition:171},0).wait(1).to({x:187.2,startPosition:172},0).wait(1).to({x:187.6,y:91.8,startPosition:173},0).wait(1).to({x:188,startPosition:174},0).wait(1).to({x:188.5,y:91.7,startPosition:175},0).wait(1).to({x:188.9,startPosition:176},0).wait(1).to({x:189.3,y:91.6,startPosition:177},0).wait(1).to({x:189.8,startPosition:178},0).wait(1).to({x:190.2,y:91.5,startPosition:179},0).wait(1).to({x:190.6,y:91.4,startPosition:180},0).wait(1).to({x:191.1,startPosition:181},0).wait(1).to({x:191.5,y:91.3,startPosition:182},0).wait(1).to({x:192,startPosition:183},0).wait(1).to({x:192.4,y:91.2,startPosition:184},0).wait(1).to({x:192.8,y:91.1,startPosition:185},0).wait(1).to({x:193.3,startPosition:186},0).wait(1).to({x:193.7,y:91,startPosition:187},0).wait(1).to({x:194.1,startPosition:188},0).wait(1).to({x:194.6,y:90.9,startPosition:189},0).wait(1).to({x:195,startPosition:190},0).wait(1).to({x:195.4,y:90.8,startPosition:191},0).wait(1).to({x:195.9,y:90.7,startPosition:192},0).wait(1).to({x:196.3,startPosition:193},0).wait(1).to({x:196.8,y:90.6,startPosition:194},0).wait(1).to({x:197.2,startPosition:195},0).wait(1).to({x:197.6,y:90.5,startPosition:196},0).wait(1).to({x:198.1,y:90.4,startPosition:197},0).wait(1).to({x:198.5,startPosition:198},0).wait(1).to({x:198.9,y:90.3,startPosition:199},0).wait(1).to({x:199.4,startPosition:200},0).wait(1).to({x:199.8,y:90.2,startPosition:201},0).wait(1).to({x:200.2,startPosition:202},0).wait(1).to({x:200.7,y:90.1,startPosition:203},0).wait(1).to({x:201.1,y:90,startPosition:204},0).wait(1).to({x:201.6,startPosition:205},0).wait(1).to({x:202,y:89.9,startPosition:206},0).wait(1).to({x:202.4,startPosition:207},0).wait(1).to({x:202.9,y:89.8,startPosition:208},0).wait(1).to({x:203.3,y:89.7,startPosition:209},0).wait(1).to({x:203.7,startPosition:210},0).wait(1).to({x:204.2,y:89.6,startPosition:211},0).wait(1).to({x:204.6,startPosition:212},0).wait(1).to({x:205,y:89.5,startPosition:213},0).wait(1).to({x:205.5,startPosition:214},0).wait(1).to({x:205.9,y:89.4,startPosition:215},0).wait(1).to({x:206.4,y:89.3,startPosition:216},0).wait(1).to({x:206.8,startPosition:217},0).wait(1).to({x:207.2,y:89.2,startPosition:218},0).wait(1).to({x:207.7,startPosition:219},0).wait(1).to({x:208.1,y:89.1,startPosition:220},0).wait(1).to({x:208.5,y:89,startPosition:221},0).wait(1).to({x:209,startPosition:222},0).wait(1).to({x:209.4,y:88.9,startPosition:223},0).wait(1).to({x:209.8,startPosition:224},0).wait(1).to({x:210.3,y:88.8,startPosition:225},0).wait(1).to({x:210.7,startPosition:226},0).wait(1).to({x:211.2,y:88.7,startPosition:227},0).wait(1).to({x:211.6,y:88.6,startPosition:228},0).wait(1).to({x:212,startPosition:229},0).wait(1).to({x:212.5,y:88.5,startPosition:230},0).wait(1).to({x:212.9,startPosition:231},0).wait(1).to({x:213.3,y:88.4,startPosition:232},0).wait(1).to({x:213.8,y:88.3,startPosition:233},0).wait(1).to({x:214.2,startPosition:234},0).wait(1).to({x:214.6,y:88.2,startPosition:235},0).wait(1).to({x:215.1,startPosition:236},0).wait(1).to({x:215.5,y:88.1,startPosition:237},0).wait(1).to({x:216,startPosition:238},0).wait(1).to({x:216.4,y:88,startPosition:239},0).wait(1).to({x:216.8,y:87.9,startPosition:240},0).wait(1).to({x:217.3,startPosition:241},0).wait(1).to({x:217.7,y:87.8,startPosition:242},0).wait(1).to({x:218.1,startPosition:243},0).wait(1).to({x:218.6,y:87.7,startPosition:244},0).wait(1).to({x:219,y:87.6,startPosition:245},0).wait(1).to({x:219.4,startPosition:246},0).wait(1).to({x:219.9,y:87.5,startPosition:247},0).wait(1).to({x:220.3,startPosition:248},0).wait(1).to({x:220.8,y:87.4,startPosition:249},0).wait(1).to({x:221.2,startPosition:250},0).wait(1).to({x:221.6,y:87.3,startPosition:251},0).wait(1).to({x:222.1,y:87.2,startPosition:252},0).wait(1).to({x:222.5,startPosition:253},0).wait(1).to({x:222.9,y:87.1,startPosition:254},0).wait(1).to({x:223.4,startPosition:255},0).wait(1).to({x:223.8,y:87,startPosition:256},0).wait(1).to({x:224.2,y:86.9,startPosition:257},0).wait(1).to({x:224.7,startPosition:258},0).wait(1).to({x:225.1,y:86.8,startPosition:259},0).wait(1).to({x:225.6,startPosition:260},0).wait(1).to({x:226,y:86.7,startPosition:261},0).wait(1).to({x:226.4,startPosition:262},0).wait(1).to({x:226.9,y:86.6,startPosition:263},0).wait(1).to({x:227.3,y:86.5,startPosition:264},0).wait(1).to({x:227.7,startPosition:265},0).wait(1).to({x:228.2,y:86.4,startPosition:266},0).wait(1).to({x:228.6,startPosition:267},0).wait(1).to({x:229,y:86.3,startPosition:268},0).wait(1).to({x:229.5,y:86.2,startPosition:269},0).wait(1).to({x:229.9,startPosition:270},0).wait(1).to({x:230.4,y:86.1,startPosition:271},0).wait(1).to({x:230.8,startPosition:272},0).wait(1).to({x:231.2,y:86,startPosition:273},0).wait(1).to({x:231.7,startPosition:274},0).wait(1).to({x:232.1,y:85.9,startPosition:275},0).wait(1).to({x:232.5,y:85.8,startPosition:276},0).wait(1).to({x:233,startPosition:277},0).wait(1).to({x:233.4,y:85.7,startPosition:278},0).wait(1).to({x:233.8,startPosition:279},0).wait(1).to({x:234.3,y:85.6,startPosition:280},0).wait(1).to({x:234.7,y:85.5,startPosition:281},0).wait(1).to({x:235.2,startPosition:282},0).wait(1).to({x:235.6,y:85.4,startPosition:283},0).wait(1).to({x:236,startPosition:284},0).wait(1).to({x:236.5,y:85.3,startPosition:285},0).wait(1).to({x:236.9,y:85.2,startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({startPosition:289},0).wait(1).to({startPosition:290},0).wait(1).to({startPosition:291},0).wait(1).to({startPosition:292},0).wait(1).to({startPosition:293},0).wait(1).to({startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:306},0).wait(1).to({startPosition:307},0).wait(1).to({startPosition:308},0).wait(1).to({startPosition:309},0).wait(1).to({startPosition:310},0).wait(1).to({startPosition:311},0).wait(1).to({startPosition:312},0).wait(1).to({startPosition:313},0).wait(1).to({startPosition:314},0).wait(1).to({startPosition:315},0).wait(1).to({startPosition:316},0).wait(1).to({startPosition:317},0).wait(1).to({startPosition:318},0).wait(1).to({startPosition:319},0).wait(1).to({startPosition:320},0).wait(1).to({startPosition:321},0).wait(1).to({startPosition:322},0).wait(1).to({startPosition:323},0).wait(1).to({startPosition:324},0).wait(1).to({startPosition:325},0).wait(1).to({startPosition:326},0).wait(1).to({startPosition:327},0).wait(1).to({startPosition:328},0).wait(1).to({startPosition:329},0).wait(1).to({startPosition:330},0).wait(1).to({startPosition:331},0).wait(1).to({startPosition:332},0).wait(1).to({startPosition:333},0).wait(1).to({startPosition:334},0).wait(1).to({startPosition:335},0).wait(1).to({startPosition:336},0).wait(1).to({startPosition:337},0).wait(1).to({startPosition:338},0).wait(1).to({startPosition:339},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:384.6,y:241.6,startPosition:340},0).wait(1).to({scaleX:2.65,scaleY:2.65,x:532.4,y:398,startPosition:341},0).wait(1).to({scaleX:3.76,scaleY:3.76,x:680.2,y:554.3,startPosition:342},0).wait(1).to({scaleX:4.86,scaleY:4.86,x:827.9,y:710.6,startPosition:343},0).wait(1).to({scaleX:5.96,scaleY:5.96,x:975.6,y:867,startPosition:344},0).wait(1).to({scaleX:7.07,scaleY:7.07,x:1123.4,y:1023.3,startPosition:345},0).wait(1).to({startPosition:346},0).wait(1).to({startPosition:347},0).wait(1).to({startPosition:348},0).wait(1).to({startPosition:349},0).wait(1).to({startPosition:350},0).wait(1).to({startPosition:351},0).wait(1).to({startPosition:352},0).wait(1).to({startPosition:353},0).wait(1).to({startPosition:354},0).wait(1).to({startPosition:355},0).wait(1).to({startPosition:356},0).wait(1).to({startPosition:357},0).wait(1).to({startPosition:358},0).wait(1).to({startPosition:359},0).wait(1).to({startPosition:360},0).wait(1).to({startPosition:361},0).wait(1).to({startPosition:362},0).wait(1).to({startPosition:363},0).wait(1).to({startPosition:364},0).wait(1).to({startPosition:365},0).wait(1).to({startPosition:366},0).wait(1).to({startPosition:367},0).wait(1).to({startPosition:368},0).wait(1).to({startPosition:369},0).wait(1).to({startPosition:370},0).wait(1).to({startPosition:371},0).wait(1).to({startPosition:372},0).wait(1).to({startPosition:373},0).wait(1).to({startPosition:374},0).wait(1).to({startPosition:375},0).wait(1).to({startPosition:376},0).wait(1).to({startPosition:377},0).wait(1).to({startPosition:378},0).wait(1).to({startPosition:379},0).wait(1).to({startPosition:380},0).wait(1).to({startPosition:381},0).wait(1).to({startPosition:382},0).wait(1).to({startPosition:383},0).wait(1).to({startPosition:384},0).wait(1).to({startPosition:385},0).wait(1).to({startPosition:386},0).wait(1).to({startPosition:387},0).wait(1).to({startPosition:388},0).wait(1).to({startPosition:389},0).wait(1).to({startPosition:390},0).wait(1).to({startPosition:391},0).wait(1).to({startPosition:392},0).wait(1).to({startPosition:393},0).wait(1).to({startPosition:394},0).wait(1).to({startPosition:395},0).wait(1).to({startPosition:396},0).wait(1).to({startPosition:397},0).wait(1).to({startPosition:398},0).wait(1).to({startPosition:399},0).wait(1).to({startPosition:400},0).wait(1).to({startPosition:401},0).wait(1).to({startPosition:402},0).wait(1).to({startPosition:403},0).wait(1).to({startPosition:404},0).wait(1).to({startPosition:405},0).wait(1).to({startPosition:406},0).wait(1).to({startPosition:407},0).wait(1).to({startPosition:408},0).wait(1).to({startPosition:409},0).wait(1).to({startPosition:410},0).wait(1).to({startPosition:411},0).wait(1).to({startPosition:412},0).wait(1).to({startPosition:413},0).wait(1).to({startPosition:414},0).wait(1).to({startPosition:415},0).wait(1).to({startPosition:416},0).wait(1).to({startPosition:417},0).wait(1).to({startPosition:418},0).wait(1).to({startPosition:419},0).wait(1).to({scaleX:5.96,scaleY:5.96,x:975.6,y:867,startPosition:420},0).wait(1).to({scaleX:4.86,scaleY:4.86,x:827.9,y:710.6,startPosition:421},0).wait(1).to({scaleX:3.76,scaleY:3.76,x:680.2,y:554.3,startPosition:422},0).wait(1).to({scaleX:2.65,scaleY:2.65,x:532.4,y:398,startPosition:423},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:384.6,y:241.6,startPosition:424},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:236.9,y:85.2,startPosition:425},0).wait(1).to({startPosition:426},0).wait(1).to({startPosition:427},0).wait(1).to({startPosition:428},0).wait(1).to({startPosition:429},0).wait(1).to({startPosition:430},0).wait(1).to({startPosition:431},0).wait(1).to({startPosition:432},0).wait(1).to({startPosition:433},0).wait(1).to({startPosition:434},0).wait(1).to({startPosition:435},0).wait(1).to({startPosition:436},0).wait(1).to({startPosition:437},0).wait(1).to({startPosition:438},0).wait(1).to({startPosition:439},0).wait(1).to({startPosition:440},0).wait(1).to({startPosition:441},0).wait(1).to({startPosition:442},0).wait(1).to({startPosition:443},0).wait(1).to({startPosition:444},0).wait(1).to({startPosition:445},0).wait(1).to({startPosition:446},0).wait(1).to({startPosition:447},0).wait(1).to({startPosition:448},0).wait(1).to({startPosition:449},0).wait(1).to({startPosition:450},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(420));

	// BG_grad
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.1,-25,-0.1,24.9).s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_1.setTransform(160,25);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(331).to({_off:false},0).to({_off:true},149).wait(420));

	// Scene3_bottom
	this.instance_7 = new lib.Scene3_Bottom("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(122,102,0.444,0.444,0,0,0,263.1,206.9);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(28).to({_off:false},0).wait(1).to({x:122.4,y:101.9,startPosition:1},0).wait(1).to({x:122.8,y:101.8,startPosition:2},0).wait(1).to({x:123.3,startPosition:3},0).wait(1).to({x:123.7,y:101.7,startPosition:4},0).wait(1).to({x:124.1,startPosition:5},0).wait(1).to({x:124.6,y:101.6,startPosition:6},0).wait(1).to({x:125,y:101.5,startPosition:7},0).wait(1).to({x:125.4,startPosition:8},0).wait(1).to({x:125.9,y:101.4,startPosition:9},0).wait(1).to({x:126.3,startPosition:10},0).wait(1).to({x:126.7,y:101.3,startPosition:11},0).wait(1).to({x:127.2,y:101.2,startPosition:12},0).wait(1).to({x:127.6,startPosition:13},0).wait(1).to({x:128.1,y:101.1,startPosition:14},0).wait(1).to({x:128.5,startPosition:15},0).wait(1).to({x:128.9,y:101,startPosition:16},0).wait(1).to({x:129.4,startPosition:17},0).wait(1).to({x:129.8,y:100.9,startPosition:18},0).wait(1).to({x:130.2,y:100.8,startPosition:19},0).wait(1).to({x:130.7,startPosition:20},0).wait(1).to({x:131.1,y:100.7,startPosition:21},0).wait(1).to({x:131.5,startPosition:22},0).wait(1).to({x:132,y:100.6,startPosition:23},0).wait(1).to({x:132.4,y:100.5,startPosition:24},0).wait(1).to({x:132.9,startPosition:25},0).wait(1).to({x:133.3,y:100.4,startPosition:26},0).wait(1).to({x:133.7,startPosition:27},0).wait(1).to({x:134.2,y:100.3,startPosition:28},0).wait(1).to({x:134.6,startPosition:29},0).wait(1).to({x:135,y:100.2,startPosition:30},0).wait(1).to({x:135.5,y:100.1,startPosition:31},0).wait(1).to({x:135.9,startPosition:32},0).wait(1).to({x:136.3,y:100,startPosition:33},0).wait(1).to({x:136.8,startPosition:34},0).wait(1).to({x:137.2,y:99.9,startPosition:35},0).wait(1).to({x:137.7,y:99.8,startPosition:36},0).wait(1).to({x:138.1,startPosition:37},0).wait(1).to({x:138.5,y:99.7,startPosition:38},0).wait(1).to({x:139,startPosition:39},0).wait(1).to({x:139.4,y:99.6,startPosition:40},0).wait(1).to({x:139.8,startPosition:41},0).wait(1).to({x:140.3,y:99.5,startPosition:42},0).wait(1).to({x:140.7,y:99.4,startPosition:43},0).wait(1).to({x:141.1,startPosition:44},0).wait(1).to({x:141.6,y:99.3,startPosition:45},0).wait(1).to({x:142,startPosition:46},0).wait(1).to({x:142.5,y:99.2,startPosition:47},0).wait(1).to({x:142.9,y:99.1,startPosition:48},0).wait(1).to({x:143.3,startPosition:49},0).wait(1).to({x:143.8,y:99,startPosition:50},0).wait(1).to({x:144.2,startPosition:51},0).wait(1).to({x:144.6,y:98.9,startPosition:52},0).wait(1).to({x:145.1,startPosition:53},0).wait(1).to({x:145.5,y:98.8,startPosition:54},0).wait(1).to({x:145.9,y:98.7,startPosition:55},0).wait(1).to({x:146.4,startPosition:56},0).wait(1).to({x:146.8,y:98.6,startPosition:57},0).wait(1).to({x:147.3,startPosition:58},0).wait(1).to({x:147.7,y:98.5,startPosition:59},0).wait(1).to({x:148.1,y:98.4,startPosition:60},0).wait(1).to({x:148.6,startPosition:61},0).wait(1).to({x:149,y:98.3,startPosition:62},0).wait(1).to({x:149.4,startPosition:63},0).wait(1).to({x:149.9,y:98.2,startPosition:64},0).wait(1).to({x:150.3,startPosition:65},0).wait(1).to({x:150.7,y:98.1,startPosition:66},0).wait(1).to({x:151.2,y:98,startPosition:67},0).wait(1).to({x:151.6,startPosition:68},0).wait(1).to({x:152.1,y:97.9,startPosition:69},0).wait(1).to({x:152.5,startPosition:70},0).wait(1).to({x:152.9,y:97.8,startPosition:71},0).wait(1).to({x:153.4,y:97.7,startPosition:72},0).wait(1).to({x:153.8,startPosition:73},0).wait(1).to({x:154.2,y:97.6,startPosition:74},0).wait(1).to({x:154.7,startPosition:75},0).wait(1).to({x:155.1,y:97.5,startPosition:76},0).wait(1).to({x:155.5,startPosition:77},0).wait(1).to({x:156,y:97.4,startPosition:78},0).wait(1).to({x:156.4,y:97.3,startPosition:79},0).wait(1).to({x:156.9,startPosition:80},0).wait(1).to({x:157.3,y:97.2,startPosition:81},0).wait(1).to({x:157.7,startPosition:82},0).wait(1).to({x:158.2,y:97.1,startPosition:83},0).wait(1).to({x:158.6,y:97,startPosition:84},0).wait(1).to({x:159,startPosition:85},0).wait(1).to({x:159.5,y:96.9,startPosition:86},0).wait(1).to({x:159.9,startPosition:87},0).wait(1).to({x:160.3,y:96.8,startPosition:88},0).wait(1).to({x:160.8,startPosition:89},0).wait(1).to({x:161.2,y:96.7,startPosition:90},0).wait(1).to({x:161.7,y:96.6,startPosition:91},0).wait(1).to({x:162.1,startPosition:92},0).wait(1).to({x:162.5,y:96.5,startPosition:93},0).wait(1).to({x:163,startPosition:94},0).wait(1).to({x:163.4,y:96.4,startPosition:95},0).wait(1).to({x:163.8,y:96.3,startPosition:96},0).wait(1).to({x:164.3,startPosition:97},0).wait(1).to({x:164.7,y:96.2,startPosition:98},0).wait(1).to({x:165.1,startPosition:99},0).wait(1).to({x:165.6,y:96.1,startPosition:100},0).wait(1).to({x:166,startPosition:101},0).wait(1).to({x:166.5,y:96,startPosition:102},0).wait(1).to({x:166.9,y:95.9,startPosition:103},0).wait(1).to({x:167.3,startPosition:104},0).wait(1).to({x:167.8,y:95.8,startPosition:105},0).wait(1).to({x:168.2,startPosition:106},0).wait(1).to({x:168.6,y:95.7,startPosition:107},0).wait(1).to({x:169.1,y:95.6,startPosition:108},0).wait(1).to({x:169.5,startPosition:109},0).wait(1).to({x:169.9,y:95.5,startPosition:110},0).wait(1).to({x:170.4,startPosition:111},0).wait(1).to({x:170.8,y:95.4,startPosition:112},0).wait(1).to({x:171.3,startPosition:113},0).wait(1).to({x:171.7,y:95.3,startPosition:114},0).wait(1).to({x:172.1,y:95.2,startPosition:115},0).wait(1).to({x:172.6,startPosition:116},0).wait(1).to({x:173,y:95.1,startPosition:117},0).wait(1).to({x:173.4,startPosition:118},0).wait(1).to({x:173.9,y:95,startPosition:119},0).wait(1).to({x:174.3,y:94.9,startPosition:120},0).wait(1).to({x:174.7,startPosition:121},0).wait(1).to({x:175.2,y:94.8,startPosition:122},0).wait(1).to({x:175.6,startPosition:123},0).wait(1).to({x:176.1,y:94.7,startPosition:124},0).wait(1).to({x:176.5,startPosition:125},0).wait(1).to({x:176.9,y:94.6,startPosition:126},0).wait(1).to({x:177.4,y:94.5,startPosition:127},0).wait(1).to({x:177.8,startPosition:128},0).wait(1).to({x:178.2,y:94.4,startPosition:129},0).wait(1).to({x:178.7,startPosition:130},0).wait(1).to({x:179.1,y:94.3,startPosition:131},0).wait(1).to({x:179.5,y:94.2,startPosition:132},0).wait(1).to({x:180,startPosition:133},0).wait(1).to({x:180.4,y:94.1,startPosition:134},0).wait(1).to({x:180.9,startPosition:135},0).wait(1).to({x:181.3,y:94,startPosition:136},0).wait(1).to({x:181.7,startPosition:137},0).wait(1).to({x:182.2,y:93.9,startPosition:138},0).wait(1).to({x:182.6,y:93.8,startPosition:139},0).wait(1).to({x:183,startPosition:140},0).wait(1).to({x:183.5,y:93.7,startPosition:141},0).wait(1).to({x:183.9,startPosition:142},0).wait(1).to({x:184.3,y:93.6,startPosition:143},0).wait(1).to({x:184.8,y:93.5,startPosition:144},0).wait(1).to({x:185.2,startPosition:145},0).wait(1).to({x:185.7,y:93.4,startPosition:146},0).wait(1).to({x:186.1,startPosition:147},0).wait(1).to({x:186.5,y:93.3,startPosition:148},0).wait(1).to({x:187,y:93.2,startPosition:149},0).wait(1).to({x:187.4,startPosition:150},0).wait(1).to({x:187.8,y:93.1,startPosition:151},0).wait(1).to({x:188.3,startPosition:152},0).wait(1).to({x:188.7,y:93,startPosition:153},0).wait(1).to({x:189.1,startPosition:154},0).wait(1).to({x:189.6,y:92.9,startPosition:155},0).wait(1).to({x:190,y:92.8,startPosition:156},0).wait(1).to({x:190.5,startPosition:157},0).wait(1).to({x:190.9,y:92.7,startPosition:158},0).wait(1).to({x:191.3,startPosition:159},0).wait(1).to({x:191.8,y:92.6,startPosition:160},0).wait(1).to({x:192.2,y:92.5,startPosition:161},0).wait(1).to({x:192.6,startPosition:162},0).wait(1).to({x:193.1,y:92.4,startPosition:163},0).wait(1).to({x:193.5,startPosition:164},0).wait(1).to({x:193.9,y:92.3,startPosition:165},0).wait(1).to({x:194.4,startPosition:166},0).wait(1).to({x:194.8,y:92.2,startPosition:167},0).wait(1).to({x:195.3,y:92.1,startPosition:168},0).wait(1).to({x:195.7,startPosition:169},0).wait(1).to({x:196.1,y:92,startPosition:170},0).wait(1).to({x:196.6,startPosition:171},0).wait(1).to({x:197,startPosition:172},0).wait(1).to({x:197.4,y:91.9,startPosition:173},0).wait(1).to({x:197.9,y:91.8,startPosition:174},0).wait(1).to({x:198.3,startPosition:175},0).wait(1).to({x:198.7,y:91.7,startPosition:176},0).wait(1).to({x:199.2,startPosition:177},0).wait(1).to({x:199.6,y:91.6,startPosition:178},0).wait(1).to({x:200.1,y:91.5,startPosition:179},0).wait(1).to({x:200.5,startPosition:180},0).wait(1).to({x:200.9,y:91.4,startPosition:181},0).wait(1).to({x:201.4,startPosition:182},0).wait(1).to({x:201.8,y:91.3,startPosition:183},0).wait(1).to({x:202.2,startPosition:184},0).wait(1).to({x:202.7,y:91.2,startPosition:185},0).wait(1).to({x:203.1,y:91.1,startPosition:186},0).wait(1).to({x:203.5,startPosition:187},0).wait(1).to({x:204,y:91,startPosition:188},0).wait(1).to({x:204.4,startPosition:189},0).wait(1).to({x:204.9,y:90.9,startPosition:190},0).wait(1).to({x:205.3,y:90.8,startPosition:191},0).wait(1).to({x:205.7,startPosition:192},0).wait(1).to({x:206.2,y:90.7,startPosition:193},0).wait(1).to({x:206.6,startPosition:194},0).wait(1).to({x:207,y:90.6,startPosition:195},0).wait(1).to({x:207.5,startPosition:196},0).wait(1).to({x:207.9,y:90.5,startPosition:197},0).wait(1).to({x:208.3,y:90.4,startPosition:198},0).wait(1).to({x:208.8,startPosition:199},0).wait(1).to({x:209.2,y:90.3,startPosition:200},0).wait(1).to({x:209.7,startPosition:201},0).wait(1).to({x:210.1,y:90.2,startPosition:202},0).wait(1).to({x:210.5,y:90.1,startPosition:203},0).wait(1).to({x:211,startPosition:204},0).wait(1).to({x:211.4,y:90,startPosition:205},0).wait(1).to({x:211.8,startPosition:206},0).wait(1).to({x:212.3,y:89.9,startPosition:207},0).wait(1).to({x:212.7,startPosition:208},0).wait(1).to({x:213.1,y:89.8,startPosition:209},0).wait(1).to({x:213.6,y:89.7,startPosition:210},0).wait(1).to({x:214,startPosition:211},0).wait(1).to({x:214.5,y:89.6,startPosition:212},0).wait(1).to({x:214.9,startPosition:213},0).wait(1).to({x:215.3,y:89.5,startPosition:214},0).wait(1).to({x:215.8,y:89.4,startPosition:215},0).wait(1).to({x:216.2,startPosition:216},0).wait(1).to({x:216.6,y:89.3,startPosition:217},0).wait(1).to({x:217.1,startPosition:218},0).wait(1).to({x:217.5,y:89.2,startPosition:219},0).wait(1).to({x:217.9,startPosition:220},0).wait(1).to({x:218.4,y:89.1,startPosition:221},0).wait(1).to({x:218.8,y:89,startPosition:222},0).wait(1).to({x:219.3,startPosition:223},0).wait(1).to({x:219.7,y:88.9,startPosition:224},0).wait(1).to({x:220.1,startPosition:225},0).wait(1).to({x:220.6,y:88.8,startPosition:226},0).wait(1).to({x:221,y:88.7,startPosition:227},0).wait(1).to({x:221.4,startPosition:228},0).wait(1).to({x:221.9,y:88.6,startPosition:229},0).wait(1).to({x:222.3,startPosition:230},0).wait(1).to({x:222.7,y:88.5,startPosition:231},0).wait(1).to({x:223.2,startPosition:232},0).wait(1).to({x:223.6,y:88.4,startPosition:233},0).wait(1).to({x:224.1,y:88.3,startPosition:234},0).wait(1).to({x:224.5,startPosition:235},0).wait(1).to({x:224.9,y:88.2,startPosition:236},0).wait(1).to({x:225.4,startPosition:237},0).wait(1).to({x:225.8,y:88.1,startPosition:238},0).wait(1).to({x:226.2,y:88,startPosition:239},0).wait(1).to({x:226.7,startPosition:240},0).wait(1).to({x:227.1,y:87.9,startPosition:241},0).wait(1).to({x:227.5,startPosition:242},0).wait(1).to({x:228,y:87.8,startPosition:243},0).wait(1).to({x:228.4,startPosition:244},0).wait(1).to({x:228.9,y:87.7,startPosition:245},0).wait(1).to({x:229.3,y:87.6,startPosition:246},0).wait(1).to({x:229.7,startPosition:247},0).wait(1).to({x:230.2,y:87.5,startPosition:248},0).wait(1).to({x:230.6,startPosition:249},0).wait(1).to({x:231,y:87.4,startPosition:250},0).wait(1).to({x:231.5,y:87.3,startPosition:251},0).wait(1).to({x:231.9,startPosition:252},0).wait(1).to({x:232.3,y:87.2,startPosition:253},0).wait(1).to({x:232.8,startPosition:254},0).wait(1).to({x:233.2,y:87.1,startPosition:255},0).wait(1).to({x:233.7,startPosition:256},0).wait(1).to({x:234.1,y:87,startPosition:257},0).wait(1).to({x:234.5,y:86.9,startPosition:258},0).wait(1).to({x:235,startPosition:259},0).wait(1).to({x:235.4,y:86.8,startPosition:260},0).wait(1).to({x:235.8,startPosition:261},0).wait(1).to({x:236.3,y:86.7,startPosition:262},0).wait(1).to({x:236.7,y:86.6,startPosition:263},0).wait(1).to({x:237.1,startPosition:264},0).wait(1).to({x:237.6,y:86.5,startPosition:265},0).wait(1).to({x:238,startPosition:266},0).wait(1).to({x:238.5,y:86.4,startPosition:267},0).wait(1).to({x:238.9,startPosition:268},0).wait(1).to({x:239.3,y:86.3,startPosition:269},0).wait(1).to({x:239.8,y:86.2,startPosition:270},0).wait(1).to({x:240.2,startPosition:271},0).wait(1).to({x:240.6,y:86.1,startPosition:272},0).wait(1).to({x:241.1,startPosition:273},0).wait(1).to({x:241.5,y:86,startPosition:274},0).wait(1).to({x:241.9,y:85.9,startPosition:275},0).wait(1).to({x:242.4,startPosition:276},0).wait(1).to({x:242.8,y:85.8,startPosition:277},0).wait(1).to({x:243.3,startPosition:278},0).wait(1).to({x:243.7,y:85.7,startPosition:279},0).wait(1).to({x:244.1,startPosition:280},0).wait(1).to({x:244.6,y:85.6,startPosition:281},0).wait(1).to({x:245,y:85.5,startPosition:282},0).wait(1).to({x:245.4,startPosition:283},0).wait(1).to({x:245.9,y:85.4,startPosition:284},0).wait(1).to({x:246.3,startPosition:285},0).wait(1).to({x:246.7,y:85.3,startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({startPosition:289},0).wait(1).to({startPosition:290},0).wait(1).to({startPosition:291},0).wait(1).to({startPosition:292},0).wait(1).to({startPosition:293},0).wait(1).to({startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:306},0).wait(1).to({startPosition:307},0).wait(1).to({startPosition:308},0).wait(1).to({startPosition:309},0).wait(1).to({startPosition:310},0).wait(1).to({startPosition:311},0).wait(1).to({startPosition:312},0).wait(1).to({startPosition:313},0).wait(1).to({startPosition:314},0).wait(1).to({startPosition:315},0).wait(1).to({startPosition:316},0).wait(1).to({startPosition:317},0).wait(1).to({startPosition:318},0).wait(1).to({startPosition:319},0).wait(1).to({startPosition:320},0).wait(1).to({startPosition:321},0).wait(1).to({startPosition:322},0).wait(1).to({startPosition:323},0).wait(1).to({startPosition:324},0).wait(1).to({startPosition:325},0).wait(1).to({startPosition:326},0).wait(1).to({startPosition:327},0).wait(1).to({startPosition:328},0).wait(1).to({startPosition:329},0).wait(1).to({startPosition:330},0).wait(1).to({startPosition:331},0).wait(1).to({startPosition:332},0).wait(1).to({startPosition:333},0).wait(1).to({startPosition:334},0).wait(1).to({startPosition:335},0).wait(1).to({startPosition:336},0).wait(1).to({startPosition:337},0).wait(1).to({startPosition:338},0).wait(1).to({startPosition:339},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:418.9,y:241.7,startPosition:340},0).wait(1).to({scaleX:2.65,scaleY:2.65,x:591.1,y:398.2,startPosition:341},0).wait(1).to({scaleX:3.76,scaleY:3.76,x:763.2,y:554.6,startPosition:342},0).wait(1).to({scaleX:4.86,scaleY:4.86,x:935.4,y:711.1,startPosition:343},0).wait(1).to({scaleX:5.96,scaleY:5.96,x:1107.5,y:867.5,startPosition:344},0).wait(1).to({scaleX:7.07,scaleY:7.07,x:1279.7,y:1023.9,startPosition:345},0).wait(1).to({startPosition:346},0).wait(1).to({startPosition:347},0).wait(1).to({startPosition:348},0).wait(1).to({startPosition:349},0).wait(1).to({startPosition:350},0).wait(1).to({startPosition:351},0).wait(1).to({startPosition:352},0).wait(1).to({startPosition:353},0).wait(1).to({startPosition:354},0).wait(1).to({startPosition:355},0).wait(1).to({startPosition:356},0).wait(1).to({startPosition:357},0).wait(1).to({startPosition:358},0).wait(1).to({startPosition:359},0).wait(1).to({startPosition:360},0).wait(1).to({startPosition:361},0).wait(1).to({startPosition:362},0).wait(1).to({startPosition:363},0).wait(1).to({startPosition:364},0).wait(1).to({startPosition:365},0).wait(1).to({startPosition:366},0).wait(1).to({startPosition:367},0).wait(1).to({startPosition:368},0).wait(1).to({startPosition:369},0).wait(1).to({startPosition:370},0).wait(1).to({startPosition:371},0).wait(1).to({startPosition:372},0).wait(1).to({startPosition:373},0).wait(1).to({startPosition:374},0).wait(1).to({startPosition:375},0).wait(1).to({startPosition:376},0).wait(1).to({startPosition:377},0).wait(1).to({startPosition:378},0).wait(1).to({startPosition:379},0).wait(1).to({startPosition:380},0).wait(1).to({startPosition:381},0).wait(1).to({startPosition:382},0).wait(1).to({startPosition:383},0).wait(1).to({startPosition:384},0).wait(1).to({startPosition:385},0).wait(1).to({startPosition:386},0).wait(1).to({startPosition:387},0).wait(1).to({startPosition:388},0).wait(1).to({startPosition:389},0).wait(1).to({startPosition:390},0).wait(1).to({startPosition:391},0).wait(1).to({startPosition:392},0).wait(1).to({startPosition:393},0).wait(1).to({startPosition:394},0).wait(1).to({startPosition:395},0).wait(1).to({startPosition:396},0).wait(1).to({startPosition:397},0).wait(1).to({startPosition:398},0).wait(1).to({startPosition:399},0).wait(1).to({startPosition:400},0).wait(1).to({startPosition:401},0).wait(1).to({startPosition:402},0).wait(1).to({startPosition:403},0).wait(1).to({startPosition:404},0).wait(1).to({startPosition:405},0).wait(1).to({startPosition:406},0).wait(1).to({startPosition:407},0).wait(1).to({startPosition:408},0).wait(1).to({startPosition:409},0).wait(1).to({startPosition:410},0).wait(1).to({startPosition:411},0).wait(1).to({startPosition:412},0).wait(1).to({startPosition:413},0).wait(1).to({startPosition:414},0).wait(1).to({startPosition:415},0).wait(1).to({startPosition:416},0).wait(1).to({startPosition:417},0).wait(1).to({startPosition:418},0).wait(1).to({startPosition:419},0).wait(1).to({scaleX:5.96,scaleY:5.96,x:1107.5,y:867.5,startPosition:420},0).wait(1).to({scaleX:4.86,scaleY:4.86,x:935.4,y:711.1,startPosition:421},0).wait(1).to({scaleX:3.76,scaleY:3.76,x:763.2,y:554.6,startPosition:422},0).wait(1).to({scaleX:2.65,scaleY:2.65,x:591.1,y:398.2,startPosition:423},0).wait(1).to({scaleX:1.55,scaleY:1.55,x:418.9,y:241.7,startPosition:424},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:246.7,y:85.3,startPosition:425},0).wait(1).to({startPosition:426},0).wait(1).to({startPosition:427},0).wait(1).to({startPosition:428},0).wait(1).to({startPosition:429},0).wait(1).to({startPosition:430},0).wait(1).to({startPosition:431},0).wait(1).to({startPosition:432},0).wait(1).to({startPosition:433},0).wait(1).to({startPosition:434},0).wait(1).to({startPosition:435},0).wait(1).to({startPosition:436},0).wait(1).to({startPosition:437},0).wait(1).to({startPosition:438},0).wait(1).to({startPosition:439},0).wait(1).to({startPosition:440},0).wait(1).to({startPosition:441},0).wait(1).to({startPosition:442},0).wait(1).to({startPosition:443},0).wait(1).to({startPosition:444},0).wait(1).to({startPosition:445},0).wait(1).to({startPosition:446},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).to({_off:true},1).wait(420));

	// Text3
	this.Text3_Container = new lib.Text3();
	this.Text3_Container.parent = this;
	this.Text3_Container.setTransform(100.5,71.2,0.444,0.444,0,0,0,150.1,72.5);
	this.Text3_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Text3_Container).wait(1).to({regX:255.4,regY:76.7,x:147.2,y:73},0).wait(228).to({regX:150.1,regY:72.4,x:143.3,y:40.3},0).wait(1).to({regX:255.4,regY:76.7,x:190.1,y:42.2,alpha:0.333},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:1},0).wait(1).to({regX:150.1,regY:72.5,x:143.3,y:40.2},0).wait(77).to({regY:72.4,y:40.3},0).wait(1).to({regX:255.4,regY:76.7,x:190.1,y:42.2,alpha:0.5},0).wait(1).to({alpha:0},0).wait(1).to({regX:150.1,regY:72.5,x:100.5,y:71.2},0).to({_off:true},1).wait(586));

	// Scene2_Top
	this.instance_8 = new lib.Scene2_Top("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-9.9,54.6,0.444,0.444,0,0,0,-21.9,124.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24).to({_off:false},0).wait(1).to({regX:118.9,regY:-61.3,x:53.3,y:-28.2,startPosition:1},0).wait(1).to({x:53.9,y:-28.5,startPosition:2},0).wait(1).to({x:54.5,y:-28.9,startPosition:3},0).wait(1).to({x:55.1,y:-29.3,startPosition:4},0).wait(1).to({x:55.6,y:-29.6,startPosition:5},0).wait(1).to({x:56.2,y:-30,startPosition:6},0).wait(1).to({x:56.8,y:-30.4,startPosition:7},0).wait(1).to({x:57.4,y:-30.7,startPosition:8},0).wait(1).to({x:58,y:-31.1,startPosition:9},0).wait(1).to({x:58.6,y:-31.5,startPosition:10},0).wait(1).to({x:59.2,y:-31.8,startPosition:11},0).wait(1).to({x:59.8,y:-32.2,startPosition:12},0).wait(1).to({x:60.3,y:-32.6,startPosition:13},0).wait(1).to({x:60.9,y:-32.9,startPosition:14},0).wait(1).to({x:61.5,y:-33.3,startPosition:15},0).wait(1).to({x:62.1,y:-33.7,startPosition:16},0).wait(1).to({x:62.7,y:-34,startPosition:17},0).wait(1).to({x:63.3,y:-34.4,startPosition:18},0).wait(1).to({x:63.9,y:-34.8,startPosition:19},0).wait(1).to({x:64.5,y:-35.1,startPosition:20},0).wait(1).to({x:65,y:-35.5,startPosition:21},0).wait(1).to({x:65.6,y:-35.9,startPosition:22},0).wait(1).to({x:66.2,y:-36.2,startPosition:23},0).wait(1).to({x:66.8,y:-36.6,startPosition:24},0).wait(1).to({x:67.4,y:-37,startPosition:25},0).wait(1).to({x:68,y:-37.3,startPosition:26},0).wait(1).to({x:68.6,y:-37.7,startPosition:27},0).wait(1).to({x:69.2,y:-38.1,startPosition:28},0).wait(1).to({x:69.7,y:-38.4,startPosition:29},0).wait(1).to({x:70.3,y:-38.8,startPosition:30},0).wait(1).to({x:70.9,y:-39.2,startPosition:31},0).wait(1).to({x:71.5,y:-39.5,startPosition:32},0).wait(1).to({x:72.1,y:-39.9,startPosition:33},0).wait(1).to({x:72.7,y:-40.2,startPosition:34},0).wait(1).to({x:73.3,y:-40.6,startPosition:35},0).wait(1).to({x:73.9,y:-41,startPosition:36},0).wait(1).to({x:74.4,y:-41.3,startPosition:37},0).wait(1).to({x:75,y:-41.7,startPosition:38},0).wait(1).to({x:75.6,y:-42.1,startPosition:39},0).wait(1).to({x:76.2,y:-42.4,startPosition:40},0).wait(1).to({x:76.8,y:-42.8,startPosition:41},0).wait(1).to({x:77.4,y:-43.2,startPosition:42},0).wait(1).to({x:78,y:-43.5,startPosition:43},0).wait(1).to({x:78.6,y:-43.9,startPosition:44},0).wait(1).to({x:79.1,y:-44.3,startPosition:45},0).wait(1).to({x:79.7,y:-44.6,startPosition:46},0).wait(1).to({x:80.3,y:-45,startPosition:47},0).wait(1).to({x:80.9,y:-45.4,startPosition:48},0).wait(1).to({x:81.5,y:-45.7,startPosition:49},0).wait(1).to({x:82.1,y:-46.1,startPosition:50},0).wait(1).to({x:82.7,y:-46.5,startPosition:51},0).wait(1).to({x:83.3,y:-46.8,startPosition:52},0).wait(1).to({x:83.8,y:-47.2,startPosition:53},0).wait(1).to({x:84.4,y:-47.6,startPosition:54},0).wait(1).to({x:85,y:-47.9,startPosition:55},0).wait(1).to({x:85.6,y:-48.3,startPosition:56},0).wait(1).to({x:86.2,y:-48.7,startPosition:57},0).wait(1).to({x:86.8,y:-49,startPosition:58},0).wait(1).to({x:87.4,y:-49.4,startPosition:59},0).wait(1).to({x:88,y:-49.8,startPosition:60},0).wait(1).to({x:88.6,y:-50.1,startPosition:61},0).wait(1).to({x:89.1,y:-50.5,startPosition:62},0).wait(1).to({x:89.7,y:-50.9,startPosition:63},0).wait(1).to({x:90.3,y:-51.2,startPosition:64},0).wait(1).to({x:90.9,y:-51.6,startPosition:65},0).wait(1).to({x:91.5,y:-52,startPosition:66},0).wait(1).to({x:92.1,y:-52.3,startPosition:67},0).wait(1).to({x:92.7,y:-52.7,startPosition:68},0).wait(1).to({x:93.3,y:-53.1,startPosition:69},0).wait(1).to({x:93.8,y:-53.4,startPosition:70},0).wait(1).to({x:94.4,y:-53.8,startPosition:71},0).wait(1).to({x:95,y:-54.2,startPosition:72},0).wait(1).to({x:95.6,y:-54.5,startPosition:73},0).wait(1).to({x:96.2,y:-54.9,startPosition:74},0).wait(1).to({x:96.8,y:-55.3,startPosition:75},0).wait(1).to({x:97.4,y:-55.6,startPosition:76},0).wait(1).to({x:98,y:-56,startPosition:77},0).wait(1).to({x:98.5,y:-56.4,startPosition:78},0).wait(1).to({x:99.1,y:-56.7,startPosition:79},0).wait(1).to({x:99.7,y:-57.1,startPosition:80},0).wait(1).to({x:100.3,y:-57.5,startPosition:81},0).wait(1).to({x:100.9,y:-57.8,startPosition:82},0).wait(1).to({x:101.5,y:-58.2,startPosition:83},0).wait(1).to({x:102.1,y:-58.6,startPosition:84},0).wait(1).to({x:102.7,y:-58.9,startPosition:85},0).wait(1).to({x:103.2,y:-59.3,startPosition:86},0).wait(1).to({x:103.8,y:-59.7,startPosition:87},0).wait(1).to({x:104.4,y:-60,startPosition:88},0).wait(1).to({x:105,y:-60.4,startPosition:89},0).wait(1).to({x:105.6,y:-60.8,startPosition:90},0).wait(1).to({x:106.2,y:-61.1,startPosition:91},0).wait(1).to({x:106.8,y:-61.5,startPosition:92},0).wait(1).to({x:107.4,y:-61.9,startPosition:93},0).wait(1).to({x:107.9,y:-62.2,startPosition:94},0).wait(1).to({x:108.5,y:-62.6,startPosition:95},0).wait(1).to({x:109.1,y:-63,startPosition:96},0).wait(1).to({x:109.7,y:-63.3,startPosition:97},0).wait(1).to({x:110.3,y:-63.7,startPosition:98},0).wait(1).to({x:110.9,y:-64.1,startPosition:99},0).wait(1).to({x:111.5,y:-64.4,startPosition:100},0).wait(1).to({x:112.1,y:-64.8,startPosition:101},0).wait(1).to({x:112.6,y:-65.1,startPosition:102},0).wait(1).to({x:113.2,y:-65.5,startPosition:103},0).wait(1).to({x:113.8,y:-65.9,startPosition:104},0).wait(1).to({x:114.4,y:-66.2,startPosition:105},0).wait(1).to({x:115,y:-66.6,startPosition:106},0).wait(1).to({x:115.6,y:-67,startPosition:107},0).wait(1).to({x:116.2,y:-67.3,startPosition:108},0).wait(1).to({x:116.8,y:-67.7,startPosition:109},0).wait(1).to({x:117.3,y:-68.1,startPosition:110},0).wait(1).to({x:117.9,y:-68.4,startPosition:111},0).wait(1).to({x:118.5,y:-68.8,startPosition:112},0).wait(1).to({x:119.1,y:-69.2,startPosition:113},0).wait(1).to({x:119.7,y:-69.5,startPosition:114},0).wait(1).to({x:120.3,y:-69.9,startPosition:115},0).wait(1).to({x:120.9,y:-70.3,startPosition:116},0).wait(1).to({x:121.5,y:-70.6,startPosition:117},0).wait(1).to({x:122.1,y:-71,startPosition:118},0).wait(1).to({x:122.6,y:-71.4,startPosition:119},0).wait(1).to({x:123.2,y:-71.7,startPosition:120},0).wait(1).to({x:123.8,y:-72.1,startPosition:121},0).wait(1).to({x:124.4,y:-72.5,startPosition:122},0).wait(1).to({x:125,y:-72.8,startPosition:123},0).wait(1).to({x:125.6,y:-73.2,startPosition:124},0).wait(1).to({x:126.2,y:-73.6,startPosition:125},0).wait(1).to({x:126.8,y:-73.9,startPosition:126},0).wait(1).to({x:127.3,y:-74.3,startPosition:127},0).wait(1).to({x:127.9,y:-74.7,startPosition:128},0).wait(1).to({x:128.5,y:-75,startPosition:129},0).wait(1).to({x:129.1,y:-75.4,startPosition:130},0).wait(1).to({x:129.7,y:-75.8,startPosition:131},0).wait(1).to({x:130.3,y:-76.1,startPosition:132},0).wait(1).to({x:130.9,y:-76.5,startPosition:133},0).wait(1).to({x:131.5,y:-76.9,startPosition:134},0).wait(1).to({x:132,y:-77.2,startPosition:135},0).wait(1).to({x:132.6,y:-77.6,startPosition:136},0).wait(1).to({x:133.2,y:-78,startPosition:137},0).wait(1).to({x:133.8,y:-78.3,startPosition:138},0).wait(1).to({x:134.4,y:-78.7,startPosition:139},0).wait(1).to({x:135,y:-79.1,startPosition:140},0).wait(1).to({x:135.6,y:-79.4,startPosition:141},0).wait(1).to({x:136.2,y:-79.8,startPosition:142},0).wait(1).to({x:136.7,y:-80.2,startPosition:143},0).wait(1).to({x:137.3,y:-80.5,startPosition:144},0).wait(1).to({x:137.9,y:-80.9,startPosition:145},0).wait(1).to({x:138.5,y:-81.3,startPosition:146},0).wait(1).to({x:139.1,y:-81.6,startPosition:147},0).wait(1).to({x:139.7,y:-82,startPosition:148},0).wait(1).to({x:140.3,y:-82.4,startPosition:149},0).wait(1).to({x:140.9,y:-82.7,startPosition:150},0).wait(1).to({x:141.4,y:-83.1,startPosition:151},0).wait(1).to({x:142,y:-83.5,startPosition:152},0).wait(1).to({x:142.6,y:-83.8,startPosition:153},0).wait(1).to({x:143.2,y:-84.2,startPosition:154},0).wait(1).to({x:143.8,y:-84.6,startPosition:155},0).wait(1).to({x:144.4,y:-84.9,startPosition:156},0).wait(1).to({x:145,y:-85.3,startPosition:157},0).wait(1).to({x:145.6,y:-85.7,startPosition:158},0).wait(1).to({x:146.1,y:-86,startPosition:159},0).wait(1).to({x:146.7,y:-86.4,startPosition:160},0).wait(1).to({x:147.3,y:-86.8,startPosition:161},0).wait(1).to({x:147.9,y:-87.1,startPosition:162},0).wait(1).to({x:148.5,y:-87.5,startPosition:163},0).wait(1).to({x:149.1,y:-87.9,startPosition:164},0).wait(1).to({x:149.7,y:-88.2,startPosition:165},0).wait(1).to({x:150.3,y:-88.6,startPosition:166},0).wait(1).to({x:150.9,y:-89,startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:-1.3,y:-361.3,startPosition:200},0).wait(1).to({scaleX:2.76,scaleY:2.76,x:-153.5,y:-633.6,startPosition:201},0).wait(1).to({scaleX:3.92,scaleY:3.92,x:-305.7,y:-906,startPosition:202},0).wait(1).to({scaleX:5.07,scaleY:5.07,x:-457.9,y:-1178.3,startPosition:203},0).wait(1).to({scaleX:6.23,scaleY:6.23,x:-610.1,y:-1450.6,startPosition:204},0).wait(1).to({scaleX:7.39,scaleY:7.39,x:-762.4,y:-1723,startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({scaleX:6.23,scaleY:6.23,x:-610.1,y:-1450.6,startPosition:289},0).wait(1).to({scaleX:5.07,scaleY:5.07,x:-457.9,y:-1178.3,startPosition:290},0).wait(1).to({scaleX:3.92,scaleY:3.92,x:-305.7,y:-906,startPosition:291},0).wait(1).to({scaleX:2.76,scaleY:2.76,x:-153.5,y:-633.6,startPosition:292},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:-1.3,y:-361.3,startPosition:293},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:150.9,y:-89,startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(569));

	// BG_grad
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],0,-20,0,20).s().p("A5RDIIAAmPMAyjAAAIAAGPg");
	this.shape_2.setTransform(160,25,0.989,1.25);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(187).to({_off:false},0).to({_off:true},144).wait(569));

	// Scene2_Bottom
	this.instance_9 = new lib.Scene2_Bottom("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(110,-51.3,0.444,0.444,0,0,0,247.4,-113.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24).to({_off:false},0).wait(1).to({regY:-113.9,x:110.5,y:-51.6,startPosition:1},0).wait(1).to({x:111.1,y:-52,startPosition:2},0).wait(1).to({x:111.7,y:-52.3,startPosition:3},0).wait(1).to({x:112.3,y:-52.7,startPosition:4},0).wait(1).to({x:112.9,y:-53.1,startPosition:5},0).wait(1).to({x:113.5,y:-53.4,startPosition:6},0).wait(1).to({x:114.1,y:-53.8,startPosition:7},0).wait(1).to({x:114.7,y:-54.2,startPosition:8},0).wait(1).to({x:115.2,y:-54.5,startPosition:9},0).wait(1).to({x:115.8,y:-54.9,startPosition:10},0).wait(1).to({x:116.4,y:-55.3,startPosition:11},0).wait(1).to({x:117,y:-55.6,startPosition:12},0).wait(1).to({x:117.6,y:-56,startPosition:13},0).wait(1).to({x:118.2,y:-56.4,startPosition:14},0).wait(1).to({x:118.8,y:-56.7,startPosition:15},0).wait(1).to({x:119.4,y:-57.1,startPosition:16},0).wait(1).to({x:119.9,y:-57.5,startPosition:17},0).wait(1).to({x:120.5,y:-57.8,startPosition:18},0).wait(1).to({x:121.1,y:-58.2,startPosition:19},0).wait(1).to({x:121.7,y:-58.6,startPosition:20},0).wait(1).to({x:122.3,y:-58.9,startPosition:21},0).wait(1).to({x:122.9,y:-59.3,startPosition:22},0).wait(1).to({x:123.5,y:-59.7,startPosition:23},0).wait(1).to({x:124.1,y:-60,startPosition:24},0).wait(1).to({x:124.6,y:-60.4,startPosition:25},0).wait(1).to({x:125.2,y:-60.8,startPosition:26},0).wait(1).to({x:125.8,y:-61.1,startPosition:27},0).wait(1).to({x:126.4,y:-61.5,startPosition:28},0).wait(1).to({x:127,y:-61.9,startPosition:29},0).wait(1).to({x:127.6,y:-62.2,startPosition:30},0).wait(1).to({x:128.2,y:-62.6,startPosition:31},0).wait(1).to({x:128.8,y:-63,startPosition:32},0).wait(1).to({x:129.3,y:-63.3,startPosition:33},0).wait(1).to({x:129.9,y:-63.7,startPosition:34},0).wait(1).to({x:130.5,y:-64.1,startPosition:35},0).wait(1).to({x:131.1,y:-64.4,startPosition:36},0).wait(1).to({x:131.7,y:-64.8,startPosition:37},0).wait(1).to({x:132.3,y:-65.2,startPosition:38},0).wait(1).to({x:132.9,y:-65.5,startPosition:39},0).wait(1).to({x:133.5,y:-65.9,startPosition:40},0).wait(1).to({x:134,y:-66.3,startPosition:41},0).wait(1).to({x:134.6,y:-66.6,startPosition:42},0).wait(1).to({x:135.2,y:-67,startPosition:43},0).wait(1).to({x:135.8,y:-67.4,startPosition:44},0).wait(1).to({x:136.4,y:-67.7,startPosition:45},0).wait(1).to({x:137,y:-68.1,startPosition:46},0).wait(1).to({x:137.6,y:-68.5,startPosition:47},0).wait(1).to({x:138.2,y:-68.8,startPosition:48},0).wait(1).to({x:138.7,y:-69.2,startPosition:49},0).wait(1).to({x:139.3,y:-69.6,startPosition:50},0).wait(1).to({x:139.9,y:-69.9,startPosition:51},0).wait(1).to({x:140.5,y:-70.3,startPosition:52},0).wait(1).to({x:141.1,y:-70.7,startPosition:53},0).wait(1).to({x:141.7,y:-71,startPosition:54},0).wait(1).to({x:142.3,y:-71.4,startPosition:55},0).wait(1).to({x:142.9,y:-71.8,startPosition:56},0).wait(1).to({x:143.5,y:-72.1,startPosition:57},0).wait(1).to({x:144,y:-72.5,startPosition:58},0).wait(1).to({x:144.6,y:-72.9,startPosition:59},0).wait(1).to({x:145.2,y:-73.2,startPosition:60},0).wait(1).to({x:145.8,y:-73.6,startPosition:61},0).wait(1).to({x:146.4,y:-74,startPosition:62},0).wait(1).to({x:147,y:-74.3,startPosition:63},0).wait(1).to({x:147.6,y:-74.7,startPosition:64},0).wait(1).to({x:148.2,y:-75.1,startPosition:65},0).wait(1).to({x:148.7,y:-75.4,startPosition:66},0).wait(1).to({x:149.3,y:-75.8,startPosition:67},0).wait(1).to({x:149.9,y:-76.1,startPosition:68},0).wait(1).to({x:150.5,y:-76.5,startPosition:69},0).wait(1).to({x:151.1,y:-76.9,startPosition:70},0).wait(1).to({x:151.7,y:-77.2,startPosition:71},0).wait(1).to({x:152.3,y:-77.6,startPosition:72},0).wait(1).to({x:152.9,y:-78,startPosition:73},0).wait(1).to({x:153.4,y:-78.3,startPosition:74},0).wait(1).to({x:154,y:-78.7,startPosition:75},0).wait(1).to({x:154.6,y:-79.1,startPosition:76},0).wait(1).to({x:155.2,y:-79.4,startPosition:77},0).wait(1).to({x:155.8,y:-79.8,startPosition:78},0).wait(1).to({x:156.4,y:-80.2,startPosition:79},0).wait(1).to({x:157,y:-80.5,startPosition:80},0).wait(1).to({x:157.6,y:-80.9,startPosition:81},0).wait(1).to({x:158.1,y:-81.3,startPosition:82},0).wait(1).to({x:158.7,y:-81.6,startPosition:83},0).wait(1).to({x:159.3,y:-82,startPosition:84},0).wait(1).to({x:159.9,y:-82.4,startPosition:85},0).wait(1).to({x:160.5,y:-82.7,startPosition:86},0).wait(1).to({x:161.1,y:-83.1,startPosition:87},0).wait(1).to({x:161.7,y:-83.5,startPosition:88},0).wait(1).to({x:162.3,y:-83.8,startPosition:89},0).wait(1).to({x:162.8,y:-84.2,startPosition:90},0).wait(1).to({x:163.4,y:-84.6,startPosition:91},0).wait(1).to({x:164,y:-84.9,startPosition:92},0).wait(1).to({x:164.6,y:-85.3,startPosition:93},0).wait(1).to({x:165.2,y:-85.7,startPosition:94},0).wait(1).to({x:165.8,y:-86,startPosition:95},0).wait(1).to({x:166.4,y:-86.4,startPosition:96},0).wait(1).to({x:167,y:-86.8,startPosition:97},0).wait(1).to({x:167.5,y:-87.1,startPosition:98},0).wait(1).to({x:168.1,y:-87.5,startPosition:99},0).wait(1).to({x:168.7,y:-87.9,startPosition:100},0).wait(1).to({x:169.3,y:-88.2,startPosition:101},0).wait(1).to({x:169.9,y:-88.6,startPosition:102},0).wait(1).to({x:170.5,y:-89,startPosition:103},0).wait(1).to({x:171.1,y:-89.3,startPosition:104},0).wait(1).to({x:171.7,y:-89.7,startPosition:105},0).wait(1).to({x:172.2,y:-90.1,startPosition:106},0).wait(1).to({x:172.8,y:-90.4,startPosition:107},0).wait(1).to({x:173.4,y:-90.8,startPosition:108},0).wait(1).to({x:174,y:-91.2,startPosition:109},0).wait(1).to({x:174.6,y:-91.5,startPosition:110},0).wait(1).to({x:175.2,y:-91.9,startPosition:111},0).wait(1).to({x:175.8,y:-92.3,startPosition:112},0).wait(1).to({x:176.4,y:-92.6,startPosition:113},0).wait(1).to({x:177,y:-93,startPosition:114},0).wait(1).to({x:177.5,y:-93.4,startPosition:115},0).wait(1).to({x:178.1,y:-93.7,startPosition:116},0).wait(1).to({x:178.7,y:-94.1,startPosition:117},0).wait(1).to({x:179.3,y:-94.5,startPosition:118},0).wait(1).to({x:179.9,y:-94.8,startPosition:119},0).wait(1).to({x:180.5,y:-95.2,startPosition:120},0).wait(1).to({x:181.1,y:-95.6,startPosition:121},0).wait(1).to({x:181.7,y:-95.9,startPosition:122},0).wait(1).to({x:182.2,y:-96.3,startPosition:123},0).wait(1).to({x:182.8,y:-96.7,startPosition:124},0).wait(1).to({x:183.4,y:-97,startPosition:125},0).wait(1).to({x:184,y:-97.4,startPosition:126},0).wait(1).to({x:184.6,y:-97.8,startPosition:127},0).wait(1).to({x:185.2,y:-98.1,startPosition:128},0).wait(1).to({x:185.8,y:-98.5,startPosition:129},0).wait(1).to({x:186.4,y:-98.9,startPosition:130},0).wait(1).to({x:186.9,y:-99.2,startPosition:131},0).wait(1).to({x:187.5,y:-99.6,startPosition:132},0).wait(1).to({x:188.1,y:-99.9,startPosition:133},0).wait(1).to({x:188.7,y:-100.3,startPosition:134},0).wait(1).to({x:189.3,y:-100.7,startPosition:135},0).wait(1).to({x:189.9,y:-101,startPosition:136},0).wait(1).to({x:190.5,y:-101.4,startPosition:137},0).wait(1).to({x:191.1,y:-101.8,startPosition:138},0).wait(1).to({x:191.6,y:-102.1,startPosition:139},0).wait(1).to({x:192.2,y:-102.5,startPosition:140},0).wait(1).to({x:192.8,y:-102.9,startPosition:141},0).wait(1).to({x:193.4,y:-103.2,startPosition:142},0).wait(1).to({x:194,y:-103.6,startPosition:143},0).wait(1).to({x:194.6,y:-104,startPosition:144},0).wait(1).to({x:195.2,y:-104.3,startPosition:145},0).wait(1).to({x:195.8,y:-104.7,startPosition:146},0).wait(1).to({x:196.3,y:-105.1,startPosition:147},0).wait(1).to({x:196.9,y:-105.4,startPosition:148},0).wait(1).to({x:197.5,y:-105.8,startPosition:149},0).wait(1).to({x:198.1,y:-106.2,startPosition:150},0).wait(1).to({x:198.7,y:-106.5,startPosition:151},0).wait(1).to({x:199.3,y:-106.9,startPosition:152},0).wait(1).to({x:199.9,y:-107.3,startPosition:153},0).wait(1).to({x:200.5,y:-107.6,startPosition:154},0).wait(1).to({x:201,y:-108,startPosition:155},0).wait(1).to({x:201.6,y:-108.4,startPosition:156},0).wait(1).to({x:202.2,y:-108.7,startPosition:157},0).wait(1).to({x:202.8,y:-109.1,startPosition:158},0).wait(1).to({x:203.4,y:-109.5,startPosition:159},0).wait(1).to({x:204,y:-109.8,startPosition:160},0).wait(1).to({x:204.6,y:-110.2,startPosition:161},0).wait(1).to({x:205.2,y:-110.6,startPosition:162},0).wait(1).to({x:205.7,y:-110.9,startPosition:163},0).wait(1).to({x:206.3,y:-111.3,startPosition:164},0).wait(1).to({x:206.9,y:-111.7,startPosition:165},0).wait(1).to({x:207.5,y:-112,startPosition:166},0).wait(1).to({x:208.1,y:-112.4,startPosition:167},0).wait(1).to({startPosition:168},0).wait(1).to({startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).wait(1).to({startPosition:187},0).wait(1).to({startPosition:188},0).wait(1).to({startPosition:189},0).wait(1).to({startPosition:190},0).wait(1).to({startPosition:191},0).wait(1).to({startPosition:192},0).wait(1).to({startPosition:193},0).wait(1).to({startPosition:194},0).wait(1).to({startPosition:195},0).wait(1).to({startPosition:196},0).wait(1).to({startPosition:197},0).wait(1).to({startPosition:198},0).wait(1).to({startPosition:199},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:205,y:-445.9,startPosition:200},0).wait(1).to({scaleX:2.76,scaleY:2.76,x:201.9,y:-779.3,startPosition:201},0).wait(1).to({scaleX:3.92,scaleY:3.92,x:198.7,y:-1112.7,startPosition:202},0).wait(1).to({scaleX:5.07,scaleY:5.07,x:195.6,y:-1446.1,startPosition:203},0).wait(1).to({scaleX:6.23,scaleY:6.23,x:192.4,y:-1779.5,startPosition:204},0).wait(1).to({scaleX:7.39,scaleY:7.39,x:189.3,y:-2112.9,startPosition:205},0).wait(1).to({startPosition:206},0).wait(1).to({startPosition:207},0).wait(1).to({startPosition:208},0).wait(1).to({startPosition:209},0).wait(1).to({startPosition:210},0).wait(1).to({startPosition:211},0).wait(1).to({startPosition:212},0).wait(1).to({startPosition:213},0).wait(1).to({startPosition:214},0).wait(1).to({startPosition:215},0).wait(1).to({startPosition:216},0).wait(1).to({startPosition:217},0).wait(1).to({startPosition:218},0).wait(1).to({startPosition:219},0).wait(1).to({startPosition:220},0).wait(1).to({startPosition:221},0).wait(1).to({startPosition:222},0).wait(1).to({startPosition:223},0).wait(1).to({startPosition:224},0).wait(1).to({startPosition:225},0).wait(1).to({startPosition:226},0).wait(1).to({startPosition:227},0).wait(1).to({startPosition:228},0).wait(1).to({startPosition:229},0).wait(1).to({startPosition:230},0).wait(1).to({startPosition:231},0).wait(1).to({startPosition:232},0).wait(1).to({startPosition:233},0).wait(1).to({startPosition:234},0).wait(1).to({startPosition:235},0).wait(1).to({startPosition:236},0).wait(1).to({startPosition:237},0).wait(1).to({startPosition:238},0).wait(1).to({startPosition:239},0).wait(1).to({startPosition:240},0).wait(1).to({startPosition:241},0).wait(1).to({startPosition:242},0).wait(1).to({startPosition:243},0).wait(1).to({startPosition:244},0).wait(1).to({startPosition:245},0).wait(1).to({startPosition:246},0).wait(1).to({startPosition:247},0).wait(1).to({startPosition:248},0).wait(1).to({startPosition:249},0).wait(1).to({startPosition:250},0).wait(1).to({startPosition:251},0).wait(1).to({startPosition:252},0).wait(1).to({startPosition:253},0).wait(1).to({startPosition:254},0).wait(1).to({startPosition:255},0).wait(1).to({startPosition:256},0).wait(1).to({startPosition:257},0).wait(1).to({startPosition:258},0).wait(1).to({startPosition:259},0).wait(1).to({startPosition:260},0).wait(1).to({startPosition:261},0).wait(1).to({startPosition:262},0).wait(1).to({startPosition:263},0).wait(1).to({startPosition:264},0).wait(1).to({startPosition:265},0).wait(1).to({startPosition:266},0).wait(1).to({startPosition:267},0).wait(1).to({startPosition:268},0).wait(1).to({startPosition:269},0).wait(1).to({startPosition:270},0).wait(1).to({startPosition:271},0).wait(1).to({startPosition:272},0).wait(1).to({startPosition:273},0).wait(1).to({startPosition:274},0).wait(1).to({startPosition:275},0).wait(1).to({startPosition:276},0).wait(1).to({startPosition:277},0).wait(1).to({startPosition:278},0).wait(1).to({startPosition:279},0).wait(1).to({startPosition:280},0).wait(1).to({startPosition:281},0).wait(1).to({startPosition:282},0).wait(1).to({startPosition:283},0).wait(1).to({startPosition:284},0).wait(1).to({startPosition:285},0).wait(1).to({startPosition:286},0).wait(1).to({startPosition:287},0).wait(1).to({startPosition:288},0).wait(1).to({scaleX:6.23,scaleY:6.23,x:192.4,y:-1779.5,startPosition:289},0).wait(1).to({scaleX:5.07,scaleY:5.07,x:195.6,y:-1446.1,startPosition:290},0).wait(1).to({scaleX:3.92,scaleY:3.92,x:198.7,y:-1112.7,startPosition:291},0).wait(1).to({scaleX:2.76,scaleY:2.76,x:201.9,y:-779.3,startPosition:292},0).wait(1).to({scaleX:1.6,scaleY:1.6,x:205,y:-445.9,startPosition:293},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:208.1,y:-112.4,startPosition:294},0).wait(1).to({startPosition:295},0).wait(1).to({startPosition:296},0).wait(1).to({startPosition:297},0).wait(1).to({startPosition:298},0).wait(1).to({startPosition:299},0).wait(1).to({startPosition:300},0).wait(1).to({startPosition:301},0).wait(1).to({startPosition:302},0).wait(1).to({startPosition:303},0).wait(1).to({startPosition:304},0).wait(1).to({startPosition:305},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(569));

	// Text2
	this.Text2_Container = new lib.Text2();
	this.Text2_Container.parent = this;
	this.Text2_Container.setTransform(75.6,65.3,0.444,0.444,0,0,0,150.1,72.5);
	this.Text2_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.Text2_Container).wait(1).to({regX:251.4,regY:78.7,x:120.6,y:68},0).wait(84).to({regX:150.1,regY:72.4,x:133.4,y:40.3},0).wait(1).to({regX:251.4,regY:78.7,x:178.4,y:43.1,alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(1).to({regX:150.1,regY:72.5,x:133.4,y:40.2},0).wait(71).to({regY:72.4,y:40.3},0).wait(1).to({regX:251.4,regY:78.7,x:178.4,y:43.1,alpha:0.5},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(736));

	// TextStart
	this.TextStart_Container = new lib.Textstart();
	this.TextStart_Container.parent = this;
	this.TextStart_Container.setTransform(122.2,22.9,0.444,0.444,0,0,0,150,29.1);
	this.TextStart_Container.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.TextStart_Container).wait(1).to({regX:158.2,regY:35.6,x:125.8,y:25.7,alpha:0.083},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.417},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.583},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.917},0).wait(1).to({alpha:1},0).wait(1).to({regX:150,regY:29.1,x:122.2,y:22.9},0).to({_off:true},73).wait(814));

	// Scene1_Top
	this.instance_10 = new lib.Scene1_Top("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(248.1,108.2,0.444,0.444,15,0,0,196,269.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:176.4,regY:280.4,rotation:15.1,x:238.4,y:110.5,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:336.6,y:311.7,startPosition:80},0).wait(1).to({scaleX:2.62,scaleY:2.62,x:434.8,y:512.9,startPosition:81},0).wait(1).to({scaleX:3.71,scaleY:3.71,x:533,y:714,startPosition:82},0).wait(1).to({scaleX:4.79,scaleY:4.79,x:631.2,y:915.2,startPosition:83},0).wait(1).to({scaleX:5.88,scaleY:5.88,x:729.4,y:1116.3,startPosition:84},0).wait(1).to({scaleX:6.97,scaleY:6.97,x:827.6,y:1317.5,startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({scaleX:5.88,scaleY:5.88,x:729.4,y:1116.3,startPosition:164},0).wait(1).to({scaleX:4.79,scaleY:4.79,x:631.2,y:915.2,startPosition:165},0).wait(1).to({scaleX:3.71,scaleY:3.71,x:533,y:714,startPosition:166},0).wait(1).to({scaleX:2.62,scaleY:2.62,x:434.8,y:512.9,startPosition:167},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:336.6,y:311.7,startPosition:168},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:238.4,y:110.5,startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).to({_off:true},1).wait(713));

	// BG_grad
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(0,96,112,0)","#006070"],[0,1],-0.1,-25,-0.1,24.9).s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape_3.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},187).wait(713));

	// Scene1_Bottom
	this.instance_11 = new lib.Scene1_Bottom("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(315.6,160.9,0.444,0.444,15,0,0,374.2,344.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:377.5,regY:354.9,rotation:15.1,x:315.7,y:165.8,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:17},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:20},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:30},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:32},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:36},0).wait(1).to({startPosition:37},0).wait(1).to({startPosition:38},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:40},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:42},0).wait(1).to({startPosition:43},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:45},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:47},0).wait(1).to({startPosition:48},0).wait(1).to({startPosition:49},0).wait(1).to({startPosition:50},0).wait(1).to({startPosition:51},0).wait(1).to({startPosition:52},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:55},0).wait(1).to({startPosition:56},0).wait(1).to({startPosition:57},0).wait(1).to({startPosition:58},0).wait(1).to({startPosition:59},0).wait(1).to({startPosition:60},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:62},0).wait(1).to({startPosition:63},0).wait(1).to({startPosition:64},0).wait(1).to({startPosition:65},0).wait(1).to({y:165.9,startPosition:66},0).wait(1).to({startPosition:67},0).wait(1).to({startPosition:68},0).wait(1).to({startPosition:69},0).wait(1).to({startPosition:70},0).wait(1).to({startPosition:71},0).wait(1).to({startPosition:72},0).wait(1).to({startPosition:73},0).wait(1).to({startPosition:74},0).wait(1).to({startPosition:75},0).wait(1).to({startPosition:76},0).wait(1).to({startPosition:77},0).wait(1).to({startPosition:78},0).wait(1).to({startPosition:79},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:601.9,y:502.7,startPosition:80},0).wait(1).to({scaleX:2.62,scaleY:2.62,x:887.9,y:839.5,startPosition:81},0).wait(1).to({scaleX:3.71,scaleY:3.71,x:1174,y:1176.4,startPosition:82},0).wait(1).to({scaleX:4.79,scaleY:4.79,x:1460.1,y:1513.2,startPosition:83},0).wait(1).to({scaleX:5.88,scaleY:5.88,x:1746.3,y:1850,startPosition:84},0).wait(1).to({scaleX:6.97,scaleY:6.97,x:2032.4,y:2186.9,startPosition:85},0).wait(1).to({startPosition:86},0).wait(1).to({startPosition:87},0).wait(1).to({startPosition:88},0).wait(1).to({startPosition:89},0).wait(1).to({startPosition:90},0).wait(1).to({startPosition:91},0).wait(1).to({startPosition:92},0).wait(1).to({startPosition:93},0).wait(1).to({startPosition:94},0).wait(1).to({startPosition:95},0).wait(1).to({startPosition:96},0).wait(1).to({startPosition:97},0).wait(1).to({startPosition:98},0).wait(1).to({startPosition:99},0).wait(1).to({startPosition:100},0).wait(1).to({startPosition:101},0).wait(1).to({startPosition:102},0).wait(1).to({startPosition:103},0).wait(1).to({startPosition:104},0).wait(1).to({startPosition:105},0).wait(1).to({startPosition:106},0).wait(1).to({startPosition:107},0).wait(1).to({startPosition:108},0).wait(1).to({startPosition:109},0).wait(1).to({startPosition:110},0).wait(1).to({startPosition:111},0).wait(1).to({startPosition:112},0).wait(1).to({startPosition:113},0).wait(1).to({startPosition:114},0).wait(1).to({startPosition:115},0).wait(1).to({startPosition:116},0).wait(1).to({startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({startPosition:119},0).wait(1).to({startPosition:120},0).wait(1).to({startPosition:121},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:123},0).wait(1).to({startPosition:124},0).wait(1).to({startPosition:125},0).wait(1).to({startPosition:126},0).wait(1).to({startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({startPosition:129},0).wait(1).to({startPosition:130},0).wait(1).to({startPosition:131},0).wait(1).to({startPosition:132},0).wait(1).to({startPosition:133},0).wait(1).to({startPosition:134},0).wait(1).to({startPosition:135},0).wait(1).to({startPosition:136},0).wait(1).to({startPosition:137},0).wait(1).to({startPosition:138},0).wait(1).to({startPosition:139},0).wait(1).to({startPosition:140},0).wait(1).to({startPosition:141},0).wait(1).to({startPosition:142},0).wait(1).to({startPosition:143},0).wait(1).to({startPosition:144},0).wait(1).to({startPosition:145},0).wait(1).to({startPosition:146},0).wait(1).to({startPosition:147},0).wait(1).to({startPosition:148},0).wait(1).to({startPosition:149},0).wait(1).to({startPosition:150},0).wait(1).to({startPosition:151},0).wait(1).to({startPosition:152},0).wait(1).to({startPosition:153},0).wait(1).to({startPosition:154},0).wait(1).to({startPosition:155},0).wait(1).to({startPosition:156},0).wait(1).to({startPosition:157},0).wait(1).to({startPosition:158},0).wait(1).to({startPosition:159},0).wait(1).to({startPosition:160},0).wait(1).to({startPosition:161},0).wait(1).to({startPosition:162},0).wait(1).to({startPosition:163},0).wait(1).to({scaleX:5.88,scaleY:5.88,x:1746.3,y:1850,startPosition:164},0).wait(1).to({scaleX:4.79,scaleY:4.79,x:1460.1,y:1513.2,startPosition:165},0).wait(1).to({scaleX:3.71,scaleY:3.71,x:1174,y:1176.4,startPosition:166},0).wait(1).to({scaleX:2.62,scaleY:2.62,x:887.9,y:839.5,startPosition:167},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:601.9,y:502.7,startPosition:168},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:315.7,y:165.9,startPosition:169},0).wait(1).to({startPosition:170},0).wait(1).to({startPosition:171},0).wait(1).to({startPosition:172},0).wait(1).to({startPosition:173},0).wait(1).to({startPosition:174},0).wait(1).to({startPosition:175},0).wait(1).to({startPosition:176},0).wait(1).to({startPosition:177},0).wait(1).to({startPosition:178},0).wait(1).to({startPosition:179},0).wait(1).to({startPosition:180},0).wait(1).to({startPosition:181},0).wait(1).to({startPosition:182},0).wait(1).to({startPosition:183},0).wait(1).to({startPosition:184},0).wait(1).to({startPosition:185},0).wait(1).to({startPosition:186},0).to({_off:true},1).wait(713));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,25,657,315.5);
// library properties:
lib.properties = {
	width: 320,
	height: 50,
	fps: 30,
	color: "#2C94A7",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;