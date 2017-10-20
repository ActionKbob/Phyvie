import { combineReducers } from 'redux';
import enums from 'data/enums';

const byId = ( state = {}, action ) => {
	const { type, payload } = action;
	switch( type )
	{
		case enums.ADD_RACE:
			return {
				...state,
				'race' : payload,
				subrace : undefined,
				variant : undefined
			};

		case enums.ADD_SUBRACE:
			return {
				...state,
				'subrace' : payload
			};

		case enums.ADD_VARIANT:
			return {
				...state,
				'variant' : payload
			};
	}
	return state;
}

const raceReducer = combineReducers( { byId } );

export default raceReducer;
