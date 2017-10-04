import React from 'react';
import { connect } from 'react-redux';

import { changeView } from 'actions/CharacterSheetActions';

@connect()
export default class Nav extends React.Component
{
	handleOnSelect( _id )
	{
		this.props.dispatch( changeView( _id ) );
	}

	render()
	{
		const views = [
			{ id : 1, value : 'o' },
			{ id : 2, value : 'o' },
			{ id : 3, value : 'o' },
			{ id : 4, value : 'o' },
			{ id : 5, value : 'o' },
			{ id : 6, value : 'o' }
		]

		var styles = {
			container : {
				display : 'flex',
				justifyContent : 'center',
				alignItems : 'center',
				width : '100vw'
			},
			item : {
				flex : '1 0 auto'
			}
		}

		return(
			<div style={ styles.container }>
				{ views.map( ( v, k ) => {
					return( 
						<button style={ styles.item } 
								key={ k }
								onClick={ () => this.handleOnSelect( v.id ) }>
							{ v.value }
						</button>
					);
				} ) }
			</div>
		);
	}
}
