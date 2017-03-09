import moment from 'moment';

export default {
	prettifyDate: (date) => {
		let formatDate = new Date(date);
		let prettyDate = moment(formatDate).format("dddd, MMMM Do YYYY, h:mm:ss a");

		return prettyDate
	},

	checkDates: (start, end) => {
		const moment = require('moment');

		let isValid = true;

		let formatStart = new Date(start);
		let formatEnd = new Date(end);
		
		let startDay = moment(formatStart, "MM-DD-YYYY, h:mm:ss a");
		let endDay = moment(formatEnd, "MM-DD-YYYY, h:mm:ss a");

		if (startDay.diff(endDay) >= 0) {
			isValid = false;
		}

		return isValid;
	},

	createDate: (date) => {
		return moment(date);
	}

}
