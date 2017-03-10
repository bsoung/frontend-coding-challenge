import React from 'react';
import './Event.css';
// DateUtils
import { DateUtils } from '../../utils';

export default (props) => {
	console.log(props.event.title, "WHATS THIS")
	return (
		<div className="event-container">
			<h2>{props.event.title}</h2>
			{
				(props.event.url !== null) ? <a href={props.event.url}>Click here for more info!</a> : ''
			}
			<p>Start: {DateUtils.prettifyDate(props.event.start_time)}</p>
			<p>End: {DateUtils.prettifyDate(props.event.end_time)}</p>
		</div>
	)

}