import React from 'react';
import { connect } from 'react-redux';

import { skillProficiencies } from 'data/rules';

@connect( ( store ) => {
	return {
		character : store.characterSheet.character
	}
} )
export default class SkillProficiency extends React.Component
{
	render()
	{
		const { character } = this.props;

		return(
			<div>
				{ skillProficiencies.options.map( ( v, k ) => {
					return(
						<div key={k}>{ v.id }</div>
					);
				} ) }
			</div>
		);
	}
}
