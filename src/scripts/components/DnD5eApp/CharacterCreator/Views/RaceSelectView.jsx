import React from 'react';

import SelectionContainer from '../../SelectionContainer';

export default class RaceSelectView extends React.Component
{

	constructor()
	{
		super();

		this.state = {}
	}

	handleOnRaceSelect( _race )
	{
		var selectedRace = this.props.data.find( x => x.id === _race );
	}

	handleOnSubRaceSelect( _subrace )
	{
		
	}

	render()
	{
		return(
			<div>
				<SelectionContainer options={ this.props.data } title="Type"  onSelection={ this.handleOnRaceSelect.bind( this ) }/>
			</div>
		);
	}
}
