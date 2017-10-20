import React from 'react';
import { connect } from 'react-redux';
import rules from 'data/rules';

// Components
import RaceSelection from 'application/CharacterCreator/RaceSelection';

@connect( ( store ) => {
	return {
		character : store.character
	}
} )
export default class CharacterCreator extends React.Component
{

	constructor() 
	{
		super();
		this.state = { view : 'race' }
	}

	handleChangeView( _view )
	{
		
		this.setState( { view : _view } );
	}

	render()
	{

		var { character } = this.props;

		console.clear();
		//console.debug( JSON.stringify( rules, true, 2 ) );
		console.debug( JSON.stringify( character, true, 2 ) );

		return(
			<div>
				<RaceSelection />
			</div>
		);
	}
}
