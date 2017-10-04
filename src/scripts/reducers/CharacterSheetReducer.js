import characterSheet from 'data/characterSheet';

export default function reducer( state = {
	view : 1
}, action )
{

	switch( action.type )
	{
		case 'CHARACTERSHEET_CHANGE_VIEW':
			return { ...state, view : action.payload };

		case 'CHARACTERSHEET_LOAD_CHARACTER':
			return { ...state, character : characterSheet };
	}

	return state;
}
