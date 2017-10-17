import { combineReducers } from 'redux';

import race from 'reducers/character/raceReducer';
import classes from 'reducers/character/classReducer';

export default combineReducers({
	race,
	classes
});
