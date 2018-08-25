import React, {Component} from 'react'
import utcsLogo from './dcslogo.jpg'
import hotDog from './hotdog.gif'
import cssuLogo from './cssulogo.png'
import MediaQuery from 'react-responsive'

const divStyle = {
    backgroundColor: "#000",
    height: "auto",
    padding: "20px",
    color: "white",
}

const hotDogStyle = {
    height: "6rem"
}

const titleStyle = {
    fontSize: "50px",
    height: "20%",
    display: "block",
    marginBottom: 0
}

const titleDivStyle = {
    height: "100%",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto"
}

class Header extends Component{
    render() {
        return (
          <div>
            <MediaQuery minDeviceWidth={900}>
              <div style={divStyle}>
                  <div style={titleDivStyle}>
                      <h2 style={titleStyle}>Welcome to CS Frosh 2017!</h2>
                      <br></br>
                      <img style={hotDogStyle} src={hotDog} alt='Hotdog' />
                  </div>
              </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={899}>
              <h2 style={titleStyle}>Welcome to CS Frosh 2017!</h2>
            </MediaQuery>
          </div>
        )
    }
}

export default Header;
