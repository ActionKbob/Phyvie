import { race } from 'data/rules';

export default function reducer( state = {}, action )
{

	switch( action.type )
	{
		case 'CHARACTER_RACE_SET_BASE':
			var d = race.options.find( x => x.key === action.payload );
			return { 
				...state, selection : { 
					race : { 
						key : d.key, 
						properties : d.properties
					}
				} 
			};

		case 'CHARACTER_RACE_SET_SUBRACE':
			var d = race.options.find( x => x.key === state.selection.race.key ).subraces.options.find( x => x.key === action.payload );
			return { 
				...state, 
				selection : { 
					...state.selection, 
					subrace : {
						key : d.key,
						properties : d.properties
					}
				} 
			};

		case 'CHARACTER_RACE_SET_VARIANT':
			var d = race.options.find( x => x.key === state.selection.race.key ).variants.options.find( x => x.key === action.payload );
			return { 
				...state, 
				selection : { 
					...state.selection,
					variant : {
						key : d.key,
						properties : d.properties
					}
				} 
			};
	}

	return state;
}
