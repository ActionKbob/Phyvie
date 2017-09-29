import React from 'react';

export default class MainMenu extends React.Component
{
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
				<button style={ styles.button } onClick={ () => this.props.onViewChange( 'character_creator' ) }>Create New +</button>
				<button style={ styles.button } onClick={ () => this.props.onViewChange( 'load_character' ) }>Load Character</button>
			</div>
		);
	}
}
