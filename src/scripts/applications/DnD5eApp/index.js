import React from 'react';
import { connect } from 'react-redux';

import MainMenu from './components/MainMenu';
import CharacterCreator from './components/CharacterCreator';

@connect( ( store ) => {
	console.log( store );
	return {
		view : store.dnd5e.view
	};
} )
export default class DnD5eApp extends React.Component
{
	render()
	{
		const { view } = this.props;
		
		let viewComponent = <MainMenu />
		switch( view )
		{
			case 'character_creator' : {
				viewComponent = <CharacterCreator />
			}
		}

		return(
			<div>
				{ viewComponent }
			</div>
		);
	}
}
