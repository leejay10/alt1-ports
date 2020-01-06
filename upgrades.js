var portupgrades = {};
portupgrades = [
	//Effect Bonus
	{
		type: 'effectBonus',
		name: "Ration Pack",
		bonus: [0, 10, 20, 30]
	},	
	{
		type: 'effectBonus',
		name: "Powder Keg",
		bonus: [0, 10, 20, 30]
	},	
	{
		type: 'effectBonus',
		name: "Bottled Cry",
		bonus: [0, 10, 20, 30]
	},
	
	//Shipwright
	{
		type: 'shipwright',
		name: 'Dilapidated',
		morale: 1,
		combat: 1,
		seafaring: 1
	},
	{
		type: 'shipwright',
		name: "Refitted",
		morale: 1.02,
		combat: 1.02,
		seafaring: 1.02
	}, 
	{
		type: 'shipwright',
		name: "Renovated",
		morale: 1.03,
		combat: 1.03,
		seafaring: 1.03
	},
	{
		type: 'shipwright',
		name: "Nautical",
		morale: 1.03,
		combat: 1.03,
		seafaring: 1.05
	},
	{
		type: 'shipwright',
		name: "Warship",
		morale: 1.03,
		combat: 1.05,
		seafaring: 1.03
	},
	{
		type: 'shipwright',
		name: "Luxurious",
		morale: 1.05,
		combat: 1.03,
		seafaring: 1.03
	},
	{
		type: 'shipwright',
		name: "Sleek",
		morale: 1.03,
		combat: 1.03,
		seafaring: 1.03
	},
	{
		type: 'shipwright',
		name: "Ostentatious",
		morale: 1.08,
		combat: 1.05,
		seafaring: 1.05
	}, 
	{
		type: 'shipwright',
		name: "Battleship",
		morale: 1.05,
		combat: 1.08,
		seafaring: 1.05
	},
	{
		type: 'shipwright',
		name: "Maritime",
		morale: 1.05,
		combat: 1.05,
		seafaring: 1.08
	},
	
	//RamFigure
	{
		type: 'ram',
		name: "Weathered Ram",
		morale: 0,
		combat: 50,
		seafaring: 0
	},
	{
		type: 'figure',
		name: "Polished Figurehead",
		morale: 100,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'ram',
		name: "Sturdy Ram",
		morale: 0,
		combat: 100,
		seafaring: 0
	},
	{
		type: 'figure',
		name: "Enchanted Figurehead",
		morale: 200,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'ram',
		name: "Reinforced Ram",
		morale: 0,
		combat: 200,
		seafaring: 0
	},
	{
		type: 'figure',
		name: "Skeletal Figurehead",
		morale: 350,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'ram',
		name: "Armoured Ram",
		morale: 0,
		combat: 350,
		seafaring: 0
	},
	{
		type: 'figure',
		name: "Ghostly Figurehead",
		morale: 500,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'ram',
		name: "Battle Ram",
		morale: 0,
		combat: 500,
		seafaring: 0
	},
	{
		type: 'figure',
		name: "Intrepid Figurehead",
		morale: 600,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'ram',
		name: "War Ram",
		morale: 0,
		combat: 600,
		seafaring: 0
	},
	{
		type: 'figure',
		name: "Inspiring Figurehead",
		morale: 800,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'ram',
		name: "Spitfire Cannon",
		morale: 0,
		combat: 800,
		seafaring: 0
	},
	{
		type: 'figure',
		name: "Figurehead of the Spires",
		morale: 950,
		combat: 0,
		seafaring: 100
	},
	{
		type: 'ram',
		name: "Ram of the Bladewing",
		morale: 0,
		combat: 1100,
		seafaring: 0
	},
	
	//DeckItem
	{
		type: 'deckitem',
		name: "Weathered rigging",
		morale: 0,
		combat: 0,
		seafaring: 100
	},
	{
		type: 'deckitem',
		name: "Small crate of food",
		morale: 100,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Sturdy rigging",
		morale: 0,
		combat: 0,
		seafaring: 200
	},
	{
		type: 'deckitem',
		name: "Large crate of food",
		morale: 200,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Single cannon",
		morale: 0,
		combat: 200,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Entwined rigging",
		morale: 0,
		combat: 0,
		seafaring: 450
	},
	{
		type: 'deckitem',
		name: "Small crate of riches",
		morale: 450,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Cannon x2",
		morale: 0,
		combat: 450,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Oxskin rigging",
		morale: 0,
		combat: 0,
		seafaring: 700
	},
	{
		type: 'deckitem',
		name: "Large crate of riches",
		morale: 700,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Heavy cannon x2",
		morale: 0,
		combat: 700,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Ornate rigging",
		morale: 0,
		combat: 0,
		seafaring: 1000
	},
	{
		type: 'deckitem',
		name: "Eastern artefacts",
		morale: 1000,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Cannon x3",
		morale: 0,
		combat: 1000,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Whaleskin rigging",
		morale: 0,
		combat: 0,
		seafaring: 1200
	},
	{
		type: 'deckitem',
		name: "Eastern treasures",
		morale: 1200,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Cannon x4",
		morale: 0,
		combat: 1200,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Dragonskin rigging",
		morale: 0,
		combat: 0,
		seafaring: 1350
	},
	{
		type: 'deckitem',
		name: "Eastern relics",
		morale: 1350,
		combat: 0,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Heavy cannon x4",
		morale: 0,
		combat: 1350,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Overwhelmingly Large Cannon x4",
		morale: 0,
		combat: 1750,
		seafaring: 0
	},
	{
		type: 'deckitem',
		name: "Bladewing Rigging",
		morale: 0,
		combat: 0,
		seafaring: 2000
	},
	{
		type: 'deckitem',
		name: "Fineglow Lanterns",
		morale: 2000,
		combat: 0,
		seafaring: 0
	},
	
	
	//Hull
	{
		type: 'hull',
		name: "Barnacled hull",
		morale: 50,
		combat: 50,
		seafaring: 100
	},
	{
		type: 'hull',
		name: "Reinforced hull",
		morale: 100,
		combat: 150,
		seafaring: 100
	},
	{
		type: 'hull',
		name: "Sleek hull",
		morale: 100,
		combat: 100,
		seafaring: 150
	},
	{
		type: 'hull',
		name: "Battle hull",
		morale: 200,
		combat: 450,
		seafaring: 200
	},
	{
		type: 'hull',
		name: "Golden hull",
		morale: 450,
		combat: 200,
		seafaring: 200
	},
	{
		type: 'hull',
		name: "Hull of Tides",
		morale: 300,
		combat: 300,
		seafaring: 700
	},
	{
		type: 'hull',
		name: "Armoured hull",
		morale: 300,
		combat: 700,
		seafaring: 300
	},
	{
		type: 'hull',
		name: "Hull of Storms",
		morale: 400,
		combat: 400,
		seafaring: 900
	},
	{
		type: 'hull',
		name: "War Hull",
		morale: 400,
		combat: 900,
		seafaring: 400
	},
	{
		type: 'hull',
		name: "Hull of Glory",
		morale: 1200,
		combat: 500,
		seafaring: 500
	},
	{
		type: 'hull',
		name: "Storm rider hull",
		morale: 500,
		combat: 500,
		seafaring: 1200
	},
	{
		type: 'hull',
		name: "Golden katana hull",
		morale: 500,
		combat: 1400,
		seafaring: 500
	},
	{
		type: 'hull',
		name: "Blazing lantern hull",
		morale: 1400,
		combat: 500,
		seafaring: 500
	},
	{
		type: 'hull',
		name: "Blackwater hull",
		morale: 850,
		combat: 750,
		seafaring: 1700
	},
	{
		type: 'hull',
		name: "Shimmering azure hull",
		morale: 1325,
		combat: 1325,
		seafaring: 1325
	}, 
];
