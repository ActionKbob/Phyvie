import React from 'react';

import AbilityScoreDisplay from 'application/CharacterSheet/AbilityScoreDisplay';

export default class View1 extends React.Component
{
	render()
	{
		var styles = {
			container : {
				display : 'flex',
				flex : '1 0 auto'
			}
		}

		return(
			<div style={ styles.container }>
				<AbilityScoreDisplay />
			</div>
		);
	}
}
