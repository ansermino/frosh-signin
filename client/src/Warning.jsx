import React from 'react'
import { Icon, Header, Button } from 'semantic-ui-react'

class Warning extends React.Component {
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
        <Header as='h2' color='orange' icon>
          <Icon size='big' name='exclamation circle'/>
          Oops.
        </Header>
        <p>Looks like you have already checked in. You are good to go!</p>
        <Button onClick={this.handleReset}>Back</Button>
      </div>
    )
  }
}

export default Warning;
