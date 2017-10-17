import React from 'react';

export default class Nav extends React.Component
{
	render()
	{

		const views = [
			'race',
			'class',
			'proficiencies'
		]

		const styles = {
			container : {
				display : 'flex'
			},
			item : {
				flex : '1'
			}
		}

		return(
			<div style={ styles.container }>
				{ views.map( ( v, k ) => {
					return(
						<button style={ styles.item } 
								key={k}
								onClick={ () => this.props.onViewSelect( v ) }>
							{ v }
						</button>
					);
				} ) }
			</div>
		);
	}
}
