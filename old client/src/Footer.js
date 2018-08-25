import React, { Component } from 'react'

const footerStyle = {
    right: "0",
    bottom: "0",
    left: "0",
    height: "3rem",
    backgroundColor: "black",
    color: "white"
}

const textStyle = {
  paddingTop: "1rem"
}


class Footer extends Component{
    render() {
        return(
            <footer style={footerStyle}>
            <p style={textStyle}>Created with React and Material-UI.</p>
            </footer>
        )
    }
}

export default Footer;
