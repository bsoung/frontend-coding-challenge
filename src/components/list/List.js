import React from 'react';
import { Event } from '../';

export default (props) => {

	return (
		<div>
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