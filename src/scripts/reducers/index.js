import { combineReducers } from 'redux';

import application from 'reducers/ApplicationViewReducer';
import character from 'reducers/character';

export default combineReducers({
	application,
	character
});
