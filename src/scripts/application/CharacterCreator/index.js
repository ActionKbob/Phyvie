import React from 'react';
import { connect } from 'react-redux';

// Components
import Nav from 'application/CharacterCreator/Nav';
import RaceSection from 'application/CharacterCreator/RaceSection';
import ClassSection from 'application/CharacterCreator/ClassSelection';


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

		const { character } = this.props;

		console.clear()
		console.debug( JSON.stringify( character, true, 2 ) );

		var view = <RaceSection />;
		switch( this.state.view )
		{
			case 'class':
				view = <ClassSection />;
		}

		return(
			<div>
				<Nav onViewSelect={ this.handleChangeView.bind( this ) } />
				{ view }
			</div>
		);
	}
}
