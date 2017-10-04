import React from 'react';
import { connect } from 'react-redux';

// Components
import HeaderInfo from 'application/CharacterSheet/HeaderInfo';
import Nav from 'application/CharacterSheet/Nav';

// Views
import View1 from 'application/CharacterSheet/Views/View1';

// Actions
import { loadCharacter } from 'actions/CharacterSheetActions';

@connect( ( store ) => {
	return {
		viewID : store.characterSheet.view,
		character : store.characterSheet.character
	}
} )
export default class CharacterSheet extends React.Component
{

	constructor() {
		super();
	}

	componentWillMount()
	{
		this.props.dispatch( loadCharacter( 'dontmatter' ) );
	}

	render()
	{
		const { viewID, character } = this.props;

		console.debug( character );

		var view = undefined;
		switch( viewID )
		{
			case 1:
				view = <View1 />
				break;
		}

		var styles = {
			flex : '1 0 auto',
			display : 'flex',
			flexDirection : 'column'
		}

		return(
			<div style={ styles }>
				{ character !== undefined && character.values !== undefined && <HeaderInfo /> }
				<Nav />
				{ view }
			</div>
		);
	}
}
