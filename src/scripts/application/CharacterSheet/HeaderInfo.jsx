import React from 'react';
import { connect } from 'react-redux';

@connect( ( store ) => {
	return {
		values : store.characterSheet.character.values,
		characterRace : store.characterSheet.character.selections.find( x => x.key === 'race' ).option,
		characterClass : store.characterSheet.character.selections.find( x => x.key === 'class' ).option
	}
} )
export default class HeaderInfo extends React.Component
{
	render()
	{

		const { values, characterRace, characterClass } = this.props;

		var styles = {
			container : {
				height : '60px'
			}
		}

		return(
			<div style={ styles.container }>
				<span>{ values.characterName } </span>
				<span>
					Level { characterClass.selections.find( x => x.key === 'level' ).value } { characterRace.key } { characterClass.key }
				</span>
			</div>
		);
	}
}
