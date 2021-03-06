import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import MediaQuery from 'react-responsive'
import URL from './Constants.jsx'

const textBoxDesktopStyle = {
    width: "50%"
}

const textBoxMobileStyle = {
  width: "75%"
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', buttonDisabled: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
      event.preventDefault();
      if(this.state.value === '') return;
      this.setState({buttonDisabled: true})
      getStudentData(this.state.value).then(
          (data) => this.props.stateCallback('results', JSON.parse(data.response), data.status),
          (err) => console.log(new Error(err))
      );
  }
  render() {
    return (
      <div>
        <MediaQuery minDeviceWidth={900}>
          <form onSubmit={this.handleSubmit}>
            <h3>Here you can check-in for the event.</h3>
            <h2>Please enter the email you used when you signed up!</h2>
            <TextField style={textBoxDesktopStyle} floatingLabelText="Please enter the email you used when you signed up!" value={this.state.value} onChange={this.handleChange}/>
            <br></br>
            <RaisedButton className="bottomButton" label="Submit" onClick={this.handleSubmit}/>
          </form>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={899}>
          <form onSubmit={this.handleSubmit}>
            <h3>Here you can check-in for the event.</h3>
            <h2>Please enter the email you used when you signed up!</h2>
            <TextField style={textBoxMobileStyle} floatingLabelText="Email used when you signed up" value={this.state.value} onChange={this.handleChange}/>
            <br></br>
            <RaisedButton className="bottomButton" label="Submit" onClick={this.handleSubmit} disabled={this.state.buttonDisabled}/>
          </form>
        </MediaQuery>
      </div>
    );
  }
}

const getStudentData = (query) => new Promise((resolves, rejects) => {
    const url = 'http://' + URL + '/search/' + query
    console.log('fetching: ' + url)

    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.onload = () => resolves(request)
    request.onerror = (err) => rejects(err)
    request.send()
})

// Need resolve/rehect funcs

export default Form;
