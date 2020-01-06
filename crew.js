function PortsCrew() {
	var me = this;
	var captain = [];
	var crew = [];
	var ship = [];
	var upgrades = { ram: [], figure: [], deckitem: [], hull: [], effectBonus: [], shipwright: [] };
	me.db = {};
	var files = {};
	var presets = {
		upgrades: { 
			effectBonus: ['Ration Pack:0', 'Powder Keg:0', 'Bottled Cry:0'], 
			shipwright: ['Dilapidated'], 
			ram: ['Weathered Ram', 'Sturdy Ram', 'Armoured Ram'], 
			figure: ['Polished Figurehead', 'Skeletal Figurehead'], 
			deckitem: ['Weathered rigging'], hull: ['Barnacled hull'] 
		},
		captain: [
			{ name: "Aika Skulltaker", type: "captain", level: 0, morale: 50, combat: 50, seafaring: 100, speed: 50, ship: '' },
			{ name: "Captain2", type: "captain", level: 5, morale: 150, combat: 150, seafaring: 200, speed: 50, ship: '' }
		],
		crew: [ 
			{ name: "0", type: "TravellingDrunk", level: 5, morale: 77, combat: 0, seafaring: 0, speed: 0, ship: ''}, 
			{ name: "1", type: "TravellingDrunk", level: 1, morale: 77, combat: 0, seafaring: 0, speed: 0, ship: ''},  
			{ name: "2", type: "BrimhavenPirate", level: 1, morale: 0, combat: 165, seafaring: 0, speed: 0, ship: ''},  
			{ name: "3", type: "Smuggler", level: 1, morale: 0, combat: 0, seafaring: 77, speed: 0, ship: '' },
			{ name: "4", type: "TravellingDrunk", level: 5, morale: 77, combat: 0, seafaring: 0, speed: 0, ship: ''}
		],
		ship: [
			{ name: "Bad Ship Ship", crew: { captain: 0, crew1: 0, crew2: 1, crew3: 2, crew4: 3 }, upgrades: [], chance: 42 }, 
			{ name: "Bad Ship Ship", crew: {}, upgrades: [], chance: 8 }
		]
	};
	this.read = function (name) {
		me.db = {};
		var Import= jsonDecode(localStorage.PortsCalc_profiles);
		if (Import) { 
			me.db = Import; 
		} else { 
			if (setting('debug')) qw("no valid old preset files found"); 
		}
		if (me.db[name]) { 
			me.loadPreset(name); 
		} else { 
			loadTemplate(name);
			me.save();
		}
	}
	this.save = function () {
		var current = saveCurrent();
		if (setting('debug')) qw('Save', setting('profile'), me.db[setting('profile')]);
		if (me.db[setting('profile')]) { 
			me.db[setting('profile')] = current; 
		} else { 
			me.db.autosave = current; 
			setSetting('profile', 'autosave'); 
		}
		if (setting('profile') != "autosave") { 
			delete me.db.autosave; 
		}
		localStorage.PortsCalc_profiles = jsonEncode(me.db);
		if (setting('debug')) qw('Save', setting('profile'), jsonDecode(localStorage.PortsCalc_profiles));
	}
	var saveCurrent = function() {
		var r = {};
		r.crew = crew;
		r.captain = captain;
		r.ship = ship;
		r.upgrades = upgrades;
		return r;
	}
	var loadTemplate = function(name) {
		var preset = {
			crew: presets.crew,
			captain: presets.captain,
			ship: presets.ship,
			upgrades: presets.upgrades,
		};
		me.db[name] = {};
		me.loadPreset(name, preset);
	}
	this.createProfile = function(name) {
		me.save();
		setSetting('profile', name);
		loadTemplate(name);
		qw(me.db[name]);
		me.save();
	}
	this.loadPreset = function(name, preset) {
		setSetting('profile', name);
		if (name && !preset) { 
			qw('LoadPreset', name, me.db[name]);
			crew = me.db[name].crew;
			captain = me.db[name].captain;
			ship = me.db[name].ship;
			upgrades = me.db[name].upgrades;
		} else {
			crew = preset.crew;
			captain = preset.captain;
			ship = preset.ship;
			upgrades = preset.upgrades;
		}
		if (preset) { 
			if (setting('debug')) qw("Error - Profile doesn't exist"); 
			return; 
		}	
	}
	
	this.deleteProfile = function(profile) {
		delete me.db[profile];
		this.save();
		if(setting('profile') == profile)
			this.read("autosave");
	}
	this.getCrew = function (type, id = null, key = null) {
		if(type == 'captain') {
			if(key) return captain[id][key];
			if(id) return captain[id];
			return captain;
		} else if(type == 'crew') {		
			if(key) return crew[id][key];
			if(id) return crew[id];
			return crew;
		}
		return null;
	}
	this.getShip = function(id = null, type = null) {
		if(type) return ship[id][type];
		if(id) return ship[id];
		return ship;
	}
	this.getUpgrade = function (type, key) {
		if(key) return upgrades[type][key];
		if(type) return upgrades[type];
		return upgrades;
	}
	this.getTrait = function (id, key) {
		if(key) return crew[id].traits[key];
		return crew[id].traits;
	}
	this.setUpgrade = function (type, key, value) {
		upgrades[type][key] = value;
		me.save();
	}
	this.setTrait = function(type, crewId, traits, position) {
		if(type == 'captain')
			if(position)
				captain[crewId].traits[position] = traits;
			else
				captain[crewId].traits = traits;
		else if(type == 'crew')
			if(position)
				crew[crewId].traits[position] = traits;
			else
				crew[crewId].traits = traits;
		me.save();
	}

	this.setCaptain = function (id,name,type,lvl,morale,combat,seafaring,speed,traits = [],ship = '') {
		captain[id] = {name: name, type: type, level: lvl, morale: morale, combat: combat, seafaring: seafaring, speed: speed, ship: ship, traits: traits};
		me.save();
	}
	this.addCaptain = function (name,type,lvl,morale,combat,seafaring,speed,traits = [],ship = '') {
		var next = 0;
		if(Object.keys(captain).length > 0) {
			next = Math.max.apply(Math,Object.keys(captain).map(function(o){return o;})) + 1;
		}
		captain[next] = {name: name, type: type, level: lvl, morale: morale, combat: combat, seafaring: seafaring, speed: speed, ship: ship, traits: traits};
		me.save();
	}	

	this.setCrew = function (id,name,type,lvl,morale,combat,seafaring,speed,traits = [],ship = '') {
		crew[id] = {name: name, type: type, level: lvl, morale: morale, combat: combat, seafaring: seafaring, speed: speed, ship: ship, traits: traits};
		me.save();
	}
	this.addCrew = function (name,type,lvl,morale,combat,seafaring,speed,traits = [],ship = '') {
		var next = 0;
		if(Object.keys(crew).length > 0) {
			next = Math.max.apply(Math,Object.keys(crew).map(function(o){return o;})) + 1;
		}
		crew[next] = {name: name, type: type, level: lvl, morale: morale, combat: combat, seafaring: seafaring, speed: speed, ship: ship, traits: traits};
		me.save();
	}
	this.deleteCrew = function(type, id) {
		if(type == 'captain')
			captain.splice(id, 1);
		if(type == 'crew')
			crew.splice(id, 1);
		me.save();
	}
	this.setShip = function (id,name,crew,upgrades,chance) {
		ship[id] = {name: name, crew: crew, upgrades: upgrades, chance: chance};
		me.save();
	}
	this.deleteUpgrade = function(type, key) {
		delete upgrades[type][key];
		me.save();
	}
	this.findCrew = function(name) {
		for(var a in crewPreset) {
			if(name == crewPreset[a].name)
				return crewPreset[a];
		}
		return null;
	}
}