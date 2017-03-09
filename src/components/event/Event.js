import React from 'react';
import './Event.css';
// DateUtils
import { DateUtils } from '../../utils';

export default (props) => {

	return (
		<div className="event-container">
			<h2>{props.event.title}</h2>
			<h2>Start: {DateUtils.prettifyDate(props.event.startTime)}</h2>
			<h2>End: {DateUtils.prettifyDate(props.event.endTime)}</h2>
		</div>
	)

}