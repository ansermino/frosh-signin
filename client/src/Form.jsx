import React from 'react';
import SERVER_URL from './Constants.jsx'
import { Form as UIForm, Input, Button, Message } from 'semantic-ui-react'

class Form extends React.Component {
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
    event.preventDefault()
    if (validateEmail(this.state.value)) {
      this.setState({buttonDisabled: true})
      getStudent(this.state.value).then(
          (data) => this.props.stateCallback('results', JSON.parse(data.response), data.status),
          (err) => this.setState({buttonDisabled: false})
      );
    }
    else {
      this.setState({validEmail: false})
    }
  }
  render () {
    return (
      <section id="form">
        <h2>Hello, Welcome to CS FROSH 2018!</h2>
        <UIForm error>
          <UIForm.Field>
            <span className="description">Please enter the email you used to sign up</span>
            <Input icon='at' iconPosition='left' placeholder='Email'
              onChange={this.handleTextChange}/>
            <Message hidden={this.state.validEmail} error header='Invalid Email'/>
          </UIForm.Field>
          <Button disabled={this.state.buttonDisabled} onClick={this.handleSubmit} type='submit'>Submit</Button>
        </UIForm>
      </section>
    )
  }
}

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const getStudent = (email) => new Promise((resolves, rejects) => {
  const url = 'http://' + SERVER_URL + '/search/' + email
  console.log('Fetching: ' + url)
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = () => resolves(request)
  request.onerror = (err) => rejects(err)
  request.send()
})

export default Form;
