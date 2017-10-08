import React from 'react';
import { connect } from 'react-redux';
import { race } from 'data/rules';

// Components
import SelectionContainer from 'application/Components/SelectionContainer';

// Actions
import { setBaseRace, setSubrace, setVariantRace } from 'actions/character/raceActions';

@connect( ( store ) => {
	return {
		raceSelection : store.character.race
	}
} )
export default class RaceSection extends React.Component
{

	renderRaceSelection()
	{
		return(
			<div>
				<SelectionContainer options={ race.options } 
									onSelection={ this.onRaceSelect.bind( this ) } />		
			</div>
		);
	}

	renderSubraceSelection()
	{
		var { raceSelection } = this.props;
		if( raceSelection.selection !== undefined )
		{
			var options = race.options.find( x => x.key === raceSelection.selection.key ).subraces;
			options = ( options !== undefined ) ? options : [];
			return(
				<div>
					<SelectionContainer options={ options } 
										onSelection={ this.onSubraceSelect.bind( this ) }/>		
				</div>
			);
		}
		return false;
	}

	renderVariantSelection()
	{
		var { raceSelection } = this.props;
		if( raceSelection.selection !== undefined )
		{
			var options = race.options.find( x => x.key === raceSelection.selection.key ).variants;
			options = ( options !== undefined ) ? options : [];
			return(
				<div>
					<SelectionContainer options={ options } 
										onSelection={ this.onVariantSelect.bind( this ) }/>
				</div>
			);
		}
		return false;
	}
	
	onRaceSelect( _key )
	{

	}

	onSubraceSelect( _key )
	{

	}

	onVariantSelect( _key )
	{

	}

	render()
	{
		console.log('selection');
		console.log( this.props.raceSelection );

		return(
			<div>
				{ this.renderRaceSelection() }
				{ this.renderSubraceSelection() }
				{ this.renderVariantSelection() }
			</div>
		);
	}
}