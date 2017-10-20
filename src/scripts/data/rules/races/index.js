import human from 'data/rules/races/human';

module.exports = {
	keys : [ 'dragonborn', 'dwarf', 'elf', 'halfling', ...human.keys ],
	values : {
		'dragonborn' : {
			id : 'dragonborn',
			displayName : 'Dragonborn'
		},
		'dwarf' : {
			id : 'dwarf',
			displayName : 'Dwarf'
		},
		'elf' : {
			id : 'elf',
			displayName : 'Elf'
		},
		'halfling' : {
			id : 'halfling',
			displayName : 'Halfling'
		},
		...human.values
	}
}
