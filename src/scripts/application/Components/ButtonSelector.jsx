import React from 'react';

export default class ButtonSelector extends React.Component
{
	handleOnClick( _value )
	{
		try
		{
			this.props.onSelection( _value );
		}
		catch(e)
		{
			console.warn( 'Selection handler missing: ' + e );
		}
	}

	render()
	{
		let { options } = this.props;
		options = ( options !== undefined ) ? options : [];
		return(
			<div>
				{ options.map( ( v, k ) => {
					return( 
						<button key={k}
								onClick={ () => this.handleOnClick( v ) }>
							{v}
						</button>
					);
				} ) }
			</div>
		);
	}
}
