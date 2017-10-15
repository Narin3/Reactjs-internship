import React, { Component } from 'react';
import './App.css';
import Registration from './Registration/Registration.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        <header>
          <h1>Register Here</h1>
          </header>
        </div>
        <h3>Fill the Form</h3>
          <Registration />
      </div>
    );
  }
}

export default App;
