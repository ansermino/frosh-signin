import React from 'react'
import Student from './Student.jsx'
import Error from './Error.jsx'
import Warning from './Warning.jsx'

class Results extends React.Component {
  render () {
    let component = null;
    switch(this.props.status) {
      case 404:
        component = <Error stateCallback={this.props.stateCallback}/>;
        break;
      case 401:
        component = <Warning stateCallback={this.props.stateCallback}/>;
        break;
      case 200:
        component = <Student name={this.props.student["name"]} teamName={this.props.student["groupName"]}/>;
        break;
      default:
        component = <Student />;
        break;
    }
    return (
      <section id="results">
        {component}
      </section>
    )
  }
}

export default Results;
