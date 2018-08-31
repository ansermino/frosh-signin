import React from 'react'
import { Message, Icon, Header } from 'semantic-ui-react'

class Student extends React.Component {
  render () {
    return (
      <div>
        <Header as='h2' color='green' icon>
          <Icon size='big' name='check circle'/>
          Success!
        </Header>
        <p>Welcome {this.props.name}! You have successfully checked in.</p>
        <p><b>Your team name is:</b></p>
        <Message positive size='huge'>
          <Message.Header>{this.props.teamName.toUpperCase()}</Message.Header>
        </Message>
        <p><b>Grab your shirt and name tag then head to your teams station!</b></p>
        <p>Make sure to keep this page open for reference.</p>
      </div>
    )
  }
}

Student.defaultProps = {
  name: "ERROR",
  teamName: "ERROR"
}

export default Student;
