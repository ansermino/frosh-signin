import React, { Component } from 'react'
import logo from './logo.PNG'
import './App.css'
//import Form from './Form.jsx'
import Results from './Results.jsx'

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo} id="logo"/>
          <h1 id="title">University of Toronto CS FROSH</h1>
        </header>
        <main>
          <Results/>
        </main>
      </div>
    );
  }
}

export default App;
