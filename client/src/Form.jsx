import React from 'react';
import SERVER_URL from './Constants.jsx'
class Form extends Component {
  render () {

  }
}

const getStudent = (email) => {
  const url = 'http://' + SERVER_URL + '/search/' + email
  console.log('Fetching: ' + url)
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = () => resolves(request)
  request.onerror = (err) => rejects(err)
  request.send()
}

export default Form;
