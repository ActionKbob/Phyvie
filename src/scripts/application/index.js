import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from './Header';
import CharacterSheet from './CharacterSheet';

@connect( ( store ) => {
	return {
		viewID : store.application.view
	}
} )
export default class Application extends React.Component
{
	componentWillMount() {
		document.body.style.margin = 0;
	}

	render()
	{
		const { viewID } = this.props;

		var view;
		switch( viewID )
		{
			case 'character_sheet':
				view = <CharacterSheet />;
				break;
		}

		var styles = {
			display : 'flex',
			flexDirection : 'column',
			height : '100vh'
		}

		return (
			<div style={ styles }>
				<Header />
				{ view }
			</div>
		);
	}
}
