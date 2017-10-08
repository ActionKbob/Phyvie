export default function reducer( state = {}, action )
{

	switch( action.type )
	{
		case 'CHARACTER_RACE_SET_BASE':
			return { ...state, selection : { key : action.payload } };

		case 'CHARACTER_RACE_SET_SUBRACE':
			return { ...state, selection : { ...state.selection, subrace : { key : action.payload } } };

		case 'CHARACTER_RACE_SET_VARIANT':
			return { ...state, selection : { ...state.selection, variant : { key : action.payload } } };
	}

	return state;
}