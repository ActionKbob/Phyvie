import React from 'react';

// Components
import Header from './Header';

// DnD 5e Character Creator
import DnD5eApp from './DnD5eApp';

export default class Application extends React.Component
{
	componentWillMount() {
		document.body.style.margin = 0;
	}

	render()
	{
		return (
			<div>
				<Header />
				<DnD5eApp />
			</div>
		);
	}
}
