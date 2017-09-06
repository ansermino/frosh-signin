import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to CS Frosh 2017!</h2>
        </div>
        <div className="content">
            <Form />
        </div>
      </div>
    );
  }
}

export default App;
