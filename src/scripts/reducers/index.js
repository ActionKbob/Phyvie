import { combineReducers } from 'redux';

import dnd5e from './dnd5eReducer';
import character from './characterReducer';

export default combineReducers({
	dnd5e,
	character,
});
