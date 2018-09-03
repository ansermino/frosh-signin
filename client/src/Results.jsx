import React from 'react'
import Student from './Student.jsx'
import Error from './Error.jsx'
import Warning from './Warning.jsx'
import Leader from './Leader.jsx'

class Results extends React.Component {
  render () {
    let component = null;
    if (this.props.status === 404) component = <Error stateCallback={this.props.stateCallback}/>;
    else if (this.props.status === 401) component = <Warning stateCallback={this.props.stateCallback}/>;
    else if (this.props.student.type === 'Student') component = <Student name={this.props.student["name"]} teamName={this.props.student["groupName"]}/>;
    else if (this.props.student.type === 'Leader') component = <Leader name={this.props.student["name"]} teamName={this.props.student["groupName"]} teamNumber={this.props.student["groupNumber"]}/>;
    return (
      <section id="results">
        {component}
      </section>
    )
  }
}

export default Results;
