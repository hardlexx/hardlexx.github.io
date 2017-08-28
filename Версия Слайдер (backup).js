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



(lib.kububanner240raskadr = function() {
	this.initialize(img.kububanner240raskadr);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1071,468);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-153.2,-281.3)).s().p("Ay+ZjMAAEgtkQVCDKQsosMAALAzGg");
	this.shape.setTransform(121.5,163.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,243,327.1);


// stage content:
(lib.ВерсияСлайдерbackup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Када 1
	this.instance = new lib.Символ1();
	this.instance.parent = this;
	this.instance.setTransform(120.8,241.8,1,1,0,0,0,121.5,163.6);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({y:269.6},0).wait(1).to({y:297.5},0).wait(1).to({y:325.4},0).wait(1).to({y:353.3},0).wait(1).to({y:381.2},0).wait(1).to({y:409.1},0).wait(1).to({y:437},0).wait(1).to({y:464.9},0).wait(1).to({y:492.7},0).wait(1).to({y:520.6},0).wait(1).to({y:548.5},0).wait(1).to({y:576.4},0).to({_off:true},1).wait(180));

	// Кадр 2
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-422.1,-245.2)).s().p("EgTiAiiMAAAhFDMAnFAAAMAAABFDg");
	this.shape.setTransform(120.3,209.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-484.5,-295.9)).s().p("ApzanMAAAg1JIAAgEIRzAAIB0AAMAAAA1Ng");
	this.shape_1.setTransform(194.1,259.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-359.4,-295.9)).s().p("ApvanMAAAg1NIBzAAIRsAAIAAAEMAAAA1Jg");
	this.shape_2.setTransform(46,259.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-422.1,-74.9)).s().p("Ah2H7IAAgEIxsAAIAAvxMAnFAAAIAAPxIx0AAIAAAEg");
	this.shape_3.setTransform(120.3,39.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-359.4,-295.9)).s().p("ApuanMAAAg1NITdAAMAAAA1Ng");
	this.shape_4.setTransform(23,261.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-484.5,-295.9)).s().p("ApzanMAAAg1NITmAAMAAAA1Ng");
	this.shape_5.setTransform(217.1,261.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-422.1,-74.9)).s().p("AziH7IAAv1MAnFAAAIAAP1g");
	this.shape_6.setTransform(120.3,39.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-359.4,-295.9)).s().p("ApvanMAAAg1NITfAAMAAAA1Ng");
	this.shape_7.setTransform(11.5,261.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-484.5,-295.9)).s().p("ApyanMAAAg1NITlAAMAAAA1Ng");
	this.shape_8.setTransform(228.6,261.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-484.5,-295.9)).s().p("ApyanMAAAg1NITmAAMAAAA1Ng");
	this.shape_9.setTransform(240.1,261.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-484.5,-295.9)).s().p("ApzanMAAAg1NITnAAMAAAA1Ng");
	this.shape_10.setTransform(257.4,261.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFDFF").s().p("AjTB3QhhgCgxgFIhFgIQgogFgdABQgUAAg4AHQgvAFgdgBQgpgCgggSQglgUgNgiQgNgiAPgjQAQglAhgQQAWgLAjgEIA7gFIAzgIQAggGAUgBQAXgBAfAFIA2AJQA9AKBPADQAvACBegBIEmgBQC5gBBcgHIBQgHQAugEAiAAQBfABAnAtQAdAggHAvQgGAwglAYQgVAOgfAFQgUADgkAAIq2APQhHAAhHgCg");
	this.shape_11.setTransform(119.8,348.5);

	this.instance_1 = new lib.Символ1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(120.8,569.9,1,1,0,0,0,121.5,163.6);
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},25).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},47).to({state:[{t:this.shape_6},{t:this.shape_5,p:{x:217.1}},{t:this.shape_4,p:{x:23}}]},1).to({state:[{t:this.shape_6},{t:this.shape_8,p:{x:228.6}},{t:this.shape_7,p:{x:11.5}}]},1).to({state:[{t:this.shape_6},{t:this.shape_9},{t:this.shape_7,p:{x:0}}]},1).to({state:[{t:this.shape_6},{t:this.shape_10},{t:this.shape_4,p:{x:-17.2}}]},1).to({state:[{t:this.shape_6},{t:this.shape_8,p:{x:274.6}},{t:this.shape_4,p:{x:-34.5}}]},1).to({state:[{t:this.shape_6},{t:this.shape_5,p:{x:289.1}},{t:this.shape_4,p:{x:-49}}]},1).to({state:[]},1).to({state:[{t:this.shape_11}]},41).to({state:[]},4).to({state:[{t:this.shape_11}]},9).to({state:[]},4).to({state:[{t:this.shape_11}]},9).to({state:[]},4).to({state:[{t:this.instance_1}]},26).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(176).to({_off:false},0).wait(1).to({y:528.4},0).wait(1).to({y:487},0).wait(1).to({y:445.5},0).wait(1).to({y:404},0).wait(1).to({y:362.5},0).wait(1).to({y:321.1},0).wait(1).to({y:279.6},0).wait(1).to({y:238.1},0).wait(1).to({y:241.8},0).to({_off:true},32).wait(1));

	// Кадр 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-953.6,-383.3)).s().p("A0VM9IANtVIBUAAIAAkZQKTBTJMh1QA3BXA2ATQBvBCC0gFQBBgKB0gpQB0gqB/iBQBIhYBGiUIEljGIAAZ5g");
	this.shape_12.setTransform(117.5,454.1);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-422.1,-73.2)).s().p("AziHqIAAgfIAAu1MAnFAAAIAAO1IAAAfg");
	this.shape_13.setTransform(120.3,37.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-953.6,-297.4)).s().p("A0VaYMAAAg0vIBEAAIAAAgMAnFAAAIAAggIAiAAMAAAA0vg");
	this.shape_14.setTransform(118.6,252.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-953.6,-300.2)).s().p("A0VZ8MAAAgz3MAorAAAMAAAAz3g");
	this.shape_15.setTransform(118.6,263.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-953.6,-131.4)).s().p("A0VAcIAAg3IBEAAIAAAfMAnFAAAIAAgfIAiAAIAAA3g");
	this.shape_16.setTransform(118.6,86.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-422.1,-245.2)).s().p("EgTiAiiMAAAhFDMAnFAAAMAAABFDg");
	this.shape_17.setTransform(120.3,209.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},109).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},60).to({state:[{t:this.shape_16},{t:this.shape_13},{t:this.shape_15,p:{y:263.4}}]},5).to({state:[{t:this.shape_16},{t:this.shape_13},{t:this.shape_15,p:{y:271.8}}]},1).to({state:[{t:this.shape_16},{t:this.shape_13},{t:this.shape_15,p:{y:277.4}}]},1).to({state:[{t:this.shape_16},{t:this.shape_13},{t:this.shape_15,p:{y:276}}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},32).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(109).to({_off:false},0).wait(2).to({y:428.7},0).wait(2).to({y:407.3},0).wait(2).to({_off:true},1).wait(102));

	// Кадр 3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.449,0,0,1.449,-970.9,-411.5)).s().p("EgdPAmJMAAAhMRMA6fAAAMAAABMRg");
	this.shape_18.setTransform(122.2,257);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.267,0,0,1.267,-849.1,-359.9)).s().p("EgZkAhXMAAAhCtMAzJAAAMAAABCtg");
	this.shape_19.setTransform(122.2,257);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.164,0,0,1.164,-779.8,-330.5)).s().p("A3eepMAAAg9RMAu+AAAMAAAA9Rg");
	this.shape_20.setTransform(122.3,257.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.031,0,0,1.031,-690.7,-292.7)).s().p("A0zbJMAAAg2RMApnAAAMAAAA2Rg");
	this.shape_21.setTransform(122.2,257.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-690.3,-292.6)).s().p("A0ybHMAAAg2NMAplAAAMAAAA2Ng");
	this.shape_22.setTransform(122.1,257);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-422.1,-74.9)).s().p("AziH7IAAhBIAAu0MAnFAAAIAAO0IAABBg");
	this.shape_23.setTransform(120.3,39.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-690.3,-292.6)).s().p("A0ybHMAAAg2NIA9AAIAABBMAnFAAAIAAhBIBjAAMAAAA2Ng");
	this.shape_24.setTransform(122.1,257);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-690.3,-307)).s().p("A0yY4MAAAgxvMAplAAAMAAAAxvg");
	this.shape_25.setTransform(122.1,265.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-690.3,-130.5)).s().p("A0yByIAAjjIA9AAIAABBMAnFAAAIAAhBIBjAAIAADjg");
	this.shape_26.setTransform(122.1,94.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-690.3,-140.9)).s().p("A0yAKIAAgTMAplAAAIAAATg");
	this.shape_27.setTransform(122.1,97.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-690.3,-125.6)).s().p("A0yBBIAAiBIA9AAIAABAMAnFAAAIAAhAIBjAAIAACBg");
	this.shape_28.setTransform(122.1,89.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-690.3,-307.9)).s().p("A0yYvMAAAgxdMAplAAAMAAAAxdg");
	this.shape_29.setTransform(122.1,248.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-690.3,-122.7)).s().p("A0yAkIAAhHIA9AAIAABBMAnFAAAIAAhBIBjAAIAABHg");
	this.shape_30.setTransform(122.1,87);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-422.1,-123.8)).s().p("AziASIAAgkMAnFAAAIAAAkg");
	this.shape_31.setTransform(120.3,90.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-690.3,-136.8)).s().p("A0yCUIAAkoIA9AAIAAAlMAnFAAAIAAglIBjAAIAAEog");
	this.shape_32.setTransform(122.1,103.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.bf(img.kububanner240raskadr, null, new cjs.Matrix2D(1.03,0,0,1.03,-690.3,-136.8)).s().p("A0yCVIAAkoIA9AAIAAAlMAnFAAAIAAglIBjAAIAAEog");
	this.shape_33.setTransform(122.1,99.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},72).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_23},{t:this.shape_24}]},30).to({state:[{t:this.shape_23},{t:this.shape_26},{t:this.shape_25,p:{y:265.5}}]},2).to({state:[{t:this.shape_23},{t:this.shape_28},{t:this.shape_27},{t:this.shape_25,p:{y:257.7}}]},2).to({state:[{t:this.shape_23},{t:this.shape_30},{t:this.shape_29}]},2).to({state:[]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},65).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_33}]},1).to({state:[]},1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(115.2,188.5,250.2,442);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/kububanner240raskadr.jpg", id:"kububanner240raskadr"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;