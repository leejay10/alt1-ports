function PortInterface(reader) {
	var me = this;
	this.port = null;
	this.save = {};
	var els = {
		calc: {},
		crew: {}
	};
	this.els = els;
	this.crewEdit = false;
	this.root = elfrag(
		els.header = eldiv('header', [
			els.headerFind = eldiv('nisbutton', {id:'find', onclick: findPorts}, ['Find Ports Interface']),
			els.resources = eldiv('resources', {id:'resources'}),
			els.tabroot = eldiv("nisseperator")		
		]),
		els.body = eldiv("portstate"),
		els.footer = eldiv('footer')
	);
	this.init = function (profile) {
		this.port = profile;
		elput(document.body, me.root);
		me.draw();
	}
	this.draw = function () {
		if(setting('alt1Detected')) {
			els.headerFind.setAttribute('style', 'display:block');
			document.body.className = 'nis alt1';
		} else { 
			els.headerFind.setAttribute('style', 'display:none');
			document.body.className = 'nis';
		}
		var frag = elfrag(
			eldiv("contenttab lefttab" + (setting('activemode') == 0 ? " activetab" : ""), { onclick: function () { if(box) return; setSetting('activemode', 0); me.draw(); } }, ["Overview"]),
			eldiv("contenttab lefttab" + (setting('activemode') == 1 ? " activetab" : ""), { onclick: function () { if(box) return; setSetting('activemode', 1); me.draw(); } }, ["Ships"]),
			eldiv("contenttab lefttab" + (setting('activemode') == 2 ? " activetab" : ""), { onclick: function () { if(box) return; setSetting('activemode', 2); me.draw(); } }, ["Crew"]),
			eldiv("contenttab lefttab" + (setting('activemode') == 3 ? " activetab" : ""), { onclick: function () { if(box) return; setSetting('activemode', 3); me.draw(); } }, ["Calculate"])
		);
		elput(els.tabroot, frag);
		elput(els.footer, eldiv('buttons', [
			eldiv('profile', ['Current Profile: '+setting('profile')]),
			eldiv('icoButton tooltip', {title: 'Settings', onclick: function() { saveMenu(); }}, [eldiv('icoBorder', [eldiv('fa fa-cog', {tag:'i', 'aria-hidden':true})])]),
			eldiv('icoButton tooltip', {title: 'Edit Mode'}, [
				eldiv('icoBorder', [
					eldiv('fa fa-pencil-square-o', {tag:'i', 'aria-hidden':true})
				])
			])
		]));
		if (setting('activemode') == 0) { 
			elput(els.body, me.drawOverview()); 
		}
		if (setting('activemode') == 1) { 
			elput(els.body, me.drawShips()); 
		}
		if (setting('activemode') == 2) { 
			elput(els.body, me.drawCrew()); 
			elput(els.crew.captainsContainer, me.displayCrew('captain')); 
			elput(els.crew.crewContainer, me.displayCrew('crew'));
			me.updateEditCrew(false);
		}
		if (setting('activemode') == 3) { 
			calc = new Calculate();
			calc.init(me.port);
			elput(els.body, me.drawCalc());
			me.setCalcClick();
		}
		setTooltips('.tooltip');
	}
	this.drawOverview = function () {
		var frag = elfrag(
			eldiv("crty-header", ["Ports Calculator Overview"]),
			eldiv("crty-story", ["Stuff will be here."])
		);
		var test = document.createElement('div');
			test.innerHTML = "<i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>";
			frag.appendChild(test);
		return frag;
	}
	this.drawShips = function () {
		var ships = null;
		var frag = elfrag(ships = eldiv({id:'ships'}));
		for (i = 0; i < 4; i++) { 	
			var ready = null;
			var crewList = null;	
			var shipName = null;
			var ship = eldiv('ship', {id: 'ship'+i}, [
				ready = eldiv('shipnotready', {tag: 'img', name: 'Ship Not Ready'}),
				shipName = eldiv('shipname'),
				crewList = eldiv('crewlist'),
				eldiv('fa fa-pencil-square-o edit tooltip', {tag:'i', title: 'Edit Ship', 'aria-hidden': true})
			]);
			if(me.port.getShip(i)) {
				shipName.innerText = me.port.getShip(i, 'name');
				var shipCrew = me.port.getShip(i, 'crew');
				qw(shipCrew, Object.keys(shipCrew).length);
				if(Object.keys(shipCrew).length > 0) {
					ready.className = 'shipready';
					ready.setAttribute('name', 'Ship Ready');
					for (var a in me.port.getShip(i, 'crew')) {
						var crewM = me.port.getShip(i, 'crew')[a];
						var crew = eldiv('crew tooltip '+me.port.getCrew(a, crewM, 'type'), {'data-tooltip-content': (a == 'captain' ? 'captain' : 'crew')+"-"+crewM });
						crewList.appendChild(crew);
					}
				}
			}
			ships.appendChild(ship);
		}
		return frag;
	}
	this.drawCrew = function () {
		var frag = elfrag(
			eldiv({id: 'crew'}, [
				eldiv('crewBody', [
					eldiv('crewHeader'),
					els.crew.captainsContainer = eldiv('container', {id:'captainsContainer'}),
					els.crew.crewContainer = eldiv('container', {id:'crewContainer'}),
					eldiv('fa fa-pencil-square-o edit tooltip', {tag: 'i', title: 'Edit Crew', 'aria-hidden': true, onclick: function() {me.crewEdit = !me.crewEdit;me.updateEditCrew();}})
				])
			]), 
			eldiv({id: 'crewSelection'}, [
				els.crew.selected = eldiv('crewBody selected'),
				els.crew.compare = eldiv('crewBody compare')
			])
		);
		
		return frag;
	}
	this.displayCrew = function(type) {
		var frag = elfrag();
		qw(type, me.port.getCrew(type));
		for (var a in me.port.getCrew(type)) {
			qw(a, me.port.getCrew(type,a));
			frag.appendChild(
				eldiv('crew', {id: type+a, onmouseover: function() { me.setCompare($(this)); }, onmouseout: function() { $(els.crew.compare).html(""); }, onclick: function(a) {me.activeCrewClick(type, $(a.srcElement.parentNode))}}, [
					eldiv('crew '+me.port.getCrew(type,a, 'type')),
					eldiv('crewPosition', [me.port.getCrew(type,a, 'ship') == '' ? '-' : me.port.getCrew(type,a, 'ship')]),
					eldiv('crewLevel', [me.port.getCrew(type,a, 'level')]),
					eldiv('crewBorder')
				])
			);
		}
		if(me.port.getCrew(type).length < 25) {
			frag.appendChild(
				eldiv('crew', {id: type+'Blank', onclick : function() { me.activeCrewClick(type) }}, [
					eldiv('crew blank' + type),
					eldiv('fa fa-plus-circle addCrew', {'aria-hidden': true})
				])
			);
		}
		return frag;
	}
	this.removeActiveCrew = function() {
		$(els.crew.captainsContainer).children('.crew').children('.crewBorder').removeClass('active'); 
		$(els.crew.crewContainer).children('.crew').children('.crewBorder').removeClass('active'); 
	}
	this.activeCrewClick = function(type, id) {
		if(!id) {
			me.removeActiveCrew();
			box = promptbox2({ width: 230, fadein: false, stylesheets: [], title: (type == 'captain' ? 'Captain' : 'Crew') + ' Add', id: 'crewAdd', style: popupFrame }, me.addEditCrew(type))
			return;
		}
		me.removeActiveCrew();
		id.children('.crewBorder').addClass('active');
		if(!me.crewEdit)
			me.setSelected(id);
		else {
			id = id[0].id;
			var selected = null;
			if(type == 'captain')
				id = id.substr(7);
			else if(type == 'crew')
				id = id.substr(4);
			selected = me.port.getCrew(type, id);
			box = promptbox2({ width: 230, fadein: false, stylesheets: [], title: (type == 'captain' ? 'Captain' : 'Crew') + ' Edit', id: 'crewAdd', style: popupFrame }, me.addEditCrew(type, id, selected));
			
		}
	}
	
	this.updateEditCrew = function(redraw = true) {
		if(me.crewEdit) {
			elid('crewSelection').remove();
			me.removeActiveCrew();
		} else {
			if(redraw) 
				me.draw();
			else {
				me.removeActiveCrew();
			}
		}
	}
	this.addEditCrew = function(type, id, crew) {
		var container = [];
		var crewId = null;
		if(setting('alt1Detected')) { container.push({ t:'div', attr: { id:'findCrewAdd' }, arg: 'nisbutton', sub: ['Find Crew Member']}); }
		if(type == 'captain') {
			var captainAttr = {t:'string', attr: { id: 'crewAddName', placeholder: 'Captain Name'}};
			if(crew)
				captainAttr.attr.value = crew.name;
			container.push(captainAttr);
		} else if(type == 'crew') {
			var crewAttr = {t:'dropdown', attr: { id: 'crewAddName', onchange: me.crewAddUpdate}, options: me.crewPresetList()};
			if(crew)
				crewAttr.v = id;
			container.push(crewAttr );
		}
		container.push({t:'div', arg: 'crew '+(crew ? crew['type'] : (type == 'captain' ? 'captain' : 'blankcrew'))});
		
		container.push({t:'v/11', attr: { type: 'stats'}}); //Stats morale combat
		container.push({t:'div', arg: 'stat morale', sub: ['Morale: ', eldiv({tag:'input', type: 'number', min: 0, name: 'morale', id: 'morale', value: (crew ? crew.morale : 0)})]});
		container.push({t:'div', arg: 'stat combat', sub: ['Combat: ', eldiv({tag:'input', type: 'number', min: 0, name: 'combat', id: 'combat', value: (crew ? crew.combat : 0)})]});
		
		container.push({t:'v/11', attr: { type: 'stats'}}); //stats seafaring speed
		container.push({t:'div', arg: 'stat seafaring', sub: ['Seafaring: ', eldiv({tag:'input', type: 'number', min: 0, name: 'seafaring', id: 'seafaring', value: (crew ? crew.seafaring : 0)})]});
		container.push({t:'div', arg: 'stat speed', sub: ['Speed: ', eldiv({tag:'input', type: 'number', min: 0, name: 'speed', id: 'speed', value: (crew ? crew.speed : 0)})]});
		
		container.push({t:'div', arg: 'level', sub: ['Level', eldiv({tag:'input', type: 'number', min: 0, max: 10, name: 'lvl', id: 'crewLvl', value: (crew ? crew.level : 0)})]});
		
		container.push({t:'h/11', attr: { type: 'traits'}}); //Traits 1 2
		container.push({t:'dropdown', attr: { id: 'trait1'}, options: me.crewTraitList(1)});
		container.push({t:'dropdown', attr: { id: 'trait2'}, options: me.crewTraitList(2)});
		
		container.push({ t:'button:minusLvl', attr: { id: 'minusLvl' }, text: ['-']});
		container.push({ t:'button:plusLvl', attr: { id: 'plusLvl' }, text: ['+']});
		
		container.push({t:'h/11', attr: { type: 'traits'}}); //Traits 3 4
		container.push({t:'dropdown', attr: { id: 'trait3'}, options: me.crewTraitList(3)});
		container.push({t:'dropdown', attr: { id: 'trait4'}, options: me.crewTraitList(4)});
		
		container.push({ t:'div', attr: { id: 'addCrew' }, onclick: function() { me.crewAddValidate(type, box.frame.root.children[0].children[1], id) }, arg: 'nisbutton button', sub: [(crew ? 'Save' : 'Add')]});
		if(crew) { container.push({ t:'div', attr: { id: 'deleteCrew' }, onclick: function() {  me.port.deleteCrew(type, id); box.frame.close(); me.draw();}, arg: 'nisbutton button', sub: ['Delete']}); }
		container.push({ t:'div', attr: { id: 'cancelCrew' }, onclick: function() { box.frame.close(); }, arg: 'nisbutton button', sub: ['Cancel']});

		return container;
	}
	this.crewAddValidate = function(type, elBody, crewId) {
		var getPreset = function(type, val) {
			for(var a in crewPreset) {
				if(crewPreset[a][type] == val) {
					return crewPreset[a];
				}
			}
			return null;
		};
		var crewVal = (type == 'crew' ? $(elBody).children('#crewAddName')[0][$(elBody).children('#crewAddName').val()].label : $(elBody).children('#crewAddName').val());
		if(type == 'captain' && crewVal == '') return;
		if(type == 'crew' && crewVal == 0) return;
		qw(type, crewVal, $(elBody));
		var name = (type == 'crew' ? crewVal : crewVal);
		var crewtype = (type == 'crew' ? getPreset('name', crewVal).type :  'captain');
		var lvl = parseInt($(elBody).children('.level').children('input').val());
		var morale = parseInt($(elBody).children('div').children('.morale').children('input').val());
		var combat = parseInt($(elBody).children('div').children('.combat').children('input').val());
		var seafaring = parseInt($(elBody).children('div').children('.seafaring').children('input').val());
		var speed = parseInt($(elBody).children('div').children('.speed').children('input').val());
		var traits = [];
		$(elBody).children('div.pb2-flex-h[type~=traits]').each(function() {
			$(this).children('select').each(function() {
				if($(this).val() != 0)
					traits.push(parseInt($(this).val()));
			});
		});
		qw(name,crewtype,lvl,morale,combat,seafaring,speed, traits);
		if(type == 'captain') {
			if(crewId)
				me.port.setCaptain(crewId, name, 'captain', lvl, morale, combat, seafaring, speed, traits);
			else
				me.port.addCaptain(name, 'captain', lvl, morale, combat, seafaring, speed, traits);
			box.frame.close();
			return;
		}
		if(type == 'crew') {
			if(crewId) 
				me.port.setCrew(crewId, name, crewtype, lvl, morale, combat, seafaring, speed, traits);
			else
				me.port.addCrew(name, crewtype, lvl, morale, combat, seafaring, speed, traits);
			box.frame.close();
			return;
		}
	}
	this.setSelected = function(varThis) {
		var id = varThis[0].id;
		var selected = null;
		if(id.includes('captain'))
			selected = me.port.getCrew('captain', id.substr(7));
		else if(id.includes('crew'))
			selected = me.port.getCrew('crew', id.substr(4));
		if(!selected) return;
		var frag = elfrag(
			eldiv('title', {tag:'span'}, ['Selected']),
			eldiv('name', {tag:'span'}, [selected.name]),
			eldiv('crew '+selected.type),
			eldiv('level', ['Level '+selected.level]),
			eldiv('stat morale', [selected.morale, eldiv({tag:'span'}, ['Morale:'])]),
			eldiv('stat combat', [selected.combat, eldiv({tag:'span'}, ['Combat:'])]),
			eldiv('stat seafaring', [selected.seafaring, eldiv({tag:'span'}, ['Seafaring:'])]),
			eldiv('stat speed', [selected.speed, eldiv({tag:'span'}, ['Speed:'])]),
			eldiv('traits', {tag:'span'}, [selected.type])
		);
		elput(els.crew.selected, frag)
	}
	this.setCompare = function(varThis) {
		var id = varThis[0].id;
		var selected = null;
		if(id.includes('captain'))
			selected = me.port.getCrew('captain', id.substr(7));
		else if(id.includes('crew'))
			selected = me.port.getCrew('crew', id.substr(4));
		if(!selected) return;
		var status = {
			morale: selected.morale,
			combat: selected.combat,
			seafaring: selected.seafaring,
			speed: selected.speed
		}
		try {
			var currentSelected = $(els.crew.selected)[0].children;
			status.morale = currentSelected[4].innerText.split('Mo')[0];
			status.combat = currentSelected[5].innerText.split('Co')[0];
			status.seafaring = currentSelected[6].innerText.split('Se')[0];
			status.speed = currentSelected[7].innerText.split('Sp')[0];
		} catch(er) {
		}
		var frag = elfrag(
			eldiv('title', {tag:'span'}, ['Compare']),
			eldiv('name', {tag:'span'}, [selected.name]),
			eldiv('crew '+selected.type),
			eldiv('level', ['Level '+selected.level]),
			eldiv('stat morale' + (status.morale == selected.morale ? '' : (status.morale > selected.morale ? ' lower' : ' higher')), [selected.morale, eldiv({tag:'span'}, ['Morale:'])]),
			eldiv('stat combat' + (status.combat == selected.combat ? '' : (status.combat > selected.combat ? ' lower' : ' higher')), [selected.combat, eldiv({tag:'span'}, ['Combat:'])]),
			eldiv('stat seafaring' + (status.seafaring == selected.seafaring ? '' : (status.seafaring > selected.seafaring ? ' lower' : ' higher')), [selected.seafaring, eldiv({tag:'span'}, ['Seafaring:'])]),
			eldiv('stat speed' + (status.speed == selected.speed ? '' : (status.speed > selected.speed ? ' lower' : ' higher')), [selected.speed, eldiv({tag:'span'}, ['Speed:'])]),
			eldiv('traits', {tag:'span'}, [selected.type])
		);
		elput(els.crew.compare, frag)
	}
	this.crewPresetList = function(crewType) {
		var list = [];
			list.push('Select Crew Member');
			for(var a in crewPreset) {
				list.push(crewPreset[a].name);
			}
		return list;
	}
	this.crewTraitList = function(id) {
		var list = [];
			list.push('Select Trait '+id);
			for(var a in trait) {
				list.push(trait[a].name);
			}
		return list;
	}
	this.crewAddUpdate = function(val) {
		var label = val.target[$(val.target).val()].label;
		var crew = me.port.findCrew(label);
		var elBody = box.frame.root.children[0].children[1];
		if(crew) {
			qw('Found Crew', crew);
			$(elBody).children('.crew').attr('class', 'crew '+crew.type);
			$(elBody).children('div').children('.morale').children('input').val(crew.morale);
			$(elBody).children('div').children('.combat').children('input').val(crew.combat);
			$(elBody).children('div').children('.seafaring').children('input').val(crew.seafarring);
			$(elBody).children('div').children('.speed').children('input').val(crew.speed ? crew.speed : 0);
			$(elBody).children('.level').children('input').val(0);
			$(elBody).children('[type~=traits]').children('select#trait1').val(0);
			$(elBody).children('[type~=traits]').children('select#trait2').val(0);
			$(elBody).children('[type~=traits]').children('select#trait3').val(0);
			$(elBody).children('[type~=traits]').children('select#trait4').val(0);
		} else {
			qw('Crew Not Found', label);
			$(elBody).children('.crew').attr('class', 'crew blankcrew');
			$(elBody).children('div').children('.morale').children('input').val(0);
			$(elBody).children('div').children('.combat').children('input').val(0);
			$(elBody).children('div').children('.seafaring').children('input').val(0);
			$(elBody).children('div').children('.speed').children('input').val(0);
			$(elBody).children('.level').children('input').val(0);
			$(elBody).children('[type~=traits]').children('select#trait1').val(0);
			$(elBody).children('[type~=traits]').children('select#trait2').val(0);
			$(elBody).children('[type~=traits]').children('select#trait3').val(0);
			$(elBody).children('[type~=traits]').children('select#trait4').val(0);
		}
	}
	this.crewAddLevel = function(type, captain = false) {
		var level = $('#crewAdd #crewLvl').val();
		if(level == '') level = 0; else level = parseInt(level);
		var crewVal = $('#crewAdd #crewAddName').val();
		if(captain) {
			if((level > 0 && type == 1) || (level < 10 && type == 0)) {
				if(type == 0) {
					$('#crewAdd #crewLvl').val(parseInt(level + 1));
				} else {
					$('#crewAdd #crewLvl').val(parseInt(level - 1));
				}	
			}
			return;
		}
		qw(crewVal);
		var crew = crewPreset[crewVal];
		if(crew) {
			qw(type, crew, level);
			if((level > 0 && type == 1) || (level < 10 && type == 0)) {
				if(type == 0) {
					$('#crewAdd #crewLvl').val(parseInt(level + 1));
				} else {
					$('#crewAdd #crewLvl').val(parseInt(level - 1));
				}	
				var upgrade = crew.levelup.split('');
				qw(upgrade.indexOf("m"), upgrade.indexOf("c"), upgrade.indexOf("s"));
				if(upgrade.indexOf("m") > -1)
					if(type == 0)
						$('#crewAdd input#morale').val(parseInt(parseInt($('#crewAdd input#morale').val()) + 50));
					else if(type == 1)
						$('#crewAdd input#morale').val(parseInt(parseInt($('#crewAdd input#morale').val()) - 50));
				if(upgrade.indexOf("c") > -1)
					if(type == 0)
						$('#crewAdd input#combat').val(parseInt(parseInt($('#crewAdd input#combat').val()) + 50));
					else
						$('#crewAdd input#combat').val(parseInt(parseInt($('#crewAdd input#combat').val()) - 50));
				if(upgrade.indexOf("s") > -1)
					if(type == 0)
						$('#crewAdd input#seafarring').val(parseInt(parseInt($('#crewAdd input#seafarring').val()) + 50));
					else
						$('#crewAdd input#seafarring').val(parseInt(parseInt($('#crewAdd input#seafarring').val()) - 50));
			}
		}
	}
	this.sortType = function(type) {
		if(type == 'ram') {
			return ['combat'];
		} else if(type == 'figure') {
			return ['morale'];
		} else if(type == 'deckitem') {
			return ['morale', 'combat', 'seafaring'];
		} else if(type == 'hull') {
			return ['morale', 'combat', 'seafaring'];
		} else if(type == 'shipwright') {
			return [''];
		}

	}
	this.upgrade = function(type, title, list = false) {
		var inner = null;
		var frag = elfrag(
			eldiv('headerTitle', [title]),
			inner = eldiv('inner')
		);
		if(type == 'options') {
			var rows = {minCrew: {text: "Minimum Crew",tooltip: "Calculate using minimum crew values."}, hideUnused: {text: "Hide Upgrades",tooltip: "Show/Hide depricated ship upgrades from lists"}, showNext: {text: "Show Next",tooltip: "Show/Hide next best ship upgrades too purchase"}, prompt: {text: "Prompts",tooltip: "Show/Hide confirmation boxes"}};
			for(var a in rows) {
				var curU = rows[a];
				if(!curU) continue;
				var optionRow = eldiv('row borderImage', [
					eldiv('name tooltip', {title: curU.tooltip}, [curU.text]),
					eldiv('options', [
						eldiv('option', [
							eldiv({tag:'input', type: 'checkbox', name: a, id: a, checked: setting(a)}),
							eldiv({tag:'label', for: a})
						])
					])
				]);
				inner.appendChild(optionRow);
			}

		} else if(type == 'effectBonus') {
			for(var a in portupgrades) {
				var curU = portupgrades[a];
				if(!curU) continue;
				if(!type.includes(curU.type)) continue;
				var options = null;
				var row = eldiv('row borderImage', [
					eldiv('name', [curU.name]),
					options = eldiv('options')
				]);
				for(var b in curU.bonus) {
					var bonus = curU.bonus[b];
					var curUBonus = me.port.getUpgrade(curU.type);
					var attr = {tag:'input', type:'radio', name: a, id: a+b, value: bonus}
					//qw('curUBonus', curUBonus);
					if(curUBonus && curUBonus.includes(curU.name+':'+bonus))
						attr.checked = true;	
					var container = eldiv('option', [
						eldiv(attr),
						eldiv({tag:'label', for: a+b}, [bonus+'%'])
					]);
					options.appendChild(container);
				}
				row.appendChild(options);
				inner.appendChild(row);
			}
		} else {
			if( typeof type === 'string' ) {
	    		type = [type];
			}
			for(var z in type) {
				//qw(title, type[z]);
				var calcArray = calc.getBestArray(type[z], me.sortType(type[z]), setting('showNext'));
				if(list) {
					calcArray = list;
				}
				for(var a in portupgrades) {
					var curU = portupgrades[a];
					if(!curU) continue;
					if(curU.type != type[z]) continue;
					//qw('PortUpgrades', portupgrades[a]);
					//qw(calcArray, curU.name);
					if(!calcArray.includes(curU.name) && setting('hideUnused')) continue
					//qw(type, curU);
					var purchased = false;
						//qw('Upgrades:', curU.type, 'pCrew', pCrew.upgrades[curU.type])
						if(pCrew.getUpgrade(curU.type).includes(curU.name)) {
							purchased = true;
						}
						upgradeRow = eldiv('row borderImage', {id:a}, [
							eldiv('name',{title: 'Morale: '+curU.morale+' Combat:  '+curU.combat+' Seafaring: '+curU.seafaring+' '}, [curU.name]), 
							eldiv('status '+(purchased ? 'check' : 'lock'))
						]);
					if(list) {
						var upgradeRow = eldiv('row borderImage', {id:a}, [
							eldiv('name', [curU.name])
						]);
					}
					inner.appendChild(upgradeRow);	
				}
			}
		}
		return frag;
	};
	
	this.setCalcClick = function() {
		$( ".crewlist .crew").on("click", function() {
			box = promptbox2({ title: 'Force Crew Member', id: 'forceCrew', width: 230, stylesheets: [], style: popupFrame}, [{t:'custom', dom: me.forceCrew($(this).attr('id'), ($(this).attr('crewId') ? $(this).attr('crewId') : -1))}]);
			setTooltips('.popuptooltip');
			qw(box);
			
		});
		$( "i.edit").on("click", function() {
			calc.editSet();
		});
		$('.headerTitle').on('click', function() {
			var thisHeader = $(this);
			var thisUpgrade = thisHeader.parent();
			if(thisUpgrade.hasClass('collapse')) {
				if(thisUpgrade.hasClass('hide')) 
					thisUpgrade.removeClass('hide');
				else 
					thisUpgrade.addClass('hide');
			}
		});
		$(".row").on("click", function() {
			var click = this;
			if($(click).children('.status').hasClass('check')) {
				qw('here', click);
				if(setting('prompt')) {
					var fakepopupdiv = document.createElement('div');
					fakepopupdiv.className = 'fakePopupBorder';
					$('body').append(fakepopupdiv);
					var box = promptbox2({ width: 200, title: "Are You Sure?", style: "fakepopup", stylesheets: [] }, [{t:'text', text: 'Are you sure you want too remove '+'?'}, {t:'br'}, { t:'h/11'}, { t:'button:yes',text: 'Yes'}, {t:'button:no',text: 'No'}]);
					box.no.onclick = function() {
						$('.fakePopupBorder').remove();
						box.frame.close();
					}
					box.yes.onclick = function() {
						$('.fakePopupBorder').remove();
						me.draw();
						box.frame.close();
					}
				} else {
					me.draw();
					me.setCalcClick();
				}
			}
		});
	}

	this.forceCrew = function(type, crewId = -1) {
		var position = -1;
		if(type.includes('cap')) {
			position = 0;
			type = 'captain';
		} else if(type.includes('crew')) {
			position = type.substr(4);
			type = 'crew';
		}
		qw(type, position);
		var crewList = null;
		var container = elfrag(
			eldiv('message', ['Choose a crew member to force for calculation']),
			crewList = eldiv('crewlist'),
			eldiv('nisbutton button', {id:'addCrew', onclick: function() {  }}, ['Force']),
			eldiv('nisbutton button', {style: crewId != -1 ? '' : 'display: none', id:'deleteCrew', onclick: function() {  box.frame.close(); }}, ['Delete']),
			eldiv('nisbutton button', {id:'cancelCrew', onclick: function() { box.frame.close(); }}, ['Cancel'])
		);
		var list = me.port.getCrew(type);
		for(var a in list) {
			crewList.appendChild(eldiv('crew '+ list[a].type +' popuptooltip', {id:  type+'-'+a+'force', 'data-tooltip-content': type+'-'+a}));
		}		
		return container;
	}
	this.drawCalc = function() {
		var frag = elfrag(eldiv({id:'voyage'}, [
			eldiv('nisbutton', {id:'findVoyage', onclick: function() { findVoyages(this, {title: '#voyage .voyageBody .title input', morale: '#voyage .voyageBody .stats .stat.morale input', combat: '#voyage .voyageBody .stats .stat.combat input', seafaring: '#voyage .voyageBody .stats .stat.seafaring input'});}}, ['Find Selected Voyage']),
			eldiv('voyageBody', [
				eldiv('title', [
					eldiv({tag: 'input', type: 'text', name: 'title', disabled: '', placeholder: 'Voyage Tittle'})
				]),
				eldiv('success', [
					eldiv({tag: 'span'}, ['Success:']), 
					els.calc.success = eldiv({tag:'perc', id: 'success'}, ['0%'])
				]),
				els.calc.edit = eldiv('fa fa-pencil-square-o edit tooltip', {tag: 'i', title: 'Manually enter Voyage stats', 'aria-hidden': true}),
				eldiv('hr'),
				eldiv('stats', [
					eldiv('stat morale', [
						eldiv({tag:'span'}, ['Morale:']),
						els.calc.moraleInput = eldiv({tag:'input', type: 'number', name: 'morale', id:'morale', placeholder: 0, disabled: ''})
					]),
					eldiv('stat combat', [
						eldiv({tag:'span'}, ['Combat:']),
						els.calc.combatInput = eldiv({tag:'input', type: 'number', name: 'combat', id:'combat', placeholder: 0, disabled: ''})
					]),
					eldiv('stat seafaring', [
						eldiv({tag:'span'}, ['Seafaring:']),
						els.calc.seafaringInput = eldiv({tag:'input', type: 'number', name: 'seafaring', id:'seafaring', placeholder: 0, disabled: ''})
					])
				]),
				eldiv('nisbutton', {id:'calculate', onclick: function() { 
					calc.calculate(
						els.calc.moraleInput.value,
						els.calc.combatInput.value,
						els.calc.seafaringInput.value
					); 
				}}, ['Calculate']),
				eldiv('crewlist', [
					els.calc.crewCap = eldiv('crew blankcaptain tooltip', {id: 'cap', title: 'Force Captain for Calculation'}),
					els.calc.crewCrew1 = eldiv('crew blankcrew tooltip', {id: 'crew1', title: 'Force Crew member for Calculation'}),
					els.calc.crewCrew2 = eldiv('crew blankcrew tooltip', {id: 'crew2', title: 'Force Crew member for Calculation'}),
					els.calc.crewCrew3 = eldiv('crew blankcrew tooltip', {id: 'crew3', title: 'Force Crew member for Calculation'}),
					els.calc.crewCrew4 = eldiv('crew blankcrew tooltip', {id: 'crew4', title: 'Force Crew member for Calculation'}),
					els.calc.crewCrew5 = eldiv('crew blankcrew tooltip', {id: 'crew5', title: 'Force Crew member for Calculation'})
					
				])
			]),
			eldiv('upgrades', [
				els.calc.upgradeRamFig = eldiv('upgrade collapse u4 scroll', {id:'ramFig'}, [me.upgrade(['ram', 'figure'], 'Ram/FigureHeads')]),
				els.calc.upgradeDeck = eldiv('upgrade collapse u4 scroll', {id:'deck'}, [me.upgrade('deckitem', 'Deck')]),
				els.calc.upgradeHull = eldiv('upgrade collapse u4 scroll', {id:'hull'}, [me.upgrade('hull', 'Hull')]),
				els.calc.upgradeShipWright = eldiv('upgrade collapse u4 scroll', {id:'shipwright'}, [me.upgrade('shipwright', 'Ship Wright')]),
				els.calc.upgradeEffectBonus = eldiv('upgrade collapse u3', {id:'effectBonus'}, [me.upgrade('effectBonus', 'Effect Bonus')]),
				els.calc.upgradeOptions = eldiv('upgrade collapse u2', {id:'options'}, [me.upgrade('options', 'Options')]),
			])
		]));
		return frag;
	}
}
