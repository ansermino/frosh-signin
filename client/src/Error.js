import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const failureStyle = {
    color: "red",
    fontSize: "40px"
}

const failureDivStyle = {
  paddingBottom: "1rem"
}

class Error extends Component{
  render() {
    return(
      <div style={failureDivStyle}>
          <h1 style={failureStyle}>{this.props.status} - {() => this.props.status === 404 ? "Not Found :(" : "Alread checked in"}</h1>
          <h2>{this.props.message}</h2>
          <form onSubmit={this.handleReset}>
              <RaisedButton label="Reset" onClick={this.handleReset}/>
          </form>
      </div>
    )
  }
}

export default Error;
