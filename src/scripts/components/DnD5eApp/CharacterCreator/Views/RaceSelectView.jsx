import React from 'react';

import SelectionContainer from '../../SelectionContainer';

export default class RaceSelectView extends React.Component
{

	constructor()
	{
		super();

		this.state = {
			required : {
				race : 1,
				subrace : 1,
				variant : 1
			},
			selections : {},
			options : {}
		}
	}

	handleOnSelect( _id, _value )
	{
		var currentSelections = Object.assign( {}, this.state.selections );
		var currentOptions = Object.assign( {}, this.state.options );

		switch( _id )
		{
			case 'race':
				var selectedRace = this.props.data.find( x => x.id === _value[0] );
				currentSelections.race = ( selectedRace !== undefined ) ? _value[0] : undefined;
				currentSelections.subrace = undefined;
				currentOptions.subraces = ( selectedRace !== undefined ) ? selectedRace.subraces : undefined;
				currentOptions.variants = ( selectedRace !== undefined ) ? selectedRace.variants : undefined;
			break;

			case 'subrace':
				currentSelections.subrace = _value[0];
			break;

			case 'variant':
				currentSelections.variant = _value[0];
			break;
		}

		this.setState( { selections : currentSelections, options : currentOptions } );
	}

	render()
	{
		console.log( this.state.selections );

		return(
			<div>
				<SelectionContainer id="race" options={ this.props.data } title="Races" max={ this.state.required.race } onSelection={ this.handleOnSelect.bind( this ) }/>
				{ ( this.state.options.subraces !== undefined ) && <SelectionContainer id="subrace" options={ this.state.options.subraces } title="Subraces" max={ this.state.required.subrace } onSelection={ this.handleOnSelect.bind( this ) }/> }
				{ ( this.state.options.subraces !== undefined ) && <SelectionContainer id="variant" options={ this.state.options.variants } title="Variants" max={ this.state.required.variant } onSelection={ this.handleOnSelect.bind( this ) }/> }
			</div>
		);
	}
}
