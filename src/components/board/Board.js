import React from 'react';
import { Form, List, Search } from '../';
import './Board.css';

export default (props) => {
	return (
		<div className="board-container">
		
				<Form events={props.events} addEvent={props.addEvent} />
				<Search events={props.events} updateEvents={props.updateEvents} />

			<List events={props.filteredEvents} />
		</div>
	)
}