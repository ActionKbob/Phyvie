import React from 'react';
import { connect } from 'react-redux';

import { changeDnD5eView } from '../../../../actions/dnd5eActions'

import Nav from './Nav';

@connect()
export default class CharacterCreator extends React.Component
{
	handleOnViewChange( _view )
	{
		
	}

	render()
	{
		return(
			<div>
				<Nav onViewChange={ this.handleOnViewChange.bind( this ) } />
			</div>
		);
	}
}
