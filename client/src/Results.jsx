import React from 'react'
import { Message, Icon, Header } from 'semantic-ui-react'
import Student from './Student.jsx'
import Error from './Error.jsx'
import Warning from './Warning.jsx'

class Results extends React.Component {
  render () {
    let component = null;
    switch(this.props.status) {
      case 404:
        component = <Error />;
        break;
      case 401:
        component = <Warning />;
        break;
      case 'student':
        component = <Student />
      default:
        component = <Student />;
    }

    return (
      <section id="results">
        {component}
      </section>
    )
  }
}

export default Results;
