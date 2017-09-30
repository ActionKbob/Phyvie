import React from 'react';

export default class SelectionContainer extends React.Component
{
	constructor()
	{
		super();

		this.state = {
			hasSelection : false,
			selectedIDs : [],
			disabled : false
		}
	}

	handleOnClear()
	{
		this.setState( { hasSelection : false, selectedIDs : [] } );
	}

	handleOnSelect( _selectedId )
	{
		var newSelectedIDs = this.state.selectedIDs.slice();
		var indexOfSelected = newSelectedIDs.indexOf( _selectedId );

		if( indexOfSelected !== -1 )
			newSelectedIDs.splice( indexOfSelected, 1 );
		else
			newSelectedIDs.push( _selectedId );
		
		this.setState( { selectedIDs : newSelectedIDs, disabled : ( ( this.props.max - newSelectedIDs.length ) <= 0 ) } );
		this.props.onSelection( this.props.id, newSelectedIDs );
	}

	render()
	{

		var options = this.props.options;

		var styles = {
			container : {
				padding : '1rem',
				backgroundColor : '#444'
			},

			header : {
				display : 'flex',
				justifyContent : 'space-between'
			},

			selections : {
				display : 'flex',
				flexWrap : 'wrap',
				marginTop : '1rem',
				marginLeft : '-0.5rem',
				marginRight : '-0.5rem'
			},

			option : {
				flex : '1 0 46%',
				maxWidth : '46%',
				margin : '2%',
				padding : '0.5rem',
				backgroundColor : '#999'
			}
		}

		return(
			<div style={ styles.container }>
				<div style={ styles.header }>
					<span>{ this.props.title }</span>
					<span>{ ( this.props.max - this.state.selectedIDs.length ) } remaining</span>
				</div>
				<div style={ styles.selections }>
					{ options.map( ( e, i ) => {
						return ( 	<button key={ i }
											style={ styles.option }
											onClick={ () => this.handleOnSelect( e.id ) }
											disabled={ this.state.disabled && ( this.state.selectedIDs.indexOf( e.id ) === -1 ) }>
										{ e.displayText } 
								 	</button> );
					} ) }
				</div>
			</div>
		);
	}
}
