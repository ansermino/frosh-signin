import React, { Component } from 'react'
import logo from './logo.PNG'
import './App.css'
import Form from './Form.jsx'
import Results from './Results.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {display: 'search', student: null, status: 404}
  }
  changeStates(newState, data, newStatus) {
    this.setState({display: newState, student: (data ? data.student : null), status: newStatus})
  }
  render() {
    return (
      <div>
        <header>
          <img src={logo} id="logo" alt="logo"/>
          <h1 id="title">University of Toronto CS FROSH</h1>
        </header>
        <main>
          {(this.state.display === 'results') ?
            <Results stateCallback={this.changeStates.bind(this)} status={this.state.status} student={this.state.student}/> :
            <Form stateCallback={this.changeStates.bind(this)}/>
          }
        </main>
      </div>
    );
  }
}

export default App;
