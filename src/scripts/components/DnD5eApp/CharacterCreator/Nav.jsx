import React from 'react';

export default class Nav extends React.Component
{

	handleOnNavClick()
	{
		// TODO Change view via props
	}

	render()
	{

		var viewOptions = [
			{ 
				id : 'race',
				text : 'View 1'
			},
			{ 
				id : 'class',
				text : 'View 2' 
			}
		]

		var styles = {
			nav : {
				display : 'flex'
			},

			button : {
				flex : '1 0 auto',
				height : 'calc( 100vw / ' + viewOptions.length + ' )',
				maxHeight : '40px',
				border : '1px #356 solid'
			}
		}

		return(
			<div style={ styles.nav }>
				{ viewOptions.map( ( e, i ) => {
					return( <button style={ styles.button } key={i} onClick={ () => this.props.onViewChange( e.id ) }>{ e.text }</button> );
				} ) }
			</div>
		);
	}
}
