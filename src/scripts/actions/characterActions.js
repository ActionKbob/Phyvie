export function changeDnD5eView( _view )
{
	return {
		type : 'CHARACTER_CREATOR_CHANGE_VIEW',
		payload : _view
	}
}

export function setCharacterRace( _race )
{
	return {
		type : 'SET_CHARACTER_RACE',
		payload : _race
	};
}
