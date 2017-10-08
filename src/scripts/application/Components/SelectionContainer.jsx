import React from 'react';

export default class SelectionContainer extends React.Component
{
	onSelection( _key )
	{
		this.props.onSelection( _key );
	}

	render()
	{
		const { options } = this.props;
		
		return(
			<div>
				{ options.map( ( v, k ) => {
					return(
						<button key={ k }
								onClick={ () => this.onSelection( v.key ) }>
							{ v.key }
						</button>
					);
				} ) }
			</div>
		);
	}
}