import React from 'react';
import { connect } from 'react-redux';

import { changeDnD5eView } from '../../../../actions/dnd5eActions'

@connect()
export default class MainMenu extends React.Component
{

	onButtonClick( _value )
	{
		this.props.dispatch( changeDnD5eView( _value ) );
	}

	render()
	{

		var styles = {
			menu : {
				display : 'flex',
				flexDirection : 'column',
				marginTop : '1.5rem'
			},
			button : {
				backgroundColor : 'grey',
				border : 'none',
				margin : '0.5rem 1rem',
				padding : '1rem'
			}
		}

		return(
			<div style={ styles.menu }>
				<button style={ styles.button } onClick={ () => this.onButtonClick( 'character_creator' ) }>Create New +</button>
				<button style={ styles.button } onClick={ () => this.onButtonClick( 'load_character' ) }>Load Character</button>
			</div>
		);
	}
}
