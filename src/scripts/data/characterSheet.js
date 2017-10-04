module.exports = {

	values : {
		characterName : 'Test Nameington',
		playerName : 'Kbob'
	},

	selections : [
		{ 
			key : 'race',
			option : {
				key : 'human',
				selections : [
					{
						key : 'subrace',
						value : 'arkaiun'
					},
					{
						key : 'variant',
						value : 'standard-human'
					}
				]
			}
		},

		{ 
			key : 'class',
			option : {
				key : 'barbarian',
				selections : [
					{
						key : 'level',
						value : '1'
					}
				]
			}
		},

		{
			key : 'ability-scores',
			option : {
				key : 'standard-scores',
				selections : [
					{ key : 'str', value : 15 },
					{ key : 'dex', value : 15 },
					{ key : 'con', value : 15 },
					{ key : 'int', value : 15 },
					{ key : 'wis', value : 15 },
					{ key : 'cha', value : 15 }
				]
			}
		}
	]


}
