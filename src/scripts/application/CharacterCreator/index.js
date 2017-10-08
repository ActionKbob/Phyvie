import React from 'react';
import { connect } from 'react-redux';

// Components
import RaceSection from 'application/CharacterCreator/RaceSection';


@connect( ( store ) => {
	return {
		character : store.character
	}
} )
export default class CharacterCreator extends React.Component
{
	render()
	{

		const { character } = this.props;

		console.log( character );

		return(
			<div>
				<RaceSection />
			</div>
		);
	}
}