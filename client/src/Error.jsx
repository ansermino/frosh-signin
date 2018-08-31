import React from 'react'
import { Icon, Header, Button } from 'semantic-ui-react'

class Error extends React.Component {
  constructor(props){
    super(props)
    this.handleReset = this.handleReset.bind(this)
  }
  handleReset(){
    this.props.stateCallback('search', null);
  }
  render () {
    return (
      <div>
        <Header as='h2' color='red' icon>
          <Icon size='tiny' circular inverted name='x' color='red'/>
          Uh oh!
        </Header>
        <p>Sorry, we couldn&#39;t find a match. Please try again or speak to a registration volunteer.</p>
        <Button onClick={this.handleReset}>Back</Button>
      </div>
    )
  }
}

export default Error;
