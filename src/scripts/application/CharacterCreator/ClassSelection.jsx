import React from 'react';
import { connect } from 'react-redux';
import { classes } from 'data/rules';

// Components
import SelectionContainer from 'application/Components/SelectionContainer';

// Actions
import { addClass } from 'actions/character/classActions';

@connect()
export default class ClassSelection extends React.Component
{
	renderClassSelection()
	{
		return(
			<div>
				<SelectionContainer options={ classes.options } 
									onSelection={ ( _key ) => this.props.dispatch( addClass( _key ) ) } />
			</div>
		);
	}

	render()
	{
		return(
			<div>
				{ this.renderClassSelection() }
			</div>
		);
	}
}
