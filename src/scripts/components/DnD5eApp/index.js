import React from 'react';

import MainMenu from './MainMenu';
import CharacterCreator from './CharacterCreator';

export default class DnD5eApp extends React.Component
{
	constructor() 
	{
		super();
		this.state = {
			view : 'character_creator'
		}
	}

	componentWillMount()
	{

	}

	handleOnViewChange( _view )
	{
		this.setState( { view : _view } );
	}

	render()
	{

		if( this.state.view === 'character_creator' )
		{
			return(
				<CharacterCreator />
			);
		}
		else
		{
			return(
				<MainMenu onViewChange={ this.handleOnViewChange.bind(this) } />
			);
		}
	}
}
