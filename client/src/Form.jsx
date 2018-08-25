import React from 'react';
import { Form, Input, Button, Message } from 'semantic-ui-react'

class CheckIn extends React.Component {
  constructor () {
    super()
    this.state = {value: '', buttonDisabled: false, validEmail: true}

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleTextChange (event) {
    this.setState({value: event.target.value})
  }
  handleSubmit (event) {
    if (validateEmail(this.state.value)) {
      //request from server
    } else {
      this.setState({validEmail: false})
    }
  }
  render () {
    return (
      <section id="checkin">
        <h2>Welcome to CS FROSH 2018!</h2>
        <Form error>
          <Form.Field>
            <span>Please enter the email you used to sign up</span>
            <Input icon='at' iconPosition='left' placeholder='Email'
              onChange={this.handleTextChange}/>
            <Message hidden={this.state.validEmail} error header='Invalid Email'/>
          </Form.Field>
          <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
        </Form>
      </section>
    )
  }
}

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default CheckIn;
