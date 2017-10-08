module.exports = {
	
	key : 'races',

	options : [
		{
			key : 'human',
			properties : [
				{
					key : 'speed',
					value : 30
				},
				{
					key : 'additional-languages',
					value : 1
				}
			],
			subraces : [
				{
					key : 'ffolk'
				},
				{
					key : 'gur'
				},
				{
					key : 'arkaiun'
				},
				{
					key : 'bedine'
				}
			],
			variants : [
				{
					key : 'standard-human',
					properties : [
						{
							key : 'ability-score-increase',
							value : [
								{ key : 'str', value : 1 },
								{ key : 'dex', value : 1 },
								{ key : 'con', value : 1 },
								{ key : 'int', value : 1 },
								{ key : 'wis', value : 1 },
								{ key : 'cha', value : 1 }
							]
						}
					]
				},
				{
					key : 'variant-human',
					properties : [
						{
							key : 'additional-ability-score-increases',
							value : 2
						}
					]
				}
			]
		},
		{
			key : 'dwarf'
		},
		{
			key : 'elf'
		},
		{
			key : 'dragon-born'
		}
	]

}