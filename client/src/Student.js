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

class Student extends Component{
    render() {
        return(
            <div style={rootDivStyle}>
              <MediaQuery minDeviceWidth={900}>
                <div id="shirtSize" style={shirtSizeDivDesktopStyle}>
                    <h2>Shirt Size:</h2>
                    <h3 style={infoStyle}>{this.props.shirtSize.toUpperCase()}</h3>
                </div>
                <div id="studentInfo" style={studentInfoDivStyle}>
                    <h2>Welcome {this.props.name.split(" ")[0].toUpperCase()}! You are on team:</h2>
                    <h3 style={infoStyle}>{this.props.teamName.toUpperCase()}</h3>
                </div>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={899}>
                <h2>Welcome {this.props.name.split(" ")[0].toUpperCase()}! You are on team:</h2>
                <div id="studentInfo" style={studentInfoDivStyle}>
                    <h3 style={infoStyle}>{this.props.teamName.toUpperCase()}</h3>
                </div>
                <h2>Shirt Size:</h2>
                <h3 style={infoStyle}>{this.props.shirtSize.toUpperCase()}</h3>
              </MediaQuery>

            </div>
        )
    }
}

export default Student;
