import { classes } from 'data/rules';

export default function reducer( state = {}, action )
{
	switch( action.type )
	{
		case 'CHARACTER_CLASS_ADD':
			var d = classes.options.find( x => x.key === action.payload );
			return { 
				...state, selection : { 
					class : { 
						key : d.key, 
						properties : d.properties
					}
				} 
			};

	}

	return state;
}
