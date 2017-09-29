import React from 'react';

export default class SelectionContainer extends React.Component
{
	constructor()
	{
		super();

		this.state = {
			hasSelection : false,
			selectedId : ''
		}
	}

	handleOnSelect( _selectedId )
	{
		this.setState( { selectedId : _selectedId, hasSelection : true } );
		this.props.onSelection( _selectedId );
	}

	render()
	{

		var options = this.props.options;

		var styles = {
			container : {
				display : 'flex',
				flexWrap : 'wrap',
				backgroundColor : '#444',
				color : 'white',
				padding : '1rem 0.5rem'
			},

			option : {
				display : 'flex',
				justifyContent : 'space-between',
				alignItems : 'center',
				flex : '1 0 33%',
				width : '50%',
				height : '35px',
				backgroundColor : '#999',
				margin : '0.5rem',
				padding : '0 0.5rem'
			},

			active : {
				backgroundColor : '#777',
				color : 'white'
			}
		}

		return(
			<div>
				<p>{ this.props.title }</p>
				<div style={ styles.container }>
					{ options.map( ( e, i ) => {
						return ( 	<button style={ Object.assign( {}, styles.option, this.state.selectedId === e.id && styles.active ) } 
											key={i} 
											onClick={ () => this.handleOnSelect( e.id ) }>{ e.displayText }
								 	</button> );
					} ) }
				</div>
			</div>
		);
	}
}
