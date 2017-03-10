import React from 'react';
import { Event } from '../';
import './List.css';

export default (props) => {

	return (
		<div className="list-container col-md-12">
			{
				props.events.map((event, i) => {
					return (
						<Event key={i} event={event} />
					)

				})
			}
		</div>
	)

}    