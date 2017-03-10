import React, { Component } from 'react';
import { DateUtils } from '../../utils';
import './Search.css';

class Search extends Component {

	searchEvent = (e) => {
		const { searchEventInput, searchTime, searchAMPM } = this;
		const { updateEvents, events } = this.props;

		let startTime = (searchTime.value > 0) ? searchTime.value : false;
		let ampm = searchAMPM.value;

		// filter by title and date
		const filtered = events.filter(event => {
			const eventDate = (DateUtils.createDate(event.start_time)).format("h");
			const ampmType = (DateUtils.createDate(event.start_time)).format("a");

			if (event.title.indexOf(searchEventInput.value) === -1) {
				console.log("here")
				return;
			}

			if (startTime && eventDate !== startTime || ampmType !== ampm) {
				return;
			}

			console.log(event)
			return event;
		});

		// sort alphabetically
		filtered.sort(function(a, b) {
	    var textA = a.title.toUpperCase();
	    var textB = b.title.toUpperCase();
	    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});

		updateEvents(filtered);
	}

	render() {
		return (
			<div className="search-container">
				<label>Search</label>
				<input type="text" ref={e => this.searchEventInput = e} onChange={this.searchEvent} placeholder="Search event" />
				
				<form>
				  <select ref={e => this.searchTime = e} onChange={this.searchEvent} >
				  	<option value="0">Search by time</option>
				    <option value="1">1 : 00</option>
				    <option value="2">2 : 00</option>
				    <option value="3">3 : 00</option>
				    <option value="4">4 : 00</option>
				    <option value="5">5 : 00</option>
				    <option value="6">6 : 00</option>
				    <option value="7">7 : 00</option>
				    <option value="8">8 : 00</option>
				    <option value="9">9 : 00</option>
				    <option value="10">10 : 00</option>
				    <option value="11">11 : 00</option>
				    <option value="12">12 : 00</option>
				  </select>
				</form>

				<form>
				  <select ref={e => this.searchAMPM = e} onChange={this.searchEvent} >
				    <option value="am">AM</option>
				    <option value="pm">PM</option>
				 
				  </select>
				</form>

			</div>
		)
	}
}

export default Search;