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
    // TODO fetchEvents
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
