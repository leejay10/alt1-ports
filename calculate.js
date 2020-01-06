function Calculate() {
	var me = this;
	this.force = {
		captain: [],
		crew: []
	};
	this.edit = false;
	this.morale = 0;
	this.combat = 0;
	this.seaferring = 0;
	this.shipwright = null;
	this.ram = [];
	this.deck = [];
	this.hull = [];
	this.pCrew = null;
	this.init = function(pCrew) {
		this.pCrew = pCrew;
		this.force = {
			captain: [],
			crew: []
		}
	}
	this.editSet = function() {
		me.edit = !me.edit;
		if(me.edit) {
			$('.voyageBody').children('.title').children('input').removeAttr('disabled');
			$('.voyageBody').children('.stats').children('.stat').each(function() {
				$(this).children('input').removeAttr('disabled');
			});
		} else {
			$('.voyageBody').children('.title').children('input').attr('disabled', '');
			$('.voyageBody').children('.stats').children('.stat').each(function() {
				$(this).children('input').attr('disabled', '');
			});
		}
	}
	this.sum = 0;
	this.arraySum = function(arr) {
		for (var i = 0; i < arr.length; i++) {
			qw('ArraySum: ', typeof arr[i], arr[i]);
			if(typeof arr[i] === 'string') {
				qw('Upgrade', me.getUpgrade(arr[i]));
			}
			if (arr[i] instanceof Array || arr[i] instanceof Object) { 
		    	this.arraySum(arr[i]);
		    	continue;
		    }
		    	
		}
		qw('');
	}
	this.getUpgrade = function(name) {
		qw('getUpgrade', name);
		for(var a in portupgrades) {
			if(portupgrades[a].name == name)
				return portupgrades[a];
		}
		return null;
	}
	this.calculate = function(mWant,cWant,sWant) {
		if(mWant == '' && cWant == '' && sWant == '') {
			message("Error", "Morale, Combat, Seaferring want values are 0. Please specify the voyage requirements.", "Ok");
			return;
		}
		if(mWant == '') mWant = 0;
		if(cWant == '') cWant = 0;
		if(sWant == '') sWant = 0;
		
		me.crewForceAmount = me.force.crew.length;
		me.morale = mWant;
		me.combat = cWant;
		me.seaferring = sWant;
		me.ram = me.getBestArray(['ram', 'figure'], ['morale', 'combat'], false);
		me.deck = me.getBestArray(['deckitem'], ['morale', 'combat', 'seafaring'], false);
		me.hull = me.getBestArray(['hull'], ['morale', 'combat', 'seafaring'], false);
		me.shipwright = me.getBestArray(['shipwright'], [''], false);
		var crew = {
			captain: me.pCrew.captain,
			crew: me.pCrew.crew
		};
		this.arraySum([me.ram,me.deck,me.deck,me.hull,me.shipwright,crew.captain, crew.crew, crew.crew, crew.crew, crew.crew, crew.crew]);
		 qw(this.sum);
		
		/*var finalm = 0;
		var finalc = 0;
		var finals = 0;
		var finalram = 0;
		var finaldecka = 0;
		var finaldeckb = 0;
		var finalhull = 0;
		var finalcap = 0;
		var finalcrew1 = 0;
		var finalcrew2 = 0;
		var finalcrew3 = 0;
		var finalcrew4 = 0;
		var finalcrew5 = 0;
		
		var highest = 0;
		
		var crewRating = 0; 
		var minCrewRating = 100000;
		var minfinalram = 0;
		var minfinaldecka = 0;
		var minfinaldeckb = 0;
		var minfinalhull = 0;
		var minfinalcap = 0;
		var minfinalcrew1 = 0;
		var minfinalcrew2 = 0;
		var minfinalcrew3 = 0;
		var minfinalcrew4 = 0;
		var minfinalcrew5 = 0;
		var minfinalm = 0;
		var minfinalc = 0;
		var minfinals = 0;
		var minperc = 0;
		//todo trait shit
				
		//Stat Bonuses
		var bonus = {
			morale: 1,
			combat: 1,
			seaferring: 1
		};
		if (setting('debug')) qw('bonus Start', bonus);
		
		//shipwright Bonus
		if(me.shipwright) {
			if (setting('debug')) qw(me.shipwright,portupgrades.shipwright[me.shipwright]);
			bonus.morale = portupgrades.shipwright[me.shipwright].Morale;
			bonus.combat = portupgrades.shipwright[me.shipwright].Combat;
			bonus.seaferring = portupgrades.shipwright[me.shipwright].Seaferring;
		}
		if (setting('debug')) qw('bonus after Shipwright', bonus);
		
		//Effect Bonus
		for(var a in me.pCrew.upgrades.effectbonus) {
			if (setting('debug')) qw(a,me.pCrew.upgrades.effectbonus[a]);
		}
		bonus.morale = (bonus.morale + (me.pCrew.upgrades.effectbonus.bMorale.bonus[me.pCrew.upgrades.effectbonus.bMorale.value] / 100)).toFixed(2);
		bonus.combat = (bonus.combat + (me.pCrew.upgrades.effectbonus.bCombat.bonus[me.pCrew.upgrades.effectbonus.bCombat.value] / 100)).toFixed(2);
		bonus.seaferring = (bonus.seaferring + (me.pCrew.upgrades.effectbonus.bSeaferring.bonus[me.pCrew.upgrades.effectbonus.bSeaferring.value] / 100)).toFixed(2);
		if (setting('debug')) qw('bonus after Effect Bonus', bonus);
		if (setting('debug')) qw('Force', me.force);
		//Loop
		var loopRam = {m:0, c:0, s:0};
		var loopDeck = {m:0, c:0, s:0};
		var loopHull = {m:0, c:0, s:0};
		if (setting('debug')) qw('Loop Start: ');
		var highest = 0;
		*/
		//Loop Ram
		/*for (var a in me.ram) {
		    var thisRam = shipupgrades.ramfigure[me.ram[a]];
		    var loopRam = {
		        m: 0,
		        c: 0,
		        s: 0
		    };
		    if (me.ram[a]) {
		        loopRam.m = thisRam.morale;
		        loopRam.c = thisRam.combat;
		        loopRam.s = thisRam.seaferring;
		        if (setting('debug')) qw('	Loop Ram:', a, thisRam);
		        if (setting('debug')) qw('		loopRam', loopRam);
		        thisRam = a;
		        //Loop Deck
		        for (var b in me.deck) {
		            var thisDeck1 = shipupgrades.deckitem[me.deck[b]];
		            var loopDeck1 = {
		                m: 0,
		                c: 0,
		                s: 0
		            };
		            if (me.deck[b]) {
		                loopDeck1.m = loopRam.m + thisDeck1.morale;
		                loopDeck1.c = loopRam.c + thisDeck1.combat;
		                loopDeck1.s = loopRam.s + thisDeck1.seaferring;
		                if (setting('debug')) qw('		Loop Deck1:', b, thisDeck1, 'Ram:', a, loopRam);
		                if (setting('debug')) qw('			loopDeck1', loopDeck1);
		                thisDeck1 = b;
		                // Loop Deck 2
		                for (var c in me.deck) {
		                    var thisDeck2 = shipupgrades.deckitem[me.deck[c]];
		                    var loopDeck2 = {
		                        m: 0,
		                        c: 0,
		                        s: 0
		                    };
		                    if (me.deck[c]) {
		                        loopDeck2.m = loopDeck1.m + thisDeck2.morale;
		                        loopDeck2.c = loopDeck1.c + thisDeck2.combat;
		                        loopDeck2.s = loopDeck1.s + thisDeck2.seaferring;
		                        if (setting('debug')) qw('			Loop Deck2:', c, thisDeck2, 'Deck1', b, loopDeck1);
		                        if (setting('debug')) qw('				loopDeck2', loopDeck2);
		                        thisDeck2 = c;
		                        //Loop Hull
		                        for (var d in me.hull) {
		                            var thisHull = shipupgrades.hull[me.hull[d]];
		                            var loopHull = {
		                                m: 0,
		                                c: 0,
		                                s: 0
		                            };
		                            if (me.hull[d]) {
		                                loopHull.m = loopDeck2.m + thisHull.morale;
		                                loopHull.c = loopDeck2.c + thisHull.combat;
		                                loopHull.s = loopDeck2.s + thisHull.seaferring;
		                                if (setting('debug')) qw('				Loop Hull:', d, thisHull, 'Deck2', d, loopDeck2);
		                                if (setting('debug')) qw('					loopHull', loopHull);
		                                thisHull = d;
		                                //Loop Captain
		                                for (var e in crew.captain) {
		                                    var forced = false;
		                                    if (me.force.captain.length == 1) {
		                                        forced = true;
		                                        if (e != me.force.captain[0]) continue;
		                                    }
		                                    var thisCaptain = crew.captain[e];
		                                    if (thisCaptain.S != '') continue;
		                                    var loopCaptain = {
		                                        m: 0,
		                                        c: 0,
		                                        s: 0
		                                    };
		                                    if (thisCaptain) {
		                                        loopCaptain.m = loopHull.m + thisCaptain.M;
		                                        loopCaptain.c = loopHull.c + thisCaptain.C;
		                                        loopCaptain.s = loopHull.s + thisCaptain.SF;
		                                        if (setting('debug')) qw('					Loop Captain:', e, forced, thisCaptain, 'hull', d, loopHull);
		                                        if (setting('debug')) qw('						loopCaptain', loopCaptain);
		                                        thisCaptain = e;
		                                        //Loop Crew1
		                                        for (var f in crew.crew) {
		                                            var forced = false;
		                                            if (me.force.crew.length == 1) {
		                                                forced = true;
		                                                if (f != me.force.crew[0]) continue;
		                                            }
		                                            var thisCrew1 = crew.crew[f];
		                                            if (thisCrew1.S != '') continue;
		                                            var loopCrew1 = {
		                                                m: 0,
		                                                c: 0,
		                                                s: 0
		                                            };
		                                            if (thisCrew1) {
		                                                loopCrew1.m = loopCaptain.m + thisCrew1.M;
		                                                loopCrew1.c = loopCaptain.c + thisCrew1.C;
		                                                loopCrew1.s = loopCaptain.s + thisCrew1.SF;
		                                                if (setting('debug')) qw('						Loop Crew1:', d, forced, thisCrew1, 'captain', d, thisCaptain);
		                                                if (setting('debug')) qw('							loopCrew1', loopCrew1);
		                                                thisCrew1 = f;
		                                                //Loop Crew2
		                                                for (var g in crew.crew) {
		                                                    var forced = false;
		                                                    if (me.force.crew.length == 2) {
		                                                        forced = true;
		                                                        if (g != me.force.crew[1]) continue;
		                                                    }
		                                                    var thisCrew2 = crew.crew[g];
		                                                    if (thisCrew2.S != '') continue;
		                                                    if (thisCrew1 == g) continue;
		                                                    var loopCrew2 = {
		                                                        m: 0,
		                                                        c: 0,
		                                                        s: 0
		                                                    };
		                                                    if (thisCrew2) {
		                                                        loopCrew2.m = loopCrew1.m + thisCrew2.M;
		                                                        loopCrew2.c = loopCrew1.c + thisCrew2.C;
		                                                        loopCrew2.s = loopCrew1.s + thisCrew2.SF;
		                                                        if (setting('debug')) qw('							Loop Crew2:', d, forced, thisCrew2, 'loopCrew1', d, loopCrew1);
		                                                        if (setting('debug')) qw('								loopCrew2', loopCrew2);
		                                                        thisCrew2 = g;
		                                                        //Loop Crew3
		                                                        for (var h in crew.crew) {
		                                                            var forced = false;
		                                                            if (me.force.crew.length == 3) {
		                                                                forced = true;
		                                                                if (h != me.force.crew[2]) continue;
		                                                            }
		                                                            var thisCrew3 = crew.crew[h];
		                                                            if (thisCrew3.S != '') continue;
		                                                            if (thisCrew1 == h || thisCrew2 == h) continue;
		                                                            var loopCrew3 = {
		                                                                m: 0,
		                                                                c: 0,
		                                                                s: 0
		                                                            };
		                                                            if (thisCrew3) {
		                                                                loopCrew3.m = loopCrew2.m + thisCrew3.M;
		                                                                loopCrew3.c = loopCrew2.c + thisCrew3.C;
		                                                                loopCrew3.s = loopCrew2.s + thisCrew3.SF;
		                                                                if (setting('debug')) qw('								Loop Crew3:', d, forced, thisCrew3, 'loopCrew2', d, loopCrew2);
		                                                                if (setting('debug')) qw('									loopCrew3', loopCrew3);
		                                                                thisCrew3 = h;
		                                                                //Loop Crew4
		                                                                for (var i in crew.crew) {
		                                                                    var forced = false;
		                                                                    if (me.force.crew.length == 4) {
		                                                                        forced = true;
		                                                                        if (i != me.force.crew[3]) continue;
		                                                                    }
		                                                                    var thisCrew4 = crew.crew[i];
		                                                                    if (thisCrew4.S != '') continue;
		                                                                    if (thisCrew1 == i || thisCrew2 == i || thisCrew3 == i) continue;
		                                                                    var loopCrew4 = {
		                                                                        m: 0,
		                                                                        c: 0,
		                                                                        s: 0
		                                                                    };
		                                                                    if (thisCrew4) {
		                                                                        loopCrew4.m = loopCrew3.m + thisCrew4.M;
		                                                                        loopCrew4.c = loopCrew3.c + thisCrew4.C;
		                                                                        loopCrew4.s = loopCrew3.s + thisCrew4.SF;
		                                                                        if (setting('debug')) qw('									Loop Crew4:', d, forced, thisCrew4, 'loopCrew3', d, loopCrew3);
		                                                                        if (setting('debug')) qw('										loopCrew4', loopCrew4);
		                                                                        thisCrew4 = i;
		                                                                        //Loop Crew5
		                                                                        for (var j in crew.crew) {
		                                                                            var forced = false;
		                                                                            if (me.force.crew.length == 5) {
		                                                                                forced = true;
		                                                                                if (j != me.force.crew[4]) continue;
		                                                                            }
		                                                                            var thisCrew5 = crew.crew[j];
		                                                                            if (thisCrew5.S != '') continue;
		                                                                            if (thisCrew1 == j || thisCrew2 == j || thisCrew3 == j || thisCrew4 == j) continue;
		                                                                            var loopCrew5 = {
		                                                                                m: 0,
		                                                                                c: 0,
		                                                                                s: 0
		                                                                            };
		                                                                            var perc = 0;
		                                                                            var per = {
		                                                                                m: 0,
		                                                                                c: 0,
		                                                                                s: 0
		                                                                            };
		                                                                            var morale = 0;
		                                                                            var combat = 0;
		                                                                            var seaferring = 0;
		                                                                            if (thisCrew5) {
		                                                                                loopCrew5.m = loopCrew4.m + thisCrew5.M;
		                                                                                loopCrew5.c = loopCrew4.c + thisCrew5.C;
		                                                                                loopCrew5.s = loopCrew4.s + thisCrew5.SF;
		                                                                                if (setting('debug')) qw('										Loop Crew5:', d, forced, thisCrew5, 'loopCrew4', d, loopCrew4);
		                                                                                if (setting('debug')) qw('											loopCrew5', loopCrew5);
		                                                                             	thisCrew5 = j;
		                                                                                if (setting('debug')) qw('Wants', 'Morale', me.morale, 'Combat', me.combat, 'Seaferring', me.seaferring);
		                                                                                if (setting('debug')) qw('Final Calculation Before Bonuses', 'Morale', loopCrew5.m, 'Combat', loopCrew5.c, 'Seaferring', loopCrew5.s);
		                                                                                if (setting('debug')) qw('Bonus To Apply', 'Morale', bonus.morale, 'Combat', bonus.combat, 'Seaferring', bonus.seaferring);
		                                                                                //Todo Add in trait shit
		                                                                                var morale = loopCrew5.m * bonus.morale;
		                                                                                var combat = loopCrew5.c * bonus.combat;
		                                                                                var seaferring = loopCrew5.s * bonus.seaferring;
		                                                                                if (setting('debug')) qw('After Bonus', 'Morale', morale, 'Combat', combat, 'Seaferring', seaferring);
		                                                                                if (morale != 1) {
		                                                                                    if (morale > 0) {
		                                                                                        per.m = morale / me.morale * 100;
		                                                                                    }
		                                                                                } else {
		                                                                                    per.m = 9999;
		                                                                                }
		                                                                                if (combat != 1) {
		                                                                                    if (combat > 0) {
		                                                                                        per.c = combat / me.combat * 100;
		                                                                                    }
		                                                                                } else {
		                                                                                    per.c = 9999;
		                                                                                }
		                                                                                if (seaferring != 1) {
		                                                                                    if (seaferring > 0) {
		                                                                                        per.s = seaferring / me.seaferring * 100;
		                                                                                    }
		                                                                                } else {
		                                                                                    per.s = 9999;
		                                                                                }
		                                                                                perc = Math.min(per.m, per.c, per.s)
		                                                                            }
		                                                                            if (perc > highest) {
		                                                                                highest = perc;
		                                                                                finalram = thisRam;
		                                                                                finaldecka = thisDeck1;
		                                                                                finaldeckb = thisDeck2;
		                                                                                finalhull = thisHull;
		                                                                                qw(thisHull);
		                                                                                finalcap = thisCaptain;
		                                                                                finalcrew1 = thisCrew1;
		                                                                                finalcrew2 = thisCrew2;
		                                                                                finalcrew3 = thisCrew3;
		                                                                                finalcrew4 = thisCrew4;
		                                                                                finalcrew5 = thisCrew5;
		                                                                                finalm = morale;
		                                                                                finalc = combat;
		                                                                                finals = seaferring;
		                                                                                //Set crew Icons
		                                                                            }
		                                                                            crewRating = ((morale - loopHull.m) + (combat - loopHull.c) + (seaferring - loopHull.s));
		                                                                            qw('CrewRating:',crewRating, 'Morale', (morale - loopHull.m), 'Combat', (combat - loopHull.c), 'Seafarring', (seaferring - loopHull.s));
		                                                                            if (perc > 100 && crewRating < minCrewRating) {
		                                                                                minfinalram = thisRam;
		                                                                                minfinaldecka = thisDeck1;
		                                                                                minfinaldeckb = thisDeck2;
		                                                                                minfinalhull = thisHull;
		                                                                                qw(thisHull);
		                                                                                minfinalcap = thisCaptain;
		                                                                                minfinalcrew1 = thisCrew1;
		                                                                                minfinalcrew2 = thisCrew2;
		                                                                                minfinalcrew3 = thisCrew3;
		                                                                                minfinalcrew4 = thisCrew4;
		                                                                                minfinalcrew5 = thisCrew5;
		                                                                                minfinalm = morale;
		                                                                                minfinalc = combat;
		                                                                                minfinals = seaferring;
		                                                                                minCrewRating = crewRating;
		                                                                            }
		                                                                        }
		                                                                    }
		                                                                }
		                                                            }
		                                                        }
		                                                    }
		                                                }
		                                            }
		                                        }
		                                    }
		                                }
		                            }
		                        }
		                    }
		                }
		            }
		        }
		    }
		}*/
		
		
		/*if(highest > 100) {
			highest = 100;
		}
		qw('final', finalhull );
		    
		if(setting('minCrew') && highest == 100) {
			finalram = minfinalram;
			finaldecka = minfinaldecka;
			finaldeckb = minfinaldeckb;
			finalhull = minfinalhull;
			qw('minfinal', finalhull );
		                                                                                
			finalcap = minfinalcap;
			finalcrew1 = minfinalcrew1;
			finalcrew2 = minfinalcrew2;
			finalcrew3 = minfinalcrew3;
			finalcrew4 = minfinalcrew4;
			finalcrew5 = minfinalcrew5;
			finalm = minfinalm;
			finalc = minfinalc;
			finals = minfinals;
		}
		qw('');
		qw('highest', highest, 'minCrew', setting('minCrew'), 'morale', me.morale, finalm, 'combat', me.combat, finalc, 'seaferring', me.seaferring, finals, 'minCrewRating', minCrewRating);
		elid('cap').setAttribute('class', 'crew '+me.pCrew.getCaptain(finalcap).T+' tooltip');
		elid('cap').setAttribute('data-tooltip-content', 'captain-'+finalcap);
		elid('crew1').setAttribute('class', 'crew '+me.pCrew.getCrew(finalcrew1).T+' tooltip');
		elid('crew1').setAttribute('data-tooltip-content', 'crew-'+finalcrew1);
		elid('crew2').setAttribute('class', 'crew '+me.pCrew.getCrew(finalcrew2).T+' tooltip');
		elid('crew2').setAttribute('data-tooltip-content', 'crew-'+finalcrew2);
		elid('crew3').setAttribute('class', 'crew '+me.pCrew.getCrew(finalcrew3).T+' tooltip');
		elid('crew3').setAttribute('data-tooltip-content', 'crew-'+finalcrew3);
		elid('crew4').setAttribute('class', 'crew '+me.pCrew.getCrew(finalcrew4).T+' tooltip');
		elid('crew4').setAttribute('data-tooltip-content', 'crew-'+finalcrew4);
		elid('crew5').setAttribute('class', 'crew '+me.pCrew.getCrew(finalcrew5).T+' tooltip');
		elid('crew5').setAttribute('data-tooltip-content', 'crew-'+finalcrew5);
		elid('calculate').textContent = 'Clear';
		elid('calculate').setAttribute('onclick', 'newCalc();');
		elid('success').innerText = parseInt(highest)+'%';
		elid('morale').value = parseInt(finalm);
		elid('combat').value = parseInt(finalc);
		elid('seaferring').value = parseInt(finals);
		elput(elid('ramFig'), portUI.drawRamFig([finalram]));
		elid('ramFig').className = 'upgrade collapse first calc';
		elput(elid('deck'), portUI.drawDeck([finaldecka,finaldeckb]));
		elid('deck').className = 'upgrade collapse second calc';
		elput(elid('hull'), portUI.drawHull([finalhull]));
		elid('hull').className = 'upgrade collapse first calc';
		elid('shipwright').remove();
		elid('effectBonus').remove();
		elid('options').remove();
		$('i.edit').remove();
		$('.tooltip').tooltipster('destroy');
		swapElements($('.upgrades').children('.upgrade'), 0, 1);
		setTooltips();*/

	}
	this.getBestArray = function(type, sort, shownext) {
		var returnArray = [];
		if( typeof type === 'string' ) {
	    		type = [type];
			}
			
		for(var z in type) {
			//qw('getArray', me.pCrew.getUpgrade(type[z]), type[z], sort);
			for(var y in sort) {
			var currentBest = null;
			var count = 0;
			try {
				Object.keys(me.pCrew.getUpgrade(type[z])).reduce(function (p, c) {
					var curU = null;
					for(var b in portupgrades) {
						if(portupgrades[b].type != type[z]) continue;
						if(portupgrades[b].name != me.pCrew.upgrades[type[z]][c]) continue;
						curU = portupgrades[b];
					}
				  return p.concat({ id: c, name: me.pCrew.getUpgrade(type[z], c), upgrade: curU});
				}, []).sort(function (a, b) {
					return a.upgrade[sort[y]] < b.upgrade[sort[y]];
				}).forEach(function (el) {
					if(el.upgrade[sort[y]] == 0)
						return;
					if(count == 0) {
						returnArray.push(el.name);
						currentBest = el.name;
					}
					count++;
				});
			} catch(ex) {
				//qw('No' + type[z] + ' upgrades!', ex);
			}
			if(shownext) {
				var upgrades = me.upgradeLowestHighest(type[z], sort[y], currentBest)
				//qw(type, currentBest,": ", sort[y], upgrades, upgrades.length);
				if(currentBest == null)
					returnArray.push(upgrades[upgrades.length - 1]);
				else if(currentBest != null ) 
					returnArray.push(upgrades[upgrades.indexOf(currentBest) - 1]);
			}
		}
		}
		//qw('');
		return returnArray;
	}
	this.upgradeLowestHighest = function(type, sort, currentBest) {
		var returnArray = [];
		var secondary = [];
		for(var b in portupgrades) {
			if(portupgrades[b].type != type) continue;
			if(portupgrades[b][sort] == 0) continue;
			returnArray.push(portupgrades[b]);
			secondary.push(portupgrades[b].name);
		}
		if(sort.length == 0) return secondary;
		var sortArray = [];
		//qw(returnArray);
		Object.keys(returnArray).reduce(function (p, c) {
			return p.concat(returnArray[c]);
		}, []).sort(function (a, b) {
			//qw(a,b);
			return a[sort] < b[sort];
		}).forEach(function (el) {
			sortArray.push(el.name);
		});	
		return sortArray;
	}
	this.setForce = function(type, crew) {
		this.force[type].push(crew);
	}
	
	
}