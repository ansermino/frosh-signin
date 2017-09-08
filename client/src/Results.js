import React, {Component} from 'react';
import Student from './Student'
import RaisedButton from 'material-ui/RaisedButton'

const successStyle = {
  color: "#42f456"
}

const failureStyle = {
  color: "red",
  fontSize: "40px"
}

const failureDivStyle = {
  paddingBottom: "1rem"
}

class Results extends Component{
  constructor(props){
    super(props)
    this.handleReset = this.handleReset.bind(this)
  }
  handleReset(){
    this.props.stateCallback('search', null);
  }
  render() {
    if(this.props.status === 404){
      return (
        <div style={failureDivStyle}>
          <h1 style={failureStyle}>404 - Not Found :(</h1>
          <h2>Uh oh! We couldn&#39;t find a match. Please try again or speak to a registration volunteer.</h2>
          <form onSubmit={this.handleReset}>
            <RaisedButton label="Reset" onClick={this.handleReset}/>
          </form>
        </div>
      )
    }
    else if(this.props.status === 401){
      return (
        <div style={failureDivStyle}>
          <h1 style={failureStyle}>401 - Already checked in</h1>
          <h2>Sorry, according to our records you've already signed in :/</h2>
          <form onSubmit={this.handleReset}>
            <RaisedButton label="Reset" onClick={this.handleReset}/>
          </form>
        </div>
      )
    }
    else{
      return (
        <div>
          <h1 style={successStyle}> Success!</h1>
          <Student name={this.props.student["name"]} shirtSize={this.props.student["shirtSize"]} teamName={this.props.student["teamName"]}/>
          <h2 style={{color: "red"}}> Keep this page open for reference!</h2>
          <h2> Grab your shirt and name tag and head to your teams station!</h2>
        </div>
      )
    }
  }
}
export default Results;
