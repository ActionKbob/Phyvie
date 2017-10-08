import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from './Header';
import CharacterCreator from 'application/CharacterCreator';

@connect()
export default class Application extends React.Component
{
	componentWillMount() {
		document.body.style.margin = 0;
	}

	render()
	{
		var styles = {
			display : 'flex',
			flexDirection : 'column',
			height : '100vh'
		}

		return (
			<div style={ styles }>
				<Header />
				<CharacterCreator />
			</div>
		);
	}
}
