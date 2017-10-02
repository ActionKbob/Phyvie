export default function reducer( 
	state = {
		view : 'main_menu'
	}, 
	action )
{

	var newState = Object.assign( {}, state );

	switch( action.type )
	{
		case 'DND5E_CHANGE_VIEW' : {
			newState.view = action.payload;
		}
	}

	state = newState;

	return state;
}
