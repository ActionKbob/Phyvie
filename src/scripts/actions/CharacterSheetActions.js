export function changeView( _id )
{
	return {
		type : 'CHARACTERSHEET_CHANGE_VIEW',
		payload : _id
	}
}

export function loadCharacter( _file )
{
	return {
		type : 'CHARACTERSHEET_LOAD_CHARACTER',
		payload : _file
	}
}
