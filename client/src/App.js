import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Results from './Results'
import Header from './Header'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Footer from './Footer'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {display: 'search', student: null, status: 404}
    }
    changeStates(newState, data, newStatus) {
        this.setState({display: newState, student: data, status: newStatus});
    }
    render() {
        if(this.state.display === 'search'){
            return (
                <MuiThemeProvider>
                <div className="App">
                    <Header />
                    <div className="content">
                        <Form stateCallback={this.changeStates.bind(this)}/>
                    </div>
                    <Footer />
                </div>
                </MuiThemeProvider>
            );
        }
        else if(this.state.display === 'results'){
            return (
                <MuiThemeProvider>
                <div className="App">
                    <Header />
                    <div className="content">
                        <Results stateCallback={this.changeStates.bind(this)} status={this.state.status} student={this.state.student} />
                    </div>
                    <Footer />
                </div>
                </MuiThemeProvider>
            )
        }
  }
}

//const changeStates = (newState) => this.setState({value: newState});



export default App;
