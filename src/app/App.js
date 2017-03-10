import React, { Component } from 'react';
import { APIManager } from '../utils';
import { Board } from '../components';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Awesome Eventable Events',
      events: [],
      filteredEvents: []
    }
  }

  componentDidMount() {
    if (!localStorage.getItem('token') && localStorage.getItem('token').length < 1) {
      APIManager.post('https://api.eventable.com/v1/token-auth/');
    }

    // this.fetchEvents('https://api.eventable.com/v1/events/')
  }

  fetchEvents(url) {
    const options = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "token " + localStorage.getItem('token')
      }
    }

    fetch(url, options)
      .then(res => {
        return res.json()
      })
      .then(res => {

        const events = res.results;

        for (let i = 0, len = events.length; i < len; i++) {

          // keep naming consistent
          let title = events[i].title;
          let startTime = events[i].start_time;
          let endTime = events[i].end_time;

          this.addEvent(title, startTime, endTime);
        }
        
        return res;
      })
      .catch(err => {
        console.error(err)
      })
  }

  addEvent = (title, startTime, endTime) => {
    let events = [...this.state.events];

    let newEvent = {title, startTime, endTime};

    events.push(newEvent);

    this.setState({
      events,
      filteredEvents: events
    })
  }

  updateEvents = (events) => {
    if (!events) {
      return;
    }

    this.setState({
      filteredEvents: events
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <Board
          events={this.state.events}
          filteredEvents={this.state.filteredEvents}
          addEvent={this.addEvent}
          updateEvents={this.updateEvents}
        />
      </div>
    );
  }
}

export default App;
