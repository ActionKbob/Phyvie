module.exports = {

	required : 1,

	options : [
		{
			key : 'barbarian',
			properties : [
				{
					key : 'saving-throws',
					value : [
						'str',
						'con'
					]
				},
				{
					key : 'additional-skills',
					count : 2,
					options : [
						'animal-handling', 
						'athletics',
						'intimidation',
						'nature',
						'perception',
						'survival'
					]
				}
			]
		},
		{
			key : 'bard'
		},
		{
			key : 'cleric'
		},
		{
			key : 'druid'
		},
		{
			key : 'fighter'
		}
	]

}
