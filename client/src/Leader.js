import React, {Component} from 'react'
import MediaQuery from 'react-responsive'

const rootDivStyle = {
    border: "5px solid #ccc",
    borderRadius: "5px",
    width: "75%",
    margin: "20px auto 20px auto"
}

const shirtSizeDivDesktopStyle = {
    width: "30%",
    height: "100%",
    display: "inline",
    float: "left"
}

const shirtSizeDivMobileStyle = {
    width: "auto",
    height: "100%",
    display: "inline",
    float: "left"
}

const infoStyle = {
    fontSize: "50px",
    color: "blue"
}

const studentInfoDivStyle = {
    width: "70%",
    height: "100%",
    display: "inline"
}

class Leader extends Component{
  constructor(props){
    super(props)
    this.props = {
      name: '',
      shirtSize: '',
      teamName: ''
    }
  }
  render() {
      return(
          <div style={rootDivStyle}>
            <MediaQuery minDeviceWidth={900}>
              <div id="shirtSize" style={shirtSizeDivDesktopStyle}>
                  <h2>Shirt Size:</h2>
                  <h3 style={infoStyle}>{this.props.shirtSize.toUpperCase()}</h3>
              </div>
              <div id="studentInfo" style={studentInfoDivStyle}>
                  <h2>Welcome {this.props.name.split(" ")[0].toUpperCase()}!</h2>
              </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={899}>
              <h2>Welcome {this.props.name.split(" ")[0].toUpperCase()}!</h2>
              <h2>Shirt Size:</h2>
              <h3 style={infoStyle}>{this.props.shirtSize.toUpperCase()}</h3>
            </MediaQuery>

          </div>
      )
  }
}

Leader.defaultProps = {
  name: "ERROR",
  email: "ERROR",
  shirtSize: "ERROR",
  teamName: "ERROR",
  teamNumber: "ERROR"
}

export default Leader;
