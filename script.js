///<reference path="/alt1lib.js">
///<reference path="/runeappslib.js">
///<reference path="/imagedetect.js">
///<reference path="/apps/alt1/alt1doc.js">
"use strict";

var voyageinterface = new InterfaceTracker(new Rect(-92, -459, 765, 503), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAANCAYAAAAKeCiYAAACN0lEQVRIS91XTSuEURR+b1LSNPlYTJOvyAoZNSxmkiYmFLFQNv6htY2ysFAWslDslHyld4GaZifRuTzXec+c+37Fxt1wzznPc57z3HvfMPWt3Y/gn6/ny8NgcGYt15SmurrtDGpfHweFyUaESIvl6vTHIJ9Oih/tHwfN3UbHbFKSxmGmGuvWoPe7U0fUNVqzWC32x3Pmok/SSXnM5Gvg4zATtWVrUHd47gx6K1Utjy+GJqhDbdJewwHLhUseHw5xTSfno3wSJ+cgLOpNeX7JGlR8uXAGtQYqll/GsEdzurZU66uTeYnjPfhAaXC8XtOOfJoZqJaeoabBGSQNAUgzAUR429IkHudCJY73yJLDAfpM8Jmn9dMuA9Uhbvpm6+4jXWpfuVvEycLCdMBzSXsYRHW0gJUnFNdDO1WK0YGBF3xSG++jzQQe+ik1Sn5TnPt6YrTKrZ9nxsU/FSuRXNIeBsm6uFui1YKHD0x1cnHdMi9ztOfmkyHaPOhhCtVm5O+godcz9x4J/Ni/YGsRp5gcVKtJg9OuPDdFGoQ9uKFD00Y5quM57DX9kgM9TKG2ETUoPIkaVFp0hgyxHK7po5K3xsbgOFZyxuUkrzNI6EIchylN53mfTvTqMMjelvDEcnAwF4PfZR7DaoOAU8PynLsl3wbznKZH0yV7EAewSXxydtO7tPMr/2qMPBy5D/z9cLPjO+ELAMdPNQs+daOchaZnZe9XDKL+YzcHwe34ZmYphMPKg8/cMAPgExnoOgLvQzlkAAAAAElFTkSuQmCC');
var selectedvoyageinterface = new InterfaceTracker(new Rect(0, 0, 363, 112), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDMwN0QxOTY5NEUzMTFFN0I2NkJDQUIyNzZCQ0UyOEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDMwN0QxOTc5NEUzMTFFN0I2NkJDQUIyNzZCQ0UyOEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEMzA3RDE5NDk0RTMxMUU3QjY2QkNBQjI3NkJDRTI4QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEMzA3RDE5NTk0RTMxMUU3QjY2QkNBQjI3NkJDRTI4QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/pq8oAAABLSURBVHjaYvz//z/D9GS2/z5GjAyMjAxgwDItheN/gAmUBwUsvob/GX79YWCoWsSBEGRmYmD4+4+B4fdfhGomGIOV+T8YgwBAgAEAmXYSsa8D78kAAAAASUVORK5CYII=');
var selectvoyageinterface = new InterfaceTracker(new Rect(-327, -8, 755, 503), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAPCAMAAAC1HOMwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTBGOTM0ODI5NEU0MTFFN0E1NTg5RDU2QTVBNTNENDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTBGOTM0ODM5NEU0MTFFN0E1NTg5RDU2QTVBNTNENDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MEY5MzQ4MDk0RTQxMUU3QTU1ODlENTZBNUE1M0Q0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MEY5MzQ4MTk0RTQxMUU3QTU1ODlENTZBNUE1M0Q0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt8OFY0AAABCUExURQAAAAwMCxAODRAPEBEQDhQTEhYYFRgWFBgXGBkYFhwbGh4gHh4gISAeHCEgHiMjISgmJCkoJSsrKjAvLTMzMv///1lDfuMAAAJ3SURBVBgZBcEBgtg2DANB2BGOIa4Sbbf7/692RrkcX7ZdXvbl3E5sX66+/tze5z3v0/Z1L1+eZa92O10zZ++9Lvs+cQz/2T8Zd/dMPjsKuM8y2HadXdW2fcW5bie+ruteXvZl2zm3szqVJE57g7vssUGxU0memc/2jwKyj0HJbTtp252y75342lletsuXV3X+OE7KMzlJDNp955ljKTn+8Zn3+2DcCsgug5LYY3vNv3HixFmdO987zy6vv+Vsx56c9JmZuwKKk077Sp9yZr53AsrWP4Fxg+QKQFcGJlfAbQBodzcAOA5AHL/lDXLO2dlwJQC83wCAYlAMSgIS7A4ovUB2JAlWGSSBKiBBLicukLPt+4AOSBJnfSBJDigNcoO0DO4DfUDasc/9gB6QukEFUgeWe05AOSv3BHRA55xRAppW8gsBaQI6WaBlUEDuAAAKyLtADQCgSrlBu+KJQQ0A8QQ0Vr4PBEoalGPQF5BBaZAk0A1yBRSQJEnjygHN8n5tUAcAJj+gib4vIJCfgJIGlRtAikHlBTqgrgZtUBznTd1u0HFNpUCZSAI5oBPZCSC5JrADUmIAuQJaAZQbqgBtw7ih9vfaoDjjHNAmmQ3qD7RHmQygcWoCIFVVGqTs3QAN8neAAnUCgNTnjAEA5gHtACDN9wug+b5Y0sQzFUnycqpBtXPbklRS3pQk0HEfSVKl93ktSZJULZ0cSVJm+kjSTDwVJ3bSyd5ZlYDk2DUzx7XjTFWB1Cd7xtnvWZUT9/a445OZ7PH3e85zvP29sp3uuOPuuJPEFYNc7YqXa62OCwCpk57TK5VMVrYrydqdStKpPOmMO878D32OO1MjKHutAAAAAElFTkSuQmCC');
var portsFound = false;
var portsPos = null;
var reader = new PortsCrewReader();
var pCrew = new PortsCrew();
var calc = new Calculate();
var imgref = null;
var osrsmode = false;
var currentFileName = "";
var currentProfile = null;
var files = {};
var settings = {
	profile: "autosave",
	alt1Detected: false,
	minCrew: false,
	hideUnused: false,
	showNext: false,
	prompt: false,
	debug: true,
	activemode: 0,
	profiles: {
		0: "autosave"
	}
};
var settingsVar = {
	debug: {
		name: 'Debug',
		tooltip: 'Toggle debug',
		vars: [true, false]
	}
}
var portUI = new PortInterface();
function setSetting(a, v) {
	qw(a,v);
	settings[a] = v;
	saveStorage();	
}
function setting(a) {
	if(a) return settings[a];
	return settings;
}
function saveStorage() {
	localStorage.PortsCalc_settings = jsonEncode(settings);
	pCrew.save();
}
function loadStorage() {
	var settingsImport=jsonDecode(localStorage.PortsCalc_settings);
	if (settingsImport) {
		for (var a in settingsImport) {
			if (typeof settings[a] != "undefined") { settings[a] = settingsImport[a]; }
		}
	}
	pCrew.read(setting('profile'));
}
function newCalc() {
	calc = new Calculate();
	calc.init(pCrew);
	portUI.init(pCrew);
	portUI.draw();
}
function start() {
	a1lib.identifyUrl("appconfig.json");
	loadStorage();
	if (window.alt1) { setSetting('alt1Detected', true); } else { setSetting('alt1Detected', false); }
	calc.init(pCrew);
	portUI.init(pCrew);
	alt1.events.alt1pressed.push(function(t){
		console.log(t)
	})
	/*var dx = 0;
	var treshold = .9*255 | 0;
	qw(treshold);
		for (var a in font.chars) {
			for (var b in font.points) {
				var img = font.chars[a];
				var i = 3 * (font.points[b].x) + 3 * (img.width*font.points[b].y);
				var c = (font.shadow ? (font.shadowcheck ? b * 3 : b * 2) : b);
				if (img.pixels[c+2] <= treshold) {
					//qw("c", c, "pixel data", img.pixels[c], img.pixels[c+1], img.pixels[c+2], "x", font.points[b].x, "y", font.points[b].y);
					alt1.overLayRect(a1lib.mixcolor(255, 255, img.pixels[c+2]), 500 + font.points[b].x + dx, 200 + font.points[b].y, 1, 1, 10000, 1)
				} 
			}
			alt1.overLayTextEx(img.chr, a1lib.mixcolor(255, 255, 255), 8, 500 + dx, 205 + 20 | 0, 10000, "porttitle", false, true);
			dx += font.chars[a].width;
		}
	*/
	/*qw('Voyage Title1: ', reader.read(a1lib.bindregion(594,345,363,113), { x: 23, y: 27, w: 300, h: 12 }, [249, 236, 213], "porttitle"));
	qw('Voyage Title2: ', reader.read(a1lib.bindregion(594,464,363,113), { x: 23, y: 27, w: 300, h: 12 }, [249, 236, 213], "porttitle"));
	qw('Voyage Title3: ', reader.read(a1lib.bindregion(594,583,363,113), { x: 23, y: 27, w: 300, h: 12 }, [249, 236, 213], "porttitle"));
	qw('Ship Title: ', reader.read(a1lib.bindregion(977,397,347,117), { x: 99, y: 21, w: 300, h: 12 }, [249, 236, 213], "porttitle", PortsCrewReader.findStartTextTitle, {x:1, y:1}));
	
	qw('Morale: ', reader.readAmount(a1lib.bindregion(977,532,347,179), { x: 290, y: 59, w: 50, h: 8 }, [255, 255, 255]));
	qw('Combat: ', reader.readAmount(a1lib.bindregion(977,532,347,179), { x: 290, y: 90, w: 50, h: 8 }, [255, 255, 255]));
	qw('seafaring: ', reader.readAmount(a1lib.bindregion(977,532,347,179), { x: 290, y: 121, w: 50, h: 8 }, [255, 255, 255]));
	*/
	//qw('Test Trait: ', reader.read(reader.read(a1lib.bindregion(594,583,363,113), { x: 75, y: 196, w: 132, h: 14 }, [249, 236, 213], "largefont"));

	/*pCrew.setShip(0,"Lazy Lost Goose",{C:0, C0:0, C1:1, C2:0, C3:0, C4:0},{},0);
	
	pCrew.setCrew(0,"Varrock Chef","VarrockChef",  			1,100,500,300,4000);
	pCrew.setCrew(1,"Bamboo Golem","BambooGolem",  			2,200,600,200,5000, 1);
	pCrew.setCrew(2,"Eastern Guide","EasternGuide",			3,300,600,200,5000, 1);
	pCrew.setCrew(3,"Palmist","Palmist",           			4,400,600,200,5000, 1);
	pCrew.setCrew(4,"Fireworks Expert","FireworksExpert",	5,500,600,200,5000, 1);
	pCrew.setCrew(5,"Slate Golem","SlateGolem",				6,600,600,200,5000, 1);
	pCrew.setCrew(6,"Cartographer","Cartographer",			7,700,600,200,5000, 1);
	pCrew.setCrew(7,"Cherrywood Golem","CherrywoodGolem",	6,800,600,200,5000, 1);
	pCrew.setCrew(8,"Farcrier","Farcrier",					5,900,600,200,5000, 1);
	pCrew.setCrew(9,"Jade Golem","JadeGolem",				4,100,600,200,5000, 1);
	
	pCrew.setCaptain(0,"Blazing","captain",7,300,700,100,6000);
	pCrew.setCaptain(1,"Blazing","captain",7,400,800,900,7000, 1);*/
	
	//pCrew.save();
}
function findPorts() {
	if (!window.alt1) { message("Error", "This app only works with alt1 installed.", "Ok"); return; }
	imgref = a1lib.bindfullrs();
	if (!imgref) { message("Error", "Error while trying to make a screenshot, please check if pixel permission is enabled.", "Ok"); return; }
	findVoyages();
}

function findShip() {
	if (!imgref ) { imgref = a1lib.bindfullrs(); }
	//==== find bank ====
	//TODO ditch the interfacereader structure
	var loc = voyageinterface.find(imgref);
	if (!loc) {
		message("Error", "Couldn't find Voyage interface", "Ok");
		return false;
	}
	//qw(voyageinterface.bounds);
	message("Error", "Ship Interface found at " + loc.x + "," + loc.y, "Ok");
	imgref = imgref.toData(loc.x, loc.y, voyageinterface.bounds.width, voyageinterface.bounds.height);
	alt1.overLayRect(a1lib.mixcolor(255, 255, 255), loc.x, loc.y, voyageinterface.bounds.width, voyageinterface.bounds.height, 10000, 1);
	//elid("resource").style.display='block';
	elid("find").style.display = 'none';
}
function findVoyages(this2, setData) {
	imgref = a1lib.bindfullrs();
	//==== find bank ====
	//TODO ditch the interfacereader structure
	var loc = selectvoyageinterface.find(imgref);
	if (!loc) {
		message("Error", "Couldn't find Voyage interface", "Ok");
		return false;
	}
	message("Error", "Voyage found at " + loc.x + "," + loc.y, "Ok");
	imgref = a1lib.bindregion(loc.x, loc.y, selectvoyageinterface.bounds.width, selectvoyageinterface.bounds.height);
	alt1.overLayRect(a1lib.mixcolor(255, 255, 255), loc.x, loc.y, selectvoyageinterface.bounds.width, selectvoyageinterface.bounds.height, 10000, 1);
	var loc2 =selectedvoyageinterface.find(imgref);
	if (!loc2) {
		message("Error", "Couldn't find Selected Voyage interface", "Ok");
		return false;
	}
	message("Error", "Selected Voyage found at " + (loc.x + loc2.x) + "," + (loc2.y + loc.y), "Ok");
	var SelectedVoyageRegion = a1lib.bindregion(loc2.x, loc2.y,selectedvoyageinterface.bounds.width, selectedvoyageinterface.bounds.height);
	alt1.overLayRect(a1lib.mixcolor(255, 255, 0), loc2.x, loc2.y, selectedvoyageinterface.bounds.width, selectedvoyageinterface.bounds.height, 10000, 1);
	var res = {};
	res.title = reader.read(SelectedVoyageRegion , { x: 23, y: 27, w: 300, h: 12 }, [249, 236, 213], "porttitle");
	var SelectedVoyageStats = a1lib.bindregion(loc.x + 394, loc.y + 266,347, 147);
	res.morale = reader.readAmount(SelectedVoyageStats, { x: 290, y: 59, w: 50, h: 8 }, [255, 255, 255]);
	res.combat = reader.readAmount(SelectedVoyageStats, { x: 290, y: 90, w: 50, h: 8 }, [255, 255, 255]);
	res.seafaring = reader.readAmount(SelectedVoyageStats, { x: 290, y: 121, w: 50, h: 8 }, [255, 255, 255]);
	if(setData) {
		$(setData.title).val(res.title);
		$(setData.morale).val(res.morale);
		$(setData.combat).val(res.combat);
		$(setData.seafaring).val(res.seafaring);
	}
	return res;
}
function setTooltips(el) {
	qw('here', el);
	$(el).tooltipster({
		functionInit: function (instance, helper) {
	    	if(!$(helper.origin).attr('data-tooltip-content')) return;
	    	var crewM = $(helper.origin).attr('data-tooltip-content').split('-');
	    	var selected = pCrew.getCrew(crewM[0], crewM[1]);
			var frag = eldiv('tooltip_content', [
	    		eldiv({id:'crewTooltip'}, [
	    			eldiv('crewBody', [
	    				eldiv('name', {tag:'span'}, [selected.name]),
	    				eldiv('crew '+selected.type),
	    				eldiv('level', ['Level '+selected.level]),
	    				eldiv('stat morale', [selected.morale, eldiv({tag:'span'}, ['Morale:'])]),
						eldiv('stat combat', [selected.combat, eldiv({tag:'span'}, ['Combat:'])]),
						eldiv('stat seafaring', [selected.seafaring, eldiv({tag:'span'}, ['Seafaring:'])]),
						eldiv('stat speed', [selected.speed, eldiv({tag:'span'}, ['Speed:'])]),
						eldiv('traits', {tag:'span'}, [selected.type])
	    			])
	    		])
	    	]);
	    	$(helper.origin).append(frag)
			var content = $(helper.origin).find('.tooltip_content').detach();
	      	if(content.length > 0) {
	      		instance.content(content);
	      	}
	    }, plugins: ["follower"]
	});
	}
function message(title, message, buttonText) {
	if(typeof message == 'string') {
		message = [{t:'text', text: message}];
	}
	var comp = [];
	qw(message, message.length);
	message.push({ t:'div', attr: { id: 'deleteCrew' }, onclick: function() {  portUI.box.frame.close();}, arg: 'nisbutton button', sub: ['Ok']});
	portUI.box = promptbox2({fadein: false, stylesheets: [], title: title, id: 'messageBox', style: popupFrame }, message);
}
var box = null;
function popupFrame(options) {
	options = applyobject({
		width: options.width,
		measurewidth: options.measurewidth,
		measureheight: options.measureheight,
		style: options.style,
		onclose: options.onclose,
		onchange: options.onchange,
		title: options.title,
		fadein: options.fadein,
		stylesheets: options.stylesheets,
		parent: options.parent,
		v2: options.v2,//flag for the boxcontainer functions
		id: ''
	}, options);
	var root = eldiv('fakePopupBorder', {onclick: function() { /*portUI.box.frame.close();*/ }}, [
					eldiv('popupPortCalc', {id: options.id}, [
						eldiv('topLeft'),
						eldiv('top', [options.title]),
						eldiv('topRight'),
						eldiv('left'),
						eldiv('right'),
						eldiv('bottomLeft'),
						eldiv('bottom'),
						eldiv('bottomRight'),
						eldiv('close'),
						eldiv('body')
					])
				]);
	return({
		"root": root,
		"title":{},
		"closebutton":{},
		"contentbox":root.children[0].children[9],
		"insertfunc":function() {},
		"closefunc":function() {
			$(portUI.els.crew.captainsContainer).children('.captain').children('.captainBorder').removeClass('active'); 
			$(portUI.els.crew.crewContainer).children('.crew').children('.crewBorder').removeClass('active'); 
			box.frame.root.remove();
			portUI.draw();
			box = null;
			
		}
	});
};
var swapElements = function(siblings, subjectIndex, objectIndex) {
	qw(siblings);
	// Get subject jQuery
    var subject = $(siblings.get(subjectIndex));
    // Get object element
    var object = siblings.get(objectIndex);
    // Insert subject after object
    subject.insertAfter(object);
}
