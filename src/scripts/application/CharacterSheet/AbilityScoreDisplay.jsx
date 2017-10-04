import React from 'react';
import { connect } from 'react-redux';

import { calculateModifier } from 'utilities';

@connect( ( store ) => {
	return {
		abilityScores : store.characterSheet.character.selections.find( x => x.key === 'ability-scores' )
	}
} )
export default class AbilityScoreDisplay extends React.Component
{
	render()
	{
		const { abilityScores } = this.props;

		var standardScores = abilityScores.option.selections;

		var styles = {
			container : {
				display : 'flex',
				flexDirection : 'column',
				flex : '1 0 auto',
				width : '50px'
			},
			item : {
				flex : '1 0 auto',
				display : 'flex',
				flexDirection : 'column'
			}
		}

		return(
			<div style={ styles.container }>
				{ standardScores.map( ( v, k ) => {
					return( 
						<div style={ styles.item } key={ k }>
							<div>{ v.key }</div>
							<div>{ v.value }</div>
							<div>{ calculateModifier( v.value ) }</div>
						</div>
					);
				} ) }
			</div>
		);
	}
}
