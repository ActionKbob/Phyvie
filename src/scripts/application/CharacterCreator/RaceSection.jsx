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
									onSelection={ ( _key ) => this.props.dispatch( setBaseRace( _key ) ) } />
			</div>
		);
	}

	renderSubraceSelection()
	{
		var { raceSelection } = this.props;
		if( raceSelection.selection !== undefined )
		{
			try
			{
				var options = race.options.find( x => x.key === raceSelection.selection.race.key ).subraces.options;
				return(
					<div>
						<SelectionContainer options={ options }
											onSelection={ ( _key ) => this.props.dispatch( setSubrace( _key ) ) }/>
					</div>
				);
			}
			catch( e )
			{
				return( '' );
			}
		}
		return false;
	}

	renderVariantSelection()
	{
		var { raceSelection } = this.props;
		if( raceSelection.selection !== undefined )
		{
			try
			{
				var options = race.options.find( x => x.key === raceSelection.selection.race.key ).variants.options;
				return(
					<div>
						<SelectionContainer options={ options } 
											onSelection={ ( _key ) => this.props.dispatch( setVariantRace( _key ) ) }/>
					</div>
				);
			}
			catch( e )
			{
				return( '' );
			}
		}
		return false;
	}
	
	render()
	{
		return(
			<div>
				{ this.renderRaceSelection() }
				{ this.renderSubraceSelection() }
				{ this.renderVariantSelection() }
			</div>
		);
	}
}
