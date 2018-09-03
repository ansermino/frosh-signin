import React from 'react'
import { Message, Icon, Header } from 'semantic-ui-react'

class Leader extends React.Component {
  render () {
    return (
      <div>
        <Header as='h2' color='green' icon>
          <Icon size='big' name='check circle'/>
          Success!
        </Header>
        <p>Welcome {this.props.name}! You have successfully checked in.</p>
        <p><b>Your team name and number is:</b></p>
        <Message positive size='huge'>
          <Message.Header>#{this.props.teamNumber} - {this.props.teamName.toUpperCase()}</Message.Header>
        </Message>
        <p><b>Grab your shirt, name tag, and group sign then find your station!</b></p>
        <p><b>There will be a leader recap session in the atrium at 10:00</b></p>
        <p>Make sure to keep this page open for reference.</p>
      </div>
    )
  }
}

Leader.defaultProps = {
  name: "ERROR",
  teamName: "ERROR",
  teamNumber: "ERROR"
}

export default Leader;
