import React from 'react'
import { Message, Icon, Header } from 'semantic-ui-react'

class Error extends React.Component {
  render () {
    return (
      <div>
        <Header as='h2' color='red' icon>
          <Icon size='tiny' circular inverted name='x' color='red'/>
          Uh oh!
        </Header>
        <p>Sorry, we couldn&#39;t find a match. Please try again or speak to a registration volunteer.</p>
      </div>
    )
  }
}

export default Error;
