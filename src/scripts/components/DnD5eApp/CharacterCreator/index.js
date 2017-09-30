import React from 'react';

import Nav from './Nav';

import RaceSelectView from './Views/RaceSelectView';
import ClassSelectView from './Views/ClassSelectView';

import raceData from '../data/race';

export default class CharacterCreator extends React.Component
{
	constructor()
	{
		super();

		this.state = {
			view : 'race',
			character_data : {
				selections : {
					race : {},
					background : {},
					class : {},


				}
			}
		}
	}

	handleOnViewChange( _view )
	{
		this.setState( { view : _view } );
	}

	render()
	{

		console.log( this.state.character_data );

		var currentView;
		if( this.state.view === 'class' )
			currentView = <ClassSelectView />;
		else
			currentView = <RaceSelectView data={ raceData } />;

		return(
			<div>
				<Nav onViewChange={ this.handleOnViewChange.bind( this ) } />
				{ currentView }
			</div>
		);
	}
}
