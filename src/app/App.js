import React, { Component } from 'react';
import { Board } from '../components';
import { APIManager } from '../utils';
import _ from 'lodash';
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

    this.fetchEvents('https://api.eventable.com/v1/events/');
  }

  fetchEvents = (url) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "token " + localStorage.getItem('token') 
        },
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
      })
      .then(res => {
        console.log(res, 'response')

        const events = res.results;

        for (let i = 0, len = events.length; i < len; i++) {
          this.addEvent(events[i])
        }

        return res;
      })
      .catch(err => {
        alert("A problem occured while fetching data!");
        console.error(err);
      });
  }

  updateEvents = (events) => {
    if (!events) {
      return;
    }

    this.setState({
      filteredEvents: events
    })
  }

  addEvent = ({title, start_time, end_time, url}) => {

    let events = [...this.state.events];

    let newEvent = {title, start_time, end_time, url};

    events.push(newEvent);

    this.setState({
      events,
      filteredEvents: events
    });
  }

  render() {

    return (
      <div className="App">
        <div className="main-title">
          <h1>{this.state.title}</h1>
        </div>

        <Board
          events={this.state.events}
          filteredEvents={this.state.filteredEvents}
          addEvent={this.addEvent.bind(this)}
          updateEvents={this.updateEvents.bind(this)}
        />
      </div>
    );
  }
}

export default App;
