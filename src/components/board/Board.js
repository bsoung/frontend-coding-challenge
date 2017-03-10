import React from 'react';
import { Form, List, Search } from '../';

export default (props) => {
	return (
		<div>
			<div>
				Create an Event
			</div>

			<Form events={props.events} addEvent={props.addEvent} />
			<Search events={props.events} updateEvents={props.updateEvents} />
			<List events={props.filteredEvents} />

		</div>
	)
}