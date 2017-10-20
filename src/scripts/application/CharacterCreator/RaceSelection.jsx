import React from 'react';
import { connect } from 'react-redux';

// Components
import ButtonSelector from 'application/Components/ButtonSelector';

// Actions
import { addRace, addSubrace, addVariant } from 'actions/character/raceActions';

@connect()
export default class RaceSelection extends React.Component
{

	handleOnRaceSelection( _value )
	{
		this.props.dispatch( addRace( _value ) );
	}

	handleOnSubraceSelection( _value )
	{
		this.props.dispatch( addSubrace( _value ) );
	}

	handleOnVariantSelection( _value )
	{
		this.props.dispatch( addVariant( _value ) );
	}

	render()
	{
		return(
			<div>
				<ButtonSelector options={ [ 'human', 'elf', 'dwarf' ] }
								onSelection={ ( _value ) => this.handleOnRaceSelection( _value ) } />

				<ButtonSelector options={ [ 'arkaiun', 'bedine', 'calishite', 'chondathan', 'damaran' ] }
								onSelection={ ( _value ) => this.handleOnSubraceSelection( _value ) } />

				<ButtonSelector options={ [ 'standard', 'variant' ] }
								onSelection={ ( _value ) => this.handleOnVariantSelection( _value ) } />
			</div>
		);
	}
}
