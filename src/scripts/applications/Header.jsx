import React from 'react';

export default class Header extends React.Component
{
	render()
	{
		var styles = {
			display : 'flex',
			justifyContent : 'center',
			alignItems : 'center',
			backgroundColor : '#666',
			height : '50px'
		}

		return(
			<header style={ styles }>Header Text</header>
		);
	}
}
