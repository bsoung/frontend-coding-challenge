import React, { Component } from 'react';
import { DateUtils } from '../../utils';

class Form extends Component {
	onFormSubmit = (e) => {
		e.preventDefault();

		const error = 'Invalid date';

		const { 

			titleInput, 
			startDateInput, 
			endDateInput, 
			startTimeInput, 
			endTimeInput 

		} = this;

		const { onAddEvent } = this.props;

		if (!onAddEvent) {
			return;
		}

		let title = titleInput.value;
		let startDate = `${startDateInput.value} ${startTimeInput.value}`;
		let endDate = `${endDateInput.value} ${endTimeInput.value}`;

				if (!title || !startDate || !endDate) {
			alert('Uh oh. Please make sure you have a title, start date, and end date entered!');

			return;
		}

		let isValidDates = DateUtils.checkDates(startDate, endDate);

		if (isValidDates === false) {
			alert('There was a problem was your start and end date... No time traveling please!')

			return;
		}

		let prettyStartDate = DateUtils.prettifyDate(startDate);
		let prettyEndDate = DateUtils.prettifyDate(endDate);

		if (prettyStartDate === error || prettyEndDate === error) {
			alert('Weird format detected! Please use the suggested date formats :)');

			return;
		}

		onAddEvent(title, prettyStartDate, prettyEndDate);

		this.resetFields();
	}

	resetFields() {
		const { 

			titleInput, 
			startDateInput, 
			endDateInput, 
			startTimeInput, 
			endTimeInput 

		} = this;

		titleInput.value = '';
		startDateInput.value = '';
		startTimeInput.value = '';
		endDateInput.value = '';
		endTimeInput.value = '';

		return;
	}

	
	render() {
		return (
			<form onSubmit={this.onFormSubmit}>
				<input type="text" ref={e => this.titleInput = e} placeholder="Enter event title!" />

				<div>
					<div>Start Date</div>
					<input type="date" ref={e => this.startDateInput = e} placeholder="mm/dd/yyyy" />
					<input type="time" ref={e => this.startTimeInput = e} placeholder="hour:min:AM or PM" />
				</div>

				<div>
					<div>End Date</div>
					<input type="date" ref={e => this.endDateInput = e} placeholder="mm/dd/yyyy" />
					<input type="time" ref={e => this.endTimeInput = e} placeholder="hour:min:AM or PM" />
				</div>

				<button>Add Event</button>
			</form>
		)
	}
}

export default Form;