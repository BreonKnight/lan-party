import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Wow extends Component {
  render() {
    return (
      <div>
        <p>lez</p>
        <h1>get it</h1>
      </div>
    )
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Lan Party</h2>
        </div>
        <Wow/>
      </div>
    );
  }
}

export default App;
