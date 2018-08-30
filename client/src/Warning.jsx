import React from 'react'
import { Message, Icon, Header } from 'semantic-ui-react'

class Warning extends React.Component {
  render () {
    return (
      <div>
        <Header as='h2' color='orange' icon>
          <Icon size='big' name='exclamation circle'/>
          Oops.
        </Header>
        <p>Looks like you have already checked in. You are good to go!</p>
      </div>
    )
  }
}

export default Warning;
