export default function reducer( 
	state = {
		view : 'race'
	}, 
	action )
{

	var newState = Object.assign( {}, state );

	switch( action.type )
	{
		case 'CHARACTER_CREATOR_CHANGE_VIEW' : {
			newState.view = action.payload;
		}
	}

	state = newState;

	return state;
}
