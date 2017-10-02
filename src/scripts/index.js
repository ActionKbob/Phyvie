import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';  

import Application from './applications/Application';

import store from './store';

render(
	<Provider store={ store }>
		<Application />
	</Provider>,
	document.getElementById( 'root' )
);
