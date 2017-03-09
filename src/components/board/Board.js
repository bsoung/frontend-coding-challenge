import React from 'react';
import { List } from '../';

export default (props) => {
	return (
		<div>
			<div>
				Board Component
			</div>

		<List events={props.filteredEvents} />
		</div>
	)
}