import React, { Component } from 'react';
import { APIManager } from '../utils';
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
      console.log("token not found!");
      APIManager.post('https://api.eventable.com/v1/token-auth/');
    }

    console.log('found token!')
    // this.fetchEvents('https://api.eventable.com/v1/events/')
    // TODO fetchEvents
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
        console.log(res.results)

        const events = res.results;

        for (let i = 0, len = events.length; i < len; i++) {
          this.addEvent(events[i]);
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

  render() {
    return (
      <div className="App">
        <h1>Title</h1>
      </div>
    );
  }
}

export default App;
