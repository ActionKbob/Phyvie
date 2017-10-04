import { combineReducers } from 'redux';

import application from 'reducers/ApplicationViewReducer';
import characterSheet from 'reducers/CharacterSheetReducer';

export default combineReducers({
	application,
	characterSheet
});
